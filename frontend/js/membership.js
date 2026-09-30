/* Student Free / Premium demo. Plan key: mf-membership. No payment provider. */
const MF_MEMBER_KEY = "mf-membership";
const MF_PREMIUM_PRICE = 49;

function planText(key, fallback) {
  if (typeof window.mfT === "function") return window.mfT(key, fallback || key);
  return fallback || key;
}

function readMembership() {
  try {
    const saved = JSON.parse(localStorage.getItem(MF_MEMBER_KEY) || "");
    if (saved && (saved.plan === "free" || saved.plan === "premium")) return saved;
  } catch (error) { /* use the free plan */ }
  return { plan: "free", status: "active", startedAt: null, expiresAt: null };
}

function writeMembership(record) {
  try { localStorage.setItem(MF_MEMBER_KEY, JSON.stringify(record)); } catch (error) { /* ignore */ }
}

function mfIsPremium() {
  return readMembership().plan === "premium";
}

function courseAccess(slug) {
  const course = window.courses && window.courses[slug];
  return course && course.access === "premium" ? "premium" : "free";
}

function pushPlanNotice(id, titleKey, messageKey) {
  if (typeof mfNotifyItems === "undefined") return;
  if (mfNotifyItems.some(function (item) { return String(item.id) === id; })) return;
  mfNotifyItems.unshift({
    id: id,
    type: "announcement",
    titleKey: titleKey,
    messageKey: messageKey,
    timeKey: "time_just_now",
    href: "dashboard.html#plans-section",
    read: false,
    extra: true
  });
  if (typeof saveNotificationState === "function") saveNotificationState();
  if (typeof renderNotifications === "function") renderNotifications();
}

function mfActivatePremium() {
  if (mfIsPremium()) return readMembership();
  const start = new Date();
  const end = new Date(start.getTime());
  end.setMonth(end.getMonth() + 1);
  const record = { plan: "premium", status: "active", startedAt: start.toISOString(), expiresAt: end.toISOString() };
  writeMembership(record);
  pushPlanNotice("plan-active", "plan_note_active", "plan_note_active_text");
  pushPlanNotice("plan-unlocked", "plan_note_unlocked", "plan_note_unlocked_text");
  document.dispatchEvent(new CustomEvent("mf-membership"));
  initMembership();
  return record;
}

function upgradeLink() {
  return '<a class="btn btn-primary" href="checkout.html?plan=premium">' + planText("plan_upgrade", "Upgrade to Premium") + '</a>';
}

function lockCard(titleKey, textKey) {
  return '<section class="panel plan-lock"><i class="bi bi-lock" aria-hidden="true"></i><h3>' + planText(titleKey, titleKey) + '</h3><p>' + planText(textKey, textKey) + '</p>' + upgradeLink() + '</section>';
}

function renderPlanCard() {
  const premium = mfIsPremium();
  if (!premium) {
    return '<section class="panel plan-card"><p class="eyebrow">' + planText("plan_free", "Free Plan") + '</p><h2>' + planText("plan_free", "Free Plan") + '</h2><p>' + planText("plan_free_lead", "You're currently using the Free plan.") + '</p>' + upgradeLink() + '</section>';
  }
  return '<section class="panel plan-card is-premium"><p class="eyebrow">⭐ ' + planText("plan_premium", "Premium") + '</p><h2>' + planText("plan_premium", "Premium") + '</h2><p>' + planText("plan_premium_lead", "All premium features are unlocked.") + '</p><a class="btn btn-outline" href="dashboard.html#plans-section" data-open-plans>' + planText("plan_manage", "Manage Plan") + '</a></section>';
}

function renderContinue() {
  return '<section class="panel plan-continue"><img src="images/course-beginner.jpg" alt=""><div><p class="eyebrow">' + planText("plan_continue", "Continue learning") + '</p><h3>' + planText("course_en_beginner", "English Beginner") + '</h3><p>' + planText("plan_current_lesson", "Current lesson") + ': ' + planText("learn_l2", "Listening video") + '</p><div class="progress" aria-hidden="true"><span style="width:40%"></span></div><p>40%</p><a class="btn btn-primary btn-sm" href="learn.html">' + planText("learn_continue", "Continue learning") + '</a></div></section>';
}

