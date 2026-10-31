/* Navigation behaviour: turns white on scroll, mobile burger menu. */
Leen.features.nav = function () {
  var $ = Leen.$, $$ = Leen.$$;
  var nav = $('#nav'), burger = $('#burger'), links = $('#navLinks');

  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 60); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  $$('a', links).forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
};
