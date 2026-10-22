// Aperçu GitHub Pages : le site est servi sous un sous-dossier (BASE_PATH, ex. /siteinternet/).
// Préfixe les chemins des fichiers de public/ écrits en dur (images, logos, favicons) et
// interdit l'indexation de cet aperçu (le site officiel reste arumgestionprivee.com).
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const BASE = (process.env.BASE_PATH || "/").replace(/\/?$/, "/");
if (BASE === "/") process.exit(0);

const PUBLIC = /(["'(`]|, )\/(img|video|brand|favicon\.ico|favicon-32\.png|favicon-192\.png|apple-touch-icon\.png|og-arum\.jpg|llms\.txt)/g;
const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

for (const file of walk(DIST).filter((f) => /\.(html|js|css|json)$/.test(f))) {
  let s = readFileSync(file, "utf8");
  s = s.replace(PUBLIC, `$1${BASE}$2`);
  if (file.endsWith(".html")) s = s.replace("<head>", '<head><meta name="robots" content="noindex, nofollow">');
  writeFileSync(file, s);
}
writeFileSync(join(DIST, "robots.txt"), "User-agent: *\nDisallow: /\n");
// Fichiers propres à l'hébergeur de production, inutiles sur GitHub Pages.
for (const f of ["_headers", "_redirects", "sitemap.xml"]) existsSync(join(DIST, f)) && rmSync(join(DIST, f));
console.log(`pages : chemins préfixés par ${BASE}, aperçu non indexé`);
