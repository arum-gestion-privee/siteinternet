import "./PageHero.css";

/** Bandeau navy des pages intérieures (la nav liquide flotte par-dessus). */
export default function PageHero({ kicker, title, lead, children }) {
  return (
    <section className="phero">
      <img className="phero__motif" src="/brand/motif.png" alt="" aria-hidden="true" />
      <div className="shell phero__inner">
        {kicker && <p className="kicker">{kicker}</p>}
        <h1>{title}</h1>
        {lead && <p className="phero__lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
