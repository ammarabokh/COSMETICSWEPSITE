/* "Our work" gallery: images on a 3D ring that rotates by itself and can be dragged.
   Rotation speed is set in content/settings.js -> ringSpeed. */
Leen.features.ringGallery = function () {
  var $ = Leen.$, $$ = Leen.$$;
  var stage = $('#ringStage'), ring = $('#ring');
  if (!stage || !ring) return;

  var cards = $$('.ring-card', ring), n = cards.length, step = 360 / n;
  var rot = 0, vel = 0, dragging = false, lastX = 0, visible = false, hover = false;
  var AUTO = Leen.reduced ? 0 : window.SITE.settings.ringSpeed; // degrees per second

  // card size, ring radius and camera distance depend on the stage width
  function layout() {
    var sw = stage.clientWidth;
    var w = sw < 600 ? sw * 0.62 : Math.max(220, Math.min(470, sw * 0.37));
    var h = w * 1.34;
    var R = w * 2.15;
    stage.style.height = Math.round(h * 1.12) + 'px';
    stage.style.perspective = Math.round(R * 0.66) + 'px';
    stage.style.setProperty('--w', w + 'px');
    stage.style.setProperty('--h', h + 'px');
    cards.forEach(function (c, i) {
      c.style.transform = 'rotateY(' + (i * step) + 'deg) translateZ(' + (-R) + 'px)';
    });
    apply();
  }
  function apply() { ring.style.transform = 'rotateY(' + rot + 'deg)'; }

  stage.addEventListener('pointerdown', function (e) {
    dragging = true; lastX = e.clientX; vel = 0;
    stage.classList.add('dragging');
    stage.setPointerCapture(e.pointerId);
  });
  stage.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    var dx = e.clientX - lastX; lastX = e.clientX;
    rot += dx * 0.16; vel = dx * 0.16; apply();
  });
  function end() { dragging = false; stage.classList.remove('dragging'); }
  stage.addEventListener('pointerup', end);
  stage.addEventListener('pointercancel', end);
  stage.addEventListener('mouseenter', function () { hover = true; });
  stage.addEventListener('mouseleave', function () { hover = false; });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(stage);
  } else { visible = true; }

  var prev = performance.now();
  function tick(t) {
    var dt = Math.min((t - prev) / 1000, 0.05); prev = t;
    if (visible && !dragging) {
      var speed = AUTO * (hover ? 0.25 : 1);
      vel *= 0.94; // inertia from a drag fades out
      rot += speed * dt + vel; apply();
    }
    requestAnimationFrame(tick);
  }
  window.addEventListener('resize', layout);
  layout();
  requestAnimationFrame(tick);
};
