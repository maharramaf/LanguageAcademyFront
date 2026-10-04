function courseDetailsText(key, fallback) {
  if (typeof window.mfT === "function") return window.mfT(key, fallback || key);
  return fallback || key;
}

function selectedCourseId() {
  try {
    return new URLSearchParams(window.location.search).get("course") || "english-beginner";
  } catch (error) {
    return "english-beginner";
  }
}

function kindMeta(kind, duration) {
  if (kind === "video") {
    const mins = Math.max(1, Math.round((duration || 0) / 60));
    return courseDetailsText("vid_kind_video", "Video") + " · " + mins + " " + courseDetailsText("vid_min", "min");
  }
  if (kind === "quiz") return courseDetailsText("vid_kind_quiz", "Quiz") + " · 10 " + courseDetailsText("vid_min", "min");
  if (kind === "download") return courseDetailsText("vid_kind_download", "Download") + " · PDF";
  return courseDetailsText("vid_kind_reading", "Reading") + " · " + Math.max(1, Math.round((duration || 480) / 60)) + " " + courseDetailsText("vid_min", "min");
}

function kindIcon(kind) {
  if (kind === "video") return "bi-play-circle";
  if (kind === "quiz") return "bi-patch-question";
  if (kind === "download") return "bi-download";
  return "bi-file-text";
}

function stopPreviewVideo() {
  const stage = document.querySelector("[data-preview-stage]");
  if (!stage) return;
  const frame = stage.querySelector("[data-preview-frame]");
  if (frame) frame.src = "";
}

