(() => {
  'use strict';

  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  (function mobileNav() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('primary-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
      const open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });
    document.querySelectorAll('#primary-nav a[href^="#"]').forEach(a => {
      a.addEventListener('click', () => {
        nav.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        nav.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  })();

  // Active nav link
  (function activeNav() {
    const sections = [...document.querySelectorAll('main section[id]')];
    const navLinks = [...document.querySelectorAll('header .nav a[href^="#"]')];
    if (!sections.length || !navLinks.length) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(a => {
            if (a.getAttribute('href') === `#${entry.target.id}`) a.setAttribute('aria-current', 'page');
            else a.removeAttribute('aria-current');
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(sec => observer.observe(sec));
  })();

  // Project filters
  (function projectFilters() {
    const filterBtns = document.querySelectorAll('.filters [data-filter]');
    const cards = document.querySelectorAll('#projects .card');
    const countEl = document.getElementById('filter-count');
    if (!filterBtns.length || !cards.length) return;

    function updateCount() {
      const visible = [...cards].filter(c => !c.hidden).length;
      if (countEl) countEl.textContent = `Showing ${visible} project${visible !== 1 ? 's' : ''}`;
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => { b.classList.remove('is-active'); b.removeAttribute('aria-pressed'); });
        btn.classList.add('is-active'); btn.setAttribute('aria-pressed', 'true');

        const filter = btn.dataset.filter;
        cards.forEach(card => {
          const tags = (card.dataset.tags || '').toLowerCase();
          card.hidden = filter !== 'all' && !tags.includes(filter);
        });
        updateCount();
      });
    });
    updateCount();
  })();

  // Reveal animations + card tilt
  (function scrollAnimations() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealEls = document.querySelectorAll('[data-reveal]');
    if (revealEls.length && !prefersReduced) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            observer.unobserve(e.target);
          }
        });
      }, { threshold: 0.15 });
      revealEls.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
      });
    }

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (canHover && !prefersReduced) {
      const MAX_TILT = 6, Z_LIFT = 10;
      document.querySelectorAll('.card[data-tilt]').forEach(card => {
        card.style.transformStyle = 'preserve-3d';
        card.style.willChange = 'transform';
        card.addEventListener('mousemove', e => {
          const rect = card.getBoundingClientRect();
          const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
          const px = (e.clientX - cx) / (rect.width / 2), py = (e.clientY - cy) / (rect.height / 2);
          const rotY = (px * MAX_TILT), rotX = (-py * MAX_TILT);
          card.style.transform = `translateY(-4px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${Z_LIFT}px)`;
        });
        card.addEventListener('mouseleave', () => card.style.transform = '');
      });
    }
  })();

  // GitHub stars (cached)
  (function fetchGitHubStars() {
    const CACHE_KEY = 'github_stars_cache', CACHE_DURATION_MS = 10 * 60 * 1000;
    document.querySelectorAll('[data-repo]').forEach(async el => {
      const repo = el.dataset.repo, starsEl = el.querySelector('[data-stars]');
      if (!repo || !starsEl) return;
      try {
        let cache = JSON.parse(sessionStorage.getItem(CACHE_KEY)) || {};
        const cachedRepo = cache[repo];
        if (cachedRepo && (Date.now() - cachedRepo.timestamp < CACHE_DURATION_MS)) {
          starsEl.textContent = new Intl.NumberFormat().format(cachedRepo.stars);
          return;
        }
        const res = await fetch(`https://api.github.com/repos/${repo}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        const starCount = data.stargazers_count;
        starsEl.textContent = new Intl.NumberFormat().format(starCount);
        cache[repo] = { stars: starCount, timestamp: Date.now() };
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(cache));
      } catch {
        const s = el.querySelector('[data-stars]'); if (s) s.textContent = '–';
      }
    });
  })();

  // Copy to clipboard for mail/tel
  (function addCopyToClipboard() {
    const copyables = document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]');
    copyables.forEach(el => {
      const originalText = el.textContent.trim();
      el.addEventListener('click', e => {
        e.preventDefault();
        const textToCopy = el.getAttribute('href').replace(/^(mailto:|tel:)/, '');
        navigator.clipboard.writeText(textToCopy).then(() => {
          el.textContent = 'Copied!';
          setTimeout(() => el.textContent = originalText, 2000);
        }).catch(() => { window.location.href = el.getAttribute('href'); });
      });
    });
  })();

  // Progress bar
  (function progressBar() {
    const bar = document.getElementById('progress');
    if (!bar) return;
    let isScrolling = false;
    const update = () => {
      if (isScrolling) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${docHeight > 0 ? (scrollTop / docHeight) : 0})`;
        isScrolling = false;
      }
      requestAnimationFrame(update);
    };
    window.addEventListener('scroll', () => isScrolling = true, { passive: true });
    requestAnimationFrame(update);
  })();
})();