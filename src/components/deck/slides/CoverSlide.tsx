import { motion } from "framer-motion";
import { SlideFrame, Kicker, BRAND } from "../primitives";
import logotype from "@/assets/everworker-logotype-black.svg";
import badgeSoc2 from "@/assets/badges/soc2.png";
import badgeIso from "@/assets/badges/iso27001.png";
import badgeGdpr from "@/assets/badges/gdpr.png";
import logoMemgraph from "@/assets/logos/memgraph.png";
import logoQnity from "@/assets/logos/qnity.png";
import logoTriplepoint from "@/assets/logos/triplepoint.png";
import logoUsercentrics from "@/assets/logos/usercentrics.png";
import logoOhioState from "@/assets/logos/ohio-state.png";
import logoConnex from "@/assets/logos/connex.png";
import logoProductiv from "@/assets/logos/productiv.png";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const LOGOS = [
  { src: logoMemgraph, alt: "Memgraph", h: 26 },
  { src: logoQnity, alt: "Qnity", h: 22 },
  { src: logoTriplepoint, alt: "TriplePoint Capital", h: 30 },
  { src: logoUsercentrics, alt: "Usercentrics", h: 16 },
  { src: logoOhioState, alt: "The Ohio State University", h: 24 },
  { src: logoConnex, alt: "Connex Partners", h: 30 },
  { src: logoProductiv, alt: "Productiv", h: 18 },
];

const BADGES = [
  { src: badgeSoc2, alt: "SOC 2 Type II" },
  { src: badgeIso, alt: "ISO 27001" },
  { src: badgeGdpr, alt: "GDPR" },
];

const CoverSlide = () => {
  return (
    <SlideFrame>
      {/* soft brand orbs for hero depth */}
      <div aria-hidden className="absolute rounded-full" style={{ width: 520, height: 520, top: -160, left: -120, background: "rgba(34,130,111,0.12)", filter: "blur(90px)" }} />
      <div aria-hidden className="absolute rounded-full" style={{ width: 420, height: 420, bottom: -160, right: -100, background: "rgba(82,254,191,0.12)", filter: "blur(90px)" }} />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ padding: "60px 80px" }}>
        <motion.img
          src={logotype}
          alt="EverWorker"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ height: 30, width: "auto", marginBottom: 34 }}
        />

        <Kicker delay={0.15}>Meet the SDR AI Worker</Kicker>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
          className="font-bold tracking-tight"
          style={{ fontSize: 68, lineHeight: 1.02, color: BRAND.ink, marginTop: 20 }}
        >
          Double your pipeline.
          <br />
          <span className="hero-gradient-text">This quarter.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-medium tracking-tight"
          style={{ fontSize: 18.5, lineHeight: 1.5, color: "rgba(15,28,24,0.6)", marginTop: 22, maxWidth: 620 }}
        >
          An autonomous AI SDR that turns signals and inbound into booked meetings. 3 to 5x more meetings per rep, without new headcount.
        </motion.p>

        {/* trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex items-center gap-3"
          style={{ marginTop: 34 }}
        >
          {BADGES.map((b) => (
            <img key={b.alt} src={b.src} alt={b.alt} style={{ height: 30, width: 30, objectFit: "contain" }} />
          ))}
          <span className="font-medium tracking-tight" style={{ fontSize: 13, color: "rgba(15,28,24,0.58)", marginLeft: 4 }}>
            SOC 2 Type II · ISO 27001 · GDPR
          </span>
        </motion.div>

        {/* customer logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col items-center"
          style={{ marginTop: 44 }}
        >
          <span className="font-semibold uppercase" style={{ fontSize: 10.5, letterSpacing: "0.22em", color: "rgba(15,28,24,0.55)", marginBottom: 18 }}>
            Trusted by revenue teams scaling output, not headcount
          </span>
          <div className="flex items-center justify-center" style={{ gap: 40 }}>
            {LOGOS.map((l) => (
              <img key={l.alt} src={l.src} alt={l.alt} style={{ height: l.h, width: "auto", objectFit: "contain", filter: "grayscale(1)", opacity: 0.62 }} />
            ))}
          </div>
        </motion.div>
      </div>
    </SlideFrame>
  );
};

export default CoverSlide;
