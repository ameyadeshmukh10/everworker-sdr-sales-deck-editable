import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRef, useEffect, useState } from "react";

type DepartmentData = {
  label: string;
  tagline: string;
  description: string;
  workers: { name: string; role: string }[];
  href: string;
};

const departments: DepartmentData[] = [
  {
    label: "Marketing",
    tagline: "Generate pipeline.",
    description: "AI workers that create demand, optimize channels and fill pipeline.",
    workers: [
      { name: "Content Operations AI Worker", role: "Always-on, on-brand content pipeline" },
      { name: "Advertising AI Worker", role: "Optimizes ad spend & creative, always-on" },
      { name: "Conversion Assets AI Worker", role: "Whitepapers & eBooks · coming soon" },
    ],
    href: "/marketing",
  },
  {
    label: "Sales",
    tagline: "Close revenue.",
    description: "AI workers that propel sales conversations and help teams close.",
    workers: [
      { name: "SDR AI Worker", role: "Qualification & meetings, at scale" },
      { name: "Sales Playbook AI Worker", role: "Context-driven talk tracks" },
      { name: "Pipeline Reporting AI Worker", role: "Real-time deal intelligence" },
    ],
    href: "/sales",
  },
  {
    label: "Financial Ops",
    tagline: "Protect cash.",
    description: "AI workers that process, reconcile and forecast with scalable autonomy.",
    workers: [
      { name: "Accounts Payable AI Worker", role: "Zero-touch invoice processing" },
      { name: "Accounts Receivable AI Worker", role: "Automated collections" },
      { name: "Cash Flow AI Worker", role: "Forecasts, optimizes and protects liquidity" },
    ],
    href: "/finance",
  },
];

const onboardingItems = ["Autonomous", "In your systems", "Report progress", "Chat with them, like people"];

/* SVG line chart path + gradient area */
const LineChart = ({ animate }: { animate: boolean }) => {
  const pathD =
    "M 0 234 C 30 232 50 228 80 220 C 100 214 110 208 130 212 C 150 216 155 220 170 210 C 190 196 200 188 230 178 C 250 172 260 176 280 168 C 300 158 310 142 340 120 C 360 104 370 108 390 90 C 410 70 430 44 460 28 C 480 16 510 6 540 2 L 560 0";
  const areaD = pathD + " L 560 240 L 0 240 Z";

  return (
    <svg viewBox="0 0 560 240" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="chartGradient" x1="0.15" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#52FEBF" stopOpacity="0.30" />
          <stop offset="50%" stopColor="#52FEBF" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#52FEBF" stopOpacity="0.01" />
        </linearGradient>
        <clipPath id="areaReveal">
          <rect
            x="0"
            y="0"
            width="560"
            height="240"
            style={{
              transform: animate ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </clipPath>
      </defs>
      {/* Gradient fill */}
      <path d={areaD} fill="url(#chartGradient)" clipPath="url(#areaReveal)" />
      {/* Line */}
      <path
        d={pathD}
        fill="none"
        stroke="#22826F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 1200,
          strokeDashoffset: animate ? 0 : 1200,
          transition: "stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </svg>
  );
};

const DepartmentCards = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInView = useInView(chartRef, { once: true, margin: "-100px" });
  const [chartAnimate, setChartAnimate] = useState(false);

  useEffect(() => {
    if (chartInView) {
      const t = setTimeout(() => setChartAnimate(true), 200);
      return () => clearTimeout(t);
    }
  }, [chartInView]);

  return (
    <section id="workers" className="pt-32 pb-48 px-6 lg:px-8">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground/60 text-center mb-4 tracking-widest uppercase"
        >
          With EverWorker
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold tracking-tight text-foreground text-center mb-5"
        >
          <span className="text-foreground">You could be getting more</span>
          <br />
          <span className="text-foreground">from your revenue operations</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground text-center mb-20 max-w-lg mx-auto"
        >
          Onboard the same AI workers used by AI-first brands.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border/60 bg-card flex flex-col shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
            >
              <div className="p-8 flex flex-col flex-1">
                <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-6">{dept.tagline}</p>

                <h3 className="text-3xl 2xl:text-4xl font-bold text-foreground tracking-tight mb-3">{dept.label}</h3>

                <p className="text-base text-muted-foreground leading-relaxed mb-8">{dept.description}</p>

                <ul className="space-y-1 mb-10 flex-1">
                  {dept.workers.map((w) => (
                    <li
                      key={w.name}
                      className="flex items-start gap-2.5 rounded-lg px-3 py-2.5 -mx-3 hover:bg-foreground/[0.04] transition-all duration-300 hover:scale-[1.02] origin-left cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <div>
                        <span className="text-base font-semibold text-foreground">{w.name}</span>
                        <p className="text-sm text-muted-foreground mt-0.5">{w.role}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={dept.href}
                className="relative overflow-hidden flex items-center justify-between px-8 py-4 text-base font-semibold text-accent transition-all duration-500 hover:bg-[#1D826F] hover:text-[#48FFBD]"
              >
                <span className="relative z-10">Explore workers</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-0 hover:translate-x-1.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Onboarding statement */}
        <div className="mt-40 mb-32 flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl 2xl:text-4xl font-bold text-foreground tracking-tight leading-snug"
          >
            AI Workers are onboarded,
            <br />
            not logged into
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {onboardingItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="flex items-center gap-2.5"
              >
                <Check className="h-5 w-5 text-foreground shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-foreground whitespace-nowrap">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-40 mb-12 grid md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <p className="text-3xl sm:text-4xl 2xl:text-5xl font-bold leading-snug tracking-tight">
              <span className="text-foreground">The rules of work have changed. </span>
              <span className="bg-gradient-to-r from-[#1C826E] to-[#259782] bg-clip-text text-transparent">
                Put AI Workers to work and do more.
              </span>
            </p>
            {/* Line chart */}
            <div ref={chartRef} className="mt-10 w-full">
              <LineChart animate={chartAnimate} />
            </div>
          </div>

          <div className="pt-2">
            <div className="border-t border-foreground/10" />
            {[
              { text: "No more bottlenecks", sub: "Remove the friction that slows every team down." },
              { text: "Infinitely more output", sub: "Scale work without scaling headcount." },
              { text: "1/100th of the old cost", sub: "Enterprise-grade results at a fraction of the price." },
              { text: "Make work human again", sub: "Let people focus on judgment, not process." },
            ].map((item) => (
              <div key={item.text}>
                <div className="py-5 transition-transform duration-300 hover:scale-[1.02] origin-left cursor-default">
                  <p className="text-lg font-semibold text-foreground tracking-tight">{item.text}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.sub}</p>
                </div>
                <div className="border-t border-foreground/10" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DepartmentCards;
