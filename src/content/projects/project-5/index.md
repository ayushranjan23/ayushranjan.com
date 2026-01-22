---
title: "Field Notes"
description: "A long-form digital garden that mixes essays, sketches, and code experiments."
date: "2024-10-15"
demoURL: "https://example.com/field-notes"
repoURL: "https://github.com/example/field-notes"
---

![Field Notes cover](/placeholder-field-notes.jpg)

Field Notes is a personal knowledge garden built to encourage slow publishing. Entries can be short sketches, code walkthroughs, or half-finished thoughts. Each note has a state badge—seedling, growing, evergreen—so readers know how polished it is.

The site leans on Astro’s content collections for structure, MDX for interactive doodles, and a lightweight graph view rendered with canvas to visualize backlinks without heavy client libraries.

## Workflow

- Write in Markdown/MDX, push to main, rebuild automatically
- Frontmatter drives taxonomy (topics, note state, reading time)
- Local graph JSON generated at build to keep the client bundle tiny
- Code fences can opt into live playgrounds for quick experiments

## Design choices

- Purposeful typography with wide margins and subtle rules
- Color-coded badges for note state, consistent in light/dark
- Pagefind search pre-indexed so results feel instant
- Accessible keyboard nav for traversing notes and backlinks

## What I’d like to add next

- A “recently tended” widget on the home page
- PDF export for evergreen notes
- A daily diff view to show what changed since yesterday

## Getting started

Clone it, run the content sync, and start writing. The seed content includes a few sample notes and a demo playground so you can see the interactions immediately.
