import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import LiquidDefs from "./components/LiquidDefs.jsx";
import LiquidNav from "./components/LiquidNav.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import { NewsSignup } from "./components/Forms.jsx";
import { LicencesBand } from "./components/Sections.jsx";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <ScrollManager />
      <LiquidDefs />
      <LiquidNav />
      <main id="contenu">
        <Outlet />
        {/* sur toutes les pages, juste au-dessus du pied de page */}
        <NewsSignup />
        <LicencesBand />
      </main>
      <SiteFooter />
    </>
  );
}
