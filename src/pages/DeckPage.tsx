import DeckShell, { type Slide } from "@/components/deck/DeckShell";
import CoverSlide from "@/components/deck/slides/CoverSlide";
import FlowOverviewSlide from "@/components/deck/slides/FlowOverviewSlide";
import SignalsSlide from "@/components/deck/slides/SignalsSlide";
import EnrichmentSlide from "@/components/deck/slides/EnrichmentSlide";
import ResearchSlide from "@/components/deck/slides/ResearchSlide";
import EmailInfraSlide from "@/components/deck/slides/EmailInfraSlide";
import EmailBenefitsSlide from "@/components/deck/slides/EmailBenefitsSlide";
import LinkedInInfraSlide from "@/components/deck/slides/LinkedInInfraSlide";
import LinkedInBenefitsSlide from "@/components/deck/slides/LinkedInBenefitsSlide";
import SystemArchitectureSlide from "@/components/deck/slides/SystemArchitectureSlide";
import AutonomousLoopSlide from "@/components/deck/slides/AutonomousLoopSlide";
import OutcomesSlide from "@/components/deck/slides/OutcomesSlide";
import BestPracticesSlide from "@/components/deck/slides/BestPracticesSlide";
import CaseStudySlide from "@/components/deck/slides/CaseStudySlide";
import ImplementationSlide from "@/components/deck/slides/ImplementationSlide";
import PricingSlide from "@/components/deck/slides/PricingSlide";
import ClosingSlide from "@/components/deck/slides/ClosingSlide";

/**
 * Sales-call presentation deck for the SDR AI Worker.
 * Add slides to this array as they're built (1-3 at a time).
 */
const slides: Slide[] = [
  { id: "cover", title: "Cover", section: "Open", render: () => <CoverSlide /> },
  { id: "flow-overview", title: "End-to-end flow", section: "Open", render: () => <FlowOverviewSlide /> },
  { id: "signals", title: "Signal intelligence", section: "Signals", render: () => <SignalsSlide /> },
  { id: "enrichment", title: "Contact enrichment", section: "Signals", render: () => <EnrichmentSlide /> },
  { id: "research", title: "Research & personalization", section: "Signals", render: () => <ResearchSlide /> },
  { id: "email-benefits", title: "Deliverability payoff", section: "Outreach", render: () => <EmailBenefitsSlide /> },
  { id: "linkedin-benefits", title: "LinkedIn payoff", section: "Outreach", render: () => <LinkedInBenefitsSlide /> },
  { id: "system-architecture", title: "Multi-agent system", section: "System", render: () => <SystemArchitectureSlide /> },
  { id: "autonomous-loop", title: "Autonomous loop", section: "System", render: () => <AutonomousLoopSlide /> },
  { id: "best-practices", title: "Best practices", section: "Results", render: () => <BestPracticesSlide /> },
  { id: "outcomes", title: "Team multiplier", section: "Results", render: () => <OutcomesSlide /> },
  { id: "case-study", title: "Memgraph case study", section: "Results", render: () => <CaseStudySlide /> },
  { id: "email-infra", title: "Email infrastructure", section: "Infrastructure", render: () => <EmailInfraSlide /> },
  { id: "linkedin-infra", title: "LinkedIn infrastructure", section: "Infrastructure", render: () => <LinkedInInfraSlide /> },
  { id: "implementation", title: "Implementation", section: "Rollout", render: () => <ImplementationSlide /> },
  { id: "pricing", title: "Packaging & pricing", section: "Rollout", render: () => <PricingSlide /> },
  { id: "closing", title: "Book a demo", section: "Rollout", render: () => <ClosingSlide /> },
];

const DeckPage = () => <DeckShell slides={slides} />;

export default DeckPage;
