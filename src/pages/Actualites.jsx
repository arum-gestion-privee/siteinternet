import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import LiquidButton from "../components/LiquidButton.jsx";
import { IconArrow } from "../components/icons.jsx";
import { NewsList, CtaBand } from "../components/Sections.jsx";
import { NEWS_ARCHIVE } from "../content/site.js";

export default function Actualites() {
  return (
    <>
      <Seo title="Actualités" description="Fiscalité, transmission, dirigeants, immobilier : les analyses d'ARUM Gestion Privée." />
      <PageHero
        kicker="Actualités"
        title="Décryptages patrimoniaux"
        lead="Fiscalité, transmission, statut du dirigeant, immobilier : nos analyses de l’actualité juridique et financière."
      />
      <section className="section section--navy">
        <div className="shell">
          <NewsList />
          <p className="center">
            <LiquidButton as="a" href={NEWS_ARCHIVE} target="_blank" rel="noopener noreferrer" variant="ghost" iconRight={<IconArrow />}>
              Toutes les archives
            </LiquidButton>
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
