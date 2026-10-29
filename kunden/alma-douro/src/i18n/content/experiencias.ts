// «Experiências – Cruzeiros & Comboio histórico». PT = definitiver Text der Kundin (02-experiencias-cruzeiros-comboio-historico.md).
// Auf Wunsch weggelassen (interne Notizen): «Modalidade verificada: segunda a sexta-feira.», Abschnitt «Informações a confirmar
// para a próxima temporada 2027», «A assistência anunciada pelo vendedor está limitada ao cruzeiro». FR/EN = Übersetzungen.
// `interest` = vorausgewählte Checkbox im Kontaktformular.
type Item = { title: string; lead: string; bullets: string[]; button: string; interest: string };

const pt = {
  title: 'Cruzeiros no Douro e comboio histórico | Alma Douro',
  description:
    'Cruzeiros a partir da Régua ou de Gaia, o comboio histórico Régua–Tua e programas que combinam rio e carris. Peça informações.',
  eyebrow: 'Experiências',
  h1: 'Cruzeiros <em>no Douro</em>',
  intro: 'Entre encostas cobertas de vinhas e a passagem pelas barragens, descubra o Douro de uma perspetiva diferente. Escolha uma travessia ou um dia de descoberta com refeição a bordo.',
  regua: [
    { title: 'Régua até ao Pinhão', lead: 'Uma tarde entre o rio e as vinhas, numa viagem de barco num só sentido.', bullets: ['Partida do cais da Régua e chegada ao Pinhão.', 'Passagem pela barragem da Régua.', 'Duração indicativa de 2h15, segundo o horário publicado.', 'Regresso não incluído; deve ser organizado separadamente.'], button: 'Pedir informações', interest: 'cruzeiros' },
    { title: 'Régua ao Pinhão e regresso', lead: 'Desfrute de uma refeição a bordo e de uma pausa no Pinhão antes do regresso pelo rio.', bullets: ['Ida e volta de barco, com partida e chegada à Régua.', 'Aperitivo de vinho do Porto e almoço a bordo.', 'Passagem pela barragem da Régua nos dois sentidos.', 'Tempo livre no Pinhão. Programa indicativo das 12h00 às 18h00.'], button: 'Pedir informações', interest: 'cruzeiros' },
  ] as Item[],
  gaia: {
    title: 'Cruzeiros com partida de Gaia',
    items: [
      { title: 'Gaia até à Régua com regresso em autocarro', lead: 'Acompanhe a transformação da paisagem enquanto sobe o Douro.', bullets: ['Pequeno-almoço e almoço a bordo.', 'Passagem pelas barragens de Crestuma-Lever e Carrapatelo.', 'Tempo livre na Régua e regresso a Gaia em autocarro.'], button: 'Pedir informações', interest: 'cruzeiros' },
      { title: 'Gaia à Régua em autocarro e descida de barco', lead: 'Comece por terra e regresse ao ritmo do rio.', bullets: ['Transporte inicial de Gaia até à Régua em autocarro.', 'Descida de barco da Régua a Vila Nova de Gaia.', 'Almoço a bordo.', 'Passagem pelas barragens de Carrapatelo e Crestuma-Lever.'], button: 'Pedir informações', interest: 'cruzeiros' },
      { title: 'Gaia até ao Pinhão com regresso em autocarro', lead: 'Combine a descoberta do rio com uma visita e prova de vinhos.', bullets: ['Pequeno-almoço e almoço a bordo.', 'Passagem por três barragens: Crestuma-Lever, Carrapatelo e Régua.', 'Transfer para uma quinta ou cave da região, com visita e prova.', 'Regresso a Gaia em autocarro.'], button: 'Pedir informações', interest: 'cruzeiros' },
    ] as Item[],
  },
  closing: 'Qual será a sua próxima descoberta? Conte-me quando pretende viajar e onde estará alojado. Ajudo a escolher o cruzeiro que melhor se adapta à sua estadia.',
  comboio: {
    title: 'Comboio histórico do Douro',
    intro: 'Viaje ao ritmo de outros tempos, com o Douro à janela. Descubra o percurso do comboio histórico ou combine-o com um cruzeiro para viver a região a partir do rio e dos carris.',
    line: { title: 'Uma linha histórica e diferentes formas de a descobrir', text: 'O percurso ferroviário histórico confirmado pela CP liga a Régua ao Tua, passando pelo Pinhão, com regresso à Régua. As opções com partida de Gaia acrescentam outros transportes; o comboio histórico não parte do Porto.' },
    items: [
      { title: 'Régua ao Tua e regresso pela mesma linha', lead: 'Uma experiência dedicada à viagem ferroviária, com passagem pelo Pinhão e tempo para apreciar a paisagem.', bullets: ['Viagem de ida e volta em carruagens históricas.', 'Acolhimento na Régua com vinho do Porto e animação regional.', 'Paragens no Pinhão e no Tua.', 'Música e cantares regionais durante a viagem.', 'O programa ferroviário da CP não inclui almoço.'], button: 'Descobrir o comboio histórico', interest: 'comboio' },
    ] as Item[],
  },
  combo: {
    title: 'Cruzeiro e comboio histórico',
    items: [
      { title: 'Partida da Régua com almoço a bordo', lead: 'Comece pelo rio e continue pelas paisagens do Douro em carruagens históricas.', bullets: ['Cruzeiro Régua–Pinhão, com aperitivo e almoço a bordo.', 'Passagem pela barragem da Régua.', 'Deslocação a pé do cais do Pinhão à estação, sem guia.', 'Comboio histórico do Pinhão ao Tua e regresso à Régua, passando novamente pelo Pinhão.', 'Não inclui cruzeiro de regresso: a chegada final é à estação da Régua.'], button: 'Pedir informações', interest: 'cruzeiros,comboio' },
      { title: 'Partida de Gaia com regresso ao Porto', lead: 'Um dia que combina cruzeiro, comboio histórico e regresso em comboio regular.', bullets: ['Cruzeiro de Gaia à Régua, com pequeno-almoço e almoço a bordo.', 'Passagem pelas barragens de Crestuma-Lever e Carrapatelo.', 'Deslocação a pé do cais à estação da Régua.', 'Comboio histórico Régua–Tua–Régua.', 'Regresso da Régua ao Porto em comboio regular da CP.'], button: 'Pedir informações', interest: 'cruzeiros,comboio' },
    ] as Item[],
  },
};

