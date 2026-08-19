/* Hero signature: an ensemble of Lorenz-63 trajectories.
   Same model, slightly different initial conditions. The premise
   of ensemble-based data assimilation, drawn live. */
(function () {
  var canvas = document.getElementById('ensemble');
  if (!canvas || !canvas.getContext) return;

  var ctx = canvas.getContext('2d');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var SIGMA = 10, RHO = 28, BETA = 8 / 3, DT = 0.0045;
  var MEMBERS = 26;
  var members = [];
  var truth = null;
  var w = 0, h = 0, dpr = 1, scale = 1, ox = 0, oy = 0, raf = null;

  function seed() {
    members = [];
    for (var i = 0; i < MEMBERS; i++) {
      members.push({
        x: -8 + (Math.random() - 0.5) * 1.4,
        y: 7 + (Math.random() - 0.5) * 1.4,
        z: 27 + (Math.random() - 0.5) * 1.4,
        px: null, py: null
      });
    }
    truth = { x: -8, y: 7, z: 27, px: null, py: null };
  }

  function step(p) {
    var dx = SIGMA * (p.y - p.x);
    var dy = p.x * (RHO - p.z) - p.y;
    var dz = p.x * p.y - BETA * p.z;
    p.x += dx * DT; p.y += dy * DT; p.z += dz * DT;
  }

  // Project (x, z) onto the canvas, tilted slightly for depth.
  function project(p) {
    return [ox + p.x * scale + p.y * scale * 0.16, oy - (p.z - 25) * scale];
  }

  function drawSegment(p, color, width) {
    var q = project(p);
    if (p.px !== null) {
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(p.px, p.py);
      ctx.lineTo(q[0], q[1]);
      ctx.stroke();
    }
    p.px = q[0]; p.py = q[1];
  }

  function resize() {
    var rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = rect.width; h = rect.height;
    if (!w || !h) return;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    scale = Math.min(w / 62, h / 52);
    ox = w * (w < 760 ? 0.5 : 0.68);
    oy = h * 0.52;

    seed();
    if (reduced) { burn(2600); }
  }

  function burn(n) {
    for (var k = 0; k < n; k++) tick(false);
  }

  function tick(fade) {
    if (fade) {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,0.006)';
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';
    }
    for (var i = 0; i < members.length; i++) {
      step(members[i]);
      drawSegment(members[i], 'rgba(217,164,65,0.16)', 0.9);
    }
    step(truth);
    drawSegment(truth, 'rgba(127,211,199,0.55)', 1.5);
  }

  function frame() {
    for (var s = 0; s < 5; s++) tick(s === 0);
    raf = window.requestAnimationFrame(frame);
  }

  var resizeTimer;
  window.addEventListener('resize', function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      if (raf) window.cancelAnimationFrame(raf);
      resize();
      if (!reduced) raf = window.requestAnimationFrame(frame);
    }, 180);
  });

  resize();
  if (!reduced) raf = window.requestAnimationFrame(frame);

  // Pause when the hero scrolls out of view.
  if ('IntersectionObserver' in window && !reduced) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !raf) raf = window.requestAnimationFrame(frame);
        else if (!e.isIntersecting && raf) { window.cancelAnimationFrame(raf); raf = null; }
      });
    }, { threshold: 0 }).observe(canvas);
  }
})();
