---
title: This website
description: A static portfolio built with Astro, fronted by a daily briefing written by an automated Claude routine.
kind: Software
date: 2026-09-24
stack: [Astro, TypeScript, GitHub Actions]
status: active
---

This site is built with [Astro](https://astro.build) and deployed to GitHub
Pages. Every morning a scheduled Claude routine researches the last day's news
in AI, space, tech and drones, and automotive engineering, emails me the
briefing, and commits the same briefing to this repo as a JSON file. That push
redeploys the site, so the front page is always today's edition.
