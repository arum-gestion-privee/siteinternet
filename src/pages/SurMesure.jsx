import Seo from "../components/Seo.jsx";
import { useArrive } from "../components/useArrive.js";
import "../components/PageHero.css"; // apparitions au défilement
import { Kicker, Quote, Comparison, Objectives, Portrait, CtaBand } from "../components/Sections.jsx";
import { BESPOKE, DIFFERENCE, HOME, TEAM } from "../content/site.js";

export default function SurMesure() {
  const al = TEAM.find((m) => m.slug.startsWith("anne-laure"));
  const gw = TEAM.find((m) => m.slug.startsWith("genevieve"));
  // la citation d'Anne-Laure n'arrive, en fondu, qu'une fois le défilement commencé
  useArrive(".sm-quote", { afterScroll: true });
  return (
    <>
      <Seo
        title="Le sur-mesure"
        description="Transmettre, protéger, organiser, optimiser : un conseil patrimonial sur-mesure, pensé sur plusieurs générations."
      />
      {/* ouverture centrée : le titre et son texte, puis le symbole ARUM en petit */}
      <section className="sm-open">
        <div className="shell sm-open__inner">
          <h1>Le sur-mesure</h1>
          <p className="sm-open__text">
            {HOME.unique} {HOME.uniqueEnd}
          </p>
          <img className="sm-open__logo" src="/brand/symbole.svg" alt="" aria-hidden="true" width="194" height="245" />
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell sm-quote">
          <Quote text={BESPOKE.quote} name={al.name} role={al.role} photo={al.photo} light />
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell">
          {/* titre à gauche, texte à droite (construction Hottinger Gaultier) */}
          <div className="edito reveal">
            <h2>{BESPOKE.proximity}</h2>
            <p className="body">{DIFFERENCE.text}</p>
          </div>
          <Comparison />
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell split">
          <div className="reveal">
            <h2>{BESPOKE.generations}</h2>
            <p className="body">{BESPOKE.generationsText}</p>
          </div>
          <Portrait photo="/img/equipe/genevieve-sur-mesure.webp" names={gw.name} roles={gw.role} cta={null} className="reveal" />
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell">
          <div className="section__head reveal">
            <Kicker>Vos objectifs</Kicker>
          </div>
          <Objectives withAnchors />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
