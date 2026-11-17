// «Destaques» (Seite /destaques): Aktionen und Neuheiten des Moments, aktuell Natal e Passagem de Ano.
// PT = Text der Kundin («Natal e Passagem de Ano no Douro.docx», 17.11.2026). FR/EN = Übersetzungen.
// Für eine neue Aktion: Texte hier ersetzen und in src/pages/[...lang]/destaques.astro die Fotos/Plakate tauschen.
type Offer = { id: string; title: string; text: string; button: string };

const pt = {
  title: 'Natal e Passagem de Ano no Douro | Alma Douro',
  description:
    'Cruzeiros de Natal, cruzeiros de Réveillon e jantares de fim de ano no Douro e no Porto, a dois, em família, entre amigos ou com a sua equipa.',
  eyebrow: 'Destaques do momento',
  h1: 'Natal e Passagem de Ano <em>no Douro</em>',
  intro:
    'Já pensou celebrar esta época de uma forma diferente? Um cruzeiro de Natal, uma noite de Réveillon a bordo ou um jantar à mesa com as pessoas de quem mais gosta. Seja a dois, em família, entre amigos ou com a sua equipa, ajudo a encontrar uma proposta que faça sentido para o vosso grupo.',
  button: 'Ver as propostas',
  posterHint: 'Clique no cartaz para o ver em tamanho grande.',
  offers: [
    { id: 'natal', title: 'Cruzeiros de Natal', text: 'Este ano, que tal trocar a mesa de sempre por uma mesa a bordo? Descubra as propostas de cruzeiros de Natal e escolha uma forma diferente de reunir a família ou os amigos e celebrar esta época no Douro.', button: 'Ver os cruzeiros de Natal' },
    { id: 'reveillon', title: 'Cruzeiros de Réveillon', text: 'Dê as boas-vindas ao novo ano a bordo. Quer prefira uma noite a dois, uma celebração em família ou uma festa entre amigos, posso apresentar-lhe as opções disponíveis e ajudá-lo a escolher a que mais combina com os seus planos.', button: 'Ver os cruzeiros de Réveillon' },
    { id: 'jantares', title: 'Jantares de fim de ano', text: 'Um jantar de Natal com a sua equipa, uma reunião de família ou uma noite especial entre amigos. Diga-me quantas pessoas são, a data que têm em mente e o ambiente que procuram. Ajudo-vos a encontrar um espaço e uma proposta de jantar à medida do grupo.', button: 'Pedir uma proposta de jantar' },
  ] as Offer[],
  cta: {
    title: 'Vamos preparar <em>a sua celebração?</em>',
    text: 'Já tem uma data em mente ou ainda está a comparar opções? Conte-me o que imagina. Posso indicar-lhe os programas, os preços e a disponibilidade para a proposta que mais lhe interessa.',
    button: 'Enviar um pedido',
  },
  teaser: { label: 'Em destaque', text: 'Natal e Passagem de Ano no Douro', link: 'Ver as propostas' },
};

const fr: typeof pt = {
  title: 'Noël et Nouvel An dans le Douro | Alma Douro',
  description:
    'Croisières de Noël, croisières du Réveillon et repas de fin d’année dans le Douro et à Porto, à deux, en famille, entre amis ou avec votre équipe.',
  eyebrow: 'À la une',
  h1: 'Noël et Nouvel An <em>dans le Douro</em>',
  intro:
    'Et si vous célébriez les fêtes autrement cette année ? Une croisière de Noël, une soirée de Réveillon à bord ou un repas avec les personnes qui vous sont chères. À deux, en famille, entre amis ou avec votre équipe, je vous aide à trouver la proposition qui convient à votre groupe.',
  button: 'Voir les propositions',
  posterHint: 'Cliquez sur l’affiche pour l’agrandir.',
  offers: [
    { id: 'natal', title: 'Croisières de Noël', text: 'Et si, cette année, vous remplaciez la table habituelle par une table à bord ? Découvrez les croisières de Noël et choisissez une façon différente de réunir votre famille ou vos amis pour célébrer les fêtes dans le Douro.', button: 'Voir les croisières de Noël' },
    { id: 'reveillon', title: 'Croisières du Réveillon', text: 'Accueillez la nouvelle année à bord. Soirée à deux, fête en famille ou célébration entre amis : je vous présente les options disponibles et vous aide à choisir celle qui correspond le mieux à vos projets.', button: 'Voir les croisières du Réveillon' },
    { id: 'jantares', title: 'Repas de fin d’année', text: 'Un repas de Noël avec votre équipe, une réunion de famille ou une soirée spéciale entre amis. Dites-moi combien vous serez, la date envisagée et l’ambiance que vous recherchez. Je vous aide à trouver un lieu et un menu adaptés à votre groupe.', button: 'Demander une proposition de repas' },
  ],
  cta: {
    title: 'Préparons <em>votre célébration ?</em>',
    text: 'Vous avez déjà une date en tête ou vous comparez encore les options ? Dites-moi ce que vous imaginez. Je vous indique les programmes, les prix et les disponibilités de la proposition qui vous intéresse.',
    button: 'Envoyer une demande',
  },
  teaser: { label: 'À la une', text: 'Noël et Nouvel An dans le Douro', link: 'Voir les propositions' },
};

const en: typeof pt = {
  title: 'Christmas and New Year in the Douro | Alma Douro',
  description:
    'Christmas cruises, New Year’s Eve cruises and end-of-year dinners in the Douro and Porto, for two, with family, with friends or with your team.',
  eyebrow: 'Highlights',
  h1: 'Christmas and New Year <em>in the Douro</em>',
  intro:
    'Why not celebrate the season a little differently this year? A Christmas cruise, a New Year’s Eve on board or a dinner with the people you love most. For two, with family, with friends or with your team, I will help you find the option that suits your group.',
  button: 'See the offers',
  posterHint: 'Click on a poster to see it in full size.',
  offers: [
    { id: 'natal', title: 'Christmas cruises', text: 'This year, why not swap the usual table for one on board? Discover the Christmas cruises and choose a different way to bring family or friends together and celebrate the season in the Douro.', button: 'See the Christmas cruises' },
    { id: 'reveillon', title: 'New Year’s Eve cruises', text: 'Welcome the new year on board. Whether you prefer an evening for two, a family celebration or a party with friends, I can present the available options and help you choose the one that best fits your plans.', button: 'See the New Year’s Eve cruises' },
    { id: 'jantares', title: 'End-of-year dinners', text: 'A Christmas dinner with your team, a family gathering or a special evening with friends. Tell me how many of you there are, the date you have in mind and the atmosphere you are looking for. I will help you find a venue and a dinner tailored to your group.', button: 'Ask for a dinner proposal' },
  ],
  cta: {
    title: 'Shall we plan <em>your celebration?</em>',
    text: 'Do you already have a date in mind or are you still comparing options? Tell me what you have in mind. I can share the programmes, prices and availability for the offer that interests you most.',
    button: 'Send a request',
  },
  teaser: { label: 'Highlight', text: 'Christmas and New Year in the Douro', link: 'See the offers' },
};

export const destaques = { pt, fr, en };
