import type { ImageMetadata } from 'astro';
import type { Lang } from './index';
import aerial from '../assets/images/douro-rio-cruzeiro-vista-aerea.jpg';
import valley from '../assets/images/douro-vale-ponte-pinhao.jpg';
import terraces from '../assets/images/douro-socalcos-vila-rio.jpg';
import terrace from '../assets/images/douro-vista-terraco-manha.jpg';
import couple from '../assets/images/tania-e-marido-rio-douro.jpg';
import heart from '../assets/images/miradouro-coracao-do-douro.jpg';
import train from '../assets/images/douro-comboio-historico-carruagem.jpg';
import autumn from '../assets/images/douro-socalcos-outono.jpg';
// Fotos der Kundin (November 2026)
import riverbank from '../assets/images/douro-rio-margem-barcos.jpg';
import barrels from '../assets/images/cave-barricas-vinho-do-porto.jpg';
import vats from '../assets/images/cave-toneis-antigos.jpg';
import breakfast from '../assets/images/pequeno-almoco-terraco-douro.jpg';
import bend from '../assets/images/vale-douro-curva-do-rio.jpg';
import trainRiver from '../assets/images/comboio-quinta-murcas-rio.jpg';
import vineyard from '../assets/images/vinhas-colina-douro.jpg';
import slopes from '../assets/images/socalcos-vista-douro.jpg';
import steam from '../assets/images/comboio-a-vapor-socalcos.jpg';
import cruiseShip from '../assets/images/navio-cruzeiro-douro.jpg';
import meander from '../assets/images/meandro-douro-vista-aerea.jpg';
import quintaHouse from '../assets/images/quinta-casa-branca-vale.jpg';
import xmasRibeira from '../assets/images/natal-porto-ribeira-noite.jpg';
import xmasGaia from '../assets/images/natal-gaia-ponte-noite.jpg';
import nyeBridge from '../assets/images/reveillon-fogo-ponte-luis-i.jpg';
import nyeRiver from '../assets/images/reveillon-fogo-rio-noite.jpg';
import posterXmas from '../assets/images/cartaz-natal-cruzeiro-vintage.jpg';
import posterRuby from '../assets/images/cartaz-reveillon-douro-ruby.jpg';
import posterParty from '../assets/images/cartaz-reveillon-douro-party.jpg';
import posterTawny from '../assets/images/cartaz-reveillon-douro-tawny.jpg';
import posterDinner from '../assets/images/cartaz-soupers-entreprise.jpg';

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
  train: {
    src: train,
    alt: {
      fr: 'Intérieur en bois d’une voiture du train historique du Douro, avec vue sur la vallée',
      pt: 'Interior em madeira de uma carruagem do Comboio Histórico do Douro, com vista para o vale',
      en: 'Wooden interior of a carriage on the Douro historic train, with views of the valley',
    },
    credit: { author: 'Nelso Silva', license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/', source: 'https://commons.wikimedia.org/wiki/File:Comboio_Hist%C3%B3rico_do_Douro_(27931230516).jpg' },
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
  riverbank: {
    src: riverbank,
    alt: {
      fr: 'Le Douro vu depuis la rive, avec des bateaux amarrés et des collines de vignes',
      pt: 'O rio Douro visto da margem, com barcos atracados e colinas de vinha',
      en: 'The Douro seen from the riverbank, with moored boats and vine-covered hills',
    },
  },
  barrels: {
    src: barrels,
    alt: {
      fr: 'Allée de fûts de vin de Porto dans une cave éclairée par un lustre',
      pt: 'Corredor de barricas de vinho do Porto numa cave iluminada por um lustre',
      en: 'An aisle of port wine barrels in a cellar lit by a chandelier',
    },
  },
  vats: {
    src: vats,
    alt: {
      fr: 'Grands tonneaux anciens sous la charpente en bois d’une cave',
      pt: 'Grandes tonéis antigos sob a estrutura de madeira de uma cave',
      en: 'Large old wine vats beneath the wooden beams of a cellar',
    },
  },
  breakfast: {
    src: breakfast,
    alt: {
      fr: 'Petit-déjeuner sur une terrasse avec vue sur le Douro et les vignes en terrasses',
      pt: 'Pequeno-almoço num terraço com vista para o rio Douro e as vinhas em socalcos',
      en: 'Breakfast on a terrace overlooking the Douro river and terraced vineyards',
    },
    position: '50% 70%',
  },
  bend: {
    src: bend,
    alt: {
      fr: 'Le Douro serpente entre les collines et les vignes en terrasses',
      pt: 'O rio Douro serpenteia entre as colinas e as vinhas em socalcos',
      en: 'The Douro winds between hills and terraced vineyards',
    },
  },
  trainRiver: {
    src: trainRiver,
    alt: {
      fr: 'Un train longe le Douro au pied des vignes en terrasses, vu depuis le fleuve',
      pt: 'Um comboio passa junto ao rio Douro, ao pé das vinhas em socalcos, visto do rio',
      en: 'A train runs along the Douro below terraced vineyards, seen from the river',
    },
    position: '50% 65%',
  },
  vineyard: {
    src: vineyard,
    alt: {
      fr: 'Rangs de vignes au premier plan et colline verdoyante sous un ciel bleu',
      pt: 'Filas de vinha em primeiro plano e uma colina verdejante sob o céu azul',
      en: 'Rows of vines in the foreground and a green hill under a blue sky',
    },
  },
  slopes: {
    src: slopes,
    alt: {
      fr: 'Vignes en terrasses et oliviers au-dessus de la vallée du Douro',
      pt: 'Vinhas em socalcos e oliveiras sobre o vale do Douro',
      en: 'Terraced vineyards and olive trees above the Douro Valley',
    },
  },
  steam: {
    src: steam,
    alt: {
      fr: 'Le train historique à vapeur traverse les vignes en terrasses au bord du Douro',
      pt: 'O comboio histórico a vapor atravessa as vinhas em socalcos junto ao rio Douro',
      en: 'The historic steam train crosses terraced vineyards along the Douro',
    },
  },
  cruiseShip: {
    src: cruiseShip,
    alt: {
      fr: 'Un bateau de croisière amarré sur le Douro, eau calme et collines en arrière-plan',
      pt: 'Um barco de cruzeiro atracado no rio Douro, com águas calmas e colinas ao fundo',
      en: 'A cruise boat moored on the calm Douro river with hills behind',
    },
  },
  meander: {
    src: meander,
    alt: {
      fr: 'Vue aérienne d’un méandre du Douro entouré de vignes en terrasses',
      pt: 'Vista aérea de um meandro do rio Douro rodeado de vinhas em socalcos',
      en: 'Aerial view of a bend in the Douro surrounded by terraced vineyards',
    },
  },
  quintaHouse: {
    src: quintaHouse,
    alt: {
      fr: 'Une quinta aux murs blancs et toits de tuiles dominant la vallée du Douro',
      pt: 'Uma quinta de paredes brancas e telhados de telha sobre o vale do Douro',
      en: 'A white-walled quinta with tiled roofs overlooking the Douro Valley',
    },
  },
  xmasRibeira: {
    src: xmasRibeira,
    alt: {
      fr: 'Porto illuminée la nuit, avec le pont Dom Luís I et les reflets sur le Douro',
      pt: 'O Porto iluminado à noite, com a ponte D. Luís I e os reflexos no rio Douro',
      en: 'Porto lit up at night, with the Dom Luís I bridge reflected in the Douro',
    },
  },
  xmasGaia: {
    src: xmasGaia,
    alt: {
      fr: 'Les quais de Porto illuminés la nuit au bord du Douro',
      pt: 'O cais do Porto iluminado à noite junto ao rio Douro',
      en: 'Porto’s riverside lit up at night along the Douro',
    },
  },
  nyeBridge: {
    src: nyeBridge,
    alt: {
      fr: 'Feux d’artifice du Nouvel An au-dessus du pont Dom Luís I à Porto',
      pt: 'Fogo de artifício de passagem de ano sobre a ponte D. Luís I, no Porto',
      en: 'New Year’s fireworks above the Dom Luís I bridge in Porto',
    },
  },
  nyeRiver: {
    src: nyeRiver,
    alt: {
      fr: 'Feux d’artifice sur le Douro à Porto pendant la nuit du Nouvel An',
      pt: 'Fogo de artifício sobre o rio Douro, no Porto, na noite de passagem de ano',
      en: 'Fireworks over the Douro in Porto on New Year’s Eve',
    },
  },
  posterXmas: {
    src: posterXmas,
    alt: {
      fr: 'Affiche « Um Natal ao sabor do Douro » : croisière de Noël vintage à Porto, les 7, 11, 12, 18 et 19 décembre 2026',
      pt: 'Cartaz «Um Natal ao sabor do Douro»: cruzeiro de Natal vintage no Porto, a 7, 11, 12, 18 e 19 de dezembro de 2026',
      en: 'Poster “Um Natal ao sabor do Douro”: vintage Christmas cruise in Porto on 7, 11, 12, 18 and 19 December 2026',
    },
  },
  posterRuby: {
    src: posterRuby,
    alt: {
      fr: 'Affiche « Cap sur 2027 ! Croisière de Réveillon Douro Ruby », le 31 décembre 2026 à Porto',
      pt: 'Cartaz «Cap sur 2027! Croisière de Réveillon Douro Ruby», a 31 de dezembro de 2026 no Porto',
      en: 'Poster “Cap sur 2027! Douro Ruby New Year’s Eve cruise”, 31 December 2026 in Porto',
    },
  },
  posterParty: {
    src: posterParty,
    alt: {
      fr: 'Affiche « Réveillon Douro Party », le 31 décembre, embarquement à 22 h 30 à Vila Nova de Gaia',
      pt: 'Cartaz «Réveillon Douro Party», a 31 de dezembro, embarque às 22h30 em Vila Nova de Gaia',
      en: 'Poster “Réveillon Douro Party”, 31 December, boarding at 10.30 pm in Vila Nova de Gaia',
    },
  },
  posterTawny: {
    src: posterTawny,
    alt: {
      fr: 'Affiche « Réveillon Douro Tawny », le 31 décembre, dîner et musique live, embarquement à 20 h à Vila Nova de Gaia',
      pt: 'Cartaz «Réveillon Douro Tawny», a 31 de dezembro, jantar e música ao vivo, embarque às 20h00 em Vila Nova de Gaia',
      en: 'Poster “Réveillon Douro Tawny”, 31 December, dinner and live music, boarding at 8 pm in Vila Nova de Gaia',
    },
  },
  posterDinner: {
    src: posterDinner,
    alt: {
      fr: 'Affiche « Soupers d’entreprise » : fêtez la fin d’année avec votre équipe, Matriarca à Porto et Quinta do Bomfim à Pinhão',
      pt: 'Cartaz «Soupers d’entreprise»: jantares de fim de ano para equipas, no Matriarca (Porto) e na Quinta do Bomfim (Pinhão)',
      en: 'Poster “Soupers d’entreprise”: end-of-year team dinners at Matriarca in Porto and Quinta do Bomfim in Pinhão',
    },
  },
} satisfies Record<string, Photo>;

/** Fremdbilder mit Lizenzangabe – werden im Impressum (Aviso legal) aufgeführt. */
export const CREDITS = Object.values(PHOTOS as Record<string, Photo>).filter((p) => p.credit);
