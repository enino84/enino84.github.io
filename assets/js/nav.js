(function () {
  var burger = document.querySelector('.nav__burger');
  var nav = document.querySelector('.nav');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.textContent = open ? 'Close' : 'Menu';
    });
  }

  var items = document.querySelectorAll('.nav__item--has-menu');
  Array.prototype.forEach.call(items, function (item) {
    var toggle = item.querySelector('.nav__toggle');
    if (!toggle) return;
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = item.classList.contains('is-open');
      Array.prototype.forEach.call(items, function (o) {
        o.classList.remove('is-open');
        var t = o.querySelector('.nav__toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        item.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', function () {
    Array.prototype.forEach.call(items, function (o) {
      o.classList.remove('is-open');
      var t = o.querySelector('.nav__toggle');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    Array.prototype.forEach.call(items, function (o) { o.classList.remove('is-open'); });
    if (nav && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      if (burger) { burger.textContent = 'Menu'; burger.setAttribute('aria-expanded', 'false'); }
    }
  });
})();
