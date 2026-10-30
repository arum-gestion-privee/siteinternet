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
  brique `#9A4C37`, **éclaircie en `#B85C42` sur le site** (seul orange pour les textes et boutons), fond clair `#F6F9FC`,
  dégradé `#D29965 → #FB190A` fondu dans le bleu nuit (`--orange-grad`).
  Polices de la charte : Playfair Display + Montserrat ; le site utilise **Playfair pour tous les titres et
  sous-titres et le menu mobile ; Inter pour le texte et la liquid bar** (choix de l'utilisateur).
- **Toutes les pages sur fond bleu nuit** ; blocs en verre translucide (`.panel`) ; dégradé orange réservé aux
  cartes objectifs, étapes, colonne ARUM du comparatif et cadres des portraits. Pas de cartes blanches.
- Boutons translucides = **même verre que la liquid bar** : `rgba(255,255,255,.14)`, bordure `.32`, `blur(18px)`.
- Typographie française (`fr()` dans `src/content/site.js`), **deux-points à la place des tirets séparateurs**.
- **Pages intérieures construites comme celles de Hottinger Gaultier** (hottinger-gaultier.ch) : ouverture en deux
  colonnes (rubrique en italique + grand titre | logo + introduction), sections « titre | texte » (`.edito`),
  clôture « Initier un échange » (`CtaBand`). Pas de tuiles de renvoi (retirées à la demande de l'utilisateur).
  **Vocabulaire** : « Initier un échange » (jamais « Nous contacter »), « Nous écrire », « Notre approche »,
  « Découvrir… ». Les textes d'ARUM restent mot pour mot ; ne pas copier les phrases de Hottinger Gaultier.
- Page « Se connaître » (`/nous-connaitre`, entièrement sur fond bleu) ; anciennes adresses redirigées.

## Commandes
```bash
npm install
npm run dev       # développement
npm run build     # dist/ + sitemap, robots (robots IA autorisés), llms.txt, empreintes CSP
npm run serve     # aperçu de dist/ avec les en-têtes de sécurité : http://localhost:4174
npm run images    # convertit les photos PNG de public/img/equipe en WebP
node scripts/logo.mjs "<LOGO VERTICAL FOND BLANC.jpg>"   # régénère les logos détourés (public/brand)
node scripts/favicon.mjs   # régénère favicon.ico + PNG (puis changer ?v=… dans index.html)
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

## Formulaires (contact, candidature, « Recevez notre actualité »)
`src/components/Forms.jsx` → fonctions Cloudflare Pages `functions/api/{contact,candidature,actualites}.js` → Brevo.
**À configurer avant la mise en ligne** (Cloudflare Pages → Settings → Environment variables) : `BREVO_API_KEY`
(secret), `MAIL_TO`, `MAIL_FROM` (expéditeur validé dans Brevo), `BREVO_LIST_ID` (liste « Actualités »).
Sur l'aperçu GitHub Pages les fonctions n'existent pas : l'envoi échoue proprement (message + courriel).
Bas de toutes les pages : `LicencesBand` (Nos agréments, dans `App.jsx`) puis le pied de page, qui contient « Recevez notre actualité » (`NewsSignup`, version compacte).

## Où modifier quoi
| Sujet | Fichier |
|---|---|
| Tous les textes, équipe, objectifs, chiffres, actualités, partenaires | `src/content/site.js` |
| FAQ du pied de page | `src/content/faq.js` |
| Mentions légales, confidentialité | `src/content/legal.js` |
| Accueil | `src/pages/Home.jsx` + `Home.css` |
| Composants partagés (objectifs en onglets, chiffres, portraits, agréments…) | `src/components/Sections.jsx` |
| Apparitions au défilement (`useArrive`) et éclairage au passage (`useLight`) | `src/components/useArrive.js` |
| Fil de lecture à gauche (un point par élément `data-step`, absent de Nos décryptages) | `src/components/ReadingRail.jsx` |
| Couleurs, styles communs | `src/styles/global.css` (variables en tête) |
| Sécurité (CSP stricte, HSTS…), redirections | `public/_headers`, `public/_redirects` |
| SEO / données structurées | `src/components/Seo.jsx`, `index.html`, `scripts/postbuild.mjs` |

## En suspens / à confirmer
1. **Bloquant avant la bascule du domaine** : 6 des 28 articles sont repris (pages `/articles/<slug>`, même adresse
   que l'ancien site, texte fourni par l'utilisateur, champ `quote` de `NEWS` dans `src/content/site.js`, photos dans
   `public/img/articles`). Restent 22 articles ; l'ancien site n'est pas accessible depuis la session cloud
   (réseau bloqué) : l'utilisateur colle les textes. Articles Cessions SPI et CDHR sans date ni résumé.
2. Statut **MIF2** (conseil indépendant ou non : le site évite le mot « indépendant »), **n° de TVA**,
   document d'entrée en relation : la lettre d'entrée en relation de janvier 2026 est dans `~/Downloads`.
3. Siège fixé au 82 avenue Marceau (choix de l'utilisateur) : vérifier le Kbis.
4. Chiffre « 6 » (site actuel) ou « 7 » personnes (page équipe) : 7 retenu.
5. « Recevez notre actualité » (lettre d'information) non reprise : à brancher (ex. Brevo, comme Ernest).
6. Formulaires internes (Typeform abandonné) : brancher Brevo (voir « Formulaires »), relire la mention
   « Confidentialité » mise à jour.
7. Hébergeur à confirmer dans les mentions légales (Cloudflare par défaut).
8. Partenaires : Rohan Invest retiré ; BNP Paribas Cardif, Generali Luxembourg, Wealins, AG2R La Mondiale France
   ajoutés avec leurs logos (convertis en blanc sur fond transparent, comme les autres).
10. Accueil refait comme celui de Hottinger Gaultier : vue des bureaux (Arc de Triomphe, `public/img/accueil`) en fond
    fixe teinté bleu nuit, symbole ARUM seul au centre, puis un écran par page (rubrique, titre, résumé, lien) qui
    apparaît/repart au défilement (`Home.jsx`). Retirés de l'accueil : film, comparatif, chiffres clés, citations
    de Marie et Sandrine, objectifs. Photo de l'équipe déplacée sur Se connaître, film sur Des valeurs de famille.
9. Contraste : le brique `#9A4C37` en petit texte sur bleu nuit est faible (≈ 2,7:1) ; alternative de la charte : `#D29965`.
