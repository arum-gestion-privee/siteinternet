import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { IconArrow, IconPhone } from "../components/icons.jsx";
import {
  Kicker,
  Portrait,
  Comparison,
  Objectives,
  Figures,
} from "../components/Sections.jsx";
import { HOME, DIFFERENCE, HOME_PEOPLE, TEAM, CONTACT, fr } from "../content/site.js";
import { FAQ } from "../content/faq.js";
import "./Home.css";

// La FAQ du pied de page, déclarée en données structurées (moteurs et assistants IA).
const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.flatMap((g) =>
    g.items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  ),
};

const person = (slug) => TEAM.find((m) => m.slug.startsWith(slug));

/* Accueil : 100 % du contenu du site actuel, réorganisé.
   Fonds en alternance : bleu nuit (hero) → clair → bleu nuit → clair… */

function Hero() {
  return (
    <section className="hhero">
      <div className="hhero__sky" aria-hidden="true" />
      <div className="shell hhero__grid">
        <div className="hhero__copy">
          <h1>
            {HOME.title} <span className="accent">{HOME.titleEnd}</span>
          </h1>
          <p>{HOME.intro}</p>
          <div className="hhero__actions">
            <Link className="pill pill--copper pill--inline" to="/contact">
              Nous contacter <IconArrow />
            </Link>
            <Link className="pill pill--glass" to="/agir-en-confiance">
              Notre approche <IconArrow />
            </Link>
          </div>
        </div>
        {/* Film « Je suis ARUM Gestion Privée » à droite du texte, en entier (sous-titres visibles), muet, en boucle, sous un voile bleu nuit */}
        <div className="hhero__film" aria-hidden="true">
          <video
            className="hhero__video"
            poster="/video/arum-film-poster.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/video/arum-film.mp4" type="video/mp4" />
            <source src="/video/arum-film.webm" type="video/webm" />
          </video>
          <div className="hhero__tint" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function Unique() {
  return (
    <section className="hsec hsec--grad">
      <div className="shell hsplit">
        <div className="reveal">
          <h2 className="hstatement">
            {HOME.unique} <span>{HOME.uniqueEnd}</span>
          </h2>
          <p className="hbody">{HOME.introBis}</p>
          <p className="hbody">{HOME.strategy}</p>
        </div>
        <Portrait {...HOME_PEOPLE.duo} cta={null} className="reveal" />
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section className="hsec hsec--navy">
      <div className="shell">
        <header className="hhead hhead--wide">
          <Kicker light>{DIFFERENCE.kicker}</Kicker>
          <h2>{DIFFERENCE.title}</h2>
          <p>{DIFFERENCE.text}</p>
        </header>
        <Comparison />
        {/* « Une alternative… » mise en valeur : grande phrase dans un bloc en verre */}
        <div className="halt halt--text reveal">
          <p className="halt__tag">{fr(DIFFERENCE.tagline)}</p>
        </div>
      </div>
    </section>
  );
}

/** Citation d'un membre de l'équipe, avec sa photo, son nom et sa fonction. */
function QuoteCard({ quote, photo, names, roles }) {
  return (
    <figure className="hquote reveal">
      <blockquote>
        <p>« {quote} »</p>
      </blockquote>
      <figcaption>
        <img src={photo} alt="" loading="lazy" />
        <span>
          <strong>{names}</strong>
          {roles}
        </span>
      </figcaption>
    </figure>
  );
}

function KeyFigures() {
  const { marie, sandrine } = HOME_PEOPLE;
  // citation de Sandrine : celle de sa présentation (page Nous connaître)
  const sandrineQuote = TEAM.find((m) => m.slug.startsWith("sandrine")).quote;
  return (
    <section className="hsec hsec--navy hsec--glass">
      <div className="shell">
        <Figures />
        <div className="hduo">
          <QuoteCard {...marie} />
          <QuoteCard {...sandrine} quote={sandrineQuote} />
        </div>
      </div>
    </section>
  );
}

function Goals() {
  return (
    <section className="hsec hsec--navy">
      <div className="shell">
        <header className="hhead">
          <Kicker light>Vos objectifs</Kicker>
          <h2>{fr("Transmettre, protéger, organiser, optimiser")}</h2>
        </header>
        <Objectives />
      </div>
    </section>
  );
}

// Invitation vers la page Actualités (textes repris de cette page).
function News() {
  return (
    <section className="hsec hsec--navy hsec--news">
      <div className="shell">
        <Link className="hnews reveal" to="/actualites">
          <div>
            <h2>Actualités</h2>
            <p>{fr("Fiscalité, transmission, statut du dirigeant, immobilier : nos analyses de l’actualité juridique et financière.")}</p>
          </div>
          <span className="pill pill--glass">
            Toutes les actualités <IconArrow />
          </span>
        </Link>
      </div>
    </section>
  );
}

// Anne-Laure au centre (position 4, la plus grande, au premier plan).
const CROWD = ["vincent", "marie", "patrick", "anne-laure", "genevieve", "sandrine", "isabelle"].map(person);

function Cta() {
  return (
    <section className="hcta">
      <div className="hcta__copy">
        <h2>Nous contacter</h2>
        <p>
          {CONTACT.address[0]}, {CONTACT.address[1]}
        </p>
        <div className="hcta__bar">
          <a href={CONTACT.phoneHref} className="hcta__phone">
            <IconPhone />
            {CONTACT.phone}
          </a>
          <Link className="hcta__btn" to="/contact">
            Nous contacter
          </Link>
        </div>
      </div>
      <div className="hcta__crowd" aria-hidden="true">
        {CROWD.map((m, i) => (
          <img key={m.slug} src={m.photo} alt="" loading="lazy" className={`hcta__p hcta__p--${i}`} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Seo jsonLd={FAQ_LD} />
      <Hero />
      <Unique />
      <Difference />
      <KeyFigures />
      <Goals />
      <News />
      <Cta />
    </>
  );
}
