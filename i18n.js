// Mehrsprachige Startseite: dreizehn Sprachen, ohne Fremdbibliothek.
// Deutsch steht zusätzlich als Text im HTML (funktioniert auch ohne JavaScript).
(() => {
  const T = {
    de: {
      title: 'Kalino – Audimago', 'meta.desc': 'Kalino ist ein interaktiver Adventskalender für Kinder mit 24 Türchen und einer Überraschung, für iPhone und iPad in dreizehn Sprachen.',
      'nav.aria': 'Hauptnavigation', 'nav.desc': 'Beschreibung', 'nav.shots': 'Einblicke', 'nav.devices': 'Geräte', 'nav.langs': 'Sprachen', 'nav.info': 'Datenschutz & Kontakt', 'ui.language': 'Sprache',
      name: 'Kalino', 'hero.alt': 'Kalino, der kleine Wichtel mit roter Mütze, Laterne und Adventskalender', 'hero.lead': 'Der interaktive Adventskalender für Kinder', 'hero.more': 'Mehr erfahren',
      fact1: '24 Türchen + Überraschung', fact2: 'Keine Werbung', fact3: 'Kein Benutzerkonto', fact4: 'Daten bleiben auf dem Gerät',
      'desc.h': 'Beschreibung',
      'desc.p1': "Wichtel Kalino lädt Kinder ein, gemeinsam den Advent zu erleben. Hinter 24 Türchen warten liebevoll gestaltete Spiele, kleine Rätsel und kreative Aufgaben darauf, entdeckt zu werden. Mit jedem Türchen wird Kalinos Wichtelstube ein Stück gemütlicher. Kinder tippen, wischen und ziehen. Die App ist für Kinder im Vorschulalter um 5 Jahre gedacht.",
      'f1.t': '24 Türchen und eine Überraschung', 'f1.d': 'Vom 1. bis zum 24. Dezember wartet jeden Tag ein neues Abenteuer, im 25. Türchen eine Überraschung.',
      'f2.t': 'Hinweise zum Verstehen', 'f2.d': "Ein kleines Bild, eine Animation und ein kurzer Text zeigen, was zu tun ist. Der Hinweis erscheint zu Beginn der Aufgabe und lässt sich ausschalten. Über den Info-Button ist er jedoch jederzeit verfügbar.",
      'f3.t': 'Schneekugeln als Meilensteine', 'f3.d': 'Nach einigen Türchen funkelt eine Schneekugel. Sie zeigt dem Kind, wie weit es schon gekommen ist. Am Ende gibt es einen Rückblick auf alles Erlebte.',
      'f4.t': 'Drei Spielmodi', 'f4.d': 'Echter Adventskalender, jeden Tag ein neues Türchen oder freies Spielen im eigenen Tempo.',
      'f5.t': 'Elternbereich', 'f5.d': "Hinter einer Rechenaufgabe für Erwachsene: Sprache und Spielmodus einstellen, den Fortschritt ansehen und den Kalender zurücksetzen.",
      'f6.t': 'Musik', 'f6.d': "Weihnachtliche Hintergrundmusik. Kinder können Musik und Soundeffekte selbst an- und ausschalten und die Musik selbst auswählen.",
      'shots.h': 'Einblicke', 'shots.region': 'Bilder aus der App', 'shots.track': 'Einblicke in die App. Mit den Pfeiltasten blättern.', 'shots.prev': 'Vorheriges Bild', 'shots.next': 'Nächstes Bild', 'shots.dot': 'Bild {n} von {total}',
      s1: '24 Türchen und eine Überraschung', s2: 'Die Stube wird mit jedem Türchen gemütlicher', s3: 'Weihnachtliche Musik zum Auswählen', s4: 'Den Weihnachtsbaum schmücken', s5: 'Die Aufgabe wird in Bildern erklärt', s6: 'Einen Schneemann bauen', s7: 'Plätzchen verzieren',
      'dev.h': 'Geräte', 'dev.iphone': 'Mit iOS 16.4 oder neuer.', 'dev.ipad': 'Mit iPadOS 16.4 oder neuer.', 'dev.note': 'Die App läuft im Querformat. Drehe dein Gerät quer, dann kann es losgehen.',
      'lang.h': 'Sprachen', 'lang.note': 'Kalino gibt es in dreizehn Sprachen. Die Sprache lässt sich im Elternbereich wechseln.',
      'info.h': 'Datenschutz & Kontakt', 'priv.t': 'Datenschutz', 'priv.d': 'So geht Kalino mit Daten um. In dreizehn Sprachen zum Nachlesen.', 'priv.go': 'Datenschutzerklärung lesen →', 'con.t': 'Kontakt', 'con.d': 'Fragen oder Wünsche zur App? Schreib uns eine E-Mail.', 'foot.priv': 'Datenschutz'
    },
    en: {
      title: 'Kalino – Audimago', 'meta.desc': 'Kalino is an interactive Advent calendar for children with 24 doors and a surprise, for iPhone and iPad in thirteen languages.',
      'nav.aria': 'Main navigation', 'nav.desc': 'Description', 'nav.shots': 'Previews', 'nav.devices': 'Devices', 'nav.langs': 'Languages', 'nav.info': 'Privacy & contact', 'ui.language': 'Language',
      name: 'Kalino', 'hero.alt': 'Kalino, the little elf with a red hat, a lantern and an Advent calendar', 'hero.lead': 'The interactive Advent calendar for children', 'hero.more': 'Learn more',
      fact1: '24 doors + a surprise', fact2: 'No ads', fact3: 'No user account', fact4: 'Data stays on the device',
      'desc.h': 'Description',
      'desc.p1': "Elf Kalino invites children to experience Advent together. Behind 24 doors, lovingly designed games, little puzzles and creative activities are waiting to be discovered. With every door, Kalino's cottage becomes a little cosier. Children tap, swipe and drag. The app is made for preschool children around 5 years old.",
      'f1.t': '24 doors and a surprise', 'f1.d': 'From 1 to 24 December a new adventure waits every day, and behind door 25 a surprise.',
      'f2.t': 'Hints that explain', 'f2.d': "A small picture, an animation and a short text show what to do. The hint appears at the start of the task and can be turned off. It is still available at any time via the info button.",
      'f3.t': 'Snow globes as milestones', 'f3.d': 'After a few doors a snow globe sparkles. It shows the child how far they have come. At the end there is a look back at everything they did.',
      'f4.t': 'Three play modes', 'f4.d': 'A real Advent calendar, a new door every day, or free play at your own pace.',
      'f5.t': 'Parent area', 'f5.d': "Behind a maths question for adults: set the language and play mode, view progress and reset the calendar.",
      'f6.t': 'Music', 'f6.d': "Christmas background music. Children can switch music and sound effects on and off and choose the music themselves.",
      'shots.h': 'Previews', 'shots.region': 'Pictures from the app', 'shots.track': 'Previews of the app. Use the arrow keys to browse.', 'shots.prev': 'Previous picture', 'shots.next': 'Next picture', 'shots.dot': 'Picture {n} of {total}',
      s1: '24 doors and a surprise', s2: 'The cottage gets cosier with every door', s3: 'Christmas music to choose from', s4: 'Decorating the Christmas tree', s5: 'The task is explained in pictures', s6: 'Building a snowman', s7: 'Decorating cookies',
      'dev.h': 'Devices', 'dev.iphone': 'With iOS 16.4 or later.', 'dev.ipad': 'With iPadOS 16.4 or later.', 'dev.note': 'The app runs in landscape. Turn your device sideways and off you go.',
      'lang.h': 'Languages', 'lang.note': 'Kalino comes in thirteen languages. You can switch the language in the parent area.',
      'info.h': 'Privacy & contact', 'priv.t': 'Privacy', 'priv.d': 'How Kalino handles data. Available in thirteen languages.', 'priv.go': 'Read the privacy policy →', 'con.t': 'Contact', 'con.d': 'Questions or wishes about the app? Send us an email.', 'foot.priv': 'Privacy'
    },
    fr: {
      title: 'La maison du lutin – Audimago', 'meta.desc': "La maison du lutin est un calendrier de l'Avent interactif pour les enfants, avec 24 portes et une surprise, pour iPhone et iPad en treize langues.",
      'nav.aria': 'Navigation principale', 'nav.desc': 'Description', 'nav.shots': 'Aperçu', 'nav.devices': 'Appareils', 'nav.langs': 'Langues', 'nav.info': 'Confidentialité et contact', 'ui.language': 'Langue',
      name: 'La maison du lutin', 'hero.alt': "Le petit lutin au bonnet rouge, avec une lanterne et un calendrier de l'Avent", 'hero.lead': "Le calendrier de l'Avent interactif pour les enfants", 'hero.more': 'En savoir plus',
      fact1: '24 portes + une surprise', fact2: 'Sans publicité', fact3: 'Sans compte utilisateur', fact4: "Les données restent sur l'appareil",
      'desc.h': 'Description',
      'desc.p1': "Le petit lutin invite les enfants à vivre l'Avent ensemble. Derrière 24 portes, des jeux soignés, de petites énigmes et des activités créatives n'attendent que d'être découverts. À chaque porte, la maison du lutin devient un peu plus douillette. Les enfants touchent, glissent et tirent. L'application est conçue pour les enfants d'âge préscolaire, autour de 5 ans.",
      'f1.t': '24 portes et une surprise', 'f1.d': "Du 1er au 24 décembre, une nouvelle aventure attend chaque jour, et derrière la 25e porte une surprise.",
      'f2.t': 'Des conseils pour comprendre', 'f2.d': "Une petite image, une animation et un court texte montrent quoi faire. L'indice apparaît au début de la tâche et peut être désactivé. Il reste toutefois disponible à tout moment via le bouton d'info.",
      'f3.t': 'Des boules à neige comme étapes', 'f3.d': "Après quelques portes, une boule à neige scintille. Elle montre à l'enfant le chemin parcouru. À la fin, un retour sur tout ce qu'il a vécu.",
      'f4.t': 'Trois modes de jeu', 'f4.d': "Un vrai calendrier de l'Avent, une nouvelle porte chaque jour ou le jeu libre à son rythme.",
      'f5.t': 'Espace parents', 'f5.d': "Derrière un calcul réservé aux adultes : choisir la langue et le mode de jeu, consulter la progression et réinitialiser le calendrier.",
      'f6.t': 'Musique', 'f6.d': "Une musique de Noël en fond sonore. Les enfants peuvent activer ou couper eux-mêmes la musique et les effets sonores et choisir la musique.",
      'shots.h': 'Aperçu', 'shots.region': "Images de l'application", 'shots.track': "Aperçu de l'application. Utilisez les flèches du clavier pour naviguer.", 'shots.prev': 'Image précédente', 'shots.next': 'Image suivante', 'shots.dot': 'Image {n} sur {total}',
      s1: '24 portes et une surprise', s2: 'La maison devient plus douillette à chaque porte', s3: 'De la musique de Noël au choix', s4: 'Décorer le sapin de Noël', s5: 'La tâche est expliquée en images', s6: 'Construire un bonhomme de neige', s7: 'Décorer des biscuits',
      'dev.h': 'Appareils', 'dev.iphone': 'Avec iOS 16.4 ou plus récent.', 'dev.ipad': 'Avec iPadOS 16.4 ou plus récent.', 'dev.note': "L'application fonctionne en mode paysage. Tournez votre appareil, et c'est parti.",
      'lang.h': 'Langues', 'lang.note': "La maison du lutin existe en treize langues. La langue se change dans l'espace parents.",
      'info.h': 'Confidentialité et contact', 'priv.t': 'Confidentialité', 'priv.d': 'Comment l’application traite les données. À lire en treize langues.', 'priv.go': 'Lire la politique de confidentialité →', 'con.t': 'Contact', 'con.d': "Une question ou une envie à propos de l'application ? Écrivez-nous un e-mail.", 'foot.priv': 'Confidentialité'
    },
    es: {
      title: 'Kalino – Audimago', 'meta.desc': 'Kalino es un calendario de Adviento interactivo para niños con 24 ventanitas y una sorpresa, para iPhone y iPad en trece idiomas.',
      'nav.aria': 'Navegación principal', 'nav.desc': 'Descripción', 'nav.shots': 'Vistas', 'nav.devices': 'Dispositivos', 'nav.langs': 'Idiomas', 'nav.info': 'Privacidad y contacto', 'ui.language': 'Idioma',
      name: 'Kalino', 'hero.alt': 'Kalino, el pequeño elfo con gorro rojo, un farol y un calendario de Adviento', 'hero.lead': 'El calendario de Adviento interactivo para niños', 'hero.more': 'Saber más',
      fact1: '24 ventanitas + una sorpresa', fact2: 'Sin publicidad', fact3: 'Sin cuenta de usuario', fact4: 'Los datos se quedan en el dispositivo',
      'desc.h': 'Descripción',
      'desc.p1': "El elfo Kalino invita a los niños a vivir juntos el Adviento. Detrás de 24 ventanitas esperan, para ser descubiertos, juegos hechos con cariño, pequeños acertijos y actividades creativas. Con cada ventanita, la casita de Kalino se vuelve un poco más acogedora. Los niños tocan, deslizan y arrastran. La aplicación está pensada para niños en edad preescolar, de unos 5 años.",
      'f1.t': '24 ventanitas y una sorpresa', 'f1.d': 'Del 1 al 24 de diciembre espera cada día una nueva aventura, y en la ventanita 25 una sorpresa.',
      'f2.t': 'Pistas para entender', 'f2.d': "Una imagen pequeña, una animación y un texto breve muestran qué hacer. La pista aparece al comienzo de la tarea y se puede desactivar. Aun así, siempre está disponible con el botón de información.",
      'f3.t': 'Bolas de nieve como hitos', 'f3.d': 'Tras algunas ventanitas brilla una bola de nieve. Muestra al niño hasta dónde ha llegado. Al final hay un repaso de todo lo vivido.',
      'f4.t': 'Tres modos de juego', 'f4.d': 'Un auténtico calendario de Adviento, una ventanita nueva cada día o juego libre a tu propio ritmo.',
      'f5.t': 'Zona para padres', 'f5.d': "Tras una operación para adultos: elegir el idioma y el modo de juego, ver el progreso y restablecer el calendario.",
      'f6.t': 'Música', 'f6.d': "Música navideña de fondo. Los niños pueden activar o desactivar la música y los efectos de sonido y elegir la música ellos mismos.",
      'shots.h': 'Vistas', 'shots.region': 'Imágenes de la aplicación', 'shots.track': 'Vistas de la aplicación. Usa las flechas del teclado para avanzar.', 'shots.prev': 'Imagen anterior', 'shots.next': 'Imagen siguiente', 'shots.dot': 'Imagen {n} de {total}',
      s1: '24 ventanitas y una sorpresa', s2: 'La casita se vuelve más acogedora con cada ventanita', s3: 'Música navideña para elegir', s4: 'Decorar el árbol de Navidad', s5: 'La tarea se explica con imágenes', s6: 'Construir un muñeco de nieve', s7: 'Decorar galletas',
      'dev.h': 'Dispositivos', 'dev.iphone': 'Con iOS 16.4 o posterior.', 'dev.ipad': 'Con iPadOS 16.4 o posterior.', 'dev.note': 'La aplicación funciona en horizontal. Gira tu dispositivo y ¡a jugar!',
      'lang.h': 'Idiomas', 'lang.note': 'Kalino está disponible en trece idiomas. El idioma se cambia en la zona para padres.',
      'info.h': 'Privacidad y contacto', 'priv.t': 'Privacidad', 'priv.d': 'Cómo trata Kalino los datos. Disponible en trece idiomas.', 'priv.go': 'Leer la política de privacidad →', 'con.t': 'Contacto', 'con.d': '¿Preguntas o deseos sobre la aplicación? Escríbenos un correo.', 'foot.priv': 'Privacidad'
    },
    nl: {
      title: 'Kalino – Audimago', 'meta.desc': 'Kalino is een interactieve adventskalender voor kinderen met 24 deurtjes en een verrassing, voor iPhone en iPad in dertien talen.',
      'nav.aria': 'Hoofdnavigatie', 'nav.desc': 'Beschrijving', 'nav.shots': 'Impressie', 'nav.devices': 'Apparaten', 'nav.langs': 'Talen', 'nav.info': 'Privacy & contact', 'ui.language': 'Taal',
      name: 'Kalino', 'hero.alt': 'Kalino, de kleine kabouter met rode muts, lantaarn en adventskalender', 'hero.lead': 'De interactieve adventskalender voor kinderen', 'hero.more': 'Meer weten',
      fact1: '24 deurtjes + een verrassing', fact2: 'Geen reclame', fact3: 'Geen gebruikersaccount', fact4: 'Gegevens blijven op het apparaat',
      'desc.h': 'Beschrijving',
      'desc.p1': "Kabouter Kalino nodigt kinderen uit om samen de advent te beleven. Achter 24 deurtjes wachten liefdevol gemaakte spelletjes, kleine puzzels en creatieve opdrachten om ontdekt te worden. Met elk deurtje wordt Kalino's huisje iets gezelliger. Kinderen tikken, vegen en slepen. De app is bedoeld voor kinderen in de kleuterleeftijd, rond 5 jaar.",
      'f1.t': '24 deurtjes en een verrassing', 'f1.d': 'Van 1 tot en met 24 december wacht elke dag een nieuw avontuur, en achter deurtje 25 een verrassing.',
      'f2.t': 'Tips die uitleggen', 'f2.d': "Een klein plaatje, een animatie en een korte tekst laten zien wat je moet doen. De hint verschijnt aan het begin van de opdracht en kan worden uitgezet. Via de infoknop is hij echter altijd beschikbaar.",
      'f3.t': 'Sneeuwbollen als mijlpalen', 'f3.d': 'Na een paar deurtjes glinstert er een sneeuwbol. Die laat het kind zien hoe ver het al is. Aan het eind is er een terugblik op alles wat het beleefd heeft.',
      'f4.t': 'Drie spelmodi', 'f4.d': 'Een echte adventskalender, elke dag een nieuw deurtje of vrij spelen in je eigen tempo.',
      'f5.t': 'Ouderzone', 'f5.d': "Achter een rekensom voor volwassenen: taal en spelmodus kiezen, de voortgang bekijken en de kalender resetten.",
      'f6.t': 'Muziek', 'f6.d': "Kerstachtergrondmuziek. Kinderen kunnen zelf de muziek en geluidseffecten aan- en uitzetten en de muziek kiezen.",
      'shots.h': 'Impressie', 'shots.region': 'Beelden uit de app', 'shots.track': 'Impressie van de app. Blader met de pijltjestoetsen.', 'shots.prev': 'Vorige afbeelding', 'shots.next': 'Volgende afbeelding', 'shots.dot': 'Afbeelding {n} van {total}',
      s1: '24 deurtjes en een verrassing', s2: 'Het huisje wordt met elk deurtje gezelliger', s3: 'Kerstmuziek om uit te kiezen', s4: 'De kerstboom versieren', s5: 'De opdracht wordt in beeld uitgelegd', s6: 'Een sneeuwpop bouwen', s7: 'Koekjes versieren',
      'dev.h': 'Apparaten', 'dev.iphone': 'Met iOS 16.4 of nieuwer.', 'dev.ipad': 'Met iPadOS 16.4 of nieuwer.', 'dev.note': 'De app draait in liggende stand. Draai je apparaat en je kunt beginnen.',
      'lang.h': 'Talen', 'lang.note': 'Kalino is er in dertien talen. De taal wijzig je in de ouderzone.',
      'info.h': 'Privacy & contact', 'priv.t': 'Privacy', 'priv.d': 'Hoe Kalino met gegevens omgaat. In dertien talen te lezen.', 'priv.go': 'Privacyverklaring lezen →', 'con.t': 'Contact', 'con.d': 'Vragen of wensen over de app? Stuur ons een e-mail.', 'foot.priv': 'Privacy'
    },
    'pt-PT': {
      title: 'Kalino – Audimago', 'meta.desc': 'O Kalino é um calendário do Advento interativo para crianças, com 24 portinhas e uma surpresa, para iPhone e iPad em treze idiomas.',
      'nav.aria': 'Navegação principal', 'nav.desc': 'Descrição', 'nav.shots': 'Imagens', 'nav.devices': 'Dispositivos', 'nav.langs': 'Idiomas', 'nav.info': 'Privacidade e contacto', 'ui.language': 'Idioma',
      name: 'Kalino', 'hero.alt': 'O Kalino, o pequeno duende de gorro vermelho, com uma lanterna e um calendário do Advento', 'hero.lead': 'O calendário do Advento interativo para crianças', 'hero.more': 'Saber mais',
      fact1: '24 portinhas + uma surpresa', fact2: 'Sem publicidade', fact3: 'Sem conta de utilizador', fact4: 'Os dados ficam no dispositivo',
      'desc.h': 'Descrição',
      'desc.p1': "O duende Kalino convida as crianças a viver o Advento em conjunto. Atrás de 24 portinhas, jogos feitos com carinho, pequenos desafios e atividades criativas esperam para ser descobertos. A cada portinha, a casinha do Kalino fica um pouco mais acolhedora. As crianças tocam, deslizam e arrastam. A aplicação foi pensada para crianças em idade pré-escolar, por volta dos 5 anos.",
      'f1.t': '24 portinhas e uma surpresa', 'f1.d': 'De 1 a 24 de dezembro, espera todos os dias uma nova aventura, e na portinha 25 uma surpresa.',
      'f2.t': 'Dicas que explicam', 'f2.d': "Uma pequena imagem, uma animação e um texto curto mostram o que fazer. A dica aparece no início da tarefa e pode ser desativada. Mesmo assim, está sempre disponível através do botão de informação.",
      'f3.t': 'Globos de neve como marcos', 'f3.d': 'Depois de algumas portinhas, brilha um globo de neve. Mostra à criança até onde já chegou. No fim, há um olhar sobre tudo o que viveu.',
      'f4.t': 'Três modos de jogo', 'f4.d': 'Um verdadeiro calendário do Advento, uma portinha nova por dia ou jogo livre ao seu próprio ritmo.',
      'f5.t': 'Área dos pais', 'f5.d': "Atrás de uma conta para adultos: escolher o idioma e o modo de jogo, ver o progresso e repor o calendário.",
      'f6.t': 'Música', 'f6.d': "Música de Natal de fundo. As crianças podem ligar e desligar sozinhas a música e os efeitos sonoros e escolher a música.",
      'shots.h': 'Imagens', 'shots.region': 'Imagens da aplicação', 'shots.track': 'Imagens da aplicação. Use as setas do teclado para navegar.', 'shots.prev': 'Imagem anterior', 'shots.next': 'Imagem seguinte', 'shots.dot': 'Imagem {n} de {total}',
      s1: '24 portinhas e uma surpresa', s2: 'A casinha fica mais acolhedora a cada portinha', s3: 'Música de Natal à escolha', s4: 'Decorar a árvore de Natal', s5: 'A tarefa é explicada em imagens', s6: 'Construir um boneco de neve', s7: 'Decorar bolachas',
      'dev.h': 'Dispositivos', 'dev.iphone': 'Com iOS 16.4 ou superior.', 'dev.ipad': 'Com iPadOS 16.4 ou superior.', 'dev.note': 'A aplicação funciona na horizontal. Rode o dispositivo e está pronto.',
      'lang.h': 'Idiomas', 'lang.note': 'O Kalino está disponível em treze idiomas. O idioma muda-se na área dos pais.',
      'info.h': 'Privacidade e contacto', 'priv.t': 'Privacidade', 'priv.d': 'Como o Kalino trata os dados. Disponível em treze idiomas.', 'priv.go': 'Ler a política de privacidade →', 'con.t': 'Contacto', 'con.d': 'Dúvidas ou desejos sobre a aplicação? Envie-nos um e-mail.', 'foot.priv': 'Privacidade'
    },
    it: {
      title: 'Kalino – Audimago', 'meta.desc': "Kalino è un calendario dell'Avvento interattivo per bambini con 24 finestrelle e una sorpresa, per iPhone e iPad in tredici lingue.",
      'nav.aria': 'Navigazione principale', 'nav.desc': 'Descrizione', 'nav.shots': 'Anteprime', 'nav.devices': 'Dispositivi', 'nav.langs': 'Lingue', 'nav.info': 'Privacy e contatti', 'ui.language': 'Lingua',
      name: 'Kalino', 'hero.alt': "Kalino, il piccolo elfo con il cappello rosso, la lanterna e il calendario dell'Avvento", 'hero.lead': "Il calendario dell'Avvento interattivo per bambini", 'hero.more': 'Scopri di più',
      fact1: '24 finestrelle + una sorpresa', fact2: 'Senza pubblicità', fact3: 'Nessun account utente', fact4: 'I dati restano sul dispositivo',
      'desc.h': 'Descrizione',
      'desc.p1': "L'elfo Kalino invita i bambini a vivere insieme l'Avvento. Dietro 24 finestrelle, giochi curati con amore, piccoli rompicapi e attività creative aspettano di essere scoperti. A ogni finestrella la casetta di Kalino diventa un po' più accogliente. I bambini toccano, scorrono e trascinano. L'app è pensata per bambini in età prescolare, intorno ai 5 anni.",
      'f1.t': '24 finestrelle e una sorpresa', 'f1.d': 'Dal 1° al 24 dicembre ogni giorno aspetta una nuova avventura e nella finestrella 25 una sorpresa.',
      'f2.t': 'Suggerimenti che spiegano', 'f2.d': "Una piccola immagine, un'animazione e un breve testo mostrano cosa fare. Il suggerimento compare all'inizio del compito e si può disattivare. Resta comunque sempre disponibile con il pulsante info.",
      'f3.t': 'Palle di neve come traguardi', 'f3.d': "Dopo alcune finestrelle brilla una palla di neve. Mostra al bambino a che punto è arrivato. Alla fine c'è uno sguardo a tutto ciò che ha vissuto.",
      'f4.t': 'Tre modalità di gioco', 'f4.d': "Un vero calendario dell'Avvento, una nuova finestrella ogni giorno o gioco libero con i propri tempi.",
      'f5.t': 'Area genitori', 'f5.d': "Protetta da un calcolo per adulti: scegliere la lingua e la modalità di gioco, vedere i progressi e azzerare il calendario.",
      'f6.t': 'Musica', 'f6.d': "Musica natalizia di sottofondo. I bambini possono attivare o disattivare da soli la musica e gli effetti sonori e scegliere la musica.",
      'shots.h': 'Anteprime', 'shots.region': "Immagini dell'app", 'shots.track': "Anteprime dell'app. Usa le frecce della tastiera per scorrere.", 'shots.prev': 'Immagine precedente', 'shots.next': 'Immagine successiva', 'shots.dot': 'Immagine {n} di {total}',
      s1: '24 finestrelle e una sorpresa', s2: 'La casetta diventa più accogliente a ogni finestrella', s3: 'Musica natalizia da scegliere', s4: "Addobbare l'albero di Natale", s5: 'Il compito è spiegato con le immagini', s6: 'Costruire un pupazzo di neve', s7: 'Decorare i biscotti',
      'dev.h': 'Dispositivi', 'dev.iphone': 'Con iOS 16.4 o successivo.', 'dev.ipad': 'Con iPadOS 16.4 o successivo.', 'dev.note': "L'app funziona in orizzontale. Ruota il dispositivo e si parte.",
      'lang.h': 'Lingue', 'lang.note': "Kalino è disponibile in tredici lingue. La lingua si cambia nell'area genitori.",
      'info.h': 'Privacy e contatti', 'priv.t': 'Privacy', 'priv.d': 'Come Kalino tratta i dati. Da leggere in tredici lingue.', 'priv.go': "Leggi l'informativa sulla privacy →", 'con.t': 'Contatti', 'con.d': "Domande o desideri sull'app? Scrivici un'e-mail.", 'foot.priv': 'Privacy'
    },
    pl: {
      title: 'Kalino – Audimago', 'meta.desc': "Kalino to interaktywny kalendarz adwentowy dla dzieci z 24 okienkami i niespodzianką, na iPhone'a i iPada w trzynastu językach.",
      'nav.aria': 'Nawigacja główna', 'nav.desc': 'Opis', 'nav.shots': 'Podgląd', 'nav.devices': 'Urządzenia', 'nav.langs': 'Języki', 'nav.info': 'Prywatność i kontakt', 'ui.language': 'Język',
      name: 'Kalino', 'hero.alt': 'Kalino, mały skrzat w czerwonej czapce z latarnią i kalendarzem adwentowym', 'hero.lead': 'Interaktywny kalendarz adwentowy dla dzieci', 'hero.more': 'Dowiedz się więcej',
      fact1: '24 okienka + niespodzianka', fact2: 'Bez reklam', fact3: 'Bez konta użytkownika', fact4: 'Dane zostają na urządzeniu',
      'desc.h': 'Opis',
      'desc.p1': "Skrzat Kalino zaprasza dzieci do wspólnego przeżywania Adwentu. Za 24 okienkami czekają na odkrycie starannie przygotowane gry, małe zagadki i kreatywne zadania. Z każdym okienkiem domek Kalina staje się trochę przytulniejszy. Dzieci stukają, przesuwają i przeciągają. Aplikacja jest przeznaczona dla dzieci w wieku przedszkolnym, około 5 lat.",
      'f1.t': '24 okienka i niespodzianka', 'f1.d': 'Od 1 do 24 grudnia każdego dnia czeka nowa przygoda, a w okienku 25 niespodzianka.',
      'f2.t': 'Wskazówki, które tłumaczą', 'f2.d': "Mały obrazek, animacja i krótki tekst pokazują, co trzeba zrobić. Podpowiedź pojawia się na początku zadania i można ją wyłączyć. Przez przycisk informacji jest jednak zawsze dostępna.",
      'f3.t': 'Śnieżne kule jako kamienie milowe', 'f3.d': 'Po kilku okienkach błyszczy śnieżna kula. Pokazuje dziecku, jak daleko już doszło. Na końcu jest powrót do wszystkiego, co przeżyło.',
      'f4.t': 'Trzy tryby gry', 'f4.d': 'Prawdziwy kalendarz adwentowy, codziennie nowe okienko albo swobodna zabawa we własnym tempie.',
      'f5.t': 'Strefa rodzica', 'f5.d': "Za zadaniem rachunkowym dla dorosłych: wybór języka i trybu gry, podgląd postępów i zerowanie kalendarza.",
      'f6.t': 'Muzyka', 'f6.d': "Świąteczna muzyka w tle. Dzieci same mogą włączać i wyłączać muzykę oraz efekty dźwiękowe i wybierać muzykę.",
      'shots.h': 'Podgląd', 'shots.region': 'Obrazy z aplikacji', 'shots.track': 'Podgląd aplikacji. Przeglądaj strzałkami na klawiaturze.', 'shots.prev': 'Poprzedni obraz', 'shots.next': 'Następny obraz', 'shots.dot': 'Obraz {n} z {total}',
      s1: '24 okienka i niespodzianka', s2: 'Domek jest przytulniejszy z każdym okienkiem', s3: 'Świąteczna muzyka do wyboru', s4: 'Ubieranie choinki', s5: 'Zadanie wyjaśnione w obrazkach', s6: 'Lepienie bałwana', s7: 'Ozdabianie ciasteczek',
      'dev.h': 'Urządzenia', 'dev.iphone': 'Z iOS 16.4 lub nowszym.', 'dev.ipad': 'Z iPadOS 16.4 lub nowszym.', 'dev.note': 'Aplikacja działa w poziomie. Obróć urządzenie i można zaczynać.',
      'lang.h': 'Języki', 'lang.note': 'Kalino jest dostępne w trzynastu językach. Język zmienisz w strefie rodzica.',
      'info.h': 'Prywatność i kontakt', 'priv.t': 'Prywatność', 'priv.d': 'Jak Kalino obchodzi się z danymi. Do przeczytania w trzynastu językach.', 'priv.go': 'Przeczytaj politykę prywatności →', 'con.t': 'Kontakt', 'con.d': 'Pytania lub życzenia dotyczące aplikacji? Napisz do nas e-mail.', 'foot.priv': 'Prywatność'
    },
    da: {
      title: 'Kalino – Audimago', 'meta.desc': 'Kalino er en interaktiv julekalender for børn med 24 låger og en overraskelse, til iPhone og iPad på tretten sprog.',
      'nav.aria': 'Hovednavigation', 'nav.desc': 'Beskrivelse', 'nav.shots': 'Indblik', 'nav.devices': 'Enheder', 'nav.langs': 'Sprog', 'nav.info': 'Privatliv og kontakt', 'ui.language': 'Sprog',
      name: 'Kalino', 'hero.alt': 'Kalino, den lille nisse med rød hue, lanterne og julekalender', 'hero.lead': 'Den interaktive julekalender for børn', 'hero.more': 'Læs mere',
      fact1: '24 låger + en overraskelse', fact2: 'Ingen reklamer', fact3: 'Ingen brugerkonto', fact4: 'Data bliver på enheden',
      'desc.h': 'Beskrivelse',
      'desc.p1': "Nissen Kalino inviterer børn til at opleve juletiden sammen. Bag 24 låger venter kærligt udformede spil, små gåder og kreative opgaver på at blive opdaget. For hver låge bliver Kalinos stue en smule hyggeligere. Børnene trykker, stryger og trækker. Appen er lavet til børn i førskolealderen, omkring 5 år.",
      'f1.t': '24 låger og en overraskelse', 'f1.d': 'Fra 1. til 24. december venter der hver dag et nyt eventyr, og i låge 25 en overraskelse.',
      'f2.t': 'Tips, der forklarer', 'f2.d': "Et lille billede, en animation og en kort tekst viser, hvad man skal gøre. Hintet vises i starten af opgaven og kan slås fra. Via info-knappen er det dog altid tilgængeligt.",
      'f3.t': 'Snekugler som milepæle', 'f3.d': 'Efter nogle låger glitrer en snekugle. Den viser barnet, hvor langt det er nået. Til sidst er der et tilbageblik på alt, det har oplevet.',
      'f4.t': 'Tre spiltilstande', 'f4.d': 'En rigtig julekalender, en ny låge hver dag eller frit spil i eget tempo.',
      'f5.t': 'Forælderområde', 'f5.d': "Bag en regneopgave til voksne: vælg sprog og spiltilstand, se fremskridtet og nulstil kalenderen.",
      'f6.t': 'Musik', 'f6.d': "Julemusik i baggrunden. Børn kan selv slå musik og lydeffekter til og fra og vælge musikken.",
      'shots.h': 'Indblik', 'shots.region': 'Billeder fra appen', 'shots.track': 'Indblik i appen. Brug piletasterne til at bladre.', 'shots.prev': 'Forrige billede', 'shots.next': 'Næste billede', 'shots.dot': 'Billede {n} af {total}',
      s1: '24 låger og en overraskelse', s2: 'Stuen bliver hyggeligere for hver låge', s3: 'Julemusik at vælge imellem', s4: 'Pynte juletræet', s5: 'Opgaven forklares i billeder', s6: 'Bygge en snemand', s7: 'Pynte småkager',
      'dev.h': 'Enheder', 'dev.iphone': 'Med iOS 16.4 eller nyere.', 'dev.ipad': 'Med iPadOS 16.4 eller nyere.', 'dev.note': 'Appen kører på langs. Drej din enhed, så kan det gå løs.',
      'lang.h': 'Sprog', 'lang.note': 'Kalino findes på tretten sprog. Sproget skifter man i forælderområdet.',
      'info.h': 'Privatliv og kontakt', 'priv.t': 'Privatliv', 'priv.d': 'Sådan håndterer Kalino data. Kan læses på tretten sprog.', 'priv.go': 'Læs privatlivserklæringen →', 'con.t': 'Kontakt', 'con.d': 'Spørgsmål eller ønsker til appen? Send os en e-mail.', 'foot.priv': 'Privatliv'
    },
    sv: {
      title: 'Kalino – Audimago', 'meta.desc': 'Kalino är en interaktiv adventskalender för barn med 24 luckor och en överraskning, för iPhone och iPad på tretton språk.',
      'nav.aria': 'Huvudnavigering', 'nav.desc': 'Beskrivning', 'nav.shots': 'Inblick', 'nav.devices': 'Enheter', 'nav.langs': 'Språk', 'nav.info': 'Integritet och kontakt', 'ui.language': 'Språk',
      name: 'Kalino', 'hero.alt': 'Kalino, den lilla tomten med röd luva, lykta och adventskalender', 'hero.lead': 'Den interaktiva adventskalendern för barn', 'hero.more': 'Läs mer',
      fact1: '24 luckor + en överraskning', fact2: 'Ingen reklam', fact3: 'Inget användarkonto', fact4: 'Uppgifterna stannar på enheten',
      'desc.h': 'Beskrivning',
      'desc.p1': "Tomten Kalino bjuder in barn att uppleva advent tillsammans. Bakom 24 luckor väntar kärleksfullt gjorda spel, små klurigheter och kreativa uppgifter på att upptäckas. För varje lucka blir Kalinos stuga lite mysigare. Barnen trycker, drar och sveper. Appen är gjord för barn i förskoleåldern, omkring 5 år.",
      'f1.t': '24 luckor och en överraskning', 'f1.d': 'Från 1 till 24 december väntar ett nytt äventyr varje dag, och i lucka 25 en överraskning.',
      'f2.t': 'Ledtrådar som förklarar', 'f2.d': "En liten bild, en animation och en kort text visar vad man ska göra. Tipset visas i början av uppgiften och kan stängas av. Via infoknappen finns det ändå alltid tillgängligt.",
      'f3.t': 'Snöglober som milstolpar', 'f3.d': 'Efter några luckor glittrar en snöglob. Den visar barnet hur långt det har kommit. Till sist finns en tillbakablick på allt det har upplevt.',
      'f4.t': 'Tre spelägen', 'f4.d': 'En riktig adventskalender, en ny lucka varje dag eller fritt spel i egen takt.',
      'f5.t': 'Föräldraområde', 'f5.d': "Bakom en räkneuppgift för vuxna: välj språk och spelläge, se framstegen och nollställ kalendern.",
      'f6.t': 'Musik', 'f6.d': "Julmusik i bakgrunden. Barn kan själva slå på och av musik och ljudeffekter och välja musiken.",
      'shots.h': 'Inblick', 'shots.region': 'Bilder från appen', 'shots.track': 'Inblick i appen. Bläddra med piltangenterna.', 'shots.prev': 'Föregående bild', 'shots.next': 'Nästa bild', 'shots.dot': 'Bild {n} av {total}',
      s1: '24 luckor och en överraskning', s2: 'Stugan blir mysigare för varje lucka', s3: 'Julmusik att välja mellan', s4: 'Pynta julgranen', s5: 'Uppgiften förklaras i bilder', s6: 'Bygga en snögubbe', s7: 'Dekorera pepparkakor',
      'dev.h': 'Enheter', 'dev.iphone': 'Med iOS 16.4 eller senare.', 'dev.ipad': 'Med iPadOS 16.4 eller senare.', 'dev.note': 'Appen körs i liggande läge. Vrid enheten så kan det börja.',
      'lang.h': 'Språk', 'lang.note': 'Kalino finns på tretton språk. Språket byter du i föräldraområdet.',
      'info.h': 'Integritet och kontakt', 'priv.t': 'Integritet', 'priv.d': 'Så hanterar Kalino uppgifter. Kan läsas på tretton språk.', 'priv.go': 'Läs integritetspolicyn →', 'con.t': 'Kontakt', 'con.d': 'Frågor eller önskemål om appen? Skicka ett mejl till oss.', 'foot.priv': 'Integritet'
    },
    nb: {
      title: 'Kalino – Audimago', 'meta.desc': 'Kalino er en interaktiv julekalender for barn med 24 luker og en overraskelse, for iPhone og iPad på tretten språk.',
      'nav.aria': 'Hovednavigasjon', 'nav.desc': 'Beskrivelse', 'nav.shots': 'Innblikk', 'nav.devices': 'Enheter', 'nav.langs': 'Språk', 'nav.info': 'Personvern og kontakt', 'ui.language': 'Språk',
      name: 'Kalino', 'hero.alt': 'Kalino, den lille nissen med rød lue, lykt og julekalender', 'hero.lead': 'Den interaktive julekalenderen for barn', 'hero.more': 'Les mer',
      fact1: '24 luker + en overraskelse', fact2: 'Ingen reklame', fact3: 'Ingen brukerkonto', fact4: 'Dataene blir på enheten',
      'desc.h': 'Beskrivelse',
      'desc.p1': "Nissen Kalino inviterer barn til å oppleve julen sammen. Bak 24 luker venter kjærlig utformede spill, små gåter og kreative oppgaver på å bli oppdaget. For hver luke blir Kalinos stue litt koseligere. Barna trykker, sveiper og drar. Appen er laget for barn i barnehagealder, rundt 5 år.",
      'f1.t': '24 luker og en overraskelse', 'f1.d': 'Fra 1. til 24. desember venter et nytt eventyr hver dag, og i luke 25 en overraskelse.',
      'f2.t': 'Tips som forklarer', 'f2.d': "Et lite bilde, en animasjon og en kort tekst viser hva man skal gjøre. Hintet vises i starten av oppgaven og kan slås av. Via infoknappen er det likevel alltid tilgjengelig.",
      'f3.t': 'Snøkuler som milepæler', 'f3.d': 'Etter noen luker glitrer en snøkule. Den viser barnet hvor langt det har kommet. Til slutt er det et tilbakeblikk på alt det har opplevd.',
      'f4.t': 'Tre spillmoduser', 'f4.d': 'En ekte julekalender, en ny luke hver dag eller fritt spill i eget tempo.',
      'f5.t': 'Foreldreområde', 'f5.d': "Bak en regneoppgave for voksne: velg språk og spillmodus, se fremgangen og tilbakestill kalenderen.",
      'f6.t': 'Musikk', 'f6.d': "Julemusikk i bakgrunnen. Barn kan selv slå musikk og lydeffekter av og på og velge musikken.",
      'shots.h': 'Innblikk', 'shots.region': 'Bilder fra appen', 'shots.track': 'Innblikk i appen. Bla med piltastene.', 'shots.prev': 'Forrige bilde', 'shots.next': 'Neste bilde', 'shots.dot': 'Bilde {n} av {total}',
      s1: '24 luker og en overraskelse', s2: 'Stuen blir koseligere for hver luke', s3: 'Julemusikk å velge mellom', s4: 'Pynte juletreet', s5: 'Oppgaven forklares i bilder', s6: 'Bygge en snømann', s7: 'Dekorere pepperkaker',
      'dev.h': 'Enheter', 'dev.iphone': 'Med iOS 16.4 eller nyere.', 'dev.ipad': 'Med iPadOS 16.4 eller nyere.', 'dev.note': 'Appen kjører i liggende format. Vri enheten, så kan det begynne.',
      'lang.h': 'Språk', 'lang.note': 'Kalino finnes på tretten språk. Språket bytter du i foreldreområdet.',
      'info.h': 'Personvern og kontakt', 'priv.t': 'Personvern', 'priv.d': 'Slik behandler Kalino data. Kan leses på tretten språk.', 'priv.go': 'Les personvernerklæringen →', 'con.t': 'Kontakt', 'con.d': 'Spørsmål eller ønsker om appen? Send oss en e-post.', 'foot.priv': 'Personvern'
    },
    fi: {
      title: 'Kalino – Audimago', 'meta.desc': 'Kalino on vuorovaikutteinen joulukalenteri lapsille: 24 luukkua ja yllätys, iPhonelle ja iPadille kolmellatoista kielellä.',
      'nav.aria': 'Päänavigointi', 'nav.desc': 'Kuvaus', 'nav.shots': 'Kurkistus', 'nav.devices': 'Laitteet', 'nav.langs': 'Kielet', 'nav.info': 'Tietosuoja ja yhteystiedot', 'ui.language': 'Kieli',
      name: 'Kalino', 'hero.alt': 'Kalino, pieni tonttu punaisessa lakissa, lyhty ja joulukalenteri', 'hero.lead': 'Vuorovaikutteinen joulukalenteri lapsille', 'hero.more': 'Lue lisää',
      fact1: '24 luukkua + yllätys', fact2: 'Ei mainoksia', fact3: 'Ei käyttäjätiliä', fact4: 'Tiedot pysyvät laitteella',
      'desc.h': 'Kuvaus',
      'desc.p1': "Tonttu Kalino kutsuu lapset viettämään adventtia yhdessä. 24 luukun takana odottaa löydettäväksi rakkaudella tehtyjä pelejä, pieniä pulmia ja luovia tehtäviä. Jokaisen luukun myötä Kalinon tupa muuttuu hieman kodikkaammaksi. Lapset napauttavat, pyyhkäisevät ja vetävät. Sovellus on tarkoitettu noin 5-vuotiaille esikouluikäisille.",
      'f1.t': '24 luukkua ja yllätys', 'f1.d': 'Joulukuun 1. päivästä 24. päivään odottaa joka päivä uusi seikkailu ja luukussa 25 yllätys.',
      'f2.t': 'Vihjeet auttavat ymmärtämään', 'f2.d': "Pieni kuva, animaatio ja lyhyt teksti näyttävät, mitä pitää tehdä. Vihje näkyy tehtävän alussa, ja sen voi kytkeä pois. Info-painikkeella se on silti aina saatavilla.",
      'f3.t': 'Lumipallot virstanpylväinä', 'f3.d': 'Muutaman luukun jälkeen lumipallo alkaa välkehtiä. Se näyttää lapselle, kuinka pitkälle hän on päässyt. Lopussa katsotaan taaksepäin kaikkeen koettuun.',
      'f4.t': 'Kolme pelitilaa', 'f4.d': 'Oikea joulukalenteri, joka päivä uusi luukku tai vapaa pelaaminen omaan tahtiin.',
      'f5.t': 'Vanhempien alue', 'f5.d': "Aikuisille tarkoitetun laskutehtävän takana: kielen ja pelitilan valinta, edistymisen katselu ja kalenterin nollaus.",
      'f6.t': 'Musiikki', 'f6.d': "Joulutunnelmaista taustamusiikkia. Lapset voivat itse laittaa musiikin ja äänitehosteet päälle ja pois ja valita musiikin.",
      'shots.h': 'Kurkistus', 'shots.region': 'Kuvia sovelluksesta', 'shots.track': 'Kurkistus sovellukseen. Selaa nuolinäppäimillä.', 'shots.prev': 'Edellinen kuva', 'shots.next': 'Seuraava kuva', 'shots.dot': 'Kuva {n} / {total}',
      s1: '24 luukkua ja yllätys', s2: 'Tupa muuttuu kodikkaammaksi joka luukulla', s3: 'Joulumusiikkia valittavaksi', s4: 'Joulukuusen koristelu', s5: 'Tehtävä selitetään kuvilla', s6: 'Lumiukon rakentaminen', s7: 'Piparkakkujen koristelu',
      'dev.h': 'Laitteet', 'dev.iphone': 'iOS 16.4 tai uudempi.', 'dev.ipad': 'iPadOS 16.4 tai uudempi.', 'dev.note': 'Sovellus toimii vaaka-asennossa. Käännä laite sivuttain, niin pääsee alkamaan.',
      'lang.h': 'Kielet', 'lang.note': 'Kalino on saatavilla kolmellatoista kielellä. Kieltä voi vaihtaa vanhempien alueella.',
      'info.h': 'Tietosuoja ja yhteystiedot', 'priv.t': 'Tietosuoja', 'priv.d': 'Näin Kalino käsittelee tietoja. Luettavissa kolmellatoista kielellä.', 'priv.go': 'Lue tietosuojaseloste →', 'con.t': 'Yhteystiedot', 'con.d': 'Kysyttävää tai toiveita sovelluksesta? Lähetä meille sähköpostia.', 'foot.priv': 'Tietosuoja'
    },
    el: {
      title: 'Kalino – Audimago', 'meta.desc': 'Το Kalino είναι ένα διαδραστικό χριστουγεννιάτικο ημερολόγιο για παιδιά με 24 πορτάκια και μια έκπληξη, για iPhone και iPad σε δεκατρείς γλώσσες.',
      'nav.aria': 'Κύρια πλοήγηση', 'nav.desc': 'Περιγραφή', 'nav.shots': 'Στιγμιότυπα', 'nav.devices': 'Συσκευές', 'nav.langs': 'Γλώσσες', 'nav.info': 'Απόρρητο και επικοινωνία', 'ui.language': 'Γλώσσα',
      name: 'Kalino', 'hero.alt': 'Ο Kalino, το μικρό ξωτικό με το κόκκινο σκουφί, το φανάρι και το χριστουγεννιάτικο ημερολόγιο', 'hero.lead': 'Το διαδραστικό χριστουγεννιάτικο ημερολόγιο για παιδιά', 'hero.more': 'Μάθε περισσότερα',
      fact1: '24 πορτάκια + μια έκπληξη', fact2: 'Χωρίς διαφημίσεις', fact3: 'Χωρίς λογαριασμό χρήστη', fact4: 'Τα δεδομένα μένουν στη συσκευή',
      'desc.h': 'Περιγραφή',
      'desc.p1': "Το ξωτικό Kalino προσκαλεί τα παιδιά να ζήσουν μαζί τον Δεκέμβριο των Χριστουγέννων. Πίσω από 24 πορτάκια περιμένουν να ανακαλυφθούν προσεγμένα παιχνίδια, μικροί γρίφοι και δημιουργικές δραστηριότητες. Με κάθε πορτάκι το σπιτάκι του Kalino γίνεται λίγο πιο ζεστό. Τα παιδιά πατούν, σύρουν και μεταφέρουν. Η εφαρμογή απευθύνεται σε παιδιά προσχολικής ηλικίας, περίπου 5 ετών.",
      'f1.t': '24 πορτάκια και μια έκπληξη', 'f1.d': 'Από την 1η έως την 24η Δεκεμβρίου περιμένει κάθε μέρα μια νέα περιπέτεια και στο 25ο πορτάκι μια έκπληξη.',
      'f2.t': 'Υποδείξεις που βοηθούν να καταλαβαίνουν', 'f2.d': "Μια μικρή εικόνα, μια animation και ένα σύντομο κείμενο δείχνουν τι πρέπει να κάνεις. Η υπόδειξη εμφανίζεται στην αρχή της δραστηριότητας και μπορεί να απενεργοποιηθεί. Με το κουμπί πληροφοριών είναι πάντως πάντα διαθέσιμη.",
      'f3.t': 'Χιονόμπαλες ως ορόσημα', 'f3.d': 'Μετά από μερικά πορτάκια λάμπει μια χιονόμπαλα. Δείχνει στο παιδί πόσο μακριά έχει φτάσει. Στο τέλος υπάρχει μια ματιά πίσω σε όλα όσα έζησε.',
      'f4.t': 'Τρεις τρόποι παιχνιδιού', 'f4.d': 'Αληθινό χριστουγεννιάτικο ημερολόγιο, κάθε μέρα ένα νέο πορτάκι ή ελεύθερο παιχνίδι με τον δικό σου ρυθμό.',
      'f5.t': 'Περιοχή γονέων', 'f5.d': "Πίσω από μια πράξη για ενήλικες: επιλογή γλώσσας και τρόπου παιχνιδιού, προβολή της προόδου και επαναφορά του ημερολογίου.",
      'f6.t': 'Μουσική', 'f6.d': "Χριστουγεννιάτικη μουσική υπόκρουση. Τα παιδιά μπορούν να ανοίγουν και να κλείνουν μόνα τους τη μουσική και τα ηχητικά εφέ και να επιλέγουν τη μουσική.",
      'shots.h': 'Στιγμιότυπα', 'shots.region': 'Εικόνες από την εφαρμογή', 'shots.track': 'Στιγμιότυπα της εφαρμογής. Περιηγήσου με τα πλήκτρα βέλους.', 'shots.prev': 'Προηγούμενη εικόνα', 'shots.next': 'Επόμενη εικόνα', 'shots.dot': 'Εικόνα {n} από {total}',
      s1: '24 πορτάκια και μια έκπληξη', s2: 'Το σπιτάκι γίνεται πιο ζεστό με κάθε πορτάκι', s3: 'Χριστουγεννιάτικη μουσική για επιλογή', s4: 'Στολίζοντας το χριστουγεννιάτικο δέντρο', s5: 'Η δραστηριότητα εξηγείται με εικόνες', s6: 'Φτιάχνοντας έναν χιονάνθρωπο', s7: 'Διακοσμώντας μπισκότα',
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
