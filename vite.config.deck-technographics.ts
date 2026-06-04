import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteSingleFile } from "vite-plugin-singlefile";
import path from "path";

/**
 * Dedicated build for the standalone, shareable technographics deck (slides 1-10).
 *
 * Produces ONE self-contained HTML file (all JS, CSS, fonts, and logos inlined)
 * that sales reps can download and open directly in any browser, no server, no
 * network. Entry is deck-technographics.html -> src/deck-technographics-main.tsx,
 * which renders only the non-appendix slides.
 *
 * Fully independent of vite.config.ts and vite.config.deck.ts; the dev server,
 * the main build, and the SDR deck export are all unaffected.
 * Run via `npm run build:deck-tech`.
 */
export default defineConfig({
  base: "./",
  publicDir: false,
  plugins: [react(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    outDir: "export-deck-technographics",
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "deck-technographics-export.html"),
    },
  },
});
