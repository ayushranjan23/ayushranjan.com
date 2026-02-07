---
title: "Top-K with Heaps"
description: "Reduce a large search space with a small heap."
group: "heap/priority queue"
date: "2025-01-25"
tags: ["leetcode", "heap", "priority-queue"]
---

## Approach

Keep a min-heap of size k. Push new items and pop when size exceeds k.

## Why it works

You only keep the best k items so far, which keeps memory tight and performance predictable.
