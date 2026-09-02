import { Link } from "react-router-dom";
import { assetPath } from "../lib/assets";
import type { Recipe } from "../types";

export function RecipeCard({
  recipe,
  priority = false,
}: {
  recipe: Recipe;
  priority?: boolean;
}) {
  return (
    <article className="recipe-card">
      <Link to={`/recipes/${recipe.id}`} aria-label={`View ${recipe.title}`}>
        <img
          className="recipe-card-image"
          src={recipe.image}
          alt={`${recipe.title} plated and ready to serve`}
          width="960"
          height="640"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />
        <div className="recipe-card-body">
          <div className="recipe-card-meta">
            <span className="category-label">{recipe.cuisine}</span>
            <span className="duration">
              <img src={assetPath("clock.svg")} alt="" width="14" height="14" />
              {recipe.duration} mins
            </span>
          </div>
          <h3>{recipe.shortTitle}</h3>
          <div className="card-match">
            <img src={assetPath("wand.svg")} alt="" width="15" height="15" />
            <span>
              Matched: &apos;{recipe.matchedIngredients.join("', '")}&apos;
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
