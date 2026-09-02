import type { QueryHistoryItem } from "../types";

interface HistoryPanelProps {
  history: QueryHistoryItem[];
  onSelect: (query: string) => void;
}

export function HistoryPanel({ history, onSelect }: HistoryPanelProps) {
  return (
    <>
      <div className="history-heading">
        <h2>Recent Queries</h2>
        <p>Recent natural language queries processed by Savora&apos;s MCP recipe_search tool.</p>
      </div>
      <div className="history-list">
        {history.map((item) => (
          <button
            className="history-item"
            key={item.id}
            type="button"
            onClick={() => onSelect(item.text.replaceAll('"', ""))}
          >
            <span className="history-query">{item.text}</span>
            <span className="history-meta">
              <span>{item.time}</span>
              <span className="ok-status">[{item.status}]</span>
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
