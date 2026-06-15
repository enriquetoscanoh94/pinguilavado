/**
 * Optimize images in /public/assets for mobile-first delivery.
 * - Logo PNG -> WebP + AVIF + downscaled PNG fallback
 * - JPEG photos -> WebP + AVIF + smaller JPEG fallback
 * - Reads original files, writes alongside.
 */
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const ASSETS_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'assets');

const fmt = (n) => `${(n / 1024).toFixed(0)} KB`;

async function processImage(file) {
  const ext = extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return null;

  const fullPath = join(ASSETS_DIR, file);
  const base = basename(file, ext);
  const before = (await stat(fullPath)).size;

  const isLogo = base.toLowerCase() === 'logo';
  const maxWidth = isLogo ? 800 : 1600;

  const img = sharp(fullPath).rotate();
  const meta = await img.metadata();
  const width = Math.min(meta.width || maxWidth, maxWidth);

  // WebP (target ~80% quality, mobile-friendly)
  await sharp(fullPath).rotate().resize({ width, withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(join(ASSETS_DIR, `${base}.webp`));

  // AVIF (smaller, better quality)
  await sharp(fullPath).rotate().resize({ width, withoutEnlargement: true })
    .avif({ quality: 55, effort: 5 })
    .toFile(join(ASSETS_DIR, `${base}.avif`));

  // Optimized JPEG fallback (for <picture>'s img element)
  if (ext !== '.jpeg') {
    await sharp(fullPath).rotate().resize({ width, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(join(ASSETS_DIR, `${base}.jpeg`));
  } else {
    // Re-compress existing JPEG in place (write to tmp then rename)
    const tmp = join(ASSETS_DIR, `${base}.opt.jpeg`);
    await sharp(fullPath).rotate().resize({ width, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(tmp);
    const { rename } = await import('node:fs/promises');
    await rename(tmp, fullPath);
  }

  const webp = (await stat(join(ASSETS_DIR, `${base}.webp`))).size;
  const avif = (await stat(join(ASSETS_DIR, `${base}.avif`))).size;
  const jpeg = (await stat(join(ASSETS_DIR, `${base}.jpeg`))).size;

  return { file, before, webp, avif, jpeg };
}

async function run() {
  console.log('Optimizing assets in', ASSETS_DIR);
  const files = await readdir(ASSETS_DIR);
  const results = [];
  for (const f of files) {
    const r = await processImage(f);
    if (r) {
      results.push(r);
      console.log(`  ${r.file.padEnd(20)} ${fmt(r.before).padStart(8)}  ->  WebP ${fmt(r.webp).padStart(8)}  AVIF ${fmt(r.avif).padStart(8)}  JPEG ${fmt(r.jpeg).padStart(8)}`);
    }
  }
  const totalBefore = results.reduce((a, r) => a + r.before, 0);
  const totalAfter = results.reduce((a, r) => a + Math.min(r.webp, r.avif, r.jpeg), 0);
  console.log(`\nTotal before: ${fmt(totalBefore)}\nTotal after (best-of): ${fmt(totalAfter)}\nSavings: ${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%`);
}

run().catch(err => { console.error(err); process.exit(1); });
