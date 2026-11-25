// Video im iPad: zeigt zuerst das Startbild, startet erst nach Tippen (mit Ton).
(() => {
  const v = document.querySelector('#demo');
  const b = document.querySelector('#demo-play');
  if (!v || !b) return;
  b.addEventListener('click', () => {
    v.controls = true;
    v.muted = false;
    b.hidden = true;
    const p = v.play();
    if (p && p.catch) p.catch(() => { b.hidden = false; v.controls = false; });
  });
  v.addEventListener('ended', () => {
    v.controls = false;
    v.load();
    b.hidden = false;
  });
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
