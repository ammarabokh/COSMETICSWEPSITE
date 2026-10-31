/* Markup for the hero (#hero). Text comes from content/site.js -> hero. */
Leen.sections.hero = function (c) {
  var steps = c.hero.steps.map(function (s, i) {
    var tag = i === 0 ? 'h1' : 'h2';
    var buttons = (s.buttons || []).map(function (b) {
      return '<a href="' + b.href + '" class="btn' + (b.ghost ? ' btn-ghost' : '') + '">' + b.label + '</a>';
    }).join('');
    return '' +
      '<div class="hero-text' + (i === 0 ? ' is-active' : '') + '" data-step="' + i + '">' +
        '<span class="eyebrow light">' + s.eyebrow + '</span>' +
        '<' + tag + '>' + s.title + '</' + tag + '>' +
        '<p>' + s.text + '</p>' +
        (buttons ? '<div class="hero-cta">' + buttons + '</div>' : '') +
      '</div>';
  }).join('');

  return '' +
    '<div class="hero-sticky">' +
      '<canvas id="heroCanvas" aria-hidden="true"></canvas>' +
      '<div class="hero-shade"></div>' +
      '<div class="hero-stage">' + steps + '</div>' +
      '<div class="scroll-hint" id="scrollHint"><span>' + c.hero.scrollHint + '</span><i></i></div>' +
      '<div class="hero-progress"><span id="heroProgress"></span></div>' +
    '</div>';
};
