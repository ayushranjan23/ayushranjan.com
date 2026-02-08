import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const learn = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/learn" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    group: z.string(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const code = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/code" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    group: z.string(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const xp = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/xp" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    group: z.string(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { learn, code, xp };
