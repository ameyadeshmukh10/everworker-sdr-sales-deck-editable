import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BRAND } from "@/components/deck/primitives";
import { openBookDemo } from "@/components/BookDemoDialog";
import logoMemgraph from "@/assets/logos/memgraph.png";
import logoQnity from "@/assets/logos/qnity.png";
import logoTriplepoint from "@/assets/logos/triplepoint.png";
import logoUsercentrics from "@/assets/logos/usercentrics.png";
import logoOhioState from "@/assets/logos/ohio-state.png";
import logoConnex from "@/assets/logos/connex.png";
import logoProductiv from "@/assets/logos/productiv.png";
import badgeSoc2 from "@/assets/badges/soc2.png";
import badgeIso from "@/assets/badges/iso27001.png";
import badgeGdpr from "@/assets/badges/gdpr.png";

export { BRAND };

export const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

/** Scroll-triggered fade-up. Spread onto a motion element. */
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: EASE },
});

/** Tracked uppercase eyebrow. */
export const Eyebrow = ({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) => (
  <motion.p
    {...fadeUp()}
    className="text-[13px] sm:text-[14px] font-semibold uppercase"
    style={{ letterSpacing: "0.24em", color: tone === "dark" ? BRAND.mint : BRAND.emerald }}
  >
    {children}
  </motion.p>
);

export const LOGOS = [
  { src: logoMemgraph, alt: "Memgraph", h: 26 },
  { src: logoQnity, alt: "Qnity", h: 22 },
  { src: logoTriplepoint, alt: "TriplePoint Capital", h: 30 },
  { src: logoUsercentrics, alt: "Usercentrics", h: 16 },
  { src: logoOhioState, alt: "The Ohio State University", h: 24 },
  { src: logoConnex, alt: "Connex Partners", h: 30 },
  { src: logoProductiv, alt: "Productiv", h: 18 },
];

export const BADGES = [
  { src: badgeSoc2, alt: "SOC 2 Type II" },
  { src: badgeIso, alt: "ISO 27001" },
  { src: badgeGdpr, alt: "GDPR" },
];

/** Grayscale customer logo wall. */
export const LogoWall = ({ label }: { label?: string }) => (
  <div className="flex flex-col items-center">
    {label && (
      <span
        className="font-semibold uppercase text-center"
        style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(15,28,24,0.55)", marginBottom: 22 }}
      >
        {label}
      </span>
    )}
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12">
      {LOGOS.map((l) => (
        <img
          key={l.alt}
          src={l.src}
          alt={l.alt}
          style={{ height: l.h, width: "auto", objectFit: "contain", filter: "grayscale(1)", opacity: 0.62 }}
        />
      ))}
    </div>
  </div>
);

/** SOC2 / ISO / GDPR trust badge row. `tone="dark"` inverts the marks for dark sections. */
export const TrustBadges = ({ tone = "light" }: { tone?: "light" | "dark" }) => (
  <div className="flex items-center gap-3">
    {BADGES.map((b) => (
      <img
        key={b.alt}
        src={b.src}
        alt={b.alt}
        style={{
          height: 30,
          width: 30,
          objectFit: "contain",
          filter: tone === "dark" ? "brightness(0) invert(1)" : undefined,
        }}
      />
    ))}
    <span
      className="font-medium tracking-tight"
      style={{ fontSize: 13, color: tone === "dark" ? "rgba(255,255,255,0.5)" : "rgba(15,28,24,0.58)", marginLeft: 4 }}
    >
      SOC 2 Type II · ISO 27001 · GDPR
    </span>
  </div>
);

/** Primary "Book a demo" + optional secondary CTA. */
export const CtaButtons = ({
  tone = "light",
  secondaryLabel = "See how it works",
  secondaryHref = "#system",
  className = "",
}: {
  tone?: "light" | "dark";
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
}) => (
  <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 ${className}`}>
    <button
      onClick={openBookDemo}
      className="group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-transform hover:-translate-y-0.5"
      style={{
        height: 52,
        padding: "0 28px",
        fontSize: 16,
        color: BRAND.ink,
        background: "linear-gradient(135deg, #52FEBF, #22826F)",
        boxShadow: "0 18px 44px -18px rgba(34,130,111,0.6)",
      }}
    >
      Book a demo
      <ArrowRight size={18} strokeWidth={2.4} className="transition-transform group-hover:translate-x-0.5" />
    </button>
    {secondaryLabel && (
      <a
        href={secondaryHref}
        className="inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-colors"
        style={{
          height: 52,
          padding: "0 26px",
          fontSize: 16,
          color: tone === "dark" ? "#FFFFFF" : BRAND.ink,
          border: tone === "dark" ? "1px solid rgba(255,255,255,0.25)" : "1px solid rgba(15,28,24,0.15)",
        }}
      >
        {secondaryLabel}
      </a>
    )}
  </div>
);

/** Section background helpers shared across the page. */
export const LIGHT_BG =
  "radial-gradient(ellipse 60% 50% at 18% 22%, hsla(164 60% 32% / 0.10) 0%, transparent 70%), radial-gradient(ellipse 55% 60% at 85% 78%, hsla(210 60% 50% / 0.07) 0%, transparent 70%), linear-gradient(180deg, #FBFCFB 0%, #F3F6F4 100%)";

export const DARK_BG =
  "radial-gradient(ellipse 70% 90% at 50% -10%, rgba(82,254,191,0.28) 0%, transparent 55%), linear-gradient(180deg, #0F1C18 0%, #16241f 100%)";
