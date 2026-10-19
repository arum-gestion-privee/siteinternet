# ARUM Gestion Privée — refonte du site (mémoire du projet pour Claude)

Ce fichier est lu automatiquement par Claude Code au démarrage, quel que soit le compte : il remplace
l'historique de la conversation d'origine (octobre 2026). Mettre à jour « En suspens » après chaque chantier.
Aucun secret ici.

## Le projet
Refonte de https://www.arumgestionprivee.com (cabinet de conseil en gestion de patrimoine, Paris 8e,
SAS, ORIAS 14003105, CIF adhérent CNCGP) dans l'esprit du site ERNEST 1895 (`~/Desktop/Pharma`).
Site statique : **Vite 8 + React 19 + react-router + vite-react-ssg** (pages prérendues), CSS maison.
Rien n'est publié : l'ancien site Webflow reste en ligne.

## Règles fixées avec l'utilisateur (à respecter)
- **Français**, messages courts ; l'utilisateur dirige par petites demandes visuelles. Vérifier avant de livrer
  (build + aperçu), puis dire simplement ce qui a changé. Ne jamais publier ni envoyer sans demande explicite.
- **100 % du contenu du site actuel, mot pour mot** ; on ne modernise que l'organisation et les composants.
  Ne pas inventer de textes (pas de faux témoignages, pas de chiffres non sourcés).
- **Charte officielle** (`~/Downloads/CHARTE ARUM.pdf`, agence People of Verso) : bleu nuit `#121C40`,
  brique `#9A4C37` (**seul orange pour les textes et boutons**), fond clair `#F6F9FC`,
  dégradé `#D29965 → #FB190A` fondu dans le bleu nuit (`--orange-grad`).
  Polices de la charte : Playfair Display + Montserrat ; le site utilise **Inter Tight (titres) + Inter (texte)
  + Playfair (accents, titre de l'accueil)**, choix de l'utilisateur.
- Fonds de sections **en alternance bleu nuit / clair** ; dégradé de la charte sur les blocs de mise en avant
  (objectifs, chiffres, étapes, citation, colonne ARUM du comparatif, bandeau « Nous contacter »).
- Boutons translucides = **même verre que la liquid bar** : `rgba(255,255,255,.14)`, bordure `.32`, `blur(18px)`.
- Typographie française (`fr()` dans `src/content/site.js`), **deux-points à la place des tirets séparateurs**.
- Page « Nous connaître » (`/nous-connaitre`, entièrement sur fond bleu) ; anciennes adresses redirigées.

## Commandes
```bash
npm install
npm run dev       # développement
npm run build     # dist/ + sitemap, robots (robots IA autorisés), llms.txt, empreintes CSP
npm run serve     # aperçu de dist/ avec les en-têtes de sécurité : http://localhost:4174
npm run images    # convertit les photos PNG de public/img/equipe en WebP
node scripts/logo.mjs "<LOGO VERTICAL FOND BLANC.jpg>"   # régénère les logos détourés (public/brand)
```
Node ≥ 22.12. Aperçu dans l'app Claude : configuration `arum-dist` (port 4174).

## Code sur GitHub
Dépôt privé **https://github.com/arum-gestion-privee/siteinternet** (branche `main`), compte GitHub `arum-gestion-privee`.
Envoyer les modifications : `git add -A && git commit -m "…" && git push`.
La clé d'accès (jeton « fine-grained », droit *Contents : Read and write* sur `siteinternet` uniquement) est enregistrée
dans le trousseau macOS pour ce dossier seulement (`git config credential.helper osxkeychain`).
Sur un autre poste : `git clone https://github.com/arum-gestion-privee/siteinternet.git && npm install`.
Ne jamais coller la clé dans une commande visible ni la transmettre à Claude.
**Aperçu en ligne** (public, non indexé) : https://arum-gestion-privee.github.io/siteinternet/ — republié
automatiquement à chaque envoi sur `main` (`.github/workflows/pages.yml`, `BASE_PATH=/siteinternet/`, `scripts/pages.mjs`).
Réglage GitHub requis : Settings → Pages → Source = « GitHub Actions ». L'utilisateur a demandé que chaque
modification validée y parte directement.

## Où modifier quoi
| Sujet | Fichier |
|---|---|
| Tous les textes, équipe, objectifs, chiffres, actualités, partenaires | `src/content/site.js` |
| FAQ du pied de page | `src/content/faq.js` |
| Mentions légales, confidentialité | `src/content/legal.js` |
| Accueil | `src/pages/Home.jsx` + `Home.css` |
| Composants partagés (objectifs, chiffres, portraits, agréments…) | `src/components/Sections.jsx` |
| Couleurs, styles communs | `src/styles/global.css` (variables en tête) |
| Sécurité (CSP stricte, HSTS…), redirections | `public/_headers`, `public/_redirects` |
| SEO / données structurées | `src/components/Seo.jsx`, `index.html`, `scripts/postbuild.mjs` |

## En suspens / à confirmer
1. **Bloquant avant la bascule du domaine** : les 28 pages `/articles/*` de l'ancien site ne sont pas reprises
   (les actualités pointent encore vers l'ancien domaine).
2. Statut **MIF2** (conseil indépendant ou non : le site évite le mot « indépendant »), **n° de TVA**,
   document d'entrée en relation : la lettre d'entrée en relation de janvier 2026 est dans `~/Downloads`.
3. Siège fixé au 82 avenue Marceau (choix de l'utilisateur) : vérifier le Kbis.
4. Chiffre « 6 » (site actuel) ou « 7 » personnes (page équipe) : 7 retenu.
5. « Recevez notre actualité » (lettre d'information) non reprise : à brancher (ex. Brevo, comme Ernest).
6. Formulaires Typeform (rappel, recrutement) conservés en liens ; Isabelle Martins sans lien LinkedIn.
7. Hébergeur à confirmer dans les mentions légales (Cloudflare par défaut).
8. Logos partenaires (« Ils nous font confiance ») : vérifier que les accords sont toujours d'actualité.
9. Contraste : le brique `#9A4C37` en petit texte sur bleu nuit est faible (≈ 2,7:1) ; alternative de la charte : `#D29965`.
