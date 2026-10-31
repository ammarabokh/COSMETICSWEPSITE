/* Scroll-reveal animation for every .reveal element + animated number counters ([data-count]). */
Leen.features.reveal = function () {
  var $$ = Leen.$$;
  if (!Leen.hasGsap || Leen.reduced) {
    $$('.reveal').forEach(function (e) { e.style.opacity = 1; e.style.transform = 'none'; });
    return;
  }
  window.ScrollTrigger.batch('.reveal', {
    start: 'top 88%',
    once: true,
    onEnter: function (batch) {
      window.gsap.to(batch, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12 });
    }
  });
  $$('[data-count]').forEach(function (el) {
    var end = +el.dataset.count, plus = el.dataset.plus ? '+' : '';
    var o = { v: 0 };
    window.ScrollTrigger.create({
      trigger: el, start: 'top 92%', once: true,
      onEnter: function () {
        window.gsap.to(o, {
          v: end, duration: 2, ease: 'power2.out',
          onUpdate: function () { el.textContent = Math.round(o.v).toLocaleString('en') + plus; }
        });
      }
    });
  });
};
