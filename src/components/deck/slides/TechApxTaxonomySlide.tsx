import { motion } from "framer-motion";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const DOMAINS: { name: string; count: string }[] = [
  { name: "Content & Web Platforms", count: "1,387" },
  { name: "Commerce", count: "1,376" },
  { name: "Web Development & Frameworks", count: "991" },
  { name: "Analytics & Optimization", count: "780" },
  { name: "Marketing Automation & Messaging", count: "728" },
  { name: "Customer Support & Engagement", count: "523" },
  { name: "Sales & CRM", count: "443" },
  { name: "Infrastructure, Hosting & CDN", count: "431" },
  { name: "Business Operations", count: "281" },
  { name: "Advertising & Tag Management", count: "240" },
  { name: "Security, Privacy & Identity", count: "231" },
  { name: "Miscellaneous", count: "117" },
];

const TechApxTaxonomySlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: "56px 64px" }}>
        <div className="flex items-end justify-between" style={{ marginBottom: 30 }}>
          <div>
            <Kicker delay={0.05}>Appendix · Taxonomy</Kicker>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
              className="font-medium tracking-tight"
              style={{ fontSize: 40, lineHeight: 1.04, color: BRAND.ink, marginTop: 12 }}
            >
              12 domains, <span className="font-extrabold">108 categories.</span>
            </motion.h1>
          </div>
          <span className="font-medium tracking-tight" style={{ fontSize: 14, color: "rgba(15,28,24,0.55)" }}>
            7,528 vendors total
          </span>
        </div>

        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
          {DOMAINS.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24 + i * 0.04, ease: EASE }}
              className="rounded-2xl flex items-center justify-between"
              style={{ padding: "18px 20px", background: "rgba(255,255,255,0.72)", border: "1px solid rgba(15,28,24,0.07)", boxShadow: "0 12px 32px -26px rgba(15,40,32,0.35)" }}
            >
              <span className="font-semibold tracking-tight" style={{ fontSize: 14.5, color: BRAND.ink, lineHeight: 1.25, paddingRight: 10 }}>{d.name}</span>
              <span className="font-extrabold tracking-tight shrink-0" style={{ fontSize: 22, color: BRAND.emerald }}>{d.count}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
};

export default TechApxTaxonomySlide;
