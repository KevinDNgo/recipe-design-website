import type { FormEvent } from "react";
import { assetPath } from "../lib/assets";

interface SearchFieldProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
}

export function SearchField({
  label,
  value,
  placeholder,
  onChange,
  onSubmit,
}: SearchFieldProps) {
  const inputId = label.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.();
  };

  return (
    <form className="search-field" role="search" onSubmit={handleSubmit}>
      <img src={assetPath("search.svg")} alt="" width="20" height="20" />
      <label className="visually-hidden" htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        name={inputId}
        type="search"
        autoComplete="off"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
      <span className="mcp-active" aria-hidden="true">
        MCP Active
      </span>
    </form>
  );
}
