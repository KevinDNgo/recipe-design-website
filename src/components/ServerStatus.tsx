import { assetPath } from "../lib/assets";

export function ServerStatus() {
  return (
    <div className="server-status" role="status" aria-label="MCP server online">
      <img src={assetPath("status.svg")} alt="" width="10" height="10" />
      <span>mcp_server: online</span>
    </div>
  );
}
