# alma-douro.com

Neue Website für **Alma Douro** (Tânia Afonso) – massgeschneiderte Reisen ins Douro-Tal.
Umsetzung: Amanet Digital. Brief: [`BRIEFING.md`](BRIEFING.md), freigegebene Originaltexte: [`briefing/`](briefing/).

- **Astro** (statisch), kein CMS · **Netlify** (Hosting + Forms)
- Sprachen: **FR** (Hauptsprache, ohne Präfix) · **PT** unter `/pt/` · **EN** unter `/en/` – gleiche Slugs in allen Sprachen
- Keine Cookies, kein Tracking, Schriften selbst gehostet (`@fontsource`) → kein Cookie-Banner nötig

## Befehle

Node **≥ 22.23.4** (Astro 7). Empfohlen: Node 24 (`.nvmrc`).

| Befehl | Zweck |
|---|---|
| `npm install` | Abhängigkeiten installieren |
| `npm run dev` | Entwicklungsserver auf http://localhost:4321 |
| `npm run build` | Statischer Build nach `dist/` |
| `npm run preview` | Build lokal ansehen |
| `npm run review` | `TRANSLATIONS_REVIEW.md` und `DRAFTS_REVIEW.md` aus den Texten neu erzeugen |

## Struktur

```
src/
  config.ts              E-Mail, WhatsApp-Nummer (TODO), Adresse (TODO), Partner-Links
  i18n/index.ts          Sprachen, Slugs, Menü, allgemeine Texte
  i18n/images.ts         Fotos + Alt-Texte in 3 Sprachen
  i18n/content/*.ts      Alle Seitentexte (PT / FR / EN)
  pages/[...lang]/*.astro   Eine Datei pro Seite, erzeugt FR (/), PT (/pt/) und EN (/en/)
  components/, layouts/  Header, Footer, Hero, Bilder, SEO-Kopf (Base.astro)
  styles/global.css      Farben, Typografie, Layout
  assets/images/         Originalfotos (werden beim Build zu AVIF/WebP mit srcset)
public/
  _redirects             301 von der alten Seite + 404 je Sprache
  robots.txt, site.webmanifest, Favicons, og-alma-douro.jpg
```

**Texte ändern:** in `src/i18n/content/<seite>.ts` – jede Seite hat einen `pt`-, `fr`- und `en`-Block. Danach `npm run review`.

**Kontaktdaten:** E-Mail, Telefon/WhatsApp und Social-Media-Links stehen zentral in `src/config.ts`.

**Formular-Vorauswahl:** Die Buttons «Pedir informações» öffnen `/contacto?interesse=cruzeiros` (bzw. `comboio`, `quintas`) und haken die passende Checkbox im Formular an. Die Checkbox-Werte kommen in allen Sprachen auf Portugiesisch bei Netlify an.

## Seiten

| Seite | FR | PT | EN |
|---|---|---|---|
| Startseite | `/` | `/pt/` | `/en/` |
| Über mich | `/sobre` | `/pt/sobre` | `/en/sobre` |
| Leistungen | `/servicos` | `/pt/servicos` | `/en/servicos` |
| Erlebnisse: Kreuzfahrten & historischer Zug (Anker `#cruzeiros`, `#comboio`) | `/experiencias` | `/pt/experiencias` | `/en/experiencias` |
| Erlebnisse: Quintas (nicht im Menü, verlinkt aus Serviços) | `/quintas` | `/pt/quintas` | `/en/quintas` |
| Weitere Entdeckungen («Descobrir o Douro» im Menü) | `/descobrirodouro` | `/pt/descobrirodouro` | `/en/descobrirodouro` |
| Partnerschaften | `/parceiros` | `/pt/parceiros` | `/en/parceiros` |
| Kontakt | `/contacto` | `/pt/contacto` | `/en/contacto` |
| Impressum | `/aviso-legal` | `/pt/aviso-legal` | `/en/aviso-legal` |
| Datenschutz | `/privacidade` | `/pt/privacidade` | `/en/privacidade` |
| Danke (Formular, noindex) | `/obrigado` | `/pt/obrigado` | `/en/obrigado` |
| 404 (noindex) | `/404` | `/pt/404` | `/en/404` |

## SEO

