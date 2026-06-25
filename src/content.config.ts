import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Services offered (avaliação, intervenção, orientação). */
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    /** <title>/H1 oriented for SEO; can differ from short title. */
    seoTitle: z.string().optional(),
    /** Meta description (~150–160 chars). */
    description: z.string(),
    /** GEO quick-answer: 1–2 clean, quotable sentences. */
    summary: z.string(),
    icon: z.enum(['clipboard', 'puzzle', 'school', 'brain']).default('brain'),
    order: z.number().default(99),
    keywords: z.array(z.string()).default([]),
  }),
});

/** Learning difficulties / conditions addressed (dislexia, TDAH, ...). */
const conditions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/conditions' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    summary: z.string(),
    /** Short list of common signs, shown as a highlighted box. */
    signs: z.array(z.string()).default([]),
    order: z.number().default(99),
    keywords: z.array(z.string()).default([]),
  }),
});

/** Blog / articles. */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { services, conditions, blog };