function showPreviewVideo(videoUrl, label) {
  const modal = document.querySelector('[data-modal="preview"]');
  const stage = document.querySelector("[data-preview-stage]");
  if (!modal || !stage) return;
  const url = typeof window.mfNormalizeVideoUrl === "function"
    ? window.mfNormalizeVideoUrl(videoUrl)
    : (videoUrl || "");
  const title = label || courseDetailsText("x1qxekbp", "Preview this course");
  const titleEl = document.getElementById("previewTitle");
  if (titleEl) titleEl.textContent = title;
  if (url) {
    stage.innerHTML =
      '<div class="video-embed-wrap preview-embed">' +
        '<div class="video-loading" data-preview-loading>' + courseDetailsText("video_loading", "Loading video…") + '</div>' +
        '<iframe class="video-embed" data-preview-frame title="' + title.replace(/"/g, "") + '" ' +
          'src="' + url.replace(/"/g, "") + '" ' +
          'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" ' +
          'allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>' +
      '</div>';
    const frame = stage.querySelector("[data-preview-frame]");
    const loading = stage.querySelector("[data-preview-loading]");
    if (frame && loading) {
      frame.addEventListener("load", function () { loading.hidden = true; });
      window.setTimeout(function () { loading.hidden = true; }, 4000);
    }
  } else {
    stage.innerHTML =
      '<div class="video-screen preview-placeholder">' +
        '<i class="bi bi-play-circle" aria-hidden="true"></i>' +
        '<p>' + courseDetailsText("video_placeholder", "Demo placeholder — no verified video URL for this lesson yet.") + '</p>' +
      '</div>';
  }
  const note = document.querySelector("[data-preview-note]");
  if (note) {
    note.textContent = url
      ? courseDetailsText("video_preview_note", "Demo educational video for this course. Later this will use Lesson.VideoUrl from the API.")
      : courseDetailsText("video_placeholder", "Demo placeholder — no verified video URL for this lesson yet.");
  }
  modal.hidden = false;
  modal.classList.add("is-open");
  document.body.classList.add("nav-lock");
  modal.querySelector(".modal-close")?.focus();
}

function renderCourseVideoCurriculum() {
  const root = document.querySelector("[data-course-curriculum]");
  if (!root) return;
  const courseId = selectedCourseId();
  const media = typeof window.mfGetCourseMedia === "function" ? window.mfGetCourseMedia(courseId) : null;
  if (!media || !Array.isArray(media.modules) || !media.modules.length) return;

  root.innerHTML = media.modules.map(function (module, index) {
    const lessons = (module.lessons || []).map(function (lesson) {
      const locked = index > 0;
      const clickable = lesson.kind === "video" && lesson.videoUrl;
      const lockIcon = locked
        ? '<i class="bi bi-lock" aria-label="' + courseDetailsText("x11q9xd6", "Locked") + '"></i>'
        : '<i class="bi bi-unlock" aria-label="' + courseDetailsText("x1wm083n", "Unlocked") + '"></i>';
      const attrs = clickable
        ? ' role="button" tabindex="0" data-lesson-preview="' + lesson.id + '" data-lesson-video="' + String(lesson.videoUrl).replace(/"/g, "") + '"'
        : "";
      return '<div class="lesson-row' + (clickable ? " is-video-lesson" : "") + '"' + attrs + ">" +
        '<i class="bi ' + kindIcon(lesson.kind) + '"></i>' +
        "<div><strong>" + courseDetailsText(lesson.titleKey, lesson.titleFallback || lesson.id) + "</strong>" +
        "<span>" + kindMeta(lesson.kind, lesson.duration) + "</span></div>" +
        lockIcon +
      "</div>";
    }).join("");
    return '<div class="course-module' + (index === 0 ? " is-open" : "") + '">' +
      '<button class="course-module-toggle" type="button" aria-expanded="' + (index === 0 ? "true" : "false") + '">' +
        "<span><strong>" + courseDetailsText(module.titleKey, module.titleFallback || module.id) + "</strong>" +
        "<small>" + courseDetailsText(module.metaKey, module.metaFallback || "") + "</small></span>" +
        '<i class="bi bi-chevron-down"></i>' +
      "</button>" +
      '<div class="course-module-panel">' + lessons + "</div>" +
    "</div>";
  }).join("");

  if (root.dataset.videoBound === "1") return;
  root.dataset.videoBound = "1";
  root.addEventListener("click", function (event) {
    const toggle = event.target.closest(".course-module-toggle");
    if (toggle) {
      const module = toggle.closest(".course-module");
      if (!module) return;
      const open = module.classList.contains("is-open");
      root.querySelectorAll(".course-module").forEach(function (item) {
        item.classList.remove("is-open");
        const btn = item.querySelector(".course-module-toggle");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
      if (!open) {
        module.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      }
      return;
    }
    const row = event.target.closest("[data-lesson-preview]");
    if (!row) return;
    showPreviewVideo(row.getAttribute("data-lesson-video"), row.querySelector("strong")?.textContent || "");
  });
  root.addEventListener("keydown", function (event) {
    if (event.key !== "Enter" && event.key !== " ") return;
    const row = event.target.closest("[data-lesson-preview]");
    if (!row) return;
    event.preventDefault();
    showPreviewVideo(row.getAttribute("data-lesson-video"), row.querySelector("strong")?.textContent || "");
  });
}

function initCourseCurriculum() {
  renderCourseVideoCurriculum();
}

function initCourseTabs() {
  document.querySelectorAll("[data-course-tabs]").forEach(function (tabs) {
    const root = tabs.parentElement;
    tabs.querySelectorAll("[data-tab]").forEach(function (button) {
      button.addEventListener("click", function () {
        const name = button.dataset.tab;
        tabs.querySelectorAll("[data-tab]").forEach(function (item) {
          item.classList.toggle("is-active", item === button);
        });
        root.querySelectorAll("[data-tab-panel]").forEach(function (panel) {
          panel.classList.toggle("is-active", panel.dataset.tabPanel === name);
        });
      });
    });
  });
}

function initCoursePreview() {
  const modal = document.querySelector('[data-modal="preview"]');
  document.querySelectorAll("[data-preview]").forEach(function (button) {
    button.addEventListener("click", function () {
      const courseId = selectedCourseId();
      const url = typeof window.mfGetCoursePreviewVideoUrl === "function"
        ? window.mfGetCoursePreviewVideoUrl(courseId)
        : "";
      showPreviewVideo(url, courseDetailsText("x1qxekbp", "Preview this course"));
    });
  });
  if (!modal || modal.dataset.previewStopBound === "1") return;
  modal.dataset.previewStopBound = "1";
  modal.addEventListener("click", function (event) {
    if (event.target === modal || event.target.closest("[data-modal-close]")) stopPreviewVideo();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("is-open")) stopPreviewVideo();
  });
}

function initCourseFAQ() {
  document.querySelectorAll("[data-course-faq] .course-faq-toggle").forEach(function (button) {
    button.addEventListener("click", function () {
      const item = button.closest(".course-faq-item");
      const open = item.classList.contains("is-open");
      item.parentElement.querySelectorAll(".course-faq-item").forEach(function (entry) {
        entry.classList.remove("is-open");
        const toggle = entry.querySelector(".course-faq-toggle");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      });
      if (!open) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
}

function initCourseReviewModal() {
  const modal = document.querySelector('[data-modal="review"]');
  document.querySelectorAll("[data-review]").forEach(function (button) {
    button.addEventListener("click", function () {
      if (!modal) return;
      modal.hidden = false;
      modal.classList.add("is-open");
      document.body.classList.add("nav-lock");
      modal.querySelector(".modal-close")?.focus();
    });
  });

  const form = document.querySelector("[data-review-form]");
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = form.querySelector('[name="name"]');
    const message = form.querySelector('[name="message"]');
    const nameError = form.querySelector('[data-error-for="review-name"]');
    const textError = form.querySelector('[data-error-for="review-text"]');
    const nameOk = name.value.trim().length > 0;
    const textOk = message.value.trim().length >= 10;
    if (nameError) nameError.textContent = nameOk ? "" : (window.mfT ? window.mfT("err_name_required", "Name is required.") : "Name is required.");
    if (textError) textError.textContent = textOk ? "" : (window.mfT ? window.mfT("err_message_short", "Please write at least 10 characters.") : "Please write at least 10 characters.");
    name.closest(".field")?.classList.toggle("has-error", !nameOk);
    message.closest(".field")?.classList.toggle("has-error", !textOk);
    if (!nameOk || !textOk) return;
    form.querySelectorAll(".field, .btn").forEach(function (node) { node.hidden = true; });
    const success = form.querySelector(".form-success");
    if (success) success.hidden = false;
  });
}

function initCourseActions() {
  const enrollForm = document.querySelector('[data-form="enroll"]');
  enrollForm?.addEventListener("submit", function () {
    window.setTimeout(function () {
      const success = enrollForm.querySelector(".form-success");
      if (!success || success.hidden) return;
      document.querySelectorAll("[data-enroll]").forEach(function (button) {
        button.textContent = window.mfT ? window.mfT("enroll_requested", "Enrollment requested") : "Enrollment requested";
        button.classList.add("is-saved");
      });
    }, 0);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initCourseCurriculum();
  initCoursePreview();
  initCourseFAQ();
  initCourseReviewModal();
  initCourseActions();
  initCourseTabs();
});

document.addEventListener("mf-language", function () {
  renderCourseVideoCurriculum();
});
