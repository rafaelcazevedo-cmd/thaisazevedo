// Generates raster assets from SVG sources using sharp.
// Run with: npm run gen:images  (or: node scripts/gen-images.mjs)
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

async function main() {
  // Open Graph image (PNG renders reliably across social/AI previews; SVG often does not).
  await sharp(join(root, 'scripts/og-source.svg'))
    .resize(1200, 630)
    .png()
    .toFile(join(root, 'public/og-default.png'));
  console.log('✓ public/og-default.png');

  // Apple touch icon (PNG required by iOS).
  await sharp(join(root, 'public/favicon.svg'))
    .resize(180, 180)
    .png()
    .toFile(join(root, 'public/apple-touch-icon.png'));
  console.log('✓ public/apple-touch-icon.png');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
