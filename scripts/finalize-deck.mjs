// Rename the single-file build to a friendly, shareable name and report its size.
// Run after `vite build --config vite.config.deck.ts`.
import { rename, stat, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "export-deck");
const from = path.join(outDir, "deck-export.html");
const to = path.join(outDir, "EverWorker-SDR-Deck.html");

await rename(from, to);

// Vite-singlefile inlines everything, so any leftover sibling files are stragglers
// we can leave; the .html is fully self-contained on its own.
const { size } = await stat(to);
const mb = (size / 1024 / 1024).toFixed(1);
const siblings = (await readdir(outDir)).filter((f) => f !== "EverWorker-SDR-Deck.html");

console.log(`\n✅ Single-file deck: export-deck/EverWorker-SDR-Deck.html (${mb} MB)`);
if (siblings.length) {
  console.log(`   (note: ${siblings.length} other file(s) in export-deck/ — not needed; the .html is standalone)`);
}
