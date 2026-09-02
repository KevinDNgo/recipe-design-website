import { useCallback, useMemo, useState } from "react";
import { History } from "lucide-react";
import { BottomBar } from "../components/BottomBar";
import { Header } from "../components/Header";
import { HistoryDrawer } from "../components/HistoryDrawer";
import { HistoryPanel } from "../components/HistoryPanel";
import { RecipeCard } from "../components/RecipeCard";
import { SearchField } from "../components/SearchField";
import { filters, initialHistory, recipes } from "../data";
import { filterRecipes } from "../lib/search";
import type { FilterId, QueryHistoryItem } from "../types";

const initialQuery = "Find recipes with chicken and basil";

export function RecipesView() {
  const [query, setQuery] = useState(initialQuery);
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const [history, setHistory] = useState<QueryHistoryItem[]>(initialHistory);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const results = useMemo(
    () => filterRecipes(recipes, query, activeFilter),
    [activeFilter, query],
  );

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const submitSearch = () => {
    const trimmed = query.trim();
    if (!trimmed) return;
    setHistory((current) => [
      {
        id: `${Date.now()}`,
        text: `"${trimmed}"`,
        time: "Just now",
        status: "200 OK",
      },
      ...current.filter(
        (item) =>
          item.text.replaceAll('"', "").toLowerCase() !== trimmed.toLowerCase(),
      ),
    ]);
  };

  return (
    <div className="recipes-page">
      <Header recipesOnly />
      <div className="recipes-layout">
        <aside className="history-sidebar">
          <HistoryPanel history={history} onSelect={setQuery} />
        </aside>
        <main id="main-content" className="recipe-workspace" tabIndex={-1}>
          <div className="welcome-block">
            <p className="eyebrow">Smart recipe search</p>
            <h1>What&apos;s in your pantry today?</h1>
            <p>
              Our Model Context Protocol server links your favorite recipe
              databases directly to your conversation assistant.
            </p>
          </div>
          <SearchField
            label="Search recipes"
            value={query}
            placeholder="Search by ingredient, cuisine, or dish"
            onChange={setQuery}
            onSubmit={submitSearch}
          />
          <div className="filter-toolbar">
            <div
              className="filter-pills"
              role="group"
              aria-label="Recipe filters"
            >
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  className={activeFilter === filter.id ? "active" : undefined}
                  aria-pressed={activeFilter === filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <button
              className="history-toggle"
              type="button"
              onClick={() => setDrawerOpen(true)}
            >
              <History aria-hidden="true" />
              Recent queries
            </button>
          </div>
          <section className="results-section">
            <div className="section-heading">
              <h2>Featured Results</h2>
              <span aria-hidden="true">{results.length} recipes</span>
            </div>
            <p className="visually-hidden" role="status" aria-live="polite">
              {results.length === 1
                ? "1 recipe result"
                : `${results.length} recipe results`}
            </p>
            {results.length > 0 ? (
              <div className="recipe-grid">
                {results.map((recipe, index) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    priority={index === 0}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <h3>No recipes matched that request.</h3>
                <p>Try fewer ingredients or choose a different filter.</p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setActiveFilter("all");
                  }}
                >
                  Clear search
                </button>
              </div>
            )}
          </section>
        </main>
      </div>
      <BottomBar />
      <HistoryDrawer
        open={drawerOpen}
        history={history}
        onClose={closeDrawer}
        onSelect={setQuery}
      />
    </div>
  );
}
