// Erzeugt TRANSLATIONS_REVIEW.md und DRAFTS_REVIEW.md direkt aus den Texten in src/i18n/content.
// Aufruf: npm run review   (Node ≥ 22.18, liest die .ts-Dateien ohne Build)
import { writeFileSync } from 'node:fs';
import { home } from '../src/i18n/content/home.ts';
import { sobre } from '../src/i18n/content/sobre.ts';
import { servicos } from '../src/i18n/content/servicos.ts';
import { experiencias } from '../src/i18n/content/experiencias.ts';
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
    'Die PT-Texte sind von Tania freigegeben und unverändert übernommen. FR (Hauptsprache) und EN sind sinngemäss übersetzt, nicht wörtlich. Bitte jede Zeile prüfen und Änderungen direkt hier markieren.\n\nHinweis: «dossier de viagem» ist auf Französisch als «carnet de voyage» übersetzt (üblicher Begriff), auf Englisch als «travel dossier».'
  ) +
  section('Startseite (`/`, `/pt/`, `/en/`)', home, 'Von Amanet ergänzt (nicht im freigegebenen Text): Seitentitel, Meta-Beschreibung, Overline «Alma Douro» und der Link «Conheça a minha história».') +
  section('Sobre (`/sobre`)', sobre, 'Die Formulierungen «Sobre Alma Douro» (Seitentitel), «Fale-me da sua viagem» (Button) sowie Seitentitel/Meta-Beschreibung sind von Amanet ergänzt.') +
  section('Menü', { pt: NAV.map((n) => n.label.pt), fr: NAV.map((n) => n.label.fr), en: NAV.map((n) => n.label.en) });

const drafts =
  head(
    'Text-Entwürfe zur Freigabe',
    'Diese Texte hat Amanet Digital auf Basis der freigegebenen Texte und der alten Website entworfen. Es wurden keine Preise, Zahlen, Bewertungen, Auszeichnungen oder weiteren Partner erfunden. Bitte inhaltlich prüfen (Seite, Sprache) und freigeben.\n\n**Bitte besonders prüfen:**\n- Parceiros: «Bistro Terrace, recomendado pelo Guia Michelin» stammt von der alten Website. Ist das noch aktuell?\n- Parceiros: Quinta da Casa Cimeira – gilt «Reserva e organização através da Alma Douro» auch hier? (Derzeit nur bei Quinta do Tedo.)\n- Contacto: «Respondo pessoalmente a cada mensagem» – passt das so?\n- Descobrir o Douro: Fahrzeit Porto–Douro «1 h 30 bis 2 h je nach Ziel», Weinlese «in der Regel September», historischer Zug «an bestimmten Daten, vor allem im Sommer».\n- Experiências: Zug-Karte verwendet das Foto «Tal mit Brücke (Pinhão)», da kein Zugfoto vorhanden ist.'
  ) +
  section('Serviços (`/servicos`)', servicos) +
  section('Experiências (`/experiencias`)', experiencias) +
  section('Descobrir o Douro (`/descobrirodouro`)', descobrir) +
  section('Parceiros (`/parceiros`)', parceiros) +
  section('Contacto (`/contacto`)', contacto) +
  section('Danke-Seite (`/obrigado`)', obrigado) +
  section('404-Seite', notFound) +
  section('Aviso legal / Impressum (`/aviso-legal`)', avisoLegal, 'Rechtstexte: Entwurf, keine Rechtsberatung. [address] = Adresse aus src/config.ts, [email] = info@alma-douro.com.') +
  section('Política de privacidade (`/privacidade`)', privacidade) +
  section('Allgemeine Texte (Header, Footer, Buttons)', UI);

writeFileSync(new URL('../TRANSLATIONS_REVIEW.md', import.meta.url), translations);
writeFileSync(new URL('../DRAFTS_REVIEW.md', import.meta.url), drafts);
console.log('TRANSLATIONS_REVIEW.md und DRAFTS_REVIEW.md aktualisiert.');
