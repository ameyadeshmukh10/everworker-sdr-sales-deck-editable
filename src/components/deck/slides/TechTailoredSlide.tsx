import { motion } from "framer-motion";
import { Database } from "lucide-react";
import { SlideFrame, Kicker } from "../primitives";
import logoTestkube from "@/assets/logos/testkube.png";
import logoNomology from "@/assets/logos/nomology.png";
import logoUsercentrics from "@/assets/logos/usercentrics.svg";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const CUSTOMERS: { logo: string; name: string; sells: string; signals: string[] }[] = [
  { logo: logoTestkube, name: "Testkube", sells: "Cloud-native test orchestration", signals: ["Kubernetes", "Jenkins", "Datadog", "Grafana"] },
  { logo: logoNomology, name: "Nomology", sells: "YouTube & video advertising", signals: ["Google Ads", "Meta Pixel", "Tag Manager", "The Trade Desk"] },
  { logo: logoUsercentrics, name: "Usercentrics", sells: "Consent management (CMP)", signals: ["Tag Manager", "Meta Pixel", "OneTrust", "Cookiebot"] },
];

const TechTailoredSlide = () => {
  return (
    <SlideFrame tone="dark">
      <div aria-hidden className="absolute rounded-full" style={{ width: 480, height: 480, top: -170, right: -130, background: "rgba(82,254,191,0.12)", filter: "blur(95px)" }} />

      <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: "56px 60px" }}>
        <div className="flex flex-col items-center text-center">
          <Kicker tone="dark" delay={0.05}>Customized to your GTM</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-bold tracking-tight"
            style={{ fontSize: 46, lineHeight: 1.04, color: "#F6F6F4", marginTop: 14 }}
          >
            Tuned to how you sell.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="font-medium tracking-tight"
            style={{ fontSize: 16.5, lineHeight: 1.5, color: "rgba(246,246,244,0.66)", marginTop: 13, maxWidth: 780 }}
          >
            Three EverWorker customers, three completely different signal sets. The same engine
            surfaces only the vendors that matter to each one&apos;s go-to-market.
          </motion.p>
        </div>

        <div className="flex items-stretch justify-center" style={{ gap: 20, marginTop: 38 }}>
          {CUSTOMERS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 + i * 0.12, ease: EASE }}
              className="rounded-3xl flex flex-col"
              style={{
                width: 320,
                padding: "24px 24px 22px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="grid place-items-center rounded-xl shrink-0" style={{ width: 46, height: 46, background: "#F6F6F4", boxShadow: "0 6px 18px -6px rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.5)" }}>
                  <img src={c.logo} alt={c.name} style={{ width: 30, height: 30, objectFit: "contain" }} />
                </span>
                <div className="min-w-0">
                  <p className="font-bold tracking-tight" style={{ fontSize: 20, color: "#F6F6F4", lineHeight: 1.1 }}>{c.name}</p>
                  <p className="font-medium tracking-tight" style={{ fontSize: 12, color: "rgba(246,246,244,0.55)", marginTop: 2 }}>{c.sells}</p>
                </div>
              </div>

              <p className="font-semibold uppercase" style={{ fontSize: 10, letterSpacing: "0.14em", color: "#52FEBF", marginTop: 20, marginBottom: 11 }}>Signals it hunts</p>
              <div className="flex flex-wrap" style={{ gap: 7 }}>
                {c.signals.map((v) => (
                  <span key={v} className="rounded-full font-semibold tracking-tight" style={{ fontSize: 12, padding: "5px 11px", background: "rgba(82,254,191,0.12)", color: "#CFFBEC", border: "1px solid rgba(82,254,191,0.26)" }}>
                    {v}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex items-center justify-center"
          style={{ marginTop: 32 }}
        >
          <span className="rounded-full font-semibold tracking-tight flex items-center gap-2.5" style={{ fontSize: 14, padding: "11px 20px", background: "rgba(82,254,191,0.1)", color: "rgba(246,246,244,0.9)", border: "1px solid rgba(82,254,191,0.24)" }}>
            <span className="grid place-items-center rounded-md" style={{ width: 22, height: 22, background: "rgba(82,254,191,0.16)" }}>
              <Database size={13} color="#52FEBF" strokeWidth={2.2} />
            </span>
            Delivered into your CRM as signal fields your team and your Worker can act on
          </span>
        </motion.div>
      </div>
    </SlideFrame>
  );
};

export default TechTailoredSlide;
