import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const INPUT_DIR = join(ROOT, 'public', 'images', 'achievments');
const OUTPUT_DIR = join(ROOT, 'public', 'images', 'achievments', 'thumbs');

if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });

const images = [
  { src: 'ElectroXcape.JPG',  out: 'ElectroXcape_thumb.webp' },
  { src: 'Anveshan_IEEE.png', out: 'Anveshan_IEEE_thumb.webp' },
  { src: 'CMTI.jpeg',         out: 'CMTI_thumb.webp' },
  { src: 'QUIZ.jpg',          out: 'QUIZ_thumb.webp' },
];

for (const { src, out } of images) {
  const inputPath  = join(INPUT_DIR, src);
  const outputPath = join(OUTPUT_DIR, out);

  const info = await sharp(inputPath)
    .resize(800, 600, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toFile(outputPath);

  const kb = (info.size / 1024).toFixed(0);
  console.log(`✅  ${src}  →  ${out}  (${kb} KB)`);
}

console.log('\nDone — all thumbnails written to public/images/achievments/thumbs/');
