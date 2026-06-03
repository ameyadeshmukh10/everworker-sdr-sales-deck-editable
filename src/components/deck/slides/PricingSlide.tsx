import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const TIERS = [
  {
    name: "Starter",
    price: "$3.5k",
    items: ["Multi-channel AI SDR (LinkedIn + Email)", "Your B2B data providers + CRM"],
    highlight: false,
  },
  {
    name: "Scale",
    price: "$5.5k",
    items: [
      "Everything in Starter",
      "Website deanonymization — 1,000 ICP accounts/mo",
      "Technographic signals — 5,000 accounts/mo",
    ],
    highlight: true,
  },
  {
    name: "Advanced",
    price: "$7k",
    items: [
      "Everything in Scale",
      "Built-in API + agentic signal intelligence",
      "Website deanonymization — 2,000/mo",
      "Hiring signals — 5,000/mo",
      "Company + contact lead gen — 15,000 credits/mo",
    ],
    highlight: false,
  },
];

const INCLUDED = [
  "Forward-deployed GTM AI engineer",
  "LLM endpoints",
  "Email + LinkedIn infrastructure",
  "SDR AI agent config + CRM integration",
  "Single-tenant SaaS platform",
];

const TierCard = ({ tier, delay }: { tier: (typeof TIERS)[number]; delay: number }) => {
  const hl = tier.highlight;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: EASE }}
      className="relative flex-1 rounded-2xl flex flex-col"
      style={{
        padding: "22px 22px 24px",
        background: hl
          ? "linear-gradient(180deg, rgba(34,130,111,0.07) 0%, rgba(34,130,111,0.03) 100%)"
          : "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.92) 100%)",
        border: hl ? "1.5px solid rgba(34,130,111,0.4)" : "1px solid rgba(15,28,24,0.08)",
        boxShadow: hl ? "0 28px 64px -30px rgba(34,130,111,0.5)" : "0 20px 50px -30px rgba(15,40,32,0.34)",
      }}
    >
      <p className="font-bold uppercase tracking-tight" style={{ fontSize: 12.5, letterSpacing: "0.16em", color: BRAND.emerald }}>{tier.name}</p>
      <div className="flex items-baseline gap-1.5" style={{ marginTop: 8 }}>
        <span className="font-bold tracking-tight" style={{ fontSize: 40, lineHeight: 1, color: BRAND.ink }}>{tier.price}</span>
        <span className="font-semibold tracking-tight" style={{ fontSize: 14, color: "rgba(15,28,24,0.58)" }}>/month</span>
      </div>
      <p className="font-medium tracking-tight" style={{ fontSize: 11.5, color: "rgba(15,28,24,0.55)", marginTop: 4 }}>3-month opt-out</p>

      <div style={{ height: 1, background: "rgba(15,28,24,0.08)", margin: "16px 0 14px" }} />

      <div className="flex flex-col" style={{ gap: 10 }}>
        {tier.items.map((it) => (
          <div key={it} className="flex items-start gap-2.5">
            <span className="grid place-items-center rounded-md shrink-0" style={{ width: 18, height: 18, marginTop: 1, background: "rgba(34,130,111,0.12)" }}>
              <Check size={11} color={BRAND.emerald} strokeWidth={3} />
            </span>
            <span className="font-medium tracking-tight leading-snug" style={{ fontSize: 13, color: BRAND.ink }}>{it}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const PricingSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col" style={{ padding: "50px 60px 46px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center shrink-0">
          <Kicker delay={0.05}>Packaging & pricing</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 46, lineHeight: 1.04, color: BRAND.ink, marginTop: 10 }}
          >
            Done for you. <span className="font-extrabold">Priced to scale.</span>
          </motion.h1>
        </div>

        {/* Tiers */}
        <div className="flex items-stretch" style={{ gap: 20, marginTop: 22 }}>
          {TIERS.map((t, i) => <TierCard key={t.name} tier={t} delay={0.28 + i * 0.1} />)}
        </div>

        {/* Included-in-all */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="rounded-xl shrink-0"
          style={{ marginTop: 20, padding: "14px 20px", background: "rgba(34,130,111,0.06)", border: "1px solid rgba(34,130,111,0.16)" }}
        >
          <div className="flex items-center flex-wrap" style={{ gap: "6px 18px" }}>
            <span className="font-bold uppercase tracking-tight" style={{ fontSize: 11, letterSpacing: "0.14em", color: BRAND.emerald }}>Included in every package</span>
            {INCLUDED.map((it) => (
              <span key={it} className="flex items-center gap-1.5">
                <Check size={13} color={BRAND.emerald} strokeWidth={3} />
                <span className="font-semibold tracking-tight" style={{ fontSize: 12.5, color: BRAND.ink }}>{it}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Upgrade note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="text-center font-medium tracking-tight shrink-0"
          style={{ fontSize: 12.5, color: "rgba(15,28,24,0.58)", marginTop: 12 }}
        >
          Upgrade capacity on demand at any tier: email infrastructure · LinkedIn infrastructure · enrichment credits · LLM credits.
        </motion.p>
      </div>
    </SlideFrame>
  );
};

export default PricingSlide;
