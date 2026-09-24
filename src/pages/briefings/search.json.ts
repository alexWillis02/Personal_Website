import { getRoundups } from "../../lib/content";

// Search index for the briefing archive: every headline in every edition.
// Fetched by the archive page only when someone starts searching, so the
// archive page itself stays small as editions pile up.
export async function GET() {
  const roundups = await getRoundups();
  const index = roundups.map((r) => ({
    id: r.id,
    headlines: [
      ...r.data.top.map((t) => t.headline),
      ...r.data.sections.flatMap((s) => s.items.map((i) => i.headline)),
    ].filter((h, i, all) => all.indexOf(h) === i),
  }));
  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json" },
  });
}
