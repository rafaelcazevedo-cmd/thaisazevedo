// One-off: crop the 4 "Cada criança aprende" activity photos to a uniform 4:3,
// subject-focused (keeps faces in frame even for portrait-orientation sources).
// Run from the project root: node scripts/optimize-learning.mjs
import sharp from 'sharp';

const SRC = 'Documentos Thais/Fotos/Momentos que importam';
// [input, output, position] — position defaults to subject-aware 'attention';
// the word-cards photo is portrait with the child at the top, so bias the crop
// upward ('top') to keep his face in frame alongside the cards.
const jobs = [
  [`${SRC}/WhatsApp Image 2026-06-25 at 18.05.32.jpeg`, 'public/images/aprende-escrita.jpg'],
  [`${SRC}/WhatsApp Image 2026-06-25 at 18.05.32 (2).jpeg`, 'public/images/aprende-leitura.jpg', 'top'],
  [`${SRC}/WhatsApp Image 2026-06-25 at 18.05.32 (4).jpeg`, 'public/images/aprende-matematica.jpg'],
  [`${SRC}/WhatsApp Image 2026-06-25 at 18.05.32 (3).jpeg`, 'public/images/aprende-atencao.jpg'],
];

for (const [input, output, position = 'attention'] of jobs) {
  const info = await sharp(input)
    .rotate() // honor EXIF orientation from phone cameras
    .resize(800, 600, { fit: 'cover', position })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(output);
  console.log(`✓ ${output}, ${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB`);
}
