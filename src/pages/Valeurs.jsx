import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import { IconLinkedIn } from "../components/icons.jsx";
import { Portrait, CtaBand } from "../components/Sections.jsx";
import { VALUES, TEAM, HOME_PEOPLE, fr } from "../content/site.js";

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
      <PageHero className="phero--accent" kicker={VALUES.kicker} title="Des valeurs de famille" />

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
          {/* la photo du haut de l'accueil, en grand */}
          <img className="valeurs__duo reveal" src={HOME_PEOPLE.partners.photo} alt={`${HOME_PEOPLE.partners.names}, ${HOME_PEOPLE.partners.roles}`} width="600" height="899" />
        </div>
      </section>

      {/* le film « Je suis ARUM Gestion Privée » */}
      <section className="section section--navy">
        <div className="shell">
          <video className="film reveal" controls playsInline preload="metadata" poster="/video/arum-film-poster.webp">
            <source src="/video/arum-film.mp4" type="video/mp4" />
            <source src="/video/arum-film.webm" type="video/webm" />
          </video>
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell">
          <div className="section__head reveal">
            <h2>{fr(VALUES.title)}</h2>
          </div>
          {/* l'engagement mis en avant, puis le constat qui le fonde */}
          <div className="panel reveal">
            <div className="panel__lead">
              {VALUES.mindset.slice(1).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <span className="panel__bar" aria-hidden="true" />
            <div className="panel__body">
              <p>{VALUES.mindset[0]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell split">
          <div className="intro__body reveal">
            <p>{VALUES.professionalism}</p>
          </div>
          <Portrait {...VALUES.professionalismPhoto} cta={null} className="reveal" />
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell">
          <div className="section__head reveal">
            <h2>{fr(VALUES.freedomTitle)}</h2>
          </div>
          <div className="panel reveal">
            <p className="panel__lead">{freedomFirst}.</p>
            <span className="panel__bar" aria-hidden="true" />
            <div className="panel__body">
              <p>{freedomRest}</p>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
