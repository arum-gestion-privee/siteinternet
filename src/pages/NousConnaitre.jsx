import Seo, { SITE_ORIGIN, ORG_ID } from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import LiquidButton from "../components/LiquidButton.jsx";
import { IconArrow, IconLinkedIn } from "../components/icons.jsx";
import { CtaBand } from "../components/Sections.jsx";
import { TEAM, TEAM_PAGE, CONTACT } from "../content/site.js";

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

export default function NousConnaitre() {
  return (
    <>
      <Seo
        title="Nous connaître"
        description="Une équipe de 7 personnes dédiée à l'organisation de votre patrimoine : découvrez les femmes et les hommes d'ARUM Gestion Privée."
        jsonLd={TEAM_LD}
      />
      <PageHero kicker="Nous connaître" title={TEAM_PAGE.title} lead={TEAM_PAGE.lead} />

      <section className="section section--navy">
        <div className="shell prose-cols reveal">
          {TEAM_PAGE.text.map((p) => (
            <p key={p} className="body">
              {p}
            </p>
          ))}
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

      <section className="section section--navy member-band">
        <div className="shell join reveal">
          <h2>{TEAM_PAGE.join}</h2>
          <LiquidButton as="a" href={CONTACT.jobs} target="_blank" rel="noopener noreferrer" variant="copper" iconRight={<IconArrow />}>
            Rejoignez-nous !
          </LiquidButton>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
