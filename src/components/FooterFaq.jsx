import { FAQ } from "../content/faq.js";
import { IconPlus } from "./icons.jsx";
import "./FooterFaq.css";

/** Onglet FAQ dépliable, en pied de toutes les pages (même principe qu'ERNEST 1895). */
export default function FooterFaq() {
  return (
    <details id="faq" className="faq shell">
      <summary className="faq__toggle">
        <span>Questions fréquentes</span>
        <IconPlus className="faq__toggle-icon" />
      </summary>
      <div className="faq__body">
        {FAQ.map((g) => (
          <div key={g.category}>
            <h2 className="faq__category">{g.category}</h2>
            <div className="faq__list">
              {g.items.map((item) => (
                <details className="faq__item" key={item.q}>
                  <summary className="faq__q">
                    <span>{item.q}</span>
                    <IconPlus className="faq__icon" />
                  </summary>
                  <p className="faq__a">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}
