---
title: "Introduction to TypeScript"
description: "Learn the basics of TypeScript and why it's become essential for modern JavaScript development."
date: "10/05/2024"
tags: ["typescript", "javascript", "programming"]
---

## What is TypeScript?

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

## Why Use TypeScript?

### Type Safety

TypeScript catches errors at compile time rather than runtime:

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// This will cause a compile error
greet(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
```

### Better IDE Support

TypeScript provides excellent autocomplete, refactoring tools, and inline documentation.

### Scalability

As your codebase grows, TypeScript helps maintain code quality and makes refactoring safer.

## Basic Types

```typescript
let isDone: boolean = false;
let age: number = 25;
let firstName: string = "Ayush";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];
```

## Interfaces

Interfaces define the structure of objects:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
}

const user: User = {
  id: 1,
  name: "Ayush Ranjan",
  email: "ayush@example.com"
};
```

## Generics

Generics provide variables to types:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
```

## Getting Started

1. Install TypeScript: `npm install -g typescript`
2. Create a `tsconfig.json` file
3. Start writing `.ts` files
4. Compile with `tsc`

## Conclusion

TypeScript adds a powerful type system to JavaScript that can catch bugs early and make your code more maintainable. While there's a learning curve, the benefits are well worth it for any serious JavaScript project.
