// Erzeugt TRANSLATIONS_REVIEW.md und DRAFTS_REVIEW.md direkt aus den Texten in src/i18n/content.
// Aufruf: npm run review   (Node ≥ 22.18, liest die .ts-Dateien ohne Build)
import { writeFileSync } from 'node:fs';
import { home } from '../src/i18n/content/home.ts';
import { sobre } from '../src/i18n/content/sobre.ts';
import { servicos } from '../src/i18n/content/servicos.ts';
import { experiencias } from '../src/i18n/content/experiencias.ts';
import { quintas } from '../src/i18n/content/quintas.ts';
import { descobrir } from '../src/i18n/content/descobrir.ts';
import { parceiros } from '../src/i18n/content/parceiros.ts';
import { contacto, obrigado, notFound } from '../src/i18n/content/contacto.ts';
import { avisoLegal, privacidade } from '../src/i18n/content/legal.ts';
import { UI, NAV } from '../src/i18n/index.ts';

const clean = (s) => String(s).replace(/<[^>]+>/g, '').replace(/\{(\w+)\}/g, '[$1]');

function rows(pt, fr, en, path = []) {
  if (typeof pt === 'string') return [{ path: path.join(' › '), pt, fr, en }];
  if (Array.isArray(pt)) return pt.flatMap((v, i) => rows(v, fr?.[i], en?.[i], [...path, String(i + 1)]));
  if (pt && typeof pt === 'object') return Object.keys(pt).flatMap((k) => rows(pt[k], fr?.[k], en?.[k], [...path, k]));
  return [];
}

function section(title, page, note) {
  let out = `## ${title}\n\n${note ? `> ${note}\n\n` : ''}`;
  for (const r of rows(page.pt, page.fr, page.en)) {
    if (!r.pt) continue;
    out += `**${r.path}**\n\n- PT: ${clean(r.pt)}\n- FR: ${clean(r.fr)}\n- EN: ${clean(r.en)}\n\n`;
  }
  return out;
}

const head = (title, intro) => `# ${title}\n\nAlma Douro · alma-douro.com · Stand: ${new Date().toISOString().slice(0, 10)}\n\n${intro}\n\n---\n\n`;

const translations =
  head(
    'Übersetzungen zur Prüfung (FR / EN)',
    'Die PT-Texte sind von Tania freigegeben und unverändert übernommen. FR (Hauptsprache) und EN sind sinngemäss übersetzt, nicht wörtlich. Bitte jede Zeile prüfen und Änderungen direkt hier markieren.\n\nHinweis: «dossier de viagem» ist auf Französisch als «carnet de voyage» übersetzt (üblicher Begriff), auf Englisch als «travel dossier».\n\nZeilen `title` und `description` (Seitentitel und Google-Beschreibung) sowie `eyebrow` (kleine Überzeile) hat Amanet ergänzt; sie stehen nicht in Tanias Texten.'
  ) +
  section('Startseite (`/`, `/pt/`, `/en/`)', home, 'Von Amanet ergänzt (nicht im freigegebenen Text): Seitentitel, Meta-Beschreibung, Overline «Alma Douro» und der Link «Conheça a minha história».') +
  section('Sobre (`/sobre`)', sobre, 'Die Formulierungen «Sobre Alma Douro» (Seitentitel), «Fale-me da sua viagem» (Button) sowie Seitentitel/Meta-Beschreibung sind von Amanet ergänzt.') +
  section('Serviços (`/servicos`)', servicos) +
  section('Experiências – Cruzeiros & Comboio histórico (`/experiencias`)', experiencias, 'Auf Wunsch weggelassen (interne Notizen): «Modalidade verificada: segunda a sexta-feira.», Abschnitt «Informações a confirmar para a próxima temporada 2027», «A assistência anunciada pelo vendedor está limitada ao cruzeiro». Zeilen `interest` sind technisch (Vorauswahl im Formular), kein Seitentext.') +
  section('Experiências – Quintas (`/quintas`)', quintas) +
  section('Outras descobertas do Douro (`/descobrirodouro`)', descobrir) +
  section('Parcerias (`/parceiros`)', parceiros, '`mailSubject` = Betreff der E-Mail beim Button «Propor uma parceria».') +
  section('Contacto (`/contacto`)', contacto) +
  section('Menü', { pt: NAV.map((n) => n.label.pt), fr: NAV.map((n) => n.label.fr), en: NAV.map((n) => n.label.en) });

const drafts =
  head(
    'Text-Entwürfe von Amanet zur Freigabe',
    'Die Seitentexte stammen jetzt alle von Tania (siehe TRANSLATIONS_REVIEW.md). Hier stehen nur noch die Texte, die Amanet Digital entworfen hat: Danke-Seite, 404-Seite, Rechtstexte und allgemeine Texte (Header, Footer, Buttons). Bitte prüfen und freigeben.'
  ) +
  section('Danke-Seite (`/obrigado`)', obrigado) +
  section('404-Seite', notFound) +
  section('Aviso legal / Impressum (`/aviso-legal`)', avisoLegal, 'Rechtstexte: Entwurf, keine Rechtsberatung. [address] = Adresse aus src/config.ts, [email] = info@alma-douro.com, [phone] = +41 76 804 89 76.') +
  section('Política de privacidade (`/privacidade`)', privacidade) +
  section('Allgemeine Texte (Header, Footer, Buttons)', UI);

writeFileSync(new URL('../TRANSLATIONS_REVIEW.md', import.meta.url), translations);
writeFileSync(new URL('../DRAFTS_REVIEW.md', import.meta.url), drafts);
console.log('TRANSLATIONS_REVIEW.md und DRAFTS_REVIEW.md aktualisiert.');
