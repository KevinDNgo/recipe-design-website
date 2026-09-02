import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Brand } from "./Brand";
import { ServerStatus } from "./ServerStatus";

const navItems = [
  {
    to: "/",
    label: "Recipes",
    isActive: (path: string) => path === "/" || path.startsWith("/recipes/"),
  },
  {
    to: "/ingredients",
    label: "Ingredient Explorer",
    isActive: (path: string) => path === "/ingredients",
  },
  {
    to: "/console",
    label: "Console",
    isActive: (path: string) => path === "/console",
  },
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
        {navItems.map((item) => {
          const isActive = item.isActive(location.pathname);
          return (
            <Link
              key={item.to}
              to={item.to}
              className={isActive ? "active" : undefined}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <ServerStatus />
    </header>
  );
}
