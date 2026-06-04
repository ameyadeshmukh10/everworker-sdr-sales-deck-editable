import { motion } from "framer-motion";
import { Copy, EyeOff, Briefcase } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

type Row = {
  Icon: typeof Copy;
  vendor: string;
  status: string;
  struck?: boolean;
  note: string;
  tag: string;
};

const ROWS: Row[] = [
  { Icon: Copy, vendor: "Marketo", status: "In use", struck: true, note: "An outdated pixel that is no longer in use.", tag: "Stale" },
  { Icon: EyeOff, vendor: "Microsoft 365", status: "Not found", note: "Email lives in the back office. No front-end trace to scan.", tag: "Missed" },
  { Icon: Briefcase, vendor: "HubSpot", status: "In use", struck: true, note: "Only listed in an open role's job description.", tag: "Inferred" },
];

const TechProblemSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: "60px 80px" }}>
        <div className="flex flex-col items-center text-center">
          <Kicker delay={0.05}>The problem</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 50, lineHeight: 1.04, color: BRAND.ink, marginTop: 16 }}
          >
            Most technographic data is <span className="font-extrabold">guessing.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="font-medium tracking-tight"
            style={{ fontSize: 16.5, color: "rgba(15,28,24,0.55)", marginTop: 12 }}
          >
            Here is what legacy technographic data actually hands you.
          </motion.p>
        </div>

        {/* broken report artifact */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32, ease: EASE }}
          className="rounded-3xl self-center"
          style={{
            width: 780,
            marginTop: 36,
            background: "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(248,248,246,0.92) 100%)",
            border: "1px solid rgba(15,28,24,0.09)",
            boxShadow: "0 24px 60px -30px rgba(15,40,32,0.4)",
            overflow: "hidden",
          }}
        >
          {/* report header */}
          <div className="flex items-center justify-between" style={{ padding: "13px 22px", background: "rgba(15,28,24,0.03)", borderBottom: "1px solid rgba(15,28,24,0.07)" }}>
            <span className="font-semibold uppercase" style={{ fontSize: 11, letterSpacing: "0.16em", color: "rgba(15,28,24,0.5)" }}>Legacy technographic report</span>
            <span className="font-mono" style={{ fontSize: 11, color: "rgba(15,28,24,0.4)" }}>source: scraped signals</span>
          </div>

          {ROWS.map((r, i) => (
            <motion.div
              key={r.vendor}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.46 + i * 0.12 }}
              className="flex items-center gap-4"
              style={{ padding: "16px 22px", borderBottom: i < ROWS.length - 1 ? "1px solid rgba(15,28,24,0.06)" : "none" }}
            >
              <span className="grid place-items-center rounded-lg shrink-0" style={{ width: 36, height: 36, background: "rgba(15,28,24,0.055)" }}>
                <r.Icon size={18} color="rgba(15,28,24,0.45)" strokeWidth={2.1} />
              </span>
              <div style={{ width: 150 }}>
                <span className="font-bold tracking-tight" style={{ fontSize: 16, color: BRAND.ink }}>{r.vendor}</span>
                <span className="font-medium" style={{ fontSize: 13, color: "rgba(15,28,24,0.45)", marginLeft: 10, textDecoration: r.struck ? "line-through" : "none" }}>{r.status}</span>
              </div>
              <span className="font-medium tracking-tight flex-1" style={{ fontSize: 14, color: "rgba(15,28,24,0.6)" }}>{r.note}</span>
              <span className="rounded-full font-semibold uppercase shrink-0" style={{ fontSize: 10.5, letterSpacing: "0.1em", padding: "5px 12px", background: "rgba(15,28,24,0.07)", color: "rgba(15,28,24,0.52)" }}>{r.tag}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="text-center font-medium tracking-tight"
          style={{ fontSize: 15, color: "rgba(15,28,24,0.55)", marginTop: 24 }}
        >
          Every play built on it, targeting, qualification, outreach, inherits the error.
        </motion.p>
      </div>
    </SlideFrame>
  );
};

export default TechProblemSlide;
