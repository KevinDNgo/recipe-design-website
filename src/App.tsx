import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { ConsoleView } from "./views/ConsoleView";
import { IngredientExplorerView } from "./views/IngredientExplorerView";
import { RecipeDetailView } from "./views/RecipeDetailView";
import { RecipesView } from "./views/RecipesView";

export default function App() {
  const skipToContent = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById("main-content")?.focus();
  };

  return (
    <HashRouter>
      <a className="skip-link" href="#main-content" onClick={skipToContent}>
        Skip to Content
      </a>
      <Routes>
        <Route path="/" element={<RecipesView />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetailView />} />
        <Route path="/ingredients" element={<IngredientExplorerView />} />
        <Route path="/console" element={<ConsoleView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
