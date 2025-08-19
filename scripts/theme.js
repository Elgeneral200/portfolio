(() => {
  'use strict';

  function applyTheme(t) {
    const root = document.documentElement;
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    const btn = document.getElementById('theme-toggle');

    root.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);

    const isDark = t === 'dark';
    if (metaTheme) metaTheme.setAttribute('content', isDark ? '#0b1220' : '#ffffff');

    if (btn) {
      btn.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`);
      btn.textContent = isDark ? '🌞' : '🌓';
    }
  }

  function initTheme() {
    const stored = localStorage.getItem('theme');
    const start = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(start);

    const btn = document.getElementById('theme-toggle');
    btn && btn.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initTheme);
  else initTheme();
})();