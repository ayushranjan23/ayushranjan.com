---
title: "Research Collection"
description: "How to add entries to research."
group: "hello3"
date: "2024-03-21"
tags:
  - tutorial
---

---

## Working with the `research` collection:

The `learn` collection is found in `src/content/learn`.

```
📁 /src/content/learn
└── 📁 entry-1
      └── 📄 index.md
└── 📁 entry-2
      └── 📄 index.mdx
```

In the above example, two research entries will be generated with the folder name representing the id.

- `https://example.com/learn/entry-1`
- `https://example.com/learn/entry-2`

---

## Provide metadata

Metadata is required for each entry.

```astro
---
title: "Research Collection";
description: "How to add entries to research.";
date: "2024-03-21";
draft: false;
tags:
  - tutorial
---
```

| Field       | Req | Type    | Remarks                                          |
| :---------- | :-- | :------ | :----------------------------------------------- |
| title       | Yes | string  | Title of the content. Used in SEO and RSS.       |
| description | Yes | string  | Description of the content. Used in SEO and RSS. |
| date        | Yes | string  | Must be a valid date string (able to be parsed). |
| draft       | No  | boolean | If draft: true, content will not be published.   |
| tags        | No  | string array | Tags to organize content |

---

All that's left to do is write the content under the metadata.

```astro
---
title: "Research Collection";
description: "How to add entries to research.";
date: "2024-03-21";
draft: false;
tags:
  - tutorial
---

## Working with the research collection
<!-- content -->
```
