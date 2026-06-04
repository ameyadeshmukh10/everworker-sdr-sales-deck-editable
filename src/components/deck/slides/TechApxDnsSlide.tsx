import { motion } from "framer-motion";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const CURATED: { vendor: string; records: string }[] = [
  { vendor: "Akamai", records: "CNAME" },
  { vendor: "Cloudflare", records: "NS / CNAME" },
  { vendor: "Customer.io", records: "CNAME" },
  { vendor: "Fastly", records: "CNAME" },
  { vendor: "Google Workspace", records: "TXT / MX" },
  { vendor: "HubSpot", records: "CNAME" },
  { vendor: "Intercom", records: "TXT / CNAME" },
  { vendor: "Klaviyo", records: "CNAME" },
  { vendor: "Marketo", records: "CNAME" },
  { vendor: "Microsoft 365", records: "TXT / CNAME / MX" },
  { vendor: "Salesforce", records: "CNAME" },
  { vendor: "Pardot", records: "CNAME" },
  { vendor: "Zendesk", records: "TXT / CNAME / MX" },
];

const MASTER = ["Amazon SES", "Mailgun", "SendGrid", "Mailjet", "Zoho Mail", "Proton Mail", "GoDaddy", "Hetzner", "OVHcloud", "IONOS", "Vercel", "Amazon CloudFront", "Stripe", "DocuSign", "MailChimp"];

const TechApxDnsSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col" style={{ padding: "52px 64px 44px" }}>
        <div>
          <Kicker delay={0.05}>Appendix · DNS catalogue</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 38, lineHeight: 1.04, color: BRAND.ink, marginTop: 12 }}
          >
            94 DNS signatures, <span className="font-extrabold">two tiers.</span>
          </motion.h1>
        </div>

        <div className="flex items-stretch" style={{ gap: 22, marginTop: 26 }}>
          {/* Curated */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease: EASE }}
            className="rounded-3xl"
            style={{ width: 600, padding: "20px 24px 14px", background: "rgba(255,255,255,0.72)", border: "1px solid rgba(15,28,24,0.07)", boxShadow: "0 20px 50px -30px rgba(15,40,32,0.4)" }}
          >
            <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
              <span className="font-semibold uppercase" style={{ fontSize: 11, letterSpacing: "0.16em", color: BRAND.emerald }}>Curated · GTM-focused</span>
              <span className="font-bold" style={{ fontSize: 13, color: "rgba(15,28,24,0.5)" }}>13</span>
            </div>
            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "0px 22px" }}>
              {CURATED.map((c, i) => (
                <div key={c.vendor} className="flex items-center justify-between" style={{ padding: "7.5px 0", borderBottom: "1px solid rgba(15,28,24,0.05)" }}>
                  <span className="font-semibold tracking-tight" style={{ fontSize: 13.5, color: BRAND.ink }}>{c.vendor}</span>
                  <span className="font-mono" style={{ fontSize: 11, color: "rgba(15,28,24,0.55)" }}>{c.records}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Master */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.38, ease: EASE }}
            className="rounded-3xl flex flex-col flex-1"
            style={{ padding: "20px 24px", background: "rgba(255,255,255,0.72)", border: "1px solid rgba(15,28,24,0.07)", boxShadow: "0 20px 50px -30px rgba(15,40,32,0.4)" }}
          >
            <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
              <span className="font-semibold uppercase" style={{ fontSize: 11, letterSpacing: "0.16em", color: BRAND.emerald }}>Master · imported</span>
              <span className="font-bold" style={{ fontSize: 13, color: "rgba(15,28,24,0.5)" }}>81</span>
            </div>
            <p className="font-medium tracking-tight" style={{ fontSize: 13.5, lineHeight: 1.5, color: "rgba(15,28,24,0.6)", marginBottom: 14 }}>
              Imported from Wappalyzer, predominantly hosting, email, and CDN providers across SOA / NS / MX / TXT / CNAME.
            </p>
            <div className="flex flex-wrap" style={{ gap: 7 }}>
              {MASTER.map((m) => (
                <span key={m} className="rounded-full font-semibold tracking-tight" style={{ fontSize: 11.5, padding: "5px 10px", background: "rgba(34,130,111,0.07)", color: BRAND.emerald, border: "1px solid rgba(34,130,111,0.14)" }}>{m}</span>
              ))}
              <span className="rounded-full font-semibold tracking-tight" style={{ fontSize: 11.5, padding: "5px 10px", background: "rgba(15,28,24,0.05)", color: "rgba(15,28,24,0.5)" }}>+66 more</span>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
};

export default TechApxDnsSlide;
