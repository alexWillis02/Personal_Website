# Daily briefing file format

Each day's briefing is one JSON file in this folder, named `YYYY-MM-DD.json`
(the briefing's date). The newest file becomes the site's front page. The
schema is enforced in `src/content.config.ts`, so an invalid file fails the
build and the site keeps showing the previous edition.

```jsonc
{
  "date": "2026-09-24",                              // required, YYYY-MM-DD
  "title": "Daily Briefing — Thursday, September 24", // required
  "coverage": "Covering roughly …",                  // optional one-line note on the time window / source caveats
  "top": [                                           // the "Top 3"
    { "headline": "…", "summary": "One or two sentences." }
  ],
  "sections": [                                      // required, in display order
    {
      "name": "AI",                                  // "AI", "Space", "Tech, drones & defense", "Automotive & motorsport"
      "items": [
        {
          "headline": "…",                           // the bold headline, no trailing markup
          "summary": "2–3 sentences.",               // plain text, no Markdown
          "sources": [
            { "label": "Reuters", "url": "https://…" } // direct article URLs, never google.com/url?q= redirects
          ]
        }
      ]
    }
  ],
  "engineersCorner": { "headline": "…", "body": "…" }, // optional
  "footnote": "Compiled from public reporting, …"      // optional
}
```

Rules:

- All text is plain text: no Markdown (`**`, `*`, `[]()`), no HTML.
- URLs must be absolute `https://` links straight to the article.
- Write valid JSON (double quotes, escape `"` inside strings as `\"`).
