import { assetPath } from "./lib/assets";
import type {
  FilterId,
  Ingredient,
  NutritionStat,
  QueryHistoryItem,
  Recipe,
  RecipeDetails,
  RecipeIngredient,
  ToolDefinition,
} from "./types";

export const filters: { id: FilterId; label: string }[] = [
  { id: "all", label: "All Recipes" },
  { id: "italian", label: "Italian Cuisine" },
  { id: "gluten-free", label: "Gluten-Free" },
  { id: "under-30", label: "Under 30 Mins" },
  { id: "easy", label: "Easy Difficulty" },
];

export const recipes: Recipe[] = [
  {
    id: "tuscan-garlic-chicken",
    title: "Tuscan Garlic Chicken with Basil",
    shortTitle: "Tuscan Garlic Chicken with Basil",
    cuisine: "Italian",
    image: assetPath("recipe-tuscan.png"),
    duration: 25,
    difficulty: "Easy",
    glutenFree: true,
    ingredients: [
      "chicken breast",
      "fresh basil",
      "garlic",
      "heavy cream",
      "spinach",
      "cherry tomatoes",
    ],
    matchedIngredients: ["chicken", "basil"],
  },
  {
    id: "rustic-pesto-chicken",
    title: "Rustic Pesto & Chicken Skillet",
    shortTitle: "Rustic Pesto & Chicken Skillet",
    cuisine: "Mediterranean",
    image: assetPath("recipe-pesto.png"),
    duration: 30,
    difficulty: "Easy",
    glutenFree: true,
    ingredients: ["chicken", "basil pesto", "cherry tomatoes", "pine nuts"],
    matchedIngredients: ["chicken", "basil"],
  },
  {
    id: "caprese-chicken-bake",
    title: "Caprese Chicken Breast Bake",
    shortTitle: "Caprese Chicken Breast Bake",
    cuisine: "Italian",
    image: assetPath("recipe-caprese.png"),
    duration: 20,
    difficulty: "Easy",
    glutenFree: true,
    ingredients: ["chicken breast", "fresh basil", "tomatoes", "mozzarella"],
    matchedIngredients: ["chicken", "basil"],
  },
];

export const initialHistory: QueryHistoryItem[] = [
  {
    id: "chicken-basil",
    text: '"Find recipes with chicken and basil"',
    time: "2 mins ago",
    status: "200 OK",
  },
  {
    id: "pear-dessert",
    text: '"Gluten free dessert with pears and cinnamon"',
    time: "15 mins ago",
    status: "200 OK",
  },
  {
    id: "quick-salmon",
    text: '"Quick salmon under 20 minutes"',
    time: "1 hour ago",
    status: "200 OK",
  },
  {
    id: "vegetarian-bowls",
    text: '"High protein vegetarian bowls"',
    time: "3 hours ago",
    status: "200 OK",
  },
];

export const ingredients: Ingredient[] = [
  {
    id: "fresh-garlic",
    name: "Fresh Garlic",
    category: "Allium",
    image: assetPath("ingredient-garlic.png"),
    pairings: ["Olive Oil", "Tomato", "Rosemary", "Thyme"],
    season: "Year-Round",
    highlight: "Allicin Heavy",
  },
  {
    id: "sweet-basil",
    name: "Sweet Basil",
    category: "Herb",
    image: assetPath("ingredient-basil.png"),
    pairings: ["Pine Nuts", "Parmigiano", "Chicken", "Olive Oil"],
    season: "Summer Peak",
    highlight: "Aromatic Oil",
  },
  {
    id: "heirloom-tomatoes",
    name: "Heirloom Tomatoes",
    category: "Fruit",
    image: assetPath("ingredient-tomatoes.png"),
    pairings: ["Mozzarella", "Sea Salt", "Balsamic"],
    season: "Late Summer",
    highlight: "Vit C & Lycopene",
  },
  {
    id: "cold-pressed-olive-oil",
    name: "Cold Pressed Olive Oil",
    category: "Oil",
    image: assetPath("ingredient-oil.png"),
    pairings: ["Garlic", "Lemon", "Sea Salt", "Vinegar"],
    season: "Year-Round",
    highlight: "Healthy Fats",
  },
];

const tuscanIngredients: RecipeIngredient[] = [
  { name: "Chicken Breast", quantity: "4", unit: "pcs" },
  { name: "Fresh Basil Leaves", quantity: "1", unit: "cup" },
  { name: "Heavy Cream", quantity: "1", unit: "cup" },
  { name: "Garlic (Minced)", quantity: "4", unit: "cloves" },
  { name: "Grated Parmesan", quantity: "0.5", unit: "cup" },
  { name: "Fresh Spinach", quantity: "2", unit: "cups" },
  { name: "Cherry Tomatoes", quantity: "1", unit: "cup" },
];

