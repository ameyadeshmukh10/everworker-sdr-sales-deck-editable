import { motion } from "framer-motion";
import { Sparkles, Globe, Shuffle, Snowflake, Clock, BadgeCheck } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];
const LI_BLUE = "#0A66C2";

type Mech = { label: string; sub: string; render: (s: number) => React.ReactNode };

const MECHANICS: Mech[] = [
  {
    label: "Dedicated Proxies & IP Rotation",
    sub: "residential-grade IP per account",
    render: (s) => <Globe size={s} color={BRAND.emerald} strokeWidth={2.1} />,
  },
  {
    label: "Sender Rotation",
    sub: "50+ accounts, auto-balanced",
    render: (s) => <Shuffle size={s} color={BRAND.emerald} strokeWidth={2.1} />,
  },
  {
    label: "Rate Limiting & Auto-Freeze",
    sub: "holds accounts before limits",
    render: (s) => <Snowflake size={s} color={BRAND.emerald} strokeWidth={2.1} />,
  },
  {
    label: "Randomized Human-Pattern Timing",
    sub: "human cadence, business hours",
    render: (s) => <Clock size={s} color={BRAND.emerald} strokeWidth={2.1} />,
  },
];

const SENDERS = ["AK", "MR", "PS", "LP", "JT"];

const SenderNode = () => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
    className="relative shrink-0 rounded-2xl flex flex-col items-center text-center"
    style={{
      width: 196,
      padding: "26px 18px",
      background: "linear-gradient(155deg, #22826F 0%, #0F1C18 115%)",
      border: "1px solid rgba(82,254,191,0.45)",
      boxShadow: "0 24px 60px -24px rgba(15,40,32,0.55), 0 0 0 6px rgba(82,254,191,0.06)",
    }}
  >
    <span
      aria-hidden
      className="absolute rounded-full"
      style={{
        inset: -18,
        background: "radial-gradient(circle, rgba(82,254,191,0.4) 0%, transparent 68%)",
        filter: "blur(14px)",
        animation: "deck-breathe 3.4s ease-in-out infinite",
        zIndex: -1,
      }}
    />
    <span
      className="grid place-items-center rounded-xl"
      style={{
        width: 48,
        height: 48,
        background: "linear-gradient(135deg, #52FEBF, #22826F)",
        boxShadow: "0 0 22px rgba(82,254,191,0.65)",
      }}
    >
      <Sparkles size={24} color="#0F1C18" strokeWidth={2.1} />
    </span>
    <p className="font-bold tracking-tight leading-tight text-white" style={{ fontSize: 19, marginTop: 12 }}>
      SDR AI Worker
    </p>
    <p
      className="font-semibold uppercase"
      style={{ fontSize: 10.5, letterSpacing: "0.16em", color: "#52FEBF", marginTop: 8 }}
    >
      operates via ▸
    </p>
  </motion.div>
);

const Connector = () => (
  <div className="relative self-center mx-3" style={{ width: 64, height: 3 }}>
    <div className="absolute inset-0 rounded-full" style={{ background: "rgba(15,40,32,0.12)" }} />
    <div
      className="absolute inset-0 rounded-full"
      style={{
        backgroundImage:
          "linear-gradient(90deg, transparent 0%, rgba(82,254,191,0) 24%, #52FEBF 50%, #22826F 66%, transparent 86%)",
        backgroundSize: "220% 100%",
        animation: "deck-flow 2.1s linear infinite",
      }}
    />
  </div>
);

const MechCard = ({ m, index }: { m: Mech; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.42, delay: 0.5 + index * 0.08, ease: EASE }}
    className="flex items-center gap-3.5 rounded-xl"
    style={{
      padding: "16px 18px",
      background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.92) 100%)",
      border: "1px solid rgba(15,28,24,0.07)",
      boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 14px 32px -24px rgba(15,40,32,0.3)",
    }}
  >
    <span className="grid place-items-center rounded-lg shrink-0" style={{ width: 44, height: 44, background: "rgba(34,130,111,0.1)" }}>
      {m.render(22)}
    </span>
    <div className="min-w-0">
      <p className="font-bold tracking-tight leading-tight" style={{ fontSize: 15.5, color: BRAND.ink }}>
        {m.label}
      </p>
      <p className="font-medium tracking-tight leading-tight" style={{ fontSize: 12.5, color: "rgba(15,28,24,0.58)", marginTop: 3 }}>
        {m.sub}
      </p>
    </div>
  </motion.div>
);

const LinkedInInfraSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "58px 54px 48px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <Kicker delay={0.05}>Built-in LinkedIn infrastructure</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 50, lineHeight: 1.04, color: BRAND.ink, marginTop: 14 }}
          >
            LinkedIn infrastructure, <span className="font-extrabold">done for you.</span>
          </motion.h1>
        </div>

        {/* Diagram */}
        <div className="flex items-stretch justify-center">
          <SenderNode />
          <Connector />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.34, ease: EASE }}
            className="relative rounded-3xl flex flex-col"
            style={{
              flex: 1,
              maxWidth: 880,
              padding: "20px 24px 22px",
              background: "linear-gradient(180deg, rgba(34,130,111,0.05) 0%, rgba(34,130,111,0.02) 100%)",
              border: "1px solid rgba(34,130,111,0.16)",
              boxShadow: "0 28px 70px -36px rgba(15,40,32,0.4)",
            }}
          >
            {/* Platform header: title (left) + senders cluster (right) */}
            <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
              <div className="flex items-center gap-2.5">
                <FaLinkedin size={22} color={LI_BLUE} />
                <span className="font-bold uppercase" style={{ fontSize: 12.5, letterSpacing: "0.16em", color: BRAND.emerald }}>
                  Everworker LinkedIn Platform
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  {SENDERS.map((s, i) => (
                    <span
                      key={s}
                      className="grid place-items-center rounded-full text-white font-bold"
                      style={{
                        width: 28,
                        height: 28,
                        fontSize: 10.5,
                        marginLeft: i === 0 ? 0 : -8,
                        background: "linear-gradient(135deg, #22826F, #52FEBF)",
                        border: "2px solid #F7F9F8",
                        zIndex: SENDERS.length - i,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                  <span
                    className="grid place-items-center rounded-full font-bold"
                    style={{ width: 28, height: 28, fontSize: 10, marginLeft: -8, background: "#0F1C18", color: "#52FEBF", border: "2px solid #F7F9F8" }}
                  >
                    +45
                  </span>
                </div>
                <span className="font-semibold tracking-tight" style={{ fontSize: 12, color: "rgba(15,28,24,0.55)" }}>
                  50+ senders · auto-rotated
                </span>
              </div>
            </div>

            {/* 2x2 mechanics grid */}
            <div className="grid grid-cols-2 gap-3.5">
              {MECHANICS.map((m, i) => (
                <MechCard key={m.label} m={m} index={i} />
              ))}
            </div>

            {/* Rental banner */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.86, ease: EASE }}
              className="flex items-center gap-3.5 rounded-xl"
              style={{
                marginTop: 14,
                padding: "14px 18px",
                background: "linear-gradient(135deg, rgba(34,130,111,0.12) 0%, rgba(82,254,191,0.1) 100%)",
                border: "1px solid rgba(34,130,111,0.22)",
              }}
            >
              <span
                className="grid place-items-center rounded-lg shrink-0"
                style={{ width: 40, height: 40, background: "linear-gradient(135deg, #22826F, #52FEBF)", boxShadow: "0 0 16px rgba(82,254,191,0.45)" }}
              >
                <BadgeCheck size={21} color="#fff" strokeWidth={2.2} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-bold tracking-tight leading-tight" style={{ fontSize: 15.5, color: BRAND.ink }}>
                  ID-Verified Real Account Rental
                </p>
                <p className="font-medium tracking-tight leading-tight" style={{ fontSize: 12.5, color: "rgba(15,28,24,0.55)", marginTop: 2 }}>
                  verified, real LinkedIn accounts to scale further
                </p>
              </div>
              <span
                className="font-bold uppercase rounded-full shrink-0"
                style={{ fontSize: 11, letterSpacing: "0.12em", color: BRAND.emerald, padding: "5px 12px", background: "rgba(255,255,255,0.7)", border: "1px solid rgba(34,130,111,0.2)" }}
              >
                Scale
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom caption */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.05 }}
          className="flex items-center justify-center gap-2.5"
        >
          <span className="grid h-7 w-7 place-items-center rounded-lg" style={{ background: "rgba(34,130,111,0.1)" }}>
            <BadgeCheck size={15} color={BRAND.emerald} strokeWidth={2.5} />
          </span>
          <span className="font-semibold tracking-tight" style={{ fontSize: 16.5, color: BRAND.ink }}>
            Every account stays within human-plausible limits, automatically.
          </span>
        </motion.div>
      </div>
    </SlideFrame>
  );
};

export default LinkedInInfraSlide;
