import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import LiquidButton from "./LiquidButton.jsx";
import { IconMenu, IconClose, IconSearch } from "./icons.jsx";
import SearchOverlay from "./SearchOverlay.jsx";
import { NAV, CONTACT } from "../content/site.js";
import "./LiquidNav.css";

export default function LiquidNav() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    setSearch(false);
  }, [pathname]);

  // Raccourci Ctrl/⌘ + K pour la recherche
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-locked", open);
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="lnav">
      <div className="lnav__inner shell">
        <Logo />

        <nav className="lnav__bar" aria-label="Navigation principale">
          <ul className="lnav__list">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className="lnav__link">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <span className="lnav__sheen" aria-hidden="true" />
        </nav>

        <div className="lnav__actions">
          <LiquidButton
            variant="glass"
            size="sm"
            className="liquid-btn--icon lnav__search"
            onClick={() => setSearch(true)}
            aria-label="Rechercher sur le site"
            aria-keyshortcuts="Control+K Meta+K"
          >
            <IconSearch />
            <span className="lnav__sheen" aria-hidden="true" />
          </LiquidButton>
          <LiquidButton
            variant="glass"
            size="sm"
            className="liquid-btn--icon lnav__burger"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            <IconMenu />
          </LiquidButton>
        </div>
      </div>

      <div id="menu-mobile" className={"mmenu" + (open ? " is-open" : "")} hidden={!open}>
        <div className="mmenu__head shell">
          <Logo />
          <button type="button" className="mmenu__close" onClick={() => setOpen(false)} aria-label="Fermer le menu">
            <IconClose />
          </button>
        </div>
        <nav className="mmenu__nav shell" aria-label="Menu">
          <ul>
            {[...NAV, { to: "/contact", label: "Initier un échange" }].map((item) => (
              <li key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
          <p className="mmenu__contact">
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            <br />
            {CONTACT.address.join(", ")}
          </p>
        </nav>
      </div>
      {search && <SearchOverlay onClose={() => setSearch(false)} />}
    </header>
  );
}
