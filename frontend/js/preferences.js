/* Theme and language preferences. Frontend only. Keys: mf-theme, mf-language. */
const phraseKeys = {
  "Home": "nav_home",
  "About": "nav_about",
  "Courses": "nav_courses",
  "Teachers": "nav_teachers",
  "Students": "nav_students",
  "Contact": "nav_contact",
  "Login": "nav_login",
  "Register": "nav_register",
  "Search courses": "search_placeholder",
  "Open menu": "open_menu",
  "Close menu": "close_menu",
  "Previous courses": "slider_prev_courses",
  "Next courses": "slider_next_courses",
  "Previous testimonials": "slider_prev_stories",
  "Next testimonials": "slider_next_stories",
  "Back to top": "back_to_top",
  "Skip to content": "skip_content",
  "Quick Links": "footer_quick",
  "Contact Information": "footer_contact",
  "Social Media": "footer_social",
  "Full catalog": "footer_catalog",
  "Facebook": "social_facebook",
  "Instagram": "social_instagram",
  "LinkedIn": "social_linkedin",
  "YouTube": "social_youtube",
  "Explore Courses": "btn_explore",
  "Get Started": "btn_start",
  "View Course": "btn_view_course",
  "Browse All Courses": "btn_browse",
  "More About Us": "btn_more_about",
  "View Profile": "btn_view_profile",
  "Start Learning": "btn_start_learning",
  "Subscribe": "btn_subscribe",
  "Send Message": "btn_send",
  "Enroll Now": "btn_enroll",
  "Write a Review": "btn_write_review",
  "Browse catalog": "btn_browse_catalog",
  "Contact the School": "btn_contact_school",
  "View Path": "btn_view_path",
  "Read More": "btn_read_more",
  "Save Changes": "btn_save",
  "Send Reset Link": "btn_reset",
  "Forgot Password?": "btn_forgot",
  "Logout": "dash_logout",
  "Modern language school": "hero_eyebrow",
  "Learn Languages. Open New Doors.": "hero_title",
  "Improve your language skills with professional teachers and modern learning methods.": "hero_lead",
  "Small classes": "hero_small",
  "Certified teachers": "hero_certified",
  "Online and on campus": "hero_online",
  "Active students": "hero_active",
  "Average rating": "hero_rating",
  "Popular courses": "courses_eyebrow",
  "Popular Courses": "courses_title",
  "English Beginner": "course_en_beginner",
  "English Intermediate": "course_en_intermediate",
  "IELTS Preparation": "course_ielts",
  "Business English": "course_business",
  "German Language": "course_german",
  "Spanish Language": "course_spanish",
  "French Beginner": "course_french",
  "About us": "about_eyebrow",
  "About MF Language Academy": "about_title",
  "Why choose us": "why_eyebrow",
  "A school built around speaking": "why_title",
  "Expert Teachers": "feat_teachers",
  "Flexible Schedule": "feat_schedule",
  "Online Learning": "feat_online",
  "Certificate": "feat_certificate",
  "Small Classes": "feat_small",
  "Modern Materials": "feat_materials",
  "Learn with people who teach for a living": "teachers_title",
  "Years Experience": "stat_years",
  "Testimonials": "testimonials_eyebrow",
  "What students say after class": "testimonials_title",
  "Ready to Start Learning?": "cta_title",
  "Newsletter": "newsletter_eyebrow",
  "Course news, in your inbox": "newsletter_title",
  "You are on the list": "newsletter_success",
  "Email": "label_email",
  "Password": "label_password",
  "Phone": "label_phone",
  "Name": "label_name",
  "Subject": "label_subject",
  "Message": "label_message",
  "First Name": "label_first",
  "Last Name": "label_last",
  "Full name": "label_full_name",
  "Bio": "label_bio",
  "Languages": "label_languages",
  "New password": "label_new_password",
  "Dashboard": "dash_home",
  "My Courses": "dash_my_courses",
  "Messages": "dash_messages",
  "Profile": "dash_profile",
  "Settings": "dash_settings",
  "Good to see you": "dash_hello",
  "Welcome back, Maya": "dash_welcome",
  "Here is a snapshot of courses, students, and messages. All figures on this screen are sample data.": "dash_snapshot",
  "Active courses": "dash_active_courses",
  "Open messages": "dash_open_messages",
  "My courses": "dash_my_courses_stat",
  "Completed": "dash_completed",
  "In progress": "dash_progress",
  "Certificates": "dash_certificates",
  "Welcome back to class.": "auth_welcome",
  "Pick up your courses, messages, and progress from the learning portal.": "auth_welcome_text",
  "Small classes. Real conversations. Boston and online.": "auth_aside",
  "Portal": "auth_portal",
  "Use any valid email and a password of at least 8 characters. This preview does not check an account.": "auth_login_note",
  "Start with a clear plan.": "auth_register_title",
  "Reset password": "auth_reset",
  "Find a course that matches your goal": "courses_page_title",
  "All": "filter_all",
  "English": "lang_english",
  "Exam Prep": "filter_exam",
  "Business": "filter_business",
  "German": "filter_german",
  "Spanish": "filter_spanish",
  "French": "filter_french",
  "Beginner": "level_beginner",
  "Intermediate": "level_intermediate",
  "Advanced": "level_advanced",
  "Upper intermediate": "level_upper",
  "Online": "filter_online",
  "Offline": "filter_offline",
  "Speaking": "filter_speaking",
  "Vocabulary": "filter_vocab",
  "Exam": "badge_exam",
  "Faculty": "teachers_eyebrow",
  "Teachers who still love the classroom": "teachers_page_title",
  "Want to teach with us?": "teachers_cta",
  "Student life": "students_eyebrow",
  "Learners with a reason to speak": "students_title",
  "Stories": "students_stories",
  "Recent student highlights": "students_highlights",
  "Study clubs": "students_clubs",
  "Progress checks": "students_checks",
  "Contact the language school": "contact_title",
  "Questions before you join": "contact_faq",
  "Help before you write": "contact_help",
  "Learning paths": "paths_crumb",
  "Follow a path from first greetings to exam or workplace English.": "paths_lead",
  "How it works": "paths_how",
  "Four steps to a certificate": "paths_steps",
  "1. Choose a course": "paths_step1",
  "Pick a level and a goal from the catalog.": "paths_step1_text",
  "2. Enroll": "paths_step2",
  "Send an enrollment request from the course page.": "paths_step2_text",
  "3. Learn and practice": "paths_step3",
  "Watch lessons, read notes, and take quizzes.": "paths_step3_text",
  "4. Get your certificate": "paths_step4",
  "Finish the path and keep your certificate on file.": "paths_step4_text",
  "Beginner English": "path_beginner",
  "Start with greetings, sounds, and daily phrases.": "path_beginner_text",
  "Intermediate English": "path_intermediate",
  "Hold longer conversations and write clearer emails.": "path_intermediate_text",
  "Advanced English": "path_advanced",
  "Discuss complex topics with more precision.": "path_advanced_text",
  "Frequently asked questions": "faq_title",
  "Events": "events_crumb",
  "Events and workshops": "events_title",
  "Blog": "blog_crumb",
  "Learning articles": "blog_title",
  "Featured": "blog_featured",
  "How to improve English speaking": "blog_speaking_title",
  "Short daily speaking beats long silent study. Use one real situation each day.": "blog_speaking_text",
  "Instructors": "instructors_crumb",
  "The original teacher page is still available. This listing adds ratings and profile links.": "instructors_lead",
  "Notifications": "notes_title",
  "Unread items are highlighted. Click one to mark it read.": "notes_lead",
  "New lesson published": "note_lesson",
  "English A1 · Lesson 03 is ready.": "note_lesson_text",
  "Quiz result": "note_quiz",
  "Introduction check · 9/10.": "note_quiz_text",
  "Certificate ready": "note_cert",
  "Spanish beginner certificate is available to preview.": "note_cert_text",
  "Instructor announcement": "note_announce",
  "Sarah Johnson moved Monday lab to 18:00.": "note_announce_text",
  "Unread": "status_unread",
  "Read": "status_read",
  "Profile and settings": "profile_title",
  "This form can later be used by a student or an instructor. Nothing is saved on a server.": "profile_lead",
  "Student account preview": "profile_role",
  "FAQ": "faq_crumb",
  "Description": "tab_description",
  "What you will learn": "tab_outcomes",
  "Course description": "course_description",
  "Included": "course_included",
  "This course includes": "course_includes",
  "Lifetime Access": "include_lifetime",
  "Certificate of Completion": "include_certificate",
  "Mobile and Desktop Access": "include_devices",
  "Curriculum": "course_curriculum",
  "Modules, lessons, and quizzes": "course_modules",
  "Before you start": "course_before",
  "Requirements": "course_requirements",
  "No previous English knowledge is required.": "req_none",
  "Basic computer skills are recommended.": "req_computer",
  "An internet connection is required.": "req_internet",
  "Students should be able to watch video lessons and complete quizzes.": "req_watch",
  "Demo data": "course_demo",
  "Course progress": "course_progress",
  "This bar is static preview data until a student account is connected.": "course_progress_note",
  "Instructor": "course_instructor",
  "Learn with Sarah Johnson": "course_sarah",
  "English Language Instructor": "role_sarah",
  "Reviews": "course_reviews",
  "What learners say": "course_reviews_title",
  "Questions before you enroll": "course_faq_title",
  "Is this course suitable for beginners?": "faq_beginners",
  "How long do I have access to the course?": "faq_access",
  "Will I receive a certificate?": "faq_certificate",
  "Can I learn from a mobile device?": "faq_mobile",
  "Yes. Lessons are laid out for both phone and desktop screens.": "faq_mobile_answer",
  "Are quizzes included?": "faq_quizzes",
  "Each module ends with a short quiz so you can check the new phrases.": "faq_quizzes_answer",
  "Do I need previous English knowledge?": "faq_previous",
  "No previous English knowledge is required for this beginner course.": "faq_previous_answer",
  "Related courses": "related_eyebrow",
  "Continue after A1": "related_title",
  "English A2": "course_a2",
  "Longer conversations and clearer everyday writing.": "course_a2_text",
  "Timed practice for listening, reading, writing, and speaking.": "course_ielts_card",
  "English Speaking": "course_speaking",
  "A speaking-first workshop for longer turns.": "course_speaking_text",
  "per course": "price_per_course",
  "English Program Lead": "role_elena",
  "IELTS Instructor": "role_daniel",
  "Spanish Instructor": "role_sophie",
  "German Instructor": "role_markus",
  "Conversation Coach": "role_aiko",
  "Close": "btn_close",
  "Breadcrumb": "aria_breadcrumb",
  "Primary": "aria_primary",
  "Show password": "show_password",
  "Hide password": "hide_password",
  "Enrollment requested": "enroll_requested",
  "all courses": "search_all",
  "8 weeks": "duration_8",
  "10 weeks": "duration_10",
  "32 lessons": "lessons_32",
  "20 live lessons": "lessons_20",
  "16 live lessons": "lessons_16",
  "English A1 — Complete Beginner Course": "course_a1_title",
  "Start English from zero with guided speaking, everyday vocabulary, and clear grammar you can use the same day.": "course_a1_summary",
  "This beginner pathway takes you from first greetings to short everyday conversations. Each module mixes video, reading, and a short quiz. Classes stay practical, with pronunciation and daily situations at the center.": "course_a1_overview",
  "Introduce yourself in English": "learn_intro_en",
  "Understand basic conversations": "learn_listen",
  "Build everyday vocabulary": "learn_vocab",
  "Use basic grammar": "learn_grammar",
  "Improve pronunciation": "learn_pronounce",
  "Speak in common daily situations": "learn_daily",
  "Move from careful sentences to fluent discussion. You will practice opinion, story, and workplace English.": "course_mid_summary",
  "Learners at this level already know the basics. The course pushes accuracy and flow with debates, short writing, and real listening.": "course_mid_overview",
  "Start German with practical dialogues, clear grammar, and pronunciation you can trust.": "course_de_summary",
  "Learn Spanish you can speak from the first class, with culture notes woven into every topic.": "course_es_summary",
  "A friendly start in French, with pronunciation coaching and conversations for travel and study.": "course_fr_summary",
  "Sound clear and credible in meetings, presentations, and professional email.": "course_biz_summary",
  "Train for the Academic IELTS with timed tasks, score-focused feedback, and strategies for each paper.": "course_ielts_summary",
  "Academic coordinator": "role_maya",
  "Remember me": "label_remember",
  "Create account": "btn_create",
  "Go to Login": "btn_go_login",
  "No courses match your search.": "empty_courses",
  "No results": "empty_results",
  "Previous": "pager_prev",
  "Next": "pager_next",
  "Sort": "label_sort",
  "Level": "label_level",
  "Language": "label_language",
  "Price": "label_price",
  "Free": "price_free",
  "Preview": "btn_preview",
  "Play preview": "btn_play_preview",
  "Submit review": "btn_submit_review",
  "Your name": "label_your_name",
  "Your review": "label_your_review",
  "Rating": "label_rating",
  "Please write at least 10 characters.": "err_message_short",
  "Name is required.": "err_name_required",
  "Email is required.": "err_email_required",
  "Enter a valid email address.": "err_email_invalid",
  "Phone is required.": "err_phone_required",
  "Enter a valid phone number.": "err_phone_invalid",
  "Password is required.": "err_password_required",
  "Use at least 8 characters.": "err_password_short",
  "First name is required.": "err_first_required",
  "Last name is required.": "err_last_required",
  "Subject is required.": "err_subject_required",
  "Message is required.": "err_message_required",
  "Bio is required.": "err_bio_required",
  "Confirm your password.": "err_confirm_required",
  "Passwords do not match.": "err_confirm_mismatch",
  "Leave blank in this preview": "profile_password_hint",
  "I am studying beginner English three evenings a week.": "profile_bio_value",
  "Search catalog": "search_catalog",
  "Search instructors": "search_instructors",
  "Search students": "search_students",
  "Search articles": "search_articles",
  "At least 8 characters": "password_hint",
  "Course or question": "contact_subject_hint",
  "Tell us your goal and preferred schedule": "contact_message_hint",
  "What did you learn?": "review_hint",
  "Remember Me": "label_remember",
  "Confirm Password": "label_confirm",
  "New student": "auth_new",
  "Back to website": "auth_back",
  "A valid form opens the dashboard preview.": "auth_login_hint",
  "Fill in your details. This form checks them locally and does not create an account.": "auth_register_note",
  "Create a student profile, then choose a course that matches your level and schedule.": "auth_register_aside",
  "Email checked": "auth_email_checked",
  "Enter your email. This preview only checks the format.": "auth_reset_note"
};

