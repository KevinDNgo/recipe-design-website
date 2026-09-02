import { Link, NavLink, useLocation } from "react-router-dom";
import { Brand } from "./Brand";
import { ServerStatus } from "./ServerStatus";

export function BottomBar() {
  const { pathname } = useLocation();
  const recipesActive = pathname === "/" || pathname.startsWith("/recipes/");

  return (
    <footer className="bottom-bar">
      <Brand />
      <nav aria-label="Primary navigation">
        <Link
          to="/"
          className={recipesActive ? "active" : undefined}
          aria-current={recipesActive ? "page" : undefined}
        >
          Recipes
        </Link>
        <NavLink to="/ingredients">Ingredient Explorer</NavLink>
        <NavLink to="/console">Console</NavLink>
      </nav>
      <ServerStatus />
    </footer>
  );
}
