// Bilderkarussell: liest screenshots/manifest.json und baut daraus ein Karussell.
// Ohne Einträge bleibt der Bereich verborgen. Keine Fremdbibliotheken.
(() => {
  const section = document.querySelector('#einblicke');
  const root = document.querySelector('#carousel');
  if (!section || !root) return;

  fetch(new URL('../../screenshots/manifest.json?v=202611232030', location.href), { cache: 'no-cache' })
    .then(r => (r.ok ? r.json() : null))
    .then(data => {
      const slides = data && Array.isArray(data.slides) ? data.slides.filter(s => s && typeof s.src === 'string') : [];
      if (slides.length) build(slides);
    })
    .catch(() => {});

  function el(tag, attrs = {}, text) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
    if (text) node.textContent = text;
    return node;
  }

  function chevron(d) {
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    const path = document.createElementNS(ns, 'path');
    path.setAttribute('d', d);
    svg.append(path);
    return svg;
  }

  function build(slides) {
    const K = window.kalino;
    const translated = () => !!K && K.lang !== 'de';
    const tr = (key, fallback, vars) => (K ? K.t(key, vars) || fallback : fallback);
    const captionOf = (s, i) => (translated() ? K.t(`s${i + 1}`) : s.caption) || s.caption || '';
    const altOf = (s, i) => (translated() ? K.t(`s${i + 1}`) : s.alt) || s.alt || '';
    const track = el('ul', { class: 'track', tabindex: '0', 'aria-label': tr('shots.track', 'Einblicke in die App. Mit den Pfeiltasten blättern.') });
    const figs = [];
    slides.forEach((s, i) => {
      const li = el('li', { class: 'slide', role: 'group', 'aria-label': `${i + 1} / ${slides.length}` });
      const fig = el('figure');
      const img = el('img', { src: new URL(s.src, new URL('../../', location.href)).href, alt: altOf(s, i), loading: i === 0 ? 'eager' : 'lazy', decoding: 'async' });
      if (s.width && s.height) { img.setAttribute('width', String(s.width)); img.setAttribute('height', String(s.height)); }
      fig.append(img);
      const cap = el('figcaption', {}, captionOf(s, i));
      fig.append(cap);
      figs.push({ img, cap });
      li.append(fig);
      track.append(li);
    });

    const prev = el('button', { type: 'button', class: 'nav-btn prev', 'aria-label': tr('shots.prev', 'Vorheriges Bild') });
    const next = el('button', { type: 'button', class: 'nav-btn next', 'aria-label': tr('shots.next', 'Nächstes Bild') });
    prev.append(chevron('M15 5l-7 7 7 7'));
    next.append(chevron('M9 5l7 7-7 7'));
    const dots = el('div', { class: 'dots' });
    const dotButtons = slides.map((_, i) => {
      const b = el('button', { type: 'button', 'aria-label': tr('shots.dot', `Bild ${i + 1} von ${slides.length}`, { n: i + 1, total: slides.length }) });
      b.addEventListener('click', () => goTo(i));
      dots.append(b);
      return b;
    });

    root.replaceChildren(track, prev, next, dots);
    section.hidden = false;
    const navLink = document.querySelector('#nav-einblicke');
    if (navLink) navLink.hidden = false;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const width = () => track.clientWidth;
    const index = () => Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollLeft / (width() || 1))));
    function goTo(i) { track.scrollTo({ left: i * width(), behavior: reduce ? 'auto' : 'smooth' }); }
    function update() {
      const i = index();
      dotButtons.forEach((b, n) => b.setAttribute('aria-current', n === i ? 'true' : 'false'));
      prev.disabled = i === 0;
      next.disabled = i === slides.length - 1;
    }
    prev.addEventListener('click', () => goTo(index() - 1));
    next.addEventListener('click', () => goTo(index() + 1));
    track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
    track.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index() + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(index() - 1); }
    });
    window.addEventListener('resize', () => goTo(index()));
    function relabel() {
      track.setAttribute('aria-label', tr('shots.track', 'Einblicke in die App. Mit den Pfeiltasten blättern.'));
      prev.setAttribute('aria-label', tr('shots.prev', 'Vorheriges Bild'));
      next.setAttribute('aria-label', tr('shots.next', 'Nächstes Bild'));
      dotButtons.forEach((b, n) => b.setAttribute('aria-label', tr('shots.dot', `Bild ${n + 1} von ${slides.length}`, { n: n + 1, total: slides.length })));
      figs.forEach((f, n) => { f.img.setAttribute('alt', altOf(slides[n], n)); f.cap.textContent = captionOf(slides[n], n); });
    }
    document.addEventListener('kalino:lang', relabel);
    update();
  }
})();
