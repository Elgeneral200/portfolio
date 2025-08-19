(() => {
  'use strict';

  // ===================== CONFIG =====================
  const CONFIG = {
    englishName: 'Muhammad Fathi Kamal',
    arabicName: 'محٍمدِ فُتحٍي ڪمالُِ',
    nameSelector: 'a.logo',
    logoUrl: 'images/mf-logo.png',
    faviconUrl: 'images/mf-logo.png',
    favicon16: 'images/mf-logo-16.png',
    favicon32: 'images/mf-logo-32.png',

    titles: { en: 'Muhammad Fathi Portfolio', ar: 'Muhammad Fathi Portfolio' },

    translations: {
      'Skip to content': 'تجاوز إلى المحتوى',
      'Primary': 'رئيسية',
      'Go to home': 'الذهاب إلى الرئيسية',
      'Projects': 'المشاريع',
      'About': 'نبذة',
      'Résumé': 'السيرة الذاتية',
      'Resume': 'السيرة الذاتية',
      'Contact': 'تواصل',
      'Toggle navigation': 'تبديل القائمة',
      'Toggle theme': 'تبديل السمة',
      'Switch to dark theme': 'التبديل إلى السمة الداكنة',
      'Switch to light theme': 'التبديل إلى السمة الفاتحة',

      'I build data & ML solutions with Python, C++, and SQL.': 'أبني حلول البيانات وتعلّم الآلة باستخدام بايثون و++C وSQL.',
      "I’m a 3rd-year Computer Science student at Ahram Canadian University (AI specialization), and enrolled in the AI & Data Science diploma by Egypt’s Digital Egypt Pioneers Initiative (MCIT). I turn data into practical outcomes through clean code, strong algorithms, and reliable databases.":
        "أنا محمد فتحي، طالب في السنة الثالثة بقسم علوم الحاسوب بجامعة الأهرام الكندية (تخصص ذكاء اصطناعي)، وملتحق بدبلومة الذكاء الاصطناعي وعلوم البيانات من مبادرة روّاد مصر الرقمية (وزارة الاتصالات). أحوّل البيانات إلى نتائج عملية عبر كود نظيف وخوارزميات قوية وقواعد بيانات موثوقة.",
      'Core skills': 'المهارات الأساسية',
      'AI & Data Science': 'الذكاء الاصطناعي وعلوم البيانات',
      'Algorithms & Data Structures': 'الخوارزميات وهياكل البيانات',
      'See projects': 'عرض المشاريع',
      'View résumé →': 'عرض السيرة الذاتية ←',
      'View résumé': 'عرض السيرة الذاتية',
      'Headshot of Muhammad Fathi': 'صورة شخصية لـ محمد فتحي كمال',

      'Featured projects': 'مشاريع مميزة',
      'Filter projects': 'تصفية المشاريع',
      'All': 'الكل',
      'GUI': 'واجهة رسومية',
      'CLI': 'سطر الأوامر',
      'Greedy': 'جشِع',
      'Algorithms': 'الخوارزميات',
      'Database': 'قاعدة بيانات',
      'CRUD': 'CRUD',

      'Car Sale Management System': 'نظام إدارة مبيعات السيارات',
      'Python OOP + PySide6 GUI with SQLite. Manage inventory, customers, transactions; analytics and Excel export.':
        'برمجة كائنية في بايثون + واجهة PySide6 مع SQLite. إدارة المخزون والعملاء والمعاملات؛ تحليلات وتصدير إلى Excel.',
      'Case study': 'دراسة حالة',
      'Code →': 'الكود ←',

      'Interval Scheduler': 'مجدول الفترات',
      'C++ greedy interval partitioning with a menu-driven CLI to compute minimum rooms/resources for overlapping intervals.':
        'تقسيم الفترات بأسلوب جشع في ++C مع واجهة سطر أوامر قائمة-موجهة لحساب أقل عدد من الغرف/الموارد للفترات المتداخلة.',

      'City Hospital Management (GUI)': 'إدارة مستشفى المدينة (واجهة رسومية)',
      'Python + PySide6 GUI with SQLite. Manage patients, staff, departments, appointments; dark mode dashboard and stats.':
        'بايثون + واجهة PySide6 مع SQLite. إدارة المرضى والموظفين والأقسام والمواعيد؛ لوحة تحكم بوضع داكن وإحصاءات.',

      'See more on GitHub →': 'المزيد على GitHub ←',

      'About': 'نبذة',
      'I’m Muhammad Fathi, a Data/ML-focused developer who enjoys building practical, maintainable solutions. Strengths include OOP, algorithms, and data structures across Python, C++, and SQL. I’m open to internships, junior roles, and freelance work—especially where I can deliver measurable value and keep learning.':
        'أنا محمد فتحي، مطوّر يركّز على البيانات وتعلّم الآلة ويستمتع ببناء حلول عملية وقابلة للصيانة. تشمل نقاط قوتي البرمجة كائنية التوجه والخوارزميات وهياكل البيانات عبر بايثون و++C وSQL. منفتح على التدريب والوظائف المبتدئة والعمل الحر—خصوصًا حيث أقدّم قيمة ملموسة وأواصل التعلّم.',

      'Skills': 'المهارات',
      'Tools & technologies': 'الأدوات والتقنيات',

      'Open résumé PDF in a new tab': 'فتح ملف السيرة الذاتية في لسان جديد',
      'Résumé header — Muhammad Fathi, email: mudiifathii@gmail.com':
        'ترويسة السيرة الذاتية — محمد فتحي كمال، البريد: mudiifathii@gmail.com',
      'View PDF': 'عرض PDF',
      'Download PDF': 'تحميل PDF',

      'Let’s work together': 'لننجز العمل معًا',
      'I reply within 24 hours.': 'أرد خلال 24 ساعة.'
    },

    allowAutoTranslate: false
  };
  // =============================================================

  const ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
  const cache = { text: new WeakMap(), attr: new WeakMap() };
  const normalize = s => (s || '').replace(/\s+/g, ' ').trim().toLowerCase();
  const isAr = () => document.documentElement.getAttribute('lang') === 'ar';

  const DICT = {};
  Object.entries(CONFIG.translations).forEach(([k, v]) => { DICT[normalize(k)] = v; });

  // UI + background polish (aurora + mesh + hero glow + nav polish)
  function addStyles() {
    const css = `
      /* Logo aligned & sized */
      img[data-personal-logo] {
        height: 1.35em; width: auto; vertical-align: middle;
        position: relative; top: -0.08em; margin-inline-start: .5em; opacity: .98;
      }

      /* Tame original background overlays slightly so layers don't clash */
      body::before { opacity: .35 !important; filter: blur(24px); }
      body::after  { opacity: .10 !important; }

      /* Prettier background: aurora ribbons + soft blobs */
      #bg-decor {
        position: fixed; inset: -10%; z-index: -3; pointer-events: none; overflow: hidden;
        --shift: 0px; /* parallax shift */
      }
      /* Mesh blobs (subtle) */
      #bg-decor .blob {
        position: absolute; border-radius: 50%; filter: blur(34px);
        opacity: .55; will-change: transform;
        background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent) 20%, transparent), transparent 70%);
      }
      #bg-decor .b1 {
        width: clamp(280px, 32vw, 560px); height: clamp(280px, 32vw, 560px);
        top: max(-6%, -40px); left: max(-6%, -40px);
        background: radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--accent) 26%, transparent), transparent 70%);
        animation: blobMove1 28s ease-in-out infinite alternate;
        transform: translateY(calc(var(--shift) * -0.25));
      }
      #bg-decor .b2 {
        width: clamp(260px, 28vw, 520px); height: clamp(260px, 28vw, 520px);
        top: max(-10%, -60px); right: max(-4%, -30px);
        background: radial-gradient(circle at 70% 30%, color-mix(in srgb, var(--accent-2) 24%, transparent), transparent 70%);
        animation: blobMove2 32s ease-in-out infinite alternate;
        transform: translateY(calc(var(--shift) * -0.15));
      }
      #bg-decor .b3 {
        width: clamp(320px, 38vw, 680px); height: clamp(320px, 38vw, 680px);
        bottom: max(-12%, -80px); left: 50%;
        background: radial-gradient(circle at 50% 60%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%);
        transform: translate(-50%, 0) translateY(calc(var(--shift) * 0.12));
        animation: blobMove3 36s ease-in-out infinite alternate;
      }

      /* Aurora ribbons */
      #bg-decor .aurora {
        position: absolute; inset: -20% -10%; filter: blur(36px);
        mix-blend-mode: screen; opacity: .35;
      }
      #bg-decor .aurora .r {
        position: absolute; inset: 0;
        background:
          conic-gradient(from 0deg at 50% 50%,
            transparent 0 10%,
            color-mix(in srgb, var(--accent) 40%, transparent) 25%,
            transparent 40% 60%,
            color-mix(in srgb, var(--accent-2) 36%, transparent) 75%,
            transparent 90% 100%);
        transform: rotate(0deg) translateY(0);
        animation: auroraDrift 26s ease-in-out infinite alternate;
      }
      #bg-decor .aurora .r.r2 { transform: rotate(20deg); animation-duration: 32s; opacity: .4; }
      #bg-decor .aurora .r.r3 { transform: rotate(-18deg); animation-duration: 38s; opacity: .32; }

      @keyframes auroraDrift {
        0%   { transform: translateY(0) rotate(0deg); }
        50%  { transform: translateY(-1.5%) rotate(6deg); }
        100% { transform: translateY(1.5%) rotate(-4deg); }
      }
      @keyframes blobMove1 {
        0%   { transform: translateY(calc(var(--shift) * -0.25)) translate3d(0,0,0) scale(1); }
        50%  { transform: translateY(calc(var(--shift) * -0.25)) translate3d(2%, -1%, 0) scale(1.05) rotate(2deg); }
        100% { transform: translateY(calc(var(--shift) * -0.25)) translate3d(-1%, 1%, 0) scale(0.98) rotate(-2deg); }
      }
      @keyframes blobMove2 {
        0%   { transform: translateY(calc(var(--shift) * -0.15)) translate3d(0,0,0) scale(1); }
        50%  { transform: translateY(calc(var(--shift) * -0.15)) translate3d(-2%, 1%, 0) scale(1.04) rotate(-3deg); }
        100% { transform: translateY(calc(var(--shift) * -0.15)) translate3d(1%, -1%, 0) scale(0.99) rotate(2deg); }
      }
      @keyframes blobMove3 {
        0%   { transform: translate(-50%, 0) translateY(calc(var(--shift) * 0.12)) scale(1); }
        50%  { transform: translate(-50%, -3%) translateY(calc(var(--shift) * 0.12)) scale(1.04); }
        100% { transform: translate(-50%, 2%) translateY(calc(var(--shift) * 0.12)) scale(0.99); }
      }

      /* Hero glow behind avatar */
      .avatar { position: relative; }
      .avatar::before {
        content: ""; position: absolute; inset: -10%; border-radius: inherit; z-index: -1; pointer-events: none;
        background:
          radial-gradient(closest-side, color-mix(in srgb, var(--accent) 18%, transparent), transparent 72%),
          conic-gradient(from 180deg, color-mix(in srgb, var(--accent-2) 18%, transparent), transparent 60%);
        filter: blur(18px); opacity: .50;
        animation: heroGlow 18s ease-in-out infinite;
      }
      @keyframes heroGlow {
        0%,100% { transform: rotate(0deg) scale(1); }
        50%     { transform: rotate(8deg) scale(1.02); }
      }

      /* Nav utilities divider (desktop) */
      @media (min-width: 861px) {
        .site-header .nav li:has(#theme-toggle) { position: relative; margin-inline-start: .25rem; }
        .site-header .nav li:has(#theme-toggle)::before {
          content: ""; position: absolute; inset-block-start: 50%;
          transform: translateY(-50%); inline-size: 1px; block-size: 16px;
          background: var(--border); inset-inline-start: -8px; border-radius: 2px;
        }
        .site-header .nav li:has(#theme-toggle), .site-header .nav #lang-toggle-li { margin-inline-start: .4rem; }
      }

      /* Make Theme/Language look like nav items + hover/focus polish */
      .site-header .nav button.btn {
        appearance: none; background: transparent !important; border: 0 !important; box-shadow: none !important;
        color: inherit; font: inherit; padding: 0.45rem 0.7rem; border-radius: 10px;
        display: inline-flex; align-items: center; justify-content: center; cursor: pointer;
        transition: background-color .18s ease, box-shadow .18s ease, transform .12s ease;
      }
      .site-header .nav a, .site-header .nav button.btn {
        transition: background-color .18s ease, box-shadow .18s ease, transform .12s ease;
      }
      .site-header .nav a:hover, .site-header .nav button.btn:hover {
        background: color-mix(in srgb, var(--card) 86%, transparent);
      }

      /* Calm hero shimmer */
      .hero-text h1 {
        animation-duration: 18s;
        background-image: linear-gradient(90deg, var(--fg), color-mix(in srgb, var(--accent) 20%, var(--fg)), var(--fg));
      }

      /* Card hover polish */
      .card { border: 1px solid var(--border); }
      .card:hover { box-shadow: 0 16px 42px rgba(2, 6, 23, 0.14); border-color: color-mix(in srgb, var(--accent) 22%, var(--border)); }

      /* Keep contact/footer English layout in Arabic; fix icon spacing in RTL */
      [dir="rtl"] #contact, [dir="rtl"] #contact .contact-grid .btn, [dir="rtl"] .site-footer { direction: ltr; text-align: left; }
      [dir="rtl"] #contact .contact-grid .btn .icon { margin-right: .6rem; margin-left: 0; }
      [dir="rtl"] .nav .icon.nav-icon { margin-left: .45rem; margin-right: 0; }

      @media (prefers-reduced-motion: reduce) {
        #bg-decor .blob, #bg-decor .aurora .r, .avatar::before { animation: none !important; }
      }
    `;
    const style = document.createElement('style');
    style.id = 'i18n-ui-polish';
    style.textContent = css;
    document.head.appendChild(style);
  }

  // Background layer
  function createDecorLayer() {
    if (document.getElementById('bg-decor')) return;
    const wrapper = document.createElement('div');
    wrapper.id = 'bg-decor';
    wrapper.setAttribute('aria-hidden', 'true');
    wrapper.innerHTML = `
      <span class="blob b1"></span>
      <span class="blob b2"></span>
      <span class="blob b3"></span>
      <div class="aurora">
        <span class="r r1"></span>
        <span class="r r2"></span>
        <span class="r r3"></span>
      </div>
    `;
    document.body.appendChild(wrapper);
  }

  // Tiny parallax (throttled to 30fps for smooth scrolling)
  function startBgParallax() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const wrap = document.getElementById('bg-decor');
    if (!wrap) return;

    let ticking = false;
    let lastTs = 0;
    const FRAME_MS = 1000 / 30; // 30 fps

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame((ts) => {
        if (ts - lastTs >= FRAME_MS) {
          lastTs = ts;
          const y = window.scrollY || 0;
          wrap.style.setProperty('--shift', `${Math.min(60, y * 0.03)}px`);
        }
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Arabic font on demand
  function ensureArabicFont() {
    if (document.getElementById('font-cairo')) return;
    const link = document.createElement('link');
    link.id = 'font-cairo'; link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap';
    document.head.appendChild(link);
    link.onload = () => {
      const style = document.createElement('style');
      style.id = 'cairo-apply';
      style.textContent = `html[lang="ar"] { font-family: "Cairo", system-ui, "Segoe UI", Tahoma, "Noto Naskh Arabic", "Amiri", Arial, sans-serif; }`;
      document.head.appendChild(style);
    };
  }

  // Favicons (logo in tab)
  function ensureFavicon() {
    const addIcon = (sizes, href) => {
      if (!href) return;
      let link = document.querySelector(`link[rel="icon"][sizes="${sizes}"]`);
      if (!link) { link = document.createElement('link'); link.rel = 'icon'; if (sizes) link.sizes = sizes; document.head.appendChild(link); }
      link.type = 'image/png'; link.href = href;
    };
    const addRel = (rel, href) => {
      if (!href) return;
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) { link = document.createElement('link'); link.rel = rel; document.head.appendChild(link); }
      link.href = href;
    };
    addIcon('32x32', CONFIG.favicon32);
    addIcon('16x16', CONFIG.favicon16);
    addRel('icon', CONFIG.faviconUrl || CONFIG.logoUrl);
    addRel('apple-touch-icon', CONFIG.faviconUrl || CONFIG.logoUrl);
  }

  // Language toggle in nav
  function ensureLangToggle() {
    const ul = document.getElementById('primary-nav');
    if (!ul) return null;
    let btn = document.getElementById('lang-toggle');
    if (btn) return btn;
    const li = document.createElement('li');
    li.id = 'lang-toggle-li';
    li.setAttribute('data-i18n-ignore', '');
    btn = document.createElement('button');
    btn.id = 'lang-toggle'; btn.type = 'button'; btn.className = 'btn outline small';
    li.appendChild(btn);
    ul.appendChild(li);
    return btn;
  }

  // Keep Contact + Footer English-format
  function pinContactFooter() {
    document.getElementById('contact')?.setAttribute('data-i18n-ignore', '');
    document.querySelector('.site-footer')?.setAttribute('data-i18n-ignore', '');
  }

  // Reorder nav: Projects, About, Résumé, Contact, Theme, Language
  function reorderNav() {
    const ul = document.getElementById('primary-nav');
    if (!ul) return;
    const liFromAnchor = (sel) => { const a = ul.querySelector(sel); return a ? a.closest('li') : null; };
    const liProjects = liFromAnchor('a[href="#projects"]');
    const liAbout    = liFromAnchor('a[href="#about"]');
    const liResume   = liFromAnchor('a[href$="resume.pdf"]');
    const liContact  = liFromAnchor('a[href="#contact"]');
    const themeBtn   = document.getElementById('theme-toggle');
    const liTheme    = themeBtn ? themeBtn.closest('li') : null;
    const liLang     = document.getElementById('lang-toggle-li');
    const desired = [liProjects, liAbout, liResume, liContact, liTheme, liLang].filter(Boolean);
    desired.forEach(li => ul.appendChild(li));
    const known = new Set(desired);
    [...ul.children].forEach(li => { if (!known.has(li)) ul.appendChild(li); });
  }

  function setLangAttrs(lang) {
    const html = document.documentElement;
    html.setAttribute('lang', lang === 'ar' ? 'ar' : 'en');
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.title = lang === 'ar' ? CONFIG.titles.ar : CONFIG.titles.en;
  }

  function shouldSkipNode(node) {
    if (!node) return true;
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node; const tag = el.tagName;
      if (el.hasAttribute('data-i18n-ignore')) return true;
      if (/^(SCRIPT|STYLE|NOSCRIPT|IFRAME|CANVAS|SVG|VIDEO|AUDIO|CODE|KBD|SAMP|VAR|PRE)$/.test(tag)) return true;
      if (el.isContentEditable) return true;
    }
    return false;
  }

  function traverse(root, onTextNode, onElement) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode: node => {
        if (node.nodeType === Node.TEXT_NODE) {
          if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          const parent = node.parentElement;
          if (!parent || shouldSkipNode(parent)) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (shouldSkipNode(node)) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_REJECT;
      }
    });
    let current = walker.currentNode;
    while (current) {
      if (current.nodeType === Node.TEXT_NODE) onTextNode && onTextNode(current);
      else if (current.nodeType === Node.ELEMENT_NODE) onElement && onElement(current);
      current = walker.nextNode();
    }
  }

  function getNameElement() {
    if (CONFIG.nameSelector) {
      const el = document.querySelector(CONFIG.nameSelector);
      if (el) return el;
    }
    return document.querySelector('.logo') || document.querySelector('header h1') || document.querySelector('h1') || null;
  }

  function setNameText(el, text) {
    let tn = null;
    for (const node of el.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) { tn = node; break; }
    }
    if (!tn) { tn = document.createTextNode(''); el.insertBefore(tn, el.firstChild); }
    if (tn.nodeValue !== text) tn.nodeValue = text;
  }

  function ensureLogo(el) {
    if (!CONFIG.logoUrl) return;
    let img = el.querySelector('img[data-personal-logo]');
    if (!img) {
      img = document.createElement('img');
      img.setAttribute('data-personal-logo', '');
      img.alt = 'Logo';
      img.decoding = 'async';
      img.loading = 'lazy';
      el.appendChild(img);
    }
    const absolute = (() => { try { return new URL(CONFIG.logoUrl, location.href).href; } catch { return CONFIG.logoUrl; } })();
    if (img.src !== absolute) img.src = CONFIG.logoUrl;
  }

  function updateNameAndLogo(lang) {
    const el = getNameElement();
    if (!el) return;
    el.setAttribute('data-i18n-ignore', '');
    if (!el.dataset.i18nNameOriginal) el.dataset.i18nNameOriginal = el.textContent.trim();
    const en = CONFIG.englishName || el.dataset.i18nNameOriginal;
    const ar = CONFIG.arabicName || el.dataset.i18nNameOriginal;
    setNameText(el, lang === 'ar' ? ar : en);
    ensureLogo(el);
  }

  function setToggleButtonUI(lang) {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;
    if (lang === 'ar') {
      btn.textContent = 'EN';
      btn.setAttribute('aria-label', 'Switch language to English');
      btn.title = 'Switch to English';
    } else {
      btn.textContent = 'AR';
      btn.setAttribute('aria-label', 'التبديل إلى العربية');
      btn.title = 'التبديل إلى العربية';
    }
  }

  function translateString(str) {
    if (!str || !isAr()) return null;
    return DICT[normalize(str)] ?? null;
  }

  // Dynamic: "Showing N projects"
  function dynamicTranslate(str) {
    if (!str || !isAr()) return null;
    const s = str.trim();
    const m = s.match(/^Showing\s+(\d+)\s+project(s)?$/i);
    if (m) {
      const n = parseInt(m[1], 10);
      const word = n === 1 ? 'مشروع' : (n === 2 ? 'مشروعان' : (n <= 10 ? 'مشاريع' : 'مشروع'));
      return `إظهار ${n} ${word}`;
    }
    return null;
  }

  function translateTextNode(tn) {
    const orig = cache.text.get(tn) ?? tn.nodeValue;
    const lead = (orig.match(/^\s*/) || [''])[0];
    const trail = (orig.match(/\s*$/) || [''])[0];
    const stripped = orig.trim();
    const mapped = translateString(stripped) || dynamicTranslate(stripped);
    if (mapped) {
      const newText = lead + mapped + trail;
      if (tn.nodeValue !== newText) tn.nodeValue = newText;
    }
  }

  function translateElementAttrs(el) {
    let map = cache.attr.get(el);
    if (!map) { map = {}; for (const a of ATTRS) if (el.hasAttribute(a)) map[a] = el.getAttribute(a); cache.attr.set(el, map); }
    for (const a of ATTRS) {
      if (el.hasAttribute(a)) {
        const cur = el.getAttribute(a);
        const mapped = translateString(cur) || translateString(map[a]) || dynamicTranslate(cur) || null;
        if (mapped && cur !== mapped) el.setAttribute(a, mapped);
      }
    }
  }

  // Lightweight observer for new nodes (Arabic only)
  let observer = null;
  function stopObserver() { if (observer) observer.disconnect(); }
  function startObserverIfAr() {
    if (!isAr()) return;
    if (!observer) {
      observer = new MutationObserver(muts => {
        muts.forEach(m => m.addedNodes.forEach(node => {
          if (!(node instanceof Node)) return;
          if (node.nodeType === Node.TEXT_NODE) {
            const tn = node; const parent = tn.parentElement;
            if (parent && !shouldSkipNode(parent)) {
              if (!cache.text.has(tn)) cache.text.set(tn, tn.nodeValue);
              translateTextNode(tn);
            }
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node;
            if (!shouldSkipNode(el)) {
              traverse(el, (tn) => { if (!cache.text.has(tn)) cache.text.set(tn, tn.nodeValue); translateTextNode(tn); },
                         (innerEl) => translateElementAttrs(innerEl));
            }
          }
        }));
      });
    }
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function translateFilterCountIfAr() {
    if (!isAr()) return;
    const el = document.getElementById('filter-count');
    if (!el) return;
    const s = el.textContent || '';
    const mapped = dynamicTranslate(s);
    if (mapped && s !== mapped) el.textContent = mapped;
  }

  function bindDynamicFixes() {
    document.querySelectorAll('.filters [data-filter]').forEach(btn => {
      btn.addEventListener('click', () => setTimeout(translateFilterCountIfAr, 0));
    });
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        if (!isAr()) return;
        const cur = themeBtn.getAttribute('aria-label') || '';
        const mapped = translateString(cur);
        if (mapped && cur !== mapped) themeBtn.setAttribute('aria-label', mapped);
      });
    }
  }

  let isApplying = false;
  let pendingLang = null;

  function reorderAndPolish() {
    reorderNav();
  }

  function setLanguage(lang) {
    if (isApplying) { pendingLang = lang; return; }
    isApplying = true;
    stopObserver();
    setLangAttrs(lang);

    if (lang === 'en') {
      traverse(document.body, (tn) => {
        const orig = cache.text.get(tn);
        if (orig != null && tn.nodeValue !== orig) tn.nodeValue = orig;
      }, (el) => {
        const map = cache.attr.get(el);
        if (map) for (const attr of ATTRS) {
          if (map[attr] != null && el.getAttribute(attr) !== map[attr]) el.setAttribute(attr, map[attr]);
        }
      });
      updateNameAndLogo('en');
      setToggleButtonUI('en');
      reorderAndPolish();
    } else {
      traverse(document.body, (tn) => {
        if (!cache.text.has(tn)) cache.text.set(tn, tn.nodeValue);
      }, (el) => {
        if (!cache.attr.has(el)) { const map = {}; for (const a of ATTRS) if (el.hasAttribute(a)) map[a] = el.getAttribute(a); cache.attr.set(el, map); }
      });
      traverse(document.body, translateTextNode, translateElementAttrs);
      updateNameAndLogo('ar');
      setToggleButtonUI('ar');
      translateFilterCountIfAr();
      ensureArabicFont();
      reorderAndPolish();
    }

    isApplying = false;
    if (pendingLang && pendingLang !== (lang === 'ar' ? 'ar' : 'en')) { const next = pendingLang; pendingLang = null; setLanguage(next); return; }
    pendingLang = null;
    startObserverIfAr();
  }

  function init() {
    addStyles();
    // Prettier background
    createDecorLayer();
    startBgParallax();

    // Favicon + language controls
    ensureFavicon();
    const btn = ensureLangToggle();
    pinContactFooter();

    // ADDED: Detect browser language on first visit, with localStorage override
    const saved = localStorage.getItem('siteLang');
    const browserLang = navigator.language.startsWith('ar') ? 'ar' : 'en';
    const startLang = saved || browserLang;
    setLanguage(startLang);

    btn?.addEventListener('click', () => {
      const current = isAr() ? 'ar' : 'en';
      const next = current === 'ar' ? 'en' : 'ar';
      localStorage.setItem('siteLang', next);
      setLanguage(next);
    });

    bindDynamicFixes();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

})();