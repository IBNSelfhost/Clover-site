import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Legal / long-form pages as Markdown: src/content/legal/<locale>/<slug>.md */
const legal = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/legal' }),   // ids: <locale>/<slug>
  schema: z.object({
    title: z.string(),
    updated: z.coerce.date(),
  }),
});

export const collections = { legal };
