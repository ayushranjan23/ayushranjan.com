---
title: "Tree Views"
description: "Left, right, and level views without extra work."
group: "trees"
date: "2025-01-11"
tags: ["leetcode", "trees", "bfs"]
---

## Pattern

Use BFS and track the first or last node at each level. That gives you left or right view in one pass.

## Variation

Use DFS with depth tracking, but ensure you visit left or right first depending on the view you want.
