// «Outras descobertas do Douro» (Seite /descobrirodouro). PT = definitiver Text der Kundin (04-outras-descobertas-do-douro.md).
// FR/EN = Übersetzungen.
type Place = { name: string; title: string; text: string };

const pt = {
  title: 'Outras descobertas do Douro | Miradouros e aldeias',
  description:
    'Miradouros como São Leonardo de Galafura e Casal de Loivos, aldeias como Pinhão, Provesende e Favaios: sugestões para descobrir o Douro sem pressa.',
  eyebrow: 'Outras descobertas do Douro',
  h1: 'Há paisagens que <em>nos fazem parar.</em>',
  intro: [
    'Uma curva do rio, uma aldeia entre as vinhas ou um miradouro onde apetece ficar mais um pouco.',
    'O Douro também se descobre assim: sem pressa, com tempo para olhar e deixar-se surpreender.',
  ],
  viewpoints: {
    title: 'Miradouros para guardar <em>na memória</em>',
    items: [
      { name: 'São Leonardo de Galafura', title: 'Um olhar sobre o vale', text: 'Na região da Régua, contemple o Vale do Douro e a Serra do Marão. Uma paragem para apreciar a dimensão da paisagem e o desenho das encostas.' },
      { name: 'Casal de Loivos', title: 'Uma varanda sobre o Pinhão', text: 'Veja o rio a desenhar a sua curva junto ao Pinhão, rodeado pelas vinhas em socalcos. Uma perspetiva para descobrir o lugar onde a paisagem e a vida da vila se encontram.' },
      { name: 'São Salvador do Mundo', title: 'Entre a paisagem e a tradição', text: 'Perto de São João da Pesqueira, este lugar de peregrinação abre-se sobre o Douro e a zona da barragem da Valeira. Um encontro entre património religioso e natureza.' },
      { name: 'Miradouro do Ujo', title: 'À descoberta do Vale do Tua', text: 'No concelho de Alijó, encontre outra perspetiva da região: uma vista sobre o Vale do Tua e a sua albufeira.' },
    ] as Place[],
  },
  villages: {
    title: 'Aldeias e lugares <em>com história</em>',
    items: [
      { name: 'Pinhão', title: 'O Douro nos azulejos e na paisagem', text: 'Reserve tempo para conhecer a vila e a sua estação ferroviária. Os painéis de azulejos contam histórias dos trabalhos na vinha, das paisagens e dos costumes da região.' },
      { name: 'Provesende', title: 'Um passeio entre solares e casas de pedra', text: 'Descubra uma aldeia vinhateira onde a arquitetura e o património convidam a olhar com atenção. Uma sugestão para quem gosta de conhecer os lugares caminhando pelas suas ruas.' },
      { name: 'Favaios', title: 'Tradições que também se saboreiam', text: 'Conheça uma aldeia ligada ao Moscatel e ao pão de quatro cantos. Complete a descoberta com uma passagem pelo Núcleo Museológico de Favaios ou pelo Miradouro de Santa Bárbara.' },
    ] as Place[],
  },
  route: {
    title: 'Um roteiro que <em>combina consigo</em>',
    text: [
      'Não precisa de visitar tudo para sentir o Douro.',
      'Ajudo a escolher as paragens de acordo com o seu alojamento, o tempo disponível e aquilo que mais gosta de descobrir, combinando paisagens, visitas e momentos de descanso.',
    ],
  },
};

