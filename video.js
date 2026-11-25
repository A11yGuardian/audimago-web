// Video im iPad: zeigt zuerst das Startbild, startet erst nach Tippen (mit Ton).
(() => {
  const $ = s => document.querySelector(s);
  const v = $('#demo'), b = $('#demo-play'), knob = $('#demo-knob');
  if (!v || !b || !knob) return;
  const needle = knob.querySelector('.needle');
  const t = k => (window.kalino && window.kalino.t(k)) || 'Lautstärke';
  // iPhone/iPad erlauben keine Lautstärke per Skript: dort gibt es keinen Regler
  v.volume = 0.5;
  if (v.volume !== 0.5) knob.hidden = true;
  v.volume = 1;
  const level = () => (v.muted ? 0 : v.volume);
  const sync = () => {
    const l = level();
    needle.style.transform = `rotate(${-135 + l * 270}deg)`;
    knob.setAttribute('aria-valuenow', String(Math.round(l * 100)));
    knob.setAttribute('aria-label', t('video.vol'));
  };
  const set = l => {
    l = Math.min(1, Math.max(0, Math.round(l * 20) / 20));
    v.volume = l;
    v.muted = l === 0;
    sync();
  };
  // Drehen: Winkel zur Mitte des Reglers (0 = oben, im Uhrzeigersinn), Bereich -135° bis +135°
  const turn = e => {
    const r = knob.getBoundingClientRect();
    let d = Math.atan2(e.clientX - (r.left + r.width / 2), -(e.clientY - (r.top + r.height / 2))) * 180 / Math.PI;
    if (Math.abs(d) > 135) d = d < 0 ? -135 : 135;
    set((d + 135) / 270);
  };
  let drag = false;
  knob.addEventListener('pointerdown', e => { drag = true; knob.setPointerCapture(e.pointerId); turn(e); e.preventDefault(); });
  knob.addEventListener('pointermove', e => { if (drag) turn(e); });
  const end = () => { drag = false; };
  knob.addEventListener('pointerup', end);
  knob.addEventListener('pointercancel', end);
  knob.addEventListener('wheel', e => { e.preventDefault(); set(level() + (e.deltaY < 0 ? 0.1 : -0.1)); }, { passive: false });
  knob.addEventListener('keydown', e => {
    const k = e.key;
    if (k === 'ArrowUp' || k === 'ArrowRight') set(level() + 0.1);
    else if (k === 'ArrowDown' || k === 'ArrowLeft') set(level() - 0.1);
    else if (k === 'Home') set(0);
    else if (k === 'End') set(1);
    else return;
    e.preventDefault();
  });
  // Antippen des laufenden Videos stoppt es: zurück auf schwarz, das nächste Play beginnt von vorn
  const reset = () => { v.pause(); v.load(); b.hidden = false; };
  b.addEventListener('click', () => {
    v.controls = false;
    b.hidden = true;
    const p = v.play();
    if (p && p.catch) p.catch(reset);
  });
  v.addEventListener('click', () => { if (!v.paused) reset(); });
  v.addEventListener('ended', reset);
  v.addEventListener('volumechange', sync);
  document.addEventListener('kalino:lang', sync);
  sync();
})();

// Bildschirm des iPads im Bild (2000 px breit): oben links, oben rechts, unten rechts, unten links.
// Die schwarze Fläche (626 x 469, 5 px größer als der Bildschirm) wird per Perspektive auf dieses Viereck gelegt.
(() => {
  const box = document.querySelector('.tablet');
  const scr = box && box.querySelector('.screen');
  if (!scr) return;
  const Q = [[912, 418], [1544, 413], [1530, 901], [868, 879]];
  const W = 626, H = 469, IMG = 2000;
  const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = Q;
  const sx = x0 - x1 + x2 - x3, sy = y0 - y1 + y2 - y3;
  const dx1 = x1 - x2, dx2 = x3 - x2, dy1 = y1 - y2, dy2 = y3 - y2;
  const den = dx1 * dy2 - dx2 * dy1;
  const g = (sx * dy2 - dx2 * sy) / den, h = (dx1 * sy - sx * dy1) / den;
  const a = x1 - x0 + g * x1, b = x3 - x0 + h * x3, c = x0;
  const d = y1 - y0 + g * y1, e = y3 - y0 + h * y3, f = y0;
  const m = [a / W, d / W, 0, g / W, b / H, e / H, 0, h / H, 0, 0, 1, 0, c, f, 0, 1].map(n => +n.toFixed(8)).join(',');
  const fit = () => { scr.style.transform = `scale(${box.clientWidth / IMG}) matrix3d(${m})`; };
  box.classList.add('warp');
  fit();
  if (window.ResizeObserver) new ResizeObserver(fit).observe(box); else addEventListener('resize', fit);
})();
