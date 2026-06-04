import { motion } from "framer-motion";
import { Check, EyeOff } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const CHANNELS = ["script srcs", "window globals", "cookies", "headers", "HTML", "meta tags"];

const STATIC_HITS = ["jQuery", "Google Analytics", "Cloudflare"];
const RUNTIME_HITS = ["Microsoft Clarity", "Hotjar", "Demandbase", "Meta Pixel"];

const TechWebPipelineSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col" style={{ padding: "58px 64px 50px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center shrink-0">
          <Kicker delay={0.05}>Appendix · Web pipeline</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 46, lineHeight: 1.04, color: BRAND.ink, marginTop: 12 }}
          >
            Render the page, <span className="font-extrabold">catch what hides.</span>
          </motion.h1>
          {/* channels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="flex flex-wrap items-center justify-center"
            style={{ gap: 8, marginTop: 16, maxWidth: 760 }}
          >
            {CHANNELS.map((c) => (
              <span key={c} className="rounded-full font-semibold tracking-tight" style={{ fontSize: 12.5, padding: "6px 13px", background: "rgba(34,130,111,0.08)", color: BRAND.emerald, border: "1px solid rgba(34,130,111,0.16)" }}>
                {c}
              </span>
            ))}
          </motion.div>
        </div>

        {/* before / after */}
        <div className="flex items-stretch justify-center" style={{ gap: 22, marginTop: 34 }}>
          {/* Static */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.36, ease: EASE }}
            className="rounded-3xl"
            style={{ width: 430, padding: "22px 24px 24px", background: "rgba(255,255,255,0.7)", border: "1px solid rgba(15,28,24,0.07)", boxShadow: "0 20px 50px -30px rgba(15,40,32,0.35)" }}
          >
            <p className="font-bold tracking-tight" style={{ fontSize: 16, color: BRAND.ink }}>Static HTML fetch</p>
            <p className="font-medium tracking-tight" style={{ fontSize: 13, color: "rgba(15,28,24,0.55)", marginTop: 3, marginBottom: 16 }}>What a plain scanner sees</p>
            {STATIC_HITS.map((h) => (
              <Row key={h} label={h} state="hit" />
            ))}
            {RUNTIME_HITS.map((h) => (
              <Row key={h} label={h} state="miss" />
            ))}
          </motion.div>

          {/* Rendered */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.46, ease: EASE }}
            className="rounded-3xl relative"
            style={{ width: 430, padding: "22px 24px 24px", background: "linear-gradient(180deg, rgba(34,130,111,0.07) 0%, rgba(34,130,111,0.02) 100%)", border: "1px solid rgba(34,130,111,0.22)", boxShadow: "0 22px 56px -28px rgba(34,130,111,0.45)" }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold tracking-tight" style={{ fontSize: 16, color: BRAND.ink }}>Rendered (headless Chromium)</p>
                <p className="font-medium tracking-tight" style={{ fontSize: 13, color: "rgba(15,28,24,0.55)", marginTop: 3 }}>Enumerates window.* globals</p>
              </div>
            </div>
            <div style={{ marginTop: 16 }}>
              {STATIC_HITS.map((h) => (
                <Row key={h} label={h} state="hit" />
              ))}
              {RUNTIME_HITS.map((h) => (
                <Row key={h} label={h} state="recovered" />
              ))}
            </div>
          </motion.div>
        </div>

        {/* payoff */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center font-medium tracking-tight"
          style={{ fontSize: 15, color: "rgba(15,28,24,0.6)", marginTop: 26 }}
        >
          Executing the page catches runtime-injected tools static scanners miss, materially raising recall on modern JS sites.
        </motion.p>
      </div>
    </SlideFrame>
  );
};

const Row = ({ label, state }: { label: string; state: "hit" | "miss" | "recovered" }) => {
  const miss = state === "miss";
  const recovered = state === "recovered";
  return (
    <div className="flex items-center gap-3" style={{ padding: "8.5px 0", opacity: miss ? 0.5 : 1 }}>
      <span
        className="grid place-items-center rounded-md shrink-0"
        style={{
          width: 24,
          height: 24,
          background: miss ? "rgba(15,28,24,0.06)" : recovered ? "linear-gradient(135deg, #52FEBF, #22826F)" : "rgba(34,130,111,0.12)",
        }}
      >
        {miss ? <EyeOff size={13} color="rgba(15,28,24,0.45)" strokeWidth={2.2} /> : <Check size={14} color={recovered ? "#0F1C18" : BRAND.emerald} strokeWidth={2.6} />}
      </span>
      <span className="font-semibold tracking-tight" style={{ fontSize: 14.5, color: miss ? "rgba(15,28,24,0.55)" : BRAND.ink }}>{label}</span>
      {miss && <span className="font-medium" style={{ fontSize: 11.5, color: "rgba(15,28,24,0.42)", marginLeft: "auto" }}>not detected</span>}
      {recovered && <span className="font-semibold" style={{ fontSize: 11, color: BRAND.emerald, marginLeft: "auto", textTransform: "uppercase", letterSpacing: "0.08em" }}>recovered</span>}
    </div>
  );
};

export default TechWebPipelineSlide;
