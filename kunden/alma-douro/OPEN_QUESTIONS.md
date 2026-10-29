# Offene Punkte – Alma Douro

Stand: 29.10.2026. Nicht geraten, bitte mit Tania klären.

| # | Thema | Was fehlt | Wo im Code |
|---|---|---|---|
| 1 | **WhatsApp-Nummer** | Nummer von Tania (internationales Format, z. B. `41791234567`). Bis dahin führen alle WhatsApp-Buttons auf die Kontaktseite; der Button «WhatsApp» im Footer und auf `/contacto` ist ausgeblendet. | `src/config.ts` → `WHATSAPP_NUMBER` |
| 2 | **Logo als Vektor** | Original als SVG/AI/PDF. Aktuell: freigestelltes PNG, automatisch aus dem JPG (schwarzer Grund) erzeugt. Für Favicon, Header und OG-Bild wäre ein Vektor schärfer. | `src/assets/logo/`, `public/` (Favicons, `og-alma-douro.jpg`) |
| 3 | **Adresse Impressum** | Bestätigung: «Alma Douro, A Vesin 22, 1483 Vesin, Suisse» (alte Website). Inhaberin als «Tânia Afonso» eingetragen – korrekt? Die Adresse steht noch **nicht** in den strukturierten Daten (JSON-LD). | `src/config.ts` → `ADDRESS` |
| 4 | **Freigabe Texte** | Übersetzungen FR/EN der freigegebenen Texte → `TRANSLATIONS_REVIEW.md`. Text-Entwürfe Serviços, Experiências, Descobrir o Douro, Parceiros, Contacto, Rechtstexte → `DRAFTS_REVIEW.md`. | `src/i18n/content/` |
| 5 | **Social Media** | Instagram/Facebook-Links (alte Website hatte nur Platzhalter). Derzeit keine Social-Links auf der Seite. | `src/components/Footer.astro` |
| 6 | **Weitere Partner?** | Aktuell nur Quinta do Tedo und Quinta da Casa Cimeira. Fotos der Partner (mit Nutzungsrecht) würden die Seite aufwerten. | `src/i18n/content/parceiros.ts`, `src/config.ts` → `PARTNERS` |
| 7 | **Rechtstexte** | Impressum und Datenschutz sind sorgfältige Entwürfe (nDSG/DSGVO), aber keine Rechtsberatung. Ggf. kurz juristisch prüfen lassen. | `src/i18n/content/legal.ts` |
| 8 | **Bistro Terrace / Michelin** | Aussage von der alten Website übernommen – noch aktuell? | `parceiros.ts` |
| 9 | **Zusätzliche Bilder** | Kein Foto vom historischen Zug / Weinkeller vorhanden. Es wurden bewusst keine Fremdbilder verwendet (siehe `IMAGE_CREDITS.md`). Eigene Fotos von Tania wären ideal. | `src/assets/images/` |
| 10 | **Netlify-Formular-Benachrichtigung** | Diego richtet im Netlify-Dashboard die E-Mail an `info@alma-douro.com` ein (Forms → Form notifications). | Netlify UI |
