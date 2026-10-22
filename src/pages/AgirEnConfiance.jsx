import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import { Partners, CtaBand } from "../components/Sections.jsx";
import { APPROACH } from "../content/site.js";

/*
 * Construite comme « Notre approche » de Hottinger Gaultier : ouverture aérée, titre | texte, puis l'offre en trois temps.
 */
export default function AgirEnConfiance() {
  return (
    <>
      <Seo
        title="Agir en confiance"
        description="Expertise, approche transversale, sur-mesure : l'offre en trois temps d'ARUM Gestion Privée, votre family-office."
      />
      <PageHero
        className="phero--accent phero--logo"
        kicker="Notre approche"
        title="Agir en confiance"
        motif={false}
        logo
      >
        <p className="phero__sub">{APPROACH.familyOffice}</p>
      </PageHero>

      <section className="section section--navy">
        <div className="shell">
          {/* construit comme « Discernement » de Hottinger Gaultier : filet, grand titre, texte,
              puis les trois temps en grandes phrases centrées qui s'éclairent au passage */}
          <div className="approach reveal">
            <h2>{APPROACH.offerTitle}</h2>
            <p>{APPROACH.lead[1]}</p>
          </div>

          <ol className="phrases">
            {APPROACH.steps.map((s) => (
              <li key={s.n} className="phrase">
                <span className="phrase__n">{s.n}</span>
                <h3 className="phrase__title">{s.title}</h3>
                <div className="phrase__text">
                  {s.text.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
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
