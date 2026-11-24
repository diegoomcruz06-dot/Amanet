// Mentions légales + conditions générales (eine Seite, /aviso-legal) und Politique de confidentialité (/privacidade).
// FR/PT = freigegebener Text «Alma Douro – Mentions légales, conditions générales et confidentialité» (22.11.2026),
// Lücken gefüllt (E-Mail, Telefon, Hosting). EN = Übersetzung. Netlify und Amanet stehen nur in der Datenschutzerklärung.
// Bei Änderungen «updated» nachführen.
// Platzhalter: {address} = Adressblock, {email} = E-Mail-Link, {phone} = Telefon-Link, {privacy} = Link Datenschutz,
// {credits} = Bildnachweise (automatisch aus src/i18n/images.ts).
// level 2 = Hauptteil (h2), level 3 = Unterpunkt (h3). Absätze, die mit <ul> beginnen, werden als Liste ausgegeben.
type Section = { title: string; html: string[]; level?: 2 | 3 };
type LegalPage = { title: string; description: string; h1: string; updated: string; sections: Section[] };

const AMANET = '<a href="https://www.amanetdigital.ch" rel="noopener">amanetdigital.ch</a>';

export const avisoLegal: Record<'fr' | 'pt' | 'en', LegalPage> = {
  fr: {
    title: 'Mentions légales et conditions générales | Alma Douro',
    description: 'Mentions légales et conditions générales d’Alma Douro : coordonnées, demandes, offres, prix, annulation, responsabilité et droit applicable.',
    h1: 'Mentions légales et conditions générales',
    updated: 'Version de novembre 2026',
    sections: [
      { title: 'Mentions légales', html: ['Alma Douro<br />Tânia Afonso, entreprise individuelle<br />A Vesin 22<br />1483 Vesin, Suisse', 'E-mail : {email}<br />Téléphone : {phone}', 'Les contenus de ce site (textes, photos, logo) sont protégés. Toute reproduction nécessite notre accord écrit. Nous ne répondons pas du contenu des sites externes vers lesquels nous renvoyons.'] },
      { level: 3, title: 'Crédits photos', html: ['Certaines photographies proviennent de Wikimedia Commons et sont utilisées conformément à leurs licences respectives (images recadrées et optimisées pour le web) :', '{credits}'] },
      { title: 'Conditions générales', html: [] },
      { level: 3, title: '1. Champ d’application', html: ['Ces conditions s’appliquent à toutes les demandes, propositions et réservations faites auprès d’Alma Douro, via le site, par e-mail ou par téléphone. Les conditions particulières figurant dans une offre prévalent sur les présentes.'] },
      { level: 3, title: '2. Prestations', html: ['Alma Douro propose des séjours, des expériences gourmandes et des activités dans la vallée du Douro, ainsi que des voyages sur mesure avec un accompagnement personnel. Les prestations sur place (hébergement, repas, visites, dégustations, transports) sont fournies par nos partenaires, selon leurs propres conditions.'] },
      { level: 3, title: '3. Demande et offre', html: ['Une demande via le formulaire de contact est sans engagement. Sur cette base, nous établissons une proposition personnalisée avec le détail des prestations, le prix et les conditions de paiement et d’annulation. Le contrat est conclu lorsque vous confirmez l’offre par écrit (e-mail suffit) et que nous accusons réception de cette confirmation.'] },
      { level: 3, title: '4. Prix et paiement', html: ['Les prix sont indiqués dans l’offre, en francs suisses (CHF) ou en euros (EUR). Sauf mention contraire, ils ne comprennent pas le voyage jusqu’au Portugal, les assurances, les dépenses personnelles ni les taxes de séjour locales. L’acompte et le solde sont dus selon les échéances indiquées dans l’offre.'] },
      { level: 3, title: '5. Modification et annulation', html: ['Toute modification ou annulation doit nous être communiquée par écrit. Les frais d’annulation figurent dans l’offre et dépendent des conditions de nos partenaires. Nous recommandons de conclure une assurance annulation et assistance.'] },
      { level: 3, title: '6. Modifications de notre part', html: ['Si un partenaire ne peut pas fournir une prestation prévue, nous proposons une alternative équivalente. Si elle ne vous convient pas, la part concernée déjà payée vous est remboursée.'] },
      { level: 3, title: '7. Documents de voyage et santé', html: ['Vous êtes responsable de vos documents de voyage (pièce d’identité ou passeport) et du respect des règles d’entrée au Portugal. Merci de nous signaler à l’avance les allergies, régimes alimentaires et besoins particuliers.'] },
      { level: 3, title: '8. Responsabilité', html: ['Nous répondons de l’exécution soigneuse de nos propres prestations (conseil, conception, organisation). Pour les prestations fournies par les partenaires, la responsabilité de ceux-ci s’applique. Dans la mesure permise par la loi, notre responsabilité est limitée aux dommages causés intentionnellement ou par négligence grave. Les dispositions impératives, notamment celles de la loi fédérale sur les voyages à forfait lorsqu’elle s’applique, sont réservées.'] },
      { level: 3, title: '9. Réclamations', html: ['Un problème sur place doit être signalé immédiatement au partenaire concerné et à nous, afin que nous puissions trouver une solution. Les réclamations écrites sont à adresser dans les 30 jours suivant la fin du séjour.'] },
      { level: 3, title: '10. Partenaires', html: ['Les demandes de partenariat via le site sont sans engagement. Une collaboration fait l’objet d’un accord séparé.'] },
      { level: 3, title: '11. Protection des données', html: ['Le traitement des données personnelles est décrit dans notre {privacy}.'] },
      { level: 3, title: '12. Droit applicable et for', html: ['Le droit suisse est applicable. Le for est au siège d’Alma Douro, sous réserve des fors impératifs prévus par la loi en faveur des consommateurs.'] },
    ],
  },
  pt: {
    title: 'Informação legal e condições gerais | Alma Douro',
    description: 'Informação legal e condições gerais da Alma Douro: contactos, pedidos, propostas, preços, cancelamento, responsabilidade e lei aplicável.',
    h1: 'Informação legal e condições gerais',
    updated: 'Versão de novembro de 2026',
    sections: [
      { title: 'Informação legal', html: ['Alma Douro<br />Tânia Afonso, empresa individual<br />A Vesin 22<br />1483 Vesin, Suíça', 'E-mail: {email}<br />Telefone: {phone}', 'Os conteúdos deste site (textos, fotografias, logótipo) estão protegidos. Qualquer reprodução requer o nosso acordo escrito. Não somos responsáveis pelo conteúdo de sites externos para os quais remetemos.'] },
      { level: 3, title: 'Créditos fotográficos', html: ['Algumas fotografias provêm do Wikimedia Commons e são utilizadas de acordo com as respetivas licenças (imagens recortadas e otimizadas para a web):', '{credits}'] },
      { title: 'Condições Gerais', html: [] },
      { level: 3, title: '1. Âmbito', html: ['Estas condições aplicam-se a todos os pedidos, propostas e reservas feitos junto da Alma Douro, pelo site, por e-mail ou por telefone. As condições particulares de uma proposta prevalecem sobre estas.'] },
      { level: 3, title: '2. Serviços', html: ['A Alma Douro propõe estadias, experiências gastronómicas e atividades no vale do Douro, bem como viagens à medida com acompanhamento pessoal. Os serviços no local (alojamento, refeições, visitas, provas, transportes) são prestados pelos nossos parceiros, segundo as suas próprias condições.'] },
      { level: 3, title: '3. Pedido e proposta', html: ['Um pedido através do formulário de contacto é sem compromisso. Com base nele, elaboramos uma proposta personalizada com os serviços, o preço e as condições de pagamento e de cancelamento. O contrato é celebrado quando confirma a proposta por escrito (basta um e-mail) e nós confirmamos a receção.'] },
      { level: 3, title: '4. Preços e pagamento', html: ['Os preços constam da proposta, em francos suíços (CHF) ou euros (EUR). Salvo indicação em contrário, não incluem a viagem até Portugal, seguros, despesas pessoais nem taxas turísticas locais. O sinal e o restante valor são pagos nas datas indicadas na proposta.'] },
      { level: 3, title: '5. Alteração e cancelamento', html: ['Alterações e cancelamentos devem ser comunicados por escrito. Os custos de cancelamento constam da proposta e dependem das condições dos nossos parceiros. Recomendamos um seguro de cancelamento e assistência.'] },
      { level: 3, title: '6. Alterações da nossa parte', html: ['Se um parceiro não puder prestar um serviço previsto, propomos uma alternativa equivalente. Se não lhe convier, reembolsamos a parte já paga.'] },
      { level: 3, title: '7. Documentos de viagem e saúde', html: ['O cliente é responsável pelos seus documentos de viagem (cartão de identidade ou passaporte) e pelo cumprimento das regras de entrada em Portugal. Pedimos que nos informe antecipadamente de alergias, regimes alimentares e necessidades especiais.'] },
      { level: 3, title: '8. Responsabilidade', html: ['Respondemos pela prestação cuidadosa dos nossos próprios serviços (aconselhamento, conceção, organização). Pelos serviços dos parceiros aplica-se a responsabilidade destes. Na medida permitida por lei, a nossa responsabilidade limita-se a danos causados com dolo ou negligência grave. Ficam ressalvadas as disposições imperativas, nomeadamente as da lei federal suíça sobre viagens organizadas, quando aplicável.'] },
      { level: 3, title: '9. Reclamações', html: ['Um problema no local deve ser comunicado de imediato ao parceiro em causa e a nós, para que possamos encontrar uma solução. As reclamações escritas devem ser enviadas no prazo de 30 dias após o fim da estadia.'] },
      { level: 3, title: '10. Parceiros', html: ['Os pedidos de parceria através do site são sem compromisso. Uma colaboração é objeto de acordo separado.'] },
      { level: 3, title: '11. Proteção de dados', html: ['O tratamento de dados pessoais é descrito na nossa {privacy}.'] },
      { level: 3, title: '12. Lei aplicável e foro', html: ['Aplica-se o direito suíço. O foro é a sede da Alma Douro, ressalvados os foros imperativos previstos na lei a favor dos consumidores.'] },
    ],
  },
  en: {
    title: 'Legal notice and terms and conditions | Alma Douro',
    description: 'Legal notice and terms and conditions of Alma Douro: contact details, enquiries, offers, prices, cancellation, liability and applicable law.',
    h1: 'Legal notice and terms and conditions',
    updated: 'Version of November 2026',
    sections: [
      { title: 'Legal notice', html: ['Alma Douro<br />Tânia Afonso, sole proprietorship<br />A Vesin 22<br />1483 Vesin, Switzerland', 'Email: {email}<br />Phone: {phone}', 'The content of this website (texts, photos, logo) is protected. Any reproduction requires our written consent. We are not responsible for the content of external websites we link to.'] },
      { level: 3, title: 'Photo credits', html: ['Some photographs come from Wikimedia Commons and are used in accordance with their respective licences (images cropped and optimised for the web):', '{credits}'] },
      { title: 'Terms and conditions', html: [] },
      { level: 3, title: '1. Scope', html: ['These terms apply to all enquiries, proposals and bookings made with Alma Douro, via the website, by email or by phone. Special conditions stated in an offer take precedence over these terms.'] },
      { level: 3, title: '2. Services', html: ['Alma Douro offers stays, food and wine experiences and activities in the Douro Valley, as well as tailor-made trips with personal support. Services on site (accommodation, meals, visits, tastings, transport) are provided by our partners under their own terms.'] },
      { level: 3, title: '3. Enquiry and offer', html: ['An enquiry via the contact form is not binding. On that basis, we prepare a personalised proposal setting out the services, the price and the payment and cancellation terms. The contract is concluded when you confirm the offer in writing (an email is sufficient) and we acknowledge receipt of your confirmation.'] },
      { level: 3, title: '4. Prices and payment', html: ['Prices are stated in the offer, in Swiss francs (CHF) or euros (EUR). Unless stated otherwise, they do not include travel to Portugal, insurance, personal expenses or local tourist taxes. The deposit and the balance are due on the dates stated in the offer.'] },
      { level: 3, title: '5. Changes and cancellation', html: ['Any change or cancellation must be notified to us in writing. Cancellation fees are stated in the offer and depend on our partners’ terms. We recommend taking out cancellation and assistance insurance.'] },
      { level: 3, title: '6. Changes on our part', html: ['If a partner cannot provide a planned service, we will propose an equivalent alternative. If it does not suit you, the corresponding amount already paid will be refunded.'] },
      { level: 3, title: '7. Travel documents and health', html: ['You are responsible for your travel documents (identity card or passport) and for complying with Portugal’s entry requirements. Please let us know in advance about any allergies, dietary requirements or special needs.'] },
      { level: 3, title: '8. Liability', html: ['We are liable for the careful performance of our own services (advice, planning, organisation). For services provided by partners, their own liability applies. To the extent permitted by law, our liability is limited to damage caused intentionally or through gross negligence. Mandatory provisions, in particular those of the Swiss Federal Act on Package Travel where it applies, remain reserved.'] },
      { level: 3, title: '9. Complaints', html: ['Any problem on site must be reported immediately to the partner concerned and to us, so that we can find a solution. Written complaints must be submitted within 30 days of the end of the stay.'] },
      { level: 3, title: '10. Partners', html: ['Partnership enquiries via the website are not binding. Any collaboration is subject to a separate agreement.'] },
      { level: 3, title: '11. Data protection', html: ['The processing of personal data is described in our {privacy}.'] },
      { level: 3, title: '12. Applicable law and place of jurisdiction', html: ['Swiss law applies. The place of jurisdiction is the registered office of Alma Douro, subject to mandatory places of jurisdiction provided by law in favour of consumers.'] },
    ],
  },
};

