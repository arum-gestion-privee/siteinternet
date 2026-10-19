import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import { IconLinkedIn } from "../components/icons.jsx";
import { Kicker, Portrait, CtaBand } from "../components/Sections.jsx";
import { VALUES, TEAM } from "../content/site.js";

export default function Valeurs() {
  const al = TEAM.find((m) => m.slug.startsWith("anne-laure"));
  return (
    <>
      <Seo
        title="Des valeurs de famille"
        description="L'intérêt du client, le professionnalisme et l'honnêteté : un cabinet libre en droit, libre d'esprit."
      />
      <PageHero kicker="Des valeurs de famille" title="Des valeurs de famille" />

      <section className="section section--navy">
        <div className="shell split">
          <figure className="lead-quote reveal">
            <blockquote>
              <p>{VALUES.lead}</p>
            </blockquote>
            <figcaption>
              <strong>{al.name}</strong> · {al.role}
              <a className="member__linkedin" href={al.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Profil LinkedIn de ${al.name} (nouvel onglet)`}>
                <IconLinkedIn />
              </a>
            </figcaption>
          </figure>
          <Portrait photo={VALUES.leadPhoto} names={al.name} roles={al.role} cta={null} className="reveal" />
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell">
          <div className="section__head reveal">
            <Kicker>{VALUES.kicker}</Kicker>
            <h2>{VALUES.title}</h2>
          </div>
          <div className="prose-cols reveal">
            {VALUES.mindset.map((p) => (
              <p key={p} className="body">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell split">
          <p className="lead reveal">{VALUES.professionalism}</p>
          <Portrait {...VALUES.professionalismPhoto} className="reveal" />
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell">
          <div className="section__head reveal">
            <h2>{VALUES.freedomTitle}</h2>
            <p className="body">{VALUES.freedom}</p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
