// Aperçu local de dist/ avec les en-têtes de sécurité de public/_headers (bloc « /* »),
// pour vérifier la CSP comme en production. Usage : npm run serve
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync } from "node:fs";
import { join, extname, normalize } from "node:path";

const DIST = "dist";
const PORT = Number(process.env.PORT || 4174);
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".woff2": "font/woff2", ".woff": "font/woff", ".json": "application/json",
  ".xml": "application/xml", ".txt": "text/plain", ".mp4": "video/mp4" };

// Relu à chaque requête : après un nouveau build, les empreintes CSP changent.
function readHeaders() {
  const headers = {};
  let inGlobal = false;
  for (const line of readFileSync(join(DIST, "_headers"), "utf8").split("\n")) {
    if (/^\S/.test(line)) inGlobal = line.trim() === "/*";
    else if (inGlobal && line.includes(":")) {
      const i = line.indexOf(":");
      const k = line.slice(0, i).trim();
      if (k !== "Strict-Transport-Security") headers[k] = line.slice(i + 1).trim();
    }
  }
  return headers;
}

createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^(\.\.[/\\])+/, "");
  let file = join(DIST, path);
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
  let status = 200;
  if (!existsSync(file)) {
    file = join(DIST, "404.html");
    status = 404;
  }
  res.writeHead(status, { ...readHeaders(), "Cache-Control": "no-store", "Content-Type": TYPES[extname(file)] || "application/octet-stream" });
  res.end(readFileSync(file));
}).listen(PORT, () => console.log(`Aperçu : http://localhost:${PORT}`));
