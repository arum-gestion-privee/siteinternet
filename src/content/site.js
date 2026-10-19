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
  // Formulaires actuels (Typeform) : conservés tant qu'un formulaire intégré n'est pas branché.
  form: "https://form.typeform.com/to/Iqi3mogu",
  jobs: "https://form.typeform.com/to/roMaPuaP",
  linkedin: "https://www.linkedin.com/company/11505552/",
};

export const NAV = [
  { to: "/nous-connaitre", label: "Nous connaître" },
  { to: "/agir-en-confiance", label: "Agir en confiance" },
  { to: "/sur-mesure", label: "Le sur-mesure" },
  { to: "/valeurs", label: "Des valeurs de famille" },
  { to: "/actualites", label: "Actualités" },
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
  duo: { photo: "/img/equipe/al-genevieve.webp", names: "Anne-Laure Boccon-Gibod & Geneviève Werner", roles: "Présidente et Directrice Associée" },
  sandrine: { photo: "/img/equipe/sandrine.webp", names: "Sandrine Cauvin", roles: "Directeur des Investissements" },
  partners: { photo: "/img/equipe/al-patrick.webp", names: "Anne-Laure Boccon-Gibod & Patrick Werner", roles: "Présidente et Directeur Associé" },
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
    slug: "genevieve-werner",
    linkedin: "https://www.linkedin.com/in/genevieve-werner-conseil-patrimonial/",
    name: "Geneviève Werner",
    role: "Directrice Associée",
    photo: "/img/equipe/genevieve.webp",
    quote: "Dans un environnement en constante évolution, un conseil sur-mesure est indispensable.",
    bio: [
      "Geneviève Werner, Directrice Associée, est conseil de l'équipe en charge des allocations financières pour les clients d'ARUM Gestion Privée. Gestionnaire d'actifs depuis plus de 35 ans, Geneviève a créé et dirigé des sociétés de gestion et connaît personnellement les meilleurs gérants des fonds de la Place. Geneviève garantit, avec un haut niveau de performance, l'adéquation de la gestion des fonds qui nous sont confiés. Son calme, son sens du travail, de la précision et de l'anticipation sont particulièrement appréciés par nos clients.",
      "Animée depuis toujours par l'esprit de famille, Geneviève aime jouer au tennis avec ses enfants et petits-enfants, profiter de la montagne aussi bien en été qu'en hiver, et dévorer les biographies des grands personnages de notre Histoire.",
    ],
  },
  {
    slug: "patrick-werner",
    linkedin: "https://www.linkedin.com/in/patrick-werner-a60314105/",
    name: "Patrick Werner",
    role: "Directeur Associé",
    photo: "/img/equipe/patrick.webp",
    quote: "Définir une stratégie patrimoniale et la mettre en œuvre exige un état d'esprit différent de celui de la banque traditionnelle.",
    bio: [
      "Patrick Werner, entrepreneur, Inspecteur des Finances, créateur et ancien Président du Directoire de la Banque Postale, ancien Directeur Général du Groupe d'assurances Victoire (marque Abeille), ancien Expert-comptable, est conseiller de la Présidente. Fort de ses expériences de dirigeant, Patrick a acquis une parfaite maîtrise des activités bancaires et assurantielles, notamment dans le domaine de la gestion patrimoniale, à travers le lancement réussi de La Banque Postale Gestion Privée.",
      "Membre du Club des Cent, Patrick est passionné de gastronomie et de tous les sports (il est d'ailleurs aussi Président de l'Académie des Sports). Il pratique notamment le tennis en famille.",
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
    linkedin: null, // pas de profil publié sur le site actuel
    name: "Isabelle Martins",
    role: "Chargée de Middle Office et Affaires Générales",
    photo: "/img/equipe/isabelle.webp",
    quote: "Servir nos clients, c'est s'engager concrètement à leurs côtés pour leur apporter des réponses utiles et durables.",
    bio: [
      "Isabelle évolue depuis 20 ans au service des PME. Elle a travaillé pendant 10 ans au sein d'une société de gestion de patrimoine en tant qu'assistante administrative et commerciale. Elle a rejoint l'équipe d'ARUM Gestion Privée en novembre 2025, en tant que Chargée Middle Office aux côtés de Marie dans l'accompagnement de nos clients.",
      "Isabelle aime consacrer son temps libre à partager des moments simples avec ses proches. La marche dans la nature lui apporte équilibre et sérénité. Son péché mignon : le sucré, notamment les pasteis de nata et les éclairs au café.",
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
  join: fr("Vous souhaitez vous spécialiser dans la stratégie patrimoniale ?"),
};

export const APPROACH = {
  lead: [
    "Parce que nous appréhendons les questionnements qui vous animent au quotidien et parce que nous nous adaptons à vos attentes à moyen et long terme, nous définissons avec vous la meilleure stratégie patrimoniale et financière afin de vous permettre de réaliser vos projets.",
    "Notre approche est celle d'une « boutique » de conseil patrimonial toujours à votre écoute et notre philosophie est de mettre à votre service toutes nos compétences pluridisciplinaires (ingénierie patrimoniale, organisation juridique fiscale et financière, conseil en investissement) pour construire, pour chacun de vous, une stratégie patrimoniale et des allocations financières entièrement sur-mesure.",
  ].map(fr),
  familyOffice: fr(
    "Nous sommes pour vous, votre « family-office » qui vous accompagne de manière personnalisée à chaque étape de votre vie.",
  ),
  offerTitle: fr("Expertise, approche transversale, sur-mesure, une offre en 3 temps."),
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

// Actualités : les articles restent pour l'instant sur le site actuel (28 pages d'archives).
const OLD = "https://www.arumgestionprivee.com/articles/";
export const NEWS = [
  {
    date: "2026-09-21",
    title: "Assurance-vie souscrite à 86 ans : peut-elle être requalifiée de donation indirecte ? Le juge tranche…",
    summary: "Le 28 juillet 2026, la CA de Pau s'est prononcée sur la requalification d'une assurance-vie souscrite à 86 ans en donation indirecte et sur le caractère manifestement exagéré des primes versées.",
    href: OLD + "assurance-vie-souscrite-a-86-ans-peut-elle-etre-requalifiee-de-donation-indirecte-le-juge-tranche",
  },
  {
    date: "2026-09-14",
    title: "Attributions gratuites d'actions (AGA) : l'administration fiscale actualise (enfin) sa doctrine, sans trancher les management packages",
    summary: "Le 21 mai 2026, le BOFiP a mis à jour sa doctrine sur les attributions gratuites d'actions (AGA), intégrant les réformes de 2018 à 2023 et comblant près de dix ans de retard.",
    href: OLD + "attributions-gratuites-dactions-aga-ladministration-fiscale-actualise-enfin-sa-doctrine-sans-trancher-les-management-packages",
  },
  {
    date: "2026-07-28",
    title: "Dirigeant de SASU à l'IR non rémunéré : quid du traitement social pour les bénéfices ?",
    summary: "Les bénéfices d'une SASU à l'IR, imposés à l'associé unique non rémunéré, relèvent des prélèvements sociaux sur les revenus du patrimoine à 18,6 %, si non soumis aux cotisations sociales d'activité.",
    href: OLD + "dirigeant-de-sasu-a-lir-non-remunere-quid-du-traitement-social-pour-les-benefices",
  },
  {
    date: null,
    title: "Apport d'usufruit temporaire à une SCI : quelle fiscalité pour le cédant, IR ou impôt sur la plus-value ?",
    summary: "Dans une décision du 30 mars 2026, le Conseil d'État confirme la position de l'administration fiscale, qui retient une acception large de la notion de cession pour y intégrer l'apport d'un usufruit temporaire de parts sociales.",
    href: OLD + "apport-dusufruit-temporaire-a-une-sci-quelle-fiscalite-pour-le-cedant-ir-ou-impot-sur-la-plus-value",
  },
].map((n) => ({ ...n, title: fr(n.title), summary: fr(n.summary) }));

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
export const PARTNERS = [
  { name: "Rohan Invest", logo: "/img/partenaires/rohan-invest.png" },
  { name: "Allianz", logo: "/img/partenaires/allianz.png" },
  { name: "Tikehau Capital", logo: "/img/partenaires/tikehau-capital.png" },
  { name: "Cardif Lux Vie : Groupe BNP Paribas", logo: "/img/partenaires/cardif-lux-vie.png" },
  { name: "LBO France", logo: "/img/partenaires/lbo-france.png" },
  { name: "AG2R La Mondiale", logo: "/img/partenaires/ag2r-la-mondiale.png" },
  { name: "Generali", logo: "/img/partenaires/generali.png" },
  { name: "Capza", logo: "/img/partenaires/capza.png" },
];

// Film de présentation (site actuel). Lecteur chargé uniquement au clic (CNIL).
export const FILM = { youtubeId: "xoQ6_YI0S0o", mp4: null };
