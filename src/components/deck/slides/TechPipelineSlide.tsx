import { motion } from "framer-motion";
import { Globe, Server, Code2, Filter, GitMerge, ListOrdered } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const Node = ({
  title,
  sub,
  icon,
  x,
  y,
  w,
  h,
  delay,
}: {
  title: string;
  sub?: string;
  icon: React.ReactNode;
  x: number;
  y: number;
  w: number;
  h: number;
  delay: number;
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
      background: "linear-gradient(180deg, #F6F6F4 0%, rgba(255,255,255,0.92) 100%)",
      border: "1px solid rgba(15,28,24,0.07)",
      boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 18px 40px -26px rgba(15,40,32,0.3)",
    }}
  >
    <span className="grid place-items-center rounded-xl shrink-0" style={{ width: 40, height: 40, background: "rgba(34,130,111,0.1)" }}>
      {icon}
    </span>
    <div className="min-w-0">
      <p className="font-bold tracking-tight leading-tight" style={{ fontSize: 15.5, color: BRAND.ink }}>{title}</p>
      {sub && <p className="font-medium tracking-tight leading-snug" style={{ fontSize: 11, color: "rgba(15,28,24,0.55)", marginTop: 3 }}>{sub}</p>}
    </div>
  </motion.div>
);

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

const VConn = ({ x, y, h }: { x: number; y: number; h: number }) => (
  <div className="absolute" style={{ left: x, top: y, width: 3, height: h }}>
    <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(180deg, #22826F 0%, #52FEBF 100%)", opacity: 0.8 }} />
  </div>
);

const TechPipelineSlide = () => {
  // diagram box ~1172 wide; left branch center 330, right branch center 842, mid 586
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col" style={{ padding: "54px 54px 36px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center shrink-0">
          <Kicker delay={0.05}>How detection works</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 48, lineHeight: 1.04, color: BRAND.ink, marginTop: 12 }}
          >
            Two pipelines, <span className="font-extrabold">one verdict.</span>
          </motion.h1>
        </div>

        {/* Diagram */}
        <div className="relative w-full" style={{ height: 482, marginTop: 16 }}>
          {/* domain → bus → collectors */}
          <VConn x={585} y={52} h={16} />
          <HConn x={330} y={66} w={512} delay={0} />
          <VConn x={330} y={66} h={20} />
          <VConn x={842} y={66} h={20} />
          {/* collectors → matchers */}
          <VConn x={330} y={170} h={42} />
          <VConn x={842} y={170} h={42} />
          {/* matchers → bus → fusion */}
          <VConn x={330} y={270} h={18} />
          <VConn x={842} y={270} h={18} />
          <HConn x={330} y={286} w={512} delay={0.5} />
          <VConn x={585} y={286} h={28} />
          {/* fusion → detections */}
          <VConn x={585} y={406} h={24} />

          {/* domain */}
          <Node title="Account domain" icon={<Globe size={20} color={BRAND.emerald} strokeWidth={2.1} />} x={486} y={0} w={200} h={52} delay={0.2} />

          {/* collectors */}
          <Node title="DNS collector" sub="infrastructure records" icon={<Server size={20} color={BRAND.emerald} strokeWidth={2.1} />} x={170} y={86} w={320} h={84} delay={0.34} />
          <Node title="Web collector" sub="the rendered page" icon={<Code2 size={20} color={BRAND.emerald} strokeWidth={2.1} />} x={682} y={86} w={320} h={84} delay={0.34} />

          {/* matchers */}
          <Node title="DNS matcher" icon={<Filter size={18} color={BRAND.emerald} strokeWidth={2.1} />} x={220} y={212} w={220} h={58} delay={0.5} />
          <Node title="Web matcher" icon={<Filter size={18} color={BRAND.emerald} strokeWidth={2.1} />} x={732} y={212} w={220} h={58} delay={0.5} />

          {/* fusion core (hero) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.66, ease: EASE }}
            className="absolute rounded-2xl flex items-center gap-4"
            style={{
              left: 426, top: 314, width: 320, height: 92, padding: "0 22px",
              background: "linear-gradient(155deg, #22826F 0%, #0F1C18 120%)",
              border: "1px solid rgba(82,254,191,0.45)",
              boxShadow: "0 24px 60px -24px rgba(15,40,32,0.6), 0 0 0 6px rgba(82,254,191,0.06)",
            }}
          >
            <span aria-hidden className="absolute rounded-full" style={{ inset: -16, background: "radial-gradient(circle, rgba(82,254,191,0.4) 0%, transparent 68%)", filter: "blur(14px)", animation: "deck-breathe 3.4s ease-in-out infinite", zIndex: -1 }} />
            <span className="grid place-items-center rounded-xl shrink-0" style={{ width: 46, height: 46, background: "linear-gradient(135deg, #52FEBF, #22826F)", boxShadow: "0 0 22px rgba(82,254,191,0.65)" }}>
              <GitMerge size={23} color="#0F1C18" strokeWidth={2.1} />
            </span>
            <div>
              <p className="font-bold tracking-tight text-white" style={{ fontSize: 18 }}>Fusion</p>
              <p className="font-semibold tracking-tight" style={{ fontSize: 11.5, color: "#52FEBF", marginTop: 3 }}>
                DNS + Web, combined
              </p>
            </div>
          </motion.div>

          {/* ranked detections */}
          <Node title="Ranked detections" sub="vendors + confidence, high to low" icon={<ListOrdered size={20} color={BRAND.emerald} strokeWidth={2.1} />} x={436} y={430} w={300} h={58} delay={0.82} />
        </div>
      </div>
    </SlideFrame>
  );
};

export default TechPipelineSlide;
