import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const source = z.object({
  label: z.string(), // outlet name, e.g. "Reuters"
  url: z.url(),
});

// Daily briefings. One JSON file per day (filename = YYYY-MM-DD.json),
// written and pushed by the "Daily AI, Space, Tech & Auto Briefing" routine.
// See src/content/roundups/FORMAT.md for the spec the routine follows.
const roundups = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/roundups" }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    coverage: z.string().optional(), // "Covering roughly Tuesday evening…"
    top: z
      .array(
        z.object({
          headline: z.string(),
          summary: z.string(),
        }),
      )
      .default([]),
    sections: z.array(
      z.object({
        name: z.string(),
        items: z.array(
          z.object({
            headline: z.string(),
            summary: z.string(),
            sources: z.array(source).default([]),
          }),
        ),
      }),
    ),
    engineersCorner: z
      .object({
        headline: z.string(),
        body: z.string(),
      })
      .optional(),
    footnote: z.string().optional(),
  }),
});

// Long-form writing. Markdown files in src/content/thoughts/.
const thoughts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/thoughts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Portfolio projects. Markdown files in src/content/projects/.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    stack: z.array(z.string()).default([]),
    repo: z.url().optional(),
    link: z.url().optional(),
    featured: z.boolean().default(false),
    status: z.enum(["active", "shipped", "archived"]).default("active"),
  }),
});

export const collections = { roundups, thoughts, projects };
