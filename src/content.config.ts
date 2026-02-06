import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const code = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/code" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const xp = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/xp" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

const learn = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/learn" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { code, xp, learn };
