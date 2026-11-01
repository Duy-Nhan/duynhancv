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

  // Highlight the nav link of the section in view
  var links = Array.prototype.slice.call(navLinks.querySelectorAll('a'));
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    links.forEach(function (a) {
      var section = document.querySelector(a.getAttribute('href'));
      if (section) observer.observe(section);
    });
  }

  // "Download CV" opens the print dialog; choose "Save as PDF"
  document.getElementById('printBtn').addEventListener('click', function () {
    window.print();
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
