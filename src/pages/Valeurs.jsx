import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import { IconLinkedIn } from "../components/icons.jsx";
import { Kicker, Portrait, CtaBand } from "../components/Sections.jsx";
import { VALUES, TEAM, fr } from "../content/site.js";

export default function Valeurs() {
  const al = TEAM.find((m) => m.slug.startsWith("anne-laure"));
  const cut = VALUES.freedom.indexOf(". ");
  const freedomFirst = VALUES.freedom.slice(0, cut);
  const freedomRest = VALUES.freedom.slice(cut + 2);
  return (
    <>
      <Seo
        title="Des valeurs de famille"
        description="L'intérêt du client, le professionnalisme et l'honnêteté : un cabinet libre en droit, libre d'esprit."
      />
      <PageHero className="phero--accent" kicker="Des valeurs de famille" title="Des valeurs de famille" />

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
            <h2>{fr(VALUES.title)}</h2>
          </div>
          {/* le constat à gauche, l'engagement qui en découle mis en avant à droite */}
          <div className="intro intro--flip reveal">
            <div className="intro__body">
              <p>{VALUES.mindset[0]}</p>
            </div>
            <div className="intro__lead">
              {VALUES.mindset.slice(1).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell split">
          <p className="lead reveal">{VALUES.professionalism}</p>
          <Portrait {...VALUES.professionalismPhoto} cta={null} className="reveal" />
        </div>
      </section>

      <section className="section section--navy">
        {/* titre à gauche ; à droite, la première phrase en exergue puis la suite du texte */}
        <div className="shell intro reveal">
          <h2 className="intro__title">{fr(VALUES.freedomTitle)}</h2>
          <div>
            <p className="intro__lead">{freedomFirst}.</p>
            <div className="intro__body">
              <p>{freedomRest}</p>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
