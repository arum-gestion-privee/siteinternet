import { Link } from "react-router-dom";
import Seo, { SITE_ORIGIN } from "../components/Seo.jsx";
import { IconArrow } from "../components/icons.jsx";
import { CtaBand, NewsList } from "../components/Sections.jsx";
import { NEWS } from "../content/site.js";

const fmt = (d) => new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

/**
 * Article d'actualité repris de l'ancien site (même adresse /articles/…, texte mot pour mot).
 * Structure reprise des articles d'ERNEST 1895 : rubrique, titre, chapô, ligne auteur · date · temps de lecture,
 * filet, photo encadrée, puis deux colonnes « Dans cet article » / texte.
 */
export default function Article({ article: a }) {
  const others = NEWS.filter((n) => n.slug !== a.slug && n.local).slice(0, 3);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    ...(a.date ? { datePublished: a.date } : {}),
    ...(a.image ? { image: SITE_ORIGIN + a.image } : {}),
    timeRequired: `PT${a.readingTime}M`,
    inLanguage: "fr-FR",
    author: { "@type": "Organization", name: "ARUM Gestion Privée" },
  };
  return (
    <>
      <Seo title={a.title} description={a.summary || a.quote.slice(0, 155) + "…"} image={a.image} jsonLd={ld} />

      <header className="arthead">
        <img className="phero__motif" src="/brand/motif.png" alt="" aria-hidden="true" />
        <div className="shell arthead__inner">
          <p className="arthead__kicker">
            <Link to="/actualites">Actualités</Link>
            <span aria-hidden="true"> · </span>
            Décryptages patrimoniaux
          </p>
          <h1>{a.title}</h1>
          {a.summary && <p className="arthead__lead">{a.summary}</p>}
          <p className="arthead__meta">
            <strong>ARUM Gestion Privée</strong>
            {a.date && (
              <>
                <span aria-hidden="true">·</span>
                <time dateTime={a.date}>{fmt(a.date)}</time>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span>{a.readingTime} min de lecture</span>
          </p>
        </div>
      </header>

      <section className="section section--navy artbody">
        <div className="shell">
          {a.image && (
            <figure className="artbody__figure reveal">
              <img src={a.image} alt="" width="529" height="362" />
            </figure>
          )}
          <div className="artbody__grid">
            <aside className="artbody__toc" aria-label="Dans cet article">
              <p className="artbody__toc-title">Dans cet article</p>
              <ol>
                <li>
                  <a href="#texte">{a.title}</a>
                </li>
              </ol>
            </aside>
            <article id="texte" className="artbody__text">
              <blockquote className="article__quote reveal">
                <p>{a.quote}</p>
              </blockquote>
              <p className="article__back">
                <Link className="pill pill--glass" to="/actualites">
                  Toutes les actualités <IconArrow />
                </Link>
              </p>
            </article>
          </div>
        </div>

        {others.length > 0 && (
          <div className="shell article__more">
            <h2>Autres actualités</h2>
            <NewsList items={others} />
          </div>
        )}
      </section>
      <CtaBand />
    </>
  );
}
