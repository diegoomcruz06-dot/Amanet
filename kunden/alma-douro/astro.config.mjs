// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alma-douro.com',
  // Unterseiten ohne Slash (/sobre), Sprach-Startseiten mit Slash (/pt/)
  trailingSlash: 'ignore',
  build: { format: 'preserve' },
  image: {
    responsiveStyles: false,
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr', pt: 'pt-PT', en: 'en' },
      },
      filter: (page) => !/\/(obrigado|404)(\/|$)/.test(page),
      // Sprach-Startseiten wie im canonical mit Slash: /pt/ und /en/
      serialize: (item) => {
        const fix = (u) => u.replace(/\/(pt|en)$/, '/$1/');
        item.url = fix(item.url);
        item.links = item.links?.map((l) => ({ ...l, url: fix(l.url) }));
        return item;
      },
    }),
  ],
});