const tuscanInstructions = [
  "Season the chicken breasts generously with salt, pepper, and Italian herbs. Heat olive oil in a large skillet over medium-high heat.",
  "Sear chicken for 5–6 minutes on each side until golden and cooked through. Remove chicken from skillet and set aside on a plate.",
  "Reduce heat to medium. Add minced garlic, heavy cream, chicken broth, and parmesan cheese to the skillet. Bring to a simmer, stirring continuously.",
  "Stir in cherry tomatoes and spinach until wilted. Return chicken and any juices to the pan. Garnish with an abundance of fresh basil leaves.",
];

const tuscanNutrition: NutritionStat[] = [
  { value: "480 kcal", label: "Calories" },
  { value: "38g", label: "Protein" },
  { value: "8g", label: "Carbs" },
  { value: "32g", label: "Fat" },
];

export const recipeDetails: Record<string, RecipeDetails> = {
  "tuscan-garlic-chicken": {
    heroImage: assetPath("recipe-hero.png"),
    imageAlt: "Tuscan garlic chicken with basil in a cast-iron skillet",
    prepMinutes: 10,
    cookMinutes: 15,
    servings: 4,
    ingredients: tuscanIngredients,
    instructions: tuscanInstructions,
    nutrition: tuscanNutrition,
  },
  "rustic-pesto-chicken": {
    heroImage: assetPath("recipe-pesto.png"),
    imageAlt: "Rustic pesto chicken skillet with tomatoes and fresh basil",
    prepMinutes: 10,
    cookMinutes: 20,
    servings: 4,
    ingredients: [
      { name: "Chicken Thighs", quantity: "6", unit: "pcs" },
      { name: "Basil Pesto", quantity: "0.75", unit: "cup" },
      { name: "Cherry Tomatoes", quantity: "1.5", unit: "cups" },
      { name: "Fresh Spinach", quantity: "2", unit: "cups" },
      { name: "Pine Nuts", quantity: "3", unit: "tbsp" },
      { name: "Olive Oil", quantity: "2", unit: "tbsp" },
    ],
    instructions: [
      "Pat the chicken dry, season with salt and pepper, and warm olive oil in a large skillet over medium-high heat.",
      "Brown the chicken for 5 minutes per side, then lower the heat and cook until the center reaches 165°F.",
      "Fold pesto, tomatoes, and spinach into the skillet juices and simmer until the tomatoes soften and the greens wilt.",
      "Return the chicken to the sauce, scatter with toasted pine nuts, and finish with fresh basil.",
    ],
    nutrition: [
      { value: "520 kcal", label: "Calories" },
      { value: "42g", label: "Protein" },
      { value: "9g", label: "Carbs" },
      { value: "35g", label: "Fat" },
    ],
  },
  "caprese-chicken-bake": {
    heroImage: assetPath("recipe-caprese.png"),
    imageAlt: "Caprese chicken breast topped with tomatoes and fresh basil",
    prepMinutes: 8,
    cookMinutes: 12,
    servings: 4,
    ingredients: [
      { name: "Chicken Breast", quantity: "4", unit: "pcs" },
      { name: "Fresh Mozzarella", quantity: "8", unit: "oz" },
      { name: "Roma Tomatoes", quantity: "3", unit: "pcs" },
      { name: "Fresh Basil", quantity: "0.5", unit: "cup" },
      { name: "Balsamic Glaze", quantity: "3", unit: "tbsp" },
      { name: "Olive Oil", quantity: "1", unit: "tbsp" },
    ],
    instructions: [
      "Season the chicken with salt, pepper, and Italian herbs, then sear in an oven-safe skillet until golden.",
      "Top each chicken breast with tomato and fresh mozzarella slices.",
      "Bake at 425°F until the cheese melts and the chicken reaches 165°F in the center.",
      "Finish with fresh basil and a generous drizzle of balsamic glaze before serving.",
    ],
    nutrition: [
      { value: "410 kcal", label: "Calories" },
      { value: "45g", label: "Protein" },
      { value: "7g", label: "Carbs" },
      { value: "21g", label: "Fat" },
    ],
  },
};

export const tools: ToolDefinition[] = [
  {
    name: "recipe_search",
    description: "Searches recipes on Savora database by tags & ingredients.",
  },
  {
    name: "get_recipe",
    description: "Fetches ingredients, nutrition, and steps of a specific recipe.",
  },
  {
    name: "list_ingredients",
    description: "Exposes Savora pantry database index.",
  },
  {
    name: "suggest_pairings",
    description: "Returns scientifically matched culinary flavor pairings.",
  },
  {
    name: "nutrition_lookup",
    description: "Runs deep calculation on nutrient macro/micro density.",
  },
];
