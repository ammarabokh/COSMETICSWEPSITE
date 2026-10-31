/* Markup for the "Our work" gallery (#gallery). Text/images come from content/ar.js + content/en.js -> gallery. */
Leen.sections.gallery = function (c) {
  var g = c.gallery;
  var cards = g.images.map(function (im) {
    return '<figure class="ring-card"><img src="' + im.src + '" alt="' + im.alt + '" loading="lazy" draggable="false"></figure>';
  }).join('');
  return '' +
    '<div class="wrap">' +
      '<div class="section-head">' +
        '<span class="eyebrow reveal">' + g.eyebrow + '</span>' +
        '<h2 class="reveal">' + g.title + '</h2>' +
      '</div>' +
    '</div>' +
    '<div class="ring-stage reveal" id="ringStage" aria-label="' + g.ariaLabel + '">' +
      '<div class="ring" id="ring">' + cards + '</div>' +
    '</div>' +
    '<p class="ring-hint">' + g.hint + '</p>';
};
