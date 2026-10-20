// Favicons : symbole ARUM seul, fond transparent, dans la partie claire du dégradé de la charte
// (cuivre #D29965 → #C07A55) pour rester lisible sur les onglets clairs comme sombres.
import sharp from "sharp";

const SRC = "public/brand/symbole.png";
const trimmed = await sharp(SRC).trim().png().toBuffer();

for (const [size, pad, bold] of [[32, 1, true], [192, 8, false]]) {
  const inner = size - 2 * pad;
  let shape = await sharp(trimmed)
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  if (bold) {
    // trait épaissi en petite taille : le symbole superposé à lui-même, décalé d'un demi-pixel
    const big = await sharp(trimmed).resize(inner * 2, inner * 2, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
    const offsets = [[0, 0], [1, 0], [0, 1], [1, 1]];
    const thick = await sharp({ create: { width: inner * 2 + 1, height: inner * 2 + 1, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
      .composite(offsets.map(([left, top]) => ({ input: big, left, top })))
      .png()
      .toBuffer();
    shape = await sharp(thick).resize(inner, inner).png().toBuffer();
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${inner}" height="${inner}"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D29965"/><stop offset="1" stop-color="#C07A55"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>`;
  const logo = await sharp(Buffer.from(svg)).composite([{ input: shape, blend: "dest-in" }]).png().toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: logo, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toFile(`public/favicon-${size}.png`);
}
console.log("favicons régénérés");

// favicon.ico (16, 32, 48 px) : format attendu par certains navigateurs (Safari, anciens Edge).
const icoSizes = [16, 32, 48];
const pngs = await Promise.all(
  icoSizes.map((n) => sharp("public/favicon-192.png").resize(n, n).png({ compressionLevel: 9 }).toBuffer()),
);
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(pngs.length, 4);
let offset = 6 + 16 * pngs.length;
const entries = pngs.map((png, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(icoSizes[i] % 256, 0);
  e.writeUInt8(icoSizes[i] % 256, 1);
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(png.length, 8);
  e.writeUInt32LE(offset, 12);
  offset += png.length;
  return e;
});
const { writeFileSync } = await import("node:fs");
writeFileSync("public/favicon.ico", Buffer.concat([header, ...entries, ...pngs]));
console.log("favicon.ico régénéré");
