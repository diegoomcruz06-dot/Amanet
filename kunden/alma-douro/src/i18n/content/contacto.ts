// «Contacto». PT = definitiver Text der Kundin (06-contacto.md). FR/EN = Übersetzungen.
// Danke- und 404-Seite: Entwurf Amanet (siehe DRAFTS_REVIEW.md).
// Die Werte der Checkboxen (value) bleiben in allen Sprachen auf Portugiesisch, damit Tania die Anfragen einheitlich sieht.
export const INTERESTS = [
  { key: 'estadia', value: 'Uma estadia organizada à minha medida' },
  { key: 'cruzeiros', value: 'Cruzeiros no Douro' },
  { key: 'comboio', value: 'Comboio histórico' },
  { key: 'quintas', value: 'Visitas a quintas e provas de vinho' },
  { key: 'piqueniques', value: 'Piqueniques e experiências de vindima' },
  { key: 'paisagens', value: 'Paisagens, miradouros e aldeias' },
  { key: 'inspiracao', value: 'Ainda procuro inspiração' },
] as const;

export const contacto = {
  pt: {
    title: 'Contacto | Prepare a sua viagem ao Douro',
    description:
      'Conte-me o que gostaria de viver no Douro. Formulário de pedido, e-mail, telefone, Instagram e TikTok da Alma Douro.',
    eyebrow: 'Contacto',
    h1: 'A sua viagem <em>começa aqui.</em>',
    intro: [
      'Já imagina uns dias no Douro ou ainda está à procura de inspiração?',
      'Conte-me o que gostaria de viver. Não precisa de ter tudo decidido. Vamos preparar juntos os próximos passos.',
    ],
    direct: { title: 'Vamos conversar?', email: 'E-mail', phone: 'Telefone' },
    form: {
      title: 'O que o traz ao Douro?',
      lead: 'Preencha o formulário com as informações que já tiver. Entrarei em contacto consigo para conhecer melhor os seus desejos e perceber como posso ajudar.',
      name: 'Nome',
      email: 'E-mail',
      phone: 'Telefone',
      when: 'Quando gostaria de viajar?',
      whenHint: 'Indique as datas ou a época do ano. Se ainda não decidiu, também está tudo bem.',
      people: 'Quantas pessoas vão viajar?',
      peopleHint: 'Número de adultos e crianças, com as respetivas idades.',
      interests: 'O que gostaria de descobrir?',
      interestLabels: ['Uma estadia organizada à minha medida', 'Cruzeiros no Douro', 'Comboio histórico', 'Visitas a quintas e provas de vinho', 'Piqueniques e experiências de vindima', 'Paisagens, miradouros e aldeias', 'Ainda procuro inspiração'],
      budget: 'Qual é o orçamento aproximado para a estadia? — opcional',
      budgetHint: 'Indique o valor global ou por pessoa, sem os bilhetes de avião.',
      message: 'A sua mensagem',
      messageHint: 'Partilhe as suas preferências, conte-me o que procura ou deixe as suas perguntas.',
      privacy: 'Os dados enviados serão utilizados para responder ao seu pedido e preparar a proposta solicitada. Consulte a <a href="{privacy}">Política de Privacidade</a> para saber mais.',
      submit: 'Enviar o meu pedido',
      honeypot: 'Não preencha este campo',
    },
    closing: 'Será um prazer ajudá-lo a descobrir o Douro.',
  },
  fr: {
    title: 'Contact | Préparez votre voyage dans le Douro',
    description:
      'Racontez-moi ce que vous aimeriez vivre dans le Douro. Formulaire de demande, e-mail, téléphone, Instagram et TikTok d’Alma Douro.',
    eyebrow: 'Contact',
    h1: 'Votre voyage <em>commence ici.</em>',
    intro: [
      'Vous imaginez déjà quelques jours dans le Douro ou vous êtes encore en quête d’inspiration ?',
      'Racontez-moi ce que vous aimeriez vivre. Inutile d’avoir tout décidé. Nous préparerons ensemble les prochaines étapes.',
    ],
    direct: { title: 'Et si nous en parlions ?', email: 'E-mail', phone: 'Téléphone' },
    form: {
      title: 'Qu’est-ce qui vous amène dans le Douro ?',
      lead: 'Remplissez le formulaire avec les informations dont vous disposez déjà. Je vous contacterai pour mieux connaître vos envies et voir comment je peux vous aider.',
      name: 'Nom',
      email: 'E-mail',
      phone: 'Téléphone',
      when: 'Quand aimeriez-vous voyager ?',
      whenHint: 'Indiquez les dates ou la période de l’année. Si vous n’avez pas encore décidé, ce n’est pas un problème.',
      people: 'Combien de personnes vont voyager ?',
      peopleHint: 'Nombre d’adultes et d’enfants, avec leur âge.',
      interests: 'Qu’aimeriez-vous découvrir ?',
      interestLabels: ['Un séjour organisé sur mesure', 'Croisières sur le Douro', 'Train historique', 'Visites de quintas et dégustations de vin', 'Pique-niques et expériences de vendanges', 'Paysages, belvédères et villages', 'Je cherche encore l’inspiration'],
      budget: 'Quel est le budget approximatif pour le séjour ? — facultatif',
      budgetHint: 'Indiquez le montant total ou par personne, sans les billets d’avion.',
      message: 'Votre message',
      messageHint: 'Partagez vos préférences, racontez-moi ce que vous recherchez ou posez vos questions.',
      privacy: 'Les données envoyées seront utilisées pour répondre à votre demande et préparer la proposition demandée. Consultez la <a href="{privacy}">politique de protection des données</a> pour en savoir plus.',
      submit: 'Envoyer ma demande',
      honeypot: 'Ne remplissez pas ce champ',
    },
    closing: 'Ce sera un plaisir de vous aider à découvrir le Douro.',
  },
  en: {
    title: 'Contact | Plan your trip to the Douro',
    description:
      'Tell me what you would like to experience in the Douro. Enquiry form, email, phone, Instagram and TikTok for Alma Douro.',
    eyebrow: 'Contact',
    h1: 'Your journey <em>starts here.</em>',
    intro: [
      'Are you already picturing a few days in the Douro, or still looking for inspiration?',
      'Tell me what you would like to experience. You don’t need to have everything decided. We will plan the next steps together.',
    ],
    direct: { title: 'Shall we talk?', email: 'Email', phone: 'Phone' },
    form: {
      title: 'What brings you to the Douro?',
      lead: 'Fill in the form with whatever information you already have. I will get in touch to learn more about your wishes and see how I can help.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      when: 'When would you like to travel?',
      whenHint: 'Give the dates or the time of year. If you haven’t decided yet, that’s fine too.',
      people: 'How many people will be travelling?',
      peopleHint: 'Number of adults and children, with their ages.',
      interests: 'What would you like to discover?',
      interestLabels: ['A stay organised around me', 'Douro river cruises', 'Historic train', 'Quinta visits and wine tastings', 'Picnics and harvest experiences', 'Landscapes, viewpoints and villages', 'Still looking for inspiration'],
      budget: 'What is your approximate budget for the stay? — optional',
      budgetHint: 'Give the total amount or the amount per person, excluding flights.',
      message: 'Your message',
      messageHint: 'Share your preferences, tell me what you are looking for or ask your questions.',
      privacy: 'The data you send will be used to respond to your enquiry and prepare the proposal you requested. See the <a href="{privacy}">privacy policy</a> to find out more.',
      submit: 'Send my enquiry',
      honeypot: 'Do not fill in this field',
    },
    closing: 'It will be a pleasure to help you discover the Douro.',
  },
};

