import Seo from "../components/Seo.jsx";
import { CenteredHero } from "../components/PageHero.jsx";
import { useArrive } from "../components/useArrive.js";
import { IconLinkedIn } from "../components/icons.jsx";
import { Portrait, CtaBand } from "../components/Sections.jsx";
import { VALUES, TEAM, HOME_PEOPLE, DIFFERENCE, fr } from "../content/site.js";

export default function Valeurs() {
  const al = TEAM.find((m) => m.slug.startsWith("anne-laure"));
  const cut = VALUES.freedom.indexOf(". ");
  const freedomFirst = VALUES.freedom.slice(0, cut);
  const freedomRest = VALUES.freedom.slice(cut + 2);
  // le premier bloc n'arrive, en fondu, qu'une fois le défilement commencé (comme Le sur-mesure)
  useArrive(".first-in", { afterScroll: true });
  return (
    <>
      <Seo
        title="Des valeurs de famille"
        description="L'intérêt du client, le professionnalisme et l'honnêteté : un cabinet libre en droit, libre d'esprit."
      />
      <CenteredHero title="Des valeurs de famille" text={fr(DIFFERENCE.tagline)} />

      <section className="section section--navy">
        <div className="shell split first-in">
          <figure className="lead-quote">
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
          <img className="valeurs__duo" src={HOME_PEOPLE.partners.photo} alt={`${HOME_PEOPLE.partners.names}, ${HOME_PEOPLE.partners.roles}`} width="600" height="899" />
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

      {/* sans boîte : à gauche le titre et l'engagement (blanc), à droite le constat (gris), même police */}
      <section className="section section--navy">
        <div className="shell duo reveal">
          <div>
            <h2>{fr(VALUES.title)}</h2>
            {VALUES.mindset.slice(1).map((p) => (
              <p key={p} className="duo__lead">
                {p}
              </p>
            ))}
          </div>
          <p className="duo__body">{VALUES.mindset[0]}</p>
        </div>
      </section>

      {/* le professionnalisme, mis en avant en grand à côté du portrait */}
      <section className="section section--navy">
        <div className="shell split">
          <p className="valeurs__pro">{VALUES.professionalism}</p>
          <Portrait {...VALUES.professionalismPhoto} cta={null} />
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell duo reveal">
          <div>
            <h2>{fr(VALUES.freedomTitle)}</h2>
            <p className="duo__lead">{freedomFirst}.</p>
          </div>
          <p className="duo__body">{freedomRest}</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
