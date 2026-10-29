# Auftrag für Claude Code: Textüberarbeitungen Alma Douro Website

Diese ZIP enthält die überarbeiteten Texte (Portugiesisch, pt-PT) für sechs Seiten der Website **Alma Douro**.
Bitte die bestehenden Texte auf der Website durch diese Versionen ersetzen.

## Inhalt

| Datei (`texte/`) | Seite auf der Website |
|---|---|
| `01-servicos.md` | Serviços |
| `02-experiencias-cruzeiros-comboio-historico.md` | Experiências – Cruzeiros & Comboio histórico |
| `03-experiencias-quintas.md` | Experiências – Quintas |
| `04-outras-descobertas-do-douro.md` | Outras descobertas do Douro |
| `05-parcerias.md` | Parcerias |
| `06-contacto.md` | Contacto (inkl. Formular) |

`original-docx/` enthält die Original-Word-Dateien als Referenz (gleicher Inhalt, falls bei der Formatierung etwas unklar ist).

## Vorgehen

1. Projektstruktur ansehen und für jede Datei die passende Seite / Komponente / Übersetzungsdatei finden.
2. Texte **wortgetreu** übernehmen (Akzente, Gedankenstriche „–“ und Satzzeichen nicht verändern). Keine Umformulierungen.
3. Bestehendes Layout, Styling und Komponenten beibehalten; nur Inhalte austauschen bzw. Abschnitte ergänzen/entfernen, wo der neue Text es verlangt.
4. Fett gedruckte Zeilen = Überschriften/Zwischentitel (Hierarchie sinnvoll ans bestehende Design anpassen). Kursiv = Hinweis-/Kleingedrucktes.
5. Text in eckigen Klammern, z. B. `[Descobrir os cruzeiros]`, und Zeilen „Botão: …“ = **Button** mit genau dieser Beschriftung.
6. Nach den Änderungen: Build/Dev-Server starten, alle sechs Seiten prüfen (Desktop + Mobile), und eine kurze Zusammenfassung der geänderten Dateien geben.

## Redaktionelle Anweisungen in den Texten (NICHT als Text übernehmen)

- **Serviços:** Die Zeilen „Um botao que leva o cliente à pagina das experiencias“ bzw. „… à pagina do formulario de contacto“ sind Anweisungen, kein Seitentext. Umsetzen als Links:
  - `[Descobrir os cruzeiros]` → Seite Cruzeiros & Comboio histórico (Anker auf Abschnitt Cruzeiros, falls möglich)
  - `[Saber mais sobre o comboio histórico]` → gleiche Seite, Anker auf Abschnitt Comboio histórico
  - `[Explorar quintas e sabores]` → Seite Experiências – Quintas
  - `[Quero preparar a minha experiência no Douro]` → Kontaktseite / Formular
  - Abschnitt „Entre paisagens e aldeias“ hat keinen Button. Falls im Design üblich, optional auf „Outras descobertas do Douro“ verlinken – sonst ohne Button lassen.
- **Quintas:** `[Quero descobrir estas experiências]` → Kontaktseite / Formular.
- **Cruzeiros/Comboio:** Alle „Pedir informações“-Buttons → Kontaktseite / Formular (wenn möglich mit vorausgewählter Checkbox „Cruzeiros no Douro“ bzw. „Comboio histórico“). „Descobrir o comboio histórico“ → Anker auf den Abschnitt Comboio histórico bzw. Kontakt, je nach bestehender Logik.
- **Parcerias:** `[Propor uma parceria]` → `mailto:info@alma-douro.com` (oder Kontaktformular, falls so bereits gelöst).
- **Contacto:** `[Enviar o meu pedido]` ist der Submit-Button des Formulars.

## Kontaktformular (Seite Contacto)

Felder gemäss `06-contacto.md` umsetzen:
- Nome, E-mail, Telefone
- „Quando gostaria de viajar?“ (Textfeld, mit Hilfetext darunter)
- „Quantas pessoas vão viajar?“ (Textfeld, mit Hilfetext)
- „O que gostaria de descobrir?“ → **Checkboxen** (Mehrfachauswahl) mit den 7 Optionen
- „Qual é o orçamento aproximado para a estadia? — opcional“ (optional, mit Hilfetext)
- „A sua mensagem“ (Textarea, mit Hilfetext)
- Datenschutzhinweis (kursiv) mit Link auf die bestehende Política de Privacidade
- Bestehende Formular-Backend-/Versandlogik weiterverwenden; neue Felder dort mit einbinden.

Kontaktdaten: E-Mail `info@alma-douro.com` (mailto), Telefon `+41 76 804 89 76` (tel:+41768048976), Instagram `@alma.douro` (https://www.instagram.com/alma.douro/), TikTok `@almadouro26` (https://www.tiktok.com/@almadouro26).

## Vor dem Übernehmen beim Nutzer nachfragen

Einige Sätze in `02-experiencias-cruzeiros-comboio-historico.md` klingen nach internen Notizen statt nach Kundentext. Bitte **vor der Umsetzung kurz nachfragen**, ob diese wirklich auf die Website sollen:
- „Modalidade verificada: segunda a sexta-feira.“ (mehrfach)
- Abschnitt „Informações a confirmar para a próxima temporada 2027“, besonders der Satz „Estes horários não devem ser confirmados para 2027.“
- „A assistência anunciada pelo vendedor está limitada ao cruzeiro“ (ohne Schlusspunkt)

Ausserdem: In `02-…` sind „Cruzeiros com partida de Gaia“, „Comboio histórico do Douro“ und „Cruzeiro e comboio histórico“ Zwischentitel (fett), die die Seite in Bereiche gliedern.
