---
title: "Prefix Counts"
description: "Use running counts to answer range questions in O(1)."
group: "arrays & hashing"
date: "2025-02-05"
tags: ["leetcode", "prefix", "arrays"]
---

## Idea

Maintain prefix sums or prefix counts so any range query becomes subtraction.

## Example

If you track counts of each letter, the count in a range is simply the prefix at r minus the prefix at l - 1.

## Pitfall

Be careful with off-by-one indices. Store an extra leading zero entry to simplify math.
