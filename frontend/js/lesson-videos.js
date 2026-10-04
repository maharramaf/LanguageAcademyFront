/* Centralized frontend demo lesson/course video URLs.
   Shape mirrors future API Lesson.VideoUrl — swap demo values for server data later.
   All URLs below were verified via YouTube oEmbed before commit. */
(function (window) {
  "use strict";

  function embed(youtubeId) {
    return "https://www.youtube-nocookie.com/embed/" + youtubeId + "?rel=0&modestbranding=1";
  }

  const MF_COURSE_VIDEOS = {
    "english-beginner": {
      previewVideoUrl: embed("v1ZWFsz0V5U"),
      modules: [
        {
          id: "m1",
          titleKey: "vid_mod_en_m1",
          titleFallback: "Module 01 — Introduction to English",
          metaKey: "vid_mod_en_m1_meta",
          metaFallback: "4 lessons · 45 min",
          lessons: [
            { id: "eb-m1-l1", titleKey: "vid_eb_m1_l1", titleFallback: "Lesson 01 — Greetings", kind: "video", videoUrl: embed("I_tRSrPru94"), duration: 360 },
            { id: "eb-m1-l2", titleKey: "vid_eb_m1_l2", titleFallback: "Lesson 02 — Introducing Yourself", kind: "text", duration: 480 },
            { id: "eb-m1-l3", titleKey: "vid_eb_m1_l3", titleFallback: "Lesson 03 — Basic Vocabulary", kind: "video", videoUrl: embed("o5ghhSAxopw"), duration: 361 },
            { id: "eb-m1-q1", titleKey: "vid_eb_m1_q1", titleFallback: "Quiz — Introduction check", kind: "quiz", duration: 600 }
          ]
        },
        {
          id: "m2",
          titleKey: "vid_mod_en_m2",
          titleFallback: "Module 02 — Everyday English",
          metaKey: "vid_mod_en_m2_meta",
          metaFallback: "5 lessons · 58 min",
          lessons: [
            { id: "eb-m2-l1", titleKey: "vid_eb_m2_l1", titleFallback: "Lesson 01 — Daily Routines", kind: "video", videoUrl: embed("QBi0U99zo3Q"), duration: 505 },
            { id: "eb-m2-l2", titleKey: "vid_eb_m2_l2", titleFallback: "Lesson 02 — Present Simple", kind: "text", duration: 660 },
            { id: "eb-m2-l3", titleKey: "vid_eb_m2_l3", titleFallback: "Lesson 03 — Asking Questions", kind: "video", videoUrl: embed("gCs4knrlnD4"), duration: 420 },
            { id: "eb-m2-l4", titleKey: "vid_eb_m2_l4", titleFallback: "Practice sheet", kind: "download", duration: 0 },
            { id: "eb-m2-q1", titleKey: "vid_eb_m2_q1", titleFallback: "Quiz — Everyday English", kind: "quiz", duration: 600 }
          ]
        }
      ]
    },
    "english-intermediate": {
      previewVideoUrl: embed("h9HvFZUgxiM"),
      modules: [
        {
          id: "m1",
          titleKey: "vid_mod_int_m1",
          titleFallback: "Module 01 — Fluency habits",
          metaKey: "vid_mod_int_m1_meta",
          metaFallback: "3 lessons · 40 min",
          lessons: [
            { id: "ei-m1-l1", titleKey: "vid_ei_m1_l1", titleFallback: "Lesson 01 — Small talk", kind: "video", videoUrl: embed("h9HvFZUgxiM"), duration: 900 },
            { id: "ei-m1-l2", titleKey: "vid_ei_m1_l2", titleFallback: "Lesson 02 — Speaking clearly", kind: "video", videoUrl: embed("eIho2S0ZahI"), duration: 598 },
            { id: "ei-m1-l3", titleKey: "vid_ei_m1_l3", titleFallback: "Lesson 03 — Study smarter", kind: "video", videoUrl: embed("IlU-zDU6aQ0"), duration: 1500 }
          ]
        }
      ]
    },
    ielts: {
      previewVideoUrl: embed("2SI0twnNEN8"),
      modules: [
        {
          id: "m1",
          titleKey: "vid_mod_ielts_m1",
          titleFallback: "Module 01 — Speaking criteria",
          metaKey: "vid_mod_ielts_m1_meta",
          metaFallback: "3 lessons · 35 min",
          lessons: [
            { id: "ielts-m1-l1", titleKey: "vid_ielts_m1_l1", titleFallback: "Lesson 01 — Fluency & coherence", kind: "video", videoUrl: embed("2SI0twnNEN8"), duration: 286 },
            { id: "ielts-m1-l2", titleKey: "vid_ielts_m1_l2", titleFallback: "Lesson 02 — Present Perfect review", kind: "video", videoUrl: embed("VY5nh_-1phQ"), duration: 480 },
            { id: "ielts-m1-l3", titleKey: "vid_ielts_m1_l3", titleFallback: "Lesson 03 — Ever & never", kind: "video", videoUrl: embed("o-GWYDA4IQY"), duration: 368 }
          ]
        }
      ]
    },
    "business-english": {
      previewVideoUrl: embed("m2UD0-IC7iY"),
      modules: [
        {
          id: "m1",
          titleKey: "vid_mod_biz_m1",
          titleFallback: "Module 01 — Meetings",
          metaKey: "vid_mod_biz_m1_meta",
          metaFallback: "3 lessons · 30 min",
          lessons: [
            { id: "biz-m1-l1", titleKey: "vid_biz_m1_l1", titleFallback: "Lesson 01 — Speaking in meetings", kind: "video", videoUrl: embed("m2UD0-IC7iY"), duration: 623 },
            { id: "biz-m1-l2", titleKey: "vid_biz_m1_l2", titleFallback: "Lesson 02 — Talking about meetings", kind: "video", videoUrl: embed("TL61VKkme14"), duration: 360 },
            { id: "biz-m1-l3", titleKey: "vid_biz_m1_l3", titleFallback: "Lesson 03 — Professional presence", kind: "video", videoUrl: embed("eIho2S0ZahI"), duration: 598 }
          ]
        }
      ]
    },
    german: {
      previewVideoUrl: embed("wpBPaDI5IgI"),
      modules: [
        {
          id: "m1",
          titleKey: "vid_mod_de_m1",
          titleFallback: "Module 01 — First contact",
          metaKey: "vid_mod_de_m1_meta",
          metaFallback: "2 lessons · 20 min",
          lessons: [
            { id: "de-m1-l1", titleKey: "vid_de_m1_l1", titleFallback: "Lesson 01 — Alphabet & phonetics", kind: "video", videoUrl: embed("wpBPaDI5IgI"), duration: 800 },
            { id: "de-m1-l2", titleKey: "vid_de_m1_l2", titleFallback: "Lesson 02 — German alphabet A–Z", kind: "video", videoUrl: embed("xYuPIQMvEsg"), duration: 155 }
          ]
        }
      ]
    },
    spanish: {
      previewVideoUrl: embed("J7frbFRIvoc"),
      modules: [
        {
          id: "m1",
          titleKey: "vid_mod_es_m1",
          titleFallback: "Module 01 — People and places",
          metaKey: "vid_mod_es_m1_meta",
          metaFallback: "3 lessons · 25 min",
          lessons: [
            { id: "es-m1-l1", titleKey: "vid_es_m1_l1", titleFallback: "Lesson 01 — Greetings & introductions", kind: "video", videoUrl: embed("J7frbFRIvoc"), duration: 720 },
            { id: "es-m1-l2", titleKey: "vid_es_m1_l2", titleFallback: "Lesson 02 — Greetings vocabulary", kind: "video", videoUrl: embed("HHzWzVsKSQM"), duration: 600 },
            { id: "es-m1-l3", titleKey: "vid_es_m1_l3", titleFallback: "Lesson 03 — Quick greetings", kind: "video", videoUrl: embed("CqN1ENPfaeQ"), duration: 168 }
          ]
        }
      ]
    },
    french: {
      previewVideoUrl: embed("vvidJedEQgY"),
      modules: [
        {
          id: "m1",
          titleKey: "vid_mod_fr_m1",
          titleFallback: "Module 01 — Sounds and greetings",
          metaKey: "vid_mod_fr_m1_meta",
          metaFallback: "3 lessons · 35 min",
          lessons: [
            { id: "fr-m1-l1", titleKey: "vid_fr_m1_l1", titleFallback: "Lesson 01 — Pronunciation basics", kind: "video", videoUrl: embed("vvidJedEQgY"), duration: 600 },
            { id: "fr-m1-l2", titleKey: "vid_fr_m1_l2", titleFallback: "Lesson 02 — Pronunciation rules", kind: "video", videoUrl: embed("YC23ulrY5Ms"), duration: 549 },
            { id: "fr-m1-l3", titleKey: "vid_fr_m1_l3", titleFallback: "Lesson 03 — French vowel sounds", kind: "video", videoUrl: embed("hI2Pso1dDjM"), duration: 883 }
          ]
        }
      ]
    },
    conversation: {
      previewVideoUrl: embed("eIho2S0ZahI"),
      modules: [
        {
          id: "m1",
          titleKey: "vid_mod_conv_m1",
          titleFallback: "Module 01 — Confidence",
          metaKey: "vid_mod_conv_m1_meta",
          metaFallback: "3 lessons · 40 min",
          lessons: [
            { id: "cv-m1-l1", titleKey: "vid_cv_m1_l1", titleFallback: "Lesson 01 — Speak so people listen", kind: "video", videoUrl: embed("eIho2S0ZahI"), duration: 598 },
            { id: "cv-m1-l2", titleKey: "vid_cv_m1_l2", titleFallback: "Lesson 02 — Easy conversations", kind: "video", videoUrl: embed("I_tRSrPru94"), duration: 360 },
            { id: "cv-m1-l3", titleKey: "vid_cv_m1_l3", titleFallback: "Lesson 03 — Small talk practice", kind: "video", videoUrl: embed("h9HvFZUgxiM"), duration: 900 }
          ]
        }
      ]
    }
  };

  /* Learn page demo course (English pathway). videoUrl ≈ future Lesson.VideoUrl */
  const MF_LEARN_LESSON_VIDEOS = {
    l1: { videoUrl: embed("I_tRSrPru94"), duration: 360, titleHint: "Greetings / introduce yourself" },
    l2: { videoUrl: embed("o5ghhSAxopw"), duration: 361, titleHint: "Formal greetings listening" },
    l5: { videoUrl: embed("h9HvFZUgxiM"), duration: 900, titleHint: "Small talk & introductions" }
  };

  function isEmbedUrl(url) {
    return typeof url === "string" && /\/embed\//.test(url);
  }

  function normalizeVideoUrl(url) {
    if (!url || typeof url !== "string") return "";
    const trimmed = url.trim();
    if (!trimmed) return "";
    if (isEmbedUrl(trimmed)) return trimmed;
    const watch = trimmed.match(/[?&]v=([\w-]{6,})/);
    if (watch) return embed(watch[1]);
    const short = trimmed.match(/youtu\.be\/([\w-]{6,})/);
    if (short) return embed(short[1]);
    if (/^[\w-]{6,}$/.test(trimmed)) return embed(trimmed);
    return trimmed;
  }

  function getCourseMedia(courseId) {
    return MF_COURSE_VIDEOS[courseId] || null;
  }

  function getCoursePreviewVideoUrl(courseId) {
    const media = getCourseMedia(courseId);
    return media ? normalizeVideoUrl(media.previewVideoUrl) : "";
  }

  function findLessonVideo(courseId, lessonId) {
    const media = getCourseMedia(courseId);
    if (!media || !Array.isArray(media.modules)) return null;
    for (let i = 0; i < media.modules.length; i += 1) {
      const lessons = media.modules[i].lessons || [];
      for (let j = 0; j < lessons.length; j += 1) {
        if (lessons[j].id === lessonId) return lessons[j];
      }
    }
    return null;
  }

  function getLearnLessonVideo(lessonId) {
    const entry = MF_LEARN_LESSON_VIDEOS[lessonId];
    if (!entry) return null;
    return {
      videoUrl: normalizeVideoUrl(entry.videoUrl),
      duration: entry.duration || 0
    };
  }

  window.MF_COURSE_VIDEOS = MF_COURSE_VIDEOS;
  window.MF_LEARN_LESSON_VIDEOS = MF_LEARN_LESSON_VIDEOS;
  window.mfNormalizeVideoUrl = normalizeVideoUrl;
  window.mfIsEmbedVideoUrl = isEmbedUrl;
  window.mfGetCourseMedia = getCourseMedia;
  window.mfGetCoursePreviewVideoUrl = getCoursePreviewVideoUrl;
  window.mfFindLessonVideo = findLessonVideo;
  window.mfGetLearnLessonVideo = getLearnLessonVideo;
})(window);
