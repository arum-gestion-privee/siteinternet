import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";

export default function LegalPage({ doc }) {
  return (
    <>
      <Seo title={doc.title} />
      <PageHero kicker="Informations" title={doc.title} />
      <section className="section">
        <div className="shell legal">
          {doc.sections.map((s) => (
            <section key={s.title}>
              <h2>{s.title}</h2>
              {s.paras.map((p) =>
                p.startsWith("•") ? (
                  <p key={p} className="legal__item">
                    {p.slice(1).trim()}
                  </p>
                ) : (
                  <p key={p}>{p}</p>
                ),
              )}
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
