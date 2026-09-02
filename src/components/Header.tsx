import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Brand } from "./Brand";
import { ServerStatus } from "./ServerStatus";

const navItems = [
  { to: "/", label: "Recipes", end: true },
  { to: "/ingredients", label: "Ingredient Explorer", end: false },
  { to: "/console", label: "Console", end: false },
];

export function Header({ recipesOnly = false }: { recipesOnly?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navId = useId();
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className={recipesOnly ? "site-header recipes-header" : "site-header"}>
      <Brand />
      <button
        className="nav-menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-controls={navId}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMenuOpen((value) => !value)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav
        id={navId}
        className={menuOpen ? "primary-nav is-open" : "primary-nav"}
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <ServerStatus />
    </header>
  );
}
