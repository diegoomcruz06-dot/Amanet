// Impressum und Datenschutzerklärung (nDSG / DSGVO). ENTWURF – vor dem Livegang von Tania prüfen lassen (siehe OPEN_QUESTIONS.md).
// Platzhalter: {address} = Adressblock, {email} = E-Mail-Link, {privacy} = Link Datenschutz.
type Section = { title: string; html: string[] };
type LegalPage = { title: string; description: string; h1: string; updated: string; sections: Section[] };

export const avisoLegal: Record<'fr' | 'pt' | 'en', LegalPage> = {
  pt: {
    title: 'Aviso legal | Alma Douro',
    description: 'Aviso legal do site alma-douro.com: responsável, contacto, alojamento e direitos de autor.',
    h1: 'Aviso legal',
    updated: 'Última atualização: outubro de 2026',
    sections: [
      { title: 'Responsável pelo site', html: ['{address}', 'E-mail: {email}'] },
      { title: 'Alojamento do site', html: ['Este site é alojado pela Netlify, Inc. (EUA). Ver também a {privacy}.'] },
      { title: 'Conceção e desenvolvimento', html: ['Amanet Digital, Wohlen AG, Suíça – <a href="https://amanetdigital.ch" rel="noopener">amanetdigital.ch</a>'] },
      { title: 'Direitos de autor', html: ['Os textos, fotografias e o logótipo deste site pertencem à Alma Douro, salvo indicação em contrário. Qualquer reprodução requer autorização prévia por escrito.'] },
      { title: 'Exclusão de responsabilidade', html: ['As informações deste site são preparadas com cuidado, mas não garantimos que estejam sempre completas, exatas ou atualizadas. Horários, disponibilidades e condições dos parceiros podem mudar e são confirmados no momento da reserva.', 'Este site contém ligações para sites de terceiros. Não temos influência sobre o seu conteúdo e declinamos qualquer responsabilidade por esses sites.'] },
    ],
  },
  fr: {
    title: 'Mentions légales | Alma Douro',
    description: 'Mentions légales du site alma-douro.com : responsable, contact, hébergement et droits d’auteur.',
    h1: 'Mentions légales',
    updated: 'Dernière mise à jour : octobre 2026',
    sections: [
      { title: 'Responsable du site', html: ['{address}', 'E-mail : {email}'] },
      { title: 'Hébergement', html: ['Ce site est hébergé par Netlify, Inc. (États-Unis). Voir aussi la {privacy}.'] },
      { title: 'Conception et réalisation', html: ['Amanet Digital, Wohlen AG, Suisse – <a href="https://amanetdigital.ch" rel="noopener">amanetdigital.ch</a>'] },
      { title: 'Droits d’auteur', html: ['Les textes, photographies et le logo de ce site appartiennent à Alma Douro, sauf mention contraire. Toute reproduction nécessite une autorisation écrite préalable.'] },
      { title: 'Exclusion de responsabilité', html: ['Les informations de ce site sont préparées avec soin, mais nous ne pouvons garantir qu’elles soient toujours complètes, exactes ou à jour. Les horaires, disponibilités et conditions des partenaires peuvent changer et sont confirmés au moment de la réservation.', 'Ce site contient des liens vers des sites de tiers. Nous n’avons aucune influence sur leur contenu et déclinons toute responsabilité à leur égard.'] },
    ],
  },
  en: {
    title: 'Legal notice | Alma Douro',
    description: 'Legal notice for alma-douro.com: website owner, contact details, hosting and copyright.',
    h1: 'Legal notice',
    updated: 'Last updated: October 2026',
    sections: [
      { title: 'Responsible for this website', html: ['{address}', 'Email: {email}'] },
      { title: 'Hosting', html: ['This website is hosted by Netlify, Inc. (USA). See also the {privacy}.'] },
      { title: 'Design and development', html: ['Amanet Digital, Wohlen AG, Switzerland – <a href="https://amanetdigital.ch" rel="noopener">amanetdigital.ch</a>'] },
      { title: 'Copyright', html: ['The texts, photographs and logo on this website belong to Alma Douro unless stated otherwise. Any reproduction requires prior written permission.'] },
      { title: 'Disclaimer', html: ['The information on this website is prepared with care, but we cannot guarantee that it is always complete, accurate or up to date. Partners’ schedules, availability and conditions may change and are confirmed at the time of booking.', 'This website contains links to third-party websites. We have no influence over their content and accept no liability for them.'] },
    ],
  },
};

export const privacidade: Record<'fr' | 'pt' | 'en', LegalPage> = {
  pt: {
    title: 'Política de privacidade | Alma Douro',
    description: 'Como a Alma Douro trata os seus dados: alojamento na Netlify, formulário de contacto, sem cookies e sem tracking. Segundo a nLPD e o RGPD.',
    h1: 'Política de privacidade',
    updated: 'Última atualização: outubro de 2026',
    sections: [
      { title: 'Em resumo', html: ['Este site não utiliza cookies, ferramentas de análise nem publicidade. Os seus dados só são tratados quando nos escreve, e apenas para responder ao seu pedido.', 'Esta política aplica-se segundo a Lei Federal suíça sobre a Proteção de Dados (nLPD) e, para visitantes da União Europeia, o Regulamento Geral sobre a Proteção de Dados (RGPD).'] },
      { title: 'Responsável pelo tratamento', html: ['{address}', 'E-mail: {email}'] },
      { title: 'Alojamento (Netlify)', html: ['O site é alojado pela Netlify, Inc., nos EUA. Ao visitar o site, o servidor regista automaticamente dados técnicos (por exemplo, endereço IP, data e hora, página visitada, navegador). Estes dados servem apenas para disponibilizar o site e garantir a sua segurança.', 'A transferência de dados para os EUA baseia-se em garantias adequadas, como as cláusulas contratuais-tipo e, quando aplicável, o Data Privacy Framework entre a Suíça, a UE e os EUA.'] },
      { title: 'Formulário de contacto (Netlify Forms)', html: ['Quando utiliza o formulário, tratamos os dados que nos fornece: nome, e-mail, e, se o indicar, telefone, período da viagem, número de pessoas e a sua mensagem. O formulário é processado pela Netlify Forms e uma cópia é enviada para o nosso endereço de e-mail.', 'Utilizamos estes dados exclusivamente para responder ao seu pedido e, se for o caso, preparar a sua viagem. A base legal é o seu consentimento e a preparação de um contrato (art. 6.º, n.º 1, alíneas a) e b) do RGPD).', 'Conservamos os dados apenas pelo tempo necessário para tratar o pedido ou cumprir obrigações legais. Pode retirar o seu consentimento a qualquer momento por e-mail.'] },
      { title: 'E-mail e WhatsApp', html: ['Se nos escrever por e-mail, a sua mensagem é tratada pelo nosso fornecedor de e-mail. Se utilizar o WhatsApp, aplica-se também a política de privacidade da WhatsApp (Meta). Só utilize o WhatsApp se estiver de acordo.'] },
      { title: 'Sem cookies, sem tracking', html: ['Não utilizamos cookies, ferramentas de análise, pixels de publicidade nem plugins de redes sociais. As fontes tipográficas estão alojadas no próprio site; não são carregadas a partir de servidores de terceiros.'] },
      { title: 'Ligações externas', html: ['Os sites dos nossos parceiros e outras ligações externas têm as suas próprias políticas de privacidade, pelas quais não somos responsáveis.'] },
      { title: 'Os seus direitos', html: ['Tem o direito de pedir acesso, retificação ou eliminação dos seus dados, de se opor ao seu tratamento e de solicitar a sua portabilidade. Para isso, basta escrever para {email}.', 'Tem também o direito de apresentar uma reclamação junto do Comissário Federal suíço para a Proteção de Dados e a Transparência (PFPDT) ou, se residir na UE, junto da autoridade de controlo do seu país.'] },
    ],
  },
  fr: {
    title: 'Protection des données | Alma Douro',
    description: 'Comment Alma Douro traite vos données : hébergement chez Netlify, formulaire de contact, sans cookies ni suivi. Selon la nLPD et le RGPD.',
    h1: 'Protection des données',
    updated: 'Dernière mise à jour : octobre 2026',
    sections: [
      { title: 'En bref', html: ['Ce site n’utilise ni cookies, ni outils d’analyse, ni publicité. Vos données ne sont traitées que lorsque vous nous écrivez, et uniquement pour répondre à votre demande.', 'Cette politique s’applique selon la loi fédérale suisse sur la protection des données (nLPD) et, pour les visiteurs de l’Union européenne, le règlement général sur la protection des données (RGPD).'] },
      { title: 'Responsable du traitement', html: ['{address}', 'E-mail : {email}'] },
      { title: 'Hébergement (Netlify)', html: ['Le site est hébergé par Netlify, Inc., aux États-Unis. Lors de votre visite, le serveur enregistre automatiquement des données techniques (par exemple adresse IP, date et heure, page consultée, navigateur). Ces données servent uniquement à mettre le site à disposition et à en assurer la sécurité.', 'Le transfert de données vers les États-Unis repose sur des garanties appropriées, telles que les clauses contractuelles types et, le cas échéant, le Data Privacy Framework entre la Suisse, l’UE et les États-Unis.'] },
      { title: 'Formulaire de contact (Netlify Forms)', html: ['Lorsque vous utilisez le formulaire, nous traitons les données que vous nous transmettez : nom, e-mail et, si vous les indiquez, téléphone, période du voyage, nombre de personnes et votre message. Le formulaire est traité par Netlify Forms et une copie est envoyée à notre adresse e-mail.', 'Nous utilisons ces données exclusivement pour répondre à votre demande et, le cas échéant, préparer votre voyage. La base légale est votre consentement et la préparation d’un contrat (art. 6, al. 1, let. a et b RGPD).', 'Nous conservons les données uniquement le temps nécessaire au traitement de la demande ou au respect d’obligations légales. Vous pouvez retirer votre consentement à tout moment par e-mail.'] },
      { title: 'E-mail et WhatsApp', html: ['Si vous nous écrivez par e-mail, votre message est traité par notre fournisseur de messagerie. Si vous utilisez WhatsApp, la politique de confidentialité de WhatsApp (Meta) s’applique également. N’utilisez WhatsApp que si vous l’acceptez.'] },
      { title: 'Sans cookies, sans suivi', html: ['Nous n’utilisons ni cookies, ni outils d’analyse, ni pixels publicitaires, ni plugins de réseaux sociaux. Les polices d’écriture sont hébergées sur le site lui-même et ne sont pas chargées depuis des serveurs tiers.'] },
      { title: 'Liens externes', html: ['Les sites de nos partenaires et les autres liens externes disposent de leurs propres politiques de confidentialité, dont nous ne sommes pas responsables.'] },
      { title: 'Vos droits', html: ['Vous avez le droit de demander l’accès à vos données, leur rectification ou leur effacement, de vous opposer à leur traitement et d’en demander la portabilité. Il vous suffit d’écrire à {email}.', 'Vous avez également le droit de déposer une plainte auprès du Préposé fédéral à la protection des données et à la transparence (PFPDT) ou, si vous résidez dans l’UE, auprès de l’autorité de contrôle de votre pays.'] },
    ],
  },
  en: {
    title: 'Privacy policy | Alma Douro',
    description: 'How Alma Douro handles your data: hosting on Netlify, contact form, no cookies and no tracking. In line with the Swiss FADP and the GDPR.',
    h1: 'Privacy policy',
    updated: 'Last updated: October 2026',
    sections: [
      { title: 'In short', html: ['This website uses no cookies, no analytics and no advertising. Your data is only processed when you write to us, and only to respond to your enquiry.', 'This policy applies under the Swiss Federal Act on Data Protection (FADP) and, for visitors from the European Union, the General Data Protection Regulation (GDPR).'] },
      { title: 'Controller', html: ['{address}', 'Email: {email}'] },
      { title: 'Hosting (Netlify)', html: ['The website is hosted by Netlify, Inc. in the USA. When you visit the website, the server automatically logs technical data (for example IP address, date and time, page visited, browser). This data is used solely to provide the website and keep it secure.', 'The transfer of data to the USA is based on appropriate safeguards, such as standard contractual clauses and, where applicable, the Swiss-EU-US Data Privacy Framework.'] },
      { title: 'Contact form (Netlify Forms)', html: ['When you use the form, we process the data you provide: name, email and, if you choose to give them, phone number, travel dates, number of people and your message. The form is processed by Netlify Forms and a copy is sent to our email address.', 'We use this data solely to respond to your enquiry and, where applicable, to prepare your trip. The legal basis is your consent and the preparation of a contract (Art. 6(1)(a) and (b) GDPR).', 'We keep the data only for as long as needed to handle your enquiry or to meet legal obligations. You can withdraw your consent at any time by email.'] },
      { title: 'Email and WhatsApp', html: ['If you email us, your message is processed by our email provider. If you use WhatsApp, WhatsApp’s (Meta’s) privacy policy also applies. Only use WhatsApp if you agree to this.'] },
      { title: 'No cookies, no tracking', html: ['We do not use cookies, analytics tools, advertising pixels or social media plugins. Fonts are hosted on this website and are not loaded from third-party servers.'] },
      { title: 'External links', html: ['Our partners’ websites and other external links have their own privacy policies, for which we are not responsible.'] },
      { title: 'Your rights', html: ['You have the right to request access to, correction or deletion of your data, to object to its processing and to request data portability. Simply write to {email}.', 'You also have the right to lodge a complaint with the Swiss Federal Data Protection and Information Commissioner (FDPIC) or, if you live in the EU, with the supervisory authority in your country.'] },
    ],
  },
};
