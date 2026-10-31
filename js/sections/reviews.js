/* Markup for the Reviews slider (#reviews). Text comes from content/ar.js + content/en.js -> reviews. */
Leen.sections.reviews = function (c) {
  var r = c.reviews;
  var slides = r.items.map(function (it) {
    var stars = new Array(it.stars + 1).join('★');
    return '' +
      '<figure class="swiper-slide review">' +
        '<div class="stars" aria-label="' + it.stars + ' ' + c.ui.ofFive + '">' + stars + '</div>' +
        '<blockquote>' + it.text + '</blockquote>' +
        '<figcaption>' + it.author + '</figcaption>' +
      '</figure>';
  }).join('');
  return '' +
    '<div class="wrap">' +
      '<div class="section-head">' +
        '<span class="eyebrow reveal">' + r.eyebrow + '</span>' +
        '<h2 class="reveal">' + r.title + '</h2>' +
      '</div>' +
      '<div class="swiper review-swiper reveal">' +
        '<div class="swiper-wrapper">' + slides + '</div>' +
        '<div class="swiper-pagination"></div>' +
      '</div>' +
    '</div>';
};
