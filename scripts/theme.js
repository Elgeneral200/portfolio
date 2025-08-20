(() => {
  'use strict';

  function initTheme() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    const saved = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (systemDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', initial);
    updateToggleIcon(btn, initial);

    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateToggleIcon(btn, next);
    });
  }

  function updateToggleIcon(btn, theme) {
    btn.textContent = theme === 'dark' ? '☀️' : '🌓';
    btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();