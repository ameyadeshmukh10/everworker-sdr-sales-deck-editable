import { motion } from "framer-motion";
import { Search, CalendarCheck, Sparkles } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

type Seg = { w: number; label: string; bg: string; color: string; icon?: React.ReactNode };

const TODAY: Seg[] = [
  { w: 68, label: "Research, writing, sequencing, follow-up", bg: "rgba(15,28,24,0.09)", color: "rgba(15,28,24,0.6)", icon: <Search size={14} color="rgba(15,28,24,0.5)" strokeWidth={2.2} /> },
  { w: 32, label: "In meetings", bg: BRAND.emerald, color: "#fff", icon: <CalendarCheck size={14} color="#fff" strokeWidth={2.3} /> },
];

const WITH: Seg[] = [
  { w: 24, label: "Oversight", bg: "rgba(34,130,111,0.14)", color: BRAND.emerald },
  { w: 76, label: "In meetings & closing", bg: "linear-gradient(90deg, #22826F, #52FEBF)", color: "#fff", icon: <CalendarCheck size={14} color="#fff" strokeWidth={2.3} /> },
];

const TimeBar = ({ rowLabel, segs, delay }: { rowLabel: string; segs: Seg[]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: EASE }}
  >
    <p className="font-semibold uppercase tracking-tight" style={{ fontSize: 11.5, letterSpacing: "0.14em", color: "rgba(15,28,24,0.5)", marginBottom: 8 }}>{rowLabel}</p>
    <div className="flex rounded-xl overflow-hidden" style={{ height: 46, border: "1px solid rgba(15,28,24,0.06)" }}>
      {segs.map((s) => (
        <div
          key={s.label}
          className="flex items-center gap-2 px-4 min-w-0"
          style={{ flexBasis: `${s.w}%`, background: s.bg }}
        >
          {s.icon}
          <span className="font-semibold tracking-tight truncate" style={{ fontSize: 13, color: s.color }}>{s.label}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const OutcomesSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col" style={{ padding: "58px 60px 56px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center shrink-0">
          <Kicker delay={0.05}>Your team, multiplied</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 50, lineHeight: 1.04, color: BRAND.ink, marginTop: 12 }}
          >
            3 to 5x more pipeline. <span className="font-extrabold">Same team.</span>
          </motion.h1>
        </div>

        {/* Center: rep-time reallocation */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="w-full" style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 22 }}>
            <TimeBar rowLabel="A rep's week today" segs={TODAY} delay={0.3} />
            <TimeBar rowLabel="A rep's week with EverWorker" segs={WITH} delay={0.45} />
          </div>

          {/* what moved */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-2.5 rounded-full"
            style={{ marginTop: 26, padding: "10px 18px", background: "rgba(34,130,111,0.07)", border: "1px solid rgba(34,130,111,0.16)" }}
          >
            <Sparkles size={16} color={BRAND.emerald} strokeWidth={2.2} />
            <span className="font-semibold tracking-tight" style={{ fontSize: 14.5, color: BRAND.ink }}>
              The AI SDR runs research, writing, sequencing, and follow-up, so your reps spend their time in meetings.
            </span>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
};

export default OutcomesSlide;