const translations = {
  en: {},
  az: {
    nav_home: "Ana səhifə",
    nav_about: "Haqqımızda",
    nav_courses: "Kurslar",
    nav_teachers: "Müəllimlər",
    nav_students: "Tələbələr",
    nav_contact: "Əlaqə",
    nav_login: "Giriş",
    nav_register: "Qeydiyyat",
    search_placeholder: "Kurs axtar",
    open_menu: "Menyunu aç",
    close_menu: "Menyunu bağla",
    slider_prev_courses: "Əvvəlki kurslar",
    slider_next_courses: "Növbəti kurslar",
    slider_prev_stories: "Əvvəlki rəylər",
    slider_next_stories: "Növbəti rəylər",
    back_to_top: "Yuxarı qayıt",
    skip_content: "Məzmuna keç",
    footer_quick: "Sürətli keçidlər",
    footer_contact: "Əlaqə məlumatı",
    footer_social: "Sosial şəbəkələr",
    footer_catalog: "Tam kataloq",
    social_facebook: "Facebook",
    social_instagram: "Instagram",
    social_linkedin: "LinkedIn",
    social_youtube: "YouTube",
    btn_explore: "Kurslara bax",
    btn_start: "Başla",
    btn_view_course: "Kursa bax",
    btn_browse: "Bütün kurslar",
    btn_more_about: "Haqqımızda daha çox",
    btn_view_profile: "Profilə bax",
    btn_start_learning: "Öyrənməyə başla",
    btn_subscribe: "Abunə ol",
    btn_send: "Mesaj göndər",
    btn_enroll: "İndi qoşul",
    btn_write_review: "Rəy yaz",
    btn_browse_catalog: "Kataloqa bax",
    btn_contact_school: "Məktəblə əlaqə",
    btn_view_path: "Yola bax",
    btn_read_more: "Ətraflı",
    btn_save: "Dəyişiklikləri saxla",
    btn_reset: "Sıfırlama linki göndər",
    btn_forgot: "Şifrəni unutmusunuz?",
    dash_logout: "Çıxış",
    hero_eyebrow: "Müasir dil məktəbi",
    hero_title: "Dil öyrən. Yeni qapılar aç.",
    hero_lead: "Peşəkar müəllimlər və müasir metodlarla dil bacarıqlarınızı inkişaf etdirin.",
    hero_small: "Kiçik qruplar",
    hero_certified: "Sertifikatlı müəllimlər",
    hero_online: "Onlayn və kampusda",
    hero_active: "Aktiv tələbə",
    hero_rating: "Orta qiymət",
    courses_eyebrow: "Məşhur kurslar",
    courses_title: "Məşhur kurslar",
    course_en_beginner: "İngilis dili — başlanğıc",
    course_en_intermediate: "İngilis dili — orta",
    course_ielts: "IELTS hazırlığı",
    course_business: "Biznes ingiliscəsi",
    course_german: "Alman dili",
    course_spanish: "İspan dili",
    course_french: "Fransız dili — başlanğıc",
    about_eyebrow: "Haqqımızda",
    about_title: "MF Language Academy haqqında",
    why_eyebrow: "Niyə biz",
    why_title: "Danışıq üzərində qurulmuş məktəb",
    feat_teachers: "Təcrübəli müəllimlər",
    feat_schedule: "Çevik cədvəl",
    feat_online: "Onlayn təhsil",
    feat_certificate: "Sertifikat",
    feat_small: "Kiçik qruplar",
    feat_materials: "Müasir materiallar",
    teachers_title: "Peşəkar müəllimlərlə öyrənin",
    stat_years: "İllik təcrübə",
    testimonials_eyebrow: "Rəylər",
    testimonials_title: "Tələbələr dərsdən sonra nə deyir",
    cta_title: "Öyrənməyə hazırsınız?",
    newsletter_eyebrow: "Bülleten",
    newsletter_title: "Kurs xəbərləri poçtunuza",
    newsletter_success: "Siyahıdasınız",
    label_email: "E-poçt",
    label_password: "Şifrə",
    label_phone: "Telefon",
    label_name: "Ad",
    label_subject: "Mövzu",
    label_message: "Mesaj",
    label_first: "Ad",
    label_last: "Soyad",
    label_full_name: "Tam ad",
    label_bio: "Haqqınızda",
    label_languages: "Dillər",
    label_new_password: "Yeni şifrə",
    dash_home: "İdarə paneli",
    dash_my_courses: "Kurslarım",
    dash_messages: "Mesajlar",
    dash_profile: "Profil",
    dash_settings: "Ayarlar",
    dash_hello: "Sizi görmək xoşdur",
    dash_welcome: "Xoş gəldiniz, Maya",
    dash_snapshot: "Kurslar, tələbələr və mesajların qısa görünüşü. Bu ekrandakı rəqəmlər nümunə məlumatdır.",
    dash_active_courses: "Aktiv kurslar",
    dash_open_messages: "Açıq mesajlar",
    dash_my_courses_stat: "Kurslarım",
    dash_completed: "Tamamlanan",
    dash_progress: "Davam edən",
    dash_certificates: "Sertifikatlar",
    auth_welcome: "Dərsə yenidən xoş gəldiniz.",
    auth_welcome_text: "Kurslarınızı, mesajlarınızı və irəliləyişinizi tədris portalından davam etdirin.",
    auth_aside: "Kiçik qruplar. Həqiqi söhbətlər. Boston və onlayn.",
    auth_portal: "Portal",
    auth_login_note: "İstənilən düzgün e-poçt və ən azı 8 simvollu şifrə istifadə edin. Bu önizləmə hesabı yoxlamır.",
    auth_register_title: "Aydın planla başlayın.",
    auth_reset: "Şifrəni sıfırla",
    courses_page_title: "Məqsədinizə uyğun kurs tapın",
    filter_all: "Hamısı",
    lang_english: "İngilis",
    filter_exam: "İmtahan hazırlığı",
    filter_business: "Biznes",
    filter_german: "Alman",
    filter_spanish: "İspan",
    filter_french: "Fransız",
    level_beginner: "Başlanğıc",
    level_intermediate: "Orta",
    level_advanced: "İrəli",
    level_upper: "Orta-irəli",
    filter_online: "Onlayn",
    filter_offline: "Əyani",
    filter_speaking: "Danışıq",
    filter_vocab: "Lüğət",
    badge_exam: "İmtahan",
    teachers_eyebrow: "Müəllimlər",
    teachers_page_title: "Sinif otağını sevən müəllimlər",
    teachers_cta: "Bizimlə dərs demək istəyirsiniz?",
    students_eyebrow: "Tələbə həyatı",
    students_title: "Danışmaq üçün səbəbi olan tələbələr",
    students_stories: "Hekayələr",
    students_highlights: "Son tələbə uğurları",
    students_clubs: "Tədris klubları",
    students_checks: "İrəliləyiş yoxlamaları",
    contact_title: "Dil məktəbi ilə əlaqə",
    contact_faq: "Qoşulmazdan əvvəl suallar",
    contact_help: "Yazmazdan əvvəl kömək",
    paths_crumb: "Öyrənmə yolları",
    paths_lead: "İlk salamdan imtahan və ya iş ingiliscəsinə qədər bir yol izləyin.",
    paths_how: "Necə işləyir",
    paths_steps: "Sertifikata dörd addım",
    paths_step1: "1. Kurs seçin",
    paths_step1_text: "Kataloqdan səviyyə və məqsəd seçin.",
    paths_step2: "2. Qoşulun",
    paths_step2_text: "Kurs səhifəsindən qoşulma sorğusu göndərin.",
    paths_step3: "3. Öyrənin və tətbiq edin",
    paths_step3_text: "Dərslərə baxın, qeydləri oxuyun və testləri keçin.",
    paths_step4: "4. Sertifikatınızı alın",
    paths_step4_text: "Yolu bitirin və sertifikatı saxlayın.",
    path_beginner: "Başlanğıc ingilis dili",
    path_beginner_text: "Salam, səslər və gündəlik ifadələrlə başlayın.",
    path_intermediate: "Orta səviyyə ingilis dili",
    path_intermediate_text: "Daha uzun söhbətlər və daha aydın e-poçtlar.",
    path_advanced: "İrəli səviyyə ingilis dili",
    path_advanced_text: "Mürəkkəb mövzuları daha dəqiq müzakirə edin.",
    faq_title: "Tez-tez verilən suallar",
    events_crumb: "Tədbirlər",
    events_title: "Tədbirlər və seminarlar",
    blog_crumb: "Bloq",
    blog_title: "Öyrənmə məqalələri",
    blog_featured: "Seçilmiş",
    blog_speaking_title: "İngilis danışığını necə yaxşılaşdırmaq olar",
    blog_speaking_text: "Qısa gündəlik danışıq uzun səssiz dərsdən üstündür. Hər gün bir real vəziyyət seçin.",
    instructors_crumb: "Təlimçilər",
    instructors_lead: "Əsas müəllim səhifəsi yerindədir. Bu siyahı reytinq və profil keçidləri əlavə edir.",
    notes_title: "Bildirişlər",
    notes_lead: "Oxunmamışlar vurğulanır. Oxunmuş etmək üçün birinə klikləyin.",
    note_lesson: "Yeni dərs yayımlandı",
    note_lesson_text: "İngilis A1 · Dərs 03 hazırdır.",
    note_quiz: "Test nəticəsi",
    note_quiz_text: "Tanışlıq yoxlaması · 9/10.",
    note_cert: "Sertifikat hazırdır",
    note_cert_text: "İspan dili başlanğıc sertifikatına baxmaq olar.",
    note_announce: "Müəllim elanı",
    note_announce_text: "Sarah Johnson bazar ertəsi laboratoriyasını 18:00-a keçirdi.",
    status_unread: "Oxunmayıb",
    status_read: "Oxunub",
    profile_title: "Profil və ayarlar",
    profile_lead: "Bu forma sonradan tələbə və ya müəllim üçün istifadə oluna bilər. Serverdə heç nə saxlanılmır.",
    profile_role: "Tələbə hesabı önizləməsi",
    faq_crumb: "Suallar",
    tab_description: "Təsvir",
    tab_outcomes: "Nə öyrənəcəksiniz",
    course_description: "Kursun təsviri",
    course_included: "Daxildir",
    course_includes: "Bu kursa daxildir",
    include_lifetime: "Ömürlük giriş",
    include_certificate: "Bitirmə sertifikatı",
    include_devices: "Mobil və masaüstü giriş",
    course_curriculum: "Proqram",
    course_modules: "Modullar, dərslər və testlər",
    course_before: "Başlamazdan əvvəl",
    course_requirements: "Tələblər",
    req_none: "Əvvəlki ingilis dili biliyi tələb olunmur.",
    req_computer: "Əsas kompüter bacarıqları tövsiyə olunur.",
    req_internet: "İnternet bağlantısı tələb olunur.",
    req_watch: "Tələbə video dərslərə baxıb testləri tamamlaya bilməlidir.",
    course_demo: "Nümunə məlumat",
    course_progress: "Kurs irəliləyişi",
    course_progress_note: "Bu zolaq tələbə hesabı qoşulana qədər statik önizləmədir.",
    course_instructor: "Müəllim",
    course_sarah: "Sarah Johnson ilə öyrənin",
    role_sarah: "İngilis dili müəllimi",
    course_reviews: "Rəylər",
    course_reviews_title: "Tələbələr nə deyir",
    course_faq_title: "Qoşulmazdan əvvəl suallar",
    faq_beginners: "Bu kurs başlanğıc üçün uyğundur?",
    faq_access: "Kursa nə qədər girişim olacaq?",
    faq_certificate: "Sertifikat alacağam?",
    faq_mobile: "Mobil cihazdan öyrənə bilərəm?",
    faq_mobile_answer: "Bəli. Dərslər həm telefon, həm də masaüstü ekran üçün düzülüb.",
    faq_quizzes: "Testlər daxildir?",
    faq_quizzes_answer: "Hər modul yeni ifadələri yoxlamaq üçün qısa testlə bitir.",
    faq_previous: "Əvvəlki ingilis dili biliyi lazımdır?",
    faq_previous_answer: "Bu başlanğıc kursu üçün əvvəlki ingilis dili biliyi tələb olunmur.",
    related_eyebrow: "Oxşar kurslar",
    related_title: "A1-dən sonra davam edin",
    course_a2: "İngilis A2",
    course_a2_text: "Daha uzun söhbətlər və daha aydın gündəlik yazı.",
    course_ielts_card: "Dinləmə, oxu, yazı və danışıq üçün vaxtlı məşq.",
    course_speaking: "İngilis danışığı",
    course_speaking_text: "Daha uzun növbələr üçün danışıq yönümlü seminar.",
    price_per_course: "kurs üçün",
    role_elena: "İngilis proqramının rəhbəri",
    role_daniel: "IELTS müəllimi",
    role_sophie: "İspan dili müəllimi",
    role_markus: "Alman dili müəllimi",
    role_aiko: "Danışıq məşqçisi",
    btn_close: "Bağla",
    faq_label: "FAQ",
    faq_open: "Kömək və suallar",
    support_label: "Dəstək",
    faq_courses_certs: "Kurs və sertifikat sualları",
    faq_browse: "Kurslara bax",
    faq_learning: "Öyrənmə",
    faq_quiz: "Test və qiymətlər",
    faq_contact_support: "Dəstəklə əlaqə",
    faq_cat_courses: "Kurslar",
    faq_cat_lessons: "Dərslər",
    faq_cat_quizzes: "Testlər",
    faq_cat_certs: "Sertifikatlar",
    faq_cat_account: "Hesab",
    faq_cat_tech: "Texniki dəstək",
    faq_q_enroll: "Kursa necə qoşuluram?",
    faq_a_enroll: "Kataloqdan kurs seçin, kurs səhifəsini açın və İndi qoşul düyməsinə basın.",
    faq_q_view: "Kursuma necə baxım?",
    faq_a_view: "İdarə panelində Kurslarım bölməsini açın və ya kurs səhifəsinə qayıdın.",
    faq_q_access: "Kursa nə qədər girişim var?",
    faq_a_access: "Bu önizləmədə giriş müddəti kurs səhifəsində göstərilir. Hesab qoşulandan sonra müddət orada saxlanılacaq.",
    faq_q_continue: "Dayandığım yerdən necə davam edim?",
    faq_a_continue: "İdarə panelində davam edən kursu açın. Son açıq dərs siyahının yuxarısında qalır.",
    faq_q_complete: "Dərsi tamamlanmış kimi necə işarələyim?",
    faq_a_complete: "Dərsi sona qədər açın. Tamamlanma vəziyyəti tələbə hesabı qoşulanda yadda saxlanılacaq.",
    faq_q_quiz: "Testlər necə işləyir?",
    faq_a_quiz: "Hər modul qısa testlə bitir. Sualları cavablayın və nəticəni həmin səhifədə görün.",
    faq_q_score: "Balımı harada görüm?",
    faq_a_score: "Test nəticəsi bildirişlərdə və idarə panelindəki kurs tərəqqisində görünür.",
    faq_q_cert_when: "Sertifikatı nə vaxt alıram?",
    faq_a_cert_when: "Kursun dərsləri və testləri tamamlananda bitirmə sertifikatı hazır olur.",
    faq_q_cert_where: "Sertifikatları harada görüm?",
    faq_a_cert_where: "İdarə panelində Sertifikatlar siyahısını açın.",
    faq_q_profile: "Profili necə yeniləyim?",
    faq_a_profile: "Profil səhifəsində ad, əlaqə və haqqınızda məlumatı dəyişib saxlayın.",
    faq_q_password: "Şifrəni necə dəyişim?",
    faq_a_password: "Profil səhifəsində yeni şifrə sahəsini doldurun. Bu önizləmə şifrəni serverə göndərmir.",
    faq_q_lesson_fail: "Dərs açılmasa nə edim?",
    faq_a_lesson_fail: "Səhifəni yeniləyin və ya başqa brauzer yoxlayın. Davam edərsə, əlaqə formasından yazın.",
    faq_q_contact: "Dəstəklə necə əlaqə saxlayım?",
    faq_a_contact: "Əlaqə səhifəsindəki formanı doldurun və ya hello@mflanguage.academy ünvanına yazın.",
    aria_breadcrumb: "Naviqasiya izi",
    aria_primary: "Əsas menyu",
    show_password: "Şifrəni göstər",
    hide_password: "Şifrəni gizlət",
    enroll_requested: "Qoşulma sorğusu göndərildi",
    search_all: "bütün kurslar",
    duration_8: "8 həftə",
    duration_10: "10 həftə",
    lessons_32: "32 dərs",
    lessons_20: "20 canlı dərs",
    lessons_16: "16 canlı dərs",
    course_a1_title: "İngilis A1 — tam başlanğıc kursu",
    course_a1_summary: "Rəhbərli danışıq, gündəlik lüğət və həmin gün istifadə edəcəyiniz aydın qrammatika ilə ingilis dilinə sıfırdan başlayın.",
    course_a1_overview: "Bu başlanğıc yolu sizi ilk salamdan qısa gündəlik söhbətlərə aparır. Hər modul video, oxu və qısa testdən ibarətdir. Dərslər tələffüz və gündəlik vəziyyətlər üzərində qurulub.",
    learn_intro_en: "İngilis dilində özünüzü təqdim edin",
    learn_listen: "Sadə söhbətləri anlayın",
    learn_vocab: "Gündəlik lüğət yığın",
    learn_grammar: "Əsas qrammatikadan istifadə edin",
    learn_pronounce: "Tələffüzü yaxşılaşdırın",
    learn_daily: "Gündəlik vəziyyətlərdə danışın",
    course_mid_summary: "Ehtiyatlı cümlələrdən axıcı müzakirəyə keçin. Fikir, hekayə və iş ingiliscəsi üzərində işləyəcəksiniz.",
    course_mid_overview: "Bu səviyyədə əsaslar artıq məlumdur. Kurs müzakirə, qısa yazı və real dinləmə ilə dəqiqliyi və axıcılığı artırır.",
    course_de_summary: "Praktik dialoqlar, aydın qrammatika və etibarlı tələffüzlə alman dilinə başlayın.",
    course_es_summary: "İlk dərsdən danışa biləcəyiniz ispan dilini öyrənin. Hər mövzuda mədəniyyət qeydləri var.",
    course_fr_summary: "Fransız dilinə səmimi başlanğıc: tələffüz məşqi və səyahət, təhsil üçün söhbətlər.",
    course_biz_summary: "Görüş, təqdimat və peşəkar e-poçtda aydın və inandırıcı səslənin.",
    course_ielts_summary: "Akademik IELTS üçün vaxtlı tapşırıqlar, bal yönümlü rəy və hər bölmə üçün strategiya.",
    role_maya: "Akademik koordinator",
    label_remember: "Məni xatırla",
    btn_create: "Hesab yarat",
    btn_go_login: "Girişə keç",
    empty_courses: "Axtarışa uyğun kurs yoxdur.",
    empty_results: "Nəticə yoxdur",
    pager_prev: "Əvvəlki",
    pager_next: "Növbəti",
    label_sort: "Sırala",
    label_level: "Səviyyə",
    label_language: "Dil",
    label_price: "Qiymət",
    price_free: "Pulsuz",
    btn_preview: "Önizləmə",
    btn_play_preview: "Önizləməni oynat",
    btn_submit_review: "Rəyi göndər",
    label_your_name: "Adınız",
    label_your_review: "Rəyiniz",
    label_rating: "Qiymət",
    err_message_short: "Ən azı 10 simvol yazın.",
    err_name_required: "Ad tələb olunur.",
    err_email_required: "E-poçt tələb olunur.",
    err_email_invalid: "Düzgün e-poçt ünvanı daxil edin.",
    err_phone_required: "Telefon tələb olunur.",
    err_phone_invalid: "Düzgün telefon nömrəsi daxil edin.",
    err_password_required: "Şifrə tələb olunur.",
    err_password_short: "Ən azı 8 simvol istifadə edin.",
    err_first_required: "Ad tələb olunur.",
    err_last_required: "Soyad tələb olunur.",
    err_subject_required: "Mövzu tələb olunur.",
    err_message_required: "Mesaj tələb olunur.",
    err_bio_required: "Haqqınızda məlumat tələb olunur.",
    err_confirm_required: "Şifrəni təsdiqləyin.",
    err_confirm_mismatch: "Şifrələr uyğun gəlmir.",
    profile_password_hint: "Bu önizləmədə boş saxlayın",
    profile_bio_value: "Həftədə üç axşam başlanğıc ingilis dili öyrənirəm.",
    search_catalog: "Kataloqda axtar",
    search_instructors: "Təlimçi axtar",
    search_students: "Tələbə axtar",
    search_articles: "Məqalə axtar",
    password_hint: "Ən azı 8 simvol",
    contact_subject_hint: "Kurs və ya sual",
    contact_message_hint: "Məqsədinizi və uyğun cədvəli yazın",
    review_hint: "Nə öyrəndiniz?",
    label_confirm: "Şifrəni təsdiqlə",
    auth_new: "Yeni tələbə",
    auth_back: "Sayta qayıt",
    auth_login_hint: "Düzgün forma idarə panelinin önizləməsini açır.",
    auth_register_note: "Məlumatlarınızı doldurun. Forma onları yerində yoxlayır və hesab yaratmır.",
    auth_register_aside: "Tələbə profili yaradın, sonra səviyyənizə və cədvəlinizə uyğun kurs seçin.",
    auth_email_checked: "E-poçt yoxlanıldı",
    auth_reset_note: "E-poçtunuzu daxil edin. Bu önizləmə yalnız formatı yoxlayır.",
    language_menu: "Dil seçimi",
    toggle_theme: "İşıqlı və qaranlıq rejimi dəyiş",
    theme_light: "İşıqlı rejim aktivdir",
    theme_dark: "Qaranlıq rejim aktivdir"
  },
  ru: {
    nav_home: "Главная",
    nav_about: "О нас",
    nav_courses: "Курсы",
    nav_teachers: "Преподаватели",
    nav_students: "Студенты",
    nav_contact: "Контакты",
    nav_login: "Войти",
    nav_register: "Регистрация",
    search_placeholder: "Поиск курсов",
    open_menu: "Открыть меню",
    close_menu: "Закрыть меню",
    slider_prev_courses: "Предыдущие курсы",
    slider_next_courses: "Следующие курсы",
    slider_prev_stories: "Предыдущие отзывы",
    slider_next_stories: "Следующие отзывы",
    back_to_top: "Наверх",
    skip_content: "К содержанию",
    footer_quick: "Быстрые ссылки",
    footer_contact: "Контактная информация",
    footer_social: "Соцсети",
    footer_catalog: "Полный каталог",
    social_facebook: "Facebook",
    social_instagram: "Instagram",
    social_linkedin: "LinkedIn",
    social_youtube: "YouTube",
    btn_explore: "Смотреть курсы",
    btn_start: "Начать",
    btn_view_course: "Открыть курс",
    btn_browse: "Все курсы",
    btn_more_about: "Подробнее о нас",
    btn_view_profile: "Смотреть профиль",
    btn_start_learning: "Начать обучение",
    btn_subscribe: "Подписаться",
    btn_send: "Отправить",
    btn_enroll: "Записаться",
    btn_write_review: "Написать отзыв",
    btn_browse_catalog: "Открыть каталог",
    btn_contact_school: "Связаться со школой",
    btn_view_path: "Смотреть путь",
    btn_read_more: "Подробнее",
    btn_save: "Сохранить",
    btn_reset: "Отправить ссылку",
    btn_forgot: "Забыли пароль?",
    dash_logout: "Выйти",
    hero_eyebrow: "Современная языковая школа",
    hero_title: "Учите языки. Открывайте двери.",
    hero_lead: "Развивайте языковые навыки с профессиональными преподавателями и современными методами.",
    hero_small: "Небольшие группы",
    hero_certified: "Сертифицированные преподаватели",
    hero_online: "Онлайн и в кампусе",
    hero_active: "Активных студентов",
    hero_rating: "Средняя оценка",
    courses_eyebrow: "Популярные курсы",
    courses_title: "Популярные курсы",
    course_en_beginner: "Английский — начальный",
    course_en_intermediate: "Английский — средний",
    course_ielts: "Подготовка к IELTS",
    course_business: "Деловой английский",
    course_german: "Немецкий язык",
    course_spanish: "Испанский язык",
    course_french: "Французский — начальный",
    about_eyebrow: "О нас",
    about_title: "О MF Language Academy",
    why_eyebrow: "Почему мы",
    why_title: "Школа, построенная вокруг речи",
    feat_teachers: "Опытные преподаватели",
    feat_schedule: "Гибкое расписание",
    feat_online: "Онлайн-обучение",
    feat_certificate: "Сертификат",
    feat_small: "Небольшие группы",
    feat_materials: "Современные материалы",
    teachers_title: "Учитесь у тех, кто преподаёт каждый день",
    stat_years: "Лет опыта",
    testimonials_eyebrow: "Отзывы",
    testimonials_title: "Что говорят студенты после занятия",
    cta_title: "Готовы начать обучение?",
    newsletter_eyebrow: "Рассылка",
    newsletter_title: "Новости курсов на почту",
    newsletter_success: "Вы в списке",
    label_email: "Эл. почта",
    label_password: "Пароль",
    label_phone: "Телефон",
    label_name: "Имя",
    label_subject: "Тема",
    label_message: "Сообщение",
    label_first: "Имя",
    label_last: "Фамилия",
    label_full_name: "Полное имя",
    label_bio: "О себе",
    label_languages: "Языки",
    label_new_password: "Новый пароль",
    dash_home: "Панель",
    dash_my_courses: "Мои курсы",
    dash_messages: "Сообщения",
    dash_profile: "Профиль",
    dash_settings: "Настройки",
    dash_hello: "Рады вас видеть",
    dash_welcome: "С возвращением, Maya",
    dash_snapshot: "Краткий обзор курсов, студентов и сообщений. Цифры на этом экране — пример.",
    dash_active_courses: "Активные курсы",
    dash_open_messages: "Открытые сообщения",
    dash_my_courses_stat: "Мои курсы",
    dash_completed: "Завершено",
    dash_progress: "В процессе",
    dash_certificates: "Сертификаты",
    auth_welcome: "С возвращением на занятие.",
    auth_welcome_text: "Продолжите курсы, сообщения и прогресс в учебном портале.",
    auth_aside: "Небольшие группы. Живые разговоры. Бостон и онлайн.",
    auth_portal: "Портал",
    auth_login_note: "Используйте любой корректный email и пароль от 8 символов. Этот просмотр не проверяет аккаунт.",
    auth_register_title: "Начните с ясного плана.",
    auth_reset: "Сброс пароля",
    courses_page_title: "Найдите курс под свою цель",
    filter_all: "Все",
    lang_english: "Английский",
    filter_exam: "Подготовка к экзамену",
    filter_business: "Бизнес",
    filter_german: "Немецкий",
    filter_spanish: "Испанский",
    filter_french: "Французский",
    level_beginner: "Начальный",
    level_intermediate: "Средний",
    level_advanced: "Продвинутый",
    level_upper: "Выше среднего",
    filter_online: "Онлайн",
    filter_offline: "Очно",
    filter_speaking: "Говорение",
    filter_vocab: "Лексика",
    badge_exam: "Экзамен",
    teachers_eyebrow: "Преподаватели",
    teachers_page_title: "Преподаватели, которые любят класс",
    teachers_cta: "Хотите преподавать с нами?",
    students_eyebrow: "Студенческая жизнь",
    students_title: "Те, кому есть зачем говорить",
    students_stories: "Истории",
    students_highlights: "Недавние успехи студентов",
    students_clubs: "Учебные клубы",
    students_checks: "Проверки прогресса",
    contact_title: "Связаться с языковой школой",
    contact_faq: "Вопросы до записи",
    contact_help: "Помощь до письма",
    paths_crumb: "Учебные пути",
    paths_lead: "Путь от первых приветствий до экзамена или рабочего английского.",
    paths_how: "Как это работает",
    paths_steps: "Четыре шага к сертификату",
    paths_step1: "1. Выберите курс",
    paths_step1_text: "Выберите уровень и цель в каталоге.",
    paths_step2: "2. Запишитесь",
    paths_step2_text: "Отправьте заявку со страницы курса.",
    paths_step3: "3. Учитесь и практикуйтесь",
    paths_step3_text: "Смотрите уроки, читайте заметки и проходите тесты.",
    paths_step4: "4. Получите сертификат",
    paths_step4_text: "Завершите путь и сохраните сертификат.",
    path_beginner: "Начальный английский",
    path_beginner_text: "Начните с приветствий, звуков и бытовых фраз.",
    path_intermediate: "Средний английский",
    path_intermediate_text: "Более длинные разговоры и более ясные письма.",
    path_advanced: "Продвинутый английский",
    path_advanced_text: "Обсуждайте сложные темы точнее.",
    faq_title: "Частые вопросы",
    events_crumb: "События",
    events_title: "События и мастерские",
    blog_crumb: "Блог",
    blog_title: "Учебные статьи",
    blog_featured: "Избранное",
    blog_speaking_title: "Как улучшить разговорный английский",
    blog_speaking_text: "Короткая ежедневная речь полезнее долгого молчаливого чтения. Каждый день — одна реальная ситуация.",
    instructors_crumb: "Преподаватели",
    instructors_lead: "Основная страница преподавателей остаётся. Этот список добавляет оценки и ссылки на профили.",
    notes_title: "Уведомления",
    notes_lead: "Непрочитанные выделены. Нажмите, чтобы отметить как прочитанное.",
    note_lesson: "Опубликован новый урок",
    note_lesson_text: "Английский A1 · Урок 03 готов.",
    note_quiz: "Результат теста",
    note_quiz_text: "Проверка знакомства · 9/10.",
    note_cert: "Сертификат готов",
    note_cert_text: "Сертификат начального испанского можно посмотреть.",
    note_announce: "Объявление преподавателя",
    note_announce_text: "Sarah Johnson перенесла понедельничную практику на 18:00.",
    status_unread: "Не прочитано",
    status_read: "Прочитано",
    profile_title: "Профиль и настройки",
    profile_lead: "Эту форму позже смогут использовать студент или преподаватель. На сервер ничего не сохраняется.",
    profile_role: "Предпросмотр студенческого аккаунта",
    faq_crumb: "Вопросы",
    tab_description: "Описание",
    tab_outcomes: "Чему вы научитесь",
    course_description: "Описание курса",
    course_included: "Включено",
    course_includes: "В этот курс входит",
    include_lifetime: "Доступ без срока",
    include_certificate: "Сертификат об окончании",
    include_devices: "Доступ с телефона и компьютера",
    course_curriculum: "Программа",
    course_modules: "Модули, уроки и тесты",
    course_before: "Перед стартом",
    course_requirements: "Требования",
    req_none: "Предыдущие знания английского не нужны.",
    req_computer: "Рекомендуются базовые навыки работы с компьютером.",
    req_internet: "Нужно подключение к интернету.",
    req_watch: "Студент должен смотреть видеоуроки и проходить тесты.",
    course_demo: "Демо-данные",
    course_progress: "Прогресс курса",
    course_progress_note: "Эта полоса — статичный пример, пока аккаунт студента не подключён.",
    course_instructor: "Преподаватель",
    course_sarah: "Учитесь с Sarah Johnson",
    role_sarah: "Преподаватель английского языка",
    course_reviews: "Отзывы",
    course_reviews_title: "Что говорят ученики",
    course_faq_title: "Вопросы перед записью",
    faq_beginners: "Курс подходит новичкам?",
    faq_access: "Как долго открыт доступ к курсу?",
    faq_certificate: "Я получу сертификат?",
    faq_mobile: "Можно учиться с телефона?",
    faq_mobile_answer: "Да. Уроки рассчитаны и на телефон, и на компьютер.",
    faq_quizzes: "Есть тесты?",
    faq_quizzes_answer: "Каждый модуль заканчивается коротким тестом на новые фразы.",
    faq_previous: "Нужен ли английский заранее?",
    faq_previous_answer: "Для этого начального курса предыдущие знания английского не нужны.",
    related_eyebrow: "Похожие курсы",
    related_title: "Продолжение после A1",
    course_a2: "Английский A2",
    course_a2_text: "Более длинные разговоры и более ясное повседневное письмо.",
    course_ielts_card: "Практика на время: аудирование, чтение, письмо и говорение.",
    course_speaking: "Разговорный английский",
    course_speaking_text: "Мастерская, где главное — более длинные реплики.",
    price_per_course: "за курс",
    role_elena: "Руководитель программы английского",
    role_daniel: "Преподаватель IELTS",
    role_sophie: "Преподаватель испанского",
    role_markus: "Преподаватель немецкого",
    role_aiko: "Тренер по разговору",
    btn_close: "Закрыть",
    faq_label: "FAQ",
    faq_open: "Помощь и вопросы",
    support_label: "Поддержка",
    faq_courses_certs: "Вопросы о курсах и сертификатах",
    faq_browse: "Смотреть курсы",
    faq_learning: "Обучение",
    faq_quiz: "Тесты и оценки",
    faq_contact_support: "Связаться с поддержкой",
    faq_cat_courses: "Курсы",
    faq_cat_lessons: "Уроки",
    faq_cat_quizzes: "Тесты",
    faq_cat_certs: "Сертификаты",
    faq_cat_account: "Аккаунт",
    faq_cat_tech: "Техническая поддержка",
    faq_q_enroll: "Как записаться на курс?",
    faq_a_enroll: "Выберите курс в каталоге, откройте страницу курса и нажмите «Записаться».",
    faq_q_view: "Как открыть свой курс?",
    faq_a_view: "Откройте «Мои курсы» на панели или вернитесь на страницу курса.",
    faq_q_access: "Как долго открыт доступ к курсу?",
    faq_a_access: "В этом просмотре срок указан на странице курса. После подключения аккаунта он будет храниться там.",
    faq_q_continue: "Как продолжить с места остановки?",
    faq_a_continue: "Откройте текущий курс на панели. Последний открытый урок остаётся вверху списка.",
    faq_q_complete: "Как отметить урок пройденным?",
    faq_a_complete: "Откройте урок до конца. Статус сохранится, когда будет подключён аккаунт студента.",
    faq_q_quiz: "Как работают тесты?",
    faq_a_quiz: "Каждый модуль заканчивается коротким тестом. Ответьте на вопросы и посмотрите результат на той же странице.",
    faq_q_score: "Где посмотреть балл?",
    faq_a_score: "Результат теста виден в уведомлениях и в прогрессе курса на панели.",
    faq_q_cert_when: "Когда я получу сертификат?",
    faq_a_cert_when: "Сертификат об окончании готов, когда уроки и тесты курса завершены.",
    faq_q_cert_where: "Где смотреть сертификаты?",
    faq_a_cert_where: "Откройте список сертификатов на панели.",
    faq_q_profile: "Как обновить профиль?",
    faq_a_profile: "На странице профиля измените имя, контакты и поле «О себе», затем сохраните.",
    faq_q_password: "Как сменить пароль?",
    faq_a_password: "На странице профиля заполните поле нового пароля. Этот просмотр не отправляет пароль на сервер.",
    faq_q_lesson_fail: "Что делать, если урок не открывается?",
    faq_a_lesson_fail: "Обновите страницу или попробуйте другой браузер. Если не помогло, напишите через форму контактов.",
    faq_q_contact: "Как связаться с поддержкой?",
    faq_a_contact: "Заполните форму на странице контактов или напишите на hello@mflanguage.academy.",
    aria_breadcrumb: "Навигационная цепочка",
    aria_primary: "Основное меню",
    show_password: "Показать пароль",
    hide_password: "Скрыть пароль",
    enroll_requested: "Заявка отправлена",
    search_all: "все курсы",
    duration_8: "8 недель",
    duration_10: "10 недель",
    lessons_32: "32 урока",
    lessons_20: "20 живых уроков",
    lessons_16: "16 живых уроков",
    course_a1_title: "Английский A1 — полный курс для начинающих",
    course_a1_summary: "Начните английский с нуля: речь с поддержкой, бытовая лексика и понятная грамматика, которую можно использовать в тот же день.",
    course_a1_overview: "Этот начальный путь ведёт от первых приветствий к коротким бытовым разговорам. В каждом модуле видео, чтение и короткий тест. Занятия практичные: произношение и повседневные ситуации в центре.",
    learn_intro_en: "Представьтесь на английском",
    learn_listen: "Понимайте простые разговоры",
    learn_vocab: "Соберите бытовую лексику",
    learn_grammar: "Используйте базовую грамматику",
    learn_pronounce: "Улучшите произношение",
    learn_daily: "Говорите в обычных ситуациях",
    course_mid_summary: "Перейдите от осторожных фраз к свободному обсуждению. Практика мнения, рассказа и рабочего английского.",
    course_mid_overview: "На этом уровне основы уже есть. Курс развивает точность и беглость через дискуссии, короткие тексты и живое аудирование.",
    course_de_summary: "Начните немецкий с практических диалогов, ясной грамматики и надёжного произношения.",
    course_es_summary: "Испанский, на котором можно говорить с первого занятия, с культурными заметками в каждой теме.",
    course_fr_summary: "Мягкий старт во французском: постановка произношения и разговоры для поездок и учёбы.",
    course_biz_summary: "Звучите ясно и уверенно на встречах, в презентациях и в деловой переписке.",
    course_ielts_summary: "Подготовка к Academic IELTS: задания на время, обратная связь по баллам и стратегия для каждой части.",
    role_maya: "Академический координатор",
    label_remember: "Запомнить меня",
    btn_create: "Создать аккаунт",
    btn_go_login: "Ко входу",
    empty_courses: "Нет курсов по этому запросу.",
    empty_results: "Нет результатов",
    pager_prev: "Назад",
    pager_next: "Далее",
    label_sort: "Сортировка",
    label_level: "Уровень",
    label_language: "Язык",
    label_price: "Цена",
    price_free: "Бесплатно",
    btn_preview: "Превью",
    btn_play_preview: "Смотреть превью",
    btn_submit_review: "Отправить отзыв",
    label_your_name: "Ваше имя",
    label_your_review: "Ваш отзыв",
    label_rating: "Оценка",
    err_message_short: "Напишите не меньше 10 символов.",
    err_name_required: "Укажите имя.",
    err_email_required: "Укажите эл. почту.",
    err_email_invalid: "Введите корректный адрес эл. почты.",
    err_phone_required: "Укажите телефон.",
    err_phone_invalid: "Введите корректный номер телефона.",
    err_password_required: "Укажите пароль.",
    err_password_short: "Используйте не меньше 8 символов.",
    err_first_required: "Укажите имя.",
    err_last_required: "Укажите фамилию.",
    err_subject_required: "Укажите тему.",
    err_message_required: "Напишите сообщение.",
    err_bio_required: "Заполните поле «О себе».",
    err_confirm_required: "Подтвердите пароль.",
    err_confirm_mismatch: "Пароли не совпадают.",
    profile_password_hint: "В этом просмотре оставьте пустым",
    profile_bio_value: "Я изучаю начальный английский три вечера в неделю.",
    search_catalog: "Поиск по каталогу",
    search_instructors: "Поиск преподавателей",
    search_students: "Поиск студентов",
    search_articles: "Поиск статей",
    password_hint: "Не меньше 8 символов",
    contact_subject_hint: "Курс или вопрос",
    contact_message_hint: "Расскажите о цели и удобном расписании",
    review_hint: "Чему вы научились?",
    label_confirm: "Подтвердите пароль",
    auth_new: "Новый студент",
    auth_back: "На сайт",
    auth_login_hint: "Корректная форма открывает предпросмотр панели.",
    auth_register_note: "Заполните данные. Форма проверяет их локально и не создаёт аккаунт.",
    auth_register_aside: "Создайте профиль студента и выберите курс под уровень и расписание.",
    auth_email_checked: "Почта проверена",
    auth_reset_note: "Введите эл. почту. Этот просмотр проверяет только формат.",
    language_menu: "Выбор языка",
    toggle_theme: "Переключить светлую и тёмную тему",
    theme_light: "Светлая тема включена",
    theme_dark: "Тёмная тема включена"
  }
};

