import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import { Kicker, Quote, Comparison, Objectives, Portrait, CtaBand } from "../components/Sections.jsx";
import { BESPOKE, DIFFERENCE, TEAM } from "../content/site.js";

export default function SurMesure() {
  const al = TEAM.find((m) => m.slug.startsWith("anne-laure"));
  const gw = TEAM.find((m) => m.slug.startsWith("genevieve"));
  return (
    <>
      <Seo
        title="Le sur-mesure"
        description="Transmettre, protéger, organiser, optimiser : un conseil patrimonial sur-mesure, pensé sur plusieurs générations."
      />
      <PageHero className="phero--accent" kicker="Vos objectifs" title="Le sur-mesure" />

      <section className="section section--navy">
        <div className="shell">
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
