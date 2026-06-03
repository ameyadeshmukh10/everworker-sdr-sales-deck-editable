import { motion } from "framer-motion";
import { Layers, Network, Wrench, Zap, Rocket, UserCog } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const WEEKS = [
  { w: "Week 1", title: "Foundation", desc: "Context Engine, CRM integration, email + LinkedIn infrastructure and warmup", Icon: Layers },
  { w: "Week 2", title: "Architecture", desc: "Offer matrix, signal intelligence, SDR AI agent system design", Icon: Network },
  { w: "Week 3", title: "Build & validate", desc: "Agent build, performance testing, optimization, validation", Icon: Wrench },
  { w: "Week 4", title: "Activation", desc: "Triggers and schedulers for signal-based autonomous workflow", Icon: Zap },
  { w: "Week 5", title: "Go-Live", desc: "Autonomous outbound, running on your stack", Icon: Rocket, win: true },
];

const ImplementationSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col" style={{ padding: "58px 60px 52px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center shrink-0">
          <Kicker delay={0.05}>Forward-deployed GTM engineer</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 50, lineHeight: 1.04, color: BRAND.ink, marginTop: 12 }}
          >
            Live in <span className="font-extrabold">5 weeks.</span>
          </motion.h1>
        </div>

        {/* Timeline */}
        <div className="relative flex-1 flex items-center" style={{ marginTop: 8 }}>
          {/* connecting line behind the icon row */}
          <div className="absolute" style={{ left: "10%", right: "10%", top: 38, height: 3 }}>
            <div className="absolute inset-0 rounded-full" style={{ background: "rgba(15,40,32,0.1)" }} />
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: "linear-gradient(90deg, #22826F, #52FEBF)", transformOrigin: "left center" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.0, delay: 0.4, ease: EASE }}
            />
          </div>

          <div className="relative flex w-full items-start justify-between">
            {WEEKS.map((wk, i) => (
              <motion.div
                key={wk.w}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.5 + i * 0.13, ease: EASE }}
                className="flex flex-col items-center text-center"
                style={{ width: "19%" }}
              >
                <span
                  className="grid place-items-center rounded-2xl"
                  style={{
                    width: 56, height: 56,
                    background: wk.win ? "linear-gradient(150deg, #1C826E, #33B690, #52FEBF)" : "linear-gradient(180deg, #FFFFFF, rgba(255,255,255,0.92))",
                    border: wk.win ? "1px solid rgba(82,254,191,0.5)" : "1px solid rgba(34,130,111,0.2)",
                    boxShadow: wk.win ? "0 0 24px rgba(82,254,191,0.4), 0 18px 40px -20px rgba(34,130,111,0.5)" : "0 14px 32px -20px rgba(15,40,32,0.32)",
                  }}
                >
                  <wk.Icon size={24} color={wk.win ? "#fff" : BRAND.emerald} strokeWidth={2.1} />
                </span>
                <span className="font-bold uppercase tracking-tight" style={{ fontSize: 11, letterSpacing: "0.14em", color: BRAND.emerald, marginTop: 14 }}>{wk.w}</span>
                <p className="font-bold tracking-tight leading-tight" style={{ fontSize: 16, color: BRAND.ink, marginTop: 5 }}>{wk.title}</p>
                <p className="font-medium tracking-tight leading-snug" style={{ fontSize: 12.5, color: "rgba(15,28,24,0.52)", marginTop: 6, maxWidth: 180 }}>{wk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GTM engineer banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center justify-center gap-3 rounded-xl shrink-0"
          style={{ padding: "14px 20px", background: "rgba(34,130,111,0.06)", border: "1px solid rgba(34,130,111,0.16)" }}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg" style={{ background: "rgba(34,130,111,0.12)" }}>
            <UserCog size={17} color={BRAND.emerald} strokeWidth={2.2} />
          </span>
          <span className="font-semibold tracking-tight" style={{ fontSize: 15.5, color: BRAND.ink }}>
            A forward-deployed GTM AI engineer builds it with you, end to end. Included in every package.
          </span>
        </motion.div>
      </div>
    </SlideFrame>
  );
};

export default ImplementationSlide;
