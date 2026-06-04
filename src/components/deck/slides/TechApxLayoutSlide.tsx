import { motion } from "framer-motion";
import { RefreshCw, Terminal } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const TREE: { text: string; comment?: string; indent: number }[] = [
  { text: "signatures/", indent: 0 },
  { text: "vendors.json  categories.json", comment: "curated taxonomy", indent: 1 },
  { text: "dns/<id>.json  web/<id>.json", comment: "curated signatures", indent: 1 },
  { text: "selection.marketing_sales.json", comment: "default GTM selection", indent: 1 },
  { text: "master/", indent: 1 },
  { text: "vendors.json  categories.json  _meta.json", indent: 2 },
  { text: "dns/all.json  web/<letter>.json", comment: "imported, sharded", indent: 2 },
];

const TechApxLayoutSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col" style={{ padding: "52px 64px 48px" }}>
        <div>
          <Kicker delay={0.05}>Appendix · Library layout</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 38, lineHeight: 1.04, color: BRAND.ink, marginTop: 12 }}
          >
            One taxonomy, <span className="font-extrabold">two tiers, always fresh.</span>
          </motion.h1>
        </div>

        <div className="flex items-stretch" style={{ gap: 22, marginTop: 26 }}>
          {/* file tree */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease: EASE }}
            className="rounded-3xl font-mono"
            style={{ width: 640, padding: "22px 26px", background: "linear-gradient(160deg, #16241f 0%, #0F1C18 120%)", border: "1px solid rgba(82,254,191,0.26)", boxShadow: "0 24px 60px -30px rgba(15,40,32,0.6)" }}
          >
            {TREE.map((r) => (
              <div key={r.text} style={{ paddingLeft: r.indent * 22, paddingTop: 5, paddingBottom: 5 }} className="flex items-center justify-between">
                <span style={{ fontSize: 13, color: r.indent === 0 ? "#52FEBF" : "rgba(255,255,255,0.85)" }}>{r.text}</span>
                {r.comment && <span style={{ fontSize: 11.5, color: "rgba(255,255,255,0.4)" }}># {r.comment}</span>}
              </div>
            ))}
          </motion.div>

          {/* operations */}
          <div className="flex flex-col flex-1" style={{ gap: 16 }}>
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.38, ease: EASE }}
              className="rounded-3xl flex flex-col flex-1"
              style={{ padding: "22px 24px", background: "rgba(255,255,255,0.72)", border: "1px solid rgba(15,28,24,0.07)", boxShadow: "0 20px 50px -30px rgba(15,40,32,0.4)" }}
            >
              <div className="flex items-center gap-2.5" style={{ marginBottom: 12 }}>
                <RefreshCw size={17} color={BRAND.emerald} strokeWidth={2.1} />
                <span className="font-semibold uppercase" style={{ fontSize: 11, letterSpacing: "0.16em", color: BRAND.emerald }}>Stays current</span>
              </div>
              <p className="font-medium tracking-tight" style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(15,28,24,0.62)" }}>
                Curated signatures override the master per vendor. Re-import the Wappalyzer library on demand, then regenerate the catalogue.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
              className="rounded-2xl font-mono flex items-center gap-3"
              style={{ padding: "16px 18px", background: "rgba(15,28,24,0.05)", border: "1px solid rgba(15,28,24,0.08)" }}
            >
              <Terminal size={16} color={BRAND.emerald} strokeWidth={2.1} />
              <span style={{ fontSize: 12.5, color: BRAND.ink }}>technographics import-master</span>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
};

export default TechApxLayoutSlide;
