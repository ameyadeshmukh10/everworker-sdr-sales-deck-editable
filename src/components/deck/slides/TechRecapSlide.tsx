import { motion } from "framer-motion";
import { Eye, Gauge, Database } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const PILLARS: { Icon: typeof Eye; title: string; body: string }[] = [
  { Icon: Eye, title: "Sees more", body: "Two pipelines, DNS plus rendered web, catch the back-office and runtime tools others miss." },
  { Icon: Gauge, title: "Scores it", body: "Corroboration and noisy-OR fusion ship every detection with a confidence, not a guess." },
  { Icon: Database, title: "Lands in your CRM", body: "The signals relevant to your GTM, scored and written to your CRM, ready for your Worker and team to act on." },
];

const TechRecapSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: "64px 70px" }}>
        <div className="flex flex-col items-center text-center">
          <Kicker delay={0.05}>The whole story</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 48, lineHeight: 1.04, color: BRAND.ink, marginTop: 16 }}
          >
            Built to be <span className="font-extrabold">right.</span>
          </motion.h1>
        </div>

        <div className="flex items-stretch justify-center" style={{ gap: 22, marginTop: 48 }}>
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 + i * 0.14, ease: EASE }}
              className="rounded-3xl flex flex-col items-center text-center"
              style={{
                width: 320,
                padding: "32px 28px",
                background: "linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.9) 100%)",
                border: "1px solid rgba(15,28,24,0.07)",
                boxShadow: "0 20px 50px -28px rgba(15,40,32,0.4)",
              }}
            >
              <span className="grid place-items-center rounded-2xl" style={{ width: 56, height: 56, background: "linear-gradient(135deg, #52FEBF, #22826F)", boxShadow: "0 0 20px rgba(82,254,191,0.4)" }}>
                <p.Icon size={27} color="#0F1C18" strokeWidth={2.1} />
              </span>
              <span className="font-bold tracking-tight" style={{ fontSize: 22, color: BRAND.ink, marginTop: 18 }}>{p.title}</span>
              <span className="font-medium tracking-tight" style={{ fontSize: 15, lineHeight: 1.5, color: "rgba(15,28,24,0.6)", marginTop: 9 }}>{p.body}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
};

export default TechRecapSlide;
