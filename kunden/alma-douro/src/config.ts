export const SITE_URL = 'https://alma-douro.com';
export const SITE_NAME = 'Alma Douro';
export const EMAIL = 'info@alma-douro.com';

export const PHONE = { display: '+41 76 804 89 76', href: 'tel:+41768048976' };
// WhatsApp = gleiche Nummer wie Telefon (Bestätigung Kundin). Internationales Format ohne +, Leerzeichen oder 00.
// Leer lassen, um alle WhatsApp-Buttons auf die Kontaktseite zu leiten.
export const WHATSAPP_NUMBER = '41768048976';

export const SOCIAL = [
  { name: 'Instagram', handle: '@alma.douro', url: 'https://www.instagram.com/alma.douro/' },
  { name: 'TikTok', handle: '@almadouro26', url: 'https://www.tiktok.com/@almadouro26' },
];

// TODO: von Tania bestätigen (Adresse laut alter Website)
export const ADDRESS = {
  name: 'Alma Douro',
  owner: 'Tânia Afonso',
  street: 'A Vesin 22',
  zip: '1483',
  city: 'Vesin',
  country: { fr: 'Suisse', pt: 'Suíça', en: 'Switzerland' },
};


export function whatsappUrl(text?: string): string | null {
  if (!WHATSAPP_NUMBER) return null;
  const q = text ? `?text=${encodeURIComponent(text)}` : '';
  return `https://wa.me/${WHATSAPP_NUMBER}${q}`;
}
