// Postbuild patch: Nitro's renderer-template.mjs serves raw index.html in production
// (with /src/start.ts which browsers can't run). This script replaces it so it calls
// the TanStack Start SSR service instead, which renders React server-side and injects
// the correct production asset paths via the <Scripts /> component.
import { writeFileSync, existsSync } from "fs";
import { join } from "path";

const rendererPath = join(
  ".vercel",
  "output",
  "functions",
  "__server.func",
  "_chunks",
  "renderer-template.mjs"
);

if (!existsSync(rendererPath)) {
  console.error(`fix-renderer: file not found at ${rendererPath}`);
  process.exit(1);
}

const fixedContent = `import "../_libs/h3.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";

function renderIndexHTML(event) {
  return globalThis.__nitro_vite_envs__.ssr.fetch(event.req);
}

export {
  renderIndexHTML as default
};
`;

writeFileSync(rendererPath, fixedContent);
console.log("fix-renderer: renderer-template.mjs patched to call SSR service");
