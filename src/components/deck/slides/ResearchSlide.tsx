import { motion } from "framer-motion";
import { Building2, User, Mail, Check, ArrowRight } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const COMPANY = ["1,200 employees", "Hiring 8 AEs", "Expanding into EMEA", "On a legacy CRM", "Series C, $60M"];
const CONTACT = ["Owns the RevOps stack", "2 years in role", "Posted on pipeline efficiency"];

const HL = ({ children }: { children: React.ReactNode }) => (
  <span style={{ background: "rgba(34,130,111,0.14)", color: BRAND.emerald, borderRadius: 4, padding: "0 4px", fontWeight: 700 }}>{children}</span>
);

const ResearchGroup = ({
  icon, title, sub, points, delay,
}: { icon: React.ReactNode; title: string; sub: string; points: string[]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -12 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.45, delay, ease: EASE }}
    className="rounded-xl"
    style={{ padding: "15px 17px", background: "linear-gradient(180deg, #FFFFFF, rgba(255,255,255,0.92))", border: "1px solid rgba(15,28,24,0.08)", boxShadow: "0 16px 38px -28px rgba(15,40,32,0.32)" }}
  >
    <div className="flex items-center gap-2.5" style={{ marginBottom: 11 }}>
      <span className="grid place-items-center rounded-lg" style={{ width: 32, height: 32, background: "rgba(34,130,111,0.1)" }}>{icon}</span>
      <div>
        <p className="font-bold tracking-tight leading-none" style={{ fontSize: 13.5, color: BRAND.ink }}>{title}</p>
        <p className="font-medium tracking-tight leading-none" style={{ fontSize: 11, color: "rgba(15,28,24,0.5)", marginTop: 4 }}>{sub}</p>
      </div>
    </div>
    <div className="flex flex-wrap" style={{ gap: 7 }}>
      {points.map((p) => (
        <span key={p} className="rounded-md font-medium tracking-tight" style={{ fontSize: 11.5, padding: "4px 9px", background: "rgba(34,130,111,0.07)", border: "1px solid rgba(34,130,111,0.15)", color: "rgba(15,28,24,0.7)" }}>{p}</span>
      ))}
    </div>
  </motion.div>
);

const ResearchSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col" style={{ padding: "58px 60px 56px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center shrink-0">
          <Kicker delay={0.05}>Company + contact research</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 50, lineHeight: 1.04, color: BRAND.ink, marginTop: 12 }}
          >
            Deeply researched. <span className="font-extrabold">Personally written.</span>
          </motion.h1>
        </div>

        {/* Body */}
        <div className="flex-1 flex items-center">
          <div className="flex items-center w-full" style={{ gap: 26 }}>
            {/* Left: research on the contact */}
            <div className="flex flex-col" style={{ flex: "0 0 430px", gap: 12 }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.26 }}
                className="flex items-center gap-3"
              >
                <span className="grid place-items-center rounded-lg text-white font-bold shrink-0" style={{ width: 38, height: 38, fontSize: 13, background: "linear-gradient(135deg, #22826F, #52FEBF)", boxShadow: "0 0 14px rgba(82,254,191,0.35)" }}>SK</span>
                <div>
                  <p className="font-bold tracking-tight leading-tight" style={{ fontSize: 14.5, color: BRAND.ink }}>Sarah Kim</p>
                  <p className="font-medium tracking-tight leading-tight" style={{ fontSize: 12, color: "rgba(15,28,24,0.55)", marginTop: 2 }}>VP Revenue Ops, Acme Corp</p>
                </div>
              </motion.div>

              <ResearchGroup
                icon={<Building2 size={17} color={BRAND.emerald} strokeWidth={2.1} />}
                title="Company research" sub="Acme Corp"
                points={COMPANY} delay={0.36}
              />
              <ResearchGroup
                icon={<User size={17} color={BRAND.emerald} strokeWidth={2.1} />}
                title="Contact research" sub="Sarah Kim"
                points={CONTACT} delay={0.48}
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="font-medium tracking-tight"
                style={{ fontSize: 11.5, color: "rgba(15,28,24,0.5)", lineHeight: 1.4 }}
              >
                Company research is stored once and reused across every contact on the account.
              </motion.p>
            </div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}
              className="shrink-0 flex flex-col items-center gap-1.5"
            >
              <ArrowRight size={24} color={BRAND.emerald} strokeWidth={2.4} />
              <span className="font-semibold tracking-tight" style={{ fontSize: 10.5, color: "rgba(15,28,24,0.45)" }}>writes</span>
            </motion.div>

            {/* Right: personalized draft */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5, ease: EASE }}
              className="relative overflow-hidden rounded-2xl flex flex-col flex-1"
              style={{ background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.94) 100%)", border: "1px solid rgba(15,28,24,0.08)", boxShadow: "0 30px 70px -34px rgba(15,40,32,0.4)" }}
            >
              <div className="flex items-center justify-between" style={{ padding: "13px 18px", borderBottom: "1px solid rgba(15,28,24,0.07)", background: "#FAFBFB" }}>
                <div className="flex items-center gap-2.5">
                  <Mail size={16} color={BRAND.emerald} strokeWidth={2.2} />
                  <span className="font-bold tracking-tight" style={{ fontSize: 13.5, color: BRAND.ink }}>Draft to Sarah Kim</span>
                </div>
                <span className="font-semibold uppercase" style={{ fontSize: 10, letterSpacing: "0.14em", color: "rgba(15,28,24,0.4)" }}>Personalized</span>
              </div>

              <div style={{ padding: "16px 20px" }}>
                <p className="font-semibold tracking-tight" style={{ fontSize: 12.5, color: "rgba(15,28,24,0.45)" }}>
                  Subject: <span style={{ color: BRAND.ink }}>pipeline coverage for emea</span>
                </p>
                <p className="font-medium" style={{ fontSize: 14.5, lineHeight: 1.6, color: BRAND.ink, marginTop: 12 }}>
                  Hi Sarah, congrats on the <HL>EMEA expansion</HL> and the <HL>8 new AEs</HL>. Teams scaling off a <HL>legacy CRM</HL> at this stage usually hit a pipeline-coverage gap fast. Loved your <HL>post on pipeline efficiency</HL> last week, that is exactly what we close. Want me to send over 25 EMEA accounts already showing buying signals for Acme? Yours to keep.
                </p>
              </div>

              <div className="flex items-center gap-2" style={{ marginTop: "auto", padding: "11px 18px", background: "#FAFBFB", borderTop: "1px solid rgba(15,28,24,0.06)" }}>
                <Check size={13} color={BRAND.emerald} strokeWidth={2.6} />
                <span className="font-medium tracking-tight" style={{ fontSize: 11.5, color: "rgba(15,28,24,0.6)" }}>Reviewed by an agent, passed guardrails, then sequenced.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
};

export default ResearchSlide;
