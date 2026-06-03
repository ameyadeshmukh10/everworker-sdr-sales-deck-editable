import { motion } from "framer-motion";

const promises = [
  {
    number: "01",
    title: "Live in 45 days",
    subtitle: "Six weeks, not six months.",
    description:
      "Kickoff to production. We get you to AI faster through our platform + services model.",
  },
  {
    number: "02",
    title: "We do the work",
    subtitle: "Configured for you, not left to you.",
    description:
      "We configure every AI worker to your workflows and tune them to your business.",
  },
  {
    number: "03",
    title: "Risk free",
    subtitle: "Measurable outcomes, we make it right.",
    description:
      "We make sure that your AI workforce works to expectations or you can walk away."
  },
];

const PromiseSection = () => {
  return (
    <section className="py-48 lg:py-64 px-6 lg:px-8 section-dark relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-white/30 text-center mb-4 tracking-widest uppercase"
        >
          Why EverWorker
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold tracking-tight text-white text-center mb-6"
        >
          Built different. Delivered fast.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/40 text-center mb-20 max-w-lg mx-auto"
        >
          Three promises we make to every customer.
        </motion.p>

        {/* Desktop: clipped container with internal skew */}
        <div className="hidden md:block">
          <div className="rounded-lg overflow-hidden">
            <div className="flex">
              {promises.map((p, i) => (
                <motion.div
                  key={p.number}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative group flex-1"
                >
                  {/* Skewed background, clipped by parent overflow-hidden */}
                  <div
                    className="absolute -inset-x-4 inset-y-0 border-y border-white/[0.08] bg-white/[0.03] transition-all duration-500 group-hover:bg-white/[0.06]"
                    style={{ transform: "skewX(-8deg)" }}
                  />
                  {/* Vertical divider between cards */}
                  {i > 0 && (
                    <div
                      className="absolute left-0 inset-y-2 w-px bg-white/[0.08]"
                      style={{ transform: "skewX(-8deg)" }}
                    />
                  )}

                  {/* Content */}
                  <div className="relative z-10 px-8 py-10">
                    <span className="text-xs font-mono text-accent/60 tracking-widest">
                      {p.number}
                    </span>
                    <h3 className="text-2xl 2xl:text-3xl font-bold text-white tracking-tight mt-4 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm font-semibold text-accent mb-3">
                      {p.subtitle}
                    </p>
                    <p className="text-[15px] text-white/40 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: simple stacked cards, no skew */}
        <div className="md:hidden flex flex-col gap-4">
          {promises.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-6 py-8"
            >
              <span className="text-xs font-mono text-accent/60 tracking-widest">
                {p.number}
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight mt-3 mb-1.5">
                {p.title}
              </h3>
              <p className="text-sm font-semibold text-accent mb-3">
                {p.subtitle}
              </p>
              <p className="text-[15px] text-white/40 leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
