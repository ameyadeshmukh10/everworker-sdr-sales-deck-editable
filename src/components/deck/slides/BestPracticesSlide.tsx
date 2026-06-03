import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const PROOFS = [
  { stat: "+67%", label: "tighter, 75-100 word emails" },
  { stat: "+30.5%", label: "personalized opening lines" },
  { stat: "3x", label: "4-7 email sequences" },
];

const CHANNELS: { l: string; role: "ai" | "reps"; render: (c: string) => React.ReactNode }[] = [
  { l: "Email", role: "ai", render: (c) => <Mail size={14} color={c} strokeWidth={2.3} /> },
  { l: "LinkedIn", role: "ai", render: (c) => <FaLinkedin size={14} color={c} /> },
  { l: "Phone", role: "reps", render: (c) => <Phone size={14} color={c} strokeWidth={2.3} /> },
];

const BestPracticesSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col" style={{ padding: "58px 60px 52px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center shrink-0">
          <Kicker delay={0.05}>Best practices, built in</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 50, lineHeight: 1.04, color: BRAND.ink, marginTop: 12 }}
          >
            The playbook, <span className="font-extrabold">built in.</span>
          </motion.h1>
        </div>

        {/* Center group */}
        <div className="flex-1 flex flex-col items-center justify-center" style={{ gap: 30 }}>
          {/* 287% multi-channel banner */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: EASE }}
            className="flex items-center rounded-2xl"
            style={{
              width: 700, padding: "26px 32px", gap: 30,
              background: "radial-gradient(ellipse 70% 90% at 12% 0%, rgba(82,254,191,0.22) 0%, transparent 60%), linear-gradient(150deg, #0F1C18 0%, #1d3530 100%)",
              border: "1px solid rgba(82,254,191,0.28)",
              boxShadow: "0 30px 70px -34px rgba(15,40,32,0.6)",
            }}
          >
            <div className="shrink-0">
              <p className="font-semibold uppercase" style={{ fontSize: 10.5, letterSpacing: "0.16em", color: "#52FEBF" }}>Multi-channel multiplier</p>
              <p className="font-bold tracking-tight text-white" style={{ fontSize: 76, lineHeight: 0.95, marginTop: 4 }}>287<span style={{ fontSize: 40 }}>%</span></p>
            </div>
            <div style={{ width: 1, alignSelf: "stretch", background: "rgba(255,255,255,0.14)" }} />
            <div className="flex-1">
              <p className="font-medium tracking-tight" style={{ fontSize: 15.5, color: "rgba(255,255,255,0.82)", lineHeight: 1.45 }}>
                more responses when email, LinkedIn, and phone work together than any single channel.
              </p>
              <div className="flex items-center gap-2" style={{ marginTop: 14 }}>
                {CHANNELS.map((c) => {
                  const ai = c.role === "ai";
                  const fg = ai ? "#0F1C18" : "#52FEBF";
                  return (
                    <span
                      key={c.l}
                      className="flex items-center gap-1.5 rounded-full"
                      style={{
                        padding: "5px 11px",
                        background: ai ? "rgba(82,254,191,0.92)" : "transparent",
                        border: ai ? "none" : "1px solid rgba(82,254,191,0.45)",
                      }}
                    >
                      {c.render(fg)}
                      <span className="font-bold tracking-tight" style={{ fontSize: 11.5, color: fg }}>{c.l}</span>
                    </span>
                  );
                })}
              </div>
              <p className="font-medium tracking-tight" style={{ fontSize: 11.5, color: "rgba(255,255,255,0.6)", marginTop: 10, lineHeight: 1.4 }}>
                Email + LinkedIn run by the AI SDR. Your reps add the calls. · 15 touches over 3 weeks.
              </p>
            </div>
          </motion.div>

          {/* 3 proof pills */}
          <div className="flex items-stretch" style={{ gap: 16 }}>
            {PROOFS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.55 + i * 0.1, ease: EASE }}
                className="flex items-center gap-3 rounded-xl"
                style={{
                  width: 226, padding: "14px 18px",
                  background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.92) 100%)",
                  border: "1px solid rgba(15,28,24,0.08)",
                  boxShadow: "0 16px 38px -26px rgba(15,40,32,0.34)",
                }}
              >
                <span className="font-bold tracking-tight shrink-0" style={{ fontSize: 26, color: BRAND.emerald, lineHeight: 1 }}>{p.stat}</span>
                <span className="font-medium tracking-tight leading-snug" style={{ fontSize: 12.5, color: "rgba(15,28,24,0.6)" }}>{p.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.95 }}
          className="text-center font-semibold tracking-tight shrink-0"
          style={{ fontSize: 16, color: BRAND.ink }}
        >
          Every proven best practice, baked into the agents. You configure none of it.
        </motion.p>
      </div>
    </SlideFrame>
  );
};

export default BestPracticesSlide;
