import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { CtaBand, TeamCrowd } from "../components/Sections.jsx";
import { HOME, DIFFERENCE, TEAM_PAGE, APPROACH, BESPOKE, VALUES, fr } from "../content/site.js";
import { FAQ } from "../content/faq.js";
import "./Home.css";

// La FAQ du pied de page, déclarée en données structurées (moteurs et assistants IA).
const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.flatMap((g) =>
    g.items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  ),
};

/*
 * Accueil construit comme celui de Hottinger Gaultier : la vue des bureaux en fond fixe sous un voile bleu nuit,
 * le symbole ARUM seul au centre, puis, au fil du défilement, un écran par page du site (nom en italique,
 * titre, résumé, lien) qui apparaît puis repart. Textes repris du site ARUM.
 */
const PANELS = [
  {
    kicker: "Se connaître",
    title: TEAM_PAGE.title,
    text: [TEAM_PAGE.text[1]],
    to: "/nous-connaitre",
    link: "Découvrir l'équipe",
  },
  {
    kicker: "Agir en confiance",
    title: APPROACH.offerTitle,
    text: [APPROACH.lead[0]],
    to: "/agir-en-confiance",
    link: "Notre approche",
  },
  {
    kicker: "Le sur-mesure",
    title: HOME.unique,
    text: [HOME.uniqueEnd, HOME.introBis, HOME.strategy],
    to: "/sur-mesure",
    link: "Découvrir le sur-mesure",
  },
  {
    kicker: "Des valeurs de famille",
    title: fr(DIFFERENCE.tagline),
    text: [VALUES.lead],
    to: "/valeurs",
    link: "Découvrir nos valeurs",
  },
  {
    kicker: "Nos décryptages",
    title: "Décryptages patrimoniaux",
    text: [fr("Fiscalité, transmission, statut du dirigeant, immobilier : nos analyses de l’actualité juridique et financière.")],
    to: "/actualites",
    link: "Lire nos décryptages",
  },
];

/** Fait apparaître chaque écran quand il arrive au centre, et le fait repartir quand on le quitte. */
function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const items = ref.current?.querySelectorAll("[data-reveal]") || [];
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("is-in", e.isIntersecting)),
      { rootMargin: "-20% 0px -20% 0px" },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const ref = useScrollReveal();
  return (
    <>
      <Seo jsonLd={FAQ_LD} />
      <div className="hx" ref={ref}>
        {/* vue des bureaux (82 avenue Marceau, l'Arc de Triomphe), en fond fixe sous un voile bleu nuit */}
        <div className="hx__bg" aria-hidden="true">
          <img
            src="/img/accueil/vue-bureaux-2400.webp"
            srcSet="/img/accueil/vue-bureaux-1200.webp 1200w, /img/accueil/vue-bureaux-2400.webp 2400w"
            sizes="100vw"
            alt=""
            fetchPriority="high"
          />
          <span className="hx__tint" />
        </div>

        {/* ouverture : le symbole ARUM seul, au centre */}
        <section className="hx__intro" data-step="Accueil">
          <h1 className="sr-only">ARUM Gestion Privée</h1>
          <img className="hx__logo" src="/brand/symbole.svg" alt="" width="194" height="245" />
        </section>

        {/* premier écran : la promesse du cabinet */}
        <section className="hx__panel" data-step="ARUM Gestion Privée">
          <div className="hx__content" data-reveal>
            <p className="hx__kicker">ARUM Gestion Privée</p>
            <h2 className="hx__title">
              {HOME.title} <span className="accent">{HOME.titleEnd}</span>
            </h2>
            <p className="hx__text">{HOME.intro}</p>
            <Link className="hx__link" to="/contact">
              Initions un échange <span className="hx__arrow" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* toute l'équipe, debout devant la vue des bureaux, sous le même filtre bleu que le paysage */}
        <section className="hx__portrait" data-step="L'équipe">
          <TeamCrowd className="hx__team" reveal />
        </section>

        {/* un écran par page du site */}
        {PANELS.map((p) => (
          <section key={p.to} className="hx__panel" data-step={p.kicker}>
            <div className="hx__content" data-reveal>
              <p className="hx__kicker">{p.kicker}</p>
              <h2 className="hx__title">{p.title}</h2>
              {p.text.map((t) => (
                <p key={t.slice(0, 30)} className="hx__text">
                  {t}
                </p>
              ))}
              <Link className="hx__link" to={p.to}>
                {p.link} <span className="hx__arrow" aria-hidden="true" />
              </Link>
            </div>
          </section>
        ))}

        <CtaBand />
      </div>
    </>
  );
}
