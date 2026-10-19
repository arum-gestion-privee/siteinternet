import { Link } from "react-router-dom";
import LiquidButton from "./LiquidButton.jsx";
import { IconArrow } from "./icons.jsx";
import { DIFFERENCE, OBJECTIVES, NEWS, FIGURES, AGREMENTS, PARTNERS, REGULATORY } from "../content/site.js";

export function Kicker({ children, light = false }) {
  return <p className={"kicker" + (light ? " kicker--light" : "")}>{children}</p>;
}

export function Quote({ text, name, role, photo, light = false }) {
  return (
    <figure className={"quote" + (light ? " quote--light" : "")}>
      {photo && <img className="quote__photo" src={photo} alt={name} loading="lazy" />}
      <div>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>
          <strong>{name}</strong>
          {role && <span>{role}</span>}
        </figcaption>
      </div>
    </figure>
  );
}

/** Portrait légendé (noms + fonctions) avec appel « Nous contacter », comme sur le site actuel. */
export function Portrait({ photo, names, roles, cta = "Nous contacter", className = "" }) {
  return (
    <figure className={"portrait " + className}>
      <div className="portrait__frame">
        <img src={photo} alt={names} loading="lazy" />
      </div>
      <figcaption>
        <strong>{names}</strong>
        {roles && <span>{roles}</span>}
        {cta && (
          <Link className="portrait__cta" to="/contact">
            {cta} <IconArrow />
          </Link>
        )}
      </figcaption>
    </figure>
  );
}

export function Comparison() {
  return (
    <div className="compare reveal">
      <div className="compare__col compare__col--arum">
        <h3>ARUM Gestion Privée</h3>
        <ul>
          {DIFFERENCE.arum.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
      <div className="compare__col compare__col--others">
        <h3>Autres conseillers</h3>
        <ul>
          {DIFFERENCE.others.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Pictogramme d'origine (PNG cuivre) recoloré en terre battue par masque CSS. */
function Icon({ src, className = "" }) {
  return (
    <span className={"picto " + className} data-src={src} aria-hidden="true" />
  );
}

/** Les quatre objectifs : cartes en dégradé orange, pictogrammes d'origine. */
export function Objectives({ withAnchors = false }) {
  return (
    <ol className="objectives">
      {OBJECTIVES.map((o) => {
        const content = (
          <>
            <Icon src={o.icon} className={`picto--${o.id}`} />
            <h3>
              {o.verb}
              <span>{o.object}</span>
            </h3>
            <p>{o.text}</p>
          </>
        );
        return (
          <li key={o.id} id={withAnchors ? o.id : undefined} className="objective reveal">
            {withAnchors ? (
              <div className="objective__card">{content}</div>
            ) : (
              <Link className="objective__card" to={`/sur-mesure#${o.id}`}>
                {content}
                <span className="objective__more">
                  En savoir plus <IconArrow />
                </span>
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  );
}

/** Chiffres clés d'origine, avec leurs pictogrammes. */
export function Figures() {
  return (
    <ul className="figs">
      {FIGURES.map((f, i) => (
        <li key={f.label} className="figs__item reveal">
          <Icon src={f.icon} className={`picto--fig${i}`} />
          <p className="figs__value">
            {f.value}
            {f.unit && <small> {f.unit}</small>}
          </p>
          <p className="figs__label">{f.label}</p>
        </li>
      ))}
    </ul>
  );
}

export function Agrements() {
  return (
    <div className="agr">
      <ul className="agr__logos">
        {AGREMENTS.map((a) => (
          <li key={a.name}>
            <img src={a.logo} alt={a.name} loading="lazy" />
          </li>
        ))}
      </ul>
      <ul className="agr__list">
        {REGULATORY.map((r) => (
          <li key={r.label}>
            <strong>{r.label}</strong> {r.detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Partners() {
  return (
    <ul className="partners">
      {PARTNERS.map((p) => (
        <li key={p.name}>
          <img src={p.logo} alt={p.name} loading="lazy" />
        </li>
      ))}
    </ul>
  );
}

const fmt = (d) =>
  d ? new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) : null;

export function NewsList({ limit }) {
  return (
    <ul className="news">
      {NEWS.slice(0, limit).map((n) => {
        const inner = (
          <>
            {n.image && <img className="news__img" src={n.image} alt="" loading="lazy" width="529" height="362" />}
            {n.date && (
              <p className="news__meta">
                <time dateTime={n.date}>{fmt(n.date)}</time>
              </p>
            )}
            <h3>{n.title}</h3>
            {n.summary && <p className="news__sum">{n.summary}</p>}
            <span className="news__more">
              Lire l’article <IconArrow />
            </span>
          </>
        );
        return (
          <li key={n.href} className="news__item reveal">
            {n.local ? (
              <Link to={n.href}>{inner}</Link>
            ) : (
              <a href={n.href} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function CtaBand({ title = "Nous contacter", text }) {
  return (
    <section className="cta">
      <div className="shell cta__inner">
        <div>
          <h2>{title}</h2>
          {text !== false && <p>{text || "82 avenue Marceau, 75008 Paris · (+33) 1 75 43 66 50"}</p>}
        </div>
        <div className="cta__actions">
          <LiquidButton as="link" to="/contact" variant="copper" size="lg" iconRight={<IconArrow />}>
            Nous contacter
          </LiquidButton>
        </div>
      </div>
    </section>
  );
}
