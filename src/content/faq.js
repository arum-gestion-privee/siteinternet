import { fr } from "./site.js";

// Questions fréquentes, affichées dans un onglet dépliable en pied de toutes les pages.
// Réponses tirées uniquement des informations publiées sur le site (à relire par le cabinet).
const group = (category, items) => ({ category, items: items.map(([q, a]) => ({ q: fr(q), a: fr(a) })) });

export const FAQ = [
  group("Notre accompagnement", [
    [
      "Qui accompagnez-vous ?",
      "Des entrepreneurs et des familles, déjà plus d'une centaine depuis la création du cabinet en 2014. Nous prenons en compte à la fois votre patrimoine privé et votre patrimoine professionnel.",
    ],
    [
      "Comment se déroule la relation avec ARUM Gestion Privée ?",
      "En trois temps : nous prenons d'abord le temps de comprendre votre patrimoine, ses origines et vos objectifs (ingénierie patrimoniale) ; nous mettons ensuite en œuvre votre stratégie avec une approche transversale ; enfin, nous construisons une allocation financière sur-mesure, suivie dans la durée.",
    ],
    [
      "Faites-vous uniquement de la gestion financière ?",
      "Non. Notre métier ne se limite pas à la recherche de « bons placements » : nous vous conseillons aussi sur l'organisation juridique et fiscale de votre patrimoine, sa protection et sa transmission, comme le ferait un family office.",
    ],
  ]),
  group("Indépendance et réglementation", [
    [
      "ARUM Gestion Privée appartient-elle à un groupe bancaire ou d'assurance ?",
      "Non. Le cabinet n'est lié, en droit comme d'esprit, à aucune entité financière, d'assurance ou de gestion. Cette liberté nous permet de sélectionner, pour chaque client, les solutions qui conviennent à sa situation.",
    ],
    [
      "Quels sont vos agréments ?",
      "ARUM Gestion Privée est immatriculée à l'ORIAS sous le n° 14003105 en qualité de conseiller en investissements financiers (adhérent de la CNCGP, association agréée par l'AMF), de courtier en assurance et de courtier en opérations de banque et en services de paiement. Le cabinet est également titulaire d'une carte de transaction immobilière (carte T).",
    ],
    [
      "Recevez-vous les fonds de vos clients ?",
      "Non. ARUM Gestion Privée ne peut recevoir aucun fonds, effet ou valeur : vos avoirs restent détenus par les établissements teneurs de compte et les compagnies d'assurance.",
    ],
  ]),
  group("Prendre contact", [
    [
      "Comment prendre rendez-vous ?",
      "Appelez-nous au 01 75 43 66 50, écrivez à contact@arumgestionprivee.com ou laissez vos coordonnées via notre formulaire : un membre de l'équipe vous recontacte pour un premier échange, sans engagement.",
    ],
    [
      "Où se trouve le cabinet ?",
      "Nos bureaux sont situés au 82 avenue Marceau, dans le 8e arrondissement de Paris.",
    ],
    [
      "Comment se déroule le premier échange ?",
      "C'est un premier échange, sans engagement, pour comprendre votre situation, vos projets et vos objectifs.",
    ],
  ]),
];