export const obrigado = {
  pt: {
    title: 'Obrigada pela sua mensagem | Alma Douro',
    description: 'A sua mensagem foi enviada com sucesso.',
    h1: 'Obrigada pela <em>sua mensagem</em>',
    text: 'Recebi o seu pedido e vou responder-lhe pessoalmente o mais brevemente possível. Até já!',
    button: 'Voltar à página inicial',
  },
  fr: {
    title: 'Merci pour votre message | Alma Douro',
    description: 'Votre message a bien été envoyé.',
    h1: 'Merci pour <em>votre message</em>',
    text: 'J’ai bien reçu votre demande et je vous répondrai personnellement dans les meilleurs délais. À très bientôt !',
    button: 'Retour à l’accueil',
  },
  en: {
    title: 'Thank you for your message | Alma Douro',
    description: 'Your message has been sent.',
    h1: 'Thank you for <em>your message</em>',
    text: 'I have received your enquiry and will reply to you personally as soon as possible. Speak soon!',
    button: 'Back to the home page',
  },
};

export const notFound = {
  pt: {
    title: 'Página não encontrada | Alma Douro',
    description: 'A página que procura não existe ou mudou de endereço.',
    h1: 'Esta página <em>não existe</em>',
    text: 'A página que procura não existe ou mudou de endereço. Talvez encontre o que procura aqui:',
  },
  fr: {
    title: 'Page introuvable | Alma Douro',
    description: 'La page que vous cherchez n’existe pas ou a changé d’adresse.',
    h1: 'Cette page <em>n’existe pas</em>',
    text: 'La page que vous cherchez n’existe pas ou a changé d’adresse. Vous trouverez peut-être votre bonheur ici :',
  },
  en: {
    title: 'Page not found | Alma Douro',
    description: 'The page you are looking for does not exist or has moved.',
    h1: 'This page <em>doesn’t exist</em>',
    text: 'The page you are looking for does not exist or has moved. Perhaps you will find what you need here:',
  },
};
