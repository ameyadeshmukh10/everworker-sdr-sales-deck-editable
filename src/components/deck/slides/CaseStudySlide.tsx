import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";
import logoMemgraph from "@/assets/logos/memgraph.png";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const STATS = [
  { value: "$2.7M", label: "qualified pipeline" },
  { value: "600", label: "replies" },
  { value: "60", label: "BANT-qualified deals" },
];

const StatTile = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay, ease: EASE }}
    className="flex-1 rounded-2xl flex flex-col items-center justify-center text-center"
    style={{
      padding: "20px 12px",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.12)",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
    }}
  >
    <span className="font-bold tracking-tight hero-gradient-text" style={{ fontSize: 38, lineHeight: 1 }}>{value}</span>
    <span className="font-semibold tracking-tight" style={{ fontSize: 12.5, color: "rgba(255,255,255,0.6)", marginTop: 8 }}>{label}</span>
  </motion.div>
);

const CaseStudySlide = () => {
  return (
    <SlideFrame tone="dark">
      <div className="absolute inset-0 flex flex-col" style={{ padding: "58px 60px 56px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center shrink-0">
          <Kicker tone="dark" delay={0.05}>Customer results</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-bold tracking-tight"
            style={{ fontSize: 50, lineHeight: 1.04, color: "#FFFFFF", marginTop: 12 }}
          >
            $2.7M pipeline. <span className="hero-gradient-text">90 days.</span>
          </motion.h1>
        </div>

        {/* Body (vertically centered, sized to content) */}
        <div className="flex-1 flex items-center" style={{ marginTop: 18 }}>
          <div className="flex items-stretch w-full" style={{ gap: 44 }}>
          {/* Left: company + stats */}
          <div className="flex flex-col justify-center" style={{ flex: "0 0 484px", gap: 18 }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex items-center gap-3"
            >
              <span className="grid place-items-center rounded-lg" style={{ height: 42, padding: "0 14px", background: "#FFFFFF" }}>
                <img src={logoMemgraph} alt="Memgraph" style={{ height: 24, width: "auto", objectFit: "contain" }} />
              </span>
              <span className="font-medium tracking-tight" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
                the graph engine for AI context
              </span>
            </motion.div>

            <div className="flex" style={{ gap: 14 }}>
              {STATS.map((s, i) => <StatTile key={s.label} value={s.value} label={s.label} delay={0.4 + i * 0.1} />)}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="rounded-xl"
              style={{ padding: "16px 18px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <p className="font-medium tracking-tight leading-relaxed" style={{ fontSize: 13.5, color: "rgba(255,255,255,0.78)" }}>
                <strong className="font-bold text-white">45,000 contacts</strong> prosecuted across <strong className="font-bold text-white">500 target accounts</strong>, blending marketing leads, PLG usage, and ABM intent. LinkedIn + Email AI SDR, live in 4 weeks.
              </p>
            </motion.div>
          </div>

          {/* Right: quote (focal white card) + scaling */}
          <div className="flex-1 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45, ease: EASE }}
              className="relative rounded-2xl flex flex-col"
              style={{
                padding: "30px 32px",
                background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.95) 100%)",
                boxShadow: "0 30px 70px -28px rgba(0,0,0,0.55)",
              }}
            >
              <span className="font-bold" style={{ fontSize: 46, lineHeight: 0.7, color: "rgba(34,130,111,0.28)", fontFamily: "Georgia, serif" }}>&ldquo;</span>
              <p className="font-semibold tracking-tight" style={{ fontSize: 22, lineHeight: 1.5, color: BRAND.ink, marginTop: 6 }}>
                We had more in-market accounts than the team could touch, and hiring enough SDRs to cover them wasn't realistic. EverWorker let us finally work those accounts before they went cold.
              </p>
              <div className="flex items-center gap-3" style={{ marginTop: 22 }}>
                <span className="grid place-items-center rounded-full text-white font-bold" style={{ width: 42, height: 42, fontSize: 14, background: "linear-gradient(135deg, #22826F, #52FEBF)", boxShadow: "0 0 16px rgba(82,254,191,0.4)" }}>AG</span>
                <div>
                  <p className="font-bold tracking-tight" style={{ fontSize: 14.5, color: BRAND.ink }}>Axel Goransson</p>
                  <p className="font-medium tracking-tight" style={{ fontSize: 12.5, color: "rgba(15,28,24,0.55)" }}>Sales Intelligence Architect, Memgraph</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-3 rounded-xl"
              style={{ marginTop: 16, padding: "14px 18px", background: "linear-gradient(135deg, #1C826E, #33B690)", boxShadow: "0 18px 44px -20px rgba(0,0,0,0.5)" }}
            >
              <ArrowUpRight size={20} color="#fff" strokeWidth={2.5} />
              <span className="font-bold tracking-tight text-white" style={{ fontSize: 15 }}>Now scaling to 100,000 contacts next quarter, on the same infrastructure.</span>
            </motion.div>
          </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
};

export default CaseStudySlide;
