// Sticky mobile CTA — shows once the visitor scrolls past the hero section.
// No tracking, no dependencies.
(function () {
  var stickyCta = document.querySelector('.sticky-cta');
  var hero = document.querySelector('.hero, .ty-hero');
  if (!stickyCta || !hero) return;

  var showAfter = hero.offsetHeight * 0.6;

  var ticking = false;
  function update() {
    if (window.scrollY > showAfter) {
      stickyCta.classList.add('visible');
    } else {
      stickyCta.classList.remove('visible');
    }
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
})();
