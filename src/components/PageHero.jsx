import "./PageHero.css";

/**
 * Ouverture des pages intérieures (construction Hottinger Gaultier) : à gauche la rubrique en italique et le
 * grand titre, à droite le logo et l'introduction. La nav liquide flotte par-dessus.
 */
export default function PageHero({ kicker, title, lead, body, quote = false, motif = true, logo = false, below, step, className = "", children }) {
  return (
    <section className={"phero " + className} data-step={step ?? kicker ?? title}>
      <div className="shell phero__inner">
        <div className="phero__main">
          {kicker && <p className="phero__kicker">{kicker}</p>}
          <h1>{title}</h1>
          {children}
        </div>
        <div className="phero__aside">
          {motif && <img className="phero__motif" src="/brand/motif.png" alt="" aria-hidden="true" />}
          {logo && <img className="phero__logo" src="/brand/symbole.svg" alt="" aria-hidden="true" width="194" height="245" />}
          {quote ? (
            <blockquote className="phero__quote">
              {lead && <p className="phero__lead">{lead}</p>}
              {body && <p className="phero__body">{body}</p>}
            </blockquote>
          ) : (
            <>
              {lead && <p className="phero__lead">{lead}</p>}
              {body && <p className="phero__body">{body}</p>}
            </>
          )}
        </div>
        {below && <div className="phero__below">{below}</div>}
      </div>
    </section>
  );
}

/** Ouverture centrée (Le sur-mesure, Des valeurs de famille, Nos décryptages) : titre, texte, puis le symbole ARUM en petit. */
export function CenteredHero({ title, text }) {
  return (
    <section className="sm-open" data-step={title}>
      <div className="shell sm-open__inner">
        <h1>{title}</h1>
        {text && <p className="sm-open__text">{text}</p>}
        <img className="sm-open__logo" src="/brand/symbole.svg" alt="" aria-hidden="true" width="194" height="245" />
      </div>
    </section>
  );
}

/**
 * Ouverture « phrase » (Agir en confiance, Le sur-mesure, Des valeurs de famille, Nos décryptages) : le grand
 * symbole ARUM au trait fin derrière, une première ligne en orange clair, une seconde en blanc italique.
 * Sans `title`, la première ligne sert de titre de la page ; sinon le titre reste lisible par les moteurs.
 */
export function MotifHero({ title, line1, line2, step }) {
  const First = title ? "p" : "h1";
  return (
    <section className="mhero" data-step={step ?? title ?? line1}>
      <img className="mhero__motif" src="/brand/motif.png" alt="" aria-hidden="true" width="295" height="411" />
      <div className="shell mhero__inner">
        {title && <h1 className="sr-only">{title}</h1>}
        <First className="mhero__l1">{line1}</First>
        {line2 && <p className={"mhero__l2" + (line2.length > 90 ? " mhero__l2--long" : "")}>{line2}</p>}
      </div>
    </section>
  );
}
