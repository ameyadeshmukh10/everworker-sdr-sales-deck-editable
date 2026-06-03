import { motion } from "framer-motion";
import {
  Zap,
  BrainCircuit,
  Bot,
  Radar,
  Network,
  Database,
  Mail,
  Sparkles,
  Building2,
  CalendarCheck,
  Search,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

/* ---- generic positioned node card ---- */
const ArchNode = ({
  title,
  sub,
  icon,
  x,
  y,
  w,
  h,
  delay,
  iconBg = "rgba(34,130,111,0.1)",
}: {
  title: string;
  sub: string;
  icon: React.ReactNode;
  x: number;
  y: number;
  w: number;
  h: number;
  delay: number;
  iconBg?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.94 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.45, delay, ease: EASE }}
    className="absolute flex items-center gap-3 rounded-2xl"
    style={{
      left: x,
      top: y,
      width: w,
      height: h,
      padding: "0 16px",
      background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.92) 100%)",
      border: "1px solid rgba(15,28,24,0.07)",
      boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 18px 40px -26px rgba(15,40,32,0.3)",
    }}
  >
    <span className="grid place-items-center rounded-xl shrink-0" style={{ width: 42, height: 42, background: iconBg }}>
      {icon}
    </span>
    <div className="min-w-0">
      <p className="font-bold tracking-tight leading-tight" style={{ fontSize: 16, color: BRAND.ink }}>{title}</p>
      <p className="font-medium tracking-tight leading-snug" style={{ fontSize: 11.5, color: "rgba(15,28,24,0.58)", marginTop: 3 }}>{sub}</p>
    </div>
  </motion.div>
);

/* ---- flowing connectors ---- */
const HConn = ({ x, y, w, delay = 0 }: { x: number; y: number; w: number; delay?: number }) => (
  <div className="absolute rounded-full" style={{ left: x, top: y, width: w, height: 3 }}>
    <div className="absolute inset-0 rounded-full" style={{ background: "rgba(15,40,32,0.12)" }} />
    <div
      className="absolute inset-0 rounded-full"
      style={{
        backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(82,254,191,0) 24%, #52FEBF 50%, #22826F 66%, transparent 86%)",
        backgroundSize: "220% 100%",
        animation: "deck-flow 2.1s linear infinite",
        animationDelay: `${delay}s`,
      }}
    />
  </div>
);

const VConn = ({ x, y, h, dir }: { x: number; y: number; h: number; dir: "down" | "up" }) => (
  <div className="absolute" style={{ left: x, top: y, width: 3, height: h }}>
    <div
      className="absolute inset-0 rounded-full"
      style={{
        background:
          dir === "down"
            ? "linear-gradient(180deg, #22826F 0%, #52FEBF 100%)"
            : "linear-gradient(0deg, #22826F 0%, #52FEBF 100%)",
        opacity: 0.85,
      }}
    />
  </div>
);

const CoreChip = ({ label }: { label: string }) => (
  <span
    className="rounded-md font-semibold tracking-tight"
    style={{ fontSize: 9.5, padding: "3px 7px", background: "rgba(82,254,191,0.16)", color: "#CFFBEC", border: "1px solid rgba(82,254,191,0.28)" }}
  >
    {label}
  </span>
);

const CONNECTOR_ITEMS = [
  { label: "CRM", node: <Database size={16} color={BRAND.emerald} strokeWidth={2.1} /> },
  { label: "Email infrastructure", node: <Mail size={16} color={BRAND.emerald} strokeWidth={2.1} /> },
  { label: "LinkedIn infrastructure", node: <FaLinkedin size={15} color="#0A66C2" /> },
  { label: "LLM endpoints", node: <Sparkles size={16} color={BRAND.emerald} strokeWidth={2.1} /> },
  { label: "B2B data providers", node: <Building2 size={16} color={BRAND.emerald} strokeWidth={2.1} /> },
  { label: "Meeting scheduling", node: <CalendarCheck size={16} color={BRAND.emerald} strokeWidth={2.1} /> },
  { label: "Tool calls · search · scrape · enrich", node: <Search size={16} color={BRAND.emerald} strokeWidth={2.1} /> },
];

const SystemArchitectureSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col" style={{ padding: "54px 54px 40px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center shrink-0">
          <Kicker delay={0.05}>Customized to your GTM</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 50, lineHeight: 1.04, color: BRAND.ink, marginTop: 12 }}
          >
            An autonomous <span className="font-extrabold">multi-agent system.</span>
          </motion.h1>
        </div>

        {/* Diagram area (1172 x ~470) */}
        <div className="relative w-full" style={{ height: 470, marginTop: 14 }}>
          {/* connectors (under nodes) */}
          <HConn x={182} y={233} w={138} delay={0} />
          <VConn x={428} y={112} h={50} dir="down" />
          <VConn x={428} y={310} h={50} dir="up" />
          <HConn x={544} y={233} w={268} delay={0.4} />

          {/* Triggers (left) */}
          <ArchNode
            title="Triggers"
            sub="schedules · chat · CRM list · CSV · data pull"
            icon={<Zap size={21} color={BRAND.emerald} strokeWidth={2.1} />}
            x={2} y={181} w={184} h={108} delay={0.5}
          />

          {/* Context Engine (top) */}
          <ArchNode
            title="Context Engine"
            sub="personas · messaging · offers · proof · style"
            icon={<BrainCircuit size={21} color={BRAND.emerald} strokeWidth={2.1} />}
            x={280} y={24} w={300} h={86} delay={0.62}
          />

          {/* Signal Intelligence (bottom) */}
          <ArchNode
            title="Signal Intelligence Layer"
            sub="technographic · hiring · news · deanonymization · ABM"
            icon={<Radar size={21} color={BRAND.emerald} strokeWidth={2.1} />}
            x={280} y={362} w={300} h={86} delay={0.74}
          />

          {/* Core (center) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.34, ease: EASE }}
            className="absolute rounded-2xl flex flex-col items-center justify-center text-center"
            style={{
              left: 318, top: 158, width: 226, height: 152, padding: "16px 16px",
              background: "linear-gradient(155deg, #22826F 0%, #0F1C18 120%)",
              border: "1px solid rgba(82,254,191,0.45)",
              boxShadow: "0 24px 60px -24px rgba(15,40,32,0.6), 0 0 0 6px rgba(82,254,191,0.06)",
            }}
          >
            <span aria-hidden className="absolute rounded-full" style={{ inset: -16, background: "radial-gradient(circle, rgba(82,254,191,0.42) 0%, transparent 68%)", filter: "blur(14px)", animation: "deck-breathe 3.4s ease-in-out infinite", zIndex: -1 }} />
            <span className="grid place-items-center rounded-xl" style={{ width: 44, height: 44, background: "linear-gradient(135deg, #52FEBF, #22826F)", boxShadow: "0 0 22px rgba(82,254,191,0.65)" }}>
              <Bot size={23} color="#0F1C18" strokeWidth={2.1} />
            </span>
            <p className="font-bold tracking-tight leading-tight text-white" style={{ fontSize: 18, marginTop: 9 }}>SDR AI Agents</p>
            <p className="font-semibold uppercase" style={{ fontSize: 9.5, letterSpacing: "0.14em", color: "#52FEBF", marginTop: 5 }}>the multi-agent core</p>
            <div className="flex flex-wrap items-center justify-center gap-1.5" style={{ marginTop: 10 }}>
              {["Research", "Sequencing", "Analytics", "Meetings"].map((c) => <CoreChip key={c} label={c} />)}
            </div>
          </motion.div>

          {/* Universal Connector panel (right) */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.46, ease: EASE }}
            className="absolute rounded-3xl flex flex-col"
            style={{
              left: 812, top: 14, width: 350, height: 442, padding: "16px 18px",
              background: "linear-gradient(180deg, rgba(34,130,111,0.06) 0%, rgba(34,130,111,0.02) 100%)",
              border: "1px solid rgba(34,130,111,0.18)",
              boxShadow: "0 28px 70px -36px rgba(15,40,32,0.4)",
            }}
          >
            <div className="flex items-center gap-2.5" style={{ marginBottom: 12 }}>
              <span className="grid place-items-center rounded-lg" style={{ width: 30, height: 30, background: "linear-gradient(135deg, #52FEBF, #22826F)", boxShadow: "0 0 14px rgba(82,254,191,0.5)" }}>
                <Network size={17} color="#0F1C18" strokeWidth={2.2} />
              </span>
              <span className="font-bold uppercase" style={{ fontSize: 12, letterSpacing: "0.14em", color: BRAND.emerald }}>Universal Connector</span>
            </div>
            <div className="flex flex-col flex-1 justify-between">
              {CONNECTOR_ITEMS.map((it, i) => (
                <motion.div
                  key={it.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.7 + i * 0.06, ease: EASE }}
                  className="flex items-center gap-3 rounded-lg"
                  style={{ padding: "8px 11px", background: "rgba(255,255,255,0.7)", border: "1px solid rgba(15,28,24,0.06)" }}
                >
                  <span className="grid place-items-center rounded-md shrink-0" style={{ width: 30, height: 30, background: "rgba(34,130,111,0.08)" }}>
                    {it.node}
                  </span>
                  <span className="font-semibold tracking-tight" style={{ fontSize: 12.5, color: BRAND.ink }}>{it.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
};

export default SystemArchitectureSlide;
