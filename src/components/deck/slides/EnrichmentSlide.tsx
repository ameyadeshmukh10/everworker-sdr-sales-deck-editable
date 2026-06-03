import { motion } from "framer-motion";
import { Building2, ArrowRight, Check, Users } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

// Swap each label for an <img src={...}/> once real logo files land in src/assets/logos/.
const PROVIDERS = ["Clay", "ZoomInfo", "Apollo", "Prospeo", "People Data Labs", "Lusha", "Cognism"];

type Contact = { initials: string; name: string; title: string; mobile?: boolean };

const BUYING_GROUP: Contact[] = [
  { initials: "SK", name: "Sarah Kim", title: "VP Revenue Ops", mobile: true },
  { initials: "MR", name: "Marcus Reid", title: "Chief Revenue Officer", mobile: true },
  { initials: "PS", name: "Priya Shah", title: "Director, RevOps", mobile: true },
  { initials: "DH", name: "Devon Hale", title: "Sales Ops Manager" },
];

const VerifyBadge = ({ label }: { label: string }) => (
  <span
    className="flex items-center gap-1 rounded-md"
    style={{ padding: "2px 7px", background: "rgba(34,130,111,0.1)", border: "1px solid rgba(34,130,111,0.2)" }}
  >
    <Check size={10} color={BRAND.emerald} strokeWidth={3} />
    <span className="font-semibold tracking-tight" style={{ fontSize: 10.5, color: BRAND.emerald }}>{label}</span>
  </span>
);

const ContactRow = ({ c, index }: { c: Contact; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 12 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay: 0.6 + index * 0.1, ease: EASE }}
    className="flex items-center gap-3"
    style={{ padding: "11px 18px", borderBottom: "1px solid rgba(15,28,24,0.06)" }}
  >
    <span
      className="grid place-items-center rounded-lg text-white font-bold shrink-0"
      style={{ width: 36, height: 36, fontSize: 12.5, background: "linear-gradient(135deg, #22826F, #52FEBF)", boxShadow: "0 0 14px rgba(82,254,191,0.35)" }}
    >
      {c.initials}
    </span>
    <div className="min-w-0 flex-1">
      <p className="font-bold tracking-tight leading-tight truncate" style={{ fontSize: 14, color: BRAND.ink }}>{c.name}</p>
      <p className="font-medium tracking-tight leading-tight truncate" style={{ fontSize: 12, color: "rgba(15,28,24,0.55)", marginTop: 2 }}>{c.title}</p>
    </div>
    <div className="flex items-center gap-1.5 shrink-0">
      <VerifyBadge label="email" />
      {c.mobile && <VerifyBadge label="mobile" />}
    </div>
  </motion.div>
);

const EnrichmentSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col" style={{ padding: "58px 60px 56px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center shrink-0">
          <Kicker delay={0.05}>Contact data enrichment</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 50, lineHeight: 1.04, color: BRAND.ink, marginTop: 12 }}
          >
            Account in. <span className="font-extrabold">Buying group out.</span>
          </motion.h1>
        </div>

        {/* Body */}
        <div className="flex-1 flex items-center">
          <div className="flex items-center w-full" style={{ gap: 28 }}>
            {/* Left: account + providers */}
            <div className="flex flex-col" style={{ flex: "0 0 420px", gap: 18 }}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28, ease: EASE }}
                className="flex items-center gap-3 rounded-xl"
                style={{ padding: "14px 16px", background: "linear-gradient(180deg, #FFFFFF, rgba(255,255,255,0.92))", border: "1px solid rgba(15,28,24,0.08)", boxShadow: "0 16px 38px -26px rgba(15,40,32,0.34)" }}
              >
                <span className="grid place-items-center rounded-lg shrink-0" style={{ width: 40, height: 40, background: "rgba(34,130,111,0.1)" }}>
                  <Building2 size={20} color={BRAND.emerald} strokeWidth={2.1} />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold tracking-tight leading-tight" style={{ fontSize: 15, color: BRAND.ink }}>Acme Corp</p>
                  <p className="font-medium tracking-tight leading-tight" style={{ fontSize: 12, color: "rgba(15,28,24,0.55)", marginTop: 2 }}>in-market, account-level signal</p>
                </div>
                <span className="rounded-md font-bold tracking-tight shrink-0" style={{ fontSize: 11, padding: "3px 9px", background: "linear-gradient(135deg, #1C826E, #33B690)", color: "#fff" }}>In-market</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
              >
                <p className="font-semibold uppercase tracking-tight" style={{ fontSize: 11, letterSpacing: "0.14em", color: "rgba(15,28,24,0.45)", marginBottom: 11 }}>
                  Enriched via your B2B data providers
                </p>
                <div className="flex flex-wrap" style={{ gap: 8 }}>
                  {PROVIDERS.map((p, i) => (
                    <motion.span
                      key={p}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, delay: 0.5 + i * 0.05, ease: EASE }}
                      className="rounded-lg font-bold tracking-tight"
                      style={{ fontSize: 13, padding: "8px 13px", background: "#FFFFFF", border: "1px solid rgba(15,28,24,0.1)", color: "rgba(15,28,24,0.62)", boxShadow: "0 8px 20px -16px rgba(15,40,32,0.4)" }}
                    >
                      {p}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="shrink-0 flex flex-col items-center gap-1.5"
            >
              <ArrowRight size={24} color={BRAND.emerald} strokeWidth={2.4} />
              <span className="font-semibold tracking-tight" style={{ fontSize: 10.5, color: "rgba(15,28,24,0.45)", writingMode: "horizontal-tb" }}>enrich</span>
            </motion.div>

            {/* Right: buying group */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45, ease: EASE }}
              className="relative overflow-hidden rounded-2xl flex flex-col flex-1"
              style={{ background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.94) 100%)", border: "1px solid rgba(15,28,24,0.08)", boxShadow: "0 30px 70px -34px rgba(15,40,32,0.4)" }}
            >
              <div className="flex items-center justify-between" style={{ padding: "14px 18px", borderBottom: "1px solid rgba(15,28,24,0.07)", background: "#FAFBFB" }}>
                <div className="flex items-center gap-2.5">
                  <Users size={17} color={BRAND.emerald} strokeWidth={2.2} />
                  <span className="font-bold tracking-tight" style={{ fontSize: 14, color: BRAND.ink }}>Buying group · Acme Corp</span>
                </div>
                <span className="font-semibold uppercase" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: "rgba(15,28,24,0.4)" }}>Enriched</span>
              </div>

              <div>
                {BUYING_GROUP.map((c, i) => <ContactRow key={c.initials} c={c} index={i} />)}
              </div>

              <div className="flex items-center justify-between" style={{ padding: "11px 18px", background: "#FAFBFB", borderTop: "1px solid rgba(15,28,24,0.06)" }}>
                <span className="font-medium tracking-tight" style={{ fontSize: 12, color: "rgba(15,28,24,0.55)" }}>+4 more on the account</span>
                <span className="flex items-center gap-1.5 font-semibold tracking-tight" style={{ fontSize: 12, color: BRAND.emerald }}>
                  <ArrowRight size={13} strokeWidth={2.5} /> into sequencing
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
};

export default EnrichmentSlide;
