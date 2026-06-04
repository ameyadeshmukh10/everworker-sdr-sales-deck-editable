import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const PIPELINES: { name: string; signals: { source: string; power: string }[] }[] = [
  {
    name: "DNS pipeline",
    signals: [{ source: "DNS record", power: "real infrastructure, can't be faked" }],
  },
  {
    name: "Web pipeline",
    signals: [
      { source: "Rendered global", power: "runtime tools static scanners miss" },
      { source: "Script src", power: "loaded on the page" },
      { source: "Cookie", power: "set in the browser" },
    ],
  },
];

const TechDnsTrustSlide = () => {
  return (
    <SlideFrame tone="dark">
      <div aria-hidden className="absolute rounded-full" style={{ width: 460, height: 460, top: -150, right: -120, background: "rgba(82,254,191,0.14)", filter: "blur(95px)" }} />

      <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: "56px 70px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <Kicker tone="dark" delay={0.05}>Why it&apos;s accurate</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-bold tracking-tight"
            style={{ fontSize: 54, lineHeight: 1.03, color: "#F6F6F4", marginTop: 14 }}
          >
            Detection that <span className="hero-gradient-text">builds a case.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="font-medium tracking-tight"
            style={{ fontSize: 16.5, lineHeight: 1.5, color: "rgba(246,246,244,0.66)", marginTop: 14, maxWidth: 720 }}
          >
            Independent signals, from sources that can&apos;t be faked or hidden, corroborate and fuse
            across pipelines into one near-certain verdict.
          </motion.p>
        </div>

        {/* signals converge to a verdict */}
        <div className="flex items-center justify-center" style={{ gap: 26, marginTop: 38 }}>
          {/* sources vote */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease: EASE }}
            className="rounded-3xl"
            style={{ width: 500, padding: "20px 26px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <p className="font-semibold uppercase" style={{ fontSize: 10.5, letterSpacing: "0.16em", color: "rgba(246,246,244,0.5)", marginBottom: 4 }}>Two pipelines vote</p>
            {PIPELINES.map((pl, pi) => (
              <div key={pl.name} style={{ marginTop: pi === 0 ? 10 : 14 }}>
                <p className="font-semibold uppercase" style={{ fontSize: 9.5, letterSpacing: "0.14em", color: "#52FEBF", marginBottom: 4 }}>{pl.name}</p>
                {pl.signals.map((s, i) => (
                  <motion.div
                    key={s.source}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.46 + (pi * 2 + i) * 0.08 }}
                    className="flex items-center gap-3"
                    style={{ padding: "7px 0", borderBottom: i < pl.signals.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}
                  >
                    <span className="grid place-items-center rounded-md shrink-0" style={{ width: 22, height: 22, background: "rgba(82,254,191,0.16)" }}>
                      <Check size={13} color="#52FEBF" strokeWidth={2.7} />
                    </span>
                    <span className="font-bold tracking-tight" style={{ fontSize: 14.5, color: "#F6F6F4", width: 138 }}>{s.source}</span>
                    <span className="font-medium tracking-tight" style={{ fontSize: 12.5, color: "rgba(246,246,244,0.62)" }}>{s.power}</span>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.8 }} className="shrink-0">
            <span className="grid place-items-center rounded-full" style={{ width: 44, height: 44, background: "linear-gradient(135deg, #52FEBF, #22826F)", boxShadow: "0 0 18px rgba(82,254,191,0.5)" }}>
              <ArrowRight size={22} color="#0F1C18" strokeWidth={2.3} />
            </span>
          </motion.div>

          {/* fused verdict */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.58, ease: EASE }}
            className="rounded-3xl flex flex-col items-center justify-center text-center relative"
            style={{ width: 290, padding: "28px 24px", background: "linear-gradient(155deg, #22826F 0%, #0F1C18 130%)", border: "1px solid rgba(82,254,191,0.4)", boxShadow: "0 24px 60px -26px rgba(15,40,32,0.6)" }}
          >
            <span aria-hidden className="absolute rounded-full" style={{ inset: -14, background: "radial-gradient(circle, rgba(82,254,191,0.32) 0%, transparent 68%)", filter: "blur(16px)", animation: "deck-breathe 3.4s ease-in-out infinite", zIndex: -1 }} />
            <span className="font-extrabold" style={{ fontSize: 60, lineHeight: 1, color: BRAND.mint }}>0.94</span>
            <span className="font-bold tracking-tight" style={{ fontSize: 16, color: "#F6F6F4", marginTop: 10 }}>Fused confidence</span>
            <span className="font-medium tracking-tight" style={{ fontSize: 12.5, lineHeight: 1.4, color: "rgba(246,246,244,0.66)", marginTop: 5 }}>
              independent signals agree across pipelines, near certain
            </span>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
};

export default TechDnsTrustSlide;
