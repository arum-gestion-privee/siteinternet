import Seo, { SITE_ORIGIN, ORG_ID } from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import LiquidButton from "../components/LiquidButton.jsx";
import { IconArrow, IconLinkedIn } from "../components/icons.jsx";
import { TEAM, TEAM_PAGE } from "../content/site.js";

const TEAM_LD = TEAM.map((m) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_ORIGIN}/nous-connaitre#${m.slug}`,
  name: m.name,
  jobTitle: m.role,
  image: SITE_ORIGIN + m.photo,
  description: m.bio[0],
  worksFor: { "@id": ORG_ID },
  ...(m.linkedin ? { sameAs: [m.linkedin] } : {}),
}));

const CROWD = ["vincent", "marie", "patrick", "anne-laure", "genevieve", "sandrine", "isabelle"].map((k) =>
  TEAM.find((m) => m.slug.startsWith(k)),
);

export default function NousConnaitre() {
  return (
    <>
      <Seo
        title="Nous connaître"
        description="Une équipe de 7 personnes dédiée à l'organisation de votre patrimoine : découvrez les femmes et les hommes d'ARUM Gestion Privée."
        jsonLd={TEAM_LD}
      />
      <PageHero
        className="phero--accent phero--open"
        kicker="Nous connaître"
        title={TEAM_PAGE.title}
        lead={TEAM_PAGE.lead}
        body={TEAM_PAGE.text[0]}
        motif={false}
      />

      {/* toute l'équipe réunie, sous un filtre bleu, sur toute la largeur */}
      <div className="crowd-band" role="img" aria-label="L'équipe d'ARUM Gestion Privée">
        {/* filtre bleu (duotone bleu nuit / bleu clair, à moitié mêlé aux couleurs d'origine) */}
        <svg width="0" height="0" aria-hidden="true" focusable="false" className="crowd__defs">
          <filter id="crowd-blue" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="0.5840 0.2825 0.0285 0 0.0350  0.0840 0.7825 0.0285 0 0.0550  0.0797 0.2682 0.5271 0 0.1250  0 0 0 1 0" />
          </filter>
        </svg>
        <div className="crowd">
          {CROWD.map((m, i) => (
            <img key={m.slug} src={m.photo} alt="" loading="lazy" className={`crowd__p crowd__p--${i}`} />
          ))}
        </div>
      </div>

      <section className="section section--navy">
        {/* introduction à la présentation de l'équipe : centrée, avant les portraits */}
        <div className="shell team-intro reveal">
          <p>{TEAM_PAGE.text[1]}</p>
          <span className="panel__bar" aria-hidden="true" />
        </div>
      </section>

      {/* Page entièrement sur fond bleu nuit ; un bandeau par personne, séparé d'un filet */}
      {TEAM.map((m, i) => (
        <section key={m.slug} id={m.slug} className="section section--navy member-band">
          <div className="shell">
            <article className={"member reveal" + (i % 2 ? " member--alt" : "")}>
              <div className="member__photo">
                <img src={m.photo} alt={`Portrait de ${m.name}`} loading={i < 1 ? "eager" : "lazy"} />
              </div>
              <div className="member__body">
                <p className="member__role">{m.role}</p>
                <h2>{m.name}</h2>
                <blockquote className="member__quote">
                  <p>{m.quote}</p>
                </blockquote>
                {m.bio.map((p) => (
                  <p key={p} className="body">
                    {p}
                  </p>
                ))}
                {m.linkedin && (
                  <a
                    className="member__linkedin"
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Profil LinkedIn de ${m.name} (nouvel onglet)`}
                  >
                    <IconLinkedIn />
                  </a>
                )}
              </div>
            </article>
          </div>
        </section>
      ))}

      {/* Deux appels côte à côte : « Initier un échange » à gauche, candidatures spontanées à droite */}
      <section className="section section--navy member-band">
        <div className="shell duo-cta">
          <div className="panel duo-cta__card reveal">
            <div>
              <h2>Initier un échange</h2>
              <p>Un premier échange, sans engagement, pour comprendre votre situation, vos projets et vos objectifs.</p>
            </div>
            <LiquidButton as="link" to="/contact" variant="copper" iconRight={<IconArrow />}>
              Nous écrire
            </LiquidButton>
          </div>
          <div className="panel duo-cta__card reveal">
            <div>
              <h2>Candidatures spontanées</h2>
              <p>{TEAM_PAGE.join}</p>
            </div>
            <LiquidButton as="link" to="/recrutement" variant="copper" iconRight={<IconArrow />}>
              Envoyer votre candidature
            </LiquidButton>
          </div>
        </div>
      </section>
    </>
  );
}
