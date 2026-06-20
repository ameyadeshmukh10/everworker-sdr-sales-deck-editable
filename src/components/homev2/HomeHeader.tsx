import { openBookDemo } from "@/components/BookDemoDialog";
import { BRAND } from "./ui";
import logotype from "@/assets/everworker-logotype-black.svg";

/** Minimal standalone header for the deck-driven landing page (no shared site nav). */
const HomeHeader = () => (
  <header className="sticky top-0 z-40 border-b" style={{ borderColor: "rgba(15,28,24,0.08)", background: "rgba(251,252,251,0.82)", backdropFilter: "blur(12px)" }}>
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6" style={{ height: 64 }}>
      <a href="#top" className="flex items-center" aria-label="EverWorker home">
        <img src={logotype} alt="EverWorker" style={{ height: 24, width: "auto" }} />
      </a>
      <nav className="flex items-center gap-6">
        <a href="#pricing" className="hidden font-semibold tracking-tight sm:inline" style={{ fontSize: 14, color: "rgba(15,28,24,0.7)" }}>
          Pricing
        </a>
        <button
          onClick={openBookDemo}
          className="inline-flex items-center rounded-full font-semibold tracking-tight transition-transform hover:-translate-y-0.5"
          style={{ height: 40, padding: "0 18px", fontSize: 14, color: BRAND.ink, background: "linear-gradient(135deg, #52FEBF, #22826F)", boxShadow: "0 10px 26px -12px rgba(34,130,111,0.6)" }}
        >
          Book a demo
        </button>
      </nav>
    </div>
  </header>
);

export default HomeHeader;
