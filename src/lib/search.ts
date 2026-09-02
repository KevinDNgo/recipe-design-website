import type { FilterId, Ingredient, Recipe } from "../types";

const SEARCH_STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "find",
  "for",
  "me",
  "recipe",
  "recipes",
  "show",
  "the",
  "with",
]);

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9\s-]/g, " ");
}

export function extractSearchTerms(query: string): string[] {
  return normalize(query)
    .split(/\s+/)
    .filter((term) => term.length > 1 && !SEARCH_STOP_WORDS.has(term));
}

export function filterRecipes(
  recipes: Recipe[],
  query: string,
  filter: FilterId,
): Recipe[] {
  const terms = extractSearchTerms(query);

  return recipes.filter((recipe) => {
    const searchable = normalize(
      [
        recipe.title,
        recipe.cuisine,
        recipe.difficulty,
        ...recipe.ingredients,
      ].join(" "),
    );
    const matchesQuery = terms.every((term) => searchable.includes(term));

    const matchesFilter =
      filter === "all" ||
      (filter === "italian" && recipe.cuisine === "Italian") ||
      (filter === "gluten-free" && recipe.glutenFree) ||
      (filter === "under-30" && recipe.duration < 30) ||
      (filter === "easy" && recipe.difficulty === "Easy");

    return matchesQuery && matchesFilter;
  });
}

export function filterIngredients(
  ingredients: Ingredient[],
  query: string,
): Ingredient[] {
  const terms = extractSearchTerms(query);

  return ingredients.filter((ingredient) => {
    const searchable = normalize(
      [
        ingredient.name,
        ingredient.category,
        ingredient.highlight,
        ...ingredient.pairings,
      ].join(" "),
    );
    return terms.every((term) => searchable.includes(term));
  });
}
