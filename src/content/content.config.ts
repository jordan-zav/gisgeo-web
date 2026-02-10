import { defineCollection, z } from "astro:content";

export const collections = {
  portfolio: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      slug: z.string(),
      summary: z.string(),
      order: z.number(),
      tags: z.array(z.string()), // 👈 OBLIGATORIO
    }),
  }),
};