Object.keys(phraseKeys).forEach(function (phrase) {
  translations.en[phraseKeys[phrase]] = phrase;
});
translations.en.language_menu = "Language";
translations.en.toggle_theme = "Switch light and dark mode";
translations.en.theme_light = "Light mode is on";
translations.en.theme_dark = "Dark mode is on";
translations.en.faq_label = "FAQ";
translations.en.faq_open = "Help and questions";
translations.en.support_label = "Support";
translations.en.faq_courses_certs = "Course and certificate FAQ";
translations.en.faq_browse = "Browse courses";
translations.en.faq_learning = "Learning";
translations.en.faq_quiz = "Quiz and grades";
translations.en.faq_contact_support = "Contact support";
translations.en.faq_cat_courses = "Courses";
translations.en.faq_cat_lessons = "Lessons";
translations.en.faq_cat_quizzes = "Quizzes";
translations.en.faq_cat_certs = "Certificates";
translations.en.faq_cat_account = "Account";
translations.en.faq_cat_tech = "Technical support";
translations.en.faq_q_enroll = "How do I enroll in a course?";
translations.en.faq_a_enroll = "Choose a course from the catalog, open the course details page, and click Enroll.";
translations.en.faq_q_view = "How can I view my course?";
translations.en.faq_a_view = "Open My Courses on the dashboard, or return to the course page.";
translations.en.faq_q_access = "How long do I have access?";
translations.en.faq_a_access = "This preview shows the access period on the course page. A student account will store it there later.";
translations.en.faq_q_continue = "How do I continue where I stopped?";
translations.en.faq_a_continue = "Open the course in progress on the dashboard. The last opened lesson stays at the top of the list.";
translations.en.faq_q_complete = "How do I mark a lesson as completed?";
translations.en.faq_a_complete = "Open the lesson through to the end. Completion is saved once a student account is connected.";
translations.en.faq_q_quiz = "How do quizzes work?";
translations.en.faq_a_quiz = "Each module ends with a short quiz. Answer the questions and review the result on that page.";
translations.en.faq_q_score = "Where can I see my score?";
translations.en.faq_a_score = "Quiz results appear in notifications and in the course progress on the dashboard.";
translations.en.faq_q_cert_when = "When do I receive my certificate?";
translations.en.faq_a_cert_when = "A certificate of completion is ready when the course lessons and quizzes are finished.";
translations.en.faq_q_cert_where = "Where can I view my certificates?";
translations.en.faq_a_cert_where = "Open the certificates list on the dashboard.";
translations.en.faq_q_profile = "How do I update my profile?";
translations.en.faq_a_profile = "On the profile page, edit your name, contact details, and bio, then save.";
translations.en.faq_q_password = "How do I change my password?";
translations.en.faq_a_password = "Fill in the new password field on the profile page. This preview does not send the password to a server.";
translations.en.faq_q_lesson_fail = "What should I do if a lesson does not open?";
translations.en.faq_a_lesson_fail = "Refresh the page or try another browser. If it still fails, write through the contact form.";
translations.en.faq_q_contact = "How can I contact support?";
translations.en.faq_a_contact = "Use the form on the contact page, or email hello@mflanguage.academy.";

