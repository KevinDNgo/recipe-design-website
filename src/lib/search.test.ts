import { describe, expect, it } from "vitest";
import { ingredients, recipes } from "../data";
import {
  extractSearchTerms,
  filterIngredients,
  filterRecipes,
} from "./search";

describe("recipe search", () => {
  it("ignores conversational filler words", () => {
    expect(extractSearchTerms("Find recipes with chicken and basil")).toEqual([
      "chicken",
      "basil",
    ]);
  });

  it("combines natural-language search with a selected filter", () => {
    const results = filterRecipes(
      recipes,
      "Find recipes with chicken and basil",
      "italian",
    );

    expect(results.map((recipe) => recipe.id)).toEqual([
      "tuscan-garlic-chicken",
      "caprese-chicken-bake",
    ]);
  });

  it("matches ingredients by pairing metadata", () => {
    const results = filterIngredients(ingredients, "pine nuts");

    expect(results.map((ingredient) => ingredient.id)).toEqual(["sweet-basil"]);
  });
});
