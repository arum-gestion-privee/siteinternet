import Seo from "../components/Seo.jsx";
import { MotifHero } from "../components/PageHero.jsx";
import { useArrive } from "../components/useArrive.js";
import { NewsList, CtaBand } from "../components/Sections.jsx";

export default function Actualites() {
  // la liste n'arrive, en fondu, qu'une fois le défilement commencé (comme Le sur-mesure)
  useArrive(".first-in", { afterScroll: true });
  return (
    <>
      <Seo title="Nos décryptages" description="Fiscalité, transmission, dirigeants, immobilier : les analyses d'ARUM Gestion Privée." />
      <MotifHero line1="Nos décryptages" />
      <section className="section section--navy">
        <div className="shell first-in">
          <NewsList />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
