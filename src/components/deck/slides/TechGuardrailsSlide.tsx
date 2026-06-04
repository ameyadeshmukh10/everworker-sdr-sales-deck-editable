import { motion } from "framer-motion";
import { ShieldCheck, FlaskConical, BadgeCheck } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const ITEMS: { Icon: typeof ShieldCheck; lead: string; label: string; body: string }[] = [
  { Icon: ShieldCheck, lead: "Linted", label: "Schema validation", body: "Every signature file passes technographics validate before it ships." },
  { Icon: FlaskConical, lead: "96 tests", label: "Behavior locked", body: "Matchers, loader, fusion, and importer stay stable as the library grows." },
  { Icon: BadgeCheck, lead: "Tier hints", label: "Beyond present / absent", body: "Paid and enterprise indicators, like a custom Intercom Help Center domain." },
];

const TechGuardrailsSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: "72px 80px" }}>
        <div className="flex flex-col items-center text-center">
          <Kicker delay={0.05}>Appendix · Guardrails</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 48, lineHeight: 1.04, color: BRAND.ink, marginTop: 16 }}
          >
            Precision that <span className="font-extrabold">stays precise.</span>
          </motion.h1>
        </div>

        {/* single horizontal band, three inline facts divided by hairlines */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: EASE }}
          className="flex items-stretch rounded-3xl"
          style={{
            marginTop: 50,
            padding: "10px 8px",
            background: "linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.9) 100%)",
            border: "1px solid rgba(15,28,24,0.07)",
            boxShadow: "0 22px 56px -30px rgba(15,40,32,0.42)",
          }}
        >
          {ITEMS.map((it, i) => (
            <div key={it.label} className="flex items-stretch flex-1">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.4 + i * 0.12, ease: EASE }}
                className="flex flex-col flex-1"
                style={{ padding: "26px 30px" }}
              >
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center rounded-xl shrink-0" style={{ width: 42, height: 42, background: "linear-gradient(135deg, rgba(34,130,111,0.14), rgba(82,254,191,0.1))" }}>
                    <it.Icon size={22} color={BRAND.emerald} strokeWidth={2.1} />
                  </span>
                  <span className="font-extrabold tracking-tight" style={{ fontSize: 25, color: BRAND.emerald }}>{it.lead}</span>
                </div>
                <span className="font-bold tracking-tight" style={{ fontSize: 16.5, color: BRAND.ink, marginTop: 16 }}>{it.label}</span>
                <span className="font-medium tracking-tight" style={{ fontSize: 13.5, lineHeight: 1.5, color: "rgba(15,28,24,0.6)", marginTop: 6 }}>{it.body}</span>
              </motion.div>
              {i < ITEMS.length - 1 && <span className="w-px self-stretch" style={{ background: "rgba(15,28,24,0.08)", marginBlock: 22 }} />}
            </div>
          ))}
        </motion.div>
      </div>
    </SlideFrame>
  );
};

export default TechGuardrailsSlide;
