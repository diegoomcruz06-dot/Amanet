# Auftrag: Website alma-douro.com (Neubau)

Kunde: **Alma Douro**, Tânia Afonso. Agentur: Amanet Digital (Diego).
Stand: 29.10.2026. Dieses Dokument ist der vollständige Brief. Lies zuerst alles, dann die Dateien in `content/`.

---

## 1. Ziel
Die bestehende Seite alma-douro.com wird **komplett neu** gebaut. Alma Douro organisiert massgeschneiderte Reisen ins Douro-Tal (Portugal) für Gäste aus der Schweiz und Europa, von A bis Z, mit lokalen Partnern. Flüge bucht der Gast selbst.

Die Website soll Vertrauen schaffen und Anfragen bringen. Tania ist das Gesicht: persönlich, warm, kompetent.

**Hauptaktion auf jeder Seite:** Anfrage stellen (Formular oder WhatsApp).

---

## 2. Technik (fix)
- **Astro** (statischer Build), kein CMS.
- **Hosting: Netlify.** `netlify.toml` und `public/_redirects` anlegen.
- **Kontaktformular: Netlify Forms** (`data-netlify="true"`, Honeypot-Feld, Danke-Seite in allen 3 Sprachen). Benachrichtigung an `info@alma-douro.com` richtet Diego im Netlify-Dashboard ein.
- **Bilder:** `astro:assets` (`<Image>` / `<Picture>`), Ausgabe in AVIF/WebP, responsive `srcset`, `loading="lazy"` ausser beim Hero-Bild (dieses mit `fetchpriority="high"`). Originale liegen in `assets/images/`.
- **Keine** Tracking-Skripte, keine externen Fonts von Google-Servern (Fonts selbst hosten, z. B. via `@fontsource`). Dann braucht es kein Cookie-Banner.
- Kein jQuery, minimal JavaScript. Mobile Menü mit wenig JS.
- Repository sauber strukturieren, README mit Befehlen (`npm run dev`, `npm run build`, Deploy).

### Domain und E-Mail (wichtig, nichts kaputt machen)
- Die Domain alma-douro.com zieht gerade von Infomaniak zu **Hostpoint**. Die E-Mails (`info@alma-douro.com`) laufen danach bei Hostpoint.
- Für die Website nur die **A-/CNAME-Einträge** auf Netlify zeigen lassen. **MX-Einträge nicht anfassen.**
- Im README eine kurze Anleitung «DNS für Netlify bei Hostpoint» schreiben, mit dem Hinweis: MX bleibt bei Hostpoint.

---

## 3. Sprachen und URLs
- **Französisch = Hauptsprache, ohne Präfix.** Portugiesisch unter `/pt/`, Englisch unter `/en/`.
- **Gleiche Slugs in allen Sprachen** (so von der Kundin gewünscht):

| Seite | FR (Hauptsprache) | PT | EN |
|---|---|---|---|
| Startseite (Landingpage) | `/` | `/pt/` | `/en/` |
| Über mich | `/sobre` | `/pt/sobre` | `/en/sobre` |
| Leistungen | `/servicos` | `/pt/servicos` | `/en/servicos` |
| Erlebnisse | `/experiencias` | `/pt/experiencias` | `/en/experiencias` |
| Das Douro entdecken | `/descobrirodouro` | `/pt/descobrirodouro` | `/en/descobrirodouro` |
| Partner | `/parceiros` | `/pt/parceiros` | `/en/parceiros` |
| Kontakt | `/contacto` | `/pt/contacto` | `/en/contacto` |

Zusätzlich nötig: Impressum und Datenschutz (siehe Punkt 8) sowie eine Danke-Seite fürs Formular.

**Menübezeichnungen:**
- FR: Accueil · À propos · Services · Expériences · Découvrir le Douro · Partenaires · Contact
- PT: Início · Sobre · Serviços · Experiências · Descobrir o Douro · Parceiros · Contacto
- EN: Home · About · Services · Experiences · Discover the Douro · Partners · Contact

**Sprachwechsler** im Header (FR / PT / EN), der auf die gleiche Seite in der anderen Sprache führt.