function renderStreak() {
  if (!mfIsPremium()) return lockCard("plan_streak", "plan_streak_lock");
  const days = [1, 1, 1, 1, 0, 1, 1];
  const bars = days.map(function (on) { return '<span class="' + (on ? "is-on" : "") + '"></span>'; }).join("");
  return '<section class="panel"><h3>' + planText("plan_streak", "Learning Streak") + '</h3><p class="plan-metric">7 <small>' + planText("plan_days", "Days") + '</small></p><p>' + planText("plan_longest", "Longest streak") + ': 12</p><div class="plan-week" aria-hidden="true">' + bars + '</div></section>';
}

function renderAnalytics() {
  const basic = '<section class="panel"><h3>' + planText("plan_progress", "Learning Progress") + '</h3><ul class="plan-metrics"><li><span>' + planText("plan_completion", "Overall completion") + '</span><strong>65%</strong></li><li><span>' + planText("plan_quiz_avg", "Quiz average") + '</span><strong>8/10</strong></li><li><span>' + planText("plan_lessons_done", "Completed lessons") + '</span><strong>21</strong></li><li><span>' + planText("plan_hours", "Learning hours") + '</span><strong>14</strong></li></ul><div class="progress" aria-hidden="true"><span style="width:65%"></span></div></section>';
  if (!mfIsPremium()) return basic + lockCard("plan_analytics", "plan_analytics_lock");
  return basic + '<section class="panel"><h3>' + planText("plan_analytics", "Advanced Analytics") + '</h3><p>' + planText("plan_active_courses", "Active courses") + ': 3</p><div class="progress" aria-hidden="true"><span style="width:62%"></span></div><p>IELTS · 62%</p><div class="progress" aria-hidden="true"><span style="width:40%"></span></div><p>' + planText("course_en_beginner", "English Beginner") + ' · 40%</p></section>';
}

function renderBadges() {
  const items = [
    ["plan_badge_first", true],
    ["plan_badge_quiz", true],
    ["plan_badge_done", true],
    ["plan_badge_master", mfIsPremium()],
    ["plan_badge_streak", mfIsPremium()]
  ];
  return '<section class="panel"><h3>' + planText("plan_achievements", "Achievements") + '</h3><div class="plan-badges">' + items.map(function (item) {
    return '<span class="plan-badge-item' + (item[1] ? " is-on" : "") + '">' + (item[1] ? "🏆" : "🔒") + " " + planText(item[0], item[0]) + '</span>';
  }).join("") + '</div></section>';
}

function renderCalendar() {
  if (!mfIsPremium()) return lockCard("plan_calendar", "plan_calendar_lock");
  const events = ["plan_event_lesson", "plan_event_quiz", "plan_event_study", "plan_event_live"];
  return '<section class="panel"><h3>' + planText("plan_calendar", "Learning Calendar") + '</h3><ul class="plan-calendar">' + events.map(function (key) {
    return '<li>' + planText(key, key) + '</li>';
  }).join("") + '</ul></section>';
}

function renderHome() {
  const root = document.querySelector("[data-student-membership]");
  if (!root) return;
  root.innerHTML = '<div class="plan-grid">' + renderPlanCard() + renderContinue() + renderStreak() + renderAnalytics() + renderBadges() + renderCalendar() + '</div>';
}

function renderMyPlan() {
  const root = document.querySelector("[data-my-plan]");
  if (!root) return;
  root.innerHTML = '<p class="plan-inline">' + (mfIsPremium() ? "⭐ " + planText("plan_premium", "Premium") : planText("plan_free", "Free Plan")) + '</p>';
  document.querySelectorAll(".mini-course[data-access='premium']").forEach(function (card) {
    if (card.querySelector(".plan-badge")) return;
    const badge = document.createElement("span");
    badge.className = "plan-badge is-premium";
    badge.textContent = planText("plan_badge_premium", "Premium");
    card.appendChild(badge);
  });
}