const fr: typeof pt = {
  title: 'Croisières sur le Douro et train historique | Alma Douro',
  description:
    'Croisières au départ de Régua ou de Gaia, le train historique Régua–Tua et des programmes qui associent fleuve et rails. Demandez des informations.',
  eyebrow: 'Expériences',
  h1: 'Croisières <em>sur le Douro</em>',
  intro: 'Entre les coteaux couverts de vignes et le passage des barrages, découvrez le Douro sous un autre angle. Choisissez une traversée ou une journée de découverte avec repas à bord.',
  regua: [
    { title: 'De Régua à Pinhão', lead: 'Un après-midi entre le fleuve et les vignes, lors d’un trajet en bateau en aller simple.', bullets: ['Départ du quai de Régua et arrivée à Pinhão.', 'Passage du barrage de Régua.', 'Durée indicative de 2 h 15, selon l’horaire publié.', 'Retour non inclus ; il doit être organisé séparément.'], button: 'Demander des informations', interest: 'cruzeiros' },
    { title: 'De Régua à Pinhão, aller-retour', lead: 'Profitez d’un repas à bord et d’une pause à Pinhão avant le retour par le fleuve.', bullets: ['Aller-retour en bateau, avec départ et arrivée à Régua.', 'Apéritif au vin de Porto et déjeuner à bord.', 'Passage du barrage de Régua dans les deux sens.', 'Temps libre à Pinhão. Programme indicatif de 12 h 00 à 18 h 00.'], button: 'Demander des informations', interest: 'cruzeiros' },
  ],
  gaia: {
    title: 'Croisières au départ de Gaia',
    items: [
      { title: 'De Gaia à Régua, retour en autocar', lead: 'Suivez la transformation du paysage en remontant le Douro.', bullets: ['Petit-déjeuner et déjeuner à bord.', 'Passage des barrages de Crestuma-Lever et de Carrapatelo.', 'Temps libre à Régua et retour à Gaia en autocar.'], button: 'Demander des informations', interest: 'cruzeiros' },
      { title: 'De Gaia à Régua en autocar, descente en bateau', lead: 'Commencez par la route et revenez au rythme du fleuve.', bullets: ['Trajet aller de Gaia à Régua en autocar.', 'Descente en bateau de Régua à Vila Nova de Gaia.', 'Déjeuner à bord.', 'Passage des barrages de Carrapatelo et de Crestuma-Lever.'], button: 'Demander des informations', interest: 'cruzeiros' },
      { title: 'De Gaia à Pinhão, retour en autocar', lead: 'Associez la découverte du fleuve à une visite et une dégustation de vins.', bullets: ['Petit-déjeuner et déjeuner à bord.', 'Passage de trois barrages : Crestuma-Lever, Carrapatelo et Régua.', 'Transfert vers une quinta ou une cave de la région, avec visite et dégustation.', 'Retour à Gaia en autocar.'], button: 'Demander des informations', interest: 'cruzeiros' },
    ],
  },
  closing: 'Quelle sera votre prochaine découverte ? Dites-moi quand vous souhaitez voyager et où vous logerez. Je vous aide à choisir la croisière qui convient le mieux à votre séjour.',
  comboio: {
    title: 'Le train historique du Douro',
    intro: 'Voyagez au rythme d’autrefois, avec le Douro à la fenêtre. Découvrez le parcours du train historique ou associez-le à une croisière pour vivre la région depuis le fleuve et les rails.',
    line: { title: 'Une ligne historique et différentes façons de la découvrir', text: 'Le parcours ferroviaire historique confirmé par la CP relie Régua à Tua, en passant par Pinhão, avec retour à Régua. Les options au départ de Gaia ajoutent d’autres moyens de transport ; le train historique ne part pas de Porto.' },
    items: [
      { title: 'De Régua à Tua, retour par la même ligne', lead: 'Une expérience consacrée au voyage en train, avec un passage par Pinhão et du temps pour admirer le paysage.', bullets: ['Trajet aller-retour en voitures historiques.', 'Accueil à Régua avec vin de Porto et animation régionale.', 'Arrêts à Pinhão et à Tua.', 'Musique et chants régionaux pendant le voyage.', 'Le programme ferroviaire de la CP ne comprend pas le déjeuner.'], button: 'Découvrir le train historique', interest: 'comboio' },
    ],
  },
  combo: {
    title: 'Croisière et train historique',
    items: [
      { title: 'Départ de Régua avec déjeuner à bord', lead: 'Commencez par le fleuve et poursuivez à travers les paysages du Douro en voitures historiques.', bullets: ['Croisière Régua–Pinhão, avec apéritif et déjeuner à bord.', 'Passage du barrage de Régua.', 'Trajet à pied du quai de Pinhão à la gare, sans guide.', 'Train historique de Pinhão à Tua et retour à Régua, en repassant par Pinhão.', 'Croisière de retour non incluse : l’arrivée finale se fait à la gare de Régua.'], button: 'Demander des informations', interest: 'cruzeiros,comboio' },
      { title: 'Départ de Gaia, retour à Porto', lead: 'Une journée qui associe croisière, train historique et retour en train régulier.', bullets: ['Croisière de Gaia à Régua, avec petit-déjeuner et déjeuner à bord.', 'Passage des barrages de Crestuma-Lever et de Carrapatelo.', 'Trajet à pied du quai à la gare de Régua.', 'Train historique Régua–Tua–Régua.', 'Retour de Régua à Porto en train régulier de la CP.'], button: 'Demander des informations', interest: 'cruzeiros,comboio' },
    ],
  },
};

