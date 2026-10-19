import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../content/searchIndex.js";
import { IconSearch, IconClose, IconArrow } from "./icons.jsx";
import "./SearchOverlay.css";

const SUGGESTIONS = ["Transmettre", "Assurance-vie", "Family office", "Allocation", "ORIAS"];

export default function SearchOverlay({ onClose }) {
  const [q, setQ] = useState("");
  const input = useRef(null);
  const results = useMemo(() => search(q), [q]);

  useEffect(() => {
    input.current?.focus();
    document.body.classList.add("is-locked");
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("is-locked");
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const openFaq = () => {
    const faq = document.getElementById("faq");
    if (faq) faq.open = true;
    onClose();
    requestAnimationFrame(() => faq?.scrollIntoView({ behavior: "smooth" }));
  };

  return (
    <div className="search" role="dialog" aria-modal="true" aria-label="Rechercher sur le site" onClick={onClose}>
      <div className="search__panel" onClick={(e) => e.stopPropagation()}>
        <div className="search__field">
          <IconSearch />
          <input
            ref={input}
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher : transmission, équipe, assurance-vie…"
            aria-label="Rechercher"
            maxLength={80}
            autoComplete="off"
          />
          <button type="button" className="search__close" onClick={onClose} aria-label="Fermer la recherche">
            <IconClose />
          </button>
        </div>

        {q.trim().length < 2 ? (
          <div className="search__hint">
            <p>Suggestions</p>
            <ul>
              {SUGGESTIONS.map((s) => (
                <li key={s}>
                  <button type="button" onClick={() => setQ(s)}>
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : results.length ? (
          <ul className="search__results" aria-live="polite">
            {results.map((r) => {
              const inner = (
                <>
                  <span className="search__section">{r.section}</span>
                  <strong>{r.title}</strong>
                  <span className="search__excerpt">{r.excerpt}</span>
                  <IconArrow />
                </>
              );
              return (
                <li key={r.title + r.section}>
                  {r.href ? (
                    <a href={r.href} target="_blank" rel="noopener noreferrer">
                      {inner}
                    </a>
                  ) : r.to === "#faq" ? (
                    <button type="button" onClick={openFaq}>
                      {inner}
                    </button>
                  ) : (
                    <Link to={r.to} onClick={onClose}>
                      {inner}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="search__empty" aria-live="polite">
            Aucun résultat pour « {q} ».
          </p>
        )}
      </div>
    </div>
  );
}
