import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { openWhitepaper } from "./WhitepaperDialog";

const departments = [
  { id: "all", label: "All departments" },
  { id: "marketing", label: "Marketing" },
  { id: "sales", label: "Sales" },
  { id: "finance", label: "Finance" },
];

const CTASection = () => {
  const [activeDept, setActiveDept] = useState("all");

  return (
    <section className="py-40 px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl px-8 sm:px-16 py-24 text-center section-dark"
      >
        <div className="gradient-orb w-[500px] h-[500px] bg-accent/15 top-[-30%] left-[-10%] absolute" />
        <div className="gradient-orb w-[400px] h-[400px] bg-blue-400/10 bottom-[-30%] right-[-10%] absolute" />

        <div className="relative z-10">
          <p className="text-base text-white/40 mb-4 tracking-wide">Free whitepaper</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5">
            Rethink the operations that<br className="hidden sm:block" /> drive your revenue
          </h2>
          <p className="text-lg text-white/40 mb-12 max-w-xl mx-auto">
            Revenue is the lifeblood of your business. This guide shows you how to rebuild the marketing, sales and finance engine with AI-first operations, so every dollar works harder.
          </p>

          {/* Department toggle */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex gap-1 rounded-full p-1 bg-white/[0.06] border border-white/[0.08]">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveDept(dept.id)}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeDept === dept.id
                      ? "text-foreground"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  {activeDept === dept.id && (
                    <motion.div
                      layoutId="cta-tab"
                      className="absolute inset-0 bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{dept.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={() => openWhitepaper(activeDept as "all" | "marketing" | "sales" | "finance")}
              className="rounded-[4px] bg-accent text-accent-foreground hover:bg-accent/90 px-8 h-11 text-md font-semibold gap-2 group shadow-lg shadow-accent/20"
            >
              <Download className="h-4 w-4" />
              Download the AI-first playbook
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