let currentLanguage = "az";

function mfT(key, fallback) {
  const pack = translations[currentLanguage] || translations.az;
  if (pack && pack[key] != null && pack[key] !== "") return pack[key];
  if (translations.en && translations.en[key] != null) return translations.en[key];
  return fallback == null ? key : fallback;
}

function mfText(value) {
  if (value == null) return value;
  const key = phraseKeys[value];
  if (!key) return value;
  return mfT(key, value);
}

function setElementText(el, text) {
  const nodes = [];
  el.childNodes.forEach(function (node) {
    if (node.nodeType === 3 && node.textContent.trim()) nodes.push(node);
  });
  if (!nodes.length) {
    el.textContent = text;
    return;
  }
  const node = nodes[nodes.length - 1];
  const lead = /^\s/.test(node.textContent) ? " " : "";
  const trail = /\s$/.test(node.textContent) ? " " : "";
  node.textContent = lead + text + trail;
}

function applyTheme(theme) {
  const dark = theme === "dark";
  if (dark) document.documentElement.setAttribute("data-theme", "dark");
  else document.documentElement.removeAttribute("data-theme");
  document.querySelectorAll(".theme-toggle").forEach(function (button) {
    button.setAttribute("aria-pressed", dark ? "true" : "false");
    const label = mfT(dark ? "theme_dark" : "theme_light");
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
    const icon = button.querySelector("i");
    if (icon) icon.className = dark ? "bi bi-sun" : "bi bi-moon-stars";
  });
}

