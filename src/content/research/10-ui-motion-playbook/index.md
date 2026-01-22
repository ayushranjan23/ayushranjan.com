---
title: "UI Motion Playbook"
description: "How I choose when to add animation, when to skip it, and how to keep it accessible."
date: "2025-02-02"
tags:
  - design
  - animation
  - accessibility
---

Motion is seasoning. Too little and the interface feels brittle; too much and it feels like a slot machine. This is the playbook I use to decide when to animate and how to do it without harming performance or accessibility.

## When to add motion

- Clarify spatial change: drawers, toasts, and modals that enter from where they originate
- Confirm success: a subtle scale or color wash after saving
- Guide focus: staggered list reveals on first load to show hierarchy
- Educate once: micro-tutorial cues that disappear after first interaction

## When to skip it

- High-frequency workflows where users build muscle memory
- Error states that should be instant and unambiguous
- Large data tables or charts where animation would delay cognition

## Patterns I reuse

- 150–200ms ease-out for small elements; 220–260ms for overlays
- Opacity + translate for most entrances; avoid blur for perf
- Prefers-reduced-motion respected: fall back to instant state changes
- Keyboard focus outlines always stay visible; never hide them under motion

## Implementation notes

- Use CSS variables for timing and distance so themes stay consistent
- Keep animations composited (transform/opacity) to avoid layout thrash
- Test on low-end devices and throttled CPU before shipping

## Takeaway

Motion should make the interface feel more honest, not more clever. Start with a clear intent, keep timings consistent, and honor users who opt out.
