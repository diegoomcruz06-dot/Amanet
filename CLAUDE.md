# AMANET DIGITAL – DESIGN-BRIEFING

Du arbeitest für Amanet Digital, eine junge Webagentur aus Wohlen AG (Schweiz).
Halte dich bei allem, was du gestaltest oder programmierst, strikt an dieses Design-System.

Umsetzung im Repo:
- `assets/css/amanet.css` – Farb-Tokens, Typografie, Buttons, Karten, Badges, Effekte
- `assets/logo/amanet-logo.svg` (mit Rahmen) · `assets/logo/amanet-mark.svg` (ohne Rahmen, für Wasserzeichen)
- `styleguide.html` – Referenzseite aller Komponenten

Neue Seiten binden `assets/css/amanet.css` ein und verwenden nur deren Variablen und Klassen.

## 1. Marke
- Name: Amanet Digital (Logo-Schriftzug: "AMANET" weiss + "DIGITAL" gold)
- Firma: Da Cruz MM (Einzelfirma), Inhaber Diego Oliveira Marques Da Cruz
- Adresse: Bifangstrasse 18, 5610 Wohlen AG
- Tel/WhatsApp: +41 76 566 84 48 · E-Mail: info@amanetdigital.ch · Web: amanetdigital.ch
- Leistungen: Websites · Google Ads · Social Media · Marketing · Werbematerial (Visitenkarten, Flyer)
- Positionierung: Premium, aber nahbar. Klare Fixpreise, alles aus einer Hand, persönlicher Ansprechpartner.
- Zielgruppe: Schweizer KMU, Selbstständige, Startups – auch portugiesischsprachige Community.

## 2. Farben (CSS-Variablen)
```css
:root{
  --black:#0B0B0C;        /* Haupt-Hintergrund */
  --black-2:#141416;      /* Flächen, Karten auf Schwarz */
  --offwhite:#F1F0EA;     /* Text auf Schwarz, helle Karten */
  --white:#F4F2EC;        /* Headlines auf Schwarz */
  --gold:#D4C49C;         /* Akzent, CTAs, Highlights */
  --gold-dark:#7A6A45;    /* Gold auf hellem Grund, kleine Labels */
  --grey:#8D8B85;         /* Sekundärtext, Labels */
  --grey-light:#A9A69D;
  --line:#3E3E44;         /* Linien, Logo-Rahmen */
}
```
- Gold-Verlauf für grosse Headlines: `linear-gradient(180deg,#F3E3B5,#D4C49C 55%,#A8925E)`
- Gold-Glow: text-shadow/drop-shadow `0 0 30px rgba(212,196,156,.35)`
- Grundregel: Schwarz dominiert, Weiss für Text, Gold sparsam als Akzent (max. 1–2 Elemente pro Ansicht).

## 3. Typografie
- Schrift: Poppins (Google Fonts) – Gewichte 300, 400, 500, 700
- Headlines: 700, GROSSBUCHSTABEN, leicht negatives bis 2px Letter-Spacing
- Labels/Overlines: 500, Grossbuchstaben, letter-spacing 8–16px, Farbe --grey oder --gold
- Fliesstext: 400, normal geschrieben, 16–18px Web, Zeilenhöhe 1.6
- Muster: kleine Overline in Weiss/Grau + darunter grosse Headline in Gold
  (z. B. "MEHR" klein → "VERKÄUFE." gross gold)

## 4. Logo (SVG, inline verwenden)
```html
<svg viewBox="-75 -75 150 150" width="64" height="64">
  <rect x="-70" y="-70" width="140" height="140" rx="38" fill="none" stroke="#3E3E44" stroke-width="6"/>
  <path d="M-29 32 L0 -35 L29 32" fill="none" stroke="#D4C49C" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="0" cy="11" r="9.5" fill="#F1F0EA"/>
</svg>
```
- Das goldene "A" mit weissem Punkt ist das Markenzeichen. Darf auch ohne Rahmen gross als
  Wasserzeichen (Opacity 0.08–0.12) im Hintergrund stehen.

## 5. Komponenten
- Buttons primär: Hintergrund --gold, Text --black, font-weight 700, border-radius 100px (Pill)
- Buttons sekundär: transparent, 1px Rahmen --gold, Text --gold
- Karten auf Schwarz: --black-2 oder helle Karte --offwhite mit schwarzem Text, border-radius 24–30px
- Badges/Highlights: schwarze Pill mit goldener Schrift
- Trennlinien: 2–3px, 90–120px breit, --gold, zentriert
- Abstände grosszügig, viel Luft, zentrierte Kompositionen

## 6. Stimmung & Effekte
- Look: dunkel, edel, cineastisch, minimalistisch ("Luxus-Marke, aber Tech")
- Erlaubt: weiche Gold-Glows, feine goldene Staub-/Glut-Partikel, langsamer Glanz-Sweep über Gold-Text,
  sanfte Fade/Scale-Animationen, Film-Grain sehr dezent, Vignette
- Verboten: Glitch-Effekte, RGB-/Chromatic-Aberration, Neonfarben, bunte Farbverläufe,
  Stockfoto-Look, verspielte Icons, Emojis im Design, zu viele Effekte gleichzeitig

## 7. Sprache & Ton
- Deutsch: Kunden werden GESIEZT ("Sie", "Ihr Business")
- Portugiesisch: formell ("o seu negócio", "visite-nos", "esperamos por si")
- Kurz, selbstbewusst, klar. Keine Floskeln, keine übertriebenen Versprechen.
- Keine unbelegten Superlative ("grösste", "beste der Schweiz" usw.).
- Preise transparent (Fixpreise) – nichts verstecken.

## 8. Formate
- Instagram Post: 1080×1350 (4:5) · Story/Reel: 1080×1920 (9:16)
- Web: mobile-first, Desktop max. Containerbreite ca. 1200px
- Druck: in mm mit 3 mm Beschnitt, Schrift in Poppins

## 9. Qualitätscheck vor Abgabe
- Nur die oben definierten Farben verwendet?
- Gold sparsam eingesetzt?
- Alles auf Handy gut lesbar (keine Schrift unter 14px Web / 24px auf Social Media)?
- Sie-Form (DE) bzw. formelles PT korrekt?
- Kontaktangaben korrekt und vollständig?
