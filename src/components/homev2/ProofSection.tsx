import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BRAND, Eyebrow, fadeUp, DARK_BG } from "./ui";
import logoMemgraph from "@/assets/logos/memgraph.png";

const STATS = [
  { value: "$2.7M", label: "qualified pipeline" },
  { value: "600", label: "replies" },
  { value: "60", label: "BANT-qualified deals" },
];

const ProofSection = () => (
  <section className="relative overflow-hidden" style={{ background: DARK_BG }}>
    <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="flex flex-col items-center text-center">
        <Eyebrow tone="dark">Customer results</Eyebrow>
        <motion.h2 {...fadeUp(0.1)} className="font-bold tracking-tight" style={{ color: "#FFFFFF", marginTop: 14, lineHeight: 1.04 }}>
          <span className="text-[34px] sm:text-[46px] lg:text-[52px]">
            $2.7M pipeline. <span className="hero-gradient-text">90 days.</span>
          </span>
        </motion.h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[480px_1fr] lg:items-stretch lg:gap-11">
        {/* Left: company + stats + context */}
        <div className="flex flex-col gap-5">
          <motion.div {...fadeUp(0.15)} className="flex items-center gap-3">
            <span className="grid place-items-center rounded-lg" style={{ height: 42, padding: "0 14px", background: "#FFFFFF" }}>
              <img src={logoMemgraph} alt="Memgraph" style={{ height: 24, width: "auto", objectFit: "contain" }} />
            </span>
            <span className="font-medium tracking-tight" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>the graph engine for AI context</span>
          </motion.div>

          <div className="grid grid-cols-3 gap-3.5">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp(0.2 + i * 0.08)}
                className="flex flex-col items-center justify-center rounded-2xl text-center"
                style={{ padding: "20px 10px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)" }}
              >
                <span className="font-bold tracking-tight hero-gradient-text" style={{ fontSize: 34, lineHeight: 1 }}>{s.value}</span>
                <span className="font-semibold tracking-tight" style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 8 }}>{s.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.4)} className="rounded-xl" style={{ padding: "16px 18px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="font-medium tracking-tight leading-relaxed" style={{ fontSize: 13.5, color: "rgba(255,255,255,0.78)" }}>
              <strong className="font-bold text-white">45,000 contacts</strong> prosecuted across{" "}
              <strong className="font-bold text-white">500 target accounts</strong>, blending marketing leads, PLG usage,
              and ABM intent. LinkedIn + Email AI SDR, live in 4 weeks.
            </p>
          </motion.div>
        </div>

        {/* Right: quote + scaling callout */}
        <div className="flex flex-col gap-4">
          <motion.div
            {...fadeUp(0.3)}
            className="relative flex flex-1 flex-col rounded-2xl"
            style={{ padding: "30px 32px", background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.95) 100%)", boxShadow: "0 30px 70px -28px rgba(0,0,0,0.55)" }}
          >
            <span className="font-bold" style={{ fontSize: 46, lineHeight: 0.7, color: "rgba(34,130,111,0.28)", fontFamily: "Georgia, serif" }}>&ldquo;</span>
            <p className="font-semibold tracking-tight" style={{ fontSize: 21, lineHeight: 1.5, color: BRAND.ink, marginTop: 6 }}>
              We had more in-market accounts than the team could touch, and hiring enough SDRs to cover them wasn't
              realistic. EverWorker let us finally work those accounts before they went cold.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="grid place-items-center rounded-full font-bold text-white" style={{ width: 42, height: 42, fontSize: 14, background: "linear-gradient(135deg, #22826F, #52FEBF)", boxShadow: "0 0 16px rgba(82,254,191,0.4)" }}>AG</span>
              <div>
                <p className="font-bold tracking-tight" style={{ fontSize: 14.5, color: BRAND.ink }}>Axel Goransson</p>
                <p className="font-medium tracking-tight" style={{ fontSize: 12.5, color: "rgba(15,28,24,0.55)" }}>Sales Intelligence Architect, Memgraph</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.45)}
            className="flex items-center gap-3 rounded-xl"
            style={{ padding: "14px 18px", background: "linear-gradient(135deg, #1C826E, #33B690)", boxShadow: "0 18px 44px -20px rgba(0,0,0,0.5)" }}
          >
            <ArrowUpRight size={20} color="#fff" strokeWidth={2.5} />
            <span className="font-bold tracking-tight text-white" style={{ fontSize: 15 }}>Now scaling to 100,000 contacts next quarter, on the same infrastructure.</span>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default ProofSection;
