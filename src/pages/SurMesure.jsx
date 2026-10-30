import Seo from "../components/Seo.jsx";
import { CenteredHero } from "../components/PageHero.jsx";
import { useArrive, useLight } from "../components/useArrive.js";
import "../components/PageHero.css"; // apparitions au défilement
import { Quote, Comparison, ObjectiveTabs, CtaBand } from "../components/Sections.jsx";
import { BESPOKE, DIFFERENCE, HOME, TEAM, fr } from "../content/site.js";

export default function SurMesure() {
  const al = TEAM.find((m) => m.slug.startsWith("anne-laure"));
  const gw = TEAM.find((m) => m.slug.startsWith("genevieve"));
  // la citation d'Anne-Laure n'arrive, en fondu, qu'une fois le défilement commencé
  useArrive(".first-in", { afterScroll: true });
  // le parcours en trois étapes : chaque étape (et son point sur le fil) s'éclaire en passant au milieu de l'écran
  useLight(".path__step");
  return (
    <>
      <Seo
        title="Le sur-mesure"
        description="Transmettre, protéger, organiser, optimiser : un conseil patrimonial sur-mesure, pensé sur plusieurs générations."
      />
      {/* ouverture centrée : le titre et son texte, puis le symbole ARUM en petit */}
      <CenteredHero title="Le sur-mesure" text={`${HOME.unique} ${HOME.uniqueEnd}`} />

      <section className="section section--navy">
        <div className="shell first-in" data-step="Citation d'Anne-Laure Boccon-Gibod">
          <Quote text={BESPOKE.quote} name={al.name} role={al.role} photo={al.photo} light center />
        </div>
      </section>

      {/* parcours en trois étapes (le fil de lecture à gauche de l'écran en marque chaque partie) */}
      <section className="section section--navy">
        <div className="shell">
        <ol className="path">
          <li className="path__step" data-step="Une relation de proximité">
            <h2>Notre objectif : construire avec vous une relation de proximité</h2>
            <p className="path__text">{DIFFERENCE.text}</p>
          </li>
          <li className="path__step" data-step="Ce qui nous différencie">
            <h2>{fr(DIFFERENCE.title)}</h2>
            <Comparison />
          </li>
          <li className="path__step" data-step="Une stratégie ajustée à vos objectifs">
            <h2>Une stratégie ajustée à vos objectifs</h2>
            <p className="path__text path__text--lead">{HOME.strategy}</p>
            <p className="path__text">
              {BESPOKE.generations} {BESPOKE.generationsText}
            </p>
            <ObjectiveTabs />
          </li>
        </ol>
        </div>
      </section>

      {/* pour finir, la citation de Geneviève Werner */}
      <section className="section section--navy">
        <div className="shell" data-step="Citation de Geneviève Werner">
          <Quote text={gw.quote} name={gw.name} role={gw.role} photo="/img/equipe/genevieve-sur-mesure.webp" light center />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
