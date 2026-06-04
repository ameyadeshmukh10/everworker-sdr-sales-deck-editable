import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SlideFrame, Kicker } from "../primitives";
import logotype from "@/assets/everworker-logotype-black.svg";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const TechClosingSlide = () => {
  return (
    <SlideFrame tone="dark">
      <div aria-hidden className="absolute rounded-full" style={{ width: 500, height: 500, top: -160, left: "50%", marginLeft: -250, background: "rgba(82,254,191,0.1)", filter: "blur(100px)" }} />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ padding: "60px 80px" }}>
        <motion.img
          src={logotype}
          alt="EverWorker"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ height: 28, width: "auto", marginBottom: 38, filter: "brightness(0) invert(1)", opacity: 0.9 }}
        />

        <Kicker tone="dark" delay={0.15}>See it on your accounts</Kicker>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
          className="font-bold tracking-tight"
          style={{ fontSize: 60, lineHeight: 1.02, color: "#F6F6F4", marginTop: 20 }}
        >
          Give your Worker <span className="hero-gradient-text">sharper eyes.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-medium tracking-tight"
          style={{ fontSize: 18, lineHeight: 1.5, color: "rgba(255,255,255,0.66)", marginTop: 22, maxWidth: 600 }}
        >
          Run the technographic engine on your target accounts and watch the SDR AI Worker act on a
          stack it can actually trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex items-center gap-2 rounded-[6px]"
          style={{
            marginTop: 34, padding: "15px 16px 15px 26px",
            background: "linear-gradient(135deg, #52FEBF, #22826F)",
            boxShadow: "0 0 34px rgba(82,254,191,0.4), 0 18px 44px -18px rgba(0,0,0,0.5)",
          }}
        >
          <span className="font-bold tracking-tight" style={{ fontSize: 17, color: "#0F1C18" }}>Book a demo</span>
          <span className="grid place-items-center rounded-[4px]" style={{ width: 26, height: 26, background: "rgba(15,28,24,0.16)" }}>
            <ChevronRight size={16} color="#0F1C18" strokeWidth={2.5} />
          </span>
        </motion.div>
      </div>
    </SlideFrame>
  );
};

export default TechClosingSlide;
