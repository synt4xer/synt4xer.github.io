import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default("Anonymous"),
    image: z.string().optional(),
    category: z.string(),
    series: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
