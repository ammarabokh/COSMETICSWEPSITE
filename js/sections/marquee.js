/* Markup for the scrolling word strip (#marquee). Words come from content/site.js -> marquee. */
Leen.sections.marquee = function (c) {
  var one = c.marquee.map(function (w) { return '<span>' + w + '</span><i>✦</i>'; }).join('');
  // the list is repeated twice so the CSS animation can loop seamlessly
  return '<div class="marquee-track">' + one + one + '</div>';
};
