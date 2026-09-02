# Savora Recipe Discovery

A responsive recipe discovery experience built from the Savora Figma design. The app includes natural-language recipe search, filters and query history, recipe details, an ingredient explorer, and an MCP server console.

## Stack

- Vite, React, and strict TypeScript
- React Router with hash routes for GitHub Pages compatibility
- Plain CSS with reusable design tokens
- Vitest and Testing Library

## Local development

```bash
npm install
npm run dev
```

The development server runs at `http://127.0.0.1:4173/recipe-design-website/`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Routes

| Route | View |
| --- | --- |
| `#/` | Recipe discovery and query history |
| `#/recipes/tuscan-garlic-chicken` | Recipe details |
| `#/ingredients` | Ingredient explorer |
| `#/console` | MCP server console |

## Deployment

Pushes to `main` deploy through the official GitHub Pages Actions workflow. Vite builds with the `/recipe-design-website/` base path, while hash routing keeps every view directly reachable without server-side rewrites.

**Live site:** <https://kevindngo.github.io/recipe-design-website/>
