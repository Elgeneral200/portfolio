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

  // Text-match dictionary
  const DICT = new Map([
    // Home / global UI
    ['Skip to content', 'تجاوز إلى المحتوى'],
    ['Projects', 'المشاريع'],
    ['About', 'نبذة'],
    ['Résumé', 'السيرة الذاتية'],
    ['Contact', 'تواصل'],
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

    // Skills section
    ['Skills', 'المهارات'],
    ['SQL / PostgreSQL', 'SQL / PostgreSQL'],
    ['Data Science', 'علوم البيانات'],
    ['Machine Learning', 'تعلّم الآلة'],
    ['Git / Linux', 'Git / Linux'],

    // Cards and quick descriptions
    ['Car Sale Management System', 'نظام إدارة مبيعات السيارات'],
    ['Python OOP + PySide6 GUI with SQLite. Manage inventory, customers, transactions; analytics and Excel export.', 'برمجة كائنية في بايثون + واجهة PySide6 مع SQLite. إدارة المخزون والعملاء والمعاملات؛ تحليلات وتصدير إلى Excel.'],
    ['Case study', 'دراسة حالة'],

    ['Interval Scheduler', 'مجدول الفترات'],
    ['C++ greedy interval partitioning with a menu-driven CLI to compute minimum rooms/resources for overlapping intervals.', 'تقسيم الفترات بأسلوب جشع في ++C مع واجهة سطر أوامر لحساب أقل عدد من الموارد للفترات المتداخلة.'],

    ['City Hospital Management (GUI)', 'إدارة مستشفى المدينة (واجهة رسومية)'],
    ['Python + PySide6 GUI with SQLite. Manage patients, staff, departments, appointments; dark mode dashboard and stats.', 'بايثون + واجهة PySide6 مع SQLite. إدارة المرضى والموظفين والأقسام والمواعيد؛ لوحة تحكم بوضع داكن وإحصاءات.'],

    ['See more on', 'المزيد على'],

    // About/Contact
    ["I'm Muhammad Fathi, a Data/ML-focused developer who enjoys building practical, maintainable solutions. Strengths include OOP, algorithms, and data structures across Python, C++, and SQL. I'm open to internships, junior roles, and freelance work—especially where I can deliver measurable value and keep learning.", 'أنا محمد فتحي، مطوّر يركز على البيانات وتعلّم الآلة ويستمتع ببناء حلول عملية قابلة للصيانة. نقاط قوتي تشمل البرمجة كائنية التوجه والخوارزميات وهياكل البيانات عبر بايثون و++C وSQL. منفتح على التدريب والوظائف المبتدئة والعمل الحر.'],
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

  // Export for dynamic text animation
  window.getLanguageRoles = (lang) => DYNAMIC_ROLES[lang] || DYNAMIC_ROLES.en;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();