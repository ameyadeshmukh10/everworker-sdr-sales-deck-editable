import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";
import logotype from "@/assets/everworker-logotype-black.svg";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const STATS = [
  { value: "7,528", label: "vendors detectable" },
  { value: "108", label: "categories" },
];

const TechCoverSlide = () => {
  return (
    <SlideFrame tone="dark">
      {/* soft brand orbs for hero depth */}
      <div aria-hidden className="absolute rounded-full" style={{ width: 520, height: 520, top: -170, left: -130, background: "rgba(82,254,191,0.12)", filter: "blur(95px)" }} />
      <div aria-hidden className="absolute rounded-full" style={{ width: 440, height: 440, bottom: -160, right: -110, background: "rgba(34,130,111,0.18)", filter: "blur(95px)" }} />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ padding: "60px 80px" }}>
        <motion.img
          src={logotype}
          alt="EverWorker"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ height: 28, width: "auto", marginBottom: 34, filter: "brightness(0) invert(1)", opacity: 0.92 }}
        />

        <Kicker tone="dark" delay={0.15}>Signal Intelligence · Technographics</Kicker>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
          className="font-bold tracking-tight"
          style={{ fontSize: 64, lineHeight: 1.03, color: "#F6F6F4", marginTop: 20 }}
        >
          See the stack behind
          <br />
          <span className="hero-gradient-text">every account.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-medium tracking-tight"
          style={{ fontSize: 18.5, lineHeight: 1.5, color: "rgba(255,255,255,0.68)", marginTop: 22, maxWidth: 640 }}
        >
          The technographic engine behind the EverWorker SDR AI Worker. Detect the tools a company
          runs across its web presence, and know exactly how sure we are.
        </motion.p>

        {/* stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col items-center"
          style={{ marginTop: 40 }}
        >
          <div className="flex items-center" style={{ gap: 0 }}>
            {STATS.map((s, i) => (
              <div key={s.label} className="flex items-center">
                <div className="flex flex-col items-center px-9">
                  <span className="font-extrabold tracking-tight" style={{ fontSize: 36, lineHeight: 1, color: BRAND.mint }}>
                    {s.value}
                  </span>
                  <span className="font-medium uppercase" style={{ fontSize: 11, letterSpacing: "0.14em", color: "rgba(246,246,244,0.55)", marginTop: 8 }}>
                    {s.label}
                  </span>
                </div>
                {i < STATS.length - 1 && <span className="h-9 w-px" style={{ background: "rgba(255,255,255,0.16)" }} />}
              </div>
            ))}
          </div>

          <span
            className="rounded-full font-semibold tracking-tight flex items-center gap-2"
            style={{ marginTop: 22, fontSize: 13.5, padding: "8px 16px", background: "rgba(82,254,191,0.1)", color: "#CFFBEC", border: "1px solid rgba(82,254,191,0.28)" }}
          >
            <ShieldCheck size={15} color="#52FEBF" strokeWidth={2.3} />
            Confidence-scored, not guessed
          </span>
        </motion.div>
      </div>
    </SlideFrame>
  );
};

export default TechCoverSlide;
