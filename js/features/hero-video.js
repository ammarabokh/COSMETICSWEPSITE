/* Hero: scroll-scrubbed video.
   The video is a sequence of WebP frames (assets/frames/hero) drawn on a <canvas>.
   Frame count/paths and when each text step appears are set in content/settings.js -> */
Leen.features.heroVideo = (function () {
  var $ = Leen.$, $$ = Leen.$$;
  var cfg = window.SITE.settings.heroFrames;
  var starts = window.SITE.settings.heroStepStarts;
  var COUNT = cfg.count;

  var canvas, ctx;
  var frames = new Array(COUNT);
  var loaded = 0, lastDrawn = -1;
  var state = { frame: 0 };
  var steps = [], currentStep = -1;

  function framePath(i) {
    return cfg.folder + cfg.prefix + String(i + 1).padStart(cfg.digits, '0') + cfg.ext;
  }

  function sizeCanvas() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(canvas.clientWidth * dpr);
    canvas.height = Math.round(canvas.clientHeight * dpr);
    lastDrawn = -1;
    draw();
  }

  function draw() {
    var idx = Math.round(state.frame);
    var img = frames[idx];
    if (!img || !img.complete || !img.naturalWidth) {
      // use the nearest loaded frame while the rest are still arriving
      img = null;
      for (var d = 1; d < COUNT && !img; d++) {
        var c = frames[idx - d] || frames[idx + d];
        if (c && c.complete && c.naturalWidth) img = c;
      }
    }
    if (!img || (idx === lastDrawn && img === frames[idx])) return;
    lastDrawn = idx;
    var cw = canvas.width, ch = canvas.height;
    var s = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    var w = img.naturalWidth * s, h = img.naturalHeight * s;
    ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
  }

  function setStep(p) {
    var n = 0;
    for (var i = 0; i < starts.length; i++) if (p >= starts[i]) n = i;
    if (n === currentStep) return;
    currentStep = n;
    steps.forEach(function (el, i) { el.classList.toggle('is-active', i === n); });
  }

  // loads every frame, reports progress to the loader, then calls done()
  function preload(done) {
    canvas = $('#heroCanvas');
    ctx = canvas.getContext('2d');
    var bar = $('#loaderBar');
    var finished = false;
    function finish() { if (!finished) { finished = true; done(); } }
    for (var i = 0; i < COUNT; i++) {
      (function (i) {
        var im = new Image();
        im.decoding = 'async';
        im.onload = im.onerror = function () {
          loaded++;
          bar.style.width = Math.round(loaded / COUNT * 100) + '%';
          if (i === 0) sizeCanvas();
          if (loaded === COUNT) finish();
        };
        im.src = framePath(i);
        frames[i] = im;
      })(i);
    }
    setTimeout(finish, 7000); // never block the page on a slow connection
  }

  function init() {
    steps = $$('.hero-text');
    window.addEventListener('resize', sizeCanvas);
    sizeCanvas();
    if (Leen.reduced || !Leen.hasGsap) {
      $('#hero').style.height = '100vh';
      state.frame = 0; draw();
      return;
    }
    var hint = $('#scrollHint'), prog = $('#heroProgress');
    var target = 0;
    window.ScrollTrigger.create({
      trigger: '#hero',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: function (self) {
        target = self.progress * (COUNT - 1);
        setStep(self.progress);
        prog.style.width = (self.progress * 100) + '%';
        hint.style.opacity = self.progress > 0.04 ? 0 : 1;
      }
    });
    // smooth the frame index so scrubbing feels fluid
    window.gsap.ticker.add(function () {
      state.frame += (target - state.frame) * 0.14;
      if (Math.abs(target - state.frame) < 0.02) state.frame = target;
      draw();
    });
  }

  return { preload: preload, init: init };
})();