function setLanguage(language) {
  if (language !== "az" && language !== "ru" && language !== "en") language = "az";
  currentLanguage = language;
  document.documentElement.lang = language;
  try { localStorage.setItem("mf-language", language); } catch (error) { /* storage may be blocked */ }

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const value = mfT(el.getAttribute("data-i18n"), null);
    if (value == null) return;
    setElementText(el, value);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    const value = mfT(el.getAttribute("data-i18n-placeholder"), null);
    if (value != null) el.setAttribute("placeholder", value);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
    const value = mfT(el.getAttribute("data-i18n-aria-label"), null);
    if (value != null) el.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
    const value = mfT(el.getAttribute("data-i18n-title"), null);
    if (value != null) el.dataset.title = value;
  });
  document.querySelectorAll("[data-i18n-role]").forEach(function (el) {
    const value = mfT(el.getAttribute("data-i18n-role"), null);
    if (value != null) el.dataset.role = value;
  });
  document.querySelectorAll("[data-i18n-bio]").forEach(function (el) {
    const value = mfT(el.getAttribute("data-i18n-bio"), null);
    if (value != null) el.dataset.bio = value;
  });

  const code = language.toUpperCase();
  document.querySelectorAll(".lang-current").forEach(function (el) { el.textContent = code; });
  document.querySelectorAll("[data-set-lang]").forEach(function (button) {
    const selected = button.getAttribute("data-set-lang") === language;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-selected", selected ? "true" : "false");
  });

  document.querySelectorAll(".nav-toggle").forEach(function (toggle) {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-label", mfT(open ? "close_menu" : "open_menu"));
  });

  document.querySelectorAll("[data-password-toggle]").forEach(function (button) {
    const input = button.parentElement && button.parentElement.querySelector("input");
    const showing = input && input.type === "text";
    button.setAttribute("aria-label", mfT(showing ? "hide_password" : "show_password"));
  });

  const activeView = document.querySelector("[data-view-target].is-active");
  const dashTitle = document.querySelector(".dash-title");
  if (activeView && dashTitle && activeView.dataset.title) dashTitle.textContent = activeView.dataset.title;

  const teacherModal = document.querySelector('[data-modal="teacher"]');
  if (teacherModal && teacherModal.classList.contains("is-open")) {
    const name = teacherModal.querySelector("[data-teacher='name']");
    const match = name && Array.prototype.find.call(document.querySelectorAll("[data-teacher-open]"), function (button) {
      return button.dataset.name === name.textContent;
    });
    if (match) {
      const role = teacherModal.querySelector("[data-teacher='role']");
      const bio = teacherModal.querySelector("[data-teacher='bio']");
      if (role) role.textContent = match.dataset.role || "";
      if (bio) bio.textContent = match.dataset.bio || "";
    }
  }

  const queryLabel = document.querySelector("[data-search-query]");
  if (queryLabel) {
    const query = new URLSearchParams(window.location.search).get("q");
    if (!query) queryLabel.textContent = mfT("search_all");
  }

  if (typeof window.renderCourseDetail === "function") window.renderCourseDetail();
  applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
}

