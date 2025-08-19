(() => {
  'use strict';

  const CONFIG = {
    englishName: 'Muhammed Fathi Kamal',
    arabicName: 'محٍمدِ فُتحٍي ڪمالُِ',
    nameSelector: 'a.logo',
    pageTitle: 'Muhammed Fathi Portfolio'
  };

  // English -> Arabic dictionary
  const DICT = new Map([
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

    ['Car Sale Management System', 'نظام إدارة مبيعات السيارات'],
    ['Python OOP + PySide6 GUI with SQLite. Manage inventory, customers, transactions; analytics and Excel export.', 'برمجة كائنية في بايثون + واجهة PySide6 مع SQLite. إدارة المخزون والعملاء والمعاملات؛ تحليلات وتصدير إلى Excel.'],
    ['Case study', 'دراسة حالة'],

    ['Interval Scheduler', 'مجدول الفترات'],
    ['C++ greedy interval partitioning with a menu-driven CLI to compute minimum rooms/resources for overlapping intervals.', 'تقسيم الفترات بأسلوب جشع في ++C مع واجهة سطر أوامر لحساب أقل عدد من الموارد للفترات المتداخلة.'],

    ['City Hospital Management (GUI)', 'إدارة مستشفى المدينة (واجهة رسومية)'],
    ['Python + PySide6 GUI with SQLite. Manage patients, staff, departments, appointments; dark mode dashboard and stats.', 'بايثون + واجهة PySide6 مع SQLite. إدارة المرضى والموظفين والأقسام والمواعيد؛ لوحة تحكم بوضع داكن وإحصاءات.'],

    ['See more on', 'المزيد على'],
    ["I'm Muhammad Fathi, a Data/ML-focused developer who enjoys building practical, maintainable solutions. Strengths include OOP, algorithms, and data structures across Python, C++, and SQL. I'm open to internships, junior roles, and freelance work—especially where I can deliver measurable value and keep learning.", 'أنا محمد فتحي، مطوّر يركز على البيانات وتعلّم الآلة ويستمتع ببناء حلول عملية قابلة للصيانة. نقاط قوتي تشمل البرمجة كائنية التوجه والخوارزميات وهياكل البيانات عبر بايثون و++C وSQL. منفتح على التدريب والوظائف المبتدئة والعمل الحر.'],

    ['Skills', 'المهارات'],
    ['Tools & technologies', 'الأدوات والتقنيات'],
    ['View PDF', 'عرض PDF'],
    ['Download PDF', 'تحميل PDF'],
    ["Let's work together", 'لننجز العمل معًا'],
    ['I reply within 24 hours.', 'أرد خلال 24 ساعة.'],
    ['GitHub: Elgeneral200', 'GitHub: Elgeneral200'],
    ['LinkedIn: Muhammad Fathi', 'LinkedIn: Muhammad Fathi'],
    ['Download résumé', 'تحميل السيرة الذاتية']
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
  const cacheText = new WeakMap();
  const cacheAttrs = new WeakMap();
  const shouldSkip = el =>
    el.hasAttribute?.('data-i18n-ignore') ||
    /^(SCRIPT|STYLE|NOSCRIPT|IFRAME|CANVAS|SVG|VIDEO|AUDIO|CODE|KBD|SAMP|VAR|PRE)$/i.test(el.tagName);

  function setRoot(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.title = CONFIG.pageTitle;
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

  function updateName(lang) {
    const el = document.querySelector(CONFIG.nameSelector);
    if (!el || el.hasAttribute('data-i18n-ignore')) return; // do not touch on case-study back links
    let tn = [...el.childNodes].find(n => n.nodeType === 3);
    if (!tn) { tn = document.createTextNode(''); el.insertBefore(tn, el.firstChild); }
    tn.nodeValue = (lang === 'ar' ? CONFIG.arabicName : CONFIG.englishName) + ' ';
  }

  function walk(onText, onEl) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (node.nodeType === 1) return shouldSkip(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        if (node.nodeType === 3) return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_REJECT;
      }
    });
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === 3) onText?.(node);
      else if (node.nodeType === 1) onEl?.(node);
    }
  }

  function applyLanguage(lang) {
    setRoot(lang);

    walk((tn) => {
      if (!cacheText.has(tn)) cacheText.set(tn, tn.nodeValue);
      const original = cacheText.get(tn);
      if (lang === 'ar') {
        const trimmed = original.trim();
        const mapped = DICT.get(trimmed) || dynamicTranslate(trimmed, 'ar');
        tn.nodeValue = mapped ? original.replace(trimmed, mapped) : original;
      } else {
        tn.nodeValue = original;
      }
    }, (el) => {
      if (!cacheAttrs.has(el)) {
        const map = new Map();
        ATTRS.forEach(a => { const v = el.getAttribute(a); if (v) map.set(a, v); });
        cacheAttrs.set(el, map);
      }
      const origMap = cacheAttrs.get(el);
      ATTRS.forEach(a => {
        const orig = origMap.get(a);
        if (!orig) return;
        if (lang === 'ar') {
          const mapped = DICT.get(orig.trim());
          el.setAttribute(a, mapped || orig);
        } else {
          el.setAttribute(a, orig);
        }
      });
    });

    updateName(lang);

    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.textContent = (lang === 'ar') ? 'EN' : 'AR';
      btn.setAttribute('aria-label', (lang === 'ar') ? 'Switch language to English' : 'التبديل إلى العربية');
    }
  }

  function init() {
    const saved = localStorage.getItem('siteLang');
    const start = saved || (navigator.language && navigator.language.startsWith('ar') ? 'ar' : 'en');

    walk((tn) => { if (!cacheText.has(tn)) cacheText.set(tn, tn.nodeValue); },
         (el) => {
           if (!cacheAttrs.has(el)) {
             const map = new Map();
             ATTRS.forEach(a => { const v = el.getAttribute(a); if (v) map.set(a, v); });
             cacheAttrs.set(el, map);
           }
         });

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