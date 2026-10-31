/* Markup for the top navigation (#nav). Text comes from content/ar.js + content/en.js -> nav, brand. */
Leen.sections.nav = function (c) {
  var links = c.nav.links.map(function (l) {
    return '<a href="' + l.href + '">' + l.label + '</a>';
  }).join('');
  return '' +
    '<div class="nav-inner">' +
      '<a href="#top" class="logo" aria-label="' + c.brand.name + '">' + c.brand.name + '<small>' + c.brand.tagline + '</small></a>' +
      '<nav class="nav-links" id="navLinks" aria-label="' + c.nav.ariaLabel + '">' + links + '</nav>' +
      '<a href="' + c.nav.cta.href + '" class="btn btn-sm nav-cta">' + c.nav.cta.label + '</a>' +
      '<button class="lang-switch" id="langSwitch" type="button" data-lang="' + c.nav.langSwitch.target + '" title="' + c.nav.langSwitch.title + '" lang="' + c.nav.langSwitch.target + '">' + c.nav.langSwitch.label + '</button>' +
      '<button class="burger" id="burger" aria-label="' + c.ui.menu + '" aria-expanded="false" aria-controls="navLinks"><span></span><span></span></button>' +
    '</div>';
};
