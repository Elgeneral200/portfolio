(() => {
  'use strict';
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function isSameOrigin(url) {
    try { return new URL(url, location.href).origin === location.origin; }
    catch { return false; }
  }

  function shouldIntercept(a, e) {
    if (!a) return false;
    if (a.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return false;
    const href = a.getAttribute('href') || '';
    if (!href || href.startsWith('#')) return false;
    if (a.hasAttribute('download')) return false;
    if (/^(mailto:|tel:|javascript:)/i.test(href)) return false;
    if (!isSameOrigin(href)) return false;
    const u = new URL(href, location.href);
    if (u.pathname === location.pathname && u.hash) return false;
    return true;
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!shouldIntercept(a, e)) return;
    e.preventDefault();
    if (!prefersReduced) {
      document.body.classList.add('page-fade-out');
      setTimeout(() => { location.href = a.href; }, 400);
    } else {
      location.href = a.href;
    }
  });
})();