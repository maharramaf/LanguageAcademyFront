/* Student lesson, quiz, progress and grade book. On-screen demo only. */
let mfLearnState = { done: {}, current: "l1", score: null };
const MF_LEARN_LESSONS = [
  { id: "l1", moduleKey: "learn_m1", titleKey: "learn_l1", kind: "text" },
  { id: "l5", moduleKey: "learn_m1", titleKey: "learn_l5", kind: "text" },
  { id: "l2", moduleKey: "learn_m1", titleKey: "learn_l2", kind: "video" },
  { id: "l3", moduleKey: "learn_m2", titleKey: "learn_l3", kind: "quiz" },
  { id: "l4", moduleKey: "learn_m2", titleKey: "learn_l4", kind: "text" }
];

function learnText(key, fallback) {
  if (typeof window.mfT === "function") return window.mfT(key, fallback || key);
  return fallback || key;
}

function learnState() {
  return mfLearnState;
}

function openedForGrades() {
  const hash = window.location.hash || "";
  return hash === "#grades" || hash.slice(-7) === "#grades";
}

function saveLearnState(state) {
  mfLearnState = state;
}

function learnProgress(state) {
  const done = MF_LEARN_LESSONS.filter(function (lesson) { return state.done[lesson.id]; }).length;
  return Math.round((done / MF_LEARN_LESSONS.length) * 100);
}

function renderLearn() {
  const root = document.querySelector("[data-learn]");
  if (!root) return;
  const state = learnState();
  const current = MF_LEARN_LESSONS.find(function (lesson) { return lesson.id === state.current; }) || MF_LEARN_LESSONS[0];
  const percent = learnProgress(state);
  const paid = typeof window.mfHasPaidEnrollment === "function" && window.mfHasPaidEnrollment();
  const list = MF_LEARN_LESSONS.map(function (lesson) {
    const locked = lesson.id === "l4" && !paid;
    const mark = state.done[lesson.id] ? "is-done" : (lesson.id === current.id ? "is-current" : "");
    return '<button type="button" class="learn-item ' + mark + '" data-learn-open="' + lesson.id + '"><span>' + learnText(lesson.titleKey, lesson.id) + '</span><small>' + (locked ? learnText("course_locked", "Locked lesson") : learnText("learn_kind_" + lesson.kind, lesson.kind)) + '</small></button>';
  }).join("");
  const lockedNow = current.id === "l4" && !paid;
  const body = lockedNow
    ? '<p class="plan-lock"><i class="bi bi-lock" aria-hidden="true"></i> ' + learnText("course_locked_text", "Purchase the full course to unlock this lesson.") + '</p><p><a class="btn btn-outline btn-sm" href="course-details.html?course=business-english">' + learnText("course_upgrade_standard", "Upgrade to Standard") + '</a> <a class="btn btn-outline btn-sm" href="course-details.html?course=ielts">' + learnText("course_upgrade_premium", "Upgrade to Premium") + '</a></p>'
    : current.kind === "video"
    ? '<div class="learn-video"><i class="bi bi-play-circle" aria-hidden="true"></i><p>' + learnText("learn_video_note", "Video preview. A real player will use a lesson URL from the server.") + '</p></div>'
    : current.kind === "quiz"
      ? '<div data-learn-quiz></div>'
      : '<p>' + learnText("learn_text", "Read the lesson, then mark it complete. Progress is stored only in this browser preview.") + '</p>';
  const cert = percent === 100
    ? '<a class="btn btn-primary" href="certificate.html?course=english-a2">' + learnText("cert_view", "View Certificate") + '</a>'
    : '<p class="form-note">' + learnText("learn_cert_locked", "The certificate appears when every lesson is complete.") + '</p>';
  const scoreBlock = state.score == null
    ? '<p class="grade-empty">' + learnText("grade_empty", "No quiz score yet. Open the quiz lesson and submit it.") + '</p><button class="btn btn-primary" type="button" data-learn-open="l3">' + learnText("grade_take", "Open the quiz") + '</button>'
    : '<div class="grade-stats"><div class="grade-stat"><strong>' + state.score + '/4</strong><span>' + learnText("grade_quiz", "Quiz") + '</span></div><div class="grade-stat"><strong>' + percent + '%</strong><span>' + learnText("dash_progress", "Progress") + '</span></div></div>';
  root.innerHTML =
    '<section class="panel grade-book" id="grades">' +
      '<p class="eyebrow">' + learnText("faq_quiz", "Quiz and grades") + '</p>' +
      '<h2>' + learnText("grade_title", "Grade book") + '</h2>' +
      '<p>' + learnText("grade_lead", "Quiz scores and course progress for this preview.") + '</p>' +
      '<div class="progress" aria-hidden="true"><span style="width:' + percent + '%"></span></div>' +
      scoreBlock +
      cert +
    '</section>' +
    '<div class="learn-layout">' +
      '<aside class="panel"><h2>' + learnText("learn_outline", "Lessons") + '</h2><div class="progress" aria-hidden="true"><span style="width:' + percent + '%"></span></div><p>' + percent + '%</p>' + list + '</aside>' +
      '<section class="panel" id="learn-lesson">' +
        '<p class="eyebrow">' + learnText(current.moduleKey, "") + '</p>' +
        '<h1>' + learnText(current.titleKey, "") + '</h1>' +
        body +
        '<div class="quiz-nav">' +
          '<button class="btn btn-outline" type="button" data-learn-prev>' + learnText("quiz_previous", "Previous") + '</button>' +
          '<button class="btn btn-primary" type="button" data-learn-done>' + learnText("learn_complete", "Mark complete") + '</button>' +
          '<button class="btn btn-outline" type="button" data-learn-next>' + learnText("quiz_next", "Next") + '</button>' +
        '</div>' +
      '</section>' +
    '</div>';
  if (current.kind === "quiz") renderLearnQuiz(state);
}

