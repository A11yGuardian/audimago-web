// Mehrsprachige Startseite: dreizehn Sprachen, ohne Fremdbibliothek.
// Deutsch steht zusätzlich als Text im HTML (funktioniert auch ohne JavaScript).
(() => {
  const T = {
    de: {
      title: "Kalinos Wichtelstube – Audimago", 'meta.desc': 'Kalino ist ein interaktiver Adventskalender für Kinder mit 24 Türchen und einer Überraschung, für iPhone und iPad in dreizehn Sprachen.',
      'nav.aria': 'Hauptnavigation', 'nav.desc': 'Beschreibung', 'nav.shots': 'Einblicke', 'nav.devices': 'Geräte', 'nav.langs': 'Sprachen', 'nav.info': 'Datenschutz & Kontakt', 'ui.language': 'Sprache',
      name: "Kalinos Wichtelstube", 'hero.alt': 'Kalino, der kleine Wichtel mit roter Mütze, Laterne und Adventskalender', 'hero.lead': "Adventskalender für Kinder", 'hero.more': 'Mehr erfahren',
      fact1: '24 Türchen + Überraschung', fact2: 'Keine Werbung', fact3: 'Kein Benutzerkonto', fact4: 'Daten bleiben auf dem Gerät',
      'desc.h': 'Beschreibung',
      'desc.p1': "Wichtel Kalino lädt Kinder ein, gemeinsam den Advent zu erleben. Hinter 24 Türchen warten liebevoll gestaltete Spiele, kleine Rätsel und kreative Aufgaben darauf, entdeckt zu werden. Die Kinder tippen, wischen und ziehen, und mit jeder geschafften Aufgabe wird Kalinos Wichtelstube ein Stück gemütlicher. Was im 25. Türchen steckt, bleibt eine Überraschung. Kalino kommt ohne Werbung und ohne Benutzerkonto aus, und alle Daten bleiben auf dem Gerät. Im geschützten Elternbereich stellen Erwachsene Sprache und Spielmodus ein. Gedacht ist die App für Kinder im Vorschulalter, um die 5 Jahre.",
      'f1.t': '24 Türchen und eine Überraschung', 'f1.d': "Vom 1. bis zum 24. Dezember wartet jeden Tag ein neues Abenteuer. Und was steckt wohl im 25. Türchen?",
      'f2.t': 'Hinweise zum Verstehen', 'f2.d': "Ein kleines Bild, eine Animation und ein kurzer Text zeigen, was zu tun ist. Der Hinweis erscheint zu Beginn der Aufgabe und lässt sich ausschalten. Über den Info-Button ist er jedoch jederzeit verfügbar.",
      'f3.t': 'Schneekugeln als Meilensteine', 'f3.d': 'Nach einigen Türchen funkelt eine Schneekugel. Sie zeigt dem Kind, wie weit es schon gekommen ist. Am Ende gibt es einen Rückblick auf alles Erlebte.',
      'f4.t': 'Drei Spielmodi', 'f4.d': "Echter Adventskalender nach dem Datum, ein neues Türchen pro Tag oder freies Spielen im eigenen Tempo. Den Spielmodus wählen Eltern im Elternbereich.",
      'f5.t': 'Elternbereich', 'f5.d': "Ein geschützter Bereich hinter einer Rechenaufgabe für Erwachsene: Eltern stellen Sprache und Spielmodus ein, sehen den Fortschritt und können den Kalender zurücksetzen.",
      'f6.t': 'Musik', 'f6.d': "Weihnachtliche Hintergrundmusik zum Auswählen. Musik und Soundeffekte lassen sich jederzeit an- und ausschalten, auch von den Kindern selbst.",
      'video.h': 'Video', 'video.alt': "Kalino zeigt ein iPad mit dem Plätzchenspiel", 'video.vol': 'Lautstärke', 'video.play': 'Video abspielen', 'shots.h': 'Einblicke', 'shots.region': 'Bilder aus der App', 'shots.track': 'Einblicke in die App. Mit den Pfeiltasten blättern.', 'shots.prev': 'Vorheriges Bild', 'shots.next': 'Nächstes Bild', 'shots.dot': 'Bild {n} von {total}',
      s1: "Willkommen in Kalinos Wichtelstube", s2: "24 Türchen und eine Überraschung warten auf dich", s3: "Mit jedem Türchen wird das Zimmer gemütlicher", s4: "Schmücke den Weihnachtsbaum", s5: "Lass dir durch den Hinweis helfen, was zu tun ist", s6: "Baue einen Schneemann", s8: "Und sieh dir zum Schluss an, was du alles geschafft hast", s7: "Oder verziere Plätzchen", s9: "Wähle deine Weihnachtsmusik", s10: "Eltern stellen alles im geschützten Bereich ein",
      'dev.h': 'Geräte', 'dev.iphone': 'Mit iOS 16.4 oder neuer.', 'dev.ipad': 'Mit iPadOS 16.4 oder neuer.', 'dev.note': 'Die App läuft im Querformat. Drehe dein Gerät quer, dann kann es losgehen.',
      'lang.h': 'Sprachen', 'lang.note': 'Kalino gibt es in dreizehn Sprachen. Die Sprache lässt sich im Elternbereich wechseln.',
      'info.h': 'Datenschutz & Kontakt', 'priv.t': 'Datenschutz', 'priv.d': 'So geht Kalino mit Daten um. In dreizehn Sprachen zum Nachlesen.', 'priv.go': 'Datenschutzerklärung lesen →', 'con.t': 'Kontakt', 'con.d': 'Fragen oder Wünsche zur App? Schreib uns eine E-Mail.', 'foot.priv': 'Datenschutz'
    },
    en: {
      title: "Kalino's Elf House – Audimago", 'meta.desc': 'Kalino is an interactive Advent calendar for children with 24 doors and a surprise, for iPhone and iPad in thirteen languages.',
      'nav.aria': 'Main navigation', 'nav.desc': 'Description', 'nav.shots': 'Previews', 'nav.devices': 'Devices', 'nav.langs': 'Languages', 'nav.info': 'Privacy & contact', 'ui.language': 'Language',
      name: "Kalino's Elf House", 'hero.alt': 'Kalino, the little elf with a red hat, a lantern and an Advent calendar', 'hero.lead': "Advent Calendar for Kids", 'hero.more': 'Learn more',
      fact1: '24 doors + a surprise', fact2: 'No ads', fact3: 'No user account', fact4: 'Data stays on the device',
      'desc.h': 'Description',
      'desc.p1': "Elf Kalino invites children to experience Advent together. Behind 24 doors, lovingly designed games, little puzzles and creative activities are waiting to be discovered. Children tap, swipe and drag, and with every task they finish, Kalino's cottage becomes a little cosier. What is hiding behind door 25 stays a surprise. Kalino comes without ads and without a user account, and all data stays on the device. In the protected parent area, adults set the language and play mode. The app is made for preschool children, around 5 years old.",
      'f1.t': '24 doors and a surprise', 'f1.d': "From 1 to 24 December a new adventure waits every day. And what could be behind door 25?",
      'f2.t': 'Hints that explain', 'f2.d': "A small picture, an animation and a short text show what to do. The hint appears at the start of the task and can be turned off. It is still available at any time via the info button.",
      'f3.t': 'Snow globes as milestones', 'f3.d': 'After a few doors a snow globe sparkles. It shows the child how far they have come. At the end there is a look back at everything they did.',
      'f4.t': 'Three play modes', 'f4.d': "A real Advent calendar that follows the date, a new door every day, or free play at your own pace. Parents choose the play mode in the parent area.",
      'f5.t': 'Parent area', 'f5.d': "A protected area behind a maths question for adults: parents set the language and play mode, see the progress and can reset the calendar.",
      'f6.t': 'Music', 'f6.d': "Christmas background music to choose from. Music and sound effects can be switched on and off at any time, by the children themselves too.",
      'video.h': 'Video', 'video.alt': "Kalino showing an iPad with the cookie game", 'video.vol': 'Volume', 'video.play': 'Play video', 'shots.h': 'Previews', 'shots.region': 'Pictures from the app', 'shots.track': 'Previews of the app. Use the arrow keys to browse.', 'shots.prev': 'Previous picture', 'shots.next': 'Next picture', 'shots.dot': 'Picture {n} of {total}',
      s1: "Welcome to Kalino's Elf House", s2: "24 doors and a surprise are waiting for you", s3: "With every door, the room gets cosier", s4: "Decorate the Christmas tree", s5: "Let the hint help you see what to do", s6: "Build a snowman", s8: "And at the end, take a look at everything you have achieved", s7: "Or decorate cookies", s9: "Choose your Christmas music", s10: "Parents adjust everything in the protected area",
      'dev.h': 'Devices', 'dev.iphone': 'With iOS 16.4 or later.', 'dev.ipad': 'With iPadOS 16.4 or later.', 'dev.note': 'The app runs in landscape. Turn your device sideways and off you go.',
      'lang.h': 'Languages', 'lang.note': 'Kalino comes in thirteen languages. You can switch the language in the parent area.',
      'info.h': 'Privacy & contact', 'priv.t': 'Privacy', 'priv.d': 'How Kalino handles data. Available in thirteen languages.', 'priv.go': 'Read the privacy policy →', 'con.t': 'Contact', 'con.d': 'Questions or wishes about the app? Send us an email.', 'foot.priv': 'Privacy'
    },
    fr: {
      title: "La maison du lutin – Audimago", 'meta.desc': "La maison du lutin est un calendrier de l'Avent interactif pour les enfants, avec 24 portes et une surprise, pour iPhone et iPad en treize langues.",
      'nav.aria': 'Navigation principale', 'nav.desc': 'Description', 'nav.shots': 'Aperçu', 'nav.devices': 'Appareils', 'nav.langs': 'Langues', 'nav.info': 'Confidentialité et contact', 'ui.language': 'Langue',
      name: "La maison du lutin", 'hero.alt': "Le petit lutin au bonnet rouge, avec une lanterne et un calendrier de l'Avent", 'hero.lead': "Calendrier de l’Avent enfants", 'hero.more': 'En savoir plus',
      fact1: '24 portes + une surprise', fact2: 'Sans publicité', fact3: 'Sans compte utilisateur', fact4: "Les données restent sur l'appareil",
      'desc.h': 'Description',
      'desc.p1': "Le petit lutin invite les enfants à vivre l'Avent ensemble. Derrière 24 portes, des jeux soignés, de petites énigmes et des activités créatives n'attendent que d'être découverts. Les enfants touchent, glissent et tirent, et à chaque tâche réussie, la maison du lutin devient un peu plus douillette. Ce qui se cache derrière la 25e porte reste une surprise. Kalino se passe de publicité et de compte utilisateur, et toutes les données restent sur l'appareil. Dans l'espace parents protégé, les adultes choisissent la langue et le mode de jeu. L'application est conçue pour les enfants d'âge préscolaire, autour de 5 ans.",
      'f1.t': '24 portes et une surprise', 'f1.d': "Du 1er au 24 décembre, une nouvelle aventure attend chaque jour. Et que cache la 25e porte ?",
      'f2.t': 'Des conseils pour comprendre', 'f2.d': "Une petite image, une animation et un court texte montrent quoi faire. L'indice apparaît au début de la tâche et peut être désactivé. Il reste toutefois disponible à tout moment via le bouton d'info.",
      'f3.t': 'Des boules à neige comme étapes', 'f3.d': "Après quelques portes, une boule à neige scintille. Elle montre à l'enfant le chemin parcouru. À la fin, un retour sur tout ce qu'il a vécu.",
      'f4.t': 'Trois modes de jeu', 'f4.d': "Un véritable calendrier de l'Avent qui suit la date, une nouvelle porte par jour ou le jeu libre à son rythme. Les parents choisissent le mode de jeu dans l'espace parents.",
      'f5.t': 'Espace parents', 'f5.d': "Un espace protégé derrière un calcul réservé aux adultes : les parents choisissent la langue et le mode de jeu, consultent la progression et peuvent réinitialiser le calendrier.",
      'f6.t': 'Musique', 'f6.d': "Une musique de Noël en fond sonore, à choisir. La musique et les effets sonores peuvent être activés ou coupés à tout moment, y compris par les enfants eux-mêmes.",
      'video.h': 'Vidéo', 'video.alt': "Kalino montre un iPad avec le jeu des biscuits", 'video.vol': 'Volume', 'video.play': 'Lire la vidéo', 'shots.h': 'Aperçu', 'shots.region': "Images de l'application", 'shots.track': "Aperçu de l'application. Utilisez les flèches du clavier pour naviguer.", 'shots.prev': 'Image précédente', 'shots.next': 'Image suivante', 'shots.dot': 'Image {n} sur {total}',
      s1: "Bienvenue dans la maison du lutin", s2: "24 portes et une surprise t’attendent", s3: "À chaque porte, la pièce devient plus douillette", s4: "Décore le sapin de Noël", s5: "Laisse l’indice t’aider à savoir quoi faire", s6: "Construis un bonhomme de neige", s8: "Et à la fin, regarde tout ce que tu as accompli", s7: "Ou décore des biscuits", s9: "Choisis ta musique de Noël", s10: "Les parents règlent tout dans l’espace protégé",
      'dev.h': 'Appareils', 'dev.iphone': 'Avec iOS 16.4 ou plus récent.', 'dev.ipad': 'Avec iPadOS 16.4 ou plus récent.', 'dev.note': "L'application fonctionne en mode paysage. Tournez votre appareil, et c'est parti.",
      'lang.h': 'Langues', 'lang.note': "La maison du lutin existe en treize langues. La langue se change dans l'espace parents.",
      'info.h': 'Confidentialité et contact', 'priv.t': 'Confidentialité', 'priv.d': 'Comment l’application traite les données. À lire en treize langues.', 'priv.go': 'Lire la politique de confidentialité →', 'con.t': 'Contact', 'con.d': "Une question ou une envie à propos de l'application ? Écrivez-nous un e-mail.", 'foot.priv': 'Confidentialité'
    },
    es: {
      title: "La casita de Kalino – Audimago", 'meta.desc': 'Kalino es un calendario de Adviento interactivo para niños con 24 ventanitas y una sorpresa, para iPhone y iPad en trece idiomas.',
      'nav.aria': 'Navegación principal', 'nav.desc': 'Descripción', 'nav.shots': 'Vistas', 'nav.devices': 'Dispositivos', 'nav.langs': 'Idiomas', 'nav.info': 'Privacidad y contacto', 'ui.language': 'Idioma',
      name: "La casita de Kalino", 'hero.alt': 'Kalino, el pequeño elfo con gorro rojo, un farol y un calendario de Adviento', 'hero.lead': "Calendario de Adviento infantil", 'hero.more': 'Saber más',
      fact1: '24 ventanitas + una sorpresa', fact2: 'Sin publicidad', fact3: 'Sin cuenta de usuario', fact4: 'Los datos se quedan en el dispositivo',
      'desc.h': 'Descripción',
      'desc.p1': "El elfo Kalino invita a los niños a vivir juntos el Adviento. Detrás de 24 ventanitas esperan, para ser descubiertos, juegos hechos con cariño, pequeños acertijos y actividades creativas. Los niños tocan, deslizan y arrastran, y con cada tarea terminada la casita de Kalino se vuelve un poco más acogedora. Lo que hay en la ventanita 25 sigue siendo una sorpresa. Kalino no lleva publicidad ni cuenta de usuario, y todos los datos se quedan en el dispositivo. En la zona para padres protegida, los adultos eligen el idioma y el modo de juego. La aplicación está pensada para niños en edad preescolar, de unos 5 años.",
      'f1.t': '24 ventanitas y una sorpresa', 'f1.d': "Del 1 al 24 de diciembre espera cada día una nueva aventura. ¿Y qué habrá en la ventanita 25?",
      'f2.t': 'Pistas para entender', 'f2.d': "Una imagen pequeña, una animación y un texto breve muestran qué hacer. La pista aparece al comienzo de la tarea y se puede desactivar. Aun así, siempre está disponible con el botón de información.",
      'f3.t': 'Bolas de nieve como hitos', 'f3.d': 'Tras algunas ventanitas brilla una bola de nieve. Muestra al niño hasta dónde ha llegado. Al final hay un repaso de todo lo vivido.',
      'f4.t': 'Tres modos de juego', 'f4.d': "Un auténtico calendario de Adviento según la fecha, una ventanita nueva cada día o juego libre a tu propio ritmo. Los padres eligen el modo de juego en la zona para padres.",
      'f5.t': 'Zona para padres', 'f5.d': "Una zona protegida tras una operación para adultos: los padres eligen el idioma y el modo de juego, ven el progreso y pueden restablecer el calendario.",
      'f6.t': 'Música', 'f6.d': "Música navideña de fondo para elegir. La música y los efectos de sonido se pueden activar y desactivar en cualquier momento, también por los propios niños.",
      'video.h': 'Vídeo', 'video.alt': "Kalino muestra un iPad con el juego de las galletas", 'video.vol': 'Volumen', 'video.play': 'Reproducir vídeo', 'shots.h': 'Vistas', 'shots.region': 'Imágenes de la aplicación', 'shots.track': 'Vistas de la aplicación. Usa las flechas del teclado para avanzar.', 'shots.prev': 'Imagen anterior', 'shots.next': 'Imagen siguiente', 'shots.dot': 'Imagen {n} de {total}',
      s1: "Bienvenido a la casa del elfo Kalino", s2: "24 ventanitas y una sorpresa te esperan", s3: "Con cada ventanita, la habitación se vuelve más acogedora", s4: "Decora el árbol de Navidad", s5: "Deja que la pista te ayude a saber qué hacer", s6: "Construye un muñeco de nieve", s8: "Y al final, mira todo lo que has conseguido", s7: "O decora galletas", s9: "Elige tu música de Navidad", s10: "Los padres lo ajustan todo en la zona protegida",
      'dev.h': 'Dispositivos', 'dev.iphone': 'Con iOS 16.4 o posterior.', 'dev.ipad': 'Con iPadOS 16.4 o posterior.', 'dev.note': 'La aplicación funciona en horizontal. Gira tu dispositivo y ¡a jugar!',
      'lang.h': 'Idiomas', 'lang.note': 'Kalino está disponible en trece idiomas. El idioma se cambia en la zona para padres.',
      'info.h': 'Privacidad y contacto', 'priv.t': 'Privacidad', 'priv.d': 'Cómo trata Kalino los datos. Disponible en trece idiomas.', 'priv.go': 'Leer la política de privacidad →', 'con.t': 'Contacto', 'con.d': '¿Preguntas o deseos sobre la aplicación? Escríbenos un correo.', 'foot.priv': 'Privacidad'
    },
    nl: {
      title: "Kalino's kabouterhuisje – Audimago", 'meta.desc': 'Kalino is een interactieve adventskalender voor kinderen met 24 deurtjes en een verrassing, voor iPhone en iPad in dertien talen.',
      'nav.aria': 'Hoofdnavigatie', 'nav.desc': 'Beschrijving', 'nav.shots': 'Impressie', 'nav.devices': 'Apparaten', 'nav.langs': 'Talen', 'nav.info': 'Privacy & contact', 'ui.language': 'Taal',
      name: "Kalino's kabouterhuisje", 'hero.alt': 'Kalino, de kleine kabouter met rode muts, lantaarn en adventskalender', 'hero.lead': "Adventskalender voor kinderen", 'hero.more': 'Meer weten',
      fact1: '24 deurtjes + een verrassing', fact2: 'Geen reclame', fact3: 'Geen gebruikersaccount', fact4: 'Gegevens blijven op het apparaat',
      'desc.h': 'Beschrijving',
      'desc.p1': "Kabouter Kalino nodigt kinderen uit om samen de advent te beleven. Achter 24 deurtjes wachten liefdevol gemaakte spelletjes, kleine puzzels en creatieve opdrachten om ontdekt te worden. Kinderen tikken, vegen en slepen, en met elke opdracht die lukt wordt Kalino's huisje iets gezelliger. Wat er achter deurtje 25 zit, blijft een verrassing. Kalino werkt zonder reclame en zonder gebruikersaccount, en alle gegevens blijven op het apparaat. In het beveiligde oudergedeelte stellen volwassenen de taal en de spelmodus in. De app is bedoeld voor kinderen in de kleuterleeftijd, rond 5 jaar.",
      'f1.t': '24 deurtjes en een verrassing', 'f1.d': "Van 1 tot en met 24 december wacht elke dag een nieuw avontuur. En wat zit er achter deurtje 25?",
      'f2.t': 'Tips die uitleggen', 'f2.d': "Een klein plaatje, een animatie en een korte tekst laten zien wat je moet doen. De hint verschijnt aan het begin van de opdracht en kan worden uitgezet. Via de infoknop is hij echter altijd beschikbaar.",
      'f3.t': 'Sneeuwbollen als mijlpalen', 'f3.d': 'Na een paar deurtjes glinstert er een sneeuwbol. Die laat het kind zien hoe ver het al is. Aan het eind is er een terugblik op alles wat het beleefd heeft.',
      'f4.t': 'Drie spelmodi', 'f4.d': "Een echte adventskalender volgens de datum, elke dag een nieuw deurtje of vrij spelen in je eigen tempo. Ouders kiezen de spelmodus in het oudergedeelte.",
      'f5.t': 'Ouderzone', 'f5.d': "Een beveiligd gedeelte achter een rekensom voor volwassenen: ouders stellen de taal en de spelmodus in, bekijken de voortgang en kunnen de kalender resetten.",
      'f6.t': 'Muziek', 'f6.d': "Kerstachtergrondmuziek om uit te kiezen. Muziek en geluidseffecten kunnen altijd aan- of uitgezet worden, ook door de kinderen zelf.",
      'video.h': 'Video', 'video.alt': "Kalino laat een iPad met het koekjesspel zien", 'video.vol': 'Volume', 'video.play': 'Video afspelen', 'shots.h': 'Impressie', 'shots.region': 'Beelden uit de app', 'shots.track': 'Impressie van de app. Blader met de pijltjestoetsen.', 'shots.prev': 'Vorige afbeelding', 'shots.next': 'Volgende afbeelding', 'shots.dot': 'Afbeelding {n} van {total}',
      s1: "Welkom in Kalino’s elfenhuis", s2: "24 deurtjes en een verrassing wachten op je", s3: "Met elk deurtje wordt de kamer gezelliger", s4: "Versier de kerstboom", s5: "Laat de hint je helpen om te zien wat je moet doen", s6: "Bouw een sneeuwpop", s8: "En bekijk aan het eind alles wat je hebt bereikt", s7: "Of versier koekjes", s9: "Kies je kerstmuziek", s10: "Ouders stellen alles in het beveiligde gedeelte in",
      'dev.h': 'Apparaten', 'dev.iphone': 'Met iOS 16.4 of nieuwer.', 'dev.ipad': 'Met iPadOS 16.4 of nieuwer.', 'dev.note': 'De app draait in liggende stand. Draai je apparaat en je kunt beginnen.',
      'lang.h': 'Talen', 'lang.note': 'Kalino is er in dertien talen. De taal wijzig je in de ouderzone.',
      'info.h': 'Privacy & contact', 'priv.t': 'Privacy', 'priv.d': 'Hoe Kalino met gegevens omgaat. In dertien talen te lezen.', 'priv.go': 'Privacyverklaring lezen →', 'con.t': 'Contact', 'con.d': 'Vragen of wensen over de app? Stuur ons een e-mail.', 'foot.priv': 'Privacy'
    },
    'pt-PT': {
      title: "A casinha do Kalino – Audimago", 'meta.desc': 'O Kalino é um calendário do Advento interativo para crianças, com 24 portinhas e uma surpresa, para iPhone e iPad em treze idiomas.',
      'nav.aria': 'Navegação principal', 'nav.desc': 'Descrição', 'nav.shots': 'Imagens', 'nav.devices': 'Dispositivos', 'nav.langs': 'Idiomas', 'nav.info': 'Privacidade e contacto', 'ui.language': 'Idioma',
      name: "A casinha do Kalino", 'hero.alt': 'O Kalino, o pequeno duende de gorro vermelho, com uma lanterna e um calendário do Advento', 'hero.lead': "Calendário do Advento infantil", 'hero.more': 'Saber mais',
      fact1: '24 portinhas + uma surpresa', fact2: 'Sem publicidade', fact3: 'Sem conta de utilizador', fact4: 'Os dados ficam no dispositivo',
      'desc.h': 'Descrição',
      'desc.p1': "O duende Kalino convida as crianças a viver o Advento em conjunto. Atrás de 24 portinhas, jogos feitos com carinho, pequenos desafios e atividades criativas esperam para ser descobertos. As crianças tocam, deslizam e arrastam, e a cada tarefa concluída a casinha do Kalino fica um pouco mais acolhedora. O que se esconde na portinha 25 continua a ser uma surpresa. O Kalino não tem publicidade nem conta de utilizador, e todos os dados ficam no dispositivo. Na área dos pais protegida, os adultos escolhem o idioma e o modo de jogo. A aplicação foi pensada para crianças em idade pré-escolar, por volta dos 5 anos.",
      'f1.t': '24 portinhas e uma surpresa', 'f1.d': "De 1 a 24 de dezembro, espera todos os dias uma nova aventura. E o que estará na portinha 25?",
      'f2.t': 'Dicas que explicam', 'f2.d': "Uma pequena imagem, uma animação e um texto curto mostram o que fazer. A dica aparece no início da tarefa e pode ser desativada. Mesmo assim, está sempre disponível através do botão de informação.",
      'f3.t': 'Globos de neve como marcos', 'f3.d': 'Depois de algumas portinhas, brilha um globo de neve. Mostra à criança até onde já chegou. No fim, há um olhar sobre tudo o que viveu.',
      'f4.t': 'Três modos de jogo', 'f4.d': "Um verdadeiro calendário do Advento de acordo com a data, uma portinha nova por dia ou jogo livre ao seu próprio ritmo. Os pais escolhem o modo de jogo na área dos pais.",
      'f5.t': 'Área dos pais', 'f5.d': "Uma área protegida por uma conta para adultos: os pais escolhem o idioma e o modo de jogo, veem o progresso e podem repor o calendário.",
      'f6.t': 'Música', 'f6.d': "Música de Natal de fundo à escolha. A música e os efeitos sonoros podem ser ligados e desligados a qualquer momento, também pelas próprias crianças.",
      'video.h': 'Vídeo', 'video.alt': "O Kalino mostra um iPad com o jogo das bolachas", 'video.vol': 'Volume', 'video.play': 'Reproduzir vídeo', 'shots.h': 'Imagens', 'shots.region': 'Imagens da aplicação', 'shots.track': 'Imagens da aplicação. Use as setas do teclado para navegar.', 'shots.prev': 'Imagem anterior', 'shots.next': 'Imagem seguinte', 'shots.dot': 'Imagem {n} de {total}',
      s1: "Bem-vindo à casa do elfo Kalino", s2: "24 portinhas e uma surpresa esperam por ti", s3: "A cada portinha, o quarto fica mais aconchegante", s4: "Decora a árvore de Natal", s5: "Deixa a dica ajudar-te a saber o que fazer", s6: "Constrói um boneco de neve", s8: "E no fim, vê tudo o que conseguiste", s7: "Ou decora bolachas", s9: "Escolhe a tua música de Natal", s10: "Os pais ajustam tudo na área protegida",
      'dev.h': 'Dispositivos', 'dev.iphone': 'Com iOS 16.4 ou superior.', 'dev.ipad': 'Com iPadOS 16.4 ou superior.', 'dev.note': 'A aplicação funciona na horizontal. Rode o dispositivo e está pronto.',
      'lang.h': 'Idiomas', 'lang.note': 'O Kalino está disponível em treze idiomas. O idioma muda-se na área dos pais.',
      'info.h': 'Privacidade e contacto', 'priv.t': 'Privacidade', 'priv.d': 'Como o Kalino trata os dados. Disponível em treze idiomas.', 'priv.go': 'Ler a política de privacidade →', 'con.t': 'Contacto', 'con.d': 'Dúvidas ou desejos sobre a aplicação? Envie-nos um e-mail.', 'foot.priv': 'Privacidade'
    },
    it: {
      title: "La casetta di Kalino – Audimago", 'meta.desc': "Kalino è un calendario dell'Avvento interattivo per bambini con 24 finestrelle e una sorpresa, per iPhone e iPad in tredici lingue.",
      'nav.aria': 'Navigazione principale', 'nav.desc': 'Descrizione', 'nav.shots': 'Anteprime', 'nav.devices': 'Dispositivi', 'nav.langs': 'Lingue', 'nav.info': 'Privacy e contatti', 'ui.language': 'Lingua',
      name: "La casetta di Kalino", 'hero.alt': "Kalino, il piccolo elfo con il cappello rosso, la lanterna e il calendario dell'Avvento", 'hero.lead': "Calendario d’Avvento bambini", 'hero.more': 'Scopri di più',
      fact1: '24 finestrelle + una sorpresa', fact2: 'Senza pubblicità', fact3: 'Nessun account utente', fact4: 'I dati restano sul dispositivo',
      'desc.h': 'Descrizione',
      'desc.p1': "L'elfo Kalino invita i bambini a vivere insieme l'Avvento. Dietro 24 finestrelle, giochi curati con amore, piccoli rompicapi e attività creative aspettano di essere scoperti. I bambini toccano, scorrono e trascinano, e a ogni compito completato la casetta di Kalino diventa un po' più accogliente. Cosa si nasconde nella finestrella 25 resta una sorpresa. Kalino non ha pubblicità né account utente, e tutti i dati restano sul dispositivo. Nell'area genitori protetta gli adulti scelgono la lingua e la modalità di gioco. L'app è pensata per bambini in età prescolare, intorno ai 5 anni.",
      'f1.t': '24 finestrelle e una sorpresa', 'f1.d': "Dal 1° al 24 dicembre ogni giorno aspetta una nuova avventura. E cosa ci sarà nella finestrella 25?",
      'f2.t': 'Suggerimenti che spiegano', 'f2.d': "Una piccola immagine, un'animazione e un breve testo mostrano cosa fare. Il suggerimento compare all'inizio del compito e si può disattivare. Resta comunque sempre disponibile con il pulsante info.",
      'f3.t': 'Palle di neve come traguardi', 'f3.d': "Dopo alcune finestrelle brilla una palla di neve. Mostra al bambino a che punto è arrivato. Alla fine c'è uno sguardo a tutto ciò che ha vissuto.",
      'f4.t': 'Tre modalità di gioco', 'f4.d': "Un vero calendario dell'Avvento secondo la data, una finestrella nuova ogni giorno o gioco libero al proprio ritmo. I genitori scelgono la modalità di gioco nell'area genitori.",
      'f5.t': 'Area genitori', 'f5.d': "Un'area protetta da un calcolo per adulti: i genitori scelgono la lingua e la modalità di gioco, vedono i progressi e possono azzerare il calendario.",
      'f6.t': 'Musica', 'f6.d': "Musica natalizia di sottofondo da scegliere. Musica ed effetti sonori si possono attivare e disattivare in qualsiasi momento, anche dai bambini stessi.",
      'video.h': 'Video', 'video.alt': "Kalino mostra un iPad con il gioco dei biscotti", 'video.vol': 'Volume', 'video.play': 'Riproduci video', 'shots.h': 'Anteprime', 'shots.region': "Immagini dell'app", 'shots.track': "Anteprime dell'app. Usa le frecce della tastiera per scorrere.", 'shots.prev': 'Immagine precedente', 'shots.next': 'Immagine successiva', 'shots.dot': 'Immagine {n} di {total}',
      s1: "Benvenuto nella casa dell’elfo Kalino", s2: "24 finestrelle e una sorpresa ti aspettano", s3: "Ad ogni finestrella la stanza diventa più accogliente", s4: "Decora l’albero di Natale", s5: "Lasciati aiutare dal suggerimento per capire cosa fare", s6: "Costruisci un pupazzo di neve", s8: "E alla fine guarda tutto quello che hai fatto", s7: "Oppure decora i biscotti", s9: "Scegli la tua musica di Natale", s10: "I genitori impostano tutto nell’area protetta",
      'dev.h': 'Dispositivi', 'dev.iphone': 'Con iOS 16.4 o successivo.', 'dev.ipad': 'Con iPadOS 16.4 o successivo.', 'dev.note': "L'app funziona in orizzontale. Ruota il dispositivo e si parte.",
      'lang.h': 'Lingue', 'lang.note': "Kalino è disponibile in tredici lingue. La lingua si cambia nell'area genitori.",
      'info.h': 'Privacy e contatti', 'priv.t': 'Privacy', 'priv.d': 'Come Kalino tratta i dati. Da leggere in tredici lingue.', 'priv.go': "Leggi l'informativa sulla privacy →", 'con.t': 'Contatti', 'con.d': "Domande o desideri sull'app? Scrivici un'e-mail.", 'foot.priv': 'Privacy'
    },
    pl: {
      title: "Skrzat Kalino – Audimago", 'meta.desc': "Kalino to interaktywny kalendarz adwentowy dla dzieci z 24 okienkami i niespodzianką, na iPhone'a i iPada w trzynastu językach.",
      'nav.aria': 'Nawigacja główna', 'nav.desc': 'Opis', 'nav.shots': 'Podgląd', 'nav.devices': 'Urządzenia', 'nav.langs': 'Języki', 'nav.info': 'Prywatność i kontakt', 'ui.language': 'Język',
      name: "Skrzat Kalino", 'hero.alt': 'Kalino, mały skrzat w czerwonej czapce z latarnią i kalendarzem adwentowym', 'hero.lead': "Kalendarz adwentowy dla dzieci", 'hero.more': 'Dowiedz się więcej',
      fact1: '24 okienka + niespodzianka', fact2: 'Bez reklam', fact3: 'Bez konta użytkownika', fact4: 'Dane zostają na urządzeniu',
      'desc.h': 'Opis',
      'desc.p1': "Skrzat Kalino zaprasza dzieci do wspólnego przeżywania Adwentu. Za 24 okienkami czekają na odkrycie starannie przygotowane gry, małe zagadki i kreatywne zadania. Dzieci stukają, przesuwają i przeciągają, a z każdym ukończonym zadaniem domek Kalina staje się trochę przytulniejszy. To, co kryje się za okienkiem 25, pozostaje niespodzianką. Kalino działa bez reklam i bez konta użytkownika, a wszystkie dane zostają na urządzeniu. W zabezpieczonej strefie rodzica dorośli wybierają język i tryb gry. Aplikacja jest przeznaczona dla dzieci w wieku przedszkolnym, około 5 lat.",
      'f1.t': '24 okienka i niespodzianka', 'f1.d': "Od 1 do 24 grudnia każdego dnia czeka nowa przygoda. A co kryje się w okienku 25?",
      'f2.t': 'Wskazówki, które tłumaczą', 'f2.d': "Mały obrazek, animacja i krótki tekst pokazują, co trzeba zrobić. Podpowiedź pojawia się na początku zadania i można ją wyłączyć. Przez przycisk informacji jest jednak zawsze dostępna.",
      'f3.t': 'Śnieżne kule jako kamienie milowe', 'f3.d': 'Po kilku okienkach błyszczy śnieżna kula. Pokazuje dziecku, jak daleko już doszło. Na końcu jest powrót do wszystkiego, co przeżyło.',
      'f4.t': 'Trzy tryby gry', 'f4.d': "Prawdziwy kalendarz adwentowy według daty, jedno okienko dziennie lub swobodna zabawa we własnym tempie. Tryb gry wybierają rodzice w strefie rodzica.",
      'f5.t': 'Strefa rodzica', 'f5.d': "Zabezpieczona strefa za zadaniem rachunkowym dla dorosłych: rodzice wybierają język i tryb gry, sprawdzają postępy i mogą wyzerować kalendarz.",
      'f6.t': 'Muzyka', 'f6.d': "Świąteczna muzyka w tle do wyboru. Muzykę i efekty dźwiękowe można w każdej chwili włączać i wyłączać, także samodzielnie przez dzieci.",
      'video.h': 'Wideo', 'video.alt': "Kalino pokazuje iPada z grą w ciasteczka", 'video.vol': 'Głośność', 'video.play': 'Odtwórz wideo', 'shots.h': 'Podgląd', 'shots.region': 'Obrazy z aplikacji', 'shots.track': 'Podgląd aplikacji. Przeglądaj strzałkami na klawiaturze.', 'shots.prev': 'Poprzedni obraz', 'shots.next': 'Następny obraz', 'shots.dot': 'Obraz {n} z {total}',
      s1: "Witaj w domku elfa Kalino", s2: "24 okienka i niespodzianka czekają na ciebie", s3: "Z każdym okienkiem pokój robi się przytulniejszy", s4: "Udekoruj choinkę", s5: "Podpowiedź pomoże ci zrozumieć, co robić", s6: "Ulep bałwana", s8: "A na koniec zobacz, ile udało ci się zrobić", s7: "Albo udekoruj ciasteczka", s9: "Wybierz swoją świąteczną muzykę", s10: "Rodzice ustawiają wszystko w chronionym obszarze",
      'dev.h': 'Urządzenia', 'dev.iphone': 'Z iOS 16.4 lub nowszym.', 'dev.ipad': 'Z iPadOS 16.4 lub nowszym.', 'dev.note': 'Aplikacja działa w poziomie. Obróć urządzenie i można zaczynać.',
      'lang.h': 'Języki', 'lang.note': 'Kalino jest dostępne w trzynastu językach. Język zmienisz w strefie rodzica.',
      'info.h': 'Prywatność i kontakt', 'priv.t': 'Prywatność', 'priv.d': 'Jak Kalino obchodzi się z danymi. Do przeczytania w trzynastu językach.', 'priv.go': 'Przeczytaj politykę prywatności →', 'con.t': 'Kontakt', 'con.d': 'Pytania lub życzenia dotyczące aplikacji? Napisz do nas e-mail.', 'foot.priv': 'Prywatność'
    },
    da: {
      title: "Kalinos nissehus – Audimago", 'meta.desc': 'Kalino er en interaktiv julekalender for børn med 24 låger og en overraskelse, til iPhone og iPad på tretten sprog.',
      'nav.aria': 'Hovednavigation', 'nav.desc': 'Beskrivelse', 'nav.shots': 'Indblik', 'nav.devices': 'Enheder', 'nav.langs': 'Sprog', 'nav.info': 'Privatliv og kontakt', 'ui.language': 'Sprog',
      name: "Kalinos nissehus", 'hero.alt': 'Kalino, den lille nisse med rød hue, lanterne og julekalender', 'hero.lead': "Julekalender for børn", 'hero.more': 'Læs mere',
      fact1: '24 låger + en overraskelse', fact2: 'Ingen reklamer', fact3: 'Ingen brugerkonto', fact4: 'Data bliver på enheden',
      'desc.h': 'Beskrivelse',
      'desc.p1': "Nissen Kalino inviterer børn til at opleve juletiden sammen. Bag 24 låger venter kærligt udformede spil, små gåder og kreative opgaver på at blive opdaget. Børnene trykker, stryger og trækker, og for hver opgave, de klarer, bliver Kalinos stue en smule hyggeligere. Hvad der gemmer sig bag låge 25, forbliver en overraskelse. Kalino kommer uden reklamer og uden brugerkonto, og alle data bliver på enheden. I det beskyttede forælderområde vælger voksne sprog og spiltilstand. Appen er lavet til børn i førskolealderen, omkring 5 år.",
      'f1.t': '24 låger og en overraskelse', 'f1.d': "Fra 1. til 24. december venter der hver dag et nyt eventyr. Og hvad mon der er i låge 25?",
      'f2.t': 'Tips, der forklarer', 'f2.d': "Et lille billede, en animation og en kort tekst viser, hvad man skal gøre. Hintet vises i starten af opgaven og kan slås fra. Via info-knappen er det dog altid tilgængeligt.",
      'f3.t': 'Snekugler som milepæle', 'f3.d': 'Efter nogle låger glitrer en snekugle. Den viser barnet, hvor langt det er nået. Til sidst er der et tilbageblik på alt, det har oplevet.',
      'f4.t': 'Tre spiltilstande', 'f4.d': "En ægte julekalender efter datoen, en ny låge hver dag eller fri leg i eget tempo. Forældre vælger spiltilstand i forælderområdet.",
      'f5.t': 'Forælderområde', 'f5.d': "Et beskyttet område bag en regneopgave til voksne: forældre vælger sprog og spiltilstand, ser fremskridtet og kan nulstille kalenderen.",
      'f6.t': 'Musik', 'f6.d': "Julemusik i baggrunden at vælge imellem. Musik og lydeffekter kan til enhver tid slås til og fra, også af børnene selv.",
      'video.h': 'Video', 'video.alt': "Kalino viser en iPad med småkagespillet", 'video.vol': 'Lydstyrke', 'video.play': 'Afspil video', 'shots.h': 'Indblik', 'shots.region': 'Billeder fra appen', 'shots.track': 'Indblik i appen. Brug piletasterne til at bladre.', 'shots.prev': 'Forrige billede', 'shots.next': 'Næste billede', 'shots.dot': 'Billede {n} af {total}',
      s1: "Velkommen til Kalinos nissehus", s2: "24 låger og en overraskelse venter på dig", s3: "For hver låge bliver stuen hyggeligere", s4: "Pynt juletræet", s5: "Lad hintet hjælpe dig med at se, hvad du skal gøre", s6: "Byg en snemand", s8: "Og se til sidst, hvad du har nået", s7: "Eller pynt småkager", s9: "Vælg din julemusik", s10: "Forældre indstiller alt i det beskyttede område",
      'dev.h': 'Enheder', 'dev.iphone': 'Med iOS 16.4 eller nyere.', 'dev.ipad': 'Med iPadOS 16.4 eller nyere.', 'dev.note': 'Appen kører på langs. Drej din enhed, så kan det gå løs.',
      'lang.h': 'Sprog', 'lang.note': 'Kalino findes på tretten sprog. Sproget skifter man i forælderområdet.',
      'info.h': 'Privatliv og kontakt', 'priv.t': 'Privatliv', 'priv.d': 'Sådan håndterer Kalino data. Kan læses på tretten sprog.', 'priv.go': 'Læs privatlivserklæringen →', 'con.t': 'Kontakt', 'con.d': 'Spørgsmål eller ønsker til appen? Send os en e-mail.', 'foot.priv': 'Privatliv'
    },
    sv: {
      title: "Kalinos tomtestuga – Audimago", 'meta.desc': 'Kalino är en interaktiv adventskalender för barn med 24 luckor och en överraskning, för iPhone och iPad på tretton språk.',
      'nav.aria': 'Huvudnavigering', 'nav.desc': 'Beskrivning', 'nav.shots': 'Inblick', 'nav.devices': 'Enheter', 'nav.langs': 'Språk', 'nav.info': 'Integritet och kontakt', 'ui.language': 'Språk',
      name: "Kalinos tomtestuga", 'hero.alt': 'Kalino, den lilla tomten med röd luva, lykta och adventskalender', 'hero.lead': "Julkalender för barn", 'hero.more': 'Läs mer',
      fact1: '24 luckor + en överraskning', fact2: 'Ingen reklam', fact3: 'Inget användarkonto', fact4: 'Uppgifterna stannar på enheten',
      'desc.h': 'Beskrivning',
      'desc.p1': "Tomten Kalino bjuder in barn att uppleva advent tillsammans. Bakom 24 luckor väntar kärleksfullt gjorda spel, små klurigheter och kreativa uppgifter på att upptäckas. Barnen trycker, drar och sveper, och för varje uppgift de klarar blir Kalinos stuga lite mysigare. Vad som finns bakom lucka 25 förblir en överraskning. Kalino har ingen reklam och inget användarkonto, och alla uppgifter stannar på enheten. I det skyddade föräldraområdet väljer vuxna språk och spelläge. Appen är gjord för barn i förskoleåldern, omkring 5 år.",
      'f1.t': '24 luckor och en överraskning', 'f1.d': "Från 1 till 24 december väntar ett nytt äventyr varje dag. Och vad döljer sig i lucka 25?",
      'f2.t': 'Ledtrådar som förklarar', 'f2.d': "En liten bild, en animation och en kort text visar vad man ska göra. Tipset visas i början av uppgiften och kan stängas av. Via infoknappen finns det ändå alltid tillgängligt.",
      'f3.t': 'Snöglober som milstolpar', 'f3.d': 'Efter några luckor glittrar en snöglob. Den visar barnet hur långt det har kommit. Till sist finns en tillbakablick på allt det har upplevt.',
      'f4.t': 'Tre spelägen', 'f4.d': "En riktig julkalender efter datum, en ny lucka varje dag eller fri lek i egen takt. Föräldrar väljer spelläge i föräldraområdet.",
      'f5.t': 'Föräldraområde', 'f5.d': "Ett skyddat område bakom en räkneuppgift för vuxna: föräldrar väljer språk och spelläge, ser framstegen och kan nollställa kalendern.",
      'f6.t': 'Musik', 'f6.d': "Julmusik i bakgrunden att välja mellan. Musik och ljudeffekter kan när som helst slås på och av, även av barnen själva.",
      'video.h': 'Video', 'video.alt': "Kalino visar en iPad med kakspelet", 'video.vol': 'Volym', 'video.play': 'Spela upp video', 'shots.h': 'Inblick', 'shots.region': 'Bilder från appen', 'shots.track': 'Inblick i appen. Bläddra med piltangenterna.', 'shots.prev': 'Föregående bild', 'shots.next': 'Nästa bild', 'shots.dot': 'Bild {n} av {total}',
      s1: "Välkommen till Kalinos nissehus", s2: "24 luckor och en överraskning väntar på dig", s3: "För varje lucka blir rummet mysigare", s4: "Pynta julgranen", s5: "Låt tipset hjälpa dig att se vad du ska göra", s6: "Bygg en snögubbe", s8: "Och se till slut allt du har åstadkommit", s7: "Eller pynta kakor", s9: "Välj din julmusik", s10: "Föräldrar ställer in allt i det skyddade området",
      'dev.h': 'Enheter', 'dev.iphone': 'Med iOS 16.4 eller senare.', 'dev.ipad': 'Med iPadOS 16.4 eller senare.', 'dev.note': 'Appen körs i liggande läge. Vrid enheten så kan det börja.',
      'lang.h': 'Språk', 'lang.note': 'Kalino finns på tretton språk. Språket byter du i föräldraområdet.',
      'info.h': 'Integritet och kontakt', 'priv.t': 'Integritet', 'priv.d': 'Så hanterar Kalino uppgifter. Kan läsas på tretton språk.', 'priv.go': 'Läs integritetspolicyn →', 'con.t': 'Kontakt', 'con.d': 'Frågor eller önskemål om appen? Skicka ett mejl till oss.', 'foot.priv': 'Integritet'
    },
    nb: {
      title: "Kalinos nissehus – Audimago", 'meta.desc': 'Kalino er en interaktiv julekalender for barn med 24 luker og en overraskelse, for iPhone og iPad på tretten språk.',
      'nav.aria': 'Hovednavigasjon', 'nav.desc': 'Beskrivelse', 'nav.shots': 'Innblikk', 'nav.devices': 'Enheter', 'nav.langs': 'Språk', 'nav.info': 'Personvern og kontakt', 'ui.language': 'Språk',
      name: "Kalinos nissehus", 'hero.alt': 'Kalino, den lille nissen med rød lue, lykt og julekalender', 'hero.lead': "Julekalender for barn", 'hero.more': 'Les mer',
      fact1: '24 luker + en overraskelse', fact2: 'Ingen reklame', fact3: 'Ingen brukerkonto', fact4: 'Dataene blir på enheten',
      'desc.h': 'Beskrivelse',
      'desc.p1': "Nissen Kalino inviterer barn til å oppleve julen sammen. Bak 24 luker venter kjærlig utformede spill, små gåter og kreative oppgaver på å bli oppdaget. Barna trykker, sveiper og drar, og for hver oppgave de klarer, blir Kalinos stue litt koseligere. Hva som skjuler seg bak luke 25, forblir en overraskelse. Kalino kommer uten reklame og uten brukerkonto, og alle data blir på enheten. I det beskyttede foreldreområdet velger voksne språk og spillmodus. Appen er laget for barn i barnehagealder, rundt 5 år.",
      'f1.t': '24 luker og en overraskelse', 'f1.d': "Fra 1. til 24. desember venter et nytt eventyr hver dag. Og hva skjuler seg i luke 25?",
      'f2.t': 'Tips som forklarer', 'f2.d': "Et lite bilde, en animasjon og en kort tekst viser hva man skal gjøre. Hintet vises i starten av oppgaven og kan slås av. Via infoknappen er det likevel alltid tilgjengelig.",
      'f3.t': 'Snøkuler som milepæler', 'f3.d': 'Etter noen luker glitrer en snøkule. Den viser barnet hvor langt det har kommet. Til slutt er det et tilbakeblikk på alt det har opplevd.',
      'f4.t': 'Tre spillmoduser', 'f4.d': "En ekte julekalender etter datoen, en ny luke hver dag eller fri lek i eget tempo. Foreldre velger spillmodus i foreldreområdet.",
      'f5.t': 'Foreldreområde', 'f5.d': "Et beskyttet område bak en regneoppgave for voksne: foreldre velger språk og spillmodus, ser fremgangen og kan tilbakestille kalenderen.",
      'f6.t': 'Musikk', 'f6.d': "Julemusikk i bakgrunnen å velge mellom. Musikk og lydeffekter kan når som helst slås av og på, også av barna selv.",
      'video.h': 'Video', 'video.alt': "Kalino viser en iPad med kakespillet", 'video.vol': 'Volum', 'video.play': 'Spill av video', 'shots.h': 'Innblikk', 'shots.region': 'Bilder fra appen', 'shots.track': 'Innblikk i appen. Bla med piltastene.', 'shots.prev': 'Forrige bilde', 'shots.next': 'Neste bilde', 'shots.dot': 'Bilde {n} av {total}',
      s1: "Velkommen til Kalinos nissehus", s2: "24 luker og en overraskelse venter på deg", s3: "For hver luke blir rommet koseligere", s4: "Pynt juletreet", s5: "La hintet hjelpe deg å se hva du skal gjøre", s6: "Bygg en snømann", s8: "Og se til slutt alt du har fått til", s7: "Eller pynt kaker", s9: "Velg din julemusikk", s10: "Foreldre stiller inn alt i det beskyttede området",
      'dev.h': 'Enheter', 'dev.iphone': 'Med iOS 16.4 eller nyere.', 'dev.ipad': 'Med iPadOS 16.4 eller nyere.', 'dev.note': 'Appen kjører i liggende format. Vri enheten, så kan det begynne.',
      'lang.h': 'Språk', 'lang.note': 'Kalino finnes på tretten språk. Språket bytter du i foreldreområdet.',
      'info.h': 'Personvern og kontakt', 'priv.t': 'Personvern', 'priv.d': 'Slik behandler Kalino data. Kan leses på tretten språk.', 'priv.go': 'Les personvernerklæringen →', 'con.t': 'Kontakt', 'con.d': 'Spørsmål eller ønsker om appen? Send oss en e-post.', 'foot.priv': 'Personvern'
    },
    fi: {
      title: "Kalinon tonttutalo – Audimago", 'meta.desc': 'Kalino on vuorovaikutteinen joulukalenteri lapsille: 24 luukkua ja yllätys, iPhonelle ja iPadille kolmellatoista kielellä.',
      'nav.aria': 'Päänavigointi', 'nav.desc': 'Kuvaus', 'nav.shots': 'Kurkistus', 'nav.devices': 'Laitteet', 'nav.langs': 'Kielet', 'nav.info': 'Tietosuoja ja yhteystiedot', 'ui.language': 'Kieli',
      name: "Kalinon tonttutalo", 'hero.alt': 'Kalino, pieni tonttu punaisessa lakissa, lyhty ja joulukalenteri', 'hero.lead': "Joulukalenteri lapsille", 'hero.more': 'Lue lisää',
      fact1: '24 luukkua + yllätys', fact2: 'Ei mainoksia', fact3: 'Ei käyttäjätiliä', fact4: 'Tiedot pysyvät laitteella',
      'desc.h': 'Kuvaus',
      'desc.p1': "Tonttu Kalino kutsuu lapset viettämään adventtia yhdessä. 24 luukun takana odottaa löydettäväksi rakkaudella tehtyjä pelejä, pieniä pulmia ja luovia tehtäviä. Lapset napauttavat, pyyhkäisevät ja vetävät, ja jokaisen onnistuneen tehtävän myötä Kalinon tupa muuttuu hieman kodikkaammaksi. Se, mitä luukussa 25 piilee, jää yllätykseksi. Kalino toimii ilman mainoksia ja käyttäjätiliä, ja kaikki tiedot pysyvät laitteella. Suojatussa vanhempien alueessa aikuiset valitsevat kielen ja pelitilan. Sovellus on tarkoitettu esikouluikäisille, noin 5-vuotiaille.",
      'f1.t': '24 luukkua ja yllätys', 'f1.d': "Joulukuun 1. päivästä 24. päivään odottaa joka päivä uusi seikkailu. Entä mitä luukussa 25 on?",
      'f2.t': 'Vihjeet auttavat ymmärtämään', 'f2.d': "Pieni kuva, animaatio ja lyhyt teksti näyttävät, mitä pitää tehdä. Vihje näkyy tehtävän alussa, ja sen voi kytkeä pois. Info-painikkeella se on silti aina saatavilla.",
      'f3.t': 'Lumipallot virstanpylväinä', 'f3.d': 'Muutaman luukun jälkeen lumipallo alkaa välkehtiä. Se näyttää lapselle, kuinka pitkälle hän on päässyt. Lopussa katsotaan taaksepäin kaikkeen koettuun.',
      'f4.t': 'Kolme pelitilaa', 'f4.d': "Aito joulukalenteri päivämäärän mukaan, yksi luukku päivässä tai vapaa pelaaminen omaan tahtiin. Vanhemmat valitsevat pelitilan vanhempien alueella.",
      'f5.t': 'Vanhempien alue', 'f5.d': "Suojattu alue aikuisille tarkoitetun laskutehtävän takana: vanhemmat valitsevat kielen ja pelitilan, katsovat edistymistä ja voivat nollata kalenterin.",
      'f6.t': 'Musiikki', 'f6.d': "Joulutunnelmaista taustamusiikkia valittavaksi. Musiikki ja äänitehosteet voi laittaa päälle ja pois milloin tahansa, myös lapset itse.",
      'video.h': 'Video', 'video.alt': "Kalino näyttää iPadin, jossa on keksipeli", 'video.vol': 'Äänenvoimakkuus', 'video.play': 'Toista video', 'shots.h': 'Kurkistus', 'shots.region': 'Kuvia sovelluksesta', 'shots.track': 'Kurkistus sovellukseen. Selaa nuolinäppäimillä.', 'shots.prev': 'Edellinen kuva', 'shots.next': 'Seuraava kuva', 'shots.dot': 'Kuva {n} / {total}',
      s1: "Tervetuloa Kalinon tonttutaloon", s2: "24 luukkua ja yllätys odottavat sinua", s3: "Jokaisen luukun myötä huoneesta tulee viihtyisämpi", s4: "Koristele joulukuusi", s5: "Anna vihjeen auttaa selvittämään, mitä tehdä", s6: "Rakenna lumiukko", s8: "Ja katso lopuksi, mitä kaikkea olet saanut aikaan", s7: "Tai koristele keksejä", s9: "Valitse joulumusiikkisi", s10: "Vanhemmat säätävät kaiken suojatulla alueella",
      'dev.h': 'Laitteet', 'dev.iphone': 'iOS 16.4 tai uudempi.', 'dev.ipad': 'iPadOS 16.4 tai uudempi.', 'dev.note': 'Sovellus toimii vaaka-asennossa. Käännä laite sivuttain, niin pääsee alkamaan.',
      'lang.h': 'Kielet', 'lang.note': 'Kalino on saatavilla kolmellatoista kielellä. Kieltä voi vaihtaa vanhempien alueella.',
      'info.h': 'Tietosuoja ja yhteystiedot', 'priv.t': 'Tietosuoja', 'priv.d': 'Näin Kalino käsittelee tietoja. Luettavissa kolmellatoista kielellä.', 'priv.go': 'Lue tietosuojaseloste →', 'con.t': 'Yhteystiedot', 'con.d': 'Kysyttävää tai toiveita sovelluksesta? Lähetä meille sähköpostia.', 'foot.priv': 'Tietosuoja'
    },
    el: {
      title: "Το σπιτάκι του Kalino – Audimago", 'meta.desc': 'Το Kalino είναι ένα διαδραστικό χριστουγεννιάτικο ημερολόγιο για παιδιά με 24 πορτάκια και μια έκπληξη, για iPhone και iPad σε δεκατρείς γλώσσες.',
      'nav.aria': 'Κύρια πλοήγηση', 'nav.desc': 'Περιγραφή', 'nav.shots': 'Στιγμιότυπα', 'nav.devices': 'Συσκευές', 'nav.langs': 'Γλώσσες', 'nav.info': 'Απόρρητο και επικοινωνία', 'ui.language': 'Γλώσσα',
      name: "Το σπιτάκι του Kalino", 'hero.alt': 'Ο Kalino, το μικρό ξωτικό με το κόκκινο σκουφί, το φανάρι και το χριστουγεννιάτικο ημερολόγιο', 'hero.lead': "Ημερολόγιο Advent για παιδιά", 'hero.more': 'Μάθε περισσότερα',
      fact1: '24 πορτάκια + μια έκπληξη', fact2: 'Χωρίς διαφημίσεις', fact3: 'Χωρίς λογαριασμό χρήστη', fact4: 'Τα δεδομένα μένουν στη συσκευή',
      'desc.h': 'Περιγραφή',
      'desc.p1': "Το ξωτικό Kalino προσκαλεί τα παιδιά να ζήσουν μαζί τον Δεκέμβριο των Χριστουγέννων. Πίσω από 24 πορτάκια περιμένουν να ανακαλυφθούν προσεγμένα παιχνίδια, μικροί γρίφοι και δημιουργικές δραστηριότητες. Τα παιδιά πατούν, σύρουν και μεταφέρουν, και με κάθε δραστηριότητα που ολοκληρώνουν το σπιτάκι του Kalino γίνεται λίγο πιο ζεστό. Το τι κρύβεται στο 25ο πορτάκι μένει έκπληξη. Το Kalino λειτουργεί χωρίς διαφημίσεις και χωρίς λογαριασμό χρήστη, και όλα τα δεδομένα μένουν στη συσκευή. Στην προστατευμένη περιοχή γονέων οι ενήλικες επιλέγουν γλώσσα και τρόπο παιχνιδιού. Η εφαρμογή απευθύνεται σε παιδιά προσχολικής ηλικίας, περίπου 5 ετών.",
      'f1.t': '24 πορτάκια και μια έκπληξη', 'f1.d': "Από την 1η έως την 24η Δεκεμβρίου περιμένει κάθε μέρα μια νέα περιπέτεια. Και τι κρύβεται στο 25ο πορτάκι;",
      'f2.t': 'Υποδείξεις που βοηθούν να καταλαβαίνουν', 'f2.d': "Μια μικρή εικόνα, μια animation και ένα σύντομο κείμενο δείχνουν τι πρέπει να κάνεις. Η υπόδειξη εμφανίζεται στην αρχή της δραστηριότητας και μπορεί να απενεργοποιηθεί. Με το κουμπί πληροφοριών είναι πάντως πάντα διαθέσιμη.",
      'f3.t': 'Χιονόμπαλες ως ορόσημα', 'f3.d': 'Μετά από μερικά πορτάκια λάμπει μια χιονόμπαλα. Δείχνει στο παιδί πόσο μακριά έχει φτάσει. Στο τέλος υπάρχει μια ματιά πίσω σε όλα όσα έζησε.',
      'f4.t': 'Τρεις τρόποι παιχνιδιού', 'f4.d': "Αληθινό χριστουγεννιάτικο ημερολόγιο σύμφωνα με την ημερομηνία, ένα νέο πορτάκι κάθε μέρα ή ελεύθερο παιχνίδι με τον δικό σου ρυθμό. Οι γονείς επιλέγουν τον τρόπο παιχνιδιού στην περιοχή γονέων.",
      'f5.t': 'Περιοχή γονέων', 'f5.d': "Μια προστατευμένη περιοχή πίσω από μια πράξη για ενήλικες: οι γονείς επιλέγουν γλώσσα και τρόπο παιχνιδιού, βλέπουν την πρόοδο και μπορούν να επαναφέρουν το ημερολόγιο.",
      'f6.t': 'Μουσική', 'f6.d': "Χριστουγεννιάτικη μουσική υπόκρουση για επιλογή. Η μουσική και τα ηχητικά εφέ μπορούν να ανοίγουν και να κλείνουν οποτεδήποτε, και από τα ίδια τα παιδιά.",
      'video.h': 'Βίντεο', 'video.alt': "Ο Kalino δείχνει ένα iPad με το παιχνίδι με τα μπισκότα", 'video.vol': 'Ένταση ήχου', 'video.play': 'Αναπαραγωγή βίντεο', 'shots.h': 'Στιγμιότυπα', 'shots.region': 'Εικόνες από την εφαρμογή', 'shots.track': 'Στιγμιότυπα της εφαρμογής. Περιηγήσου με τα πλήκτρα βέλους.', 'shots.prev': 'Προηγούμενη εικόνα', 'shots.next': 'Επόμενη εικόνα', 'shots.dot': 'Εικόνα {n} από {total}',
      s1: "Καλώς ήρθες στο σπίτι του ξωτικού Καλίνου", s2: "24 πορτάκια και μια έκπληξη σε περιμένουν", s3: "Με κάθε πορτάκι το δωμάτιο γίνεται πιο ζεστό", s4: "Στόλισε το χριστουγεννιάτικο δέντρο", s5: "Άσε την υπόδειξη να σε βοηθήσει να δεις τι να κάνεις", s6: "Φτιάξε έναν χιονάνθρωπο", s8: "Και στο τέλος δες όλα όσα κατάφερες", s7: "Ή στόλισε μπισκότα", s9: "Διάλεξε τη χριστουγεννιάτικη μουσική σου", s10: "Οι γονείς ρυθμίζουν τα πάντα στην προστατευμένη περιοχή",
      'dev.h': 'Συσκευές', 'dev.iphone': 'Με iOS 16.4 ή νεότερο.', 'dev.ipad': 'Με iPadOS 16.4 ή νεότερο.', 'dev.note': 'Η εφαρμογή λειτουργεί σε οριζόντιο προσανατολισμό. Γύρισε τη συσκευή στο πλάι και ξεκινάμε.',
      'lang.h': 'Γλώσσες', 'lang.note': 'Το Kalino διατίθεται σε δεκατρείς γλώσσες. Τη γλώσσα την αλλάζεις στην περιοχή γονέων.',
      'info.h': 'Απόρρητο και επικοινωνία', 'priv.t': 'Απόρρητο', 'priv.d': 'Πώς το Kalino χειρίζεται τα δεδομένα. Διαθέσιμο σε δεκατρείς γλώσσες.', 'priv.go': 'Διάβασε την πολιτική απορρήτου →', 'con.t': 'Επικοινωνία', 'con.d': 'Ερωτήσεις ή ευχές για την εφαρμογή; Στείλε μας ένα email.', 'foot.priv': 'Απόρρητο'
    }
  };

  const CODES = Object.keys(T);
  const STORE = 'kalino-lang';

  function match(tag) {
    const l = String(tag || '').toLowerCase();
    if (l.startsWith('pt')) return 'pt-PT';
    if (l.startsWith('nb') || l.startsWith('no') || l.startsWith('nn')) return 'nb';
    const base = l.split('-')[0];
    return CODES.includes(base) ? base : null;
  }
  function initial() {
    const q = new URLSearchParams(location.search).get('lang');
    if (q && CODES.includes(q)) return q;
    try { const s = localStorage.getItem(STORE); if (s && CODES.includes(s)) return s; } catch (e) {}
    for (const tag of navigator.languages || [navigator.language]) { const m = match(tag); if (m) return m; }
    return 'en';
  }

  const api = {
    lang: 'de',
    t(key, vars) {
      let s = (T[api.lang] && T[api.lang][key]) || T.de[key] || '';
      if (vars) for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
      return s;
    }
  };
  window.kalino = api;

  function apply(code, persist) {
    api.lang = code;
    document.documentElement.lang = code;
    document.title = api.t('title');
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', api.t('meta.desc'));
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = api.t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => el.setAttribute('alt', api.t(el.dataset.i18nAlt)));
    document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', api.t(el.dataset.i18nAria)));
    document.querySelectorAll('a[data-keeplang]').forEach(a => {
      a.setAttribute('href', `${a.getAttribute('href').split('?')[0]}?lang=${code}`);
    });
    const select = document.querySelector('#language');
    if (select) select.value = code;
    if (persist) {
      try { localStorage.setItem(STORE, code); } catch (e) {}
      const url = new URL(location.href);
      url.searchParams.set('lang', code);
      history.replaceState(null, '', url);
    }
    document.dispatchEvent(new CustomEvent('kalino:lang', { detail: code }));
  }

  const select = document.querySelector('#language');
  if (select) select.addEventListener('change', () => apply(select.value, true));
  apply(initial(), false);
})();
