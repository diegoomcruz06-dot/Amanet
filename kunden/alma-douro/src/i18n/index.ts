export const LANGS = ['fr', 'pt', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'fr';

export const HTML_LANG: Record<Lang, string> = { fr: 'fr', pt: 'pt-PT', en: 'en' };
export const OG_LOCALE: Record<Lang, string> = { fr: 'fr_CH', pt: 'pt_PT', en: 'en_GB' };

/** Seiten-Schlüssel = Slug (in allen Sprachen gleich, Wunsch der Kundin). '' = Startseite. */
export type PageKey =
  | ''
  | 'sobre'
  | 'servicos'
  | 'experiencias'
  | 'quintas'
  | 'descobrirodouro'
  | 'parceiros'
  | 'contacto'
  | 'aviso-legal'
  | 'privacidade'
  | 'obrigado'
  | '404';

export function localePath(lang: Lang, key: PageKey, hash = ''): string {
  const prefix = lang === DEFAULT_LANG ? '' : `/${lang}`;
  const path = key === '' ? `${prefix}/` : `${prefix}/${key}`;
  return path + (hash ? `#${hash}` : '');
}

/** getStaticPaths für die Routen unter src/pages/[...lang]/ */
export function langPaths() {
  return LANGS.map((lang) => ({
    params: { lang: lang === DEFAULT_LANG ? undefined : lang },
    props: { lang },
  }));
}

export const NAV: { key: PageKey; label: Record<Lang, string> }[] = [
  { key: '', label: { fr: 'Accueil', pt: 'Início', en: 'Home' } },
  { key: 'sobre', label: { fr: 'À propos', pt: 'Sobre', en: 'About' } },
  { key: 'servicos', label: { fr: 'Services', pt: 'Serviços', en: 'Services' } },
  { key: 'experiencias', label: { fr: 'Expériences', pt: 'Experiências', en: 'Experiences' } },
  { key: 'descobrirodouro', label: { fr: 'Découvrir le Douro', pt: 'Descobrir o Douro', en: 'Discover the Douro' } },
  { key: 'parceiros', label: { fr: 'Partenariats', pt: 'Parcerias', en: 'Partnerships' } },
  { key: 'contacto', label: { fr: 'Contact', pt: 'Contacto', en: 'Contact' } },
];

export function navLabel(lang: Lang, key: PageKey): string {
  return NAV.find((n) => n.key === key)?.label[lang] ?? '';
}

export const UI = {
  fr: {
    skip: 'Aller au contenu',
    menu: 'Menu',
    closeMenu: 'Fermer le menu',
    mainNav: 'Navigation principale',
    langNav: 'Choix de la langue',
    langName: 'Français',
    cta: 'Faire une demande',
    whatsapp: 'Écrire sur WhatsApp',
    whatsappText: 'Bonjour Tania, je souhaite organiser un voyage dans le Douro.',
    email: 'E-mail',
    signature: 'Alma Douro — un pont entre la Suisse et le cœur du Douro.',
    legal: 'Mentions légales',
    privacy: 'Protection des données',
    footerNav: 'Navigation du pied de page',
    rights: 'Tous droits réservés.',
    home: 'Accueil',
    breadcrumb: "Fil d'Ariane",
    logoAlt: 'Alma Douro, accueil',
  },
  pt: {
    skip: 'Saltar para o conteúdo',
    menu: 'Menu',
    closeMenu: 'Fechar o menu',
    mainNav: 'Navegação principal',
    langNav: 'Escolha do idioma',
    langName: 'Português',
    cta: 'Fazer um pedido',
    whatsapp: 'Escrever no WhatsApp',
    whatsappText: 'Olá Tania, gostaria de organizar uma viagem ao Douro.',
    email: 'E-mail',
    signature: 'Alma Douro — uma ponte entre a Suíça e o coração do Douro.',
    legal: 'Aviso legal',
    privacy: 'Política de privacidade',
    footerNav: 'Navegação do rodapé',
    rights: 'Todos os direitos reservados.',
    home: 'Início',
    breadcrumb: 'Navegação estrutural',
    logoAlt: 'Alma Douro, página inicial',
  },
  en: {
    skip: 'Skip to content',
    menu: 'Menu',
    closeMenu: 'Close menu',
    mainNav: 'Main navigation',
    langNav: 'Language selection',
    langName: 'English',
    cta: 'Send an enquiry',
    whatsapp: 'Message on WhatsApp',
    whatsappText: 'Hello Tania, I would like to plan a trip to the Douro.',
    email: 'Email',
    signature: 'Alma Douro — a bridge between Switzerland and the heart of the Douro.',
    legal: 'Legal notice',
    privacy: 'Privacy policy',
    footerNav: 'Footer navigation',
    rights: 'All rights reserved.',
    home: 'Home',
    breadcrumb: 'Breadcrumb',
    logoAlt: 'Alma Douro, home',
  },
} satisfies Record<Lang, Record<string, string>>;
