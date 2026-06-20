import { motion } from "framer-motion";
import { BRAND, EASE, Eyebrow, CtaButtons, TrustBadges, LogoWall, LIGHT_BG } from "./ui";

const HeroSection = () => (
  <section className="relative overflow-hidden" style={{ background: LIGHT_BG }}>
    {/* soft brand orbs */}
    <div aria-hidden className="pointer-events-none absolute rounded-full" style={{ width: 520, height: 520, top: -180, left: -140, background: "rgba(34,130,111,0.12)", filter: "blur(90px)" }} />
    <div aria-hidden className="pointer-events-none absolute rounded-full" style={{ width: 440, height: 440, bottom: -160, right: -120, background: "rgba(82,254,191,0.12)", filter: "blur(90px)" }} />

    <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 pb-20 text-center sm:pt-28 sm:pb-24">
      <Eyebrow>Meet the SDR AI Worker</Eyebrow>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
        className="font-bold tracking-tight"
        style={{ color: BRAND.ink, marginTop: 18, lineHeight: 1.02 }}
      >
        <span className="block text-[44px] sm:text-[60px] lg:text-[72px]">Double your pipeline.</span>
        <span className="block text-[44px] sm:text-[60px] lg:text-[72px] hero-gradient-text">This quarter.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.32 }}
        className="font-medium tracking-tight"
        style={{ fontSize: 19, lineHeight: 1.5, color: "rgba(15,28,24,0.6)", marginTop: 24, maxWidth: 640 }}
      >
        An autonomous AI SDR that turns signals and inbound into booked meetings. 3 to 5x more
        meetings per rep, without new headcount.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.46 }}
        style={{ marginTop: 36 }}
      >
        <CtaButtons />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.58 }}
        style={{ marginTop: 34 }}
      >
        <TrustBadges />
      </motion.div>

      <div style={{ marginTop: 56, width: "100%" }}>
        <LogoWall label="Trusted by revenue teams scaling output, not headcount" />
      </div>
    </div>
  </section>
);

export default HeroSection;
