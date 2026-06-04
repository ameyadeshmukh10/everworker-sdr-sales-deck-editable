import { motion } from "framer-motion";
import { Swords, Filter, Sparkles, Route } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const CARDS: { Icon: typeof Swords; title: string; body: string }[] = [
  { Icon: Swords, title: "Displacement", body: "See exactly who runs the tool you replace, and lead with the switch." },
  { Icon: Filter, title: "Qualification", body: "A company's stack reveals maturity, budget, and fit before a rep lifts a finger." },
  { Icon: Sparkles, title: "Personalization", body: "Reference the tools they actually run, so outreach reads like it was written for them." },
  { Icon: Route, title: "Routing", body: "Score and prioritize accounts by stack fit, then send the best to your Worker first." },
];

const TechUnlocksSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: "62px 70px" }}>
        <div className="flex flex-col items-center text-center">
          <Kicker delay={0.05}>What it unlocks</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 48, lineHeight: 1.04, color: BRAND.ink, marginTop: 16 }}
          >
            Know the stack, <span className="font-extrabold">work the account.</span>
          </motion.h1>
        </div>

        <div className="flex items-stretch justify-center" style={{ gap: 18, marginTop: 46 }}>
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 + i * 0.1, ease: EASE }}
              className="rounded-3xl flex flex-col"
              style={{
                width: 262,
                padding: "28px 24px 28px",
                background: "linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.9) 100%)",
                border: "1px solid rgba(15,28,24,0.07)",
                boxShadow: "0 20px 50px -28px rgba(15,40,32,0.4)",
              }}
            >
              <span className="grid place-items-center rounded-xl" style={{ width: 46, height: 46, background: "rgba(34,130,111,0.1)" }}>
                <c.Icon size={23} color={BRAND.emerald} strokeWidth={2.1} />
              </span>
              <span className="font-bold tracking-tight" style={{ fontSize: 20, color: BRAND.ink, marginTop: 18 }}>{c.title}</span>
              <span className="font-medium tracking-tight" style={{ fontSize: 14.5, lineHeight: 1.5, color: "rgba(15,28,24,0.6)", marginTop: 8 }}>{c.body}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
};

export default TechUnlocksSlide;
