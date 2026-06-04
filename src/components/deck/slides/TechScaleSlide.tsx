import { motion } from "framer-motion";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const STATS: { value: string; label: string; sub: string }[] = [
  { value: "7,528", label: "Vendors", sub: "in the detection library" },
  { value: "108", label: "Categories", sub: "across 12 domains" },
  { value: "2", label: "Pipelines", sub: "DNS + JS / Web, fused" },
  { value: "36", label: "Curated", sub: "hand-tuned signatures" },
];

const TechScaleSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: "70px 80px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <Kicker delay={0.05}>Appendix · Coverage</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-medium tracking-tight"
            style={{ fontSize: 50, lineHeight: 1.04, color: BRAND.ink, marginTop: 18 }}
          >
            One library. <span className="font-extrabold">The whole web stack.</span>
          </motion.h1>
        </div>

        {/* Stat cards */}
        <div className="flex items-stretch justify-center" style={{ gap: 20, marginTop: 52 }}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 + i * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
              className="rounded-2xl flex flex-col items-center text-center"
              style={{
                width: 244,
                padding: "34px 22px 28px",
                background: "linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.9) 100%)",
                border: "1px solid rgba(15,28,24,0.07)",
                boxShadow: "0 20px 48px -28px rgba(15,40,32,0.4)",
              }}
            >
              <span className="font-extrabold tracking-tight" style={{ fontSize: 60, lineHeight: 1, color: BRAND.emerald }}>
                {s.value}
              </span>
              <span className="font-bold tracking-tight" style={{ fontSize: 19, color: BRAND.ink, marginTop: 14 }}>
                {s.label}
              </span>
              <span className="font-medium tracking-tight" style={{ fontSize: 13.5, lineHeight: 1.45, color: "rgba(15,28,24,0.58)", marginTop: 5 }}>
                {s.sub}
              </span>
            </motion.div>
          ))}
        </div>

        {/* footer line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="text-center font-medium tracking-tight"
          style={{ fontSize: 15, color: "rgba(15,28,24,0.55)", marginTop: 44 }}
        >
          7,444 detectable on the web pipeline · 88 on DNS · merged into one taxonomy.
        </motion.p>
      </div>
    </SlideFrame>
  );
};

export default TechScaleSlide;
