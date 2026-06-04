import { motion } from "framer-motion";
import { Sparkles, Check } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const SIGNALS = ["Kubernetes (EKS)", "Jenkins", "Cypress", "k6"];

const TechProofSlide = () => {
  return (
    <SlideFrame tone="dark">
      <div aria-hidden className="absolute rounded-full" style={{ width: 460, height: 460, bottom: -160, left: -120, background: "rgba(34,130,111,0.2)", filter: "blur(95px)" }} />

      <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: "52px 70px" }}>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <Kicker tone="dark" delay={0.05}>What good looks like</Kicker>
            <motion.span
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-full font-semibold uppercase" style={{ fontSize: 9.5, letterSpacing: "0.14em", padding: "4px 10px", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              From a real detection
            </motion.span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 44, lineHeight: 1.04, color: "#F6F6F4", marginTop: 14 }}
          >
            The signal writes the <span className="font-extrabold">opening line.</span>
          </motion.h1>
        </div>

        {/* Email mock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3, ease: EASE }}
          className="rounded-3xl self-center"
          style={{
            width: 760,
            marginTop: 30,
            background: "linear-gradient(180deg, #F6F6F4 0%, rgba(255,255,255,0.95) 100%)",
            border: "1px solid rgba(15,28,24,0.08)",
            boxShadow: "0 34px 80px -30px rgba(0,0,0,0.55)",
            overflow: "hidden",
          }}
        >
          {/* header */}
          <div className="flex items-center gap-3" style={{ padding: "16px 22px" }}>
            <span className="grid place-items-center rounded-full shrink-0 font-extrabold" style={{ width: 40, height: 40, background: "linear-gradient(135deg, #52FEBF, #22826F)", color: "#0F1C18", fontSize: 17, boxShadow: "0 0 16px rgba(82,254,191,0.4)" }}>T</span>
            <div className="min-w-0">
              <p className="font-bold tracking-tight" style={{ fontSize: 14.5, color: BRAND.ink }}>Testkube SDR</p>
              <p className="font-medium tracking-tight flex items-center gap-1.5" style={{ fontSize: 11.5, color: "rgba(15,28,24,0.5)" }}>
                <Sparkles size={11} color={BRAND.emerald} strokeWidth={2.4} /> via EverWorker SDR AI Worker
              </p>
            </div>
            <span className="font-medium" style={{ fontSize: 12, color: "rgba(15,28,24,0.4)", marginLeft: "auto" }}>9:02 AM</span>
          </div>
          <div style={{ height: 1, background: "rgba(15,28,24,0.07)" }} />

          {/* body */}
          <div style={{ padding: "16px 22px 22px" }}>
            <p className="font-medium" style={{ fontSize: 12.5, color: "rgba(15,28,24,0.5)" }}>
              To: VP Platform · a Series B dev-tools company
            </p>
            <p className="font-bold tracking-tight" style={{ fontSize: 17.5, color: BRAND.ink, marginTop: 12 }}>
              Cypress runs gating your Jenkins deploys?
            </p>
            <div className="font-medium" style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(15,28,24,0.74)", marginTop: 12 }}>
              <p>Hi there,</p>
              <p style={{ marginTop: 8 }}>
                Noticed your team runs <b style={{ color: BRAND.ink }}>Cypress</b> and <b style={{ color: BRAND.ink }}>k6</b> through
                {" "}<b style={{ color: BRAND.ink }}>Jenkins</b> on <b style={{ color: BRAND.ink }}>EKS</b>. Once suites get heavy they
                start gating deploys, and the platform team ends up babysitting pipelines.
              </p>
              <p style={{ marginTop: 8 }}>
                Testkube runs those suites inside your cluster, decoupled from CI, so deploys stop waiting
                on tests. Worth 20 minutes next week?
              </p>
            </div>
          </div>
        </motion.div>

        {/* provenance strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex items-center justify-center flex-wrap"
          style={{ gap: 9, marginTop: 24 }}
        >
          <span className="font-semibold uppercase flex items-center gap-1.5" style={{ fontSize: 11, letterSpacing: "0.12em", color: "rgba(255,255,255,0.55)", marginRight: 4 }}>
            <Check size={13} color="#52FEBF" strokeWidth={2.8} /> Personalized from the detected stack
          </span>
          {SIGNALS.map((s) => (
            <span key={s} className="rounded-full font-semibold tracking-tight" style={{ fontSize: 12, padding: "5px 12px", background: "rgba(82,254,191,0.12)", color: "#CFFBEC", border: "1px solid rgba(82,254,191,0.26)" }}>{s}</span>
          ))}
        </motion.div>
      </div>
    </SlideFrame>
  );
};

export default TechProofSlide;
