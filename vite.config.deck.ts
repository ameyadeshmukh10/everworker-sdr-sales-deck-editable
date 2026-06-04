import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteSingleFile } from "vite-plugin-singlefile";
import path from "path";

/**
 * Dedicated build for the standalone, shareable deck.
 *
 * Produces ONE self-contained HTML file (all JS, CSS, fonts, and images inlined)
 * that sales reps can download and open directly in any browser — no server, no
 * network. Entry is deck.html → src/deck-main.tsx (deck only, no BrowserRouter).
 *
 * This config is fully independent of vite.config.ts; the normal dev server and
 * `npm run build` are unaffected. Run via `npm run build:deck`.
 */
export default defineConfig({
  // Relative asset URLs so the file works under file:// (no leading-slash paths).
  base: "./",
  // Don't copy /public into the export — everything the deck needs is inlined,
  // so the output dir holds only the standalone .html (and the generated PDF).
  publicDir: false,
  plugins: [react(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    outDir: "export-deck",
    emptyOutDir: true,
    // viteSingleFile raises assetsInlineLimit so all images/fonts inline as base64.
    rollupOptions: {
      input: path.resolve(__dirname, "deck-export.html"),
    },
  },
});
