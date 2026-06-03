import { motion } from "framer-motion";
import { Radar, ClipboardCheck, Globe, Briefcase, Layers, TrendingUp, Check } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

type Sig = {
  account: string;
  signal: string;
  type: string;
  time: string;
  Icon: typeof Radar;
  hot?: boolean;
};

const SIGNALS: Sig[] = [
  { account: "Acme Corp", signal: "Requested a demo", type: "Inbound", time: "2m", Icon: ClipboardCheck, hot: true },
  { account: "Northwind", signal: "Viewed pricing 3 times this week", type: "Website", time: "18m", Icon: Globe },
  { account: "Globex", signal: "Hiring 5 SDRs", type: "Hiring", time: "1h", Icon: Briefcase },
  { account: "Initech", signal: "Added a competitor's tool", type: "Technographic", time: "3h", Icon: Layers },
  { account: "Hooli", signal: "Raised a $40M Series B", type: "News", time: "today", Icon: TrendingUp },
];

const TYPES = ["Website de-anonymization", "Technographic", "Hiring", "Company news", "Intent / ABM", "Inbound"];

const SignalRow = ({ s, index }: { s: Sig; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -14 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.42, delay: 0.45 + index * 0.1, ease: EASE }}
    className="flex items-center gap-3.5"
    style={{
      padding: "13px 18px",
      borderBottom: "1px solid rgba(15,28,24,0.06)",
      background: s.hot ? "rgba(34,130,111,0.05)" : "transparent",
    }}
  >
    <span
      className="grid place-items-center rounded-lg shrink-0"
      style={{
        width: 38, height: 38,
        background: s.hot ? "linear-gradient(135deg, #22826F, #52FEBF)" : "rgba(34,130,111,0.1)",
        boxShadow: s.hot ? "0 0 16px rgba(82,254,191,0.45)" : "none",
      }}
    >
      <s.Icon size={19} color={s.hot ? "#0F1C18" : BRAND.emerald} strokeWidth={2.2} />
    </span>

    <div className="min-w-0 flex-1">
      <p className="font-bold tracking-tight leading-tight truncate" style={{ fontSize: 14.5, color: BRAND.ink }}>{s.account}</p>
      <p className="font-medium tracking-tight leading-tight truncate" style={{ fontSize: 13, color: "rgba(15,28,24,0.58)", marginTop: 2 }}>{s.signal}</p>
    </div>

    <div className="flex flex-col items-end gap-1.5 shrink-0">
      <span style={{ fontSize: 11, color: "rgba(15,28,24,0.4)", fontWeight: 600 }}>{s.time}</span>
      <span
        className="rounded-md font-bold tracking-tight"
        style={{
          fontSize: 11, padding: "3px 9px",
          background: s.hot ? "linear-gradient(135deg, #1C826E, #33B690)" : "rgba(34,130,111,0.1)",
          color: s.hot ? "#fff" : BRAND.emerald,
          border: s.hot ? "none" : "1px solid rgba(34,130,111,0.2)",
        }}
      >
        {s.type}
      </span>
    </div>
  </motion.div>
);

const SignalsSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col" style={{ padding: "58px 60px 56px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center shrink-0">
          <Kicker delay={0.05}>Signal intelligence</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 50, lineHeight: 1.04, color: BRAND.ink, marginTop: 12 }}
          >
            Know who's in-market. <span className="font-extrabold">Right now.</span>
          </motion.h1>
        </div>

        {/* Body */}
        <div className="flex-1 flex items-center">
          <div className="flex items-stretch w-full" style={{ gap: 44 }}>
            {/* Signal feed */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: EASE }}
              className="relative overflow-hidden rounded-2xl flex flex-col"
              style={{
                flex: "0 0 600px",
                background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.94) 100%)",
                border: "1px solid rgba(15,28,24,0.08)",
                boxShadow: "0 30px 70px -34px rgba(15,40,32,0.4)",
              }}
            >
              <div className="flex items-center justify-between" style={{ padding: "15px 18px", borderBottom: "1px solid rgba(15,28,24,0.07)", background: "#FAFBFB" }}>
                <div className="flex items-center gap-2.5">
                  <Radar size={17} color={BRAND.emerald} strokeWidth={2.2} />
                  <span className="font-bold tracking-tight" style={{ fontSize: 14, color: BRAND.ink }}>In-market signal feed</span>
                </div>
                <span className="flex items-center gap-1.5">
                  <motion.span className="rounded-full" style={{ width: 8, height: 8, background: BRAND.emerald, boxShadow: "0 0 8px rgba(82,254,191,0.8)" }} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} />
                  <span className="font-semibold uppercase" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: "rgba(15,28,24,0.4)" }}>Live</span>
                </span>
              </div>

              <div>
                {SIGNALS.map((s, i) => <SignalRow key={s.account} s={s} index={i} />)}
              </div>

              <div className="flex items-center gap-2" style={{ padding: "12px 18px", background: "#FAFBFB", borderTop: "1px solid rgba(15,28,24,0.06)" }}>
                <Check size={13} color={BRAND.emerald} strokeWidth={2.6} />
                <span className="font-medium tracking-tight" style={{ fontSize: 11.5, color: "rgba(15,28,24,0.6)" }}>
                  Routed to the SDR AI Worker, enriched and sequenced automatically.
                </span>
              </div>
            </motion.div>

            {/* Signal types + payoff */}
            <div className="flex-1 flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="font-bold uppercase tracking-tight"
                style={{ fontSize: 11.5, letterSpacing: "0.16em", color: "rgba(15,28,24,0.45)", marginBottom: 14 }}
              >
                Signal types
              </motion.p>
              <div className="flex flex-wrap" style={{ gap: 8, maxWidth: 420 }}>
                {TYPES.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.06, ease: EASE }}
                    className="rounded-full font-semibold tracking-tight"
                    style={{ fontSize: 13, padding: "7px 14px", background: "rgba(34,130,111,0.08)", border: "1px solid rgba(34,130,111,0.18)", color: BRAND.ink }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="font-semibold tracking-tight"
                style={{ fontSize: 17, lineHeight: 1.5, color: BRAND.ink, marginTop: 26, maxWidth: 420 }}
              >
                We surface the accounts already in-market, and the AI SDR works them before they go cold.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
};

export default SignalsSlide;
