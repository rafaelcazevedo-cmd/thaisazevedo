// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// IMPORTANT: update `site` to the final domain before deploying.
// It drives canonical URLs, the sitemap, Open Graph URLs and JSON-LD @id values.
export default defineConfig({
  site: 'https://www.thaisazevedo.org',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // pt-BR single-locale site; keep lastmod for freshness signals (good for GEO).
      changefreq: 'weekly',
      priority: 0.7,
      // Keep noindex pages out of the sitemap.
      filter: (page) => !page.includes('/politica-de-privacidade'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
