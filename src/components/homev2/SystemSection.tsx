import { motion } from "framer-motion";
import {
  Zap,
  BrainCircuit,
  Radar,
  Bot,
  Network,
  Search,
  PenLine,
  Send,
  CalendarCheck,
} from "lucide-react";
import { BRAND, EASE, Eyebrow, fadeUp, LIGHT_BG } from "./ui";

const NODES = [
  {
    title: "Triggers",
    sub: "schedules · chat · CRM list · CSV · data pull",
    icon: <Zap size={20} color={BRAND.emerald} strokeWidth={2.1} />,
  },
  {
    title: "Context Engine",
    sub: "personas · messaging · offers · proof · style",
    icon: <BrainCircuit size={20} color={BRAND.emerald} strokeWidth={2.1} />,
  },
  {
    title: "Signal Intelligence",
    sub: "technographic · hiring · news · deanonymization · ABM",
    icon: <Radar size={20} color={BRAND.emerald} strokeWidth={2.1} />,
  },
  {
    title: "Universal Connector",
    sub: "CRM · email + LinkedIn infra · LLMs · B2B data · scheduling",
    icon: <Network size={20} color={BRAND.emerald} strokeWidth={2.1} />,
  },
];

/* Plain-language rail — absorbs the cut feature walkthrough (signals → research → outreach → meetings). */
const STEPS = [
  { icon: <Radar size={18} color={BRAND.emerald} strokeWidth={2.2} />, title: "Finds who's in-market", sub: "Intent, hiring, technographic, news and website signals, surfaced in real time." },
  { icon: <PenLine size={18} color={BRAND.emerald} strokeWidth={2.2} />, title: "Researches and writes, personally", sub: "Deep company + contact research turned into personalized, on-brand outreach." },
  { icon: <Send size={18} color={BRAND.emerald} strokeWidth={2.2} />, title: "Runs email + LinkedIn", sub: "Multi-channel sequencing that lands in the primary inbox and scales safely." },
  { icon: <CalendarCheck size={18} color={BRAND.emerald} strokeWidth={2.2} />, title: "Books meetings", sub: "Replies handled and meetings booked, every step logged to your CRM." },
];

const NodeCard = ({ node, delay }: { node: (typeof NODES)[number]; delay: number }) => (
  <motion.div
    {...fadeUp(delay)}
    className="flex items-center gap-3 rounded-2xl"
    style={{
      padding: "16px 16px",
      background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.92) 100%)",
      border: "1px solid rgba(15,28,24,0.07)",
      boxShadow: "0 18px 40px -26px rgba(15,40,32,0.3)",
    }}
  >
    <span className="grid place-items-center rounded-xl shrink-0" style={{ width: 42, height: 42, background: "rgba(34,130,111,0.1)" }}>
      {node.icon}
    </span>
    <div className="min-w-0">
      <p className="font-bold tracking-tight leading-tight" style={{ fontSize: 15.5, color: BRAND.ink }}>{node.title}</p>
      <p className="font-medium tracking-tight leading-snug" style={{ fontSize: 11.5, color: "rgba(15,28,24,0.58)", marginTop: 3 }}>{node.sub}</p>
    </div>
  </motion.div>
);

const SystemSection = () => (
  <section id="system" className="relative overflow-hidden" style={{ background: LIGHT_BG }}>
    <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="flex flex-col items-center text-center">
        <Eyebrow>Customized to your GTM</Eyebrow>
        <motion.h2
          {...fadeUp(0.1)}
          className="font-medium tracking-tight"
          style={{ color: BRAND.ink, marginTop: 14, lineHeight: 1.05 }}
        >
          <span className="text-[34px] sm:text-[46px] lg:text-[52px]">
            An autonomous <span className="font-extrabold">multi-agent system.</span>
          </span>
        </motion.h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-14">
        {/* Diagram column */}
        <div>
          {/* Core */}
          <motion.div
            {...fadeUp(0.05)}
            className="relative mx-auto flex max-w-md flex-col items-center rounded-2xl text-center"
            style={{
              padding: "26px 22px",
              background: "linear-gradient(155deg, #22826F 0%, #0F1C18 120%)",
              border: "1px solid rgba(82,254,191,0.45)",
              boxShadow: "0 24px 60px -24px rgba(15,40,32,0.6), 0 0 0 6px rgba(82,254,191,0.06)",
            }}
          >
            <span
              aria-hidden
              className="absolute rounded-full"
              style={{ inset: -16, background: "radial-gradient(circle, rgba(82,254,191,0.42) 0%, transparent 68%)", filter: "blur(14px)", animation: "deck-breathe 3.4s ease-in-out infinite", zIndex: -1 }}
            />
            <span className="grid place-items-center rounded-xl" style={{ width: 46, height: 46, background: "linear-gradient(135deg, #52FEBF, #22826F)", boxShadow: "0 0 22px rgba(82,254,191,0.65)" }}>
              <Bot size={24} color="#0F1C18" strokeWidth={2.1} />
            </span>
            <p className="font-bold tracking-tight text-white" style={{ fontSize: 20, marginTop: 10 }}>SDR AI Agents</p>
            <p className="font-semibold uppercase" style={{ fontSize: 9.5, letterSpacing: "0.14em", color: BRAND.mint, marginTop: 5 }}>the multi-agent core</p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
              {["Research", "Sequencing", "Analytics", "Meetings"].map((c) => (
                <span key={c} className="rounded-md font-semibold tracking-tight" style={{ fontSize: 10, padding: "3px 8px", background: "rgba(82,254,191,0.16)", color: "#CFFBEC", border: "1px solid rgba(82,254,191,0.28)" }}>
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Surrounding nodes */}
          <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {NODES.map((n, i) => (
              <NodeCard key={n.title} node={n} delay={0.1 + i * 0.06} />
            ))}
          </div>
        </div>

        {/* Caption rail */}
        <div className="flex flex-col gap-5">
          {STEPS.map((s, i) => (
            <motion.div key={s.title} {...fadeUp(0.1 + i * 0.08)} className="flex items-start gap-4">
              <span className="grid place-items-center rounded-xl shrink-0" style={{ width: 40, height: 40, background: "rgba(34,130,111,0.1)" }}>
                {s.icon}
              </span>
              <div>
                <p className="font-bold tracking-tight" style={{ fontSize: 17, color: BRAND.ink }}>{s.title}</p>
                <p className="font-medium tracking-tight leading-snug" style={{ fontSize: 14, color: "rgba(15,28,24,0.6)", marginTop: 3 }}>{s.sub}</p>
              </div>
            </motion.div>
          ))}
          <motion.div {...fadeUp(0.45)} className="mt-1 flex items-center gap-2.5 rounded-xl" style={{ padding: "12px 16px", background: "rgba(34,130,111,0.06)", border: "1px solid rgba(34,130,111,0.16)" }}>
            <Search size={16} color={BRAND.emerald} strokeWidth={2.2} />
            <span className="font-semibold tracking-tight" style={{ fontSize: 13.5, color: BRAND.ink }}>One autonomous system, built around your go-to-market.</span>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default SystemSection;
