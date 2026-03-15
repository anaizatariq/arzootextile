// ── Navbar scroll ─────────────────────────────────────────────
(function () {
  var nav = document.getElementById('siteNav');
  if (!nav) return;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) nav.classList.add('solid');
    else nav.classList.remove('solid');
  }, { passive: true });
})();

// ── Mobile menu ───────────────────────────────────────────────
(function () {
  var toggle = document.getElementById('mobileToggle');
  var menu   = document.getElementById('mobileMenu');
  var iconO  = document.getElementById('iconOpen');
  var iconC  = document.getElementById('iconClose');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    if (iconO) iconO.style.display = open ? 'none' : 'block';
    if (iconC) iconC.style.display = open ? 'block' : 'none';
  });
  menu.querySelectorAll('.nav-link').forEach(function (l) {
    l.addEventListener('click', function () {
      menu.classList.remove('open');
      if (iconO) iconO.style.display = 'block';
      if (iconC) iconC.style.display = 'none';
    });
  });
})();

// ── Fade-up on scroll ─────────────────────────────────────────
(function () {
  function init() {
    var els = document.querySelectorAll('.fade-up:not(.visible)');
    if (!els.length) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { obs.observe(el); });
  }
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
})();

// ── Contact form ──────────────────────────────────────────────
(function () {
  var form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = form.querySelector('button[type=submit]');
    var ok  = document.getElementById('formSuccess');
    if (btn) { btn.disabled = true; btn.textContent = 'Submitting…'; }
    setTimeout(function () {
      form.reset();
      if (btn) { btn.disabled = false; btn.textContent = 'Submit Inquiry'; }
      if (ok)  { ok.style.display = 'block'; setTimeout(function () { ok.style.display = 'none'; }, 5000); }
    }, 900);
  });
})();

// ── Footer year ───────────────────────────────────────────────
(function () {
  var el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
})();
