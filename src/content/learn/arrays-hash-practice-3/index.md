---
title: "Set Membership Tricks"
description: "Convert presence checks into O(1) lookups."
group: "arrays & hashing"
date: "2025-02-09"
tags: ["leetcode", "sets", "arrays"]
---

## Approach

Store all seen items in a set, then short-circuit when you find a conflict or match.

## Use cases

- Duplicates detection
- Longest streaks
- Validating constraints

## Tip

When values are contiguous or bounded, consider a boolean array for faster access.