function comparisonRow(label, free, premium) {
  const mark = function (on) { return on ? "✓" : "—"; };
  return '<tr><th scope="row">' + planText(label, label) + '</th><td>' + mark(free) + '</td><td>' + mark(premium) + '</td></tr>';
}

function renderPlans() {
  const root = document.querySelector("[data-plans]");
  if (!root) return;
  const record = readMembership();
  const price = typeof window.formatPrice === "function" ? window.formatPrice(MF_PREMIUM_PRICE) : "₼49";
  const manage = mfIsPremium()
    ? '<section class="panel plan-card is-premium"><h2>⭐ ' + planText("plan_premium", "Premium") + '</h2><p>' + planText("plan_status", "Status") + ': ' + planText("plan_active", "Active") + '</p><p>' + planText("plan_price", "Price") + ': ' + price + ' / ' + planText("plan_month", "month") + '</p><p>' + planText("plan_next", "Next billing date") + ': ' + (record.expiresAt ? new Date(record.expiresAt).toLocaleDateString() : "—") + '</p></section>'
    : "";
  root.innerHTML = manage +
    '<div class="plan-offers"><section class="panel"><h2>' + planText("plan_free", "Free Plan") + '</h2><p class="plan-metric">' + freePriceLabel() + '</p></section><section class="panel plan-card is-premium"><h2>⭐ ' + planText("plan_premium", "Premium") + '</h2><p class="plan-metric">' + price + '</p><p>' + planText("plan_per_month", "per month") + '</p>' + (mfIsPremium() ? '<p>' + planText("plan_active", "Active") + '</p>' : upgradeLink()) + '</section></div>' +
    '<div class="table-wrap"><table class="data-table plan-table"><thead><tr><th>' + planText("plan_feature", "Feature") + '</th><th>' + planText("plan_free", "Free") + '</th><th>' + planText("plan_premium", "Premium") + '</th></tr></thead><tbody>' +
      comparisonRow("plan_row_free_courses", true, true) +
      comparisonRow("plan_row_premium_courses", false, true) +
      comparisonRow("plan_row_basic", true, true) +
      comparisonRow("plan_analytics", false, true) +
      comparisonRow("plan_streak", false, true) +
      comparisonRow("plan_achievements", false, true) +
      comparisonRow("plan_calendar", false, true) +
      comparisonRow("plan_resources", false, true) +
      comparisonRow("plan_support", false, true) +
    '</tbody></table></div>';
}

function freePriceLabel() {
  return planText("plan_free_price", "Free");
}

function showFreePrice(priceEl) {
  if (!priceEl) return;
  let label = priceEl.querySelector(".plan-free-price");
  if (!label) {
    const small = priceEl.querySelector("small");
    const keepLevel = small && small.getAttribute("data-i18n") !== "price_per_course";
    priceEl.textContent = "";
    label = document.createElement("span");
    label.className = "plan-free-price";
    priceEl.appendChild(label);
    if (keepLevel) {
      priceEl.appendChild(document.createTextNode(" "));
      priceEl.appendChild(small);
    }
  }
  label.textContent = freePriceLabel();
}

