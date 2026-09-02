import { assetPath } from "../lib/assets";

export function Brand() {
  return (
    <div className="brand">
      <img src={assetPath("chef-hat.svg")} alt="" width="24" height="24" />
      <span className="brand-name">Savora</span>
      <span className="brand-pill">MCP Server</span>
    </div>
  );
}
