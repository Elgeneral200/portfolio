(() => {
  'use strict';

  const CONFIG = {
    englishName: 'Muhammed Fathi Kamal',
    arabicName: 'محٍمدِ فُتحٍي ڪمالُِ',
    nameSelector: 'a.logo',
    pageTitle: 'Muhammed Fathi Portfolio'
  };

  // Define roles for both languages
  const DYNAMIC_ROLES = {
    en: ['Python Developer', 'C++ Developer', 'Data Scientist'],
    ar: ['مطور بايثون', 'مطور ++C', 'عالم بيانات']
  };

  const DYNAMIC_PREFIXES = {
    en: "I'm a ",
    ar: 'أنا '
  };

  const DYNAMIC_SUFFIXES = {
    en: ' who builds practical solutions.',
    ar: ' أبني حلول عملية.'
  };

  // COMPREHENSIVE translation dictionary with CASE STUDY content
  const DICT = new Map([
    // Navigation & Global
    ['Skip to content', 'تجاوز إلى المحتوى'],
    ['Projects', 'المشاريع'],
    ['About', 'نبذة'],
    ['Education', 'التعليم'],
    ['Résumé', 'السيرة الذاتية'],
    ['Contact', 'تواصل'],
    
    // Hero Section
    ["I'm a 3rd-year AI student at Ahram Canadian University and DEPI Program graduate. I turn data into practical outcomes through clean code, strong algorithms, and reliable databases.", 'أنا طالب في السنة الثالثة بتخصص الذكاء الاصطناعي بجامعة الأهرام الكندية وخريج برنامج DEPI. أحوّل البيانات إلى نتائج عملية عبر كود نظيف وخوارزميات قوية وقواعد بيانات موثوقة.'],
    ['Core skills', 'المهارات الأساسية'],
    ['Machine Learning', 'تعلّم الآلة'],
    ['Data Science', 'علوم البيانات'],
    ['AI Development', 'تطوير الذكاء الاصطناعي'],
    ['See projects', 'عرض المشاريع'],
    ['View résumé →', 'عرض السيرة الذاتية ←'],
    ['Available for internships & opportunities', 'متاح للتدريب والفرص'],

    // About Section
    ["I'm Muhammad Fathi, an AI-focused developer passionate about turning complex data into actionable insights. Currently pursuing Artificial Intelligence at Ahram Canadian University with a 3.54 GPA, while completing advanced training through Egypt's DEPI program.", 'أنا محمد فتحي، مطوّر يركز على الذكاء الاصطناعي ومتحمس لتحويل البيانات المعقدة إلى رؤى قابلة للتنفيذ. أدرس حاليًا الذكاء الاصطناعي في جامعة الأهرام الكندية بمعدل 3.54، بينما أكمل التدريب المتقدم من خلال برنامج DEPI في مصر.'],
    ['My strength lies in building end-to-end solutions—from data collection and analysis to deployment. I enjoy the challenge of optimizing algorithms and creating maintainable code that delivers measurable value.', 'تكمن قوتي في بناء حلول شاملة—من جمع البيانات والتحليل إلى النشر. أستمتع بتحدي تحسين الخوارزميات وإنشاء كود قابل للصيانة يحقق قيمة قابلة للقياس.'],

    // Education Section
    ['Education & Learning', 'التعليم والتعلّم'],
    ['Ahram Canadian University', 'جامعة الأهرام الكندية'],
    ['Bachelor of Computer Science - Artificial Intelligence', 'بكالوريوس علوم الحاسوب - الذكاء الاصطناعي'],
    ['3rd Year Student', 'طالب السنة الثالثة'],
    ['Relevant Coursework:', 'المواد الدراسية ذات الصلة:'],
    ['Probability & Statistics', 'الاحتمالات والإحصاء'],
    ['Algorithms', 'الخوارزميات'],
    ['Data Structures', 'هياكل البيانات'],
    ['Linear Algebra', 'الجبر الخطي'],
    ['Digital Egypt Pioneers Initiative (MCIT)', 'مبادرة رواد مصر الرقمية (وزارة الاتصالات)'],
    ['AI & Data Science - Data Scientist Track', 'الذكاء الاصطناعي وعلوم البيانات - مسار عالم البيانات'],
    ['In Progress', 'قيد التقدم'],
    ['Program Focus:', 'تركيز البرنامج:'],
    ['Python for Data Science & AI Development', 'بايثون لعلوم البيانات وتطوير الذكاء الاصطناعي'],
    ['Databases and SQL for Data Science', 'قواعد البيانات وSQL لعلوم البيانات'],
    ['Data Analysis & Visualization with Python', 'تحليل البيانات والتصور المرئي بـ بايثون'],
    ['Machine Learning with Python', 'تعلّم الآلة بـ بايثون'],
    ['MLOps Tools, MLflow and Hugging Face', 'أدوات MLOps وMLflow وHugging Face'],
    
    // Timeline dates
    ['2023 - 2027', '٢٠٢٣ - ٢٠٢٧'],
    ['Jul 2025 - Present', 'يوليو ٢٠٢٥ - الآن'],
    ['till now', 'حتى الآن'],

    // Certifications Section
    ['Certifications & Achievements', 'الشهادات والإنجازات'],
    ['Python Essentials 1', 'أساسيات بايثون 1'],
    ['Cisco Networking Academy', 'أكاديمية سيسكو للشبكات'],
    ['June 2025', 'يونيو 2025'],
    ['Verify Credential →', 'التحقق من الشهادة ←'],
    ['Academic Excellence', 'التفوق الأكاديمي'],
    ['Current GPA: 3.54/4.0', 'المعدل التراكمي الحالي: 3.54/4.0'],
    ['AI Specialization Track', 'مسار تخصص الذكاء الاصطناعي'],
    ['DEPI Program', 'برنامج DEPI'],
    ['Ministry of Communications (MCIT)', 'وزارة الاتصالات وتكنولوجيا المعلومات'],
    ['In Progress - Dec 2025', 'قيد التقدم - ديسمبر 2025'],
    ['Data Science Track', 'مسار علوم البيانات'],

    // Skills Section
    ['Technical Skills', 'المهارات التقنية'],
    ['Programming Languages', 'لغات البرمجة'],
    ['Python', 'بايثون'],
    ['C++', '++C'],
    ['SQL', 'SQL'],
    ['Data Science & AI', 'علوم البيانات والذكاء الاصطناعي'],
    ['Data Analysis', 'تحليل البيانات'],
    ['MLOps', 'MLOps'],
    ['Tools & Technologies', 'الأدوات والتقنيات'],
    ['PostgreSQL', 'PostgreSQL'],
    ['Git', 'Git'],
    ['Linux', 'لينكس'],
    ['Frameworks & Libraries', 'الأطر والمكتبات'],
    ['PySide6', 'PySide6'],
    ['Pandas', 'Pandas'],
    ['Scikit-learn', 'Scikit-learn'],

    // Projects Section
    ['Featured Projects', 'مشاريع مميزة'],
    ['All', 'الكل'],
    ['GUI', 'واجهة رسومية'],
    ['Car Sale Management System', 'نظام إدارة مبيعات السيارات'],
    ['Python OOP + PySide6 GUI with SQLite. Manage inventory, customers, transactions; analytics and Excel export.', 'برمجة كائنية في بايثون + واجهة PySide6 مع SQLite. إدارة المخزون والعملاء والمعاملات؛ تحليلات وتصدير إلى Excel.'],
    ['OOP', 'البرمجة كائنية التوجه'],
    ['SQLite', 'SQLite'],
    ['Case study', 'دراسة حالة'],
    ['Code →', 'الكود ←'],
    ['Interval Scheduler', 'مجدول الفترات'],
    ['C++ greedy interval partitioning with a menu-driven CLI to compute minimum rooms/resources for overlapping intervals.', 'تقسيم الفترات بأسلوب جشع في ++C مع واجهة سطر أوامر لحساب أقل عدد من الموارد للفترات المتداخلة.'],
    ['Greedy', 'جشع'],
    ['CLI', 'واجهة سطر الأوامر'],
    ['City Hospital Management (GUI)', 'إدارة مستشفى المدينة (واجهة رسومية)'],
    ['Python + PySide6 GUI with SQLite. Manage patients, staff, departments, appointments; dark mode dashboard and stats.', 'بايثون + واجهة PySide6 مع SQLite. إدارة المرضى والموظفين والأقسام والمواعيد؛ لوحة تحكم بوضع داكن وإحصاءات.'],
    ['CRUD', 'CRUD'],
    ['See more on', 'المزيد على'],

    // Resume & Contact Section
    ['View PDF', 'عرض PDF'],
    ['Download PDF', 'تحميل PDF'],
    ["Let's work together", 'لننجز العمل معًا'],
    ['I reply within 24 hours.', 'أرد خلال 24 ساعة.'],
    ['GitHub: Elgeneral200', 'GitHub: Elgeneral200'],
    ['LinkedIn: Muhammad Fathi', 'LinkedIn: Muhammad Fathi'],
    ['Download résumé', 'تحميل السيرة الذاتية'],

    // ===== CASE STUDY TRANSLATIONS =====
    ['Back to Portfolio', 'العودة للمعرض'],
    
    // Car Sale Management System Case Study
    ['Problem', 'المشكلة'],
    ['I wanted to build a system to manage car sales effectively—display listings and add/update/delete cars. The first version was a C++ console app. I then upgraded to Python with a full GUI to simulate a real marketplace.', 'أردت بناء نظام لإدارة مبيعات السيارات بفعالية—عرض القوائم وإضافة/تحديث/حذف السيارات. كانت النسخة الأولى تطبيق وحدة تحكم بـ ++C. ثم قمت بالترقية إلى بايثون مع واجهة رسومية كاملة لمحاكاة سوق حقيقي.'],
    
    ['Approach', 'المنهج'],
    ['Structured OOP model: Car, Vehicle, Salesperson, Startup, ManagingSystem, Main, GUI, and a SQL-backed Data layer.', 'نموذج برمجة كائنية منظم: سيارة، مركبة، بائع، شركة ناشئة، نظام الإدارة، الرئيسي، الواجهة الرسومية، وطبقة بيانات مدعومة بـ SQL.'],
    ['Core features: add/search cars, dashboards, export to Excel.', 'الميزات الأساسية: إضافة/البحث عن السيارات، لوحات التحكم، التصدير إلى Excel.'],
    ['Advanced UX: analytics and theme toggling.', 'تجربة مستخدم متقدمة: التحليلات وتبديل السمات.'],
    ['Migration: C++ console → clean Python OOP architecture.', 'الهجرة: وحدة تحكم ++C ← هندسة برمجة كائنية نظيفة بـ بايثون.'],
    ['GUI: built with PySide6 for a marketplace-like experience.', 'الواجهة الرسومية: مبنية بـ PySide6 لتجربة تشبه السوق.'],
    ['Persistence: SQLite for listings and sales data.', 'الاستمرارية: SQLite لبيانات القوائم والمبيعات.'],
    
    ['Results / Impact', 'النتائج والتأثير'],
    ['Moved from console to a user-friendly GUI workflow.', 'الانتقال من وحدة التحكم إلى سير عمل واجهة رسومية سهلة الاستخدام.'],
    ['Faster decisions via integrated analytics/dashboards.', 'قرارات أسرع عبر التحليلات/لوحات التحكم المتكاملة.'],
    ['Reduced manual work with Excel exports and persistent storage.', 'تقليل العمل اليدوي مع تصدير Excel والتخزين الدائم.'],
    
    ['Stack', 'التقنيات المستخدمة'],
    ['Python (3.x), PySide6, SQLite, openpyxl', 'بايثون (3.x)، PySide6، SQLite، openpyxl'],
    
    ['Links', 'الروابط'],
    ['Repository', 'المستودع'],

    // City Hospital Management Case Study
    ['Overview', 'نظرة عامة'],
    ['Python-based application to manage hospital operations with a dark-mode PySide6 GUI. Layered architecture (Domain → DB → GUI) for scalability and maintainability.', 'تطبيق قائم على بايثون لإدارة عمليات المستشفى مع واجهة PySide6 بنمط داكن. هندسة طبقية (المجال ← قاعدة البيانات ← الواجهة الرسومية) للقابلية للتوسع والصيانة.'],
    
    ['Manual hospital workflows are error-prone and slow. Hospitals need a centralized system to track patients, staff, departments, and appointments, and provide real-time statistics.', 'سير العمل اليدوي للمستشفيات عرضة للأخطاء وبطيء. تحتاج المستشفيات إلى نظام مركزي لتتبع المرضى والموظفين والأقسام والمواعيد، وتقديم إحصاءات في الوقت الفعلي.'],
    
    ['Domain (OOP):', 'المجال (البرمجة كائنية التوجه):'],
    ['Person (base), Patient, Staff, Department, Hospital.', 'شخص (أساسي)، مريض، موظف، قسم، مستشفى.'],
    ['Database (SQLite):', 'قاعدة البيانات (SQLite):'],
    ['persistent storage; CRUD for patients, staff, appointments.', 'تخزين دائم؛ CRUD للمرضى والموظفين والمواعيد.'],
    ['GUI (PySide6):', 'الواجهة الرسومية (PySide6):'],
    ['dark dashboard; tabs for Departments, Patients, Staff, Search, Appointments.', 'لوحة تحكم داكنة؛ علامات تبويب للأقسام والمرضى والموظفين والبحث والمواعيد.'],
    ['Stats:', 'الإحصاءات:'],
    ['totals for patients/staff/appointments; appointment status chart.', 'إجماليات للمرضى/الموظفين/المواعيد؛ مخطط حالة المواعيد.'],
    ['Workflows:', 'سير العمل:'],
    ['add/search patients/staff; assign to departments; discharge/transfer patients; schedule appointments.', 'إضافة/البحث عن المرضى/الموظفين؛ تعيين للأقسام؛ خروج/نقل المرضى؛ جدولة المواعيد.'],
    
    ['Results', 'النتائج'],
    ['Efficiency:', 'الكفاءة:'],
    ['reduced manual record work.', 'تقليل العمل اليدوي للسجلات.'],
    ['Scalability:', 'القابلية للتوسع:'],
    ['layered design eases future features (billing, reports, auth).', 'التصميم الطبقي يسهل الميزات المستقبلية (الفوترة، التقارير، المصادقة).'],
    ['UX:', 'تجربة المستخدم:'],
    ['dark-mode UI improves readability.', 'واجهة النمط الداكن تحسن القراءة.'],
    ['Data integrity:', 'سلامة البيانات:'],
    ['structured, persistent storage with SQLite.', 'تخزين منظم ودائم مع SQLite.'],
    
    ['Python 3.x, PySide6 (Qt for Python), SQLite3 • Tools: VS Code, GitHub', 'بايثون 3.x، PySide6 (Qt لبايثون)، SQLite3 • الأدوات: VS Code، GitHub'],

    // Interval Scheduler Case Study
    ['Scheduling overlapping intervals (e.g., rooms, resources) requires computing the minimum number of resources needed. Doing this manually is hard and error-prone.', 'جدولة الفترات المتداخلة (مثل الغرف، الموارد) يتطلب حساب العدد الأدنى من الموارد المطلوبة. القيام بذلك يدويًا صعب وعرضة للأخطاء.'],
    
    ['OOP model:', 'نموذج البرمجة كائنية التوجه:'],
    ['Interval (time range) and Scheduler (allocations).', 'فترة (نطاق زمني) ومجدول (التخصيصات).'],
    ['Greedy interval partitioning to minimize rooms/resources.', 'تقسيم الفترات بأسلوب جشع لتقليل الغرف/الموارد.'],
    ['Sorted by start time; efficient room-availability checks.', 'مرتبة حسب وقت البداية؛ فحوصات فعالة لتوفر الغرف.'],
    ['Menu-driven CLI for input, validation, and results.', 'واجهة سطر أوامر مدفوعة بالقائمة للإدخال والتحقق والنتائج.'],
    ['Enhanced readability with colored text and ASCII UI (Windows Console).', 'تحسين القراءة بالنص الملون وواجهة ASCII (وحدة تحكم ويندوز).'],
    ['Robust error handling and input validation.', 'معالجة قوية للأخطاء والتحقق من الإدخال.'],
    
    ['Fast computation of the minimum number of rooms required.', 'حساب سريع للعدد الأدنى من الغرف المطلوبة.'],
    ['Clear, interactive CLI improved usability.', 'واجهة سطر أوامر واضحة وتفاعلية حسنت سهولة الاستخدام.'],
    ['Demonstrates practical use of greedy algorithms in scheduling.', 'يوضح الاستخدام العملي للخوارزميات الجشعة في الجدولة.'],
    
    ['C++ (MinGW), Windows Console API', '++C (MinGW)، واجهة برمجة تطبيقات وحدة تحكم ويندوز'],

    // Common meta elements
    ['Solo • 2024 (C++) → 2025 (Python)', 'فردي • 2024 (++C) ← 2025 (بايثون)'],
    ['Solo • 2024', 'فردي • 2024']
  ]);

  function dynamicTranslate(str, lang) {
    if (lang !== 'ar') return null;
    const m = /^Showing\s+(\d+)\s+projects?$/.exec(str.trim());
    if (!m) return null;
    const n = Number(m[1]);
    const word = (n === 1) ? 'مشروع' : (n <= 10 ? 'مشاريع' : 'مشروع');
    return `إظهار ${n} ${word}`;
  }

  const ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];

  function isIgnoredNode(node) {
    let el = node.nodeType === 3 ? node.parentElement : node;
    while (el) {
      if (el.hasAttribute && (el.hasAttribute('data-i18n-ignore') || el.classList.contains('dynamic-text'))) return true;
      const tag = el.tagName;
      if (tag && /^(SCRIPT|STYLE|NOSCRIPT|IFRAME|CANVAS|SVG|VIDEO|AUDIO|CODE|KBD|SAMP|VAR|PRE)$/i.test(tag)) return true;
      el = el.parentElement;
    }
    return false;
  }

  const TEXT_NODES = []; // { node, original }
  const ATTR_NODES = []; // { el, originals: Map(attr -> value) }

  function cacheNodes() {
    TEXT_NODES.length = 0;
    ATTR_NODES.length = 0;
    
    const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(tn) {
        if (!tn.nodeValue || !tn.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return isIgnoredNode(tn) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    let tn;
    while ((tn = textWalker.nextNode())) {
      TEXT_NODES.push({ node: tn, original: tn.nodeValue });
    }

    const elWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
      acceptNode(el) { return isIgnoredNode(el) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; }
    });
    let el;
    while ((el = elWalker.nextNode())) {
      const map = new Map();
      ATTRS.forEach(a => { const v = el.getAttribute(a); if (v) map.set(a, v); });
      if (map.size) ATTR_NODES.push({ el, originals: map });
    }
  }

  function setRoot(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir  = (lang === 'ar') ? 'rtl' : 'ltr';
    document.title = CONFIG.pageTitle;
  }

  function updateName(lang) {
    const el = document.querySelector(CONFIG.nameSelector);
    if (!el || el.hasAttribute('data-i18n-ignore')) return;
    let tn = [...el.childNodes].find(n => n.nodeType === 3);
    if (!tn) { tn = document.createTextNode(''); el.insertBefore(tn, el.firstChild); }
    const target = (lang === 'ar' ? CONFIG.arabicName : CONFIG.englishName) + ' ';
    if (tn.nodeValue !== target) tn.nodeValue = target;
  }

  function updateDynamicText(lang) {
    const prefixEl = document.querySelector('.hero-prefix');
    const suffixEl = document.querySelector('.hero-suffix');
    
    if (prefixEl) {
      prefixEl.textContent = DYNAMIC_PREFIXES[lang] || DYNAMIC_PREFIXES.en;
    }
    
    if (suffixEl) {
      suffixEl.textContent = DYNAMIC_SUFFIXES[lang] || DYNAMIC_SUFFIXES.en;
    }

    // Restart the dynamic text animation with new language
    if (window.dynamicTextAnimation) {
      window.dynamicTextAnimation.updateLanguage(lang);
    }
  }

  function batchProcess(items, fn, done) {
    const CHUNK = 250;
    let i = 0;
    function step() {
      const end = Math.min(i + CHUNK, items.length);
      for (; i < end; i++) fn(items[i], i);
      if (i < items.length) requestAnimationFrame(step);
      else done && done();
    }
    if (items.length) requestAnimationFrame(step); else done && done();
  }

  function applyLanguage(lang) {
    setRoot(lang);
    updateName(lang);
    updateDynamicText(lang);

    // Update toggle label immediately
    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.textContent = (lang === 'ar') ? 'EN' : 'AR';
      btn.setAttribute('aria-label', (lang === 'ar') ? 'Switch language to English' : 'التبديل إلى العربية');
    }

    // OPTIMIZED: Batch text nodes with reduced chunks for better performance
    batchProcess(TEXT_NODES, ({ node, original }) => {
      const trimmed = original.trim();
      let next = original;
      if (lang === 'ar') {
        const mapped = DICT.get(trimmed) || dynamicTranslate(trimmed, 'ar');
        if (mapped) next = original.replace(trimmed, mapped);
      }
      if (node.nodeValue !== next) node.nodeValue = next;
    }, () => {
      // Batch attributes after text nodes
      batchProcess(ATTR_NODES, ({ el, originals }) => {
        originals.forEach((origVal, attr) => {
          let next = origVal;
          if (lang === 'ar') {
            const mapped = DICT.get(origVal.trim());
            if (mapped) next = mapped;
          }
          if (el.getAttribute(attr) !== next) el.setAttribute(attr, next);
        });
      });
    });
  }

  function ensureToggle() {
    let btn = document.getElementById('lang-toggle');
    if (!btn) {
      const ul = document.getElementById('primary-nav') || document.querySelector('header .nav');
      if (!ul) return null;
      const li = document.createElement('li');
      btn = document.createElement('button');
      btn.id = 'lang-toggle'; btn.type = 'button'; btn.className = 'btn outline small';
      btn.textContent = 'AR';
      btn.setAttribute('aria-label', 'التبديل إلى العربية');
      li.appendChild(btn); ul.appendChild(li);
    }
    return btn;
  }

  function init() {
    cacheNodes();
    const saved = localStorage.getItem('siteLang');
    const start = saved || (navigator.language && navigator.language.startsWith('ar') ? 'ar' : 'en');
    applyLanguage(start);

    const btn = ensureToggle();
    btn?.addEventListener('click', () => {
      const next = (document.documentElement.lang === 'ar') ? 'en' : 'ar';
      localStorage.setItem('siteLang', next);
      applyLanguage(next);
    });
  }

  // Export for dynamic text animation
  window.getLanguageRoles = (lang) => DYNAMIC_ROLES[lang] || DYNAMIC_ROLES.en;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();