function paintCourseBadges() {
  document.querySelectorAll('a[href*="course="]').forEach(function (link) {
    const match = /course=([^&#]+)/.exec(link.getAttribute("href") || "");
    const card = link.closest(".course-card");
    if (!match || !card) return;
    const access = courseAccess(decodeURIComponent(match[1]));
    let badge = card.querySelector(".plan-badge");
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "plan-badge";
      card.insertBefore(badge, card.firstChild);
    }
    badge.classList.toggle("is-premium", access === "premium");
    badge.textContent = access === "premium" ? "⭐ " + planText("plan_badge_premium", "Premium") : planText("plan_badge_free", "Free course");
    if (access === "free") {
      const priceEl = card.querySelector(".price");
      if (priceEl) showFreePrice(priceEl);
    }
  });
  const slugs = {
    course_en_beginner: "english-beginner",
    course_en_intermediate: "english-intermediate",
    course_ielts: "ielts",
    course_business: "business-english",
    course_german: "german",
    course_spanish: "spanish",
    course_french: "french",
    course_conversation: "conversation"
  };
  document.querySelectorAll("td[data-i18n]").forEach(function (cell) {
    const slug = slugs[cell.getAttribute("data-i18n")];
    if (!slug || courseAccess(slug) !== "free") return;
    const row = cell.closest("tr");
    const priceCell = row && row.querySelector('td[data-i18n-label="label_price"]');
    if (priceCell) priceCell.textContent = freePriceLabel();
  });
}

function mfApplyCourseAccess(slug) {
  const selected = slug || (new URLSearchParams(window.location.search).get("course") || "");
  const premiumCourse = courseAccess(selected) === "premium";
  const member = mfIsPremium();
  document.querySelectorAll("a[data-enroll]").forEach(function (link) {
    if (premiumCourse && !member) {
      link.setAttribute("href", "checkout.html?plan=premium");
      link.setAttribute("data-i18n", "plan_unlock");
      link.textContent = planText("plan_unlock", "Unlock with Premium");
    } else {
      link.setAttribute("href", "checkout.html?course=" + encodeURIComponent(selected || "english-beginner"));
      link.setAttribute("data-i18n", "btn_enroll");
      link.textContent = planText("btn_enroll", "Enroll Now");
    }
  });
  const priceEl = document.querySelector('[data-bind="price"]');
  if (priceEl && !premiumCourse) priceEl.textContent = freePriceLabel();
  const host = document.querySelector("a[data-enroll]");
  if (!host) return;
  let note = document.querySelector("[data-premium-course]");
  if (!premiumCourse) {
    if (note) note.hidden = true;
    return;
  }
  if (!note) {
    note = document.createElement("div");
    note.className = "plan-lock";
    note.setAttribute("data-premium-course", "");
    host.parentElement.insertBefore(note, host);
  }
  note.hidden = member;
  note.innerHTML = '<i class="bi bi-lock" aria-hidden="true"></i><h3>' + planText("plan_course_lock", "Premium Course") + '</h3><p>' + planText("plan_course_lock_text", "This course is available with Premium membership.") + '</p>';
}

function paintAssistant() {
  const mark = document.querySelector("[data-ai-plan]");
  if (!mark) return;
  if (!mfIsPremium()) {
    mark.hidden = true;
    mark.textContent = "";
    return;
  }
  mark.hidden = false;
  mark.textContent = "⭐ " + planText("plan_ai", "Premium AI Assistant");
}

function openPlansView() {
  const target = document.getElementById("plans-section");
  if (!target) return false;
  document.querySelectorAll(".dash-view").forEach(function (view) {
    view.classList.toggle("is-active", view === target);
  });
  document.querySelectorAll("[data-view-target]").forEach(function (button) {
    button.classList.toggle("is-active", button.getAttribute("data-view-target") === "plans-section");
  });
  const title = document.querySelector(".dash-title");
  if (title) title.textContent = planText("plan_nav", "Plans");
  target.scrollIntoView({ block: "start" });
  return true;
}

function initMembership() {
  renderHome();
  renderMyPlan();
  renderPlans();
  paintCourseBadges();
  if (document.querySelector("[data-course-detail], #courseDetail")) mfApplyCourseAccess();
  paintAssistant();
  if (initMembership.bound) return;
  initMembership.bound = true;
  document.addEventListener("click", function (event) {
    const open = event.target.closest("[data-open-plans]");
    if (!open || !document.getElementById("plans-section")) return;
    event.preventDefault();
    openPlansView();
  });
  document.addEventListener("mf-membership", initMembership);
  document.addEventListener("mf-language", initMembership);
}

window.mfIsPremium = mfIsPremium;
window.mfActivatePremium = mfActivatePremium;
window.mfApplyCourseAccess = mfApplyCourseAccess;
window.initMembership = initMembership;
document.addEventListener("DOMContentLoaded", initMembership);
