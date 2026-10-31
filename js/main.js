/* Entry point: builds every section from content/site.js, then starts the behaviours. */
(function () {
  var C = window.SITE;

  // section key (js/sections/<key>.js) -> element id in index.html
  var mounts = {
    loader: 'loader', nav: 'nav', hero: 'hero', marquee: 'marquee', about: 'about',
    services: 'services', offers: 'offers', gallery: 'gallery', reviews: 'reviews',
    booking: 'booking', contact: 'contact', footer: 'footer', waFloat: 'waFloat'
  };
  Object.keys(mounts).forEach(function (key) {
    var el = document.getElementById(mounts[key]);
    if (el && Leen.sections[key]) el.innerHTML = Leen.sections[key](C);
  });

  document.title = C.meta.title;
  var desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', C.meta.description);
  var wa = document.getElementById('waFloat');
  if (wa) wa.href = Leen.waLink();

  if (window.lucide) window.lucide.createIcons();

  var F = Leen.features;
  F.nav();
  F.smoothScroll();
  F.reveal();
  F.reviewsSlider();
  F.ringGallery();
  F.bookingForm();

  F.heroVideo.preload(function () {
    F.heroVideo.init();
    document.body.classList.remove('is-loading');
    document.getElementById('loader').classList.add('done');
    if (Leen.hasGsap) window.ScrollTrigger.refresh();
  });
})();
