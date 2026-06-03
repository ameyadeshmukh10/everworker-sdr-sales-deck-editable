import { useState } from "react";
import { departments, getExtendedWorkers, type Department } from "@/data/workers";
import { motion, AnimatePresence } from "framer-motion";

const ExtendedWorkers = () => {
  const [activeTab, setActiveTab] = useState<Department>("marketing");
  const extWorkers = getExtendedWorkers(activeTab);

  return (
    <section className="py-32 px-6 lg:px-8 relative overflow-hidden" style={{ background: 'hsl(var(--section-warm))' }}>
      <div className="gradient-orb w-[500px] h-[500px] bg-accent/10 top-10 right-[-15%] absolute" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-base text-muted-foreground text-center mb-4 tracking-wide"
        >
          Full roster
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-center mb-6"
        >
          36 specialized workers
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground text-center mb-16 max-w-md mx-auto"
        >
          Every sub-function covered. Deploy any of them today.
        </motion.p>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-1 glass-strong rounded-full p-1">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveTab(dept.id)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === dept.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeTab === dept.id && (
                  <motion.div
                    layoutId="ext-tab"
                    className="absolute inset-0 bg-foreground rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{dept.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {extWorkers.map((worker, i) => (
              <motion.div
                key={worker.name}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.02 }}
                className="glass-strong rounded-2xl px-5 py-5 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group"
              >
                <h4 className="text-base font-semibold text-foreground mb-1.5 group-hover:text-accent transition-colors">{worker.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{worker.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExtendedWorkers;
