import type { ImageMetadata } from 'astro';
import type { Lang } from './index';
import aerial from '../assets/images/douro-rio-cruzeiro-vista-aerea.jpg';
import valley from '../assets/images/douro-vale-ponte-pinhao.jpg';
import terraces from '../assets/images/douro-socalcos-vila-rio.jpg';
import terrace from '../assets/images/douro-vista-terraco-manha.jpg';
import couple from '../assets/images/tania-e-marido-rio-douro.jpg';
import heart from '../assets/images/miradouro-coracao-do-douro.jpg';
import rabelo from '../assets/images/douro-barco-rabelo.jpg';
import cellar from '../assets/images/douro-cave-barricas.jpg';
import train from '../assets/images/douro-comboio-historico-carruagem.jpg';
import stay from '../assets/images/douro-hotel-piscina-pinhao.jpg';
import autumn from '../assets/images/douro-socalcos-outono.jpg';

/** Fremdbild mit Lizenz, wird im Impressum genannt (siehe CREDITS unten). */
export type Credit = { author: string; license: string; licenseUrl: string; source: string };
export type Photo = { src: ImageMetadata; alt: Record<Lang, string>; credit?: Credit; position?: string };

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
  rabelo: {
    src: rabelo,
    alt: {
      fr: 'Un bateau rabelo traditionnel sur le Douro, devant les maisons de Porto',
      pt: 'Um barco rabelo tradicional no rio Douro, em frente ao casario do Porto',
      en: 'A traditional rabelo boat on the Douro river, in front of Porto’s houses',
    },
    position: '30% 50%',
    credit: { author: 'dlovins99', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', source: 'https://commons.wikimedia.org/wiki/File:Rabelo_boat_on_Douro_River_2023-08-06_08.26.27_(53111243497).jpg' },
  },
  cellar: {
    src: cellar,
    alt: {
      fr: 'Fûts de vin alignés dans une cave à la lumière tamisée',
      pt: 'Barricas de vinho alinhadas numa cave com luz suave',
      en: 'Wine barrels lined up in a softly lit cellar',
    },
    credit: { author: 'Gerry Labrijn', license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/', source: 'https://commons.wikimedia.org/wiki/File:Rio_Douro_em_Portugal_DSC01114_(15525180327).jpg' },
  },
  train: {
    src: train,
    alt: {
      fr: 'Intérieur en bois d’une voiture du train historique du Douro, avec vue sur la vallée',
      pt: 'Interior em madeira de uma carruagem do Comboio Histórico do Douro, com vista para o vale',
      en: 'Wooden interior of a carriage on the Douro historic train, with views of the valley',
    },
    credit: { author: 'Nelso Silva', license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/', source: 'https://commons.wikimedia.org/wiki/File:Comboio_Hist%C3%B3rico_do_Douro_(27931230516).jpg' },
  },
  stay: {
    src: stay,
    alt: {
      fr: 'Piscine d’un hôtel à Pinhão, au-dessus du Douro et des collines',
      pt: 'Piscina de um hotel no Pinhão, sobre o rio Douro e as colinas',
      en: 'A hotel pool in Pinhão overlooking the Douro river and hills',
    },
    credit: { author: 'Varun Shiv Kapur', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', source: 'https://commons.wikimedia.org/wiki/File:Hotel_at_Pinhao_and_the_Douro_river.jpg' },
  },
  autumn: {
    src: autumn,
    alt: {
      fr: 'Vignes en terrasses aux couleurs d’automne au-dessus du Douro',
      pt: 'Vinhas em socalcos com cores de outono sobre o rio Douro',
      en: 'Terraced vineyards in autumn colours above the Douro river',
    },
    credit: { author: 'michael clarke stuff', license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/', source: 'https://commons.wikimedia.org/wiki/File:Quinta_de_Seixo_10_(31114692720).jpg' },
  },
} satisfies Record<string, Photo>;

/** Fremdbilder mit Lizenzangabe – werden im Impressum (Aviso legal) aufgeführt. */
export const CREDITS = Object.values(PHOTOS as Record<string, Photo>).filter((p) => p.credit);
