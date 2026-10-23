import "./PageHero.css";

/**
 * Ouverture des pages intérieures (construction Hottinger Gaultier) : à gauche la rubrique en italique et le
 * grand titre, à droite le logo et l'introduction. La nav liquide flotte par-dessus.
 */
export default function PageHero({ kicker, title, lead, body, motif = true, logo = false, below, className = "", children }) {
  return (
    <section className={"phero " + className}>
      <div className="shell phero__inner">
        <div className="phero__main">
          {kicker && <p className="phero__kicker">{kicker}</p>}
          <h1>{title}</h1>
          {children}
        </div>
        <div className="phero__aside">
          {motif && <img className="phero__motif" src="/brand/motif.png" alt="" aria-hidden="true" />}
          {logo && <img className="phero__logo" src="/brand/symbole.svg" alt="" aria-hidden="true" width="194" height="245" />}
          {lead && <p className="phero__lead">{lead}</p>}
          {body && <p className="phero__body">{body}</p>}
        </div>
        {below && <div className="phero__below">{below}</div>}
      </div>
    </section>
  );
}

/** Ouverture centrée (Le sur-mesure, Des valeurs de famille, Nos décryptages) : titre, texte, puis le symbole ARUM en petit. */
export function CenteredHero({ title, text }) {
  return (
    <section className="sm-open">
      <div className="shell sm-open__inner">
        <h1>{title}</h1>
        {text && <p className="sm-open__text">{text}</p>}
        <img className="sm-open__logo" src="/brand/symbole.svg" alt="" aria-hidden="true" width="194" height="245" />
      </div>
    </section>
  );
}
