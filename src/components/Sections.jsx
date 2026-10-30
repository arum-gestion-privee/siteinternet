import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LiquidButton from "./LiquidButton.jsx";
import { IconArrow } from "./icons.jsx";
import { DIFFERENCE, OBJECTIVES, NEWS, FIGURES, AGREMENTS, PARTNERS, REGULATORY, CONTACT, TEAM } from "../content/site.js";

export function Kicker({ children, light = false }) {
  return <p className={"kicker" + (light ? " kicker--light" : "")}>{children}</p>;
}

export function Quote({ text, name, role, photo, light = false, center = false }) {
  return (
    <figure className={"quote" + (light ? " quote--light" : "") + (center ? " quote--center" : "")}>
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

/** Portrait légendé (noms + fonctions), avec un appel facultatif vers « Initions un échange ». */
export function Portrait({ photo, names, roles, cta = null, className = "" }) {
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
                  Découvrir <IconArrow />
                </span>
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  );
}

/** Pictogrammes des objectifs : trait fin, même grille (24), même épaisseur. */
const OBJECTIVE_ICONS = {
  // transmettre : un arbre de générations (un parent, deux enfants)
  transmettre: (
    <>
      <circle cx="12" cy="5" r="2.25" />
      <circle cx="6" cy="19" r="2.25" />
      <circle cx="18" cy="19" r="2.25" />
      <path d="M12 7.25V12M6 16.75V14.5a2.5 2.5 0 0 1 2.5-2.5h7a2.5 2.5 0 0 1 2.5 2.5v2.25" />
    </>
  ),
  // protéger : un écusson
  proteger: (
    <>
      <path d="M12 3 19 5.75v5.5c0 4.4-2.95 8.1-7 9.75-4.05-1.65-7-5.35-7-9.75v-5.5Z" />
      <path d="m8.75 12 2.25 2.25 4.25-4.5" />
    </>
  ),
  // organiser : trois strates superposées
  organiser: (
    <>
      <path d="M12 3.5 21 8l-9 4.5L3 8Z" />
      <path d="m3 12 9 4.5 9-4.5" />
      <path d="m3 16 9 4.5 9-4.5" />
    </>
  ),
  // optimiser : une courbe ascendante sur deux axes
  optimiser: (
    <>
      <path d="M3.5 3.5v17h17" />
      <path d="m7 15.5 4-4.5 3 2.5 5.5-6.5" />
      <path d="M15.5 7h4v4" />
    </>
  ),
};

/**
 * Les quatre objectifs en onglets (Le sur-mesure) : la liste à gauche, l'objectif choisi détaillé à droite.
 * Chaque onglet garde l'ancre d'origine (/sur-mesure#transmettre…), qui l'ouvre directement.
 */
export function ObjectiveTabs() {
  const { hash } = useLocation();
  const [active, setActive] = useState(OBJECTIVES[0].id);
  useEffect(() => {
    const id = hash.slice(1);
    if (OBJECTIVES.some((o) => o.id === id)) setActive(id);
  }, [hash]);
  const current = OBJECTIVES.find((o) => o.id === active);
  return (
    <div className="otabs">
      <div className="otabs__list" role="tablist" aria-label="Vos objectifs">
        {OBJECTIVES.map((o, i) => (
          <button
            key={o.id}
            type="button"
            role="tab"
            aria-selected={o.id === active}
            aria-controls="otabs-panel"
            className="otabs__tab"
            onClick={() => setActive(o.id)}
          >
            <span className="otabs__n">{String(i + 1).padStart(2, "0")}</span>
            <span className="otabs__verb" id={o.id}>
              {o.verb}
            </span>
            <span className="otabs__object">{o.object}</span>
          </button>
        ))}
      </div>
      <div className="otabs__panel" id="otabs-panel" role="tabpanel" aria-labelledby={active} key={active}>
        <span className="otabs__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
            {OBJECTIVE_ICONS[current.id]}
          </svg>
        </span>
        <p>{current.text}</p>
      </div>
    </div>
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
          {p.logo ? <img src={p.logo} alt={p.name} loading="lazy" /> : <span className="partners__name">{p.name}</span>}
        </li>
      ))}
    </ul>
  );
}

const fmt = (d) =>
  d ? new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) : null;

export function NewsList({ limit, items = NEWS }) {
  return (
    <ul className="news">
      {items.slice(0, limit).map((n) => {
        const inner = (
          <>
            {n.image && <img className="news__img" src={n.image} alt="" loading="lazy" width="529" height="362" />}
            <p className="news__meta">
              {n.date ? <time dateTime={n.date}>{fmt(n.date)}</time> : <span />}
              <span>{n.readingTime} min de lecture</span>
            </p>
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

/**
 * Clôture des pages intérieures, construite comme chez Hottinger Gaultier : « Initions un échange »,
 * une phrase, les coordonnées du cabinet et un lien « Nous écrire ».
 */
export function CtaBand({ title = "Initions un échange", text }) {
  return (
    <section className="cta">
      <div className="shell">
        <div className="panel cta__inner">
          <div>
            <h2>{title}</h2>
            {text !== false && (
              <p>{text || "Un premier échange, sans engagement, pour comprendre votre situation, vos projets et vos objectifs."}</p>
            )}
          </div>
          <div className="cta__side">
            <address className="cta__address">
              <strong>Paris</strong>
              {CONTACT.address[0]}
              <br />
              {CONTACT.address[1]}
              <br />
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </address>
            <Link className="cta__link" to="/contact">
              Nous écrire <IconArrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Bandeau « Nos agréments », au-dessus du pied de page sur toutes les pages. */
export function LicencesBand() {
  return (
    <section className="section section--navy licences" aria-labelledby="licences-title">
      <div className="shell">
        <h2 id="licences-title" className="licences__title">
          Nos agréments
        </h2>
        <Agrements />
      </div>
    </section>
  );
}

/** Toute l'équipe réunie (Se connaître, Initions un échange), Anne-Laure au centre, sous un filtre bleu. */
const CROWD = ["vincent", "marie", "patrick", "anne-laure", "genevieve", "sandrine", "isabelle"].map((k) =>
  TEAM.find((m) => m.slug.startsWith(k)),
);
export function TeamCrowd({ className = "", step, eager = false, reveal = false }) {
  return (
    <div className={"crowd-band " + className} data-step={step} data-reveal={reveal || undefined} role="img" aria-label="L'équipe d'ARUM Gestion Privée">
      {/* filtre bleu (duotone bleu nuit / bleu clair, à moitié mêlé aux couleurs d'origine) */}
      <svg width="0" height="0" aria-hidden="true" focusable="false" className="crowd__defs">
        <filter id="crowd-blue" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="0.5840 0.2825 0.0285 0 0.0350  0.0840 0.7825 0.0285 0 0.0550  0.0797 0.2682 0.5271 0 0.1250  0 0 0 1 0" />
        </filter>
      </svg>
      <div className="crowd">
        {CROWD.map((m, i) => (
          <img key={m.slug} src={m.photo} alt="" loading={eager ? "eager" : "lazy"} className={`crowd__p crowd__p--${i}`} />
        ))}
      </div>
    </div>
  );
}
