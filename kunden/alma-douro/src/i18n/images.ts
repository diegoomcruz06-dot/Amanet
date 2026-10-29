import type { ImageMetadata } from 'astro';
import type { Lang } from './index';
import aerial from '../assets/images/douro-rio-cruzeiro-vista-aerea.jpg';
import valley from '../assets/images/douro-vale-ponte-pinhao.jpg';
import terraces from '../assets/images/douro-socalcos-vila-rio.jpg';
import terrace from '../assets/images/douro-vista-terraco-manha.jpg';
import couple from '../assets/images/tania-e-marido-rio-douro.jpg';
import heart from '../assets/images/miradouro-coracao-do-douro.jpg';

export type Photo = { src: ImageMetadata; alt: Record<Lang, string> };

export const PHOTOS = {
  aerial: {
    src: aerial,
    alt: {
      fr: 'Le Douro vu du ciel, avec un bateau de croisière entre des coteaux plantés de vignes',
      pt: 'O rio Douro visto do alto, com um barco de cruzeiro entre encostas de vinha',
      en: 'The Douro river from above, with a cruise boat between vine-covered hillsides',
    },
  },
  valley: {
    src: valley,
    alt: {
      fr: 'La vallée du Douro avec le pont de Pinhão, le fleuve et des vignes en terrasses sous un ciel bleu',
      pt: 'O vale do Douro com a ponte do Pinhão, o rio e vinhas em socalcos sob um céu azul',
      en: 'The Douro Valley with the Pinhão bridge, the river and terraced vineyards under a blue sky',
    },
  },
  terraces: {
    src: terraces,
    alt: {
      fr: 'Vignes en terrasses descendant vers un village au bord du Douro',
      pt: 'Vinhas em socalcos a descer até uma vila à beira do Douro',
      en: 'Terraced vineyards running down to a village on the banks of the Douro',
    },
  },
  terrace: {
    src: terrace,
    alt: {
      fr: 'Vue matinale depuis une terrasse sur le Douro et les collines boisées',
      pt: 'Vista matinal de um terraço sobre o rio Douro e as colinas',
      en: 'Morning view from a terrace over the Douro river and wooded hills',
    },
  },
  couple: {
    src: couple,
    alt: {
      fr: 'Tania et son mari, souriants, au bord du Douro',
      pt: 'A Tania e o marido, sorridentes, à beira do rio Douro',
      en: 'Tania and her husband smiling on the banks of the Douro',
    },
  },
  heart: {
    src: heart,
    alt: {
      fr: 'Une femme assise sous la grande sculpture en forme de cœur du belvédère « Coração do Douro », face à la vallée',
      pt: 'Uma mulher sentada sob a grande escultura em forma de coração do miradouro «Coração do Douro», com vista para o vale',
      en: 'A woman seated beneath the large heart-shaped sculpture at the “Coração do Douro” viewpoint, looking out over the valley',
    },
  },
} satisfies Record<string, Photo>;
