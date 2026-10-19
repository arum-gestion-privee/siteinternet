import { Link } from "react-router-dom";

// Logo officiel (charte ARUM), détouré en haute définition par scripts/logo.mjs.
// Version au nom blanc : la barre de navigation et le pied de page sont sur fond bleu nuit.
export default function Logo({ className = "" }) {
  return (
    <Link to="/" className={"logo " + className} aria-label="ARUM Gestion Privée : accueil">
      <img src="/brand/logo-horizontal-blanc.png" alt="" width="874" height="232" />
    </Link>
  );
}