function closeLangMenus(except) {
  document.querySelectorAll(".lang-switch").forEach(function (wrap) {
    if (wrap === except) return;
    const menu = wrap.querySelector(".lang-menu");
    const toggle = wrap.querySelector(".lang-toggle");
    if (menu) menu.hidden = true;
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });
}

function initLanguageSwitcher() {
  if (document.documentElement.dataset.langReady === "1") return;
  document.documentElement.dataset.langReady = "1";

  document.querySelectorAll(".lang-switch").forEach(function (wrap) {
    const toggle = wrap.querySelector(".lang-toggle");
    const menu = wrap.querySelector(".lang-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      const open = menu.hidden;
      closeLangMenus(open ? wrap : null);
      menu.hidden = !open;
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) {
        const current = menu.querySelector(".is-active") || menu.querySelector("[data-set-lang]");
        if (current) current.focus();
      }
    });

    toggle.addEventListener("keydown", function (event) {
      if (event.key !== "ArrowDown" && event.key !== "Enter" && event.key !== " ") return;
      if (event.key === "Enter" || event.key === " ") return;
      event.preventDefault();
      menu.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      const first = menu.querySelector("[data-set-lang]");
      if (first) first.focus();
    });

    menu.addEventListener("keydown", function (event) {
      const options = Array.prototype.slice.call(menu.querySelectorAll("[data-set-lang]"));
      const index = options.indexOf(document.activeElement);
      if (event.key === "Escape") {
        menu.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        options[(index + 1) % options.length].focus();
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        options[(index - 1 + options.length) % options.length].focus();
      } else if (event.key === "Home") {
        event.preventDefault();
        options[0].focus();
      } else if (event.key === "End") {
        event.preventDefault();
        options[options.length - 1].focus();
      }
    });

    menu.querySelectorAll("[data-set-lang]").forEach(function (button) {
      button.addEventListener("click", function () {
        setLanguage(button.getAttribute("data-set-lang"));
        menu.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      });
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".lang-switch")) closeLangMenus(null);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeLangMenus(null);
  });
}

