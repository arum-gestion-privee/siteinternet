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
