import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
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

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-medium tracking-tight"
          style={{ fontSize: 18.5, lineHeight: 1.5, color: "rgba(255,255,255,0.66)", marginTop: 22, maxWidth: 600 }}
        >
          See the SDR AI Worker run on your actual inbound flow. Live demo, your data, your playbook.
        </motion.p>

        {/* CTA */}
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

        {/* trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex items-center gap-3"
          style={{ marginTop: 46 }}
        >
          {BADGES.map((b, i) => (
            <img key={i} src={b} alt="" style={{ height: 28, width: 28, objectFit: "contain" }} />
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
