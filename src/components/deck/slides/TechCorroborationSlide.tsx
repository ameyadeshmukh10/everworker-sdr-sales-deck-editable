import { motion } from "framer-motion";
import { Check, Layers, FileSearch } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const SIGNALS: { channel: string; value: string }[] = [
  { channel: "script", value: "js.hs-scripts.com" },
  { channel: "window", value: "_hsq" },
  { channel: "cookie", value: "hubspotutk" },
  { channel: "DNS", value: "CNAME → hs-sites.com" },
];

const TechCorroborationSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: "60px 64px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center shrink-0">
          <Kicker delay={0.05}>Appendix · Corroboration</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 46, lineHeight: 1.04, color: BRAND.ink, marginTop: 12 }}
          >
            Many signals vote, <span className="font-extrabold">one verdict.</span>
          </motion.h1>
        </div>

        <div className="flex items-stretch" style={{ gap: 28, marginTop: 40 }}>
          {/* Corroboration card (hero) */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            className="rounded-3xl flex flex-col"
            style={{ width: 560, padding: "26px 30px 24px", background: "rgba(255,255,255,0.72)", border: "1px solid rgba(15,28,24,0.07)", boxShadow: "0 22px 54px -30px rgba(15,40,32,0.4)" }}
          >
            {SIGNALS.map((s, i) => (
              <motion.div
                key={s.channel}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.42 + i * 0.1 }}
                className="flex items-center gap-3"
                style={{ padding: "13px 0", borderBottom: i < SIGNALS.length - 1 ? "1px solid rgba(15,28,24,0.06)" : "none" }}
              >
                <span className="grid place-items-center rounded-md shrink-0" style={{ width: 26, height: 26, background: "rgba(34,130,111,0.12)" }}>
                  <Check size={15} color={BRAND.emerald} strokeWidth={2.6} />
                </span>
                <span className="font-semibold uppercase" style={{ fontSize: 10.5, letterSpacing: "0.1em", color: "rgba(15,28,24,0.5)", width: 64 }}>{s.channel}</span>
                <span className="font-mono" style={{ fontSize: 13.5, color: BRAND.ink }}>{s.value}</span>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="flex items-center gap-3 rounded-xl"
              style={{ marginTop: 18, padding: "14px 18px", background: "linear-gradient(155deg, #22826F 0%, #0F1C18 130%)" }}
            >
              <span className="font-bold tracking-tight" style={{ fontSize: 15.5, color: "#F6F6F4" }}>HubSpot detected</span>
              <span className="font-medium" style={{ fontSize: 13, color: "#52FEBF", marginLeft: "auto" }}>4 independent signals</span>
            </motion.div>
          </motion.div>

          {/* Why it matters (text, not panels) */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
            className="flex flex-col justify-center flex-1"
          >
            <p className="font-medium tracking-tight" style={{ fontSize: 19, lineHeight: 1.5, color: BRAND.ink }}>
              A vendor is rarely judged on one clue. Script, global, cookie, and DNS all vote, and
              agreement across independent channels makes a detection near-certain.
            </p>
            <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
              <span className="grid place-items-center rounded-lg shrink-0" style={{ width: 34, height: 34, background: "rgba(34,130,111,0.1)" }}>
                <Layers size={17} color={BRAND.emerald} strokeWidth={2.1} />
              </span>
              <span className="font-medium tracking-tight" style={{ fontSize: 14, lineHeight: 1.4, color: "rgba(15,28,24,0.66)" }}>
                A hand-tuned core overrides the bulk import, so curated precision always wins.
              </span>
            </div>
            <div className="flex items-center gap-3" style={{ marginTop: 14 }}>
              <span className="grid place-items-center rounded-lg shrink-0" style={{ width: 34, height: 34, background: "rgba(34,130,111,0.1)" }}>
                <FileSearch size={17} color={BRAND.emerald} strokeWidth={2.1} />
              </span>
              <span className="font-medium tracking-tight" style={{ fontSize: 14, lineHeight: 1.4, color: "rgba(15,28,24,0.66)" }}>
                Every pattern records its source, so signals stay auditable and improvable.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
};

export default TechCorroborationSlide;
