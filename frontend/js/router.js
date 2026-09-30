/* Client-side navigation for the existing multi-page frontend. Loads local HTML only. */
(function () {
  const cache = new Map();
  let busy = false;
  let pending = null;

  function pageFile(url) {
    const name = (url.pathname || "").split("/").pop();
    return name || "index.html";
  }

  function displayedUrl() {
    if (window.location.protocol === "file:") {
      const match = window.location.hash.match(/^#\/(.+)$/);
      if (match) {
        try { return new URL(match[1], window.location.href); } catch (error) { /* use the real URL */ }
      }
    }
    return new URL(window.location.href);
  }

  function activeFile() {
    return document.body.dataset.mfPage || pageFile(displayedUrl());
  }

  function sameDocument(url) {
    return pageFile(url) === activeFile();
  }

  function isAppLink(url) {
    if (url.protocol === "mailto:" || url.protocol === "tel:" || url.protocol === "javascript:") return false;
    const file = pageFile(url);
    const page = file === "" || /\.html$/i.test(file) || url.pathname.endsWith("/");
    if (!page) return false;
    if (url.protocol === "file:") return true;
    return url.origin === window.location.origin && (url.protocol === "http:" || url.protocol === "https:");
  }

  function closeMenu() {
    document.querySelector(".site-header")?.classList.remove("menu-open");
    document.querySelector(".site-header .nav")?.classList.remove("is-open");
    document.querySelector(".nav-overlay")?.classList.remove("is-open");
    const toggle = document.querySelector(".nav-toggle");
    if (toggle) {
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    document.body.classList.remove("nav-lock");
  }

  function markNav() {
    const file = activeFile();
    document.querySelectorAll(".nav-list a, .footer-links a").forEach(function (link) {
      let linkUrl;
      try { linkUrl = new URL(link.getAttribute("href"), window.location.href); } catch (error) { return; }
      const on = pageFile(linkUrl) === file && !linkUrl.hash;
      if (link.closest(".nav-list")) {
        link.classList.toggle("active", on);
        if (on) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      }
    });
  }

  function shellKind(root) {
    if (!root) return "other";
    if (root.querySelector(".dash")) return "dash";
    if (root.querySelector("main.auth-page")) return "auth";
    if (root.querySelector(".site-header")) return "site";
    return "other";
  }

  function keptNode(node) {
    if (!node || !node.tagName) return false;
    if (node.tagName === "SCRIPT") return true;
    if (node.tagName === "FOOTER") return true;
    if (!node.classList) return false;
    return node.classList.contains("global-faq") || node.classList.contains("ai-assistant") || node.classList.contains("site-header") || node.classList.contains("skip-link") || node.classList.contains("back-to-top");
  }

  function shellNodes(root) {
    return Array.from(root.children).filter(function (node) {
      return !keptNode(node);
    });
  }

  function replaceShell(doc, keepChrome) {
    const faq = document.querySelector(".global-faq");
    const assistant = document.querySelector(".ai-assistant");
    if (keepChrome) {
      shellNodes(document.body).forEach(function (node) { node.remove(); });
      const footer = document.querySelector("footer");
      const anchor = footer || document.body.querySelector("script") || faq;
      shellNodes(doc.body).forEach(function (node) {
        document.body.insertBefore(document.importNode(node, true), anchor);
      });
      const nextSkip = doc.body.querySelector(".skip-link");
      const skip = document.querySelector(".skip-link");
      if (skip && nextSkip) skip.setAttribute("href", nextSkip.getAttribute("href") || "#");
      if (faq) document.body.appendChild(faq);
      if (assistant) document.body.appendChild(assistant);
      return;
    }
    const keepFaq = faq;
    Array.from(document.body.children).forEach(function (node) {
      if (node.tagName === "SCRIPT") return;
      if (node.classList && (node.classList.contains("global-faq") || node.classList.contains("ai-assistant"))) return;
      node.remove();
    });
    const anchor = document.body.querySelector("script") || keepFaq;
    Array.from(doc.body.children).forEach(function (node) {
      if (node.tagName === "SCRIPT") return;
      if (node.classList && (node.classList.contains("global-faq") || node.classList.contains("ai-assistant"))) return;
      document.body.insertBefore(document.importNode(node, true), anchor);
    });
    if (keepFaq) document.body.appendChild(keepFaq);
    if (assistant) document.body.appendChild(assistant);
  }

  function showMissing() {
    const t = window.mfT || function (_key, fallback) { return fallback; };
    const main = document.querySelector("main");
    const html = '<section class="section"><div class="container"><h1 data-i18n="page_missing">' + t("page_missing", "Page not found") + '</h1><p data-i18n="page_missing_text">' + t("page_missing_text", "That page does not exist.") + '</p><a class="btn btn-primary" href="index.html" data-i18n="nav_home">' + t("nav_home", "Home") + '</a></div></section>';
    if (main) main.innerHTML = html;
    else document.body.insertAdjacentHTML("afterbegin", "<main>" + html + "</main>");
    if (typeof window.applyTranslations === "function") window.applyTranslations();
  }

  function ensureScript(src) {
    if (document.querySelector('script[src="' + src + '"]')) return Promise.resolve();
    return new Promise(function (resolve) {
      const script = document.createElement("script");
      script.src = src;
      script.onload = function () { resolve(); };
      script.onerror = function () { resolve(); };
      document.body.appendChild(script);
    });
  }

  function showHash() {
    const hash = displayedUrl().hash;
    if (!hash || /^#\//.test(hash)) {
      window.scrollTo(0, 0);
      return;
    }
    const target = document.getElementById(hash.slice(1));
    if (target && target.classList.contains("dash-view")) {
      document.querySelectorAll(".dash-view").forEach(function (view) {
        view.classList.toggle("is-active", view === target);
      });
      document.querySelectorAll("[data-view-target]").forEach(function (button) {
        button.classList.toggle("is-active", button.getAttribute("data-view-target") === target.id);
      });
      const title = document.querySelector(".dash-title");
      const active = document.querySelector("[data-view-target].is-active");
      if (title && active) title.textContent = active.getAttribute("data-title") || title.textContent;
    }
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }

  function bootPage(keepChrome) {
    const bell = window.initNotifications;
    return ensureScript("js/lms.js").then(function () {
      return ensureScript("js/course-details.js");
    }).then(function () {
      if (bell) window.initNotifications = bell;
      if (!keepChrome) {
        if (typeof initNavigation === "function") initNavigation();
        if (typeof initMobileMenu === "function") initMobileMenu();
        if (typeof initThemeSwitcher === "function") initThemeSwitcher();
        if (typeof initLanguageSwitcher === "function") initLanguageSwitcher();
      }
      if (typeof initSearch === "function") initSearch();
      if (typeof initCourseFilter === "function") initCourseFilter();
      if (typeof initCourseSlider === "function") initCourseSlider();
      if (typeof initTestimonials === "function") initTestimonials();
      if (typeof initAnimations === "function") initAnimations();
      if (typeof initCoursePage === "function") initCoursePage();
      if (typeof initModals === "function") initModals();
      if (typeof initTeachers === "function") initTeachers();
      if (typeof initDashboard === "function") initDashboard();
      if (typeof initForms === "function") initForms();
      if (typeof initCourseCatalog === "function") initCourseCatalog();
      if (typeof initLearningPaths === "function") initLearningPaths();
      if (typeof initEvents === "function") initEvents();
      if (typeof initBlog === "function") initBlog();
      if (typeof initInstructorCards === "function") initInstructorCards();
      if (typeof initNoticeClicks === "function") initNoticeClicks();
      if (typeof initFAQ === "function") initFAQ();
      if (typeof initSearchResults === "function") initSearchResults();
      if (typeof initCourseCurriculum === "function") initCourseCurriculum();
      if (typeof initCourseTabs === "function") initCourseTabs();
      if (typeof initCoursePreview === "function") initCoursePreview();
      if (typeof initCourseFAQ === "function") initCourseFAQ();
      if (typeof initCourseReviewModal === "function") initCourseReviewModal();
      if (typeof initCourseActions === "function") initCourseActions();
      if (typeof applyTheme === "function") applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
      if (typeof window.initNotifications === "function") window.initNotifications();
      if (typeof window.initCertificates === "function") window.initCertificates();
      if (typeof window.initDemoAssessment === "function") window.initDemoAssessment();
      if (typeof window.initAIAssistant === "function") window.initAIAssistant();
      if (typeof window.applyTranslations === "function") window.applyTranslations();
      if (pageFile(displayedUrl()) === "course-details.html" && typeof renderCourseDetail === "function") renderCourseDetail();
      showHash();
      markNav();
    });
  }

  function applyUrlSearch() {
    const params = new URLSearchParams(displayedUrl().search);
    const query = (params.get("search") || params.get("q") || "").trim();
    document.querySelectorAll(".header-search input").forEach(function (input) { input.value = query; });
    document.querySelectorAll(".catalog-search, .lms-search").forEach(function (input) {
      input.value = query;
      input.dispatchEvent(new Event("input", { bubbles: true }));
    });
    if (typeof initSearchResults === "function") initSearchResults();
    if (pageFile(displayedUrl()) === "course-details.html" && typeof renderCourseDetail === "function") renderCourseDetail();
    if (pageFile(displayedUrl()) === "certificate.html" && typeof renderCertificatePage === "function") renderCertificatePage();
    markNav();
  }

  function readPage(url) {
    const file = pageFile(url);
    const bundled = window.MF_PAGES && window.MF_PAGES[file];
    if (window.location.protocol === "file:" && bundled) return Promise.resolve(bundled);
    const key = url.pathname;
    if (cache.has(key)) return Promise.resolve(cache.get(key));
    return fetch(key).then(function (response) {
      if (!response.ok) throw new Error("missing");
      return response.text();
    }).then(function (html) {
      cache.set(key, html);
      return html;
    }).catch(function (error) {
      if (bundled) return bundled;
      throw error;
    });
  }

  function loadIntoPage(url) {
    const main = document.querySelector("main");
    if (main) main.classList.add("is-swapping");
    return readPage(url).then(function (html) {
      const doc = new DOMParser().parseFromString(html, "text/html");
      if (!doc.body) throw new Error("missing");
      const keepChrome = shellKind(document.body) === "site" && shellKind(doc.body) === "site";
      replaceShell(doc, keepChrome);
      document.body.dataset.mfPage = pageFile(url);
      const title = doc.querySelector("title");
      if (title) document.title = title.textContent;
      return bootPage(keepChrome);
    }).catch(function () {
      showMissing();
    }).then(function () {
      document.querySelector("main")?.classList.remove("is-swapping");
      closeMenu();
    });
  }

  function remember(url, fromPop) {
    if (fromPop) return;
    const next = url.pathname + url.search + url.hash;
    try {
      history.pushState({ mf: 1 }, "", next);
      return;
    } catch (error) { /* file:// cannot change the path */ }
    const route = "#/" + pageFile(url) + url.search + url.hash;
    try { history.pushState({ mf: 1 }, "", window.location.pathname + window.location.search + route); } catch (ignore) { /* stay on the current URL */ }
  }

  function navigate(href, fromPop) {
    let url;
    try { url = new URL(href, window.location.href); } catch (error) { return; }
    if (!isAppLink(url)) {
      window.location.href = url.href;
      return;
    }
    if (!fromPop && url.pathname === displayedUrl().pathname && url.search === displayedUrl().search && url.hash && !/^#\//.test(url.hash)) {
      const target = document.getElementById(url.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        remember(url, false);
      }
      closeMenu();
      return;
    }
    if (!fromPop && sameDocument(url)) {
      remember(url, false);
      document.body.dataset.mfPage = pageFile(url);
      applyUrlSearch();
      if (url.hash && !/^#\//.test(url.hash)) {
        const target = document.getElementById(url.hash.slice(1));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }
      closeMenu();
      return;
    }
    if (busy) {
      pending = url.pathname + url.search + url.hash;
      return;
    }
    remember(url, fromPop);
    busy = true;
    loadIntoPage(url).then(function () {
      busy = false;
      if (!pending) return;
      const next = pending;
      pending = null;
      navigate(next, false);
    });
  }

  document.addEventListener("click", function (event) {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest("a[href]");
    if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
    let url;
    try { url = new URL(link.href, window.location.href); } catch (error) { return; }
    if (!isAppLink(url)) return;
    if (sameDocument(url) && url.hash && !url.search && !/^#\//.test(url.hash)) {
      const target = document.getElementById(url.hash.slice(1));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        closeMenu();
      }
      return;
    }
    event.preventDefault();
    navigate(url.pathname + url.search + url.hash, false);
  }, true);

  document.addEventListener("submit", function (event) {
    const form = event.target;
    if (!form || !form.classList || !form.classList.contains("header-search")) return;
    event.preventDefault();
    const data = new FormData(form);
    const query = (data.get("q") || "").toString().trim();
    const action = form.getAttribute("action") || "courses.html";
    const url = new URL(action, window.location.href);
    if (query) url.searchParams.set("q", query);
    else url.searchParams.delete("q");
    navigate(url.pathname + url.search, false);
  }, true);

  window.addEventListener("popstate", function () {
    const url = displayedUrl();
    if (pageFile(url) === activeFile()) {
      applyUrlSearch();
      showHash();
      return;
    }
    loadIntoPage(url);
  });

  document.body.dataset.mfPage = pageFile(displayedUrl());
  if (window.location.protocol === "file:" && pageFile(displayedUrl()) !== pageFile(window.location)) {
    loadIntoPage(displayedUrl());
  }

  window.mfNavigate = function (href) { navigate(href, false); };
})();
