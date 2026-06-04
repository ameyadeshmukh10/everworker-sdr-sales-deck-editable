// Rename the single-file technographics build to a friendly, shareable name.
// Run after `vite build --config vite.config.deck-technographics.ts`.
import { rename, stat, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "export-deck-technographics");
const from = path.join(outDir, "deck-technographics-export.html");
const to = path.join(outDir, "EverWorker-Technographics-Deck.html");

await rename(from, to);

const { size } = await stat(to);
const mb = (size / 1024 / 1024).toFixed(1);
const siblings = (await readdir(outDir)).filter((f) => f !== "EverWorker-Technographics-Deck.html");

console.log(`\n✅ Single-file deck: export-deck-technographics/EverWorker-Technographics-Deck.html (${mb} MB)`);
if (siblings.length) {
  console.log(`   (note: ${siblings.length} other file(s) in the dir — not needed; the .html is standalone)`);
}
