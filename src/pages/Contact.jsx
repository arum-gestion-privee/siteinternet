import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import LiquidButton from "../components/LiquidButton.jsx";
import { IconArrow, IconPhone, IconMail, IconPin } from "../components/icons.jsx";
import { CONTACT } from "../content/site.js";

export default function Contact() {
  return (
    <>
      <Seo title="Nous contacter" description="Contactez ARUM Gestion Privée, 82 avenue Marceau, Paris 8e : 01 75 43 66 50." />
      <PageHero
        kicker="Nous contacter"
        title="Parlons de votre patrimoine"
        lead="Un premier échange, sans engagement, pour comprendre votre situation, vos projets et vos objectifs."
      />
      <section className="section section--navy">
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
        <div className="shell center contact__form">
          <p className="body">Vous préférez nous laisser vos coordonnées ? Notre formulaire vous permet d’être rappelé.</p>
          <LiquidButton as="a" href={CONTACT.form} target="_blank" rel="noopener noreferrer" variant="copper" size="lg" iconRight={<IconArrow />}>
            Être rappelé
          </LiquidButton>
        </div>
      </section>
    </>
  );
}
