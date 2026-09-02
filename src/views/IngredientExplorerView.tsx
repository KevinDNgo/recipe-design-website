import { useMemo, useState } from "react";
import { Header } from "../components/Header";
import { SearchField } from "../components/SearchField";
import { ingredients } from "../data";
import { filterIngredients } from "../lib/search";

const schema = `{
  "name": "ingredient_lookup",
  "description": "Fetch seasonal & nutritional data for foods",
  "inputSchema": {
    "type": "object",
    "properties": {
      "ingredient": {
        "type": "string",
        "description": "Name of the ingredient"
      }
    },
    "required": ["ingredient"]
  }
}`;

export function IngredientExplorerView() {
  const [query, setQuery] = useState("Fresh Garlic");
  const results = useMemo(
    () => filterIngredients(ingredients, query),
    [query],
  );

  return (
    <div className="standard-page">
      <Header />
      <main id="main-content" className="explorer-layout" tabIndex={-1}>
        <section className="explorer-main">
          <div className="page-heading">
            <h1>Ingredient Explorer</h1>
            <p>
              Search our connected food knowledge graph to discover pairings and
              seasonality.
            </p>
          </div>
          <SearchField
            label="Search ingredients"
            value={query}
            placeholder="Search ingredients and pairings"
            onChange={setQuery}
          />
          {results.length > 0 ? (
            <div className="ingredient-grid" aria-live="polite">
              {results.map((ingredient) => (
                <article className="ingredient-card" key={ingredient.id}>
                  <img
                    className="ingredient-image"
                    src={ingredient.image}
                    alt={ingredient.name}
                    width="1248"
                    height="832"
                    loading="lazy"
                  />
                  <div className="ingredient-body">
                    <div className="ingredient-heading">
                      <h2>{ingredient.name}</h2>
                      <span>{ingredient.category}</span>
                    </div>
                    <p>
                      <strong>Pairings:</strong> {ingredient.pairings.join(", ")}
                    </p>
                    <div className="ingredient-footer">
                      <span>{ingredient.season}</span>
                      <span>{ingredient.highlight}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state compact" aria-live="polite">
              <h2>No ingredients found.</h2>
              <button type="button" onClick={() => setQuery("")}>
                Show all ingredients
              </button>
            </div>
          )}
        </section>
        <aside className="schema-panel">
          <h2>MCP Tool Definition</h2>
          <p>
            Below is the formal Model Context Protocol schema defining the tool
            that queries this ingredient database.
          </p>
          <div className="code-card">
            <div className="code-header">
              <span>ingredient_lookup_schema.json</span>
              <span>JSON</span>
            </div>
            <pre>
              <code>{schema}</code>
            </pre>
          </div>
        </aside>
      </main>
    </div>
  );
}
