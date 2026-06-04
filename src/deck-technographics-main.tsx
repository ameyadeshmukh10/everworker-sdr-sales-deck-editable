import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import DeckShell from "@/components/deck/DeckShell";
import { slides } from "./pages/TechnographicsDeckPage";
import "./index.css";
// Override the /public-served @font-face rules with inlinable, file://-safe ones.
// Must come AFTER index.css. See src/deck-fonts.css for why.
import "./deck-fonts.css";

/**
 * Standalone entry for the exported, single-file technographics deck.
 *
 * Mounts ONLY the deck (no BrowserRouter) so the build works opened directly from
 * disk via file://. Scoped to the 10-slide narrative: appendix slides are filtered
 * out, so the shareable file and the PDF contain slides 1-10 only. Rendering is
 * otherwise identical to the live /deck-technographics route.
 */
const mainSlides = slides.filter((s) => !s.appendix);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MemoryRouter>
        <DeckShell slides={mainSlides} />
      </MemoryRouter>
    </TooltipProvider>
  </QueryClientProvider>,
);
