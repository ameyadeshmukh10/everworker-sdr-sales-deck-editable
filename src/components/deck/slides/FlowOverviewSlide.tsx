import { motion } from "framer-motion";
import {
  Activity,
  Database,
  Sparkles,
  Search,
  Send,
  CalendarCheck,
  Clock,
  Zap,
  RefreshCw,
} from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

type NodeKind = "input" | "work" | "hero" | "win";

const NODES: {
  label: string;
  sub: string;
  Icon: typeof Activity;
  kind: NodeKind;
}[] = [
  { label: "Signals", sub: "intent & inbound", Icon: Activity, kind: "input" },
  { label: "CRM", sub: "system of record", Icon: Database, kind: "input" },
  { label: "SDR AI Worker", sub: "always running", Icon: Sparkles, kind: "hero" },
  { label: "Research", sub: "context per lead", Icon: Search, kind: "work" },
  { label: "Sequencing", sub: "email · LinkedIn · chat", Icon: Send, kind: "work" },
  { label: "Meetings Booked", sub: "synced to CRM", Icon: CalendarCheck, kind: "win" },
];

const PROOF = [
  { Icon: Clock, label: "24/7 Always-On" },
  { Icon: Zap, label: "45-Day Deployment" },
  { Icon: RefreshCw, label: "Logs to Your CRM" },
];

const FlowNode = ({
  node,
  delay,
}: {
  node: (typeof NODES)[number];
  delay: number;
}) => {
  const { label, sub, Icon, kind } = node;
  const isHero = kind === "hero";
  const isWin = kind === "win";

  // size hierarchy: hero dominates, win is emphasized, inputs/work are standard
  const width = isHero ? 206 : isWin ? 182 : 146;

  let cardStyle: React.CSSProperties;
  let iconWrap: React.CSSProperties;
  let labelColor: string;
  let subColor: string;
  let iconColor: string;

  if (isHero) {
    cardStyle = {
      background: "linear-gradient(155deg, #22826F 0%, #0F1C18 115%)",
      border: "1px solid rgba(82,254,191,0.45)",
      boxShadow:
        "0 24px 60px -24px rgba(15,40,32,0.55), 0 0 0 6px rgba(82,254,191,0.06)",
    };
    iconWrap = {
      background: "linear-gradient(135deg, #52FEBF, #22826F)",
      boxShadow: "0 0 22px rgba(82,254,191,0.65)",
    };
    labelColor = "#FFFFFF";
    subColor = "rgba(255,255,255,0.62)";
    iconColor = "#0F1C18";
  } else if (isWin) {
    cardStyle = {
      background: "linear-gradient(150deg, #1C826E 0%, #33B690 60%, #52FEBF 130%)",
      border: "1px solid rgba(82,254,191,0.5)",
      boxShadow: "0 22px 52px -22px rgba(34,130,111,0.6), 0 0 28px rgba(82,254,191,0.32)",
    };
    iconWrap = {
      background: "rgba(255,255,255,0.18)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35)",
    };
    labelColor = "#FFFFFF";
    subColor = "rgba(255,255,255,0.78)";
    iconColor = "#FFFFFF";
  } else {
    cardStyle = {
      background: "linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.9) 100%)",
      border: "1px solid rgba(15,28,24,0.07)",
      boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 18px 40px -26px rgba(15,40,32,0.3)",
    };
    iconWrap = { background: "rgba(34,130,111,0.1)" };
    labelColor = BRAND.ink;
    subColor = "rgba(15,28,24,0.58)";
    iconColor = BRAND.emerald;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 0.61, 0.36, 1] }}
      className="relative shrink-0 rounded-2xl flex flex-col items-center text-center"
      style={{ width, padding: isHero ? "26px 18px" : "20px 14px", ...cardStyle }}
    >
      {/* breathing halo behind the hero */}
      {isHero && (
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
      )}
      <span
        className="grid place-items-center rounded-xl"
        style={{ width: isHero ? 48 : 40, height: isHero ? 48 : 40, ...iconWrap }}
      >
        <Icon size={isHero ? 24 : 20} color={iconColor} strokeWidth={2.1} />
      </span>
      <p
        className="font-bold tracking-tight leading-tight"
        style={{ color: labelColor, fontSize: isHero ? 20 : 16, marginTop: 12 }}
      >
        {label}
      </p>
      <p className="font-medium tracking-tight leading-tight" style={{ color: subColor, fontSize: 12, marginTop: 4 }}>
        {sub}
      </p>
    </motion.div>
  );
};

