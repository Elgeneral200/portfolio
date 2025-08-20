(() => {
  'use strict';

  const CONFIG = {
    englishName: 'Muhammed Fathi Kamal',
    arabicName: 'محٍمدِ فُتحٍي ڪمالُِ',
    nameSelector: 'a.logo',
    pageTitle: 'Muhammed Fathi Portfolio'
  };

  // Text-match dictionary
  const DICT = new Map([
    // Home / global UI
    ['Skip to content', 'تجاوز إلى المحتوى'],
    ['Projects', 'المشاريع'],
    ['About', 'نبذة'],
    ['Résumé', 'السيرة الذاتية'],
    ['Contact', 'تواصل'],
    ['I build data & ML solutions with Python, C++, and SQL.', 'أبني حلول البيانات وتعلّم الآلة باستخدام بايثون و++C وSQL.'],
    ["I'm a 3rd-year Computer Science student at Ahram Canadian University (AI specialization), and enrolled in the AI & Data Science diploma by Egypt's Digital Egypt Pioneers Initiative (MCIT). I turn data into practical outcomes through clean code, strong algorithms, and reliable databases.", 'أنا طالب في السنة الثالثة بعلوم الحاسوب (تخصص ذكاء اصطناعي) بجامعة الأهرام الكندية، وملتحق بدبلومة الذكاء الاصطناعي وعلوم البيانات من مبادرة رواد مصر الرقمية (وزارة الاتصالات). أحوّل البيانات إلى نتائج عملية عبر كود نظيف وخوارزميات قوية وقواعد بيانات موثوقة.'],
    ['Core skills', 'المهارات الأساسية'],
    ['See projects', 'عرض المشاريع'],
    ['View résumé →', 'عرض السيرة الذاتية ←'],
    ['Featured projects', 'مشاريع مميزة'],
    ['All', 'الكل'],
    ['Python', 'بايثون'],
    ['C++', '++C'],
    ['SQL', 'SQL'],
    ['GUI', 'واجهة رسومية'],

    // Cards and quick descriptions
    ['Car Sale Management System', 'نظام إدارة مبيعات السيارات'],
    ['Python OOP + PySide6 GUI with SQLite. Manage inventory, customers, transactions; analytics and Excel export.', 'برمجة كائنية في بايثون + واجهة PySide6 مع SQLite. إدارة المخزون والعملاء والمعاملات؛ تحليلات وتصدير إلى Excel.'],
    ['Case study', 'دراسة حالة'],

    ['Interval Scheduler', 'مجدول الفترات'],
    ['C++ greedy interval partitioning with a menu-driven CLI to compute minimum rooms/resources for overlapping intervals.', 'تقسيم الفترات بأسلوب جشع في ++C مع واجهة سطر أوامر لحساب أقل عدد من الموارد للفترات المتداخلة.'],

    ['City Hospital Management (GUI)', 'إدارة مستشفى المدينة (واجهة رسومية)'],
    ['Python + PySide6 GUI with SQLite. Manage patients, staff, departments, appointments; dark mode dashboard and stats.', 'بايثون + واجهة PySide6 مع SQLite. إدارة المرضى والموظفين والأقسام والمواعيد؛ لوحة تحكم بوضع داكن وإحصاءات.'],

    ['See more on', 'المزيد على'],

    // About/Skills/Contact
    ["I'm Muhammad Fathi, a Data/ML-focused developer who enjoys building practical, maintainable solutions. Strengths include OOP, algorithms, and data structures across Python, C++, and SQL. I'm open to internships, junior roles, and freelance work—especially where I can deliver measurable value and keep learning.", 'أنا محمد فتحي، مطوّر يركز على البيانات وتعلّم الآلة ويستمتع ببناء حلول عملية قابلة للصيانة. نقاط قوتي تشمل البرمجة كائنية التوجه والخوارزميات وهياكل البيانات عبر بايثون و++C وSQL. منفتح على التدريب والوظائف المبتدئة والعمل الحر.'],
    ['Skills', 'المهارات'],
    ['Tools & technologies', 'الأدوات والتقنيات'],
    ['View PDF', 'عرض PDF'],
    ['Download PDF', 'تحميل PDF'],
    ["Let's work together", 'لننجز العمل معًا'],
    ['I reply within 24 hours.', 'أرد خلال 24 ساعة.'],
    ['GitHub: Elgeneral200', 'GitHub: Elgeneral200'],
    ['LinkedIn: Muhammad Fathi', 'LinkedIn: Muhammad Fathi'],
    ['Download résumé', 'تحميل السيرة الذاتية'],

    // Case-study shared
    ['Projects / Case study', 'المشاريع / دراسة حالة'],
    ['Problem', 'المشكلة'],
    ['Approach', 'المنهجية'],
    ['Results / Impact', 'النتائج / الأثر'],
    ['Results', 'النتائج'],
    ['Stack', 'التقنيات'],
    ['Links', 'روابط'],
    ['Repository', 'المستودع'],

    // Case-study paragraphs/bullets without inline markup
    // Car Sale
    ['Car Sale Management System — GUI dashboard and inventory', 'نظام إدارة مبيعات السيارات — لوحة تحكم ومخزون'],
    ['I wanted to build a system to manage car sales effectively—display listings and add/update/delete cars. The first version was a C++ console app. I then upgraded to Python with a full GUI to simulate a real marketplace.', 'أردت بناء نظام يدير مبيعات السيارات بفعالية—عرض القوائم وإضافة/تحديث/حذف السيارات. كانت النسخة الأولى تطبيق كونسول ++C، ثم طورتها إلى بايثون مع واجهة كاملة لمحاكاة سوق حقيقي.'],
    ['Structured OOP model: Car, Vehicle, Salesperson, Startup, ManagingSystem, Main, GUI, and a SQL-backed Data layer.', 'نموذج برمجة كائنية منظم: سيارة، مركبة، مندوب مبيعات، شركة ناشئة، نظام إدارة، رئيسي، واجهة رسومية، وطبقة بيانات مدعومة بقاعدة SQL.'],
    ['Core features: add/search cars, dashboards, export to Excel.', 'الميزات الأساسية: إضافة/بحث عن السيارات، لوحات تحكم، وتصدير إلى Excel.'],
    ['Advanced UX: analytics and theme toggling.', 'تجربة مستخدم متقدمة: تحليلات وتبديل السمات.'],
    ['Migration: C++ console → clean Python OOP architecture.', 'الهجرة: كونسول ++C → هيكل بايثون كائني نظيف.'],
    ['GUI: built with PySide6 for a marketplace-like experience.', 'الواجهة: مبنية بـ PySide6 لتجربة شبيهة بالأسواق.'],
    ['Persistence: SQLite for listings and sales data.', 'التخزين: SQLite لقوائم السيارات وبيانات المبيعات.'],
    ['Moved from console to a user-friendly GUI workflow.', 'الانتقال من الكونسول إلى سير عمل بواجهة رسومية سهلة.'],
    ['Faster decisions via integrated analytics/dashboards.', 'قرارات أسرع عبر التحليلات ولوحات التحكم المتكاملة.'],
    ['Reduced manual work with Excel exports and persistent storage.', 'تقليل العمل اليدوي عبر التصدير إلى Excel والتخزين المستمر.'],

    // Interval (most bullets translated via keys below for inline markup)
    ['Scheduling overlapping intervals (e.g., rooms, resources) requires computing the minimum number of resources needed. Doing this manually is hard and error-prone.', 'جدولة الفترات المتداخلة (مثل الغرف أو الموارد) تتطلب حساب الحد الأدنى للموارد اللازمة. القيام بذلك يدويًا صعب ومعرض للأخطاء.'],
    ['Greedy interval partitioning to minimize rooms/resources.', 'تقسيم الفترات بأسلوب جشع لتقليل الغرف/الموارد.'],
    ['Sorted by start time; efficient room-availability checks.', 'الفرز حسب وقت البدء؛ فحص فعال لتوفر الغرف.'],
    ['Menu-driven CLI for input, validation, and results.', 'واجهة CLI قائمة-موجهة للإدخال والتحقق والنتائج.'],
    ['Enhanced readability with colored text and ASCII UI (Windows Console).', 'تحسين القراءة بنصوص ملونة وواجهة ASCII (كونسول ويندوز).'],
    ['Robust error handling and input validation.', 'معالجة أخطاء قوية والتحقق من الإدخال.'],
    ['Fast computation of the minimum number of rooms required.', 'حساب سريع للحد الأدنى من الغرف المطلوبة.'],
    ['Clear, interactive CLI improved usability.', 'واجهة CLI واضحة وتفاعلية حسّنت سهولة الاستخدام.'],
    ['Demonstrates practical use of greedy algorithms in scheduling.', 'تُظهر الاستخدام العملي للخوارزميات الجشعة في الجدولة.'],
    ['C++ (MinGW), Windows Console API', '++C (MinGW)، واجهة كونسول ويندوز'],

    // City Hospital (keyed bullets for markup below)
    ['City Hospital Management — GUI with departments, patients, staff, and appointments', 'إدارة مستشفى المدينة — واجهة بأقسام ومرضى وموظفين ومواعيد'],
    ['Overview', 'نظرة عامة'],
    ['Python-based application to manage hospital operations with a dark-mode PySide6 GUI. Layered architecture (Domain → DB → GUI) for scalability and maintainability.', 'تطبيق بايثون لإدارة عمليات المستشفى بواجهة PySide6 بوضع داكن. معمارية طبقية (نطاق → قاعدة بيانات → واجهة) للتوسع وسهولة الصيانة.'],
    ['Manual hospital workflows are error-prone and slow. Hospitals need a centralized system to track patients, staff, departments, and appointments, and provide real-time statistics.', 'العمليات اليدوية في المستشفيات بطيئة وعرضة للأخطاء. تحتاج المستشفيات إلى نظام مركزي لتتبع المرضى والموظفين والأقسام والمواعيد وتقديم إحصاءات فورية.'],
    ['Efficiency: reduced manual record work.', 'الكفاءة: تقليل العمل اليدوي بالسجلات.'],
    ['Scalability: layered design eases future features (billing, reports, auth).', 'القابلية للتوسع: التصميم الطبقي يسهل الميزات المستقبلية (الفوترة، التقارير، الصلاحيات).'],
    ['UX: dark-mode UI improves readability.', 'تجربة المستخدم: واجهة الوضع الداكن تحسن القراءة.'],
    ['Data integrity: structured, persistent storage with SQLite.', 'سلامة البيانات: تخزين منظم ودائم مع SQLite.'],
    ['Python 3.x, PySide6 (Qt for Python), SQLite3 • Tools: VS Code, GitHub', 'بايثون 3.x، PySide6 (Qt لـ بايثون)، SQLite3 • الأدوات: VS Code، GitHub'],
  ]);

  // Keyed translations for nodes with inline markup
  const KEYS = {
    // Interval: inline <em>
    'interval-oop': {
      en: 'OOP model: <em>Interval</em> (time range) and <em>Scheduler</em> (allocations).',
      ar: 'النموذج الكائني: <em>الفترة</em> (نطاق زمني) و<em>المجدول</em> (التخصيصات).'
    },
    // City Hospital: inline <strong>/<em>
    'city-approach-1': {
      en: '<strong>Domain (OOP):</strong> <em>Person</em> (base), <em>Patient</em>, <em>Staff</em>, <em>Department</em>, <em>Hospital</em>.',
      ar: '<strong>النطاق (كائني):</strong> <em>شخص</em> (أساسي)، <em>مريض</em>، <em>موظف</em>، <em>قسم</em>، <em>مستشفى</em>.'
    },
    'city-approach-2': {
      en: '<strong>Database (SQLite):</strong> persistent storage; CRUD for patients, staff, appointments.',
      ar: '<strong>قاعدة البيانات (SQLite):</strong> تخزين دائم؛ CRUD للمرضى والموظفين والمواعيد.'
    },
    'city-approach-3': {
      en: '<strong>GUI (PySide6):</strong> dark dashboard; tabs for Departments, Patients, Staff, Search, Appointments.',
      ar: '<strong>الواجهة (PySide6):</strong> لوحة تحكم داكنة؛ تبويبات للأقسام والمرضى والموظفين والبحث والمواعيد.'
    },
    'city-approach-4': {
      en: '<strong>Stats:</strong> totals for patients/staff/appointments; appointment status chart.',
      ar: '<strong>الإحصاءات:</strong> إجمالي المرضى/الموظفين/المواعيد؛ مخطط حالة المواعيد.'
    },
    'city-approach-5': {
      en: '<strong>Workflows:</strong> add/search patients/staff; assign to departments; discharge/transfer patients; schedule appointments.',
      ar: '<strong>مسارات العمل:</strong> إضافة/بحث مرضى/موظفين؛ إسناد للأقسام؛ إخراج/نقل المرضى؛ جدولة المواعيد.'
    }
  };

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
      if (el.hasAttribute && (el.hasAttribute('data-i18n-ignore') || el.hasAttribute('data-i18n-key'))) return true;
      const tag = el.tagName;
      if (tag && /^(SCRIPT|STYLE|NOSCRIPT|IFRAME|CANVAS|SVG|VIDEO|AUDIO|CODE|KBD|SAMP|VAR|PRE)$/i.test(tag)) return true;
      el = el.parentElement;
    }
    return false;
  }

  const TEXT_NODES = []; // { node, original }
  const ATTR_NODES = []; // { el, originals: Map(attr -> value) }

  function cacheNodes() {
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

  function applyKeys(lang) {
    document.querySelectorAll('[data-i18n-key]').forEach(el => {
      const k = el.getAttribute('data-i18n-key');
      const pair = KEYS[k];
      if (pair) {
        const next = lang === 'ar' ? pair.ar : pair.en;
        if (el.innerHTML !== next) el.innerHTML = next;
      }
    });
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
    applyKeys(lang);
    updateName(lang);

    // Update toggle label immediately
    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.textContent = (lang === 'ar') ? 'EN' : 'AR';
      btn.setAttribute('aria-label', (lang === 'ar') ? 'Switch language to English' : 'التبديل إلى العربية');
    }

    // Batch text nodes
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

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();