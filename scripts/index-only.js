(() => {
  'use strict';

  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Dynamic text animation with proper singleton pattern
  function initDynamicText() {
    const dynamicTextEl = document.getElementById('dynamic-text-element');
    if (!dynamicTextEl) return;

    // Prevent multiple instances
    if (window.dynamicTextAnimation && window.dynamicTextAnimation.isRunning) {
      return;
    }

    let currentIndex = 0;
    let isAnimating = false;
    let animationTimeout;
    let isRunning = true;

    function getCurrentLanguage() {
      return document.documentElement.lang || 'en';
    }

    function getCurrentRoles() {
      const lang = getCurrentLanguage();
      return window.getLanguageRoles ? window.getLanguageRoles(lang) : 
        ['Python Developer', 'C++ Developer', 'Data Scientist'];
    }

    function cleanupAnimation() {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
        animationTimeout = null;
      }
      isAnimating = false;
    }

    function typeText(text, callback) {
      if (isAnimating || !isRunning) return;
      isAnimating = true;
      
      // Clear any existing content
      dynamicTextEl.textContent = '';
      let i = 0;
      
      function typeChar() {
        if (!isRunning) {
          cleanupAnimation();
          return;
        }
        
        if (i < text.length) {
          dynamicTextEl.textContent += text[i];
          i++;
          animationTimeout = setTimeout(typeChar, 80);
        } else {
          isAnimating = false;
          if (isRunning && callback) {
            animationTimeout = setTimeout(callback, 2500);
          }
        }
      }
      
      typeChar();
    }

    function eraseText(callback) {
      if (isAnimating || !isRunning) return;
      isAnimating = true;
      
      const text = dynamicTextEl.textContent;
      let i = text.length;
      
      function eraseChar() {
        if (!isRunning) {
          cleanupAnimation();
          return;
        }
        
        if (i > 0) {
          dynamicTextEl.textContent = text.substring(0, i - 1);
          i--;
          animationTimeout = setTimeout(eraseChar, 40);
        } else {
          isAnimating = false;
          if (isRunning && callback) {
            animationTimeout = setTimeout(callback, 300);
          }
        }
      }
      
      eraseChar();
    }

    function nextRole() {
      if (!isRunning) return;
      const roles = getCurrentRoles();
      eraseText(() => {
        if (!isRunning) return;
        currentIndex = (currentIndex + 1) % roles.length;
        typeText(roles[currentIndex], nextRole);
      });
    }

    function startAnimation() {
      if (!isRunning) return;
      cleanupAnimation();
      
      const roles = getCurrentRoles();
      currentIndex = 0;
      dynamicTextEl.textContent = roles[0];
      
      animationTimeout = setTimeout(() => {
        if (isRunning) nextRole();
      }, 3000);
    }

    function stopAnimation() {
      isRunning = false;
      cleanupAnimation();
    }

    function restartAnimation() {
      stopAnimation();
      isRunning = true;
      setTimeout(() => startAnimation(), 100);
    }

    // Export animation controls
    window.dynamicTextAnimation = {
      updateLanguage(lang) {
        restartAnimation();
      },
      stop: stopAnimation,
      restart: restartAnimation,
      isRunning: true
    };

    // Start initial animation
    startAnimation();
  }

  // Skills progress animation
  function initSkillsAnimation() {
    const skillItems = document.querySelectorAll('.skill-item');
    if (!skillItems.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target.querySelector('.skill-progress');
          const progress = progressBar.getAttribute('data-progress');
          
          setTimeout(() => {
            progressBar.style.width = `${progress}%`;
          }, 500);
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    skillItems.forEach(item => observer.observe(item));
  }

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

  // GitHub stars (cached) with skeleton loading
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
          starsEl.classList.add('loaded');
          return;
        }
        
        const res = await fetch(`https://api.github.com/repos/${repo}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        const starCount = data.stargazers_count;
        
        starsEl.textContent = new Intl.NumberFormat().format(starCount);
        starsEl.classList.add('loaded');
        
        cache[repo] = { stars: starCount, timestamp: Date.now() };
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(cache));
      } catch {
        starsEl.textContent = '–';
        starsEl.classList.add('loaded');
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

  // Initialize all features
  document.addEventListener('DOMContentLoaded', () => {
    initDynamicText();
    initSkillsAnimation();
  });

  // Handle page load if already loaded
  if (document.readyState !== 'loading') {
    initDynamicText();
    initSkillsAnimation();
  }
})();