export const privacidade: Record<'fr' | 'pt' | 'en', LegalPage> = {
  fr: {
    title: 'Politique de confidentialité | Alma Douro',
    description: 'Comment Alma Douro traite vos données personnelles : demandes, réservations, partenaires, hébergement du site et vos droits selon la nLPD et le RGPD.',
    h1: 'Politique de confidentialité',
    updated: 'Version de novembre 2026',
    sections: [
      { level: 3, title: '1. Responsable', html: ['Tânia Afonso, Alma Douro, A Vesin 22, 1483 Vesin, Suisse. E-mail : {email}.', 'Cette politique explique quelles données nous traitons, dans quel but et quels sont vos droits, conformément à la loi fédérale sur la protection des données (nLPD) et, pour les personnes dans l’Union européenne, au RGPD.'] },
      { level: 3, title: '2. Données traitées', html: ['<ul><li>Demandes et réservations : nom, e-mail, téléphone, dates et nombre de voyageurs, souhaits, et le cas échéant régimes alimentaires ou besoins particuliers que vous nous communiquez.</li><li>Partenaires : nom de l’entreprise, personne de contact, coordonnées et message.</li><li>Utilisation du site : adresse IP, appareil et navigateur, pages consultées et données techniques similaires.</li></ul>'] },
      { level: 3, title: '3. Finalités', html: ['<ul><li>Répondre à vos demandes et établir des propositions.</li><li>Organiser votre séjour et transmettre aux partenaires les informations nécessaires.</li><li>Étudier les demandes de partenariat.</li><li>Assurer le fonctionnement et la sécurité du site.</li><li>Respecter nos obligations légales, notamment comptables.</li></ul>', 'Nous ne vendons pas vos données et ne les utilisons pas à des fins publicitaires sans votre accord.'] },
      { level: 3, title: '4. Transmission à des tiers', html: [`Pour organiser votre séjour, nous transmettons les données nécessaires à nos partenaires au Portugal (hébergements, domaines viticoles, guides, transporteurs). Nous faisons aussi appel à des prestataires techniques : conception, hébergement et maintenance du site (Amanet Digital, Da Cruz MM, Bifangstrasse 18, 5610 Wohlen AG, Suisse – ${AMANET}), infrastructure d’hébergement et formulaire de contact (Netlify, Inc., États-Unis), messagerie e-mail et, le cas échéant, prestataires de paiement.`] },
      { level: 3, title: '5. Transfert à l’étranger', html: ['Les données peuvent être traitées au Portugal et dans d’autres pays de l’UE, dont le niveau de protection est reconnu comme adéquat par la Suisse. Si des données sont transférées dans un pays sans protection adéquate, nous utilisons des garanties appropriées, comme les clauses contractuelles types.'] },
      { level: 3, title: '6. Cookies', html: ['Le site utilise uniquement les cookies nécessaires à son fonctionnement. Si des outils de statistique ou de marketing sont ajoutés, nous demanderons votre consentement. Vous pouvez supprimer les cookies dans votre navigateur.'] },
      { level: 3, title: '7. Conservation', html: ['Nous conservons les données aussi longtemps que nécessaire pour les finalités indiquées. Les demandes sans suite sont effacées après 2 ans. Les documents de réservation et de comptabilité sont conservés 10 ans, conformément à la loi.'] },
      { level: 3, title: '8. Vos droits', html: ['Vous pouvez demander l’accès à vos données, leur rectification ou leur effacement, vous opposer à certains traitements et retirer un consentement. Écrivez-nous à {email}. Vous pouvez aussi saisir le Préposé fédéral à la protection des données et à la transparence (PFPDT) ou, si vous résidez dans l’UE, l’autorité de protection des données de votre pays.'] },
      { level: 3, title: '9. Modifications', html: ['Nous pouvons adapter cette politique. La version publiée sur le site fait foi.'] },
    ],
  },
  pt: {
    title: 'Política de privacidade | Alma Douro',
    description: 'Como a Alma Douro trata os seus dados pessoais: pedidos, reservas, parceiros, alojamento do site e os seus direitos segundo a nLPD e o RGPD.',
    h1: 'Política de privacidade',
    updated: 'Versão de novembro de 2026',
    sections: [
      { level: 3, title: '1. Responsável', html: ['Tânia Afonso, Alma Douro, A Vesin 22, 1483 Vesin, Suíça. E-mail: {email}.', 'Esta política explica que dados tratamos, para que fins e quais são os seus direitos, de acordo com a Lei Federal suíça sobre a Proteção de Dados (nLPD) e, para pessoas na União Europeia, o RGPD.'] },
      { level: 3, title: '2. Dados tratados', html: ['<ul><li>Pedidos e reservas: nome, e-mail, telefone, datas e número de viajantes, preferências e, se for o caso, regimes alimentares ou necessidades especiais que nos comunique.</li><li>Parceiros: nome da empresa, pessoa de contacto, contactos e mensagem.</li><li>Utilização do site: endereço IP, dispositivo e navegador, páginas visitadas e dados técnicos semelhantes.</li></ul>'] },
      { level: 3, title: '3. Finalidades', html: ['<ul><li>Responder aos seus pedidos e elaborar propostas.</li><li>Organizar a sua estadia e transmitir aos parceiros as informações necessárias.</li><li>Analisar pedidos de parceria.</li><li>Garantir o funcionamento e a segurança do site.</li><li>Cumprir obrigações legais, nomeadamente contabilísticas.</li></ul>', 'Não vendemos os seus dados nem os usamos para publicidade sem o seu consentimento.'] },
      { level: 3, title: '4. Transmissão a terceiros', html: [`Para organizar a sua estadia, transmitimos os dados necessários aos nossos parceiros em Portugal (alojamentos, quintas, guias, transportadores). Recorremos também a prestadores técnicos: conceção, alojamento e manutenção do site (Amanet Digital, Da Cruz MM, Bifangstrasse 18, 5610 Wohlen AG, Suíça – ${AMANET}), infraestrutura de alojamento e formulário de contacto (Netlify, Inc., EUA), serviço de e-mail e, se for o caso, prestadores de pagamento.`] },
      { level: 3, title: '5. Transferência para o estrangeiro', html: ['Os dados podem ser tratados em Portugal e noutros países da UE, cujo nível de proteção a Suíça reconhece como adequado. Se forem transferidos para um país sem proteção adequada, usamos garantias adequadas, como as cláusulas contratuais-tipo.'] },
      { level: 3, title: '6. Cookies', html: ['O site usa apenas cookies necessários ao seu funcionamento. Se forem adicionadas ferramentas de estatística ou marketing, pediremos o seu consentimento. Pode apagar os cookies no seu navegador.'] },
      { level: 3, title: '7. Conservação', html: ['Conservamos os dados enquanto forem necessários para os fins indicados. Pedidos sem reserva são apagados após 2 anos. Documentos de reserva e contabilidade são conservados 10 anos, conforme a lei.'] },
      { level: 3, title: '8. Os seus direitos', html: ['Pode pedir acesso aos seus dados, a sua retificação ou eliminação, opor-se a determinados tratamentos e retirar um consentimento. Escreva para {email}. Pode também dirigir-se ao Responsável Federal pela Proteção de Dados e pela Transparência (PFPDT) ou, se residir na UE, à autoridade de proteção de dados do seu país.'] },
      { level: 3, title: '9. Alterações', html: ['Podemos atualizar esta política. Aplica-se a versão publicada no site.'] },
    ],
  },
  en: {
    title: 'Privacy policy | Alma Douro',
    description: 'How Alma Douro processes your personal data: enquiries, bookings, partners, website hosting and your rights under the Swiss FADP and the GDPR.',
    h1: 'Privacy policy',
    updated: 'Version of November 2026',
    sections: [
      { level: 3, title: '1. Controller', html: ['Tânia Afonso, Alma Douro, A Vesin 22, 1483 Vesin, Switzerland. Email: {email}.', 'This policy explains which data we process, for what purposes and what your rights are, in accordance with the Swiss Federal Act on Data Protection (FADP) and, for people in the European Union, the GDPR.'] },
      { level: 3, title: '2. Data processed', html: ['<ul><li>Enquiries and bookings: name, email, phone, travel dates and number of travellers, wishes and, where applicable, dietary requirements or special needs that you share with us.</li><li>Partners: company name, contact person, contact details and message.</li><li>Use of the website: IP address, device and browser, pages visited and similar technical data.</li></ul>'] },
      { level: 3, title: '3. Purposes', html: ['<ul><li>Responding to your enquiries and preparing proposals.</li><li>Organising your stay and passing the necessary information on to partners.</li><li>Reviewing partnership enquiries.</li><li>Ensuring the operation and security of the website.</li><li>Meeting our legal obligations, in particular accounting obligations.</li></ul>', 'We do not sell your data and do not use it for advertising without your consent.'] },
      { level: 3, title: '4. Disclosure to third parties', html: [`To organise your stay, we pass the necessary data on to our partners in Portugal (accommodation, wine estates, guides, transport companies). We also use technical service providers: website design, hosting and maintenance (Amanet Digital, Da Cruz MM, Bifangstrasse 18, 5610 Wohlen AG, Switzerland – ${AMANET}), hosting infrastructure and contact form (Netlify, Inc., USA), email services and, where applicable, payment providers.`] },
      { level: 3, title: '5. Transfers abroad', html: ['Data may be processed in Portugal and other EU countries, whose level of data protection is recognised as adequate by Switzerland. If data is transferred to a country without adequate protection, we rely on appropriate safeguards such as standard contractual clauses.'] },
      { level: 3, title: '6. Cookies', html: ['The website only uses cookies that are necessary for it to work. If statistics or marketing tools are added, we will ask for your consent. You can delete cookies in your browser.'] },
      { level: 3, title: '7. Retention', html: ['We keep data for as long as necessary for the purposes stated. Enquiries that do not lead to a booking are deleted after 2 years. Booking and accounting records are kept for 10 years, as required by law.'] },
      { level: 3, title: '8. Your rights', html: ['You can request access to your data, its correction or deletion, object to certain processing and withdraw your consent. Write to us at {email}. You can also contact the Swiss Federal Data Protection and Information Commissioner (FDPIC) or, if you live in the EU, the data protection authority in your country.'] },
      { level: 3, title: '9. Changes', html: ['We may update this policy. The version published on the website applies.'] },
    ],
  },
};
