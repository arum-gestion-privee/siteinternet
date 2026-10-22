import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import { NewsList, CtaBand } from "../components/Sections.jsx";

export default function Actualites() {
  return (
    <>
      <Seo title="Nos décryptages" description="Fiscalité, transmission, dirigeants, immobilier : les analyses d'ARUM Gestion Privée." />
      <PageHero className="phero--accent"
        kicker="Nos décryptages"
        title="Décryptages patrimoniaux"
        lead="Fiscalité, transmission, statut du dirigeant, immobilier : nos analyses de l’actualité juridique et financière."
      />
      <section className="section section--navy">
        <div className="shell">
          <NewsList />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
