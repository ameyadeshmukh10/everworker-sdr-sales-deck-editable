import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { BRAND, Eyebrow, fadeUp, LIGHT_BG } from "./ui";

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
      {...fadeUp(delay)}
      className="relative flex flex-col rounded-2xl"
      style={{
        padding: "24px 24px 26px",
        background: hl
          ? "linear-gradient(180deg, rgba(34,130,111,0.07) 0%, rgba(34,130,111,0.03) 100%)"
          : "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.92) 100%)",
        border: hl ? "1.5px solid rgba(34,130,111,0.4)" : "1px solid rgba(15,28,24,0.08)",
        boxShadow: hl ? "0 28px 64px -30px rgba(34,130,111,0.5)" : "0 20px 50px -30px rgba(15,40,32,0.34)",
      }}
    >
      {hl && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full font-bold uppercase" style={{ fontSize: 10.5, letterSpacing: "0.12em", padding: "5px 14px", color: "#0F1C18", background: "linear-gradient(135deg, #52FEBF, #22826F)" }}>
          Most popular
        </span>
      )}
      <p className="font-bold uppercase tracking-tight" style={{ fontSize: 12.5, letterSpacing: "0.16em", color: BRAND.emerald }}>{tier.name}</p>
      <div className="mt-2 flex items-baseline gap-1.5">
        <span className="font-bold tracking-tight" style={{ fontSize: 42, lineHeight: 1, color: BRAND.ink }}>{tier.price}</span>
        <span className="font-semibold tracking-tight" style={{ fontSize: 14, color: "rgba(15,28,24,0.58)" }}>/month</span>
      </div>
      <p className="font-medium tracking-tight" style={{ fontSize: 11.5, color: "rgba(15,28,24,0.55)", marginTop: 4 }}>3-month opt-out</p>

      <div style={{ height: 1, background: "rgba(15,28,24,0.08)", margin: "18px 0 16px" }} />

      <div className="flex flex-col gap-2.5">
        {tier.items.map((it) => (
          <div key={it} className="flex items-start gap-2.5">
            <span className="grid place-items-center rounded-md shrink-0" style={{ width: 18, height: 18, marginTop: 1, background: "rgba(34,130,111,0.12)" }}>
              <Check size={11} color={BRAND.emerald} strokeWidth={3} />
            </span>
            <span className="font-medium tracking-tight leading-snug" style={{ fontSize: 13.5, color: BRAND.ink }}>{it}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const PricingSection = () => (
  <section id="pricing" className="relative overflow-hidden" style={{ background: LIGHT_BG }}>
    <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="flex flex-col items-center text-center">
        <Eyebrow>Packaging &amp; pricing</Eyebrow>
        <motion.h2 {...fadeUp(0.1)} className="font-medium tracking-tight" style={{ color: BRAND.ink, marginTop: 12, lineHeight: 1.05 }}>
          <span className="text-[32px] sm:text-[44px] lg:text-[48px]">
            Done for you. <span className="font-extrabold">Priced to scale.</span>
          </span>
        </motion.h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 md:items-start">
        {TIERS.map((t, i) => (
          <TierCard key={t.name} tier={t} delay={0.1 + i * 0.08} />
        ))}
      </div>

      <motion.div {...fadeUp(0.3)} className="mt-7 rounded-xl" style={{ padding: "16px 22px", background: "rgba(34,130,111,0.06)", border: "1px solid rgba(34,130,111,0.16)" }}>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="font-bold uppercase tracking-tight" style={{ fontSize: 11, letterSpacing: "0.14em", color: BRAND.emerald }}>Included in every package</span>
          {INCLUDED.map((it) => (
            <span key={it} className="flex items-center gap-1.5">
              <Check size={13} color={BRAND.emerald} strokeWidth={3} />
              <span className="font-semibold tracking-tight" style={{ fontSize: 12.5, color: BRAND.ink }}>{it}</span>
            </span>
          ))}
        </div>
      </motion.div>

      <motion.p {...fadeUp(0.4)} className="mt-4 text-center font-medium tracking-tight" style={{ fontSize: 12.5, color: "rgba(15,28,24,0.58)" }}>
        Upgrade capacity on demand at any tier: email infrastructure · LinkedIn infrastructure · enrichment credits · LLM credits.
      </motion.p>
    </div>
  </section>
);

export default PricingSection;
