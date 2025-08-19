(() => {
  'use strict';

  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!canHover || reduced) return;

  function initCursor() {
    let cursor = document.querySelector('.cursor');
    if (!cursor) {
      cursor = document.createElement('div');
      cursor.className = 'cursor';
      cursor.innerHTML = '<div class="cursor--dot"></div><div class="cursor--ring"></div>';
      document.body.appendChild(cursor);
    }
    document.documentElement.classList.add('has-custom-cursor');

    const dot = cursor.querySelector('.cursor--dot');
    const ring = cursor.querySelector('.cursor--ring');

    let mx = -100, my = -100;
    let dx = mx, dy = my; // dot (fast)
    let rx = mx, ry = my; // ring (slow)

    window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });

    function raf() {
      dx += (mx - dx) * 0.8;
      dy += (my - dy) * 0.8;
      rx += (mx - rx) * 0.35;
      ry += (my - ry) * 0.35;

      let ringScale = 1;
      if (cursor.classList.contains('is-hovering')) ringScale *= 1.25;
      if (cursor.classList.contains('is-clicking')) ringScale *= 0.85;

      if (dot)  dot.style.transform  = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      if (ring) ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${ringScale})`;

      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const hoverSel = 'a, button, [role="button"], .card[data-tilt]';
    document.addEventListener('pointerenter', e => { if (e.target.closest(hoverSel)) cursor.classList.add('is-hovering'); }, true);
    document.addEventListener('pointerleave', e => { if (e.target.closest(hoverSel)) cursor.classList.remove('is-hovering'); }, true);

    document.addEventListener('pointerdown', () => cursor.classList.add('is-clicking'), true);
    document.addEventListener('pointerup',   () => cursor.classList.remove('is-clicking'), true);

    window.addEventListener('pageshow', () => cursor.classList.remove('is-clicking', 'is-hovering'));
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') cursor.classList.remove('is-clicking', 'is-hovering');
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initCursor);
  else initCursor();
})();