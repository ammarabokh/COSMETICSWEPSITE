/* Markup for the Offers posters (#offers). Text comes from content/ar.js + content/en.js -> offers.
   The decorative SVG for each poster variant (bride / season / new) is defined here. */
Leen.sections.offers = function (c) {
  var o = c.offers;
  var ornaments = {
    bride: '<svg class="poster-ornament" viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" stroke-width="1"/><circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" stroke-width="1"/><circle cx="100" cy="100" r="48" fill="none" stroke="currentColor" stroke-width=".8"/></svg>',
    season: '<svg class="poster-ornament" viewBox="0 0 200 200" aria-hidden="true"><path d="M100 10 L112 88 L190 100 L112 112 L100 190 L88 112 L10 100 L88 88 Z" fill="none" stroke="currentColor" stroke-width="1"/></svg>',
    'new': '<svg class="poster-ornament" viewBox="0 0 200 200" aria-hidden="true"><ellipse cx="100" cy="100" rx="40" ry="90" fill="none" stroke="currentColor" stroke-width="1"/><ellipse cx="100" cy="100" rx="90" ry="40" fill="none" stroke="currentColor" stroke-width="1"/></svg>'
  };
  var posters = o.items.map(function (p) {
    return '' +
      '<article class="poster poster-' + p.variant + ' reveal">' +
        '<span class="poster-tag">' + p.tag + '</span>' +
        '<h3>' + p.title + '</h3>' +
        '<p>' + p.text + '</p>' +
        '<a href="#booking" class="btn btn-sm' + (p.light ? ' btn-light' : '') + '" data-pick="' + p.service + '">' + p.cta + '</a>' +
        (ornaments[p.variant] || '') +
      '</article>';
  }).join('');
  return '' +
    '<div class="wrap">' +
      '<div class="section-head">' +
        '<span class="eyebrow reveal">' + o.eyebrow + '</span>' +
        '<h2 class="reveal">' + o.title + '</h2>' +
      '</div>' +
      '<div class="poster-grid">' + posters + '</div>' +
    '</div>';
};
