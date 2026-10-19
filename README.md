# ARUM Gestion Privée — site (v1)

Refonte de arumgestionprivee.com dans l'esprit du site ERNEST 1895 :
Vite + React + vite-react-ssg (pages prérendues en HTML statique), liquid bar.

```bash
npm install
npm run dev      # aperçu de développement
npm run build    # dist/ + sitemap, robots, empreintes CSP
npm run serve    # aperçu de dist/ avec les en-têtes de sécurité (http://localhost:4174)
```

- Tous les textes : `src/content/site.js` (mentions légales : `src/content/legal.js`).
- Sécurité : `public/_headers` (CSP stricte sans script en ligne non signé, HSTS, anti-iframe…),
  polices auto-hébergées, aucun cookie ni traceur.
