import { Head } from "vite-react-ssg";
import { useLocation } from "react-router-dom";

export const SITE_ORIGIN = import.meta.env.VITE_SITE_ORIGIN || "https://www.arumgestionprivee.com";
export const ORG_ID = `${SITE_ORIGIN}/#organisation`;
const BASE = "ARUM Gestion Privée";
const DEFAULT_DESC =
  "ARUM Gestion Privée, cabinet de conseil en gestion de patrimoine à Paris 8e depuis 2014 : organisation, protection, optimisation et transmission du patrimoine des entrepreneurs et des familles.";
const DEFAULT_IMAGE = "/og-arum.jpg";

/**
 * Métadonnées par page, injectées dans le HTML prérendu (lisibles par les moteurs et les IA) :
 * titre, description, canonique, Open Graph, fil d'Ariane et données structurées schema.org.
 */
export default function Seo({ title, description = DEFAULT_DESC, noindex = false, jsonLd, image = DEFAULT_IMAGE }) {
  const { pathname } = useLocation();
  const full = title ? `${title} : ${BASE}` : `${BASE} : conseil en gestion de patrimoine à Paris`;
  const path = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const url = SITE_ORIGIN + path;
  const imageUrl = /^https?:/.test(image) ? image : SITE_ORIGIN + image;

  const blocks = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#page`,
      url,
      name: full,
      description,
      inLanguage: "fr-FR",
      isPartOf: { "@id": `${SITE_ORIGIN}/#site` },
      about: { "@id": ORG_ID },
    },
    ...(title && !noindex
      ? [
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_ORIGIN}/` },
              { "@type": "ListItem", position: 2, name: title, item: url },
            ],
          },
        ]
      : []),
    ...(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []),
  ];

  return (
    <Head>
      <title>{full}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="ARUM Gestion Privée : conseil en gestion de patrimoine à Paris" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(b).replace(/</g, "\\u003c")}
        </script>
      ))}
    </Head>
  );
}
