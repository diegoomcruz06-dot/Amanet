# Offene Punkte – Alma Douro

Stand: 29.10.2026 (nach Textüberarbeitung). Nicht geraten, bitte mit Tania klären.

## Erledigt
- WhatsApp-Nummer: +41 76 804 89 76 (gleich wie Telefon, bestätigt) → `src/config.ts`
- Social Media: Instagram @alma.douro, TikTok @almadouro26 → Kontaktseite, Footer, strukturierte Daten
- Seitentexte Serviços, Experiências (Cruzeiros & Comboio), Quintas, Outras descobertas, Parcerias, Contacto: definitive PT-Texte von Tania übernommen

## Offen

| # | Thema | Was fehlt | Wo im Code |
|---|---|---|---|
| 1 | **Logo als Vektor** | Original als SVG/AI/PDF. Aktuell: freigestelltes PNG, automatisch aus dem JPG erzeugt. | `src/assets/logo/`, `public/` |
| 2 | **Adresse Impressum** | Bestätigung: «Alma Douro, A Vesin 22, 1483 Vesin, Suisse» (alte Website), Inhaberin «Tânia Afonso». Noch nicht in den strukturierten Daten. | `src/config.ts` → `ADDRESS` |
| 3 | **Übersetzungen FR/EN** | Alle FR/EN-Texte prüfen → `TRANSLATIONS_REVIEW.md` | `src/i18n/content/` |
| 4 | **Amanet-Texte** | Danke-Seite, 404, Rechtstexte, Buttons → `DRAFTS_REVIEW.md` | `src/i18n/content/contacto.ts`, `legal.ts`, `src/i18n/index.ts` |
| 5 | **Partner auf der Website** | Mit dem neuen Parcerias-Text werden Quinta do Tedo und Quinta da Casa Cimeira nicht mehr namentlich vorgestellt. So gewollt? | `src/i18n/content/parceiros.ts` |
| 6 | **Zugdaten 2027** | Abschnitt «Informações a confirmar para a próxima temporada 2027» wurde auf Wunsch weggelassen. Fahrplan 2027 ergänzen, sobald bestätigt. | `src/i18n/content/experiencias.ts` |
| 7 | **Rechtstexte** | Sorgfältige Entwürfe (nDSG/DSGVO), keine Rechtsberatung. Die Einwilligungs-Checkbox im Formular ist durch den Datenschutzhinweis aus Tanias Text ersetzt; Rechtsgrundlage entsprechend auf «Vertragsanbahnung» angepasst. | `src/i18n/content/legal.ts` |
| 8 | **Zusätzliche Bilder** | Kein Foto von Zug, Schiff aus der Nähe, Weinkeller oder Favaios/Provesende. Eigene Fotos von Tania wären ideal. | `src/assets/images/` |
| 9 | **Netlify-Formular-Benachrichtigung** | Diego richtet im Netlify-Dashboard die E-Mail an `info@alma-douro.com` ein (Forms → Form notifications). | Netlify UI |
