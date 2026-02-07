---
title: "Frequency Map Patterns"
description: "A quick playbook for counting and matching with maps."
group: "arrays & hashing"
date: "2025-02-02"
tags: ["leetcode", "arrays", "hashing"]
---

## Pattern

Build a frequency map, then use it to validate or match constraints. This is the fastest way to reason about duplicates, pairs, and set membership.

## When to use it

- Anagrams or permutations
- Two-sum style matching
- Counting occurrences under constraints

## Notes

Keep an eye on memory. If the keyspace is small (like lowercase letters), prefer arrays over maps.
