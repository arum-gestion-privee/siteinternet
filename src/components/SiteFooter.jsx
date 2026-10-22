import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import FooterFaq from "./FooterFaq.jsx";
import { NewsSignup } from "./Forms.jsx";
import { IconLinkedIn } from "./icons.jsx";
import { NAV, CONTACT, OBJECTIVES } from "../content/site.js";
import "./SiteFooter.css";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      <div className="shell foot__grid">
        <div className="foot__brand">
          <Logo />
          <p className="foot__tagline">Faire vivre votre patrimoine.</p>
          <p>Conseil en gestion de patrimoine, au service des entrepreneurs et des familles depuis 2014.</p>
        </div>
        <nav aria-label="Services">
          <h2 className="foot__title">Services</h2>
          <ul>
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{n.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/recrutement">Recrutement</Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Vos objectifs">
          <h2 className="foot__title">Vos objectifs</h2>
          <ul>
            {OBJECTIVES.map((o) => (
              <li key={o.id}>
                <Link to={`/sur-mesure#${o.id}`}>{o.verb}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="foot__title">Initier un échange</h2>
          <address>
            {CONTACT.address[0]}
            <br />
            {CONTACT.address[1]}
            <br />
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            <br />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </address>
          <a className="foot__social" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
            <IconLinkedIn />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* « Recevez notre actualité » : une ligne horizontale sous toutes les colonnes */}
      <div className="shell">
        <NewsSignup />
      </div>

      <FooterFaq />


      <p className="shell foot__disclaimer">
        Informations à caractère général, ne constituant ni un conseil en investissement ni une recommandation
        personnalisée. Tout investissement comporte un risque de perte en capital ; les performances passées ne préjugent
        pas des performances futures.
      </p>

      <div className="shell foot__legal">
        <p>© {year} ARUM Gestion Privée</p>
        <ul>
          <li>
            <Link to="/mentions-legales">Mentions légales</Link>
          </li>
          <li>
            <Link to="/confidentialite">Confidentialité et cookies</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
