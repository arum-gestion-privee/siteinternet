import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Origine canonique (balises SEO, sitemap, robots) : variable SITE_ORIGIN chez l'hébergeur.
process.env.VITE_SITE_ORIGIN = (
  process.env.VITE_SITE_ORIGIN ||
  process.env.SITE_ORIGIN ||
  "https://www.arumgestionprivee.com"
).replace(/\/+$/, "");

export default defineConfig({
  plugins: [react()],
  build: { assetsInlineLimit: 0 }, // aucun data: URI : la CSP reste stricte
  ssgOptions: { dirStyle: "nested", formatting: "none" },
});
