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