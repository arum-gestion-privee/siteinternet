import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes.jsx";

// Aucun appel à Google Fonts : RGPD + CSP stricte.
// Polices : Inter Tight (titres), Inter (texte), Playfair Display (accent de la charte ARUM), auto-hébergées.
import "@fontsource-variable/inter-tight/wght.css";
import "@fontsource/playfair-display/latin-500.css";
import "@fontsource-variable/inter/wght.css";
import "./styles/global.css";

export const createRoot = ViteReactSSG({ routes });
