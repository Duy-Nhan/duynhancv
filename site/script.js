(function () {
  var root = document.documentElement;

  // Theme toggle (remembered per browser; works without storage too)
  var themeBtn = document.getElementById('themeBtn');
  function currentTheme() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  themeBtn.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Mobile menu
  var menuBtn = document.getElementById('menuBtn');
  var navLinks = document.getElementById('navLinks');
  function setMenu(open) {
    navLinks.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  menuBtn.addEventListener('click', function () {
    setMenu(!navLinks.classList.contains('is-open'));
  });
  navLinks.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  // Highlight the nav link of the section in view.
  // Active = last section whose top has passed 35% of the viewport, or the last
  // section once the page is scrolled to the bottom (short final sections like
  // Contact can never scroll up that far on their own).
  var links = Array.prototype.slice.call(navLinks.querySelectorAll('a'));
  var sections = links.map(function (a) {
    return document.querySelector(a.getAttribute('href'));
  }).filter(Boolean);
  var clickedId = null;
  var settleTimer;

  function setActive(id) {
    links.forEach(function (a) {
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
    });
  }

  function updateActive() {
    var doc = document.documentElement;
    var atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 2;
    var current = null;
    if (atBottom) {
      current = sections[sections.length - 1];
    } else {
      var line = window.innerHeight * 0.35;
      sections.forEach(function (s) {
        if (s.getBoundingClientRect().top <= line) current = s;
      });
    }
    setActive(current ? current.id : null);
  }

  window.addEventListener('scroll', function () {
    // After a nav click, keep the clicked link active until the scroll settles
    if (clickedId) {
      clearTimeout(settleTimer);
      settleTimer = setTimeout(function () { clickedId = null; }, 150);
      return;
    }
    updateActive();
  }, { passive: true });
  window.addEventListener('resize', updateActive);

  navLinks.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a) return;
    clickedId = a.getAttribute('href').slice(1);
    setActive(clickedId);
  });

  updateActive();

  // "Download CV" opens the print dialog; choose "Save as PDF"
  document.getElementById('printBtn').addEventListener('click', function () {
    window.print();
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
