import { motion } from "framer-motion";
import { Globe, Radar, ShieldCheck, Database, Sparkles } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

type NodeKind = "input" | "work" | "hero" | "win";

const NODES: {
  label: string;
  sub: string;
  Icon: typeof Globe;
  kind: NodeKind;
}[] = [
  { label: "Account domain", sub: "any company URL", Icon: Globe, kind: "input" },
  { label: "Technographic engine", sub: "DNS + web detection", Icon: Radar, kind: "hero" },
  { label: "Scored stack", sub: "vendors + confidence", Icon: ShieldCheck, kind: "work" },
  { label: "Your CRM", sub: "GTM signal fields", Icon: Database, kind: "work" },
  { label: "SDR AI Worker", sub: "acts on the signal", Icon: Sparkles, kind: "win" },
];

const FlowNode = ({ node, delay }: { node: (typeof NODES)[number]; delay: number }) => {
  const { label, sub, Icon, kind } = node;
  const isHero = kind === "hero";
  const isWin = kind === "win";
  const width = isHero ? 206 : isWin ? 182 : 150;

  let cardStyle: React.CSSProperties;
  let iconWrap: React.CSSProperties;
  let labelColor: string;
  let subColor: string;
  let iconColor: string;

  if (isHero) {
    cardStyle = {
      background: "linear-gradient(155deg, #22826F 0%, #0F1C18 115%)",
      border: "1px solid rgba(82,254,191,0.45)",
      boxShadow: "0 24px 60px -24px rgba(15,40,32,0.55), 0 0 0 6px rgba(82,254,191,0.06)",
    };
    iconWrap = { background: "linear-gradient(135deg, #52FEBF, #22826F)", boxShadow: "0 0 22px rgba(82,254,191,0.65)" };
    labelColor = "#F6F6F4";
    subColor = "rgba(255,255,255,0.62)";
    iconColor = "#0F1C18";
  } else if (isWin) {
    cardStyle = {
      background: "linear-gradient(150deg, #1C826E 0%, #33B690 60%, #52FEBF 130%)",
      border: "1px solid rgba(82,254,191,0.5)",
      boxShadow: "0 22px 52px -22px rgba(34,130,111,0.6), 0 0 28px rgba(82,254,191,0.32)",
    };
    iconWrap = { background: "rgba(255,255,255,0.18)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35)" };
    labelColor = "#F6F6F4";
    subColor = "rgba(255,255,255,0.78)";
    iconColor = "#F6F6F4";
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
      <span className="grid place-items-center rounded-xl" style={{ width: isHero ? 48 : 40, height: isHero ? 48 : 40, ...iconWrap }}>
        <Icon size={isHero ? 24 : 20} color={iconColor} strokeWidth={2.1} />
      </span>
      <p className="font-bold tracking-tight leading-tight" style={{ color: labelColor, fontSize: isHero ? 19 : 15.5, marginTop: 12 }}>
        {label}
      </p>
      <p className="font-medium tracking-tight leading-tight" style={{ color: subColor, fontSize: 12, marginTop: 4 }}>
        {sub}
      </p>
    </motion.div>
  );
};

const Connector = ({ delay }: { delay: number }) => (
  <div className="relative flex-1 mx-1 self-center" style={{ height: 3, minWidth: 16 }}>
    <div className="absolute inset-0 rounded-full" style={{ background: "rgba(15,40,32,0.12)" }} />
    <div
      className="absolute inset-0 rounded-full"
      style={{
        backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(82,254,191,0) 28%, #52FEBF 50%, #22826F 64%, transparent 84%)",
        backgroundSize: "220% 100%",
        animation: "deck-flow 2.2s linear infinite",
        animationDelay: `${delay}s`,
      }}
    />
  </div>
);

const TechWhereThisFitsSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "64px 54px 58px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <Kicker delay={0.05}>Where this fits</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-medium tracking-tight"
            style={{ fontSize: 48, lineHeight: 1.05, color: BRAND.ink, marginTop: 18 }}
          >
            The signal layer the <span className="font-extrabold">Worker runs on.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="font-medium tracking-tight"
            style={{ fontSize: 17, lineHeight: 1.5, color: "rgba(15,28,24,0.6)", marginTop: 14, maxWidth: 720 }}
          >
            Zoom in on the SDR AI Worker&apos;s Signal Intelligence. Every account starts as a domain
            and ends as a confidence-scored stack your Worker can act on.
          </motion.p>
        </div>

        {/* Pipeline */}
        <div className="relative flex items-center justify-between">
          {NODES.map((node, i) => (
            <div key={node.label} className="flex flex-1 items-center last:flex-none">
              <FlowNode node={node} delay={0.34 + i * 0.12} />
              {i < NODES.length - 1 && <Connector delay={i * 0.36} />}
            </div>
          ))}
        </div>

        {/* footer caption */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.15 }}
          className="flex items-center justify-center"
        >
          <span className="font-semibold uppercase" style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(15,28,24,0.5)" }}>
            One domain in · a scored, GTM-ready technology profile out
          </span>
        </motion.div>
      </div>
    </SlideFrame>
  );
};

export default TechWhereThisFitsSlide;
