import { useRouteError } from "react-router-dom";
import NotFound from "./NotFound.jsx";

// Après une mise en ligne, un onglet resté ouvert réclame des fichiers qui n'existent plus
// (noms à empreinte) : on recharge la page une fois pour récupérer la nouvelle version.
const STALE = /JSON|dynamically imported module|Failed to fetch|Importing a module script failed/i;

export default function RouteError() {
  const error = useRouteError();
  if (typeof window !== "undefined" && STALE.test(String(error?.message || error))) {
    let reloaded = false;
    try {
      reloaded = sessionStorage.getItem("arum-reload") === location.pathname;
      sessionStorage.setItem("arum-reload", location.pathname);
    } catch {}
    if (!reloaded) {
      location.reload();
      return null;
    }
  }
  return <NotFound />;
}
