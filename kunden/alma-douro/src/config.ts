export const SITE_URL = 'https://alma-douro.com';
export const SITE_NAME = 'Alma Douro';
export const EMAIL = 'info@alma-douro.com';

// TODO: WhatsApp-Nummer von Tania eintragen, internationales Format ohne +, Leerzeichen oder 00 (z. B. '41791234567').
// Solange leer, führen alle WhatsApp-Buttons auf die Kontaktseite.
export const WHATSAPP_NUMBER = '';

// TODO: von Tania bestätigen (Adresse laut alter Website)
export const ADDRESS = {
  name: 'Alma Douro',
  owner: 'Tânia Afonso',
  street: 'A Vesin 22',
  zip: '1483',
  city: 'Vesin',
  country: { fr: 'Suisse', pt: 'Suíça', en: 'Switzerland' },
};

export const PARTNERS = {
  tedo: 'https://www.quintadotedo.com',
  cimeira: 'https://casacimeira-douro.com/fr/',
};

export function whatsappUrl(text?: string): string | null {
  if (!WHATSAPP_NUMBER) return null;
  const q = text ? `?text=${encodeURIComponent(text)}` : '';
  return `https://wa.me/${WHATSAPP_NUMBER}${q}`;
}
