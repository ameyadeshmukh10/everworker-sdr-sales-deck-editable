import { motion } from "framer-motion";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const MATCH_TYPES: { name: string; note: string }[] = [
  { name: "exact", note: "full value equality" },
  { name: "contains", note: "substring present" },
  { name: "prefix", note: "starts with value" },
  { name: "suffix", note: "ends with value" },
  { name: "regex", note: "anchored expression" },
];

const STRENGTHS: { name: string; value: string }[] = [
  { name: "definitive", value: "1.0" },
  { name: "strong", value: "0.85" },
  { name: "moderate", value: "0.6" },
  { name: "weak", value: "0.3" },
];

const TechApxSchemaSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col" style={{ padding: "52px 64px 48px" }}>
        <div>
          <Kicker delay={0.05}>Appendix · Signature schema</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 38, lineHeight: 1.04, color: BRAND.ink, marginTop: 12 }}
          >
            Every signal is a <span className="font-extrabold">typed, weighted pattern.</span>
          </motion.h1>
        </div>

        {/* Pattern shape */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26, ease: EASE }}
          className="rounded-2xl font-mono"
          style={{ marginTop: 24, padding: "16px 22px", background: "linear-gradient(160deg, #16241f 0%, #0F1C18 120%)", border: "1px solid rgba(82,254,191,0.28)", fontSize: 14, color: "rgba(255,255,255,0.85)" }}
        >
          Pattern = {"{"} <span style={{ color: "#9EF5D4" }}>value</span>, <span style={{ color: "#9EF5D4" }}>match_type</span>, <span style={{ color: "#9EF5D4" }}>strength</span> {"}"}
          <span style={{ color: "rgba(255,255,255,0.45)" }}>  · grouped per vendor across script srcs, JS globals, cookies, headers, HTML, meta, and DNS records</span>
        </motion.div>

        <div className="flex items-stretch" style={{ gap: 22, marginTop: 22 }}>
          {/* Match types */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.36, ease: EASE }}
            className="rounded-3xl flex-1"
            style={{ padding: "20px 24px 12px", background: "rgba(255,255,255,0.72)", border: "1px solid rgba(15,28,24,0.07)", boxShadow: "0 20px 50px -30px rgba(15,40,32,0.4)" }}
          >
            <p className="font-semibold uppercase" style={{ fontSize: 11, letterSpacing: "0.16em", color: BRAND.emerald, marginBottom: 8 }}>5 match types</p>
            {MATCH_TYPES.map((m) => (
              <div key={m.name} className="flex items-center justify-between" style={{ padding: "9px 0", borderBottom: "1px solid rgba(15,28,24,0.05)" }}>
                <span className="font-mono font-semibold" style={{ fontSize: 14, color: BRAND.ink }}>{m.name}</span>
                <span className="font-medium tracking-tight" style={{ fontSize: 13, color: "rgba(15,28,24,0.55)" }}>{m.note}</span>
              </div>
            ))}
            <p className="font-medium tracking-tight" style={{ fontSize: 12, color: "rgba(15,28,24,0.5)", marginTop: 10 }}>Case-insensitive · DNS values dot-normalized</p>
          </motion.div>

          {/* Strength buckets */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.46, ease: EASE }}
            className="rounded-3xl flex-1"
            style={{ padding: "20px 24px 16px", background: "rgba(255,255,255,0.72)", border: "1px solid rgba(15,28,24,0.07)", boxShadow: "0 20px 50px -30px rgba(15,40,32,0.4)" }}
          >
            <p className="font-semibold uppercase" style={{ fontSize: 11, letterSpacing: "0.16em", color: BRAND.emerald, marginBottom: 8 }}>4 strength tiers</p>
            {STRENGTHS.map((s) => (
              <div key={s.name} className="flex items-center justify-between" style={{ padding: "9px 0", borderBottom: "1px solid rgba(15,28,24,0.05)" }}>
                <span className="font-semibold tracking-tight" style={{ fontSize: 14, color: BRAND.ink }}>{s.name}</span>
                <span className="font-mono font-bold" style={{ fontSize: 14, color: BRAND.emerald }}>{s.value}</span>
              </div>
            ))}
            <p className="font-medium tracking-tight" style={{ fontSize: 12, color: "rgba(15,28,24,0.5)", marginTop: 10 }}>base = max strength matched, + 0.05 per extra signal (cap +0.15)</p>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
};

export default TechApxSchemaSlide;
