/* Navigation behaviour: turns white on scroll, mobile burger menu. */
Leen.features.nav = function () {
  var $ = Leen.$, $$ = Leen.$$;
  var nav = $('#nav'), burger = $('#burger'), links = $('#navLinks');

  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 60); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // language switch: remember the choice and reload in the other language (content/select.js reads it)
  Leen.$('#langSwitch').addEventListener('click', function (e) {
    try { localStorage.setItem('leen-lang', e.currentTarget.dataset.lang); } catch (err) { /* ignore */ }
    // drop a ?lang=... in the address so it does not override the new choice
    var url = new URL(window.location.href);
    url.searchParams.delete('lang');
    window.location.href = url.toString();
  });

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
