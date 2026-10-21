import { useState } from "react";
import { Link } from "react-router-dom";
import LiquidButton from "./LiquidButton.jsx";
import { IconArrow } from "./icons.jsx";
import { CONTACT } from "../content/site.js";
import "./Forms.css";

/*
 * Formulaires du site (contact, candidature, actualités), envoyés en JavaScript vers les
 * fonctions de functions/api/ (Cloudflare Pages + Brevo). Champ « site » caché : piège à robots.
 * Sur l'aperçu GitHub Pages, ces fonctions n'existent pas : un message invite à écrire par courriel.
 */
const api = (name) => `${import.meta.env.BASE_URL}api/${name}`;

function useSubmit(name) {
  const [state, setState] = useState("idle"); // idle | sending | done | error
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const res = await fetch(api(name), { method: "POST", body: new FormData(form) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || String(res.status));
      form.reset();
      setState("done");
    } catch {
      setState("error");
    }
  };
  return { state, onSubmit };
}

const Honeypot = () => (
  <div className="form__hp" aria-hidden="true">
    <label>
      Site
      <input type="text" name="site" tabIndex={-1} autoComplete="off" />
    </label>
  </div>
);

function Status({ state, done }) {
  if (state === "done") return <p className="form__status form__status--ok" role="status">{done}</p>;
  if (state === "error")
    return (
      <p className="form__status form__status--err" role="alert">
        L’envoi n’a pas abouti. Écrivez-nous à <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> ou appelez le{" "}
        <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
      </p>
    );
  return null;
}

const Privacy = ({ children }) => (
  <p className="form__privacy">
    {children} <Link to="/confidentialite">En savoir plus sur vos données</Link>.
  </p>
);

/** Formulaire de contact (page Contact). */
export function ContactForm() {
  const { state, onSubmit } = useSubmit("contact");
  return (
    <form className="form panel" onSubmit={onSubmit}>
      <Honeypot />
      <div className="form__row">
        <label className="form__field">
          <span>Nom et prénom</span>
          <input name="nom" required maxLength={120} autoComplete="name" />
        </label>
        <label className="form__field">
          <span>Téléphone</span>
          <input name="telephone" type="tel" maxLength={30} autoComplete="tel" />
        </label>
      </div>
      <label className="form__field">
        <span>Courriel</span>
        <input name="email" type="email" required maxLength={160} autoComplete="email" />
      </label>
      <label className="form__field">
        <span>Votre message</span>
        <textarea name="message" required rows={6} maxLength={4000} />
      </label>
      <Privacy>Vos coordonnées servent uniquement à vous répondre.</Privacy>
      <LiquidButton type="submit" variant="copper" iconRight={<IconArrow />} disabled={state === "sending"}>
        {state === "sending" ? "Envoi…" : "Envoyer"}
      </LiquidButton>
      <Status state={state} done="Merci, votre message est bien parti : nous revenons vers vous rapidement." />
    </form>
  );
}

/** Formulaire de candidature (page Recrutement), avec CV joint. */
export function JobForm() {
  const { state, onSubmit } = useSubmit("candidature");
  return (
    <form className="form panel" onSubmit={onSubmit} encType="multipart/form-data">
      <Honeypot />
      <div className="form__row">
        <label className="form__field">
          <span>Nom et prénom</span>
          <input name="nom" required maxLength={120} autoComplete="name" />
        </label>
        <label className="form__field">
          <span>Téléphone</span>
          <input name="telephone" type="tel" maxLength={30} autoComplete="tel" />
        </label>
      </div>
      <label className="form__field">
        <span>Courriel</span>
        <input name="email" type="email" required maxLength={160} autoComplete="email" />
      </label>
      <label className="form__field">
        <span>Votre parcours et vos motivations</span>
        <textarea name="message" required rows={6} maxLength={4000} />
      </label>
      <label className="form__field form__field--file">
        <span>Votre CV (PDF ou Word, 5 Mo maximum)</span>
        <input name="cv" type="file" required accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
      </label>
      <Privacy>Votre candidature est conservée au plus 2 ans, puis supprimée.</Privacy>
      <LiquidButton type="submit" variant="copper" iconRight={<IconArrow />} disabled={state === "sending"}>
        {state === "sending" ? "Envoi…" : "Envoyer ma candidature"}
      </LiquidButton>
      <Status state={state} done="Merci, votre candidature est bien arrivée : nous l’étudions avec attention." />
    </form>
  );
}

/** Inscription aux actualités du cabinet (bandeau au-dessus du pied de page). */
export function NewsSignup() {
  const { state, onSubmit } = useSubmit("actualites");
  return (
    <section className="section section--navy signup" aria-labelledby="signup-title">
      <div className="shell">
        <form className="panel signup__box reveal" onSubmit={onSubmit}>
          <Honeypot />
          <div className="signup__text">
            <h2 id="signup-title">Recevez notre actualité</h2>
            <p>Fiscalité, transmission, statut du dirigeant, immobilier : nos analyses de l’actualité juridique et financière.</p>
          </div>
          <div className="signup__fields">
            <div className="signup__line">
              <label className="form__field">
                <span className="sr-only">Votre courriel</span>
                <input name="email" type="email" required maxLength={160} autoComplete="email" placeholder="Votre courriel" />
              </label>
              <LiquidButton type="submit" variant="copper" disabled={state === "sending"}>
                {state === "sending" ? "Envoi…" : "S’inscrire"}
              </LiquidButton>
            </div>
            <label className="form__check">
              <input type="checkbox" name="consentement" value="oui" required />
              <span>
                J’accepte de recevoir les actualités d’ARUM Gestion Privée par courriel ; désinscription possible à tout moment.{" "}
                <Link to="/confidentialite">Vos données</Link>.
              </span>
            </label>
            <Status state={state} done="Merci, votre inscription est bien enregistrée." />
          </div>
        </form>
      </div>
    </section>
  );
}
