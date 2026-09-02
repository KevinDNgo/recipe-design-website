import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { QueryHistoryItem } from "../types";
import { HistoryPanel } from "./HistoryPanel";

interface HistoryDrawerProps {
  open: boolean;
  history: QueryHistoryItem[];
  onClose: () => void;
  onSelect: (query: string) => void;
}

export function HistoryDrawer({
  open,
  history,
  onClose,
  onSelect,
}: HistoryDrawerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div className="drawer-layer">
      <button
        className="drawer-scrim"
        type="button"
        aria-label="Close recent queries"
        onClick={onClose}
      />
      <aside
        ref={drawerRef}
        className="history-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Recent queries"
      >
        <button
          ref={closeButtonRef}
          className="drawer-close"
          type="button"
          aria-label="Close recent queries"
          onClick={onClose}
        >
          <X aria-hidden="true" />
        </button>
        <HistoryPanel
          history={history}
          onSelect={(query) => {
            onSelect(query);
            onClose();
          }}
        />
      </aside>
    </div>
  );
}
