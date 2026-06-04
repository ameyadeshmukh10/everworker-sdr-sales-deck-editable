import { motion } from "framer-motion";
import { Server, Mail, FileText, CornerDownRight, EyeOff } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const RECORDS: { rec: string; Icon: typeof Server; reveal: string }[] = [
  { rec: "SOA / NS", Icon: Server, reveal: "Managed-DNS and hosting providers" },
  { rec: "MX", Icon: Mail, reveal: "The email platform (Workspace, M365…)" },
  { rec: "TXT", Icon: FileText, reveal: "Domain verification + SPF includes" },
  { rec: "CNAME", Icon: CornerDownRight, reveal: "Vendor-hosted custom subdomains" },
];

const EXAMPLES: { vendor: string; via: string }[] = [
  { vendor: "Marketo", via: "*.mktoweb.com CNAME" },
  { vendor: "SendGrid", via: "SPF include:sendgrid.net" },
  { vendor: "Microsoft 365", via: "*.mail.protection.outlook.com MX" },
];

const TechDnsPipelineSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col" style={{ padding: "60px 64px 54px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center shrink-0">
          <Kicker delay={0.05}>Appendix · DNS pipeline</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 46, lineHeight: 1.04, color: BRAND.ink, marginTop: 12 }}
          >
            Signals you can&apos;t read <span className="font-extrabold">off a page.</span>
          </motion.h1>
        </div>

        {/* Two columns */}
        <div className="flex items-stretch" style={{ gap: 26, marginTop: 38 }}>
          {/* Left: records */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: EASE }}
            className="rounded-3xl"
            style={{ width: 560, padding: "26px 26px 18px", background: "rgba(255,255,255,0.72)", border: "1px solid rgba(15,28,24,0.07)", boxShadow: "0 22px 54px -30px rgba(15,40,32,0.4)" }}
          >
            <p className="font-semibold uppercase" style={{ fontSize: 11.5, letterSpacing: "0.16em", color: BRAND.emerald, marginBottom: 16 }}>What we resolve</p>
            {RECORDS.map((r, i) => (
              <motion.div
                key={r.rec}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-4"
                style={{ padding: "13px 0", borderBottom: i < RECORDS.length - 1 ? "1px solid rgba(15,28,24,0.06)" : "none" }}
              >
                <span className="grid place-items-center rounded-xl shrink-0" style={{ width: 42, height: 42, background: "rgba(34,130,111,0.1)" }}>
                  <r.Icon size={20} color={BRAND.emerald} strokeWidth={2.1} />
                </span>
                <span className="font-bold tracking-tight" style={{ fontSize: 16, color: BRAND.ink, width: 96 }}>{r.rec}</span>
                <span className="font-medium tracking-tight" style={{ fontSize: 14, color: "rgba(15,28,24,0.62)" }}>{r.reveal}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: examples + payoff */}
          <div className="flex flex-col flex-1" style={{ gap: 16 }}>
            <motion.div
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
              className="rounded-3xl flex-1"
              style={{ padding: "24px 24px 10px", background: "rgba(255,255,255,0.72)", border: "1px solid rgba(15,28,24,0.07)", boxShadow: "0 22px 54px -30px rgba(15,40,32,0.4)" }}
            >
              <p className="font-semibold uppercase" style={{ fontSize: 11.5, letterSpacing: "0.16em", color: BRAND.emerald, marginBottom: 14 }}>What it catches</p>
              {EXAMPLES.map((e, i) => (
                <motion.div
                  key={e.vendor}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.1 }}
                  className="flex items-center justify-between"
                  style={{ padding: "12px 0", borderBottom: i < EXAMPLES.length - 1 ? "1px solid rgba(15,28,24,0.06)" : "none" }}
                >
                  <span className="font-bold tracking-tight" style={{ fontSize: 15.5, color: BRAND.ink }}>{e.vendor}</span>
                  <span className="font-mono" style={{ fontSize: 12.5, color: "rgba(15,28,24,0.6)", background: "rgba(34,130,111,0.07)", padding: "4px 10px", borderRadius: 6 }}>{e.via}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="flex items-center gap-3 rounded-2xl"
              style={{ padding: "16px 18px", background: "linear-gradient(135deg, rgba(34,130,111,0.1), rgba(82,254,191,0.08))", border: "1px solid rgba(34,130,111,0.18)" }}
            >
              <span className="grid place-items-center rounded-lg shrink-0" style={{ width: 36, height: 36, background: "linear-gradient(135deg, #52FEBF, #22826F)" }}>
                <EyeOff size={18} color="#0F1C18" strokeWidth={2.2} />
              </span>
              <span className="font-semibold tracking-tight" style={{ fontSize: 15, color: BRAND.ink, lineHeight: 1.4 }}>
                Reveals back-office tools with zero front-end footprint, and can&apos;t be spoofed by a copied tag.
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
};

export default TechDnsPipelineSlide;
