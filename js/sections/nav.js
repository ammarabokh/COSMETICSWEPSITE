/* Markup for the top navigation (#nav). Text comes from content/site.js -> nav, brand. */
Leen.sections.nav = function (c) {
  var links = c.nav.links.map(function (l) {
    return '<a href="' + l.href + '">' + l.label + '</a>';
  }).join('');
  return '' +
    '<div class="nav-inner">' +
      '<a href="#top" class="logo" aria-label="' + c.brand.name + '">' + c.brand.name + '<small>' + c.brand.tagline + '</small></a>' +
      '<nav class="nav-links" id="navLinks" aria-label="' + c.nav.ariaLabel + '">' + links + '</nav>' +
      '<a href="' + c.nav.cta.href + '" class="btn btn-sm nav-cta">' + c.nav.cta.label + '</a>' +
      '<button class="burger" id="burger" aria-label="القائمة" aria-expanded="false" aria-controls="navLinks"><span></span><span></span></button>' +
    '</div>';
};
