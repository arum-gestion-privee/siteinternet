import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import { Partners, CtaBand } from "../components/Sections.jsx";
import { APPROACH } from "../content/site.js";

/*
 * Construite comme « Notre approche » de Hottinger Gaultier : ouverture aérée, titre | texte, puis l'offre en trois temps en cartes numérotées qui se déplient.
 */
export default function AgirEnConfiance() {
  return (
    <>
      <Seo
        title="Agir en confiance"
        description="Expertise, approche transversale, sur-mesure : l'offre en trois temps d'ARUM Gestion Privée, votre family-office."
      />
      <PageHero
        className="phero--accent phero--open phero--top"
        kicker="Notre approche"
        title="Agir en confiance"
        lead={APPROACH.familyOffice}
        body={APPROACH.lead[0]}
        motif={false}
      />

      <section className="section section--navy">
        <div className="shell">
          <div className="approach reveal">
            <h2>{APPROACH.offerTitle}</h2>
            <p>{APPROACH.lead[1]}</p>
          </div>

          {/* l'offre en trois temps : cartes numérotées, le texte se déplie au clic */}
          <div className="tempo">
            {APPROACH.steps.map((s) => (
              <details key={s.n} className="tempo__card reveal">
                <summary>
                  <span className="tempo__n">{s.n}</span>
                  <span className="tempo__title">
                    <h3>{s.title}</h3>
                    <span className="tempo__icon" aria-hidden="true" />
                  </span>
                </summary>
                <div className="tempo__body">
                  {s.text.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy partners-sec">
        <div className="shell">
          <div className="section__head reveal">
            <h2>Ils nous font confiance</h2>
          </div>
          <Partners />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
