/* Markup for the scrolling word strip (#marquee). Words come from content/ar.js + content/en.js -> marquee. */
Leen.sections.marquee = function (c) {
  var one = c.marquee.map(function (w) { return '<span>' + w + '</span><i>✦</i>'; }).join('');
  // the list is repeated twice so the CSS animation can loop seamlessly
  return '<div class="marquee-track">' + one + one + '</div>';
};
