// Generates a static index.html in dist/client so the app can be served
// as an SPA on static hosts (Vercel, Netlify, Cloudflare Pages, etc.).
// We render the SSR HTML for "/" once and inline it into the shell.
import { readdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";

const clientDir = resolve("dist/client");
const assetsDir = join(clientDir, "assets");

if (!existsSync(assetsDir)) {
  console.error("[postbuild-spa] dist/client/assets not found. Run `vite build` first.");
  process.exit(1);
}

const files = readdirSync(assetsDir);
const jsEntry = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));
const cssEntry = files.find((f) => f.startsWith("styles-") && f.endsWith(".css"));

if (!jsEntry) {
  console.error("[postbuild-spa] No JS entry found in dist/client/assets");
  process.exit(1);
}

// Try to render SSR HTML for the home route to inline into the shell (better SEO + no flash).
let ssrHtml = "";
try {
  const mod = await import(resolve("dist/server/server.js"));
  if (typeof mod.render === "function") {
    ssrHtml = await mod.render("/");
  }
} catch (err) {
  console.warn("[postbuild-spa] SSR render skipped:", err?.message ?? err);
}

const head = [
  '<meta charset="UTF-8" />',
  '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
  '<title>JC Tech — Especialistas em Inteligência Artificial</title>',
  '<meta name="description" content="Automações, chatbots, atendimento inteligente e sites profissionais com IA." />',
  cssEntry ? `<link rel="stylesheet" href="/assets/${cssEntry}" />` : "",
].filter(Boolean).join("\n    ");

const html = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    ${head}
  </head>
  <body>
    <div id="app">${ssrHtml}</div>
    <script type="module" src="/assets/${jsEntry}"></script>
  </body>
</html>
`;

writeFileSync(join(clientDir, "index.html"), html);
console.log(`[postbuild-spa] Wrote dist/client/index.html (entry=${jsEntry}, ssr=${ssrHtml ? "yes" : "no"})`);
