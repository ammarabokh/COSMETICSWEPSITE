/* Markup for the Services section (#services). Text/images come from content/ar.js + content/en.js -> services. */
Leen.sections.services = function (c) {
  var s = c.services;
  var cards = s.items.map(function (it) {
    return '' +
      '<article class="card reveal" data-service="' + it.name + '">' +
        '<div class="card-img"><img src="' + it.image + '" alt="' + it.alt + '" loading="lazy" width="600" height="800"></div>' +
        '<div class="card-body"><i data-lucide="' + it.icon + '"></i>' +
          '<h3>' + it.name + '</h3>' +
          '<p>' + it.text + '</p>' +
          '<a href="#booking" data-pick="' + it.name + '">' + s.cardCta + '</a>' +
        '</div>' +
      '</article>';
  }).join('');
  return '' +
    '<div class="wrap">' +
      '<div class="section-head">' +
        '<span class="eyebrow reveal">' + s.eyebrow + '</span>' +
        '<h2 class="reveal">' + s.title + '</h2>' +
        '<p class="reveal">' + s.intro + '</p>' +
      '</div>' +
      '<div class="service-grid">' + cards + '</div>' +
    '</div>';
};
