import { Header } from "../components/Header";
import { tools } from "../data";
import { assetPath } from "../lib/assets";

export function ConsoleView() {
  return (
    <div className="standard-page">
      <Header />
      <main id="main-content" className="console-layout" tabIndex={-1}>
        <section className="tools-column">
          <div className="page-heading">
            <h1>MCP Server Console</h1>
            <p>Registered tools exposed to client assistants.</p>
          </div>
          <div className="tools-list">
            {tools.map((tool) => (
              <article className="tool-card" key={tool.name}>
                <span className="tool-icon">
                  <img src={assetPath("code.svg")} alt="" width="16" height="16" />
                </span>
                <div>
                  <h2>{tool.name}</h2>
                  <p>{tool.description}</p>
                </div>
                <span className="active-tag">Active</span>
              </article>
            ))}
          </div>
        </section>
        <aside className="telemetry-column">
          <section className="panel-card state-card">
            <h2>Server State</h2>
            <dl>
              <div>
                <dt>Protocol Version</dt>
                <dd>v2024.11.05</dd>
              </div>
              <div>
                <dt>Transport Type</dt>
                <dd>Stdio Stream</dd>
              </div>
              <div>
                <dt>Total Requests</dt>
                <dd>1,424 calls</dd>
              </div>
            </dl>
          </section>
          <section className="log-section">
            <h2>Live Request Log</h2>
            <div className="log-card" tabIndex={0}>
              <div className="log-heading">
                <span>→ REQUEST: recipe_search</span>
                <time>14:32:01</time>
              </div>
              <code>{'{ "ingredients": ["chicken", "basil"] }'}</code>
              <hr />
              <div className="log-heading response">
                <span>← RESPONSE: 200 OK</span>
                <time>14:32:02</time>
              </div>
              <code>
                {'{ "results": [ { "id": 101, "title": "Tuscan Garlic Chicken" } ] }'}
              </code>
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}
