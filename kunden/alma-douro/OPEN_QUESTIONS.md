# Offene Punkte – Alma Douro

Stand: 24.11.2026 (vor dem Livegang). Nicht geraten, bitte mit Tania klären.

## Erledigt
- WhatsApp-Nummer: +41 76 804 89 76 (gleich wie Telefon, bestätigt) → `src/config.ts`
- Social Media: Instagram @alma.douro, TikTok @almadouro26 → Kontaktseite, Footer, strukturierte Daten
- Mentions légales + Conditions générales (eine Seite) und Politique de confidentialité: freigegebener Text vom 22.11.2026 übernommen (FR/PT, EN übersetzt), Lücken gefüllt. Netlify und Amanet nur in der Datenschutzerklärung (Punkt 4), Vermerk «Designed & Hosted by Amanet Digital» im Footer. Bildnachweise Wikimedia bleiben in den Mentions légales (Lizenzpflicht).
- Adresse «Alma Douro, Tânia Afonso, A Vesin 22, 1483 Vesin, Suisse» bestätigt → Impressum, Datenschutz, strukturierte Daten
- FR: «quinta» → «domaine viticole» (Eigennamen bleiben)
- Seitentexte Serviços, Experiências (Cruzeiros & Comboio), Quintas, Outras descobertas, Parcerias, Contacto: definitive PT-Texte von Tania übernommen

## Offen

| # | Thema | Was fehlt | Wo im Code |
|---|---|---|---|
| 1 | **Logo als Vektor** | Original als SVG/AI/PDF. Aktuell: freigestelltes PNG, automatisch aus dem JPG erzeugt. | `src/assets/logo/`, `public/` |
| 3 | **Übersetzungen FR/EN** | Alle FR/EN-Texte prüfen → `TRANSLATIONS_REVIEW.md` | `src/i18n/content/` |
| 5 | **Partner auf der Website** | Mit dem neuen Parcerias-Text werden Quinta do Tedo und Quinta da Casa Cimeira nicht mehr namentlich vorgestellt. So gewollt? | `src/i18n/content/parceiros.ts` |
| 6 | **Zugdaten 2027** | Abschnitt «Informações a confirmar para a próxima temporada 2027» wurde auf Wunsch weggelassen. Fahrplan 2027 ergänzen, sobald bestätigt. | `src/i18n/content/experiencias.ts` |
| 8 | **Zusätzliche Bilder** | Kein Foto von Zug, Schiff aus der Nähe, Weinkeller oder Favaios/Provesende. Eigene Fotos von Tania wären ideal. | `src/assets/images/` |
| 9 | **Netlify-Formular-Benachrichtigung** | Diego richtet im Netlify-Dashboard die E-Mail an `info@alma-douro.com` ein (Forms → Form notifications). | Netlify UI |