**Übersetzung:** Die freigegebenen Texte sind auf **Portugiesisch** (`content/pt/`). Übersetze sie hochwertig und natürlich nach FR und EN, nicht wörtlich. Ton: warm, persönlich, «vous»/«you», gleiche Länge wie das Original. Alle Übersetzungen in einer Datei `TRANSLATIONS_REVIEW.md` zusätzlich auflisten, damit Tania sie prüfen kann.

---

## 4. Inhalte pro Seite

### `/` Startseite (Landingpage)
Text komplett in `content/pt/inicial.md` (freigegeben). Aufbau in dieser Reihenfolge:
1. Hero: «Descubra o Douro. / Viva a sua própria história.», Einleitung, Button → Kontakt.
2. «A sua viagem começa com uma conversa», mit kleinem Porträt (Ausschnitt aus `tania-e-marido-rio-douro.jpg`, nur Tania, oder ganzes Bild) → Link «Sobre».
3. «O que gostaria de descobrir?»: 4 Karten (Rio, Quintas, Comboio histórico, Estadia), Button «Explorar as experiências» → `/experiencias`.
4. «Cada detalhe preparado…» (Reisedossier und Begleitung während der Reise).
5. «Como funciona?»: 3 Schritte.
6. Schluss-CTA «Vamos dar vida à sua próxima viagem?» → Kontakt und WhatsApp.
7. Footer-Signatur: «Alma Douro — uma ponte entre a Suíça e o coração do Douro.»

### `/sobre`
Text komplett in `content/pt/sobre.md` (freigegeben). **Die Personenbilder gehören hierher:** `tania-e-marido-rio-douro.jpg` (Tania mit ihrem Mann am Douro) und `miradouro-coracao-do-douro.jpg` (Herz-Aussichtspunkt). Zitat «Uma ponte entre a Suíça que me formou e o Douro que me transformou.» als grosses Pull-Quote gestalten.

### `/servicos` (Text-Entwurf durch dich)
Was Tania konkret macht, abgeleitet aus den freigegebenen Texten:
- Persönliches Erstgespräch und Planung nach Wünschen und Budget
- Organisation von A bis Z mit lokalen Partnern: Transfer ab Flughafen, Unterkunft, Besuche, Erlebnisse
- Persönliches Reisedossier (Zeiten, Adressen, Kontakte, Reservationen, nützliche Hinweise)
- Begleitung und Erreichbarkeit während des Aufenthalts
- Nicht enthalten: Flugtickets
- Für wen: zu zweit, Familie, Freunde
- Ablauf in 3 Schritten (wie Startseite) + CTA

### `/experiencias` (Text-Entwurf durch dich)
Die 4 Themen ausführlicher: Douro vom Fluss aus (Bootsfahrten), Quintas, Wein und Genuss, historische Zugfahrt, Unterkunft. Dazu als konkrete Beispiele die **echten Partner** aus `content/referencia-site-antigo/` (Quinta do Tedo, Quinta da Casa Cimeira). Jede Karte endet mit «Anfrage stellen».

### `/descobrirodouro` (Text-Entwurf durch dich)
Kleiner Regionsführer, der Lust macht und für SEO wertvoll ist: Lage, Landschaft (Terrassen-Weinberge, Fluss), beste Reisezeit (z. B. Weinlese), Anreise (Flughafen Porto), typische Orte und Aussichtspunkte, Essen und Wein. **Nur allgemein bekannte, überprüfbare Fakten.** Wenn du dir bei einem Fakt nicht sicher bist, lass ihn weg.

### `/parceiros` (Text-Entwurf durch dich)
- Partner Quinta do Tedo und Quinta da Casa Cimeira: Texte aus `content/referencia-site-antigo/` modernisieren und übersetzen, mit Link auf die Partner-Website (`rel="noopener"`).
- Abschnitt «Tornar-se parceiro»: aus dem alten «Nous rejoindre»-Text (Warum, für wen, 4 Schritte) + CTA Kontakt.

### `/contacto`
- Einleitung (warm, persönlich, im Ton der freigegebenen Texte)
- Formular (Netlify Forms): Name, E-Mail, Telefon (optional), Reisezeitraum (optional), Anzahl Personen (optional), Nachricht, Einwilligung Datenschutz (Checkbox). Honeypot gegen Spam.
- E-Mail: **info@alma-douro.com**
- WhatsApp-Button: `https://wa.me/<NUMMER>`. **Nummer fehlt noch.** Als Konstante `WHATSAPP_NUMBER` in einer Config-Datei mit `TODO` anlegen.

