import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import NousConnaitre from "./pages/NousConnaitre.jsx";
import AgirEnConfiance from "./pages/AgirEnConfiance.jsx";
import SurMesure from "./pages/SurMesure.jsx";
import Valeurs from "./pages/Valeurs.jsx";
import Actualites from "./pages/Actualites.jsx";
import Contact from "./pages/Contact.jsx";
import LegalPage from "./pages/LegalPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import RouteError from "./pages/RouteError.jsx";
import Article from "./pages/Article.jsx";
import { MENTIONS, PRIVACY } from "./content/legal.js";
import { NEWS } from "./content/site.js";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <RouteError />,
    entry: "src/App.jsx",
    children: [
      { index: true, element: <Home /> },
      { path: "nous-connaitre", element: <NousConnaitre /> },
      { path: "agir-en-confiance", element: <AgirEnConfiance /> },
      { path: "sur-mesure", element: <SurMesure /> },
      { path: "valeurs", element: <Valeurs /> },
      { path: "actualites", element: <Actualites /> },
      { path: "contact", element: <Contact /> },
      ...NEWS.filter((n) => n.local).map((n) => ({ path: `articles/${n.slug}`, element: <Article article={n} /> })),
      { path: "mentions-legales", element: <LegalPage doc={MENTIONS} /> },
      { path: "confidentialite", element: <LegalPage doc={PRIVACY} /> },
      { path: "404", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
