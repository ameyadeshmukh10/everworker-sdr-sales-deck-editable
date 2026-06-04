// Generate a static PDF of the deck from the single-file HTML build.
//
// Drives the standalone export-deck/EverWorker-SDR-Deck.html with headless
// Chromium (Playwright): renders each slide on the deck's native 1280x720 canvas,
// waits for entrance animations to settle AND the presenter chrome to auto-hide,
// screenshots it, then assembles one landscape page per slide into a single PDF.
//
// Run after `npm run build:deck`.  Output: export-deck/EverWorker-SDR-Deck.pdf
import { chromium } from "@playwright/test";
import { PDFDocument } from "pdf-lib";
import { writeFile, access } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(root, "export-deck", "EverWorker-SDR-Deck.html");
const pdfPath = path.join(root, "export-deck", "EverWorker-SDR-Deck.pdf");

// Deck native canvas (see STAGE_W/STAGE_H in DeckShell). Rendering at exactly this
// size makes scale = 1, so the slide fills the viewport with no letterboxing.
const STAGE_W = 1280;
const STAGE_H = 720;
// Chrome auto-hides 2.6s after each slide change; wait a touch longer so the
// screenshot is clean and framer-motion entrances have settled.
const SETTLE_MS = 3000;

await access(htmlPath).catch(() => {
  console.error(`✗ ${path.relative(root, htmlPath)} not found. Run \`npm run build:deck\` first.`);
  process.exit(1);
});

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: STAGE_W, height: STAGE_H },
  deviceScaleFactor: 2, // 2x for crisp text/images in the PDF
});

await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
// Wait for the deck to mount.
await page.waitForSelector("#root *", { timeout: 30_000 });

// Read total slide count from the "n / N" counter the shell renders.
const total = await page.evaluate(() => {
  const m = document.body.innerText.match(/\b(\d+)\s*\/\s*(\d+)\b/);
  return m ? parseInt(m[2], 10) : null;
});
if (!total) {
  console.error("✗ Could not determine slide count from the deck.");
  await browser.close();
  process.exit(1);
}
console.log(`Capturing ${total} slides…`);

// Start from the first slide.
await page.keyboard.press("Home");

const shots = [];
for (let i = 0; i < total; i++) {
  await page.waitForTimeout(SETTLE_MS); // let animations settle + chrome fade out
  shots.push(await page.screenshot({ type: "png" }));
  process.stdout.write(`  ✓ slide ${i + 1}/${total}\n`);
  if (i < total - 1) await page.keyboard.press("ArrowRight");
}

await browser.close();

// Assemble one landscape page per slide.
const pdf = await PDFDocument.create();
for (const png of shots) {
  const img = await pdf.embedPng(png);
  const page = pdf.addPage([STAGE_W, STAGE_H]); // 16:9 points
  page.drawImage(img, { x: 0, y: 0, width: STAGE_W, height: STAGE_H });
}
await writeFile(pdfPath, await pdf.save());

console.log(`\n✅ PDF: export-deck/EverWorker-SDR-Deck.pdf (${total} pages)`);