### Regeln für alle Text-Entwürfe
- **Nichts erfinden:** keine Preise, keine Zahlen, keine Kundenbewertungen, keine weiteren Partner, keine Auszeichnungen.
- Ton wie die freigegebenen Texte: «ich» (Tania), warm, ruhig, persönlich.
- Alle Entwürfe in `DRAFTS_REVIEW.md` auflisten (Seite, Sprache), damit Tania sie freigeben kann.

---

## 5. Design
**Stil:** elegant, einladend (acolhedor), modern, einfach zu bedienen. Farben des Douro, passend zum Logo.

**Logo:** `assets/images/logo-alma-douro-preto.jpg`. Goldenes Monogramm (A, Herz mit Fluss, Traube, D) und «ALMA DOURO» in Antiqua-Versalien, auf schwarzem Grund.
- Für den hellen Header eine **freigestellte Version** erzeugen, z. B. als PNG mit Transparenz oder nachgezeichnetes SVG.
- **Hinweis an Diego:** Die Kundin soll wenn möglich das Original als Vektor (SVG/AI/PDF) liefern.

**Farbvorschlag** (Gold aus dem Logo + Landschaft der Fotos):
- Gold `#C49A45` (Akzente, Linien, Buttons), helles Gold `#E2C27A`
- Tiefschwarz/Braun `#17130F` (Text, dunkle Sektionen)
- Douro-Blau `#2E4A63` (Fluss)
- Rebengrün `#5E6B3A`
- Schiefer/Erde `#8A6A4F`
- Creme/Sand `#F6F1E7` (Hintergrund), Weiss

**Schriften:** elegante Serif für Titel, passend zum Logo (z. B. *Cormorant Garamond*), dazu eine klare Sans für Text (z. B. *Jost* oder *Inter*). Kursiv-Serif für Akzentwörter. Selbst gehostet.

**Gestaltung:**
- Grosse, ruhige Fotos, viel Weissraum, feine Goldlinien.
- Dezente Animationen (Fade-in beim Scrollen), mit `prefers-reduced-motion` ausschaltbar.
- Header schlank, auf Mobile ein Burger-Menü. WhatsApp-Button auf Mobile unten rechts sticky.
- Mobile first. Prüfen bei 375, 768 und 1280 px.
- Barrierefreiheit: Kontrast nach WCAG AA, Fokus-Zustände, Alt-Texte in allen 3 Sprachen, korrekte Überschriften-Hierarchie.

---

## 6. Bilder

| Datei | Inhalt | Vorschlag Einsatz |
|---|---|---|
| `douro-rio-cruzeiro-vista-aerea.jpg` | Fluss von oben mit Ausflugsschiff | Hero Startseite **oder** Karte «O Douro a partir do rio» |
| `douro-vale-ponte-pinhao.jpg` | Tal mit Brücke, Terrassen, Himmel (Hochformat) | Hero Startseite (mobil sehr stark), «Descobrir o Douro» |
| `douro-socalcos-vila-rio.jpg` | Terrassen-Weinberge, Dorf am Fluss | «Quintas, vinhos e sabores», «Descobrir o Douro» |
| `douro-vista-terraco-manha.jpg` | Blick von einer Terrasse auf den Fluss, Morgenlicht | «Uma estadia para aproveitar», Servicos |
| `tania-e-marido-rio-douro.jpg` | Tania und ihr Mann am Fluss (Selfie) | **nur /sobre** (+ Porträt-Ausschnitt Startseite) |
| `miradouro-coracao-do-douro.jpg` | Herz-Skulptur «Coração do Douro» mit Blick ins Tal | **/sobre**, evtl. Schluss-CTA |
| `logo-alma-douro-preto.jpg` | Logo | Header, Footer, Favicon, OG-Bild |

**Zusätzliche Douro-Bilder** (z. B. historischer Zug, Weinkeller) nur, wenn die **Lizenz eine kommerzielle Nutzung klar erlaubt**: Unsplash, Pexels oder Wikimedia Commons mit CC0/CC-BY. Jede Quelle mit Lizenz und Urheber in `IMAGE_CREDITS.md` festhalten, CC-BY-Bilder auf der Seite korrekt beschriften. Keine Bilder von Google oder fremden Websites.

