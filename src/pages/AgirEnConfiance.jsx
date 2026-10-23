import Seo from "../components/Seo.jsx";
import { useArrive } from "../components/useArrive.js";
import "../components/PageHero.css"; // rubrique, phrase d'accroche, apparitions
import { Partners, CtaBand } from "../components/Sections.jsx";
import { APPROACH } from "../content/site.js";

/*
 * Ouverture en enchaînement (logo ARUM… rime avec… Agir en confiance), puis l'offre en trois temps.
 */
export default function AgirEnConfiance() {
  useArrive(".rime__head > *");
  return (
    <>
      <Seo
        title="Agir en confiance"
        description="Expertise, approche transversale, sur-mesure : l'offre en trois temps d'ARUM Gestion Privée, votre family-office."
      />
      {/* enchaînement d'ouverture : le logo ARUM seul, puis « rime avec… Agir en confiance » */}
      <section className="rime">
        <div className="rime__screen rime__screen--logo">
          <figure className="rime__logo" role="img" aria-label="ARUM Gestion Privée">
            <img className="rime__symbol" src="/brand/symbole.svg" alt="" width="194" height="245" />
            <img className="rime__name" src="/brand/nom-blanc.png" alt="" width="633" height="190" />
          </figure>
        </div>
        <div className="rime__screen rime__screen--title">
          <div className="shell rime__head">
            <p className="rime__with">rime avec</p>
            <h1>Agir en confiance</h1>
            <p className="phero__sub">{APPROACH.familyOffice}</p>
          </div>
        </div>
      </section>

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