const fr: typeof pt = {
  title: 'Autres découvertes du Douro | Belvédères et villages',
  description:
    'Belvédères comme São Leonardo de Galafura et Casal de Loivos, villages comme Pinhão, Provesende et Favaios : des idées pour découvrir le Douro sans hâte.',
  eyebrow: 'Autres découvertes du Douro',
  h1: 'Il y a des paysages qui <em>nous font nous arrêter.</em>',
  intro: [
    'Un méandre du fleuve, un village au milieu des vignes ou un belvédère où l’on a envie de rester encore un peu.',
    'Le Douro se découvre aussi ainsi : sans se presser, en prenant le temps de regarder et de se laisser surprendre.',
  ],
  viewpoints: {
    title: 'Des belvédères à garder <em>en mémoire</em>',
    items: [
      { name: 'São Leonardo de Galafura', title: 'Un regard sur la vallée', text: 'Dans la région de Régua, contemplez la vallée du Douro et la Serra do Marão. Une halte pour apprécier l’ampleur du paysage et le dessin des coteaux.' },
      { name: 'Casal de Loivos', title: 'Un balcon sur Pinhão', text: 'Regardez le fleuve dessiner sa courbe près de Pinhão, entouré de vignes en terrasses. Un point de vue pour découvrir l’endroit où le paysage et la vie du bourg se rencontrent.' },
      { name: 'São Salvador do Mundo', title: 'Entre paysage et tradition', text: 'Près de São João da Pesqueira, ce lieu de pèlerinage s’ouvre sur le Douro et la zone du barrage de Valeira. Une rencontre entre patrimoine religieux et nature.' },
      { name: 'Miradouro do Ujo', title: 'À la découverte de la vallée du Tua', text: 'Dans la commune d’Alijó, découvrez une autre perspective de la région : une vue sur la vallée du Tua et son lac de retenue.' },
    ],
  },
  villages: {
    title: 'Villages et lieux <em>chargés d’histoire</em>',
    items: [
      { name: 'Pinhão', title: 'Le Douro en azulejos et en paysages', text: 'Prenez le temps de découvrir le bourg et sa gare. Les panneaux d’azulejos racontent le travail de la vigne, les paysages et les coutumes de la région.' },
      { name: 'Provesende', title: 'Une promenade entre manoirs et maisons de pierre', text: 'Découvrez un village viticole où l’architecture et le patrimoine invitent à regarder avec attention. Une suggestion pour celles et ceux qui aiment découvrir les lieux en flânant dans leurs rues.' },
      { name: 'Favaios', title: 'Des traditions qui se savourent aussi', text: 'Découvrez un village lié au Moscatel et au pain à quatre coins. Complétez la découverte par un passage au Núcleo Museológico de Favaios ou au belvédère de Santa Bárbara.' },
    ],
  },
  route: {
    title: 'Un itinéraire <em>qui vous ressemble</em>',
    text: [
      'Pas besoin de tout visiter pour ressentir le Douro.',
      'Je vous aide à choisir les étapes selon votre hébergement, le temps dont vous disposez et ce que vous aimez le plus découvrir, en associant paysages, visites et moments de repos.',
    ],
  },
};

const en: typeof pt = {
  title: 'More Douro discoveries | Viewpoints and villages',
  description:
    'Viewpoints such as São Leonardo de Galafura and Casal de Loivos, villages such as Pinhão, Provesende and Favaios: ideas for discovering the Douro slowly.',
  eyebrow: 'More Douro discoveries',
  h1: 'Some landscapes <em>make us stop.</em>',
  intro: [
    'A bend in the river, a village among the vineyards or a viewpoint where you want to linger a little longer.',
    'This is another way to discover the Douro: unhurried, with time to look and let yourself be surprised.',
  ],
  viewpoints: {
    title: 'Viewpoints to <em>remember</em>',
    items: [
      { name: 'São Leonardo de Galafura', title: 'A view over the valley', text: 'In the Régua area, take in the Douro Valley and the Serra do Marão. A stop to appreciate the scale of the landscape and the lines of the hillsides.' },
      { name: 'Casal de Loivos', title: 'A balcony over Pinhão', text: 'Watch the river curve beside Pinhão, surrounded by terraced vineyards. A vantage point to discover the place where the landscape and village life meet.' },
      { name: 'São Salvador do Mundo', title: 'Between landscape and tradition', text: 'Near São João da Pesqueira, this place of pilgrimage looks out over the Douro and the area around the Valeira dam. A meeting of religious heritage and nature.' },
      { name: 'Miradouro do Ujo', title: 'Discovering the Tua Valley', text: 'In the municipality of Alijó, find another perspective on the region: a view over the Tua Valley and its reservoir.' },
    ],
  },
  villages: {
    title: 'Villages and places <em>full of history</em>',
    items: [
      { name: 'Pinhão', title: 'The Douro in tiles and landscape', text: 'Take time to get to know the village and its railway station. The azulejo tile panels tell stories of work in the vineyards, the landscapes and the customs of the region.' },
      { name: 'Provesende', title: 'A stroll among manor houses and stone homes', text: 'Discover a wine village where architecture and heritage invite you to look closely. A suggestion for those who like to get to know a place by walking its streets.' },
      { name: 'Favaios', title: 'Traditions you can taste', text: 'Discover a village known for its Moscatel and its four-cornered bread. Round off your visit at the Núcleo Museológico de Favaios or the Santa Bárbara viewpoint.' },
    ],
  },
  route: {
    title: 'A route that <em>suits you</em>',
    text: [
      'You don’t need to see everything to feel the Douro.',
      'I help you choose your stops according to where you are staying, the time you have and what you most enjoy discovering, combining landscapes, visits and moments of rest.',
    ],
  },
};

export const descobrir = { pt, fr, en };
