function initCourseCatalog() {
  const grid = document.querySelector("[data-lms-catalog]");
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll(".course-card"));
  const empty = document.querySelector(".lms-empty");
  const pager = document.querySelector("[data-lms-pager]");
  const perPage = 4;
  let page = 1;

  function value(name) {
    const field = document.querySelector("[data-lms-" + name + "]");
    return field ? field.value : "all";
  }

  function apply() {
    const query = (document.querySelector(".lms-search")?.value || "").trim().toLowerCase();
    const level = value("level");
    const language = value("language");
    const duration = value("duration");
    const price = value("price");
    const rating = value("rating");
    let list = cards.filter(function (card) {
      const weeks = Number(card.dataset.weeks || 0);
      const cost = Number(card.dataset.cost || 0);
      const stars = Number(card.dataset.stars || 0);
      const text = (card.dataset.search || "").toLowerCase();
      if (query && !text.includes(query)) return false;
      if (level !== "all" && card.dataset.level !== level) return false;
      if (language !== "all" && card.dataset.language !== language) return false;
      if (duration === "short" && weeks > 8) return false;
      if (duration === "long" && weeks <= 8) return false;
      if (price === "under50" && cost >= 50) return false;
      if (price === "under200" && cost >= 200) return false;
      if (rating === "top" && stars < 4.8) return false;
      return true;
    });
    const sort = value("sort");
    list.sort(function (a, b) {
      if (sort === "price") return Number(a.dataset.cost) - Number(b.dataset.cost);
      if (sort === "rating") return Number(b.dataset.stars) - Number(a.dataset.stars);
      return (a.dataset.search || "").localeCompare(b.dataset.search || "");
    });
    cards.forEach(function (card) { grid.appendChild(card); });
    list.forEach(function (card) { grid.appendChild(card); });
    const pages = Math.max(1, Math.ceil(list.length / perPage));
    if (page > pages) page = 1;
    list.forEach(function (card, index) {
      const start = (page - 1) * perPage;
      card.hidden = index < start || index >= start + perPage;
    });
    cards.forEach(function (card) {
      if (!list.includes(card)) card.hidden = true;
    });
    if (empty) empty.hidden = list.length !== 0;
    if (!pager) return;
    pager.innerHTML = "";
    for (let i = 1; i <= pages; i += 1) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "filter-btn" + (i === page ? " is-active" : "");
      button.textContent = String(i);
      button.addEventListener("click", function () {
        page = i;
        apply();
      });
      pager.appendChild(button);
    }
  }

  document.querySelectorAll("[data-lms-level], [data-lms-language], [data-lms-duration], [data-lms-price], [data-lms-rating], [data-lms-sort], .lms-search").forEach(function (field) {
    field.addEventListener("input", function () {
      page = 1;
      apply();
    });
    field.addEventListener("change", function () {
      page = 1;
      apply();
    });
  });
  apply();
}

function initLearningPaths() {
  const wrap = document.querySelector("[data-learning-paths]");
  if (!wrap) return;
  wrap.querySelectorAll("[data-path]").forEach(function (button) {
    button.addEventListener("click", function () {
      const level = button.dataset.path;
      wrap.querySelectorAll("[data-path]").forEach(function (item) {
        item.classList.toggle("is-active", item === button);
      });
      wrap.querySelectorAll("[data-path-card]").forEach(function (card) {
        card.hidden = level !== "all" && card.dataset.pathCard !== level;
      });
    });
  });
}

function initEvents() {
  const list = document.querySelector("[data-events]");
  if (!list) return;
  document.querySelectorAll("[data-event-filter]").forEach(function (button) {
    button.addEventListener("click", function () {
      const mode = button.dataset.eventFilter;
      document.querySelectorAll("[data-event-filter]").forEach(function (item) {
        item.classList.toggle("is-active", item === button);
      });
      list.querySelectorAll("[data-event]").forEach(function (card) {
        card.hidden = mode !== "all" && card.dataset.event !== mode;
      });
    });
  });
}

function initBlog() {
  const grid = document.querySelector("[data-blog]");
  if (!grid) return;
  const search = document.querySelector(".blog-search");
  function apply() {
    const query = (search?.value || "").trim().toLowerCase();
    const active = document.querySelector("[data-blog-filter].is-active")?.dataset.blogFilter || "all";
    let visible = 0;
    grid.querySelectorAll("[data-article]").forEach(function (card) {
      const text = (card.dataset.article || "").toLowerCase();
      const topic = card.dataset.topic;
      const show = (active === "all" || topic === active) && (!query || text.includes(query));
      card.hidden = !show;
      if (show) visible += 1;
    });
    const empty = document.querySelector(".blog-empty");
    if (empty) empty.hidden = visible !== 0;
  }
  document.querySelectorAll("[data-blog-filter]").forEach(function (button) {
    button.addEventListener("click", function () {
      document.querySelectorAll("[data-blog-filter]").forEach(function (item) {
        item.classList.toggle("is-active", item === button);
      });
      apply();
    });
  });
  search?.addEventListener("input", apply);
}

function initInstructorCards() {
  const list = document.querySelector("[data-instructors]");
  if (!list) return;
  const search = document.querySelector(".instructor-search");
  search?.addEventListener("input", function () {
    const query = search.value.trim().toLowerCase();
    list.querySelectorAll("[data-instructor]").forEach(function (card) {
      card.hidden = query && !(card.dataset.instructor || "").includes(query);
    });
  });
}

function initNotifications() {
  const list = document.querySelector("[data-notifications]");
  if (!list) return;
  list.querySelectorAll("[data-notice]").forEach(function (item) {
    item.addEventListener("click", function () {
      item.classList.remove("is-unread");
    });
  });
}

function initFAQ() {
  const root = document.querySelector("[data-lms-faq]");
  if (!root) return;
  root.querySelectorAll(".course-faq-toggle").forEach(function (button) {
    button.addEventListener("click", function () {
      const item = button.closest(".course-faq-item");
      const open = item.classList.contains("is-open");
      root.querySelectorAll(".course-faq-item").forEach(function (entry) {
        entry.classList.remove("is-open");
        entry.querySelector(".course-faq-toggle")?.setAttribute("aria-expanded", "false");
      });
      if (!open) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
}

function initSearchResults() {
  const root = document.querySelector("[data-search-results]");
  if (!root) return;
  const params = new URLSearchParams(window.location.search);
  const query = (params.get("q") || "").trim().toLowerCase();
  const label = document.querySelector("[data-search-query]");
  if (label) label.textContent = query || (window.mfText ? window.mfText("all courses") : "all courses");
  const input = document.querySelector(".header-search input");
  if (input && query) input.value = query;
  let visible = 0;
  root.querySelectorAll("[data-result]").forEach(function (card) {
    const show = !query || (card.dataset.result || "").toLowerCase().includes(query);
    card.hidden = !show;
    if (show) visible += 1;
  });
  const count = document.querySelector("[data-result-count]");
  if (count) count.textContent = String(visible);
  const empty = document.querySelector(".search-empty");
  if (empty) empty.hidden = visible !== 0;
}

document.addEventListener("DOMContentLoaded", function () {
  initCourseCatalog();
  initLearningPaths();
  initEvents();
  initBlog();
  initInstructorCards();
  initNotifications();
  initFAQ();
  initSearchResults();
});
