/* Smooth scrolling (Lenis) wired to GSAP ScrollTrigger, plus smooth anchor-link jumps. */
Leen.features.smoothScroll = function () {
  if (!Leen.hasGsap) return;
  window.gsap.registerPlugin(window.ScrollTrigger);
  if (!window.Lenis || Leen.reduced) return;

  var lenis = new window.Lenis({ lerp: 0.09, smoothWheel: true });
  lenis.on('scroll', window.ScrollTrigger.update);
  window.gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
  window.gsap.ticker.lagSmoothing(0);

  Leen.$$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var el = Leen.$(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: id === '#top' ? 0 : -60, duration: 1.4 });
    });
  });
};