const en: typeof pt = {
  title: 'Douro river cruises and historic train | Alma Douro',
  description:
    'Cruises from Régua or Gaia, the Régua–Tua historic train and programmes that combine river and rail. Request information.',
  eyebrow: 'Experiences',
  h1: 'Cruises <em>on the Douro</em>',
  intro: 'Between hillsides covered in vines and passages through the dams, discover the Douro from a different perspective. Choose a crossing or a day of discovery with a meal on board.',
  regua: [
    { title: 'Régua to Pinhão', lead: 'An afternoon between the river and the vineyards, on a one-way boat trip.', bullets: ['Departure from Régua pier and arrival in Pinhão.', 'Passage through the Régua dam.', 'Approximate duration 2h15, according to the published timetable.', 'Return not included; it must be arranged separately.'], button: 'Request information', interest: 'cruzeiros' },
    { title: 'Régua to Pinhão and back', lead: 'Enjoy a meal on board and a break in Pinhão before returning along the river.', bullets: ['Round trip by boat, departing from and returning to Régua.', 'Port wine aperitif and lunch on board.', 'Passage through the Régua dam in both directions.', 'Free time in Pinhão. Approximate programme from 12:00 to 18:00.'], button: 'Request information', interest: 'cruzeiros' },
  ],
  gaia: {
    title: 'Cruises departing from Gaia',
    items: [
      { title: 'Gaia to Régua, returning by coach', lead: 'Watch the landscape change as you travel up the Douro.', bullets: ['Breakfast and lunch on board.', 'Passage through the Crestuma-Lever and Carrapatelo dams.', 'Free time in Régua and return to Gaia by coach.'], button: 'Request information', interest: 'cruzeiros' },
      { title: 'Gaia to Régua by coach, downstream by boat', lead: 'Start by road and return at the river’s pace.', bullets: ['Outward journey from Gaia to Régua by coach.', 'Boat trip downstream from Régua to Vila Nova de Gaia.', 'Lunch on board.', 'Passage through the Carrapatelo and Crestuma-Lever dams.'], button: 'Request information', interest: 'cruzeiros' },
      { title: 'Gaia to Pinhão, returning by coach', lead: 'Combine discovering the river with a visit and wine tasting.', bullets: ['Breakfast and lunch on board.', 'Passage through three dams: Crestuma-Lever, Carrapatelo and Régua.', 'Transfer to a quinta or wine cellar in the region, with a visit and tasting.', 'Return to Gaia by coach.'], button: 'Request information', interest: 'cruzeiros' },
    ],
  },
  closing: 'What will your next discovery be? Tell me when you plan to travel and where you will be staying. I will help you choose the cruise that best fits your stay.',
  comboio: {
    title: 'The Douro historic train',
    intro: 'Travel at the pace of times gone by, with the Douro outside your window. Discover the historic train route or combine it with a cruise to experience the region from both river and rail.',
    line: { title: 'A historic line and different ways to discover it', text: 'The historic railway route confirmed by CP runs from Régua to Tua via Pinhão, returning to Régua. Options departing from Gaia add other means of transport; the historic train does not leave from Porto.' },
    items: [
      { title: 'Régua to Tua and back on the same line', lead: 'An experience devoted to the train journey, passing through Pinhão, with time to take in the landscape.', bullets: ['Return journey in historic carriages.', 'Welcome in Régua with port wine and regional entertainment.', 'Stops in Pinhão and Tua.', 'Regional music and singing during the journey.', 'The CP rail programme does not include lunch.'], button: 'Discover the historic train', interest: 'comboio' },
    ],
  },
  combo: {
    title: 'Cruise and historic train',
    items: [
      { title: 'Departing from Régua with lunch on board', lead: 'Begin on the river and continue through the Douro landscape in historic carriages.', bullets: ['Régua–Pinhão cruise, with aperitif and lunch on board.', 'Passage through the Régua dam.', 'Walk from Pinhão pier to the station, unguided.', 'Historic train from Pinhão to Tua and back to Régua, passing through Pinhão again.', 'No return cruise: the journey ends at Régua station.'], button: 'Request information', interest: 'cruzeiros,comboio' },
      { title: 'Departing from Gaia, returning to Porto', lead: 'A day that combines a cruise, the historic train and a return by regular train.', bullets: ['Cruise from Gaia to Régua, with breakfast and lunch on board.', 'Passage through the Crestuma-Lever and Carrapatelo dams.', 'Walk from the pier to Régua station.', 'Historic train Régua–Tua–Régua.', 'Return from Régua to Porto on a regular CP train.'], button: 'Request information', interest: 'cruzeiros,comboio' },
    ],
  },
};

export const experiencias = { pt, fr, en };
