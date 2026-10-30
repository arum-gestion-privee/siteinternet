// Après le build : plan du site, robots.txt, et empreinte CSP des scripts en ligne.
// La CSP n'autorise aucun script en ligne, sauf ceux dont l'empreinte SHA-256 est listée ici
// (données structurées JSON-LD, état d'hydratation) : tout autre script injecté serait bloqué.
import { readFileSync, writeFileSync, readdirSync, statSync, copyFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, relative } from "node:path";

const DIST = "dist";
const ORIGIN = (process.env.SITE_ORIGIN || process.env.VITE_SITE_ORIGIN || "https://www.arumgestionprivee.com").replace(/\/+$/, "");

const htmlFiles = [];
const walk = (d) => readdirSync(d).forEach((f) => {
  const p = join(d, f);
  statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") && htmlFiles.push(p);
});
walk(DIST);

const hashes = new Set();
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  for (const m of html.matchAll(/<script(?![^>]*\b(?:src=|type="application\/ld\+json"))[^>]*>([\s\S]*?)<\/script>/g)) {
    hashes.add(`'sha256-${createHash("sha256").update(m[1]).digest("base64")}'`);
  }
  if (/\sstyle="/.test(html)) console.warn(`⚠ attribut style en ligne (bloqué par la CSP) : ${file}`);
}

// Page servie par l'hébergeur pour toute adresse inconnue.
copyFileSync(join(DIST, "404", "index.html"), join(DIST, "404.html"));

const headersPath = join(DIST, "_headers");
writeFileSync(headersPath, readFileSync(headersPath, "utf8").replace("__JSONLD_HASH__", [...hashes].join(" ")));

const pages = htmlFiles
  .map((f) => "/" + relative(DIST, f).replace(/index\.html$/, "").replace(/\.html$/, ""))
  .filter((p) => !/^\/404/.test(p))
  .sort();
const today = new Date().toISOString().slice(0, 10);
const priority = (p) => (p === "/" ? "1.0" : /mentions|confidentialite/.test(p) ? "0.3" : "0.8");
writeFileSync(
  join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map((p) => `  <url><loc>${ORIGIN}${p.replace(/\/$/, "") || "/"}</loc><lastmod>${today}</lastmod><priority>${priority(p)}</priority></url>`)
    .join("\n")}\n</urlset>\n`,
);

// Moteurs de recherche ET assistants IA explicitement autorisés (visibilité dans les réponses générées).
const AI_BOTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot", "MistralAI-User"];
writeFileSync(
  join(DIST, "robots.txt"),
  `User-agent: *\nAllow: /\nDisallow: /404\n\n${AI_BOTS.map((b) => `User-agent: ${b}\nAllow: /`).join("\n\n")}\n\nSitemap: ${ORIGIN}/sitemap.xml\n`,
);

// llms.txt : résumé factuel du cabinet pour les assistants IA (convention llmstxt.org).
const { HOME, TEAM, OBJECTIVES, APPROACH, VALUES, CONTACT, NEWS } = await import("../src/content/site.js");
const { FAQ } = await import("../src/content/faq.js");
const llms = `# ARUM Gestion Privée

> Cabinet de conseil en gestion de patrimoine fondé en 2014, situé 82 avenue Marceau, 75008 Paris. Il accompagne les entrepreneurs et les familles (plus de 100 accompagnés) dans l'organisation, la protection, l'optimisation et la transmission de leur patrimoine privé et professionnel. Équipe de 7 personnes, plus de 50 ans d'expérience cumulée.

${HOME.intro} ${HOME.strategy}

## Statut réglementaire
- SAS au capital de 30 000 €, RCS Paris 801 559 576.
- Immatriculée à l'ORIAS sous le n° 14003105 : conseiller en investissements financiers (CIF) adhérent de la CNCGP, association agréée par l'AMF ; courtier en assurance ; courtier en opérations de banque et en services de paiement.
- Carte de transaction immobilière (carte T) CPI 7501 2017 000 017 572, CCI Paris Île-de-France.
- Ne peut recevoir aucun fonds, effet ou valeur.
- Cabinet non lié à un groupe bancaire, d'assurance ou de gestion.

## Approche
${APPROACH.steps.map((s) => `- ${s.title} : ${s.text[0]}`).join("\n")}

## Objectifs des clients
${OBJECTIVES.map((o) => `- ${o.verb} ${o.object} : ${o.text}`).join("\n")}

## Valeurs
- ${VALUES.lead}
- ${VALUES.title} : ${VALUES.mindset.join(" ")}
- ${VALUES.freedomTitle} : ${VALUES.freedom}

## Équipe
${TEAM.map((m) => `- ${m.name}, ${m.role}`).join("\n")}

## Pages
- [Accueil](${ORIGIN}/)
- [Se connaître](${ORIGIN}/nous-connaitre)
- [Agir en confiance : l'offre en trois temps](${ORIGIN}/agir-en-confiance)
- [Le sur-mesure : transmettre, protéger, organiser, optimiser](${ORIGIN}/sur-mesure)
- [Des valeurs de famille](${ORIGIN}/valeurs)
- [Actualités](${ORIGIN}/actualites)
- [Contact](${ORIGIN}/contact)
- [Mentions légales](${ORIGIN}/mentions-legales)

## Questions fréquentes
${FAQ.flatMap((g) => g.items).map((i) => `### ${i.q}\n${i.a}`).join("\n\n")}

## Actualités récentes
${NEWS.map((n) => `- ${n.title}${n.date ? ` (${n.date})` : ""}`).join("\n")}

## Contact
- Téléphone : ${CONTACT.phone}
- Courriel : ${CONTACT.email}
- Adresse : ${CONTACT.address.join(", ")}

Les informations de ce site sont fournies à titre d'information générale et ne constituent pas un conseil en investissement personnalisé.
`.replace(/ /g, " ");
writeFileSync(join(DIST, "llms.txt"), llms);
console.log(`postbuild : ${pages.length} pages, ${hashes.size} script(s) en ligne autorisé(s) par empreinte, llms.txt ${llms.length} car.`);
