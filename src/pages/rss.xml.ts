import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { SITE } from "../consts";
import { getRoundups, teaser } from "../lib/content";
import { url } from "../lib/utils";

// RSS feed of the daily roundup.
export async function GET(context: APIContext) {
  const roundups = (await getRoundups()).slice(0, 30);
  return rss({
    title: `${SITE.name} — Daily Briefing`,
    description: "A daily briefing on AI, space, tech, drones, and automotive engineering.",
    site: context.site!,
    items: roundups.map((r) => ({
      title: r.data.title,
      pubDate: r.data.date,
      link: url(`/roundup/${r.id}/`),
      description: teaser(r),
    })),
  });
}
