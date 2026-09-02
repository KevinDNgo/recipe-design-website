export type FilterId =
  | "all"
  | "italian"
  | "gluten-free"
  | "under-30"
  | "easy";

export interface Recipe {
  id: string;
  title: string;
  shortTitle: string;
  cuisine: string;
  image: string;
  duration: number;
  difficulty: "Easy" | "Medium";
  glutenFree: boolean;
  ingredients: string[];
  matchedIngredients: string[];
}

export interface QueryHistoryItem {
  id: string;
  text: string;
  time: string;
  status: "200 OK";
}

export interface Ingredient {
  id: string;
  name: string;
  category: string;
  image: string;
  pairings: string[];
  season: string;
  highlight: string;
}

export interface RecipeIngredient {
  name: string;
  quantity: string;
  unit: string;
}

export interface NutritionStat {
  value: string;
  label: string;
}

export interface RecipeDetails {
  heroImage: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  prepMinutes: number;
  cookMinutes: number;
  servings: number;
  ingredients: RecipeIngredient[];
  instructions: string[];
  nutrition: NutritionStat[];
}

export interface ToolDefinition {
  name: string;
  description: string;
}
