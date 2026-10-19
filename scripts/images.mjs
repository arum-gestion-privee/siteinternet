// Conversion des photos en WebP (≈ 5 à 10 fois plus légères) : npm run images
import sharp from "sharp";
import { readdirSync } from "node:fs";
import { join } from "node:path";

for (const dir of ["public/img/equipe"]) {
  for (const f of readdirSync(dir).filter((f) => f.endsWith(".png"))) {
    const out = join(dir, f.replace(/\.png$/, ".webp"));
    const info = await sharp(join(dir, f)).resize({ width: 900, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
    console.log(out, `${info.width}×${info.height}`, `${Math.round(info.size / 1024)} Ko`);
  }
}
