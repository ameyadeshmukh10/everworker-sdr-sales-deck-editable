import { motion } from "framer-motion";
import { Building2, Crosshair, Swords, Workflow, ListChecks, Lock, Scale, Gauge } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const INPUTS: { Icon: typeof Building2; title: string; why: string }[] = [
  { Icon: Building2, title: "Client profile", why: "Anchors which categories are relevant." },
  { Icon: Crosshair, title: "ICP / target accounts", why: "Picks the right tier: enterprise vs SMB." },
  { Icon: Swords, title: "Competitors & replaces", why: "Forces displacement targets into scope." },
  { Icon: Workflow, title: "GTM motion", why: "Weights the selection: ABM, PLG, ecommerce." },
  { Icon: ListChecks, title: "Categories of interest", why: "Includes whole domains wholesale." },
  { Icon: Lock, title: "Must-have / exclude", why: "Hard constraints, honored verbatim." },
  { Icon: Scale, title: "Precision vs recall", why: "Marquee set vs the full long tail." },
  { Icon: Gauge, title: "Render budget", why: "Speed vs JS-global recall trade-off." },
];

const TechAgentInputsSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: "60px 80px" }}>
        <div className="flex flex-col items-center text-center">
          <Kicker delay={0.05}>Appendix · Configuration</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 46, lineHeight: 1.04, color: BRAND.ink, marginTop: 14 }}
          >
            Eight inputs the agent <span className="font-extrabold">reasons over.</span>
          </motion.h1>
        </div>

        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "14px 22px", marginTop: 44 }}>
          {INPUTS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.07, ease: EASE }}
              className="flex items-center gap-4 rounded-2xl"
              style={{ padding: "16px 20px", background: "rgba(255,255,255,0.72)", border: "1px solid rgba(15,28,24,0.07)", boxShadow: "0 14px 36px -28px rgba(15,40,32,0.35)" }}
            >
              <span className="grid place-items-center rounded-xl shrink-0" style={{ width: 42, height: 42, background: "rgba(34,130,111,0.1)" }}>
                <it.Icon size={20} color={BRAND.emerald} strokeWidth={2.1} />
              </span>
              <div className="min-w-0">
                <p className="font-bold tracking-tight" style={{ fontSize: 16, color: BRAND.ink }}>{it.title}</p>
                <p className="font-medium tracking-tight" style={{ fontSize: 13.5, color: "rgba(15,28,24,0.58)", marginTop: 2 }}>{it.why}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
};

export default TechAgentInputsSlide;
