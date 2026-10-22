import { fr } from "./site.js";

// Mentions légales reprises du site actuel. Points à confirmer avant mise en ligne :
// - hébergeur : à mettre à jour selon l'hébergement retenu (variables VITE_HOST_*).
const HOST_NAME = import.meta.env.VITE_HOST_NAME || "Cloudflare, Inc.";
const HOST_ADDRESS =
  import.meta.env.VITE_HOST_ADDRESS || "101 Townsend Street, San Francisco, CA 94107, États-Unis";

const s = (title, ...paras) => ({ title, paras: paras.map(fr) });

export const MENTIONS = {
  slug: "mentions-legales",
  title: "Mentions légales",
  sections: [
    s(
      "Éditeur",
      "Le propriétaire et éditeur de ce site est la société ARUM Gestion Privée, SAS au capital de 30 000 euros, inscrite au Registre du Commerce et des Sociétés de Paris sous le n° 801 559 576. Siège social : 82, avenue Marceau, 75008 Paris. Tél. : 01 75 43 66 50.",
      "Responsable de la publication : Anne-Laure Boccon-Gibod, Directeur général. Responsables éditoriaux : Anne-Laure Boccon-Gibod, Patrick Werner.",
      "Courriel : contact@arumgestionprivee.com",
    ),
    s("Hébergement", `Le présent site est hébergé par ${HOST_NAME}, ${HOST_ADDRESS}.`),
    s(
      "Réglementation",
      "ARUM Gestion Privée est enregistrée à l'ORIAS sous le n° 14003105 (www.orias.fr) en qualité de :",
      "• courtier en assurance ;",
      "• courtier en opérations de banque et en services de paiement ;",
      "• conseiller en investissements financiers, adhérent à la Chambre Nationale des Conseils en Gestion de Patrimoine, association agréée par l'Autorité des Marchés Financiers ;",
      "• activité de démarchage bancaire et financier ;",
      "• activité de transaction sur immeubles et fonds de commerce, carte T professionnelle n° CPI 7501 2017 000 017 572, délivrée par la CCI de Paris Île-de-France.",
      "Garantie financière et assurance responsabilité civile professionnelle n° 118.263.166 auprès de la Compagnie MMA IARD Assurances Mutuelles / MMA IARD, 14, boulevard Marie-et-Alexandre-Oyon, 72030 Le Mans Cedex 9.",
      "Ne peut recevoir aucun fonds, effet ou valeur.",
    ),
    s(
      "Propriété intellectuelle",
      "Le site, sa structure générale, ainsi que les textes, images animées ou non, savoir-faire, dessins, graphismes et tout autre élément composant le site sont la propriété soit de la société ARUM Gestion Privée, soit de clients qui auront autorisé la société ARUM Gestion Privée à produire leurs données, soit de l'achat d'art dont l'agence s'est acquittée.",
      "Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l'autorisation expresse de l'exploitant du site, est interdite et constituerait une contrefaçon sanctionnée par les articles L. 335-2 et suivants du Code de la propriété intellectuelle.",
    ),
    s(
      "Crédit photographique",
      "Les photos de l'équipe d'ARUM Gestion Privée sont l'œuvre de l'agence People of Verso et sont protégées par la législation sur la propriété intellectuelle. Toute représentation totale ou partielle de ces photos, par quelque procédé que ce soit, sans l'autorisation expresse de l'auteur est interdite.",
    ),
    s(
      "Fonctionnement et utilisation du site",
      "La société ARUM Gestion Privée n'est tenue que d'une obligation de moyens en ce qui concerne le fonctionnement et la continuité du site et ne pourra en aucun cas être tenue responsable des vitesses d'accès, de ralentissements externes, de la suspension ou de l'inaccessibilité du site, de l'utilisation frauduleuse par des tiers des informations mises à disposition, des cas de force majeure ou d'une incompatibilité avec certains logiciels, configurations ou équipements.",
      "La société ARUM Gestion Privée se réserve le droit, sans préavis ni indemnité, d'arrêter temporairement ou définitivement tout ou partie des services proposés sur le site.",
      "Les informations diffusées sur ce site ne constituent pas une recommandation d'investissement ou un conseil financier, chaque internaute ayant des besoins particuliers au moment de sa connexion.",
    ),
    s(
      "Liens externes",
      "Le site peut contenir des liens hypertexte vers d'autres sites. La société ARUM Gestion Privée ne prend aucun engagement concernant ces sites et n'est en aucune façon responsable de leur contenu, de leur fonctionnement ou de leur accès.",
    ),
    s(
      "Contenus illicites",
      "Vous ne pouvez utiliser le site qu'à des fins légales. Toute action ayant pour but de restreindre ou d'empêcher une autre personne d'utiliser le site est strictement interdite.",
    ),
    s("Droit applicable", "Les présentes dispositions sont soumises au droit français."),
    s(
      "Traitement des réclamations",
      "En cas de litige ou de réclamation, les parties s'engagent à rechercher en premier lieu un arrangement amiable. Vous pouvez présenter votre réclamation par lettre recommandée avec accusé de réception à l'adresse de notre siège : 82, avenue Marceau, 75008 Paris. Nous disposerons de 10 jours pour en accuser réception, sauf réponse apportée dans ce délai, puis de 2 mois à compter de sa réception pour y répondre.",
      "À défaut d'arrangement amiable : pour l'activité de CIF, le Médiateur de l'Autorité des Marchés Financiers, 17, place de la Bourse, 75082 Paris Cedex 02 (www.amf-france.org/lemediateur) ; pour les autres activités, le Centre de Médiation et d'Arbitrage de Paris (CMAP), Service Médiation de la consommation, 39, avenue Franklin-D.-Roosevelt, 75008 Paris (mediateur-conso.cmap.fr). En cas d'échec, le litige pourra être porté devant les tribunaux compétents.",
    ),
    s(
      "Avertissement",
      "Les informations publiées sur ce site, notamment dans la rubrique Nos décryptages, sont fournies à titre d'information générale. Elles ne constituent ni un conseil en investissement, ni une recommandation personnalisée, ni une offre ou une sollicitation d'achat ou de vente d'un produit financier ou d'assurance. Toute décision doit être précédée d'une analyse de votre situation personnelle avec un conseiller.",
      "Tout investissement comporte des risques, notamment un risque de perte en capital. Les performances passées ne préjugent pas des performances futures. Les dispositifs fiscaux évoqués dépendent de la situation de chacun et sont susceptibles d'évoluer.",
    ),
    s(
      "Informations en matière de durabilité (SFDR)",
      "Conformément au règlement sur la publication d'informations en matière de durabilité dans le secteur des services financiers (SFDR), dans le cadre de nos conseils en matière de produits d'investissement fondés sur l'assurance, nous évaluons, en plus des risques financiers pertinents, les risques de durabilité pertinents, dans la mesure où cette information est disponible pour les produits conseillés : les événements environnementaux, sociaux ou de gouvernance qui, s'ils se produisent, pourraient avoir un impact négatif important sur la valeur de l'investissement.",
      "Notre politique de rémunération interne favorise une gestion saine et efficace des risques liés à la durabilité et n'encourage pas une prise de risque excessive. Nous passons en revue les informations fournies sur chaque produit, vérifions si le fournisseur tient compte des critères de durabilité dans une mesure appropriée et nous efforçons d'intégrer les principales incidences négatives sur les facteurs de durabilité dans nos conseils, notamment lors du recueil de vos exigences et besoins.",
      "Le cadre réglementaire de la durabilité continue d'évoluer : nous adapterons notre approche à mesure que de nouvelles orientations seront publiées. Pour plus de détails, nous vous invitons également à lire les informations communiquées par les fournisseurs des produits.",
    ),
  ],
};

