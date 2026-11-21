# TheCraftedTech — Website

Quellcode der persönlichen Webseite von **TheCraftedTech**: ein Profil mit Überblick über meine Open-Source-Projekte, erreichbar unter

**<https://thecraftedtech.github.io/>**

Die Seite ist bewusst schlank: reines HTML, CSS und ein wenig JavaScript — **kein Build-Schritt, keine Frameworks, keine externen Dienste** (auch die Schriften liegen lokal). GitHub Pages liefert den Ordner direkt aus.

## Seiten

| Seite | Datei | Inhalt |
| --- | --- | --- |
| Start | `index.html` | Profil, Projekt-Teaser, Arbeitsweise |
| Projekte | `projekte/index.html` | Übersicht aller Projekte |
| OpenCue | `projekte/opencue.html` | Details zum DMX-Lichtstellpult für Windows |
| Home TV | `projekte/hometv.html` | Details zur Live-TV-App für den Fire TV |
| 404 | `404.html` | Eigene „Nicht gefunden“-Seite |

Dazu `sitemap.xml` und `robots.txt` für Suchmaschinen.

## Features

- Responsives, dunkles Design mit Hover-Effekten, Scroll-Animationen und Lesefortschritt
- **Teilen-Menü** mit Vorschaubild (WhatsApp, Telegram, X, LinkedIn, E-Mail, Link kopieren, native Teilen-Funktion des Geräts)
- Eigene **Vorschaubilder** (1200 × 630) für Link-Vorschauen in Messengern und sozialen Netzwerken
- Lightbox für Screenshots, Kopieren-Buttons für Code-Blöcke
- SEO: Meta-Beschreibungen, Canonical-URLs, Open Graph, Twitter Cards, strukturierte Daten (JSON-LD), Sitemap
- Barrierefreiheit: Tastatursteuerung, Fokus-Stile, `prefers-reduced-motion` wird respektiert

## Projektstruktur

```
.
├── index.html               Startseite
├── projekte/                Projektübersicht und Detailseiten
├── assets/
│   ├── css/site.css         gemeinsames Stylesheet
│   ├── js/main.js           Icons, Teilen-Menü, Lightbox, Animationen …
│   ├── fonts/               Plus Jakarta Sans, IBM Plex Mono (lokal eingebunden)
│   └── img/                 Logo, Screenshots, og/ (Vorschaubilder)
├── tools/og/                Vorlage + Skript für die Vorschaubilder
├── 404.html · sitemap.xml · robots.txt
└── README.md
```

## Lokal ansehen

Die Seiten funktionieren auch direkt per Doppelklick auf `index.html`. Mit einem lokalen Server verhält sich alles wie online:

```bash
python -m http.server 8000
# → http://localhost:8000
```

## Ein neues Projekt hinzufügen

1. `projekte/opencue.html` kopieren, z. B. nach `projekte/neues-projekt.html`, und Texte, Bilder, Titel, Beschreibung sowie die `canonical`-URL anpassen. Das JSON-LD im `<head>` (Name, Lizenz, Download-Link) ebenfalls.
2. In `projekte/index.html` eine Karte (`<a class="p-card …">`) ergänzen, bei Bedarf auch auf der Startseite.
3. Neues Vorschaubild erzeugen (siehe unten) und in `og:image` / `twitter:image` / `data-share-image` eintragen.
4. URL in `sitemap.xml` aufnehmen.

Die Navigation und der Footer nennen **keine einzelnen Projekte** — dort muss also nichts angepasst werden.

## Vorschaubilder (Social Share)

Die Bilder in `assets/img/og/` entstehen aus der HTML-Vorlage `tools/og/og.html`. Neu erzeugen (benötigt Python 3, [Pillow](https://pypi.org/project/pillow/) und Edge oder Chrome):

```bash
pip install pillow
python tools/og/make_og.py              # alle
python tools/og/make_og.py opencue      # nur eine Variante
```

Für eine neue Seite in `og.html` einen Block (`.only-NAME`, `.v-NAME`) ergänzen und den Namen in `make_og.py` unter `VARIANTS` eintragen. Zum Testen der Vorschau eignen sich z. B. der [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) oder der [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

## Suchmaschinen

- `sitemap.xml` in der [Google Search Console](https://search.google.com/search-console) unter **Sitemaps** einreichen (`sitemap.xml`).
- Die Inhaberschaft ist über das `google-site-verification`-Meta-Tag in `index.html` bestätigt — **das Tag nicht entfernen**.
- Beim Ändern von Seiten bitte `<lastmod>` in der Sitemap aktualisieren.

## Schriften

Plus Jakarta Sans und IBM Plex Mono stehen unter der [SIL Open Font License 1.1](https://openfontlicense.org/) und werden lokal aus `assets/fonts/` geladen.

## Projekte

- **OpenCue** — Open-Source-Lichtstellpult für DMX: <https://github.com/TheCraftedTech/opencue>
- **Home TV** — Live-TV für den Fire TV: <https://github.com/TheCraftedTech/HomeTV>

Alle Repositories: <https://github.com/TheCraftedTech?tab=repositories>
