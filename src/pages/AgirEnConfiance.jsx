import Seo from "../components/Seo.jsx";
import { MotifHero } from "../components/PageHero.jsx";
import { useArrive } from "../components/useArrive.js";
import "../components/PageHero.css"; // rubrique, phrase d'accroche, apparitions
import { Partners, CtaBand } from "../components/Sections.jsx";
import { APPROACH } from "../content/site.js";

/*
 * Ouverture « phrase » sur le grand symbole, puis la démarche en trois temps.
 */
export default function AgirEnConfiance() {
  // la présentation de l'offre n'arrive, en fondu, qu'une fois le défilement commencé
  useArrive(".first-in", { afterScroll: true });
  return (
    <>
      <Seo
        title="Agir en confiance"
        description="Expertise, approche transversale, sur-mesure : la démarche en trois temps d’ARUM Gestion Privée, votre family-office."
      />
      <MotifHero
        title="Agir en confiance"
        line1="Construire, protéger, développer et transmettre"
        line2="votre patrimoine familial et professionnel"
      />

      <section className="section section--navy">
        <div className="shell">
          {/* construit comme « Discernement » de Hottinger Gaultier : filet, grand titre, texte,
              puis les trois temps en grandes phrases centrées qui s'éclairent au passage */}
          <div className="approach first-in" data-step="Une démarche en 3 temps">
            <h2>{APPROACH.offerTitle}</h2>
            <p>{APPROACH.lead[1]}</p>
          </div>

          <ol className="phrases">
            {APPROACH.steps.map((s) => (
              <li key={s.n} className="phrase" data-step={s.title}>
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

      <section className="section section--navy partners-sec" data-step="Ils nous font confiance">
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
