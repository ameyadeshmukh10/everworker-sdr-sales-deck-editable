import { motion } from "framer-motion";
import { Server, Code2, ArrowDown } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const TIERS: { label: string; value: string; pct: number }[] = [
  { label: "Definitive", value: "1.0", pct: 100 },
  { label: "Strong", value: "0.85", pct: 85 },
  { label: "Moderate", value: "0.6", pct: 60 },
  { label: "Weak", value: "0.3", pct: 30 },
];

const Bar = ({ b, delay }: { b: (typeof TIERS)[number]; delay: number }) => (
  <div className="flex items-center gap-4" style={{ padding: "11px 0" }}>
    <span className="font-semibold tracking-tight" style={{ fontSize: 14.5, color: BRAND.ink, width: 96 }}>{b.label}</span>
    <div className="relative flex-1 rounded-full" style={{ height: 12, background: "rgba(15,28,24,0.07)" }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${b.pct}%` }}
        transition={{ duration: 0.7, delay, ease: EASE }}
        className="absolute left-0 top-0 rounded-full"
        style={{ height: 12, background: "linear-gradient(90deg, #22826F, #52FEBF)" }}
      />
    </div>
    <span className="font-mono font-bold" style={{ fontSize: 13.5, color: BRAND.emerald, width: 42, textAlign: "right" }}>{b.value}</span>
  </div>
);

const Hit = ({ Icon, label, value, delay }: { Icon: typeof Server; label: string; value: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay }}
    className="flex items-center gap-3 rounded-xl"
    style={{ padding: "12px 16px", background: "rgba(255,255,255,0.7)", border: "1px solid rgba(15,28,24,0.07)" }}
  >
    <span className="grid place-items-center rounded-lg shrink-0" style={{ width: 34, height: 34, background: "rgba(34,130,111,0.1)" }}>
      <Icon size={17} color={BRAND.emerald} strokeWidth={2.1} />
    </span>
    <span className="font-bold tracking-tight" style={{ fontSize: 14.5, color: BRAND.ink }}>{label}</span>
    <span className="font-mono font-bold" style={{ fontSize: 14, color: BRAND.emerald, marginLeft: "auto" }}>{value}</span>
  </motion.div>
);

const TechConfidenceSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col" style={{ padding: "58px 64px 50px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center shrink-0">
          <Kicker delay={0.05}>Appendix · Confidence & fusion</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 46, lineHeight: 1.04, color: BRAND.ink, marginTop: 12 }}
          >
            Every detection ships with a <span className="font-extrabold">score.</span>
          </motion.h1>
        </div>

        {/* Two columns */}
        <div className="flex items-stretch" style={{ gap: 24, marginTop: 40 }}>
          {/* Strength tiers */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            className="rounded-3xl"
            style={{ width: 520, padding: "24px 28px 22px", background: "rgba(255,255,255,0.72)", border: "1px solid rgba(15,28,24,0.07)", boxShadow: "0 22px 54px -30px rgba(15,40,32,0.4)" }}
          >
            <p className="font-semibold uppercase" style={{ fontSize: 11.5, letterSpacing: "0.16em", color: BRAND.emerald, marginBottom: 10 }}>Strength tiers</p>
            <p className="font-medium tracking-tight" style={{ fontSize: 13.5, color: "rgba(15,28,24,0.58)", marginBottom: 8 }}>
              A generic loader scores weak; a vendor-specific id scores strong.
            </p>
            {TIERS.map((b, i) => (
              <Bar key={b.label} b={b} delay={0.45 + i * 0.1} />
            ))}
          </motion.div>

          {/* Fusion: result is the hero, formula demoted to a footnote */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.42, ease: EASE }}
            className="rounded-3xl flex flex-col flex-1"
            style={{ padding: "24px 26px", background: "linear-gradient(180deg, rgba(34,130,111,0.06) 0%, rgba(34,130,111,0.02) 100%)", border: "1px solid rgba(34,130,111,0.2)", boxShadow: "0 22px 54px -30px rgba(34,130,111,0.4)" }}
          >
            <p className="font-semibold uppercase" style={{ fontSize: 11.5, letterSpacing: "0.16em", color: BRAND.emerald, marginBottom: 14 }}>Fusion across pipelines</p>
            <div className="flex flex-col" style={{ gap: 10 }}>
              <Hit Icon={Server} label="DNS hit" value="0.85" delay={0.6} />
              <Hit Icon={Code2} label="Web hit" value="0.60" delay={0.7} />
            </div>

            <div className="flex items-center justify-center" style={{ marginTop: 14, marginBottom: 12 }}>
              <ArrowDown size={20} color={BRAND.emerald} strokeWidth={2.2} />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="rounded-2xl flex items-center justify-between"
              style={{ padding: "18px 22px", background: "linear-gradient(155deg, #22826F 0%, #0F1C18 130%)", border: "1px solid rgba(82,254,191,0.4)" }}
            >
              <div>
                <p className="font-bold tracking-tight" style={{ fontSize: 16, color: "#F6F6F4" }}>Fused confidence</p>
                <p className="font-medium tracking-tight" style={{ fontSize: 12.5, color: "rgba(246,246,244,0.7)", marginTop: 3 }}>two independent confirmations, near certain</p>
              </div>
              <span className="font-extrabold" style={{ fontSize: 40, color: BRAND.mint }}>0.94</span>
            </motion.div>

            <p className="font-mono" style={{ fontSize: 11, color: "rgba(15,28,24,0.45)", marginTop: 14, textAlign: "center" }}>
              noisy-OR: 1 − (1 − dns)(1 − web) · +0.05 per extra signal, cap +0.15
            </p>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
};

export default TechConfidenceSlide;
