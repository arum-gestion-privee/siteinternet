import { NAV, HOME, DIFFERENCE, OBJECTIVES, TEAM, TEAM_PAGE, APPROACH, BESPOKE, VALUES, NEWS } from "./site.js";
import { FAQ } from "./faq.js";

// Index de recherche construit à partir du contenu du site (aucun service externe).
const label = (to) => NAV.find((n) => n.to === to)?.label || "";

export const SEARCH_INDEX = [
  { title: "Accueil", section: "Page", to: "/", text: [HOME.intro, HOME.introBis, HOME.strategy, DIFFERENCE.text].join(" ") },
  { title: label("/nous-connaitre"), section: "Page", to: "/nous-connaitre", text: [TEAM_PAGE.title, TEAM_PAGE.lead, ...TEAM_PAGE.text].join(" ") },
  { title: label("/agir-en-confiance"), section: "Page", to: "/agir-en-confiance", text: [...APPROACH.lead, APPROACH.familyOffice, ...APPROACH.steps.flatMap((s) => [s.title, ...s.text])].join(" ") },
  { title: label("/sur-mesure"), section: "Page", to: "/sur-mesure", text: [BESPOKE.quote, BESPOKE.generations, BESPOKE.generationsText].join(" ") },
  { title: label("/valeurs"), section: "Page", to: "/valeurs", text: [VALUES.lead, VALUES.title, ...VALUES.mindset, VALUES.professionalism, VALUES.freedomTitle, VALUES.freedom].join(" ") },
  { title: "Initions un échange", section: "Page", to: "/contact", text: "initions un échange initier un échange nous écrire contact téléphone courriel adresse rendez-vous rappel" },
  { title: "Recrutement", section: "Page", to: "/recrutement", text: "candidature spontanée recrutement CV rejoindre l'équipe " + TEAM_PAGE.join },
  { title: "Mentions légales", section: "Page", to: "/mentions-legales", text: "ORIAS CIF CNCGP AMF réclamation médiateur SFDR durabilité" },
  ...TEAM.map((m) => ({ title: m.name, section: m.role, to: `/nous-connaitre#${m.slug}`, text: [m.quote, ...m.bio].join(" ") })),
  ...OBJECTIVES.map((o) => ({ title: `${o.verb} ${o.object}`, section: "Vos objectifs", to: `/sur-mesure#${o.id}`, text: o.text })),
  ...NEWS.map((n) => ({ title: n.title, section: "Nos décryptages", href: n.href, text: n.summary })),
  ...FAQ.flatMap((g) => g.items.map((i) => ({ title: i.q, section: "Questions fréquentes", to: "#faq", text: i.a }))),
];

export const normalize = (s) =>
  String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’']/g, " ");

export function search(query) {
  const words = normalize(query).split(/\s+/).filter((w) => w.length > 1);
  if (!words.length) return [];
  return SEARCH_INDEX.map((e) => {
    const title = normalize(e.title);
    const body = normalize(`${e.section} ${e.text}`);
    let score = 0;
    for (const w of words) {
      if (title.includes(w)) score += 5;
      else if (body.includes(w)) score += 1;
      else return null;
    }
    const i = body.indexOf(words[0]);
    const raw = `${e.section} ${e.text}`;
    const excerpt = i > 0 ? "…" + raw.slice(Math.max(0, i - 50), i + 110).trim() + "…" : e.text.slice(0, 150) + "…";
    return { ...e, score, excerpt };
  })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}
