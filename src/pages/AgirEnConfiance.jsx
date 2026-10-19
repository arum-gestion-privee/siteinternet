import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import { Agrements, Partners, Portrait, CtaBand } from "../components/Sections.jsx";
import { APPROACH } from "../content/site.js";

export default function AgirEnConfiance() {
  return (
    <>
      <Seo
        title="Agir en confiance"
        description="Expertise, approche transversale, sur-mesure : l'offre en trois temps d'ARUM Gestion Privée, votre family-office."
      />
      <PageHero kicker="Agir en confiance" title="Agir en confiance" lead={APPROACH.lead[0]} />

      <section className="section section--navy">
        <div className="shell split split--text">
          <p className="body reveal">{APPROACH.lead[1]}</p>
          <p className="lead reveal">{APPROACH.familyOffice}</p>
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell split">
          <div className="reveal">
            <h2>{APPROACH.offerTitle}</h2>
          </div>
          <Portrait photo={APPROACH.offerPhoto.photo} names={APPROACH.offerPhoto.names} cta={null} className="reveal" />
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell">
          <ol className="steps">
            {APPROACH.steps.map((s) => (
              <li key={s.n} className="step reveal">
                <span className="step__n">{s.n}</span>
                <h3>{s.title}</h3>
                {s.text.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell">
          <div className="section__head reveal">
            <h2>Nos agréments</h2>
          </div>
          <Agrements />
          <div className="section__head section__head--gap reveal">
            <h2>Ils nous font confiance</h2>
          </div>
          <Partners />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
