// Contenu du site ARUM Gestion Privée, repris du site actuel (arumgestionprivee.com).
// Toute modification de texte se fait ici ; la typographie française est appliquée par fr().

const NB = " ";
export const fr = (s) =>
  String(s)
    .replace(/'/g, "’")
    .replace(/ ([:;!?»%€])/g, NB + "$1")
    .replace(/« /g, "«" + NB);

export const CONTACT = {
  phone: "(+33) 1 75 43 66 50",
  phoneHref: "tel:+33175436650",
  email: "contact@arumgestionprivee.com",
  address: ["82 avenue Marceau", "75008 Paris"],
  // Formulaires : intégrés au site (src/components/Forms.jsx + functions/api), Typeform n'est plus utilisé.
  linkedin: "https://www.linkedin.com/company/11505552/",
};

export const NAV = [
  { to: "/nous-connaitre", label: "Nous connaître" },
  { to: "/agir-en-confiance", label: "Agir en confiance" },
  { to: "/sur-mesure", label: "Le sur-mesure" },
  { to: "/valeurs", label: "Des valeurs de famille" },
  { to: "/actualites", label: "Nos décryptages" },
];

// Textes repris mot pour mot du site actuel (seules la typographie et l'organisation changent).
export const HOME = {
  title: fr("Faire vivre votre patrimoine et vous simplifier la vie"),
  titleEnd: fr("grâce à notre expertise et à notre disponibilité."),
  intro: fr(
    "ARUM Gestion Privée construit avec vous le développement, la gestion et la transmission de votre patrimoine en s'adaptant à votre situation personnelle et professionnelle et à vos enjeux.",
  ),
  introBis: fr(
    "Contrairement à de nombreuses sociétés qui vendent des produits sans se soucier de leur adéquation, nous adaptons nos conseils à vos besoins et objectifs individuels.",
  ),
  unique: fr("Vous et votre famille êtes uniques,"),
  uniqueEnd: fr(
    "et il y a peu de décisions plus importantes que la façon dont vous gérez et faites croître votre patrimoine.",
  ),
  strategy: fr(
    "Nous définissons avec vous la meilleure stratégie patrimoniale et financière afin de vous permettre de réaliser vos projets : construire, protéger, développer ou transmettre votre patrimoine familial en prenant en compte votre patrimoine professionnel.",
  ),
};

export const DIFFERENCE = {
  kicker: "Transparence & Confiance",
  title: fr("Découvrez ce qui nous différencie des autres"),
  text: fr(
    "Notre métier ne se limite pas, loin s'en faut et comme beaucoup le croient, à la « gestion financière » ou à la recherche de « bons placements ». Le choix de l'organisation patrimoniale pertinente, de bons supports et de la bonne utilisation de ceux-ci est à nos yeux primordial. Nous sommes convaincus que bien faire notre métier, c'est construire avec vous une relation de proximité à travers laquelle il sera naturel pour vous de nous prévenir de toutes les évolutions importantes de votre vie.",
  ),
  arum: [
    "Adapte ses conseils à vos objectifs et besoins",
    "Développe une approche globale du patrimoine avec des compétences pointues dans chaque domaine",
    "Élabore des allocations financières sur-mesure",
  ],
  others: [
    "Orientent leurs conseils pour la vente de produits",
    "Abordent le patrimoine avec un point de vue trop souvent unique",
    "Définissent des allocations financières stéréotypées",
  ],
  tagline: "Une alternative à la banque privée traditionnelle.",
};

export const HOME_PEOPLE = {
  duo: { photo: "/img/equipe/al-genevieve.webp", names: "Anne-Laure Boccon-Gibod & Geneviève Werner", roles: "Présidente et Senior Advisor & Associée fondatrice" },
  sandrine: { photo: "/img/equipe/sandrine.webp", names: "Sandrine Cauvin", roles: "Directeur des Investissements" },
  partners: { photo: "/img/equipe/al-patrick.webp", names: "Anne-Laure Boccon-Gibod & Patrick Werner", roles: "Présidente et Senior Advisor & Associé fondateur" },
  marie: { photo: "/img/equipe/marie.webp", names: "Marie Fernandes", roles: "Responsable Middle Office", quote: fr("Être à votre écoute et anticiper vos interrogations.") },
};

// Chiffres d'origine. Le site actuel indique « 6 » personnes, mais la page équipe en présente 7 : à confirmer.
export const FIGURES = [
  { value: "+50", unit: "ans", label: "d'expériences cumulées", icon: "/img/icones/chiffre-experience.png" },
  { value: "2014", label: "Création d'ARUM Gestion Privée", icon: "/img/icones/chiffre-creation.png" },
  { value: "+100", label: "Entrepreneurs et familles accompagnés", icon: "/img/icones/chiffre-familles.png" },
  { value: "7", label: "Personnes dédiées à l'organisation de votre patrimoine", icon: "/img/icones/chiffre-equipe.png" },
].map((f) => ({ ...f, label: fr(f.label) }));

export const OBJECTIVES = [
  {
    id: "transmettre",
    verb: "Transmettre",
    object: "vos actifs",
    text: "Vous êtes chef d'entreprise ou aspirez à le devenir, vous disposez d'un patrimoine que vous souhaitez transmettre, des questions doivent être étudiées avec précaution.",
    icon: "/img/icones/transmettre.png",
  },
  {
    id: "proteger",
    verb: "Protéger",
    object: "vos proches",
    text: "Vous souhaitez protéger votre famille, différents aspects doivent être étudiés en fonction de votre situation afin de mettre en place une protection optimale et flexible.",
    icon: "/img/icones/proteger.png",
  },
  {
    id: "organiser",
    verb: "Organiser",
    object: "votre patrimoine",
    text: "Vous vous interrogez sur la meilleure organisation de votre patrimoine eu égard à votre situation et à vos objectifs. Diverses questions peuvent se poser.",
    icon: "/img/icones/organiser.png",
  },
  {
    id: "optimiser",
    verb: "Optimiser",
    object: "votre allocation financière",
    text: "Vous vous interrogez sur les moyens d'optimiser et de diversifier votre patrimoine financier et immobilier.",
    icon: "/img/icones/optimiser.png",
  },
].map((o) => ({ ...o, text: fr(o.text) }));

export const TEAM = [
  {
    slug: "anne-laure-boccon-gibod",
    linkedin: "https://www.linkedin.com/in/anne-laure-boccon-gibod-ingenierie-patrimoniale/",
    name: "Anne-Laure Boccon-Gibod",
    role: "Présidente",
    photo: "/img/equipe/anne-laure.webp",
    quote: "Être soi-même entrepreneur est encore la meilleure manière de comprendre les aspirations et les enjeux d'un entrepreneur.",
    bio: [
      "Anne-Laure Boccon-Gibod est la Présidente d'ARUM Gestion Privée. Disposant d'une formation initiale d'avocate et de diplômes du plus haut niveau en gestion de patrimoine (Executive Master International Wealth Management ESCP), elle possède plus de 20 ans d'expérience au sein de groupes bancaires et d'assurance et a contribué au développement de la gestion de fortune de Société Générale Private Banking. Anne-Laure est le cœur de la Société et apporte son expertise en organisation patrimoniale et sa connaissance des solutions d'investissement, ainsi que des sujets juridiques et fiscaux.",
      "Joueuse de tennis de haut niveau, Anne-Laure sait mener des combats au long cours sans jamais rien lâcher, même quand les matchs sont mal embarqués et que les adversaires paraissent imbattables…",
    ],
  },
  {
    slug: "sandrine-cauvin",
    linkedin: "https://www.linkedin.com/in/sandrine-cauvin-1314b8a",
    name: "Sandrine Cauvin",
    role: "Directeur des Investissements",
    photo: "/img/equipe/sandrine.webp",
    quote: "Optimiser pour vous la performance financière, la performance environnementale et le niveau de risque en adaptant vos allocations financières.",
    bio: [
      "Sandrine Cauvin a été analyste financier sell-side sur les actions européennes du secteur de l'énergie pendant une dizaine d'années chez différents brokers (HSBC, Kepler-Chevreux, Raymond James), puis est devenue gérante actions en 2010, sur le secteur de l'énergie mais aussi multithématiques, avec une orientation ESG. Forte de plus de 20 ans d'expérience sur les marchés financiers et de ses connaissances en gestion financière, elle rejoint en décembre 2025 ARUM Gestion Privée en tant que Directeur des Investissements.",
      "Habituée aux courses d'endurance, Sandrine sait que les performances durables ne se gagnent ni dans la précipitation ni dans l'émotion, mais par la discipline, la régularité et la capacité à tenir dans les moments les plus exigeants.",
    ],
  },
  {
    slug: "vincent-muguet",
    linkedin: "https://www.linkedin.com/in/vincent-muguet-32353019b/",
    name: "Vincent Muguet",
    role: "Conseiller en Investissement Financier",
    photo: "/img/equipe/vincent.webp",
    quote: "Accompagner nos clients, c'est avant tout construire une relation de confiance pour préparer l'avenir.",
    bio: [
      "Après avoir acquis une première expérience en gestion d'actifs au Luxembourg, Vincent a rejoint ARUM Gestion Privée en septembre 2023. Diplômé de Kedge Business School, Vincent occupe la fonction de Conseiller en Investissement Financier et Analyste de Fonds d'Investissement au sein d'ARUM Gestion Privée.",
      "Passionné d'économie et de géopolitique, Vincent sera ravi d'évoquer avec vous l'actualité et les défis de demain.",
    ],
  },
  {
    slug: "marie-fernandes",
    linkedin: "https://www.linkedin.com/in/marie-fernandes-47009b52/",
    name: "Marie Fernandes",
    role: "Responsable Middle Office",
    photo: "/img/equipe/marie.webp",
    quote: "L'intérêt du client est profondément ancré en nous et constitue notre ADN.",
    bio: [
      "Marie Fernandes est notre Responsable Middle Office et Affaires Générales. Diplômée d'une Licence Banque & Assurance, Marie évolue depuis 18 ans au service des clients des conseillers en gestion de patrimoine, tout d'abord chez Richelieu Finance, société de gestion privée, puis chez KBL Richelieu banque privée et enfin chez Nortia, plateforme Banque / Assurance. Marie nous a rejoints fin 2022. Son rôle est principalement d'assurer la fluidité des relations entre nos clients, nos partenaires et ARUM Gestion Privée, et d'accompagner nos clients dans leurs démarches administratives ou opérationnelles afin de leur faire gagner du temps et de l'énergie.",
      "Partageant nos valeurs et forte d'un excellent relationnel, Marie aime aussi la lecture, la musique, le cinéma, les voyages et le sport.",
    ],
  },
  {
    slug: "isabelle-martins",
    linkedin: "https://www.linkedin.com/in/isabelle-martins-2228a13b1/",
    name: "Isabelle Martins",
    role: "Chargée de Middle Office et Affaires Générales",
    photo: "/img/equipe/isabelle.webp",
    quote: "Servir nos clients, c'est s'engager concrètement à leurs côtés pour leur apporter des réponses utiles et durables.",
    bio: [
      "Isabelle évolue depuis 20 ans au service des PME. Elle a travaillé pendant 10 ans au sein d'une société de gestion de patrimoine en tant qu'assistante administrative et commerciale. Elle a rejoint l'équipe d'ARUM Gestion Privée en novembre 2025, en tant que Chargée Middle Office aux côtés de Marie dans l'accompagnement de nos clients.",
      "Isabelle aime consacrer son temps libre à partager des moments simples avec ses proches. La marche dans la nature lui apporte équilibre et sérénité. Son péché mignon : le sucré, notamment les pasteis de nata et les éclairs au café.",
    ],
  },
  {
    slug: "genevieve-werner",
    linkedin: "https://www.linkedin.com/in/genevieve-werner-conseil-patrimonial/",
    name: "Geneviève Werner",
    role: "Senior Advisor & Associée fondatrice",
    photo: "/img/equipe/genevieve.webp",
    quote: "Dans un environnement en constante évolution, un conseil sur-mesure est indispensable.",
    bio: [
      "Geneviève Werner, Senior Advisor & Associée fondatrice, est conseil de l'équipe dirigeante sur les allocations financières pour les clients d'ARUM Gestion Privée. Gestionnaire d'actifs depuis plus de 35 ans, Geneviève a créé et dirigé des sociétés de gestion et connaît personnellement les meilleurs gérants des fonds de la Place. Geneviève garantit, avec un haut niveau de performance, l'adéquation de la gestion des fonds qui nous sont confiés. Son calme, son sens du travail, de la précision et de l'anticipation sont particulièrement appréciés par nos clients.",
      "Animée depuis toujours par l'esprit de famille, Geneviève aime jouer au tennis avec ses enfants et petits-enfants, profiter de la montagne aussi bien en été qu'en hiver, et dévorer les biographies des grands personnages de notre Histoire.",
    ],
  },
  {
    slug: "patrick-werner",
    linkedin: "https://www.linkedin.com/in/patrick-werner-a60314105/",
    name: "Patrick Werner",
    role: "Senior Advisor & Associé fondateur",
    photo: "/img/equipe/patrick.webp",
    quote: "Définir une stratégie patrimoniale et la mettre en œuvre exige un état d'esprit différent de celui de la banque traditionnelle.",
    bio: [
      "Patrick Werner, entrepreneur, Inspecteur des Finances, créateur et ancien Président du Directoire de la Banque Postale, ancien Directeur Général du Groupe d'assurances Victoire (marque Abeille), ancien Expert-comptable, est conseiller de la Présidente. Fort de ses expériences de dirigeant, Patrick a acquis une parfaite maîtrise des activités bancaires et assurantielles, notamment dans le domaine de la gestion patrimoniale, à travers le lancement réussi de La Banque Postale Gestion Privée.",
      "Membre du Club des Cent, Patrick est passionné de gastronomie et de tous les sports (il est d'ailleurs aussi Président de l'Académie des Sports). Il pratique notamment le tennis en famille.",
    ],
  },
].map((m) => ({ ...m, quote: fr(m.quote), bio: m.bio.map(fr) }));

export const TEAM_PAGE = {
  title: fr("Une équipe dédiée pour un service sur-mesure"),
  lead: fr("Nous attachons beaucoup d'importance à la valeur et à la chaleur des relations humaines."),
  text: [
    "Vos réflexions sur les sujets patrimoniaux, souvent intimes, sont parfois difficiles à aborder et peuvent évoluer au gré de vos parcours de vie : notre équipe est constamment à votre écoute, anticipe vos interrogations et se rend totalement disponible.",
    "Créée en 2014, l'équipe d'ARUM Gestion Privée compte aujourd'hui 7 personnes, chacune dédiée au service de nos clients et dotée d'un haut niveau de technicité et de valeur ajoutée dans son domaine d'expertise. Cette équipe, c'est le poumon d'ARUM Gestion Privée.",
  ].map(fr),
  join: fr("Et vous spécialiser dans la stratégie patrimoniale"),
};

export const APPROACH = {
  lead: [
    "Parce que nous appréhendons les questionnements qui vous animent au quotidien et parce que nous nous adaptons à vos attentes à moyen et long terme, nous définissons avec vous la meilleure stratégie patrimoniale et financière afin de vous permettre de réaliser vos projets.",
    "Notre approche est celle d'une « boutique » de conseil patrimonial toujours à votre écoute et notre philosophie est de mettre à votre service toutes nos compétences pluridisciplinaires (ingénierie patrimoniale, organisation juridique fiscale et financière, conseil en investissement) pour construire, pour chacun de vous, une stratégie patrimoniale et des allocations financières entièrement sur-mesure.",
  ].map(fr),
  familyOffice: fr(
    "Nous sommes pour vous, votre « family-office » qui vous accompagne de manière personnalisée à chaque étape de votre vie.",
  ),
  offerTitle: fr("Expertise, approche transversale, sur-mesure, une démarche en 3 temps."),
  offerPhoto: { photo: "/img/equipe/sandrine-anne-laure.webp", names: "Anne-Laure Boccon-Gibod & Sandrine Cauvin" },
  steps: [
    {
      n: "01",
      title: "Expertise",
      text: [
        "Il est d'abord indispensable que vous nous accordiez du temps pour nous expliquer la composition de votre patrimoine, ses origines et ce que vous souhaitez en faire. C'est le temps de l'ingénierie patrimoniale (optimisation de la détention de votre patrimoine d'un point de vue juridique et fiscal) qui nous permet de rentrer progressivement et à pas de velours dans votre intimité, votre psychologie et de comprendre vos goûts, vos aspirations et votre appétence pour le risque…",
        "Cette étape est déterminante pour poser le cadre, fixer les lignes directrices et construire notre relation sur des fondations solides.",
      ],
    },
    {
      n: "02",
      title: "Approche transversale",
      text: [
        "Nous mettons ensemble en œuvre votre stratégie patrimoniale grâce à notre combinaison unique de compétences de haut niveau et à tous les agréments dont nous disposons pour vous accompagner le plus loin possible.",
        "C'est notre approche transversale qui nous permet d'appréhender et de mesurer l'impact de chacune de vos décisions sur les autres aspects de votre patrimoine.",
      ],
    },
    {
      n: "03",
      title: "Sur-mesure",
      text: [
        "Notre offre d'ingénierie financière se traduit par un conseil sur-mesure d'allocation financière en fonction notamment de votre horizon de placement et de votre appétence au risque. Nous optimisons pour vous performance environnementale, performance financière et niveau de risque.",
        "Notre expérience des crises financières et des chocs boursiers nous permet d'adapter vos allocations afin de tirer le meilleur parti des périodes de baisse (et de hausse). Nous vous proposons également des sources de diversification de vos investissements grâce à notre sélection rigoureuse d'offres de private equity, d'immobilier (notamment foncières) et d'actifs vous permettant de contribuer aux enjeux de la transition énergétique et environnementale.",
      ],
    },
  ].map((s) => ({ ...s, text: s.text.map(fr) })),
};

export const BESPOKE = {
  proximity: fr("Construire avec vous une relation de proximité"),
  quote: fr(
    "Être soi-même entrepreneur est encore la meilleure manière de comprendre les enjeux et les aspirations d'un entrepreneur. L'investissement, l'énergie et les efforts consentis pendant de nombreuses années pour construire votre patrimoine professionnel et la volonté de le faire survivre à l'épreuve du temps et des générations nous permettent de rentrer naturellement dans votre intimité et de mesurer l'importance que nos conseils peuvent avoir pour vous et vos proches.",
  ),
  generations: fr("Vous gagnerez à envisager les choses sur plusieurs générations."),
  generationsText: fr(
    "Réfléchir à long terme, c'est prendre les bonnes décisions pour votre patrimoine d'aujourd'hui. Nous sommes convaincus que, de cette manière, vous éviterez l'écueil d'une réflexion trop souvent guidée par les aspects fiscaux.",
  ),
};

export const VALUES = {
  lead: fr(
    "L'intérêt du client, le professionnalisme et l'honnêteté sont des valeurs cruciales au sein de notre équipe et elles sont partagées de tous, fondateurs et collaborateurs. Elles sont ancrées profondément en nous et constituent notre ADN.",
  ),
  leadPhoto: "/img/equipe/anne-laure-valeurs.webp",
  kicker: "Expertise & Liberté",
  title: "Un état d'esprit différent",
  mindset: [
    "Dans un monde bancaire marqué avant tout par la recherche de la rentabilité de la banque, laquelle ne cadre pas forcément avec l'intérêt du client, notre conviction est que les sujets de patrimoine et d'argent exigent un état d'esprit différent tourné d'abord vers l'intérêt du client.",
    "Notre travail au quotidien ne peut reposer que sur la satisfaction de l'intérêt du client.",
    "Chacun et collectivement, nous travaillons sans relâche pour y parvenir.",
  ].map(fr),
  professionalism: fr(
    "Notre professionnalisme est lié à la diversité des expériences des fondateurs d'ARUM Gestion Privée. Nos expériences plurielles nous guident pour construire au quotidien l'approche sur-mesure que nous vous proposons et vous apporter la réactivité que vous attendez de nous.",
  ),
  professionalismPhoto: { photo: "/img/equipe/marie-sandrine.webp", names: "Sandrine Cauvin et Marie Fernandes", roles: "Directeur des Investissements et Responsable Middle Office" },
  freedomTitle: "Libre en droit, libre d'esprit",
  freedom: fr(
    "L'honnêteté nous anime à chaque instant, à chaque démarche, à chaque conseil. Nous sommes totalement libres d'esprit et en droit, de toute entité financière, d'assurance ou de gestion. Nous avons ainsi une totale liberté de jugement quant à ce qui convient à chacun de vous, qu'il s'agisse de la stratégie de départ ou des éventuels arbitrages à effectuer durant la vie de votre patrimoine. Ce principe est essentiel pour nous, il nous permet de vous garantir que notre première préoccupation est bien l'intérêt du client d'abord.",
  ),
};

// Actualités : un article dont le texte est repris (champ `quote`) a sa page sur ce site, à la même
// adresse que sur l'ancien (/articles/…) ; les autres pointent encore vers l'ancien site.
const OLD = "https://www.arumgestionprivee.com/articles/";
export const NEWS = [
  {
    date: "2026-09-21",
    title: "Assurance-vie souscrite à 86 ans : peut-elle être requalifiée de donation indirecte ? Le juge tranche…",
    summary: "Le 28 juillet 2026, la CA de Pau s'est prononcée sur la requalification d'une assurance-vie souscrite à 86 ans en donation indirecte et sur le caractère manifestement exagéré des primes versées.",
    slug: "assurance-vie-souscrite-a-86-ans-peut-elle-etre-requalifiee-de-donation-indirecte-le-juge-tranche",
    image: "/img/articles/palais-de-justice.webp",
    quote: "Une femme âgée de 86 ans avait souscrit en 2010 un contrat d'assurance-vie désignant son fils cadet comme seul bénéficiaire, et y avait versé 55 000 € entre 2010 et 2012, dont 50 000 € à 88 ans issus de la vente d'une maison familiale. Les deux autres enfants, s'estimant lésés dans leurs droits réservataires, avaient demandé la requalification du contrat en donation indirecte et, subsidiairement, le rapport des primes pour caractère manifestement exagéré. Sur le premier fondement, la cour rappelle qu'une donation indirecte suppose la réunion cumulative d'un dépouillement irrévocable, d'une intention libérale et de l'acceptation du bénéficiaire du vivant du souscripteur (art. 894 du Code civil). Aucune de ces trois conditions n'était ici caractérisée : l'aléa restait intact, la faculté de rachat et de modification de la clause bénéficiaire demeurait ouverte, et le fils n'avait jamais accepté le bénéfice du contrat. Sur le second fondement, l'exagération d'une prime s'apprécie au regard de l'âge, de la situation familiale, du rapport entre le montant versé et le patrimoine du souscripteur, et de l'utilité du contrat pour lui (art. L. 132-13 du Code des assurances). Le versement de 50 000 € correspondait au réemploi d'une rentrée exceptionnelle, sans compromettre le train de vie de l'assurée, qui conservait plus de 33 000 € d'épargne disponible. L'âge avancé du souscripteur ne suffit donc pas, à lui seul, à emporter la requalification du contrat : son utilité économique s'apprécie au regard d'un faisceau d'indices propre à la situation personnelle de l'assuré.",
  },
  {
    date: "2026-09-14",
    title: "Attributions gratuites d'actions (AGA) : l'administration fiscale actualise (enfin) sa doctrine, sans trancher les management packages",
    summary: "Le 21 mai 2026, le BOFiP a mis à jour sa doctrine sur les attributions gratuites d'actions (AGA), intégrant les réformes de 2018 à 2023 et comblant près de dix ans de retard.",
    slug: "attributions-gratuites-dactions-aga-ladministration-fiscale-actualise-enfin-sa-doctrine-sans-trancher-les-management-packages",
    image: "/img/articles/toits-de-paris.webp",
    quote: "Sur le plan fiscal, l'avantage résultant de l'acquisition définitive des actions suit désormais des règles différenciées selon la date d'autorisation de l'attribution par l'assemblée générale extraordinaire (AGE), le régime le plus favorable étant réservé aux plans antérieurs au 31 décembre 2016. Sur le plan des seuils, la loi relative au partage de la valeur a relevé les plafonds d'attribution prévus par l'article L. 225-197-1 du Code de commerce : 15 % du capital social dans le cas général, 20 % pour certaines PME au sens du droit de l'Union, 30 % en cas d'attribution à une large proportion des salariés, et jusqu'à 40 % lorsqu'elle bénéficie à l'ensemble du personnel. Le plafond individuel de 10 % est désormais apprécié sur les seuls titres détenus depuis moins de sept ans, consacrant un mécanisme de « rechargement ». À noter : cette mise à jour ne crée pas un régime fiscal unique. Elle confirme que les règles applicables demeurent tributaires de la « génération » du plan, c'est-à-dire de la date de l'AGE d'attribution. Autre point de vigilance : le BOFiP reste silencieux sur la réforme des management packages issue de la loi de finances pour 2025 et aménagée par la loi de finances pour 2026 (article 163 bis H du CGI), qui devra pourtant être combinée avec cette doctrine pour sécuriser pleinement les opérations sur titres gratuits. Cette actualisation illustre l'importance de bien identifier le régime applicable à chaque plan d'attribution et de se faire accompagner pour sécuriser ces opérations, notamment en cas de cession, de donation ou de transfert de résidence.",
  },
  {
    date: "2026-07-28",
    title: "Dirigeant de SASU à l'IR non rémunéré : quid du traitement social pour les bénéfices ?",
    summary: "Les bénéfices d'une SASU à l'IR, imposés à l'associé unique non rémunéré, relèvent des prélèvements sociaux sur les revenus du patrimoine à 18,6 %, si non soumis aux cotisations sociales d'activité.",
    slug: "dirigeant-de-sasu-a-lir-non-remunere-quid-du-traitement-social-pour-les-benefices",
    image: "/img/articles/immeuble-haussmannien.webp",
    quote: "Depuis l’été 2025, l’administration fiscale a réalisé de nombreux contrôles fiscaux visant les dirigeants de SASU ayant pris cette option à l’IR, afin de soumettre les bénéfices imposés de leur SASU aux prélèvements sociaux, les assimilant à des revenus du patrimoine. Dans une réponse ministérielle du 2 juin 2026 (RM Bergantz, JOAN, 2 juin 2026, n° 12673), le Gouvernement confirme cette analyse. Par conséquent, les bénéfices non soumis aux contributions sociales sur les revenus d’activité entrent définitivement dans le champ des prélèvements sociaux sur les revenus du patrimoine, dont le taux global s’élève à 18,6 % depuis le1er janvier 2026. Vous êtes dirigeant d’une SASU ayant opté pour l’IR ? Cette réponse ministérielle invite à vérifier votre situation déclarative et votre stratégie de rémunération, afin d’anticiper un éventuel risque de redressement !",
  },
  {
    date: null,
    title: "Apport d'usufruit temporaire à une SCI : quelle fiscalité pour le cédant, IR ou impôt sur la plus-value ?",
    summary: "Dans une décision du 30 mars 2026, le Conseil d'État confirme la position de l'administration fiscale, qui retient une acception large de la notion de cession pour y intégrer l'apport d'un usufruit temporaire de parts sociales.",
    slug: "apport-dusufruit-temporaire-a-une-sci-quelle-fiscalite-pour-le-cedant-ir-ou-impot-sur-la-plus-value",
    image: "/img/articles/fronton-lion.webp",
    quote: "Dans une décision du 30 mars 2026 (CE, 8e-3e ch. réunies, 30 mars 2026, n° 502243), le Conseil d’État confirme la position de l’administration fiscale, qui retient une acception large de la notion de cession pour y intégrer l’apport d’un usufruit temporaire de parts sociales, y compris en l’absence de liquidités dégagées par la cession. Par conséquent, l’attribution de parts sociales en rémunération de l’apport est soumise à l’impôt sur le revenu entre les mains du cédant, ce qui appelle une vigilance particulière dans les opérations patrimoniales d’apport d’usufruit temporaire, le cédant étant dès lors soumis imposition immédiate sans pouvoir bénéficier des mécanismes avantageux propres au régime des plus-values (abattements pour durée de détention, report ou sursis) !",
  },
  {
    date: null,
    title: "Cessions de parts de sociétés à prépondérance immobilière : un formalisme désormais obligatoire à peine de nullité",
    slug: "cessions-de-parts-de-societes-a-preponderance-immobiliere-un-formalisme-desormais-obligatoire-a-peine-de-nullite",
    image: "/img/articles/palais-de-justice.webp",
    quote: "L'article 68 de la loi n° 2026-534 du 25 juin 2026 relative à la lutte contre les fraudes sociales et fiscales impose un formalisme strict aux cessions de titres de sociétés à prépondérance immobilière (SPI), dont les SCI, en vue de faire intervenir un professionnel soumis aux obligations de vigilance LCB-FT. Au sens de l'article 726, I-2° du CGI, est à prépondérance immobilière toute personne morale non cotée dont l'actif est, ou a été au cours de l'année précédant la cession, composé à plus de 50 % d'immeubles ou de droits immobiliers situés en France, ou de participations dans d'autres structures elles-mêmes à prépondérance immobilière. Le champ d'application dépasse ainsi très largement les seules SCI. Nouvellement codifié à l'article 1865-1 du Code civil, le texte prévoit qu'à peine de nullité, la cession de parts ou d'actions d'une SPI doit désormais être constatée par un acte authentique reçu par notaire, un acte contresigné par un avocat, ou un acte sous signature privée rédigé par un expert-comptable, dès lors que cette cession s'inscrit dans le prolongement direct de sa mission principale auprès de la société. Cette obligation s'applique aux cessions intervenant à compter du 27 juin 2026, sans rétroactivité à ce jour. Concrètement, une cession constatée par un simple acte sous seing privé n'est plus valable et ne pourra faire l'objet d'un enregistrement. Il est donc essentiel de s'entourer d'un professionnel habilité en amont de toute opération de ce type !",
  },
  {
    date: null,
    title: "Contribution différentielle sur les hauts revenus (CDHR) : l'administration fiscale confirme les règles du jeu",
    slug: "contribution-differentielle-sur-les-hauts-revenus-cdhr-ladministration-fiscale-confirme-les-regles-du-jeu",
    image: "/img/articles/notre-dame.webp",
    quote: "La CDHR, codifiée à l'article 224 du CGI, vise à garantir une imposition minimale de 20 % au titre de l'impôt sur le revenu pour les foyers dont le revenu fiscal de référence excède 250 000 € (personne seule) ou 500 000 € (couple soumis à imposition commune), et dont le taux moyen d'imposition est inférieur à 20 % de ce revenu de référence. Les commentaires publiés précisent notamment les règles de territorialité applicables à cet impôt, en cas de résidence ou de transfert de résidence à l'étranger, ainsi que les revenus entrant dans l'assiette de calcul. Les revenus exceptionnels, c'est-à-dire ceux excédant la moyenne des trois années précédentes, ne sont retenus qu'à hauteur d'un quart de leur montant, afin d'éviter qu'un gain ponctuel ne déclenche une forte imposition. Particularité du dispositif : un acompte de 95 % doit être versé entre le 1er et le 15 décembre de l'année d'imposition, sous peine d'une majoration de 20 % en cas d'omission ou d'erreur d'estimation supérieure à 20 %. Cette contribution s'ajoute aux impôts déjà existants comme la CEHR, renforçant la nécessité pour les contribuables concernés d'anticiper leur niveau de revenus annuel. Cette actualité illustre l'importance d'anticiper sa situation fiscale et d'être bien accompagné pour déterminer son entrée dans le champ d'application de la CDHR et sécuriser sa déclaration !",
  },
].map((n) => ({
  ...n,
  // temps de lecture estimé : 220 mots par minute (titre + chapô + texte), arrondi à la minute supérieure
  readingTime: Math.max(1, Math.ceil(`${n.title} ${n.summary || ""} ${n.quote || ""}`.split(/\s+/).filter(Boolean).length / 220)),
  title: fr(n.title),
  ...(n.summary ? { summary: fr(n.summary) } : {}),
  ...(n.quote ? { quote: fr(n.quote), href: "/articles/" + n.slug, local: true } : {}),
}));

export const NEWS_ARCHIVE = "https://www.arumgestionprivee.com/blog";

export const REGULATORY = [
  { label: "ORIAS", detail: "n° 14003105" },
  { label: "CIF", detail: "Adhérent CNCGP, association agréée par l'AMF" },
  { label: "Courtier", detail: "en assurance, opérations de banque et services de paiement" },
  { label: "Carte T", detail: "CPI 7501 2017 000 017 572 : CCI Paris Île-de-France" },
].map((r) => ({ ...r, detail: fr(r.detail) }));

export const AGREMENTS = [
  { name: "CCI Paris Île-de-France", logo: "/img/agrements/cci.png" },
  { name: "CNCGP", logo: "/img/agrements/cncgp.png" },
];

// « Ils nous font confiance » (page Agir en confiance du site actuel)
// logo: null → nom affiché en toutes lettres (en attendant le fichier du logo).
export const PARTNERS = [
  { name: "Allianz", logo: "/img/partenaires/allianz.png" },
  { name: "Tikehau Capital", logo: "/img/partenaires/tikehau-capital.png" },
  { name: "Cardif Lux Vie : Groupe BNP Paribas", logo: "/img/partenaires/cardif-lux-vie.png" },
  { name: "LBO France", logo: "/img/partenaires/lbo-france.png" },
  { name: "AG2R La Mondiale", logo: "/img/partenaires/ag2r-la-mondiale.png" },
  { name: "Generali", logo: "/img/partenaires/generali.png" },
  { name: "Capza", logo: "/img/partenaires/capza.png" },
  { name: "BNP Paribas Cardif", logo: "/img/partenaires/bnp-paribas-cardif.png" },
  { name: "Generali Luxembourg", logo: "/img/partenaires/generali-luxembourg.png" },
  { name: "Wealins", logo: "/img/partenaires/wealins.png" },
  { name: "AG2R La Mondiale France", logo: "/img/partenaires/ag2r-la-mondiale-france.png" },
];

