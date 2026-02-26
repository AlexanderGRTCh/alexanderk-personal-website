import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
    demoUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    featured: z.boolean().optional(),
    clientLinks: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
  }),
});

const playbooks = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  projects,
  playbooks,
};