export const PRIVACY = {
  slug: "confidentialite",
  title: "Confidentialité et cookies",
  sections: [
    s(
      "Responsable du traitement",
      "ARUM Gestion Privée, SAS immatriculée au RCS de Paris sous le n° 801 559 576, représentée par Anne-Laure Boccon-Gibod. Pour toute question relative à vos données : contact@arumgestionprivee.com.",
    ),
    s(
      "Données collectées",
      "Ce site ne collecte aucune donnée personnelle à votre insu. Les seules données que nous recevons sont celles que vous choisissez de nous transmettre : par téléphone, par courriel ou via les formulaires du site (contact, candidature, inscription à nos actualités).",
      "Les messages des formulaires de contact et de candidature (avec le CV joint) nous sont transmis par courriel et servent uniquement à vous répondre ; les candidatures sont conservées au plus 2 ans. L'inscription à nos actualités repose sur votre consentement, que vous pouvez retirer à tout moment grâce au lien de désinscription présent dans chaque envoi. L'acheminement de ces messages et la liste des inscrits sont confiés à Brevo (Sendinblue SAS, Paris), qui agit en qualité de sous-traitant et héberge les données dans l'Union européenne.",
    ),
    s(
      "Finalités et bases légales",
      "Répondre à vos demandes et organiser un premier rendez-vous (mesures précontractuelles prises à votre demande) ; conseiller nos clients sur leurs stratégies patrimoniales et leurs investissements (exécution du contrat) ; respecter nos obligations légales et réglementaires, notamment la connaissance client et la lutte contre le blanchiment des capitaux et le financement du terrorisme (obligation légale).",
    ),
    s(
      "Destinataires",
      "ARUM Gestion Privée et, dans la limite de ce qui est nécessaire, ses partenaires (prestataires informatiques, établissements financiers, compagnies d'assurance) ainsi que les autorités habilitées lorsque la loi l'exige. Vos données ne sont jamais vendues.",
    ),
    s(
      "Durée de conservation",
      "Les données des prospects sont conservées au plus 3 ans après le dernier contact. Celles des clients le sont pendant la durée de la relation contractuelle puis archivées pendant 5 ans, sauf délai légal plus long.",
    ),
    s(
      "Hébergement et transferts",
      `Le site est hébergé par ${HOST_NAME}. Lors de votre visite, l'hébergeur traite des données techniques (adresse IP, type de navigateur) pour acheminer les pages et protéger le site contre les attaques. Lorsque des données sont traitées hors de l'Union européenne, ce transfert est encadré par les garanties prévues par le RGPD (décision d'adéquation ou clauses contractuelles types de la Commission européenne).`,
    ),
    s(
      "Vos droits",
      "Conformément au règlement (UE) 2016/679 (RGPD) et à la loi n° 78-17 du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition, ainsi que du droit de définir des directives sur le sort de vos données après votre décès. Pour les exercer : contact@arumgestionprivee.com ou par courrier au siège de la société. Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).",
    ),
    s(
      "Cookies et traceurs",
      "Ce site ne dépose aucun cookie de mesure d'audience, de publicité ou de réseau social et n'utilise aucun outil de suivi ; les polices de caractères sont hébergées par le site lui-même. Aucun bandeau de consentement n'est donc nécessaire.",
    ),
  ],
};
