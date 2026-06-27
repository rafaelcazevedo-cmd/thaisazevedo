// Generates raster assets from SVG sources using sharp.
// Run with: npm run gen:images  (or: node scripts/gen-images.mjs)
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

/** Pack one or more PNG buffers into a valid .ico (PNG-in-ICO, supported everywhere modern). */
function pngsToIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(pngs.length, 4);
  let offset = 6 + pngs.length * 16;
  const entries = pngs.map((png) => {
    const w = png.readUInt32BE(16); // IHDR width
    const h = png.readUInt32BE(20); // IHDR height
    const e = Buffer.alloc(16);
    e.writeUInt8(w >= 256 ? 0 : w, 0);
    e.writeUInt8(h >= 256 ? 0 : h, 1);
    e.writeUInt16LE(1, 4); // color planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(png.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += png.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...pngs]);
}

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

  // Favicon PNG fallbacks + multi-size .ico (so /favicon.ico no longer 404s and
  // non-SVG surfaces — Google search, crawlers, legacy browsers — get the brand mark).
  const faviconSvg = join(root, 'public/favicon.svg');
  const png16 = await sharp(faviconSvg).resize(16, 16).png().toBuffer();
  const png32 = await sharp(faviconSvg).resize(32, 32).png().toBuffer();
  const png48 = await sharp(faviconSvg).resize(48, 48).png().toBuffer();
  writeFileSync(join(root, 'public/favicon-16.png'), png16);
  writeFileSync(join(root, 'public/favicon-32.png'), png32);
  writeFileSync(join(root, 'public/favicon.ico'), pngsToIco([png16, png32, png48]));
  console.log('✓ public/favicon-16.png, favicon-32.png, favicon.ico');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
