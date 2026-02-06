---
title: "CSS Grid Layout Guide"
description: "Master CSS Grid to create complex, responsive layouts with ease."
date: "08/22/2024"
tags: ["css", "web-development", "design"]
---

## Introduction to CSS Grid

CSS Grid is a powerful layout system that allows you to create two-dimensional layouts with rows and columns.

## Basic Grid Container

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 100px;
  gap: 20px;
}
```

## Fractional Units (fr)

The `fr` unit distributes available space:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* Middle column is twice as wide */
}
```

## Grid Template Areas

Create named grid areas for clearer layouts:

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  gap: 10px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
```

## Responsive Grid

Use `repeat()` and `auto-fit` for responsive layouts:

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

This creates a responsive grid that automatically adjusts the number of columns based on available space.

## Alignment

Control alignment with these properties:

```css
.container {
  justify-items: center;    /* Horizontal alignment of items */
  align-items: center;      /* Vertical alignment of items */
  justify-content: center;  /* Horizontal alignment of grid */
  align-content: center;    /* Vertical alignment of grid */
}
```

## Grid Item Placement

Position items explicitly:

```css
.item {
  grid-column: 1 / 3;     /* Span from column 1 to 3 */
  grid-row: 1 / 2;        /* Span from row 1 to 2 */
}

/* Or use span notation */
.item {
  grid-column: span 2;    /* Span 2 columns */
  grid-row: span 1;       /* Span 1 row */
}
```

## Practical Example

Here's a complete example of a common layout:

```css
.page {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  min-height: 100vh;
  gap: 20px;
}

header { grid-area: header; }
aside { grid-area: sidebar; }
main { grid-area: main; }
footer { grid-area: footer; }
```

## When to Use Grid vs Flexbox

- **Use Grid** for two-dimensional layouts (rows AND columns)
- **Use Flexbox** for one-dimensional layouts (row OR column)
- They work great together! Use Grid for the overall page layout and Flexbox for components

## Conclusion

CSS Grid is an incredibly powerful tool for creating modern web layouts. It simplifies complex layout challenges and provides fine-grained control over element positioning.

## Resources

- [CSS-Tricks Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Grid by Example](https://gridbyexample.com/)
- [CSS Grid Garden](https://cssgridgarden.com/) - Interactive learning game