function renderLearnQuiz(state) {
  const box = document.querySelector("[data-learn-quiz]");
  if (!box) return;
  const questions = [
    { q: "learn_q1", options: ["am", "is", "are", "be"], answer: 1 },
    { q: "learn_q2", options: ["go", "goes", "went", "going"], answer: 2 },
    { q: "learn_q3", options: ["a", "an", "the", "—"], answer: 1 },
    { q: "learn_q4", options: ["in", "on", "at", "to"], answer: 1 }
  ];
  if (state.score != null) {
    box.innerHTML = '<p>' + learnText("quiz_result_title", "Result") + ': <strong>' + state.score + '/4</strong></p>';
    return;
  }
  box.innerHTML = questions.map(function (item, index) {
    return '<fieldset class="learn-q"><legend>' + learnText(item.q, "") + '</legend>' +
      item.options.map(function (option, optionIndex) {
        return '<label class="quiz-option"><input type="radio" name="lq' + index + '" value="' + optionIndex + '"><span>' + option + '</span></label>';
      }).join("") + '</fieldset>';
  }).join("") + '<button class="btn btn-primary" type="button" data-learn-score>' + learnText("quiz_submit", "Submit") + '</button><p class="field-error" data-learn-quiz-error></p>';
}

function showGradeBook() {
  const book = document.getElementById("grades");
  if (book) book.scrollIntoView({ block: "start" });
}

function initLearn() {
  const root = document.querySelector("[data-learn]");
  if (!root) return;
  if (openedForGrades() && root.dataset.gradeOpened !== "1") {
    root.dataset.gradeOpened = "1";
    const state = learnState();
    state.current = "l3";
    saveLearnState(state);
  }
  renderLearn();
  if (openedForGrades()) showGradeBook();
  if (root.dataset.learnBound === "1") return;
  root.dataset.learnBound = "1";
  root.addEventListener("click", function (event) {
    const state = learnState();
    const open = event.target.closest("[data-learn-open]");
    if (open) {
      state.current = open.getAttribute("data-learn-open");
      saveLearnState(state);
      renderLearn();
      const lesson = document.getElementById("learn-lesson");
      if (lesson) lesson.scrollIntoView({ block: "start" });
      return;
    }
    const index = MF_LEARN_LESSONS.findIndex(function (lesson) { return lesson.id === state.current; });
    if (event.target.closest("[data-learn-prev]") && index > 0) {
      state.current = MF_LEARN_LESSONS[index - 1].id;
      saveLearnState(state);
      renderLearn();
      return;
    }
    if (event.target.closest("[data-learn-next]") && index < MF_LEARN_LESSONS.length - 1) {
      state.current = MF_LEARN_LESSONS[index + 1].id;
      saveLearnState(state);
      renderLearn();
      return;
    }
    if (event.target.closest("[data-learn-done]")) {
      if (state.current === "l4" && !(typeof window.mfHasPaidEnrollment === "function" && window.mfHasPaidEnrollment())) return;
      state.done[state.current] = true;
      saveLearnState(state);
      renderLearn();
      return;
    }
    if (event.target.closest("[data-learn-score]")) {
      const questions = [1, 2, 1, 1];
      let score = 0;
      let missing = false;
      questions.forEach(function (answer, itemIndex) {
        const chosen = root.querySelector('input[name="lq' + itemIndex + '"]:checked');
        if (!chosen) missing = true;
        else if (Number(chosen.value) === answer) score += 1;
      });
      const error = root.querySelector("[data-learn-quiz-error]");
      if (missing) {
        if (error) error.textContent = learnText("quiz_choose", "Choose an answer to continue.");
        return;
      }
      state.score = score;
      state.done.l3 = true;
      saveLearnState(state);
      renderLearn();
      showGradeBook();
    }
  });
}

window.initLearn = initLearn;
document.addEventListener("DOMContentLoaded", initLearn);
document.addEventListener("mf-language", function () {
  const root = document.querySelector("[data-learn]");
  if (!root) return;
  root.dataset.learnBound = root.dataset.learnBound || "1";
  renderLearn();
});
