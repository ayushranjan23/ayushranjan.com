---
title: "Signal Board"
description: "A playful dashboard that turns personal metrics into a calm ambient display."
date: "2024-12-01"
demoURL: "https://example.com/signal-board"
repoURL: "https://github.com/example/signal-board"
---

![Signal Board hero image](/placeholder-signal-board.jpg)

Signal Board is a small experiment in slow dashboards. Instead of graphs and KPIs, it uses gradients and subtle motion to show how things are trending: sleep quality, walking time, and focus sessions. It is intentionally low-information; you check it once a day and move on.

The stack is Astro for the static shell, a sprinkle of Island components for live data, and a thin API proxy that pulls from Apple Health exports and Toggl reports. Everything runs statically with scheduled rebuilds so it stays cheap and quiet.

## Why build it

I wanted a dashboard that wouldn’t hijack my attention. Signal Board focuses on gentle cues and removes numbers unless you hover. The design goal: be background art that still keeps me honest about habits.

## What’s inside

- Gradient tiles that shift hue based on trend direction
- Inline SVG spark lines rendered at build time
- A11y-first controls for toggling data sources
- Theme tokens to keep light/dark palettes consistent
- Simple content config so new tiles can be added as Markdown

## Future ideas

- Web Bluetooth hook to feed a physical e-ink frame
- Tiny sound cues on weekly milestones
- Export-to-image for sharing a weekly snapshot

## Usage

Clone the repo, drop your own JSON exports, and run the scheduled build. The default content is mocked so you can see the layout immediately.
