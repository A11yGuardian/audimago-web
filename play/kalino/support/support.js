// Mehrsprachige Support-Seite, gleiche Sprachwahl wie Startseite und Datenschutz.
const T = {
  de: { language: 'Sprache', name: 'Kalino', title: 'Support', intro: 'Du hast eine Frage oder brauchst Hilfe mit Kalino? Schreib uns eine E-Mail. Beschreibe bitte kurz, was passiert ist und welches iPhone oder iPad du verwendest.', privacy: 'Datenschutz' },
  en: { language: 'Language', name: 'Kalino', title: 'Support', intro: 'Do you have a question or need help with Kalino? Send us an email. Please briefly describe what happened and which iPhone or iPad you use.', privacy: 'Privacy' },
  fr: { language: 'Langue', name: 'La maison du lutin', title: 'Assistance', heading: 'Assistance La maison du lutin', intro: 'Vous avez une question ou besoin d’aide avec La maison du lutin ? Écrivez-nous un e-mail. Décrivez brièvement ce qui s’est passé et quel iPhone ou iPad vous utilisez.', privacy: 'Confidentialité' },
  es: { language: 'Idioma', name: 'Kalino', title: 'Soporte', intro: '¿Tienes una pregunta o necesitas ayuda con Kalino? Escríbenos un correo. Describe brevemente qué ha pasado y qué iPhone o iPad usas.', privacy: 'Privacidad' },
  nl: { language: 'Taal', name: 'Kalino', title: 'Ondersteuning', intro: 'Heb je een vraag of hulp nodig met Kalino? Stuur ons een e-mail. Beschrijf kort wat er is gebeurd en welke iPhone of iPad je gebruikt.', privacy: 'Privacy' },
  'pt-PT': { language: 'Idioma', name: 'Kalino', title: 'Apoio', intro: 'Tem uma dúvida ou precisa de ajuda com o Kalino? Envie-nos um e-mail. Descreva brevemente o que aconteceu e que iPhone ou iPad utiliza.', privacy: 'Privacidade' },
  it: { language: 'Lingua', name: 'Kalino', title: 'Assistenza', intro: 'Hai una domanda o ti serve aiuto con Kalino? Scrivici un’e-mail. Descrivi brevemente cos’è successo e quale iPhone o iPad usi.', privacy: 'Privacy' },
  pl: { language: 'Język', name: 'Kalino', title: 'Pomoc', intro: 'Masz pytanie lub potrzebujesz pomocy z Kalino? Napisz do nas e-mail. Opisz krótko, co się stało i z jakiego iPhone’a lub iPada korzystasz.', privacy: 'Prywatność' },
  da: { language: 'Sprog', name: 'Kalino', title: 'Support', intro: 'Har du et spørgsmål eller brug for hjælp til Kalino? Skriv en e-mail til os. Beskriv kort, hvad der skete, og hvilken iPhone eller iPad du bruger.', privacy: 'Privatliv' },
  sv: { language: 'Språk', name: 'Kalino', title: 'Support', intro: 'Har du en fråga eller behöver hjälp med Kalino? Skicka ett mejl till oss. Beskriv kort vad som hände och vilken iPhone eller iPad du använder.', privacy: 'Integritet' },
  nb: { language: 'Språk', name: 'Kalino', title: 'Brukerstøtte', intro: 'Har du et spørsmål eller trenger hjelp med Kalino? Send oss en e-post. Beskriv kort hva som skjedde, og hvilken iPhone eller iPad du bruker.', privacy: 'Personvern' },
  fi: { language: 'Kieli', name: 'Kalino', title: 'Tuki', intro: 'Onko sinulla kysymys tai tarvitsetko apua Kalinon kanssa? Lähetä meille sähköpostia. Kerro lyhyesti, mitä tapahtui ja mitä iPhonea tai iPadia käytät.', privacy: 'Tietosuoja' },
  el: { language: 'Γλώσσα', name: 'Kalino', title: 'Υποστήριξη', intro: 'Έχεις μια ερώτηση ή χρειάζεσαι βοήθεια με το Kalino; Στείλε μας ένα email. Περίγραψε σύντομα τι συνέβη και ποιο iPhone ή iPad χρησιμοποιείς.', privacy: 'Απόρρητο' }
};
const selector = document.querySelector('#language');
const requested = new URLSearchParams(location.search).get('lang');
const matchLang = tag => {
  const l = String(tag || '').toLowerCase();
  if (l.startsWith('pt')) return 'pt-PT';
  if (l.startsWith('nb') || l.startsWith('no') || l.startsWith('nn')) return 'nb';
  const base = l.split('-')[0];
  return Object.hasOwn(T, base) ? base : null;
};
function initialLanguage() {
  if (requested != null) return Object.hasOwn(T, requested) ? requested : 'en';
  try { const saved = localStorage.getItem('kalino-lang'); if (saved && Object.hasOwn(T, saved)) return saved; } catch (e) {}
  for (const tag of navigator.languages || [navigator.language]) { const m = matchLang(tag); if (m) return m; }
  return 'en';
}
function render(code) {
  const t = T[code];
  document.documentElement.lang = code;
  document.title = `${t.title} – ${t.name}`;
  selector.value = code;
  selector.parentElement.firstChild.textContent = `${t.language} `;
  const heading = t.heading || `${t.name} ${t.title}`;
  document.querySelector('#title').textContent = heading;
  document.querySelector('#intro').textContent = t.intro;
  const mail = document.querySelector('#mail');
  mail.setAttribute('href', `mailto:support@audimago.com?subject=${encodeURIComponent(heading)}`);
  const priv = document.querySelector('#privacy');
  priv.textContent = t.privacy;
  priv.setAttribute('href', `../datenschutz/?lang=${code}`);
}
render(initialLanguage());
selector.addEventListener('change', () => {
  try { localStorage.setItem('kalino-lang', selector.value); } catch (e) {}
  const url = new URL(location.href);
  url.searchParams.set('lang', selector.value);
  history.replaceState(null, '', url);
  render(selector.value);
});