/** Flowing connector segment between two nodes. */
const Connector = ({ delay }: { delay: number }) => (
  <div className="relative flex-1 mx-1 self-center" style={{ height: 3, minWidth: 16 }}>
    <div className="absolute inset-0 rounded-full" style={{ background: "rgba(15,40,32,0.12)" }} />
    <div
      className="absolute inset-0 rounded-full"
      style={{
        backgroundImage:
          "linear-gradient(90deg, transparent 0%, rgba(82,254,191,0) 28%, #52FEBF 50%, #22826F 64%, transparent 84%)",
        backgroundSize: "220% 100%",
        animation: "deck-flow 2.2s linear infinite",
        animationDelay: `${delay}s`,
      }}
    />
  </div>
);

const FlowOverviewSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "62px 54px 54px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <Kicker delay={0.05}>The SDR AI Worker</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-medium tracking-tight"
            style={{ fontSize: 50, lineHeight: 1.04, color: BRAND.ink, marginTop: 18 }}
          >
            From signal to <span className="font-extrabold">booked meeting.</span>
          </motion.h1>
        </div>

        {/* Pipeline */}
        <div className="relative">
          <div className="relative flex items-center justify-between">
            {NODES.map((node, i) => (
              <div key={node.label} className="flex flex-1 items-center last:flex-none">
                <FlowNode node={node} delay={0.32 + i * 0.12} />
                {i < NODES.length - 1 && <Connector delay={i * 0.36} />}
              </div>
            ))}
          </div>

          {/* Zone captions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-9 flex items-center justify-between"
            style={{ paddingInline: 8 }}
          >
            <ZoneLabel>Inputs from your stack</ZoneLabel>
            <span className="h-px flex-1 mx-6" style={{ background: "rgba(15,40,32,0.1)" }} />
            <ZoneLabel>The worker does the work</ZoneLabel>
            <span className="h-px flex-1 mx-6" style={{ background: "rgba(15,40,32,0.1)" }} />
            <ZoneLabel align="right">Outcome on your calendar</ZoneLabel>
          </motion.div>
        </div>

        {/* Proof points */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.25 }}
          className="flex items-center justify-center"
          style={{ gap: 0 }}
        >
          {PROOF.map((p, i) => (
            <div key={p.label} className="flex items-center">
              <div className="flex items-center gap-2.5 px-7">
                <span
                  className="grid h-8 w-8 place-items-center rounded-lg"
                  style={{ background: "rgba(34,130,111,0.1)" }}
                >
                  <p.Icon size={16} color={BRAND.emerald} strokeWidth={2.2} />
                </span>
                <span className="font-semibold tracking-tight" style={{ fontSize: 16, color: BRAND.ink }}>
                  {p.label}
                </span>
              </div>
              {i < PROOF.length - 1 && <span className="h-7 w-px" style={{ background: "rgba(15,40,32,0.12)" }} />}
            </div>
          ))}
        </motion.div>
      </div>
    </SlideFrame>
  );
};

const ZoneLabel = ({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) => (
  <span
    className="font-semibold uppercase whitespace-nowrap"
    style={{
      fontSize: 11,
      letterSpacing: "0.16em",
      color: "rgba(15,28,24,0.55)",
      textAlign: align,
    }}
  >
    {children}
  </span>
);

export default FlowOverviewSlide;
