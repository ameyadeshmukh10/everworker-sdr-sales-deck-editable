import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, FlaskConical, FileSearch } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const SIGNALS = ["script src", "window global", "cookie", "DNS record"];

const VALIDATED: { Icon: typeof ShieldCheck; label: string }[] = [
  { Icon: ShieldCheck, label: "Schema-linted" },
  { Icon: FlaskConical, label: "96 tests" },
  { Icon: FileSearch, label: "Every pattern auditable" },
];

const TechTrustSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: "60px 70px" }}>
        <div className="flex flex-col items-center text-center">
          <Kicker delay={0.05}>Confidence + fusion</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 47, lineHeight: 1.04, color: BRAND.ink, marginTop: 14 }}
          >
            A score you can <span className="font-extrabold">stand behind.</span>
          </motion.h1>
        </div>

        {/* corroboration -> fused score */}
        <div className="flex items-center justify-center" style={{ gap: 28, marginTop: 46 }}>
          {/* independent signals vote */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            className="rounded-3xl"
            style={{ width: 420, padding: "22px 26px", background: "rgba(255,255,255,0.72)", border: "1px solid rgba(15,28,24,0.07)", boxShadow: "0 22px 54px -30px rgba(15,40,32,0.4)" }}
          >
            <p className="font-semibold uppercase" style={{ fontSize: 11, letterSpacing: "0.16em", color: BRAND.emerald, marginBottom: 12 }}>Independent signals vote</p>
            {SIGNALS.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.42 + i * 0.09 }}
                className="flex items-center gap-3"
                style={{ padding: "9px 0", borderBottom: i < SIGNALS.length - 1 ? "1px solid rgba(15,28,24,0.06)" : "none" }}
              >
                <span className="grid place-items-center rounded-md shrink-0" style={{ width: 24, height: 24, background: "rgba(34,130,111,0.12)" }}>
                  <Check size={14} color={BRAND.emerald} strokeWidth={2.7} />
                </span>
                <span className="font-semibold tracking-tight" style={{ fontSize: 14.5, color: BRAND.ink }}>{s}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.7 }} className="shrink-0">
            <span className="grid place-items-center rounded-full" style={{ width: 44, height: 44, background: "linear-gradient(135deg, #52FEBF, #22826F)", boxShadow: "0 0 18px rgba(82,254,191,0.5)" }}>
              <ArrowRight size={22} color="#0F1C18" strokeWidth={2.3} />
            </span>
          </motion.div>

          {/* fused score */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: EASE }}
            className="rounded-3xl flex flex-col items-center justify-center text-center relative"
            style={{ width: 300, padding: "30px 26px", background: "linear-gradient(155deg, #22826F 0%, #0F1C18 130%)", border: "1px solid rgba(82,254,191,0.4)", boxShadow: "0 24px 60px -26px rgba(15,40,32,0.6)" }}
          >
            <span aria-hidden className="absolute rounded-full" style={{ inset: -14, background: "radial-gradient(circle, rgba(82,254,191,0.32) 0%, transparent 68%)", filter: "blur(16px)", animation: "deck-breathe 3.4s ease-in-out infinite", zIndex: -1 }} />
            <span className="font-extrabold" style={{ fontSize: 64, lineHeight: 1, color: BRAND.mint }}>0.94</span>
            <span className="font-bold tracking-tight" style={{ fontSize: 16, color: "#F6F6F4", marginTop: 10 }}>Fused confidence</span>
            <span className="font-medium tracking-tight" style={{ fontSize: 12.5, lineHeight: 1.4, color: "rgba(246,246,244,0.66)", marginTop: 5 }}>
              corroborated and fused across both pipelines, near certain
            </span>
          </motion.div>
        </div>

        {/* validated band */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.9 }}
          className="flex items-center justify-center rounded-2xl self-center"
          style={{ marginTop: 38, padding: "6px 4px", background: "rgba(34,130,111,0.06)", border: "1px solid rgba(34,130,111,0.16)" }}
        >
          {VALIDATED.map((v, i) => (
            <div key={v.label} className="flex items-center">
              <div className="flex items-center gap-2.5" style={{ padding: "10px 26px" }}>
                <v.Icon size={17} color={BRAND.emerald} strokeWidth={2.1} />
                <span className="font-semibold tracking-tight" style={{ fontSize: 14.5, color: BRAND.ink }}>{v.label}</span>
              </div>
              {i < VALIDATED.length - 1 && <span className="h-6 w-px" style={{ background: "rgba(15,28,24,0.12)" }} />}
            </div>
          ))}
        </motion.div>
      </div>
    </SlideFrame>
  );
};

export default TechTrustSlide;
