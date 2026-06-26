// Optimize a source photo into a web-ready JPEG.
// Usage: node scripts/optimize-photo.mjs <input> [output] [width]
//   e.g. node scripts/optimize-photo.mjs "Thais Profile pic.png" public/images/thais.jpg 900
import sharp from 'sharp';

const input = process.argv[2];
const output = process.argv[3] ?? 'public/images/thais.jpg';
const width = Number(process.argv[4] ?? 900);

if (!input) {
  console.error('Usage: node scripts/optimize-photo.mjs <input> [output] [width]');
  process.exit(1);
}

const info = await sharp(input)
  .rotate() // honor EXIF orientation from phone cameras
  .resize({ width }) // preserve aspect ratio; CSS object-cover handles cropping
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(output);

console.log(`✓ ${output}, ${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB`);
