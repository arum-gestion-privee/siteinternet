import Seo from "../components/Seo.jsx";
import { MotifHero } from "../components/PageHero.jsx";
import { useArrive, useLight } from "../components/useArrive.js";
import { IconLinkedIn } from "../components/icons.jsx";
import { Portrait, CtaBand } from "../components/Sections.jsx";
import { VALUES, TEAM, HOME_PEOPLE, fr } from "../content/site.js";

export default function Valeurs() {
  const al = TEAM.find((m) => m.slug.startsWith("anne-laure"));
  const cut = VALUES.freedom.indexOf(". ");
  const freedomFirst = VALUES.freedom.slice(0, cut);
  const freedomRest = VALUES.freedom.slice(cut + 2);
  // le premier bloc n'arrive, en fondu, qu'une fois le défilement commencé (comme Le sur-mesure)
  useArrive(".first-in", { afterScroll: true });
  // les trois chapitres s'éclairent l'un après l'autre en passant au milieu de l'écran
  useLight(".chapter");
  return (
    <>
      <Seo
        title="Des valeurs de famille"
        description="L'intérêt du client, le professionnalisme et l'honnêteté : un cabinet libre en droit, libre d'esprit."
      />
      <MotifHero title="Des valeurs de famille" line1="Nous sommes une grande famille," line2={fr("heureux de vous accueillir parmi nous !")} />

      <section className="section section--navy">
        <div className="shell split first-in" data-step="Citation d'Anne-Laure Boccon-Gibod">
          <figure className="lead-quote lead-quote--mark">
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

      {/* trois chapitres numérotés : le numéro à gauche, le titre et l'essentiel en blanc, le développement en gris */}
      <section className="section section--navy">
        <ol className="shell chapters">
          <li className="chapter" data-step="Un état d'esprit différent">
            <span className="chapter__n">01</span>
            <div className="chapter__head">
              <h2>{fr(VALUES.title)}</h2>
              {VALUES.mindset.slice(1).map((p) => (
                <p key={p} className="chapter__lead">
                  {p}
                </p>
              ))}
            </div>
            <p className="chapter__body">{VALUES.mindset[0]}</p>
          </li>
          <li className="chapter" data-step="Diversité des expériences">
            <span className="chapter__n">02</span>
            <div className="chapter__head">
              <h2>Diversité des expériences</h2>
              <p className="chapter__lead">{VALUES.professionalism}</p>
            </div>
            <Portrait {...VALUES.professionalismPhoto} cta={null} className="chapter__portrait" />
          </li>
          <li className="chapter" data-step="Libre en droit, libre d'esprit">
            <span className="chapter__n">03</span>
            <div className="chapter__head">
              <h2>{fr(VALUES.freedomTitle)}</h2>
              <p className="chapter__lead">{freedomFirst}.</p>
            </div>
            <p className="chapter__body">{freedomRest}</p>
          </li>
        </ol>
      </section>

      {/* le film « Je suis ARUM Gestion Privée » */}
      <section className="section section--navy">
        <div className="shell" data-step="Le film">
          <video className="film" controls playsInline preload="metadata" poster="/video/arum-film-poster.webp">
            <source src="/video/arum-film.mp4" type="video/mp4" />
            <source src="/video/arum-film.webm" type="video/webm" />
          </video>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
