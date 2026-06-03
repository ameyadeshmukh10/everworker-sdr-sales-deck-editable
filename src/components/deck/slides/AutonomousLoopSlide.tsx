import { motion } from "framer-motion";
import { Radar, Database, FileText, Sparkles, ShieldCheck, Send, Clock, ArrowRight, CalendarCheck } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

// Ellipse-ring geometry (container 1172 x 360) — centered on the page
const CX = 586;
const CY = 178;
const RX = 240;
const RY = 140;

type Step = { label: string; sub: string; icon: (s: number) => React.ReactNode; angle: number };

const STEPS: Step[] = [
  { label: "Signal detected", sub: "real-time", icon: (s) => <Radar size={s} color={BRAND.emerald} strokeWidth={2.1} />, angle: -90 },
  { label: "Account enriched", sub: "auto-researched", icon: (s) => <Database size={s} color={BRAND.emerald} strokeWidth={2.1} />, angle: -30 },
  { label: "Structure selected", sub: "signal-specific", icon: (s) => <FileText size={s} color={BRAND.emerald} strokeWidth={2.1} />, angle: 30 },
  { label: "Personalized", sub: "company variables", icon: (s) => <Sparkles size={s} color={BRAND.emerald} strokeWidth={2.1} />, angle: 90 },
  { label: "Reviewed", sub: "agent iterates vs guardrails", icon: (s) => <ShieldCheck size={s} color={BRAND.emerald} strokeWidth={2.1} />, angle: 150 },
  { label: "Auto-sent", sub: "tool call, loops on", icon: (s) => <Send size={s} color={BRAND.emerald} strokeWidth={2.1} />, angle: 210 },
];

const NODE_W = 168;
const NODE_H = 66;

const StepNode = ({ step, index }: { step: Step; index: number }) => {
  const rad = (step.angle * Math.PI) / 180;
  const x = CX + RX * Math.cos(rad);
  const y = CY + RY * Math.sin(rad);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.55 + index * 0.11, ease: EASE }}
      className="absolute flex items-center gap-2.5 rounded-xl"
      style={{
        left: x - NODE_W / 2, top: y - NODE_H / 2, width: NODE_W, height: NODE_H,
        padding: "0 13px",
        background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.94) 100%)",
        border: "1px solid rgba(15,28,24,0.08)",
        boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 16px 36px -24px rgba(15,40,32,0.32)",
      }}
    >
      <span className="grid place-items-center rounded-lg shrink-0" style={{ width: 36, height: 36, background: "rgba(34,130,111,0.1)" }}>
        {step.icon(19)}
      </span>
      <div className="min-w-0">
        <p className="font-bold tracking-tight leading-tight" style={{ fontSize: 13.5, color: BRAND.ink }}>{step.label}</p>
        <p className="font-medium tracking-tight leading-snug" style={{ fontSize: 10.5, color: "rgba(15,28,24,0.58)", marginTop: 2 }}>{step.sub}</p>
      </div>
    </motion.div>
  );
};

const AutonomousLoopSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "54px 54px 48px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center shrink-0">
          <Kicker delay={0.05}>Signals trigger outreach automatically</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 50, lineHeight: 1.04, color: BRAND.ink, marginTop: 12 }}
          >
            From signal to send, <span className="font-extrabold">0 human time.</span>
          </motion.h1>
        </div>

        {/* Ring diagram */}
        <div className="relative w-full" style={{ height: 360 }}>
          {/* elliptical track + marching comet */}
          <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 1172 360" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="loopGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22826F" />
                <stop offset="100%" stopColor="#52FEBF" />
              </linearGradient>
            </defs>
            <ellipse cx={CX} cy={CY} rx={RX} ry={RY} fill="none" stroke="rgba(15,40,32,0.1)" strokeWidth={2} strokeDasharray="2 8" />
            <ellipse
              cx={CX} cy={CY} rx={RX} ry={RY}
              fill="none"
              stroke="url(#loopGrad)"
              strokeWidth={3.5}
              strokeLinecap="round"
              pathLength={100}
              strokeDasharray="18 82"
              style={{ animation: "deck-dash 5s linear infinite" }}
            />
          </svg>

          {/* center badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.3, ease: EASE }}
            className="absolute rounded-full flex flex-col items-center justify-center text-center"
            style={{
              left: CX - 66, top: CY - 66, width: 132, height: 132,
              background: "radial-gradient(circle at 50% 30%, #22826F 0%, #0F1C18 100%)",
              border: "1px solid rgba(82,254,191,0.5)",
              boxShadow: "0 0 40px rgba(82,254,191,0.45), 0 20px 50px -20px rgba(15,40,32,0.6)",
            }}
          >
            <span className="font-bold tracking-tight text-white leading-none" style={{ fontSize: 26 }}>0</span>
            <span className="font-semibold uppercase" style={{ fontSize: 9.5, letterSpacing: "0.14em", color: "#52FEBF", marginTop: 5 }}>human time</span>
            <span className="font-medium" style={{ fontSize: 9, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>fully autonomous</span>
          </motion.div>

          {/* step nodes */}
          {STEPS.map((s, i) => (
            <StepNode key={s.label} step={s} index={i} />
          ))}

          {/* exit branch — a booked meeting auto-stops the sequence for that contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.15 }}
          >
            {/* connector line off the ring's right edge, on the y=178 centerline */}
            <div className="absolute rounded-full" style={{ left: 826, top: 176, width: 154, height: 3 }}>
              <div className="absolute inset-0 rounded-full" style={{ background: "rgba(15,40,32,0.12)" }} />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundImage: "linear-gradient(90deg, transparent 0%, #52FEBF 50%, #22826F 72%, transparent 100%)",
                  backgroundSize: "220% 100%",
                  animation: "deck-flow 2.1s linear infinite",
                }}
              />
            </div>
            <ArrowRight size={17} color={BRAND.emerald} strokeWidth={2.5} style={{ position: "absolute", left: 958, top: 169 }} />
            {/* condition label, centered on the connector midline between the two boxes */}
            <span
              className="absolute font-semibold tracking-tight rounded-full"
              style={{
                left: 895, top: 177, transform: "translate(-50%, -50%)", fontSize: 11, color: BRAND.emerald,
                whiteSpace: "nowrap", padding: "3px 10px",
                background: "#F4F8F6", border: "1px solid rgba(34,130,111,0.22)",
              }}
            >
              books a meeting?
            </span>

            {/* success exit node */}
            <div
              className="absolute flex items-center gap-2.5 rounded-xl"
              style={{
                left: 982, top: 178, transform: "translateY(-50%)", width: 158, padding: "13px 14px",
                background: "linear-gradient(150deg, #1C826E 0%, #33B690 60%, #52FEBF 130%)",
                border: "1px solid rgba(82,254,191,0.5)",
                boxShadow: "0 18px 44px -20px rgba(34,130,111,0.6), 0 0 22px rgba(82,254,191,0.28)",
              }}
            >
              <span className="grid place-items-center rounded-lg shrink-0" style={{ width: 36, height: 36, background: "rgba(255,255,255,0.18)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35)" }}>
                <CalendarCheck size={19} color="#fff" strokeWidth={2.3} />
              </span>
              <div className="min-w-0">
                <p className="font-bold tracking-tight leading-tight text-white" style={{ fontSize: 13.5 }}>Meeting booked</p>
                <p className="font-medium tracking-tight leading-snug" style={{ fontSize: 10.5, color: "rgba(255,255,255,0.82)", marginTop: 2 }}>sequence stops</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contrast footer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.25 }}
          className="flex items-center justify-center gap-4 shrink-0"
        >
          <span
            className="flex items-center gap-2.5 rounded-full"
            style={{ padding: "10px 18px", background: "rgba(15,28,24,0.05)", border: "1px solid rgba(15,28,24,0.1)" }}
          >
            <Clock size={16} color="rgba(15,28,24,0.55)" strokeWidth={2.2} />
            <span className="font-semibold tracking-tight" style={{ fontSize: 14.5, color: "rgba(15,28,24,0.55)" }}>
              Manual: ~45 min of research, writing and CRM per prospect
            </span>
          </span>
          <ArrowRight size={20} color={BRAND.emerald} strokeWidth={2.5} />
          <span
            className="flex items-center gap-2.5 rounded-full"
            style={{ padding: "10px 18px", background: "linear-gradient(135deg, #1C826E, #33B690)", boxShadow: "0 0 22px rgba(82,254,191,0.3)" }}
          >
            <Sparkles size={16} color="#fff" strokeWidth={2.3} />
            <span className="font-bold tracking-tight text-white" style={{ fontSize: 14.5 }}>EverWorker: 0 human time</span>
          </span>
        </motion.div>
      </div>
    </SlideFrame>
  );
};

export default AutonomousLoopSlide;
