(function () {
  'use strict';

  /* ── Desktop dropdown (hover) ────────────────────────────── */
  var dropdowns = document.querySelectorAll('.nav-dropdown');
  var closeTimers = [];

  dropdowns.forEach(function (dd, i) {
    closeTimers[i] = null;

    dd.addEventListener('mouseenter', function () {
      if (closeTimers[i]) { clearTimeout(closeTimers[i]); closeTimers[i] = null; }
      // Close every other dropdown immediately
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
  });

  // Click anywhere outside a dropdown closes all
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dropdown')) {
      dropdowns.forEach(function (dd) { dd.classList.remove('is-open'); });
    }
  });

  /* ── Mobile hamburger ────────────────────────────────────── */
  var toggle = document.querySelector('.nav-mobile-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.setAttribute('aria-expanded', 'false');

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var expanded = navLinks.classList.toggle('active');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-links') && !e.target.closest('.nav-mobile-toggle')) {
        navLinks.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }
})();
