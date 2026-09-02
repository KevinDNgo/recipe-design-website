import { Navigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { recipeDetails, recipes } from "../data";
import { assetPath } from "../lib/assets";

export function RecipeDetailView() {
  const { recipeId } = useParams();
  const recipe = recipes.find((item) => item.id === recipeId);
  const details = recipeId ? recipeDetails[recipeId] : undefined;

  if (!recipe || !details) return <Navigate to="/" replace />;

  return (
    <div className="standard-page">
      <Header />
      <main id="main-content" className="detail-layout" tabIndex={-1}>
        <div className="detail-main">
          <img
            className="detail-hero"
            src={details.heroImage}
            alt={details.imageAlt}
            width="1248"
            height="832"
            fetchPriority="high"
          />
          <h1>{recipe.title}</h1>
          <div className="recipe-stats" aria-label="Recipe details">
            <span>
              <img src={assetPath("clock.svg")} alt="" width="16" height="16" />
              Prep: <strong>{details.prepMinutes}m</strong> • Cook:{" "}
              <strong>{details.cookMinutes}m</strong>
            </span>
            <span className="stat-divider" aria-hidden="true" />
            <span>
              <img src={assetPath("users.svg")} alt="" width="16" height="16" />
              Servings: <strong>{details.servings}</strong>
            </span>
            <span className="stat-divider" aria-hidden="true" />
            <span className="difficulty-pill">Easy Difficulty</span>
          </div>
          <section className="instructions-section">
            <h2>Step-by-Step Instructions</h2>
            <ol>
              {details.instructions.map((instruction, index) => (
                <li key={instruction}>
                  <span aria-hidden="true">{index + 1}</span>
                  <p>{instruction}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
        <aside className="detail-sidebar" aria-label="Recipe ingredients and nutrition">
          <div className="tool-status-card">
            <div>
              <span className="tool-name">
                <img src={assetPath("database.svg")} alt="" width="16" height="16" />
                get_recipe
              </span>
              <span className="ok-status">Status: 200 OK</span>
            </div>
            <p>
              This recipe metadata and structured ingredient schema were fetched
              directly from the Savora local SQLite recipe database.
            </p>
          </div>
          <section className="panel-card ingredients-card">
            <h2>Ingredients</h2>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Qty</th>
                    <th>Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {details.ingredients.map((ingredient) => (
                    <tr key={ingredient.name}>
                      <td>{ingredient.name}</td>
                      <td>{ingredient.quantity}</td>
                      <td>{ingredient.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section className="panel-card nutrition-card">
            <h2>Nutrition Facts</h2>
            <div className="nutrition-grid">
              {details.nutrition.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}
