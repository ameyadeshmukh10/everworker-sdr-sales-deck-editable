import { motion } from "framer-motion";
import { SlideFrame, Kicker } from "../primitives";
import logotype from "@/assets/everworker-logotype-black.svg";
import badgeSoc2 from "@/assets/badges/soc2.png";
import badgeIso from "@/assets/badges/iso27001.png";
import badgeGdpr from "@/assets/badges/gdpr.png";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const BADGES = [badgeSoc2, badgeIso, badgeGdpr];

const ClosingSlide = () => {
  return (
    <SlideFrame tone="dark">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ padding: "60px 80px" }}>
        <motion.img
          src={logotype}
          alt="EverWorker"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ height: 28, width: "auto", marginBottom: 38, filter: "brightness(0) invert(1)", opacity: 0.9 }}
        />

        <Kicker tone="dark" delay={0.15}>Get started</Kicker>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
          className="font-bold tracking-tight"
          style={{ fontSize: 64, lineHeight: 1.02, color: "#FFFFFF", marginTop: 20 }}
        >
          Ready to <span className="hero-gradient-text">2x your meetings?</span>
        </motion.h1>

        {/* trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center gap-3"
          style={{ marginTop: 46 }}
        >
          {BADGES.map((b, i) => (
            <img key={i} src={b} alt="" style={{ height: 28, width: 28, objectFit: "contain", filter: "brightness(0) invert(1)" }} />
          ))}
          <span className="font-medium tracking-tight" style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)", marginLeft: 4 }}>
            SOC 2 Type II · ISO 27001 · GDPR
          </span>
        </motion.div>
      </div>
    </SlideFrame>
  );
};

export default ClosingSlide;
