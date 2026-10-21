import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import { JobForm } from "../components/Forms.jsx";
import { TEAM_PAGE } from "../content/site.js";

export default function Recrutement() {
  return (
    <>
      <Seo title="Recrutement" description="Candidature spontanée chez ARUM Gestion Privée, cabinet de conseil en gestion de patrimoine à Paris 8e." />
      <PageHero kicker="Candidatures spontanées" title={TEAM_PAGE.join} />
      <section className="section section--navy section--contact">
        <div className="shell form-shell">
          <JobForm />
        </div>
      </section>
    </>
  );
}
