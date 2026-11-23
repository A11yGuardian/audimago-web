# audimago-web
Öffentliche Audimago-Webseiten und rechtliche Informationen

## Bildnachweis

| Datei | Herkunft |
| --- | --- |
| `assets/kalino-icon.png` (360 px), `assets/favicon.png` (96 px) | Verkleinerte Kopien des Kalino-App-Icons `apps/wichtel-advent/assets/icons/icon.png` aus dem Projekt „Wichtels Adventskalender" (Paket `Wichtels_Adventskalender_App_Icons_FINAL`, 23.11.2026, von der Rechteinhaberin bereitgestellt). Das Bild wurde nach ihrer Angabe mit ChatGPT erstellt; die Herkunftsangaben und die Hinweise zur kommerziellen Nutzung stehen in `apps/wichtel-advent/assets/branding/PROVENANCE.md` des App-Repositorys. |

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