---

## 7. SEO (muss einwandfrei sein)
- Pro Seite und Sprache eigener `<title>` (≤ 60 Zeichen) und `meta description` (≤ 155 Zeichen), in der jeweiligen Sprache.
- `<html lang="fr|pt-PT|en">`, `hreflang`-Links für fr, pt-PT, en + `x-default` (→ FR), `canonical` auf jeder Seite.
- Sitemap (`@astrojs/sitemap` mit i18n), `robots.txt` mit Sitemap-Link.
- Open Graph und Twitter Cards mit eigenem OG-Bild (1200×630, Logo + Douro-Foto).
- Strukturierte Daten (JSON-LD): `TravelAgency` (oder `LocalBusiness`) mit Name, Logo, E-Mail, Sprachen, Gebiet Douro; `BreadcrumbList` auf Unterseiten.
- Genau eine `h1` pro Seite, saubere Überschriften-Hierarchie, sprechende Alt-Texte.
- Core Web Vitals: Lighthouse ≥ 95 in allen Kategorien (mobil). Bilder optimiert, Fonts mit `font-display: swap` und Preload für die Titel-Schrift.
- Favicon-Set + `site.webmanifest`.
- **301-Weiterleitungen** von der alten Seite in `public/_redirects`:
  - `/accueil` → `/`
  - `/a-propos` → `/sobre`
  - `/offres-et-programmes` → `/experiencias`
  - `/nos-partenaires` → `/parceiros`
  - `/nous-rejoindre` → `/parceiros#tornar-se-parceiro`
  - `/contact` → `/contacto`
  - `/privacy-policy` → Datenschutzseite
  - `/terms-of-use` → Impressum
  - `/index.php` → `/`
- Eigene 404-Seite in 3 Sprachen.

---

## 8. Rechtliches (Schweiz)
- **Impressum** und **Datenschutzerklärung (nDSG, auch DSGVO für EU-Gäste)** in 3 Sprachen, verlinkt im Footer. Inhalt: Netlify als Hosting, Netlify Forms für Anfragen, keine Cookies, kein Tracking.
- Adresse im Impressum laut alter Seite: Alma Douro, A Vesin 22, 1483 Vesin, Suisse. **Mit `TODO: von Tania bestätigen` markieren.**
- Formular nur mit Einwilligung zur Datenschutzerklärung absenden.

---

## 9. Offene Punkte (in `OPEN_QUESTIONS.md` sammeln, nicht raten)
1. WhatsApp-Nummer von Tania
2. Logo als Vektor (SVG/AI/PDF)
3. Bestätigung der Adresse fürs Impressum
4. Freigabe der Übersetzungen FR/EN und der Text-Entwürfe (Servicos, Experiencias, Descobrir, Parceiros, Contacto)
5. Instagram/Facebook-Links (auf der alten Seite waren nur Platzhalter)
6. Weitere Partner?

---

## 10. Abnahme-Checkliste
- [ ] 7 Seiten × 3 Sprachen + Impressum, Datenschutz, Danke, 404
- [ ] Sprachwechsler führt auf die gleiche Seite
- [ ] Formular-Test über Netlify erfolgreich (Testeintrag sichtbar)
- [ ] Lighthouse mobil ≥ 95 (Performance, Accessibility, Best Practices, SEO)
- [ ] hreflang, canonical, Sitemap, robots, OG geprüft
- [ ] Alte URLs leiten per 301 weiter
- [ ] Keine erfundenen Fakten, alle Entwürfe in `DRAFTS_REVIEW.md`
- [ ] Bildquellen in `IMAGE_CREDITS.md`
- [ ] MX-Einträge der Domain unverändert

---

## Dateien in diesem Ordner
- `content/pt/inicial.md`: freigegebener Text der Startseite
- `content/pt/sobre.md`: freigegebener Text «Sobre»
- `content/referencia-site-antigo/`: Texte und Struktur der alten Seite (Partner, Redirects)
- `assets/images/`: Fotos der Kundin + Logo
- `vorher/`: Scroll-Video und Screenshot der alten Startseite. Das ist **nicht** für die Website gedacht, sondern für ein späteres Vorher-Nachher-Video.
