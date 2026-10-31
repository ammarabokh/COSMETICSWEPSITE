/* Markup for the About section (#about). Text/images come from content/site.js -> about. */
Leen.sections.about = function (c) {
  var a = c.about;
  var stats = a.stats.map(function (s) {
    return '<div><b data-count="' + s.value + '"' + (s.plus ? ' data-plus="1"' : '') + '>0</b><span>' + s.label + '</span></div>';
  }).join('');
  return '' +
    '<div class="wrap about-grid">' +
      '<div class="about-media reveal">' +
        '<img class="about-img-main" src="' + a.mainImage.src + '" alt="' + a.mainImage.alt + '" loading="lazy" width="700" height="868">' +
        '<img class="about-img-sub" src="' + a.subImage.src + '" alt="' + a.subImage.alt + '" loading="lazy" width="420" height="520">' +
        '<span class="about-badge">' + c.brand.name + '<br><small>' + a.badge + '</small></span>' +
      '</div>' +
      '<div class="about-copy">' +
        '<span class="eyebrow reveal">' + a.eyebrow + '</span>' +
        '<h2 class="reveal">' + a.title + '</h2>' +
        '<p class="reveal">' + a.text + '</p>' +
        '<div class="stats reveal">' + stats + '</div>' +
        '<a href="' + a.cta.href + '" class="btn reveal">' + a.cta.label + '</a>' +
      '</div>' +
    '</div>';
};
