/* Markup for the footer (#footer), the floating WhatsApp button (#waFloat) and the loader (#loader).
   Text comes from content/ar.js + content/en.js -> brand. */
Leen.sections.footer = function (c) {
  return '' +
    '<div class="wrap footer-inner">' +
      '<a href="#top" class="logo">' + c.brand.name + '<small>' + c.brand.tagline + '</small></a>' +
      '<small>© <span id="year">' + new Date().getFullYear() + '</span> ' + c.brand.name + ' · ' + c.brand.footerNote + '</small>' +
    '</div>';
};

Leen.sections.waFloat = function () {
  return Leen.icons.whatsapp.replace('width="24" height="24"', 'width="28" height="28"');
};

Leen.sections.loader = function (c) {
  return '<div class="loader-logo">' + c.brand.name + '</div><div class="loader-bar"><span id="loaderBar"></span></div>';
};
