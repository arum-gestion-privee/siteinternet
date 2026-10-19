import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import { IconArrow } from "../components/icons.jsx";
import { CtaBand } from "../components/Sections.jsx";

const fmt = (d) => new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

/** Article d'actualité repris de l'ancien site : même adresse (/articles/…), texte mot pour mot. */
export default function Article({ article: a }) {
  return (
    <>
      <Seo title={a.title} description={a.summary || a.quote.slice(0, 155) + "…"} image={a.image} />
      <PageHero kicker="Actualités" title={a.title} className="phero--article">
        {a.date && (
          <p className="article__date">
            <time dateTime={a.date}>{fmt(a.date)}</time>
          </p>
        )}
      </PageHero>
      <section className="section section--navy">
        <div className="shell article">
          {a.image && <img className="article__img reveal" src={a.image} alt="" width="529" height="362" />}
          <blockquote className="article__quote reveal">
            <p>{a.quote}</p>
          </blockquote>
          <p className="article__back">
            <Link className="pill pill--glass" to="/actualites">
              Toutes les actualités <IconArrow />
            </Link>
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
