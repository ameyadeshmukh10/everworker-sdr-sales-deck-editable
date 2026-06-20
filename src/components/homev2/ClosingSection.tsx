import { motion } from "framer-motion";
import { Eyebrow, fadeUp, CtaButtons, TrustBadges, DARK_BG } from "./ui";
import logotype from "@/assets/everworker-logotype-black.svg";

const ClosingSection = () => (
  <section className="relative overflow-hidden" style={{ background: DARK_BG }}>
    <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:py-28">
      <motion.img
        {...fadeUp()}
        src={logotype}
        alt="EverWorker"
        style={{ height: 28, width: "auto", marginBottom: 34, filter: "brightness(0) invert(1)", opacity: 0.9 }}
      />

      <Eyebrow tone="dark">Get started</Eyebrow>

      <motion.h2 {...fadeUp(0.12)} className="font-bold tracking-tight" style={{ color: "#FFFFFF", marginTop: 18, lineHeight: 1.03 }}>
        <span className="text-[40px] sm:text-[56px] lg:text-[64px]">
          Ready to <span className="hero-gradient-text">2x your meetings?</span>
        </span>
      </motion.h2>

      <motion.div {...fadeUp(0.24)} style={{ marginTop: 36 }}>
        <CtaButtons tone="dark" secondaryLabel="See pricing" secondaryHref="#pricing" />
      </motion.div>

      <motion.div {...fadeUp(0.34)} style={{ marginTop: 40 }}>
        <TrustBadges tone="dark" />
      </motion.div>
    </div>
  </section>
);

export default ClosingSection;