function initThemeSwitcher() {
  if (document.documentElement.dataset.themeReady === "1") return;
  document.documentElement.dataset.themeReady = "1";
  document.querySelectorAll(".theme-toggle").forEach(function (button) {
    button.addEventListener("click", function () {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      try { localStorage.setItem("mf-theme", next); } catch (error) { /* storage may be blocked */ }
      applyTheme(next);
    });
  });
}

function loadSavedPreferences() {
  let theme = "light";
  let language = "az";
  try {
    const savedTheme = localStorage.getItem("mf-theme");
    if (savedTheme === "dark" || savedTheme === "light") theme = savedTheme;
    const savedLanguage = localStorage.getItem("mf-language");
    if (savedLanguage === "az" || savedLanguage === "ru" || savedLanguage === "en") language = savedLanguage;
  } catch (error) { /* keep defaults */ }
  applyTheme(theme);
  setLanguage(language);
}

window.mfT = mfT;
window.mfText = mfText;
window.MF_PHRASE_KEYS = phraseKeys;
window.setLanguage = setLanguage;
window.applyTheme = applyTheme;
window.initThemeSwitcher = initThemeSwitcher;
window.initLanguageSwitcher = initLanguageSwitcher;
window.loadSavedPreferences = loadSavedPreferences;

document.addEventListener("DOMContentLoaded", function () {
  loadSavedPreferences();
  initThemeSwitcher();
  initLanguageSwitcher();
});
