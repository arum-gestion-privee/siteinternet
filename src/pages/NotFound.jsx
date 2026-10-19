import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import LiquidButton from "../components/LiquidButton.jsx";

export default function NotFound() {
  return (
    <>
      <Seo title="Page introuvable" noindex />
      <PageHero kicker="Erreur 404" title="Cette page n’existe pas ou a été déplacée.">
        <p className="phero__actions">
          <LiquidButton as="link" to="/" variant="copper">
            Retour à l’accueil
          </LiquidButton>
        </p>
      </PageHero>
    </>
  );
}
