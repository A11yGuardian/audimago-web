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
