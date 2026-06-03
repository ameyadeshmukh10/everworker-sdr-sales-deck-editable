import { motion } from "framer-motion";
import { Sparkles, AtSign, Flame, Server, ShieldCheck, Check } from "lucide-react";
import { FaMicrosoft } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

type Comp = {
  label: string;
  sub: string;
  render: (size: number) => React.ReactNode;
  chipBg: string;
};

const COMPONENTS: Comp[] = [
  {
    label: "Sending Domains",
    sub: "authenticated · SPF/DKIM",
    chipBg: "rgba(34,130,111,0.1)",
    render: (s) => <AtSign size={s} color={BRAND.emerald} strokeWidth={2.1} />,
  },
  {
    label: "Microsoft Inboxes",
    sub: "Outlook · Microsoft 365",
    chipBg: "rgba(0,120,212,0.1)",
    render: (s) => <FaMicrosoft size={s} color="#0078D4" />,
  },
  {
    label: "Google Inboxes",
    sub: "Workspace · Gmail",
    chipBg: "rgba(234,67,53,0.1)",
    render: (s) => <SiGmail size={s} color="#EA4335" />,
  },
  {
    label: "Private AI Warmup Pool",
    sub: "ramps sender reputation",
    chipBg: "rgba(34,130,111,0.1)",
    render: (s) => <Flame size={s} color={BRAND.emerald} strokeWidth={2.1} />,
  },
  {
    label: "Dedicated IP Mail Servers",
    sub: "max 100 accounts / server",
    chipBg: "rgba(34,130,111,0.1)",
    render: (s) => <Server size={s} color={BRAND.emerald} strokeWidth={2.1} />,
  },
  {
    label: "Deliverability Optimization",
    sub: "monitored and tuned",
    chipBg: "rgba(34,130,111,0.1)",
    render: (s) => <ShieldCheck size={s} color={BRAND.emerald} strokeWidth={2.1} />,
  },
];

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
      sends from ▸
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

const ComponentCard = ({ c, index }: { c: Comp; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.42, delay: 0.5 + index * 0.07, ease: EASE }}
    className="flex items-center gap-3.5 rounded-xl"
    style={{
      padding: "16px 18px",
      background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.92) 100%)",
      border: "1px solid rgba(15,28,24,0.07)",
      boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 14px 32px -24px rgba(15,40,32,0.3)",
    }}
  >
    <span className="grid place-items-center rounded-lg shrink-0" style={{ width: 42, height: 42, background: c.chipBg }}>
      {c.render(21)}
    </span>
    <div className="min-w-0">
      <p className="font-bold tracking-tight leading-tight" style={{ fontSize: 15.5, color: BRAND.ink }}>
        {c.label}
      </p>
      <p className="font-medium tracking-tight leading-tight" style={{ fontSize: 12, color: "rgba(15,28,24,0.58)", marginTop: 3 }}>
        {c.sub}
      </p>
    </div>
  </motion.div>
);

const EmailInfraSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "60px 54px 50px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <Kicker delay={0.05}>Built-in email infrastructure</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 50, lineHeight: 1.04, color: BRAND.ink, marginTop: 16 }}
          >
            Email infrastructure, <span className="font-extrabold">done for you.</span>
          </motion.h1>
        </div>

        {/* Diagram: sender -> platform container */}
        <div className="flex items-stretch justify-center">
          <SenderNode />
          <Connector />

          {/* Platform container */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.34, ease: EASE }}
            className="relative rounded-3xl"
            style={{
              flex: 1,
              maxWidth: 880,
              padding: "22px 26px 26px",
              background:
                "linear-gradient(180deg, rgba(34,130,111,0.05) 0%, rgba(34,130,111,0.02) 100%)",
              border: "1px solid rgba(34,130,111,0.16)",
              boxShadow: "0 28px 70px -36px rgba(15,40,32,0.4)",
            }}
          >
            {/* Platform header */}
            <div className="flex items-center justify-between" style={{ marginBottom: 18 }}>
              <div className="flex items-center gap-2.5">
                <span
                  className="grid place-items-center rounded-md"
                  style={{
                    width: 26,
                    height: 26,
                    background: "linear-gradient(135deg, #52FEBF, #22826F)",
                    boxShadow: "0 0 14px rgba(82,254,191,0.5)",
                  }}
                >
                  <Check size={15} color="#0F1C18" strokeWidth={3} />
                </span>
                <span
                  className="font-bold uppercase"
                  style={{ fontSize: 12.5, letterSpacing: "0.16em", color: BRAND.emerald }}
                >
                  Everworker Email Platform
                </span>
              </div>
              <div className="flex items-center gap-2">
                {["Configured", "Integrated", "Managed"].map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 rounded-full"
                    style={{
                      padding: "5px 11px",
                      background: "rgba(34,130,111,0.08)",
                      border: "1px solid rgba(34,130,111,0.16)",
                    }}
                  >
                    <Check size={11} color={BRAND.emerald} strokeWidth={3} />
                    <span className="font-semibold tracking-tight" style={{ fontSize: 12, color: BRAND.emerald }}>
                      {t}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* 3x2 component grid */}
            <div className="grid grid-cols-3 gap-3.5">
              {COMPONENTS.map((c, i) => (
                <ComponentCard key={c.label} c={c} index={i} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom caption */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex items-center justify-center gap-2.5"
        >
          <span className="grid h-7 w-7 place-items-center rounded-lg" style={{ background: "rgba(34,130,111,0.1)" }}>
            <Check size={15} color={BRAND.emerald} strokeWidth={3} />
          </span>
          <span className="font-semibold tracking-tight" style={{ fontSize: 16.5, color: BRAND.ink }}>
            All configured, integrated and bundled in. Nothing for you to set up or manage.
          </span>
        </motion.div>
      </div>
    </SlideFrame>
  );
};

export default EmailInfraSlide;
