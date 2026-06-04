import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import DeckPage from "./pages/DeckPage";
import "./index.css";
// Override the /public-served @font-face rules with inlinable, file://-safe ones.
// Must come AFTER index.css. See src/deck-fonts.css for why.
import "./deck-fonts.css";

/**
 * Standalone entry for the exported, single-file deck.
 *
 * The live app (src/main.tsx) mounts the whole marketing site behind a
 * BrowserRouter, which needs a web server. This entry mounts ONLY the deck and
 * uses MemoryRouter (no URL/History API) so the build works when opened directly
 * from disk via file://. Rendering is otherwise identical to the live /deck route
 * — same DeckPage, same index.css, same slides.
 */
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MemoryRouter>
        <DeckPage />
      </MemoryRouter>
    </TooltipProvider>
  </QueryClientProvider>,
);
