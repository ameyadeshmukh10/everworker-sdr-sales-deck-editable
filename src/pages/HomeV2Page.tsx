import HomeHeader from "@/components/homev2/HomeHeader";
import HeroSection from "@/components/homev2/HeroSection";
import SystemSection from "@/components/homev2/SystemSection";
import ProofSection from "@/components/homev2/ProofSection";
import PricingSection from "@/components/homev2/PricingSection";
import ClosingSection from "@/components/homev2/ClosingSection";

/**
 * Deck-driven marketing homepage (preview at /home-v2).
 * Standalone landing page — own minimal header, no shared site nav/footer.
 * Sections map to deck slides: Hero (S1) → System (S8) → Proof (S12) → Pricing (S16) → Closing (S17).
 */
const HomeV2Page = () => (
  <div id="top" className="min-h-screen" style={{ fontFamily: "Gilroy, system-ui, -apple-system, sans-serif" }}>
    <HomeHeader />
    <main>
      <HeroSection />
      <SystemSection />
      <ProofSection />
      <PricingSection />
      <ClosingSection />
    </main>
  </div>
);

export default HomeV2Page;
