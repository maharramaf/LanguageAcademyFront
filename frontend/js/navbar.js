// 03. Header / Navigation
function initNavigation() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  function onScroll() {
    header.classList.toggle("is-stuck", window.scrollY > 8);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// 04. Mobile Menu
function initMobileMenu() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-header .nav");
  const overlay = document.querySelector(".nav-overlay");
  if (!toggle || !nav) return;

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    overlay?.classList.toggle("is-open", open);
    header?.classList.toggle("menu-open", open);
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open
      ? (window.mfT ? window.mfT("close_menu", "Close menu") : "Close menu")
      : (window.mfT ? window.mfT("open_menu", "Open menu") : "Open menu"));
    document.body.classList.toggle("nav-lock", open);
  }

  toggle.addEventListener("click", function () {
    setMenu(!nav.classList.contains("is-open"));
  });

  overlay?.addEventListener("click", function () {
    setMenu(false);
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setMenu(false);
  });
}
