import { getCollection } from "astro:content";

const byDateDesc = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

export async function getRoundups() {
  return (await getCollection("roundups")).sort(byDateDesc);
}

export async function getThoughts() {
  // Drafts show up in `npm run dev` but never in the built site.
  return (await getCollection("thoughts"))
    .filter((post) => import.meta.env.DEV || !post.data.draft)
    .sort(byDateDesc);
}

export async function getProjects() {
  return (await getCollection("projects")).sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) || byDateDesc(a, b),
  );
}

// One-line teaser for a briefing: its Top 3 headlines, else its section names.
export function teaser(roundup: Awaited<ReturnType<typeof getRoundups>>[number]) {
  const { top, sections } = roundup.data;
  return top.length
    ? top.map((t) => t.headline.replace(/[.\s]+$/, "")).join(" · ")
    : sections.map((s) => s.name).join(" · ");
}
