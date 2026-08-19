/* Click a photo, see it big. Escape or a click outside closes it;
   arrow keys move through the photos on the page. */
(function () {
  var SELECTOR = '.shot img, .doc img, .gallery img';
  var items = [];
  var index = 0;
  var lastFocused = null;
  var box = null;

  function collect() {
    items = Array.prototype.slice.call(document.querySelectorAll(SELECTOR));
    items.forEach(function (img, i) {
      img.setAttribute('data-lb', String(i));
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', 'Enlarge: ' + (img.alt || 'photo'));
    });
  }

  function captionFor(img) {
    var fig = img.closest('figure');
    var cap = fig && fig.querySelector('figcaption');
    return cap ? cap.textContent.trim() : (img.alt || '');
  }

  function build() {
    box = document.createElement('div');
    box.className = 'lb';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Photo viewer');
    box.innerHTML =
      '<button class="lb__close" type="button" aria-label="Close">Close</button>' +
      '<button class="lb__nav lb__nav--prev" type="button" aria-label="Previous photo">&#10094;</button>' +
      '<figure class="lb__stage">' +
        '<img class="lb__img" alt="">' +
        '<figcaption class="lb__caption"></figcaption>' +
      '</figure>' +
      '<button class="lb__nav lb__nav--next" type="button" aria-label="Next photo">&#10095;</button>';
    document.body.appendChild(box);

    box.querySelector('.lb__close').addEventListener('click', close);
    box.querySelector('.lb__nav--prev').addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
    box.querySelector('.lb__nav--next').addEventListener('click', function (e) { e.stopPropagation(); step(1); });
    box.addEventListener('click', function (e) { if (e.target === box || e.target.classList.contains('lb__stage')) close(); });
  }

  function show(i) {
    index = (i + items.length) % items.length;
    var src = items[index];
    var img = box.querySelector('.lb__img');
    var cap = box.querySelector('.lb__caption');
    img.src = src.currentSrc || src.src;
    img.alt = src.alt || '';
    cap.textContent = captionFor(src);
    cap.style.display = cap.textContent ? '' : 'none';
    var solo = items.length < 2;
    box.querySelector('.lb__nav--prev').hidden = solo;
    box.querySelector('.lb__nav--next').hidden = solo;
  }

  function open(i) {
    if (!box) build();
    lastFocused = document.activeElement;
    show(i);
    box.classList.add('is-open');
    document.documentElement.style.overflow = 'hidden';
    box.querySelector('.lb__close').focus();
  }

  function close() {
    if (!box) return;
    box.classList.remove('is-open');
    document.documentElement.style.overflow = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  function step(n) { show(index + n); }

  document.addEventListener('click', function (e) {
    var img = e.target.closest && e.target.closest(SELECTOR);
    if (!img) return;
    if (img.closest('a')) return; // an image that is already a link keeps its link
    e.preventDefault();
    open(parseInt(img.getAttribute('data-lb'), 10) || 0);
  });

  document.addEventListener('keydown', function (e) {
    var img = document.activeElement;
    if ((e.key === 'Enter' || e.key === ' ') && img && img.matches && img.matches(SELECTOR)) {
      e.preventDefault();
      open(parseInt(img.getAttribute('data-lb'), 10) || 0);
      return;
    }
    if (!box || !box.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
  });

  collect();
})();