- Eigener `<title>` (≤ 60) und `meta description` (≤ 155) pro Seite und Sprache
- `<html lang>`, `canonical`, `hreflang` (fr, pt-PT, en, x-default → FR)
- Sitemap mit hreflang (`/sitemap-index.xml`, ohne Danke- und 404-Seiten), `robots.txt`
- Open Graph + Twitter Card mit `og-alma-douro.jpg` (1200×630)
- JSON-LD: `TravelAgency` auf allen Seiten, `BreadcrumbList` auf Unterseiten
- Lighthouse mobil (lokal, mit Brotli wie Netlify, 29.10.2026): Performance 96–99, Accessibility, Best Practices und SEO je 100

## Deploy auf Netlify

1. Repository in Netlify verbinden (**Add new site → Import an existing project**).
2. Liegt das Projekt in einem Unterordner (z. B. `kunden/alma-douro` im Amanet-Repo): unter **Build settings → Base directory** `kunden/alma-douro` eintragen. Alles andere kommt aus `netlify.toml` (Build `npm run build`, Publish `dist`, Node 24).
3. Erster Deploy, dann **Forms → Enable form detection** prüfen (Formular heisst `contacto`) und unter **Forms → Form notifications** eine E-Mail an `info@alma-douro.com` einrichten.
4. **Formular testen:** auf der Live-Seite eine Testanfrage senden → erscheint unter **Forms → contacto**. Spam-Schutz: Honeypot-Feld `bot-field`.
5. **Domain:** **Domain management → Add a domain** → `alma-douro.com` (und `www.alma-douro.com`). HTTPS (Let’s Encrypt) aktiviert Netlify automatisch, sobald DNS stimmt.

### DNS für Netlify bei Hostpoint

> **Wichtig: MX-Einträge (E-Mail) bleiben bei Hostpoint und werden nicht verändert.** Nur die Einträge für die Website anpassen. Die Domain zieht gerade von Infomaniak zu Hostpoint – DNS erst nach abgeschlossenem Transfer im Hostpoint Control Panel ändern.

Im Hostpoint Control Panel → **Domains → alma-douro.com → DNS-Einträge**:

| Typ | Name | Wert | Hinweis |
|---|---|---|---|
| `A` | `@` (alma-douro.com) | `75.2.60.5` | Netlify Load Balancer – vor dem Eintragen im Netlify-Dashboard unter *Domain management* gegenprüfen |
| `CNAME` | `www` | `<site-name>.netlify.app` | Name der Netlify-Site |
| `MX` | – | **unverändert lassen** | E-Mail läuft über Hostpoint |
| `TXT` (SPF etc.) | – | **unverändert lassen** | gehört zur E-Mail |

- Bestehende `A`-/`AAAA`-/`CNAME`-Einträge für `@` und `www`, die noch auf das alte Hosting zeigen, durch die Werte oben ersetzen (ein `AAAA`-Eintrag für `@` entfernen, falls vorhanden).
- **Keine** Nameserver auf Netlify umstellen (sonst müssten die MX-Einträge bei Netlify neu gepflegt werden).
- Nach der Umstellung: in Netlify **Primary domain** auf `alma-douro.com` setzen, `www` leitet automatisch weiter. Danach eine Test-E-Mail an `info@alma-douro.com` senden, um zu prüfen, dass die E-Mail weiter funktioniert.

## Weiterleitungen (alte Seite → neu, 301)

`/accueil` → `/` · `/a-propos` → `/sobre` · `/offres-et-programmes` → `/experiencias` · `/nos-partenaires` → `/parceiros` · `/nous-rejoindre` → `/parceiros#tornar-se-parceiro` · `/contact` → `/contacto` · `/privacy-policy` → `/privacidade` · `/terms-of-use` → `/aviso-legal` · `/index.php` → `/` (siehe `public/_redirects`).

## Design

Farben aus dem Logo und der Landschaft: Gold `#C49A45`, helles Gold `#E2C27A`, Tiefbraun `#17130F`, Douro-Blau `#2E4A63`, Rebengrün `#5E6B3A`, Erde `#8A6A4F`, Sand `#F6F1E7`. Für Gold-**Text** auf hellem Grund wird ein dunkleres Gold `#7D5F2A` verwendet (Kontrast 5.3:1, WCAG AA) – das Logo-Gold `#C49A45` hat auf Sand nur 2.3:1 und dient daher nur für Linien, Flächen und Buttons (mit dunklem Text).
Schriften: Cormorant Garamond (Titel, Kursiv für Akzentwörter) und Jost (Text), selbst gehostet, `font-display: swap`, Preload.
Scroll-Fade-ins respektieren `prefers-reduced-motion`.

## Offene Punkte

Siehe [`OPEN_QUESTIONS.md`](OPEN_QUESTIONS.md), Bildquellen in [`IMAGE_CREDITS.md`](IMAGE_CREDITS.md).
