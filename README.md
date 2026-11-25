# audimago-web
Öffentliche Audimago-Webseiten und rechtliche Informationen

## Bildnachweis

| Datei | Herkunft |
| --- | --- |
| `assets/kalino-icon.png` (360 px), `assets/favicon.png` (96 px) | Verkleinerte Kopien des Kalino-App-Icons `apps/wichtel-advent/assets/icons/icon.png` aus dem Projekt „Wichtels Adventskalender" (Paket `Wichtels_Adventskalender_App_Icons_FINAL`, 23.11.2026, von der Rechteinhaberin bereitgestellt). Das Bild wurde nach ihrer Angabe mit ChatGPT erstellt; die Herkunftsangaben und die Hinweise zur kommerziellen Nutzung stehen in `apps/wichtel-advent/assets/branding/PROVENANCE.md` des App-Repositorys. |
| `assets/icons/lock.svg`, `music.svg`, `hints.svg`, `gamepad.svg`, `globe.svg`, `progress.svg` | Aus der Icon-Familie der Kalino-App (`apps/wichtel-advent/src/appIcons.ts`, dort als „selbst gezeichnete Vektoren, keine fremden Ressourcen" dokumentiert), unverändert als SVG-Dateien ausgegeben. |
| `assets/icons/door-24-gift.svg` | Eigene Zeichnung vom 23.11.2026 im Stil und in den Farben der Kalino-App-Icon-Familie: Tür mit der Zahl 24 (Abwandlung des App-Symbols `door-star`), ein Plus und ein Geschenk; keine externe Quelle. |
| `assets/icons/mail.svg` | Aus der Icon-Familie der Kalino-App (`appIcons.mail`), unverändert als SVG-Datei ausgegeben. |
| `assets/icons/privacy.svg` | Eigene Zeichnung vom 23.11.2026 im Stil und in den Farben derselben Icon-Familie; keine externe Quelle. |
| `assets/icons/iphone.svg`, `ipad.svg` | Eigene Zeichnungen vom 23.11.2026 im Stil und in den Farben der Kalino-App-Icon-Familie (cremefarbenes Gerät, hellblauer Bildschirm, goldener Stern); keine externe Quelle. |
| `assets/icons/snowglobe.svg` | Eigene Zeichnung vom 23.11.2026 im Stil und in den Farben derselben Icon-Familie; keine externe Quelle. |

Schriften: Es werden nur die Systemschriften der Geräte verwendet (keine Webfonts, keine Drittanbieter-Ressourcen). Der Sternenhimmel besteht aus CSS.

## Bilderkarussell (Startseite)

Das Karussell bleibt verborgen, solange `screenshots/manifest.json` keine Einträge hat. Eigene App-Screenshots hinzufügen:

1. Bilder in `screenshots/` ablegen (JPEG oder WebP, möglichst unter 300 KB, nur eigene Aufnahmen ohne persönliche Daten).
2. In `screenshots/manifest.json` pro Bild einen Eintrag ergänzen:

```json
{ "slides": [
  { "src": "screenshots/01-kalender.jpg", "alt": "Der Holzkalender mit 25 Türchen", "caption": "Der Adventskalender", "width": 2064, "height": 1548 }
] }
```

`width` und `height` (Pixel) verhindern Sprünge beim Laden. Nach dem Eintrag erscheint der Bereich „Einblicke" automatisch.

Soll ein Bild je nach Sprache anders aussehen (etwa mit Text im Bild), steht `src` für alle Sprachen und `srcByLang` überschreibt es für einzelne, zum Beispiel `"srcByLang": { "de": "screenshots/s05-de.jpg" }`. Die Bildunterschriften der Slides stehen in `i18n.js` als `s1`, `s2` usw. in der Reihenfolge des Manifests.

## Sprachen der Startseite

`i18n.js` enthält die Texte der Startseite in dreizehn Sprachen (de, en, fr, es, nl, pt-PT, it, pl, da, sv, nb, fi, el). Die Sprache kommt aus `?lang=`, danach aus der letzten Auswahl (Browser-Speicher `kalino-lang`), sonst aus der Browsersprache, sonst Englisch. Deutsch steht zusätzlich im HTML. Die Bildunterschriften des Karussells stehen unter `s1` bis `s7`, in der Reihenfolge der Bilder in `screenshots/manifest.json`.
