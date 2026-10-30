import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import { ContactForm } from "../components/Forms.jsx";
import { TeamCrowd } from "../components/Sections.jsx";
import { IconPhone, IconMail, IconPin } from "../components/icons.jsx";
import { CONTACT } from "../content/site.js";

export default function Contact() {
  return (
    <>
      <Seo title="Initions un échange" description="Contactez ARUM Gestion Privée, 82 avenue Marceau, Paris 8e : 01 75 43 66 50." />
      <PageHero
        kicker="Initions un échange"
        title="Parlons de votre patrimoine"
        lead="Un premier échange, sans engagement, pour comprendre votre situation, vos projets et vos objectifs."
      />
      {/* l'équipe, sous le titre */}
      <TeamCrowd className="crowd-band--contact" eager />
      <section className="section section--navy section--contact" data-step="Nous écrire">
        <div className="shell contact">
          <a className="contact__card reveal" href={CONTACT.phoneHref}>
            <IconPhone />
            <span className="contact__label">Téléphone</span>
            <strong>{CONTACT.phone}</strong>
          </a>
          <a className="contact__card reveal" href={`mailto:${CONTACT.email}`}>
            <IconMail />
            <span className="contact__label">Courriel</span>
            <strong>{CONTACT.email}</strong>
          </a>
          <div className="contact__card reveal">
            <IconPin />
            <span className="contact__label">Adresse</span>
            <strong>
              {CONTACT.address[0]}
              <br />
              {CONTACT.address[1]}
            </strong>
          </div>
        </div>
        <div className="shell form-shell contact__form">
          <h2 className="contact__title">Nous écrire</h2>
          <p className="body">Vous préférez nous laisser vos coordonnées ? Notre formulaire vous permet d’être rappelé.</p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
