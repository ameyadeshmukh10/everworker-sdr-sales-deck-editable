import DeckShell, { type Slide } from "@/components/deck/DeckShell";
import TechCoverSlide from "@/components/deck/slides/TechCoverSlide";
import TechWhereThisFitsSlide from "@/components/deck/slides/TechWhereThisFitsSlide";
import TechProblemSlide from "@/components/deck/slides/TechProblemSlide";
import TechScaleSlide from "@/components/deck/slides/TechScaleSlide";
import TechPipelineSlide from "@/components/deck/slides/TechPipelineSlide";
import TechWebPipelineSlide from "@/components/deck/slides/TechWebPipelineSlide";
import TechDnsTrustSlide from "@/components/deck/slides/TechDnsTrustSlide";
import TechTailoredSlide from "@/components/deck/slides/TechTailoredSlide";
import TechDnsPipelineSlide from "@/components/deck/slides/TechDnsPipelineSlide";
import TechConfidenceSlide from "@/components/deck/slides/TechConfidenceSlide";
import TechCorroborationSlide from "@/components/deck/slides/TechCorroborationSlide";
import TechGuardrailsSlide from "@/components/deck/slides/TechGuardrailsSlide";
import TechUnlocksSlide from "@/components/deck/slides/TechUnlocksSlide";
import TechConfigSlide from "@/components/deck/slides/TechConfigSlide";
import TechAgentInputsSlide from "@/components/deck/slides/TechAgentInputsSlide";
import TechProofSlide from "@/components/deck/slides/TechProofSlide";
import TechClosingSlide from "@/components/deck/slides/TechClosingSlide";
import TechApxTaxonomySlide from "@/components/deck/slides/TechApxTaxonomySlide";
import TechApxDnsSlide from "@/components/deck/slides/TechApxDnsSlide";
import TechApxSchemaSlide from "@/components/deck/slides/TechApxSchemaSlide";
import TechApxLayoutSlide from "@/components/deck/slides/TechApxLayoutSlide";

/**
 * Technographic signal enrichment deck — the deep-dive behind the SDR AI Worker's
 * Signal Intelligence layer. Serves both a sales narrative and a technical
 * evaluation, with a reference appendix. Built incrementally, section by section.
 * Add slides to this array as they're built.
 */
export const slides: Slide[] = [
  { id: "tech-cover", title: "Cover", section: "Open", render: () => <TechCoverSlide /> },
  { id: "tech-where-fits", title: "Where this fits", section: "Open", render: () => <TechWhereThisFitsSlide /> },
  { id: "tech-problem", title: "The problem", section: "Open", render: () => <TechProblemSlide /> },
  { id: "tech-pipeline", title: "The pipeline", section: "Detection", render: () => <TechPipelineSlide /> },
  { id: "tech-dns-trust", title: "Hard to fake, hard to miss", section: "Detection", render: () => <TechDnsTrustSlide /> },
  { id: "tech-unlocks", title: "What it unlocks", section: "Activation", render: () => <TechUnlocksSlide /> },
  { id: "tech-tailored", title: "Tuned to your GTM", section: "Activation", render: () => <TechTailoredSlide /> },
  { id: "tech-config", title: "Tuned to you", section: "Activation", render: () => <TechConfigSlide /> },
  { id: "tech-proof", title: "Signal to outreach", section: "Close", render: () => <TechProofSlide /> },
  { id: "tech-closing", title: "Book a demo", section: "Close", render: () => <TechClosingSlide /> },
  { id: "tech-apx-dns-pipeline", title: "DNS pipeline", section: "Appendix", appendix: true, render: () => <TechDnsPipelineSlide /> },
  { id: "tech-apx-web", title: "Web pipeline", section: "Appendix", appendix: true, render: () => <TechWebPipelineSlide /> },
  { id: "tech-apx-confidence", title: "Confidence & fusion", section: "Appendix", appendix: true, render: () => <TechConfidenceSlide /> },
  { id: "tech-apx-corroboration", title: "Corroboration", section: "Appendix", appendix: true, render: () => <TechCorroborationSlide /> },
  { id: "tech-apx-guardrails", title: "Guardrails", section: "Appendix", appendix: true, render: () => <TechGuardrailsSlide /> },
  { id: "tech-apx-scale", title: "Coverage", section: "Appendix", appendix: true, render: () => <TechScaleSlide /> },
  { id: "tech-apx-taxonomy", title: "Taxonomy map", section: "Appendix", appendix: true, render: () => <TechApxTaxonomySlide /> },
  { id: "tech-apx-dns", title: "DNS catalogue", section: "Appendix", appendix: true, render: () => <TechApxDnsSlide /> },
  { id: "tech-apx-schema", title: "Schema reference", section: "Appendix", appendix: true, render: () => <TechApxSchemaSlide /> },
  { id: "tech-apx-layout", title: "Library layout", section: "Appendix", appendix: true, render: () => <TechApxLayoutSlide /> },
  { id: "tech-apx-config-inputs", title: "Configuration inputs", section: "Appendix", appendix: true, render: () => <TechAgentInputsSlide /> },
];

const TechnographicsDeckPage = () => <DeckShell slides={slides} />;

export default TechnographicsDeckPage;
