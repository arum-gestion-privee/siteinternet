// Génère les logos détourés (PNG transparents, haute définition) à partir du logo officiel
// « LOGO VERTICAL FOND BLANC.jpg » : node scripts/logo.mjs <chemin du jpg>
import sharp from "sharp";

const src = process.argv[2];
const OUT = "public/brand/";
const { data, info } = await sharp(src).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const W = info.width, H = info.height;

// Détourage : on retire le fond blanc en reconstituant la couleur et l'opacité de chaque pixel.
const rgba = Buffer.alloc(W * H * 4);
for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
  const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
  const d = 255 - Math.min(r, g, b);
  const a = Math.min(1, Math.max(0, (d - 6) / 110));
  const un = (c) => (a > 0 ? Math.max(0, Math.min(255, Math.round((c - (1 - a) * 255) / a))) : 0);
  rgba[j] = un(r); rgba[j + 1] = un(g); rgba[j + 2] = un(b); rgba[j + 3] = Math.round(a * 255);
}
const base = () => sharp(rgba, { raw: { width: W, height: H, channels: 4 } });

// Zones relevées sur le fichier source : symbole (lignes 189-433), nom « ARUM GESTION PRIVÉE » (483-673)
const crop = async (top, bottom) => {
  const part = await base().extract({ left: 0, top, width: W, height: bottom - top + 1 }).png().toBuffer();
  return sharp(part).trim({ threshold: 1 }).png().toBuffer();
};
const symbol = await crop(185, 438);
const word = await crop(478, 678);

// Version blanche du nom (texte bleu nuit → blanc) pour les fonds sombres
const whiten = async (buf) => {
  const { data: d, info: m } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < d.length; i += 4) { d[i] = 255; d[i + 1] = 255; d[i + 2] = 255; }
  return sharp(d, { raw: { width: m.width, height: m.height, channels: 4 } }).png().toBuffer();
};
const wordWhite = await whiten(word);

const meta = async (b) => sharp(b).metadata();
const sm = await meta(symbol), wm = await meta(word);

// Logo horizontal : symbole à gauche, nom à droite (comme sur la charte)
async function horizontal(wordBuf, file) {
  const symH = Math.round(wm.height * 1.22);
  const sym = await sharp(symbol).resize({ height: symH }).png().toBuffer();
  const s2 = await meta(sym);
  const gap = Math.round(wm.height * 0.3);
  const width = s2.width + gap + wm.width, height = symH;
  await sharp({ create: { width, height, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([
      { input: sym, left: 0, top: 0 },
      { input: wordBuf, left: s2.width + gap, top: Math.round((symH - wm.height) / 2) },
    ])
    .png({ compressionLevel: 9 })
    .toFile(OUT + file);
  console.log(file, width + "×" + height);
}
await horizontal(word, "logo-horizontal.png");
await horizontal(wordWhite, "logo-horizontal-blanc.png");

// Logo vertical (fond clair) et symbole seul
await sharp(await crop(185, 678)).png({ compressionLevel: 9 }).toFile(OUT + "logo-vertical.png");
await sharp(symbol).png({ compressionLevel: 9 }).toFile(OUT + "symbole.png");
console.log("symbole", sm.width + "×" + sm.height, "nom", wm.width + "×" + wm.height);
