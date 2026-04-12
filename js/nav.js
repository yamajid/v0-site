(function () {
  'use strict';

  /* ── Dropdown navigation ─────────────────────────────────── */
  var dropdowns = document.querySelectorAll('.nav-dropdown');
  var closeTimers = [];
  var isTouch = window.matchMedia('(pointer: coarse)').matches;

  dropdowns.forEach(function (dd, i) {
    closeTimers[i] = null;

    if (isTouch) {
      // Touch: click to toggle
      var trigger = dd.querySelector('.nav-dropdown-trigger');
      if (trigger) {
        trigger.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var isOpen = dd.classList.contains('is-open');
          // Close all others first
          dropdowns.forEach(function (o, j) {
            if (o !== dd) {
              if (closeTimers[j]) { clearTimeout(closeTimers[j]); closeTimers[j] = null; }
              o.classList.remove('is-open');
            }
          });
          dd.classList.toggle('is-open', !isOpen);
        });
      }
    } else {
      // Mouse: hover with delay
      dd.addEventListener('mouseenter', function () {
        if (closeTimers[i]) { clearTimeout(closeTimers[i]); closeTimers[i] = null; }
        dropdowns.forEach(function (other, j) {
          if (j !== i) {
            if (closeTimers[j]) { clearTimeout(closeTimers[j]); closeTimers[j] = null; }
            other.classList.remove('is-open');
          }
        });
        dd.classList.add('is-open');
      });

      dd.addEventListener('mouseleave', function () {
        closeTimers[i] = setTimeout(function () {
          dd.classList.remove('is-open');
        }, 120);
      });
    }
  });

  // Click outside closes all
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dropdown')) {
      dropdowns.forEach(function (dd) { dd.classList.remove('is-open'); });
    }
  });

  /* ── Mobile hamburger menu ───────────────────────────────── */
  var toggle = document.querySelector('.nav-mobile-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.setAttribute('aria-expanded', 'false');

    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var expanded = navLinks.classList.toggle('active');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-links') && !e.target.closest('.nav-mobile-toggle')) {
        navLinks.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }
})();
