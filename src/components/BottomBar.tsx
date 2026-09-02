import { NavLink } from "react-router-dom";
import { Brand } from "./Brand";
import { ServerStatus } from "./ServerStatus";

export function BottomBar() {
  return (
    <footer className="bottom-bar">
      <Brand />
      <nav aria-label="Primary navigation">
        <NavLink to="/" end>Recipes</NavLink>
        <NavLink to="/ingredients">Ingredient Explorer</NavLink>
        <NavLink to="/console">Console</NavLink>
      </nav>
      <ServerStatus />
    </footer>
  );
}
