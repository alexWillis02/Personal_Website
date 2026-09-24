// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// SITE_URL and BASE_PATH are filled in by the GitHub Pages deploy workflow
// (from actions/configure-pages), so this works for both
// https://<user>.github.io/ and https://<user>.github.io/<repo>/ without edits.
// If you add a custom domain, set `site` to it here.
export default defineConfig({
  site: process.env.SITE_URL || "http://localhost:4321",
  base: process.env.BASE_PATH || "/",
  integrations: [sitemap()],
});
