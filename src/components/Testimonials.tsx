import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import headshotSarah from "@/assets/headshot-sarah.jpg";
import headshotMarcus from "@/assets/headshot-marcus.jpg";
import headshotPriya from "@/assets/headshot-priya.jpg";

const testimonials = [
  {
    quote: "We replaced three full-time hires. Output tripled in month one.",
    name: "Sarah Chen",
    role: "CMO",
    company: "Vantage Health",
    department: "Marketing",
    image: headshotSarah,
  },
  {
    quote: "200+ leads qualified daily at 94% accuracy. Paid for itself in week one.",
    name: "Marcus Johnson",
    role: "CRO",
    company: "Relay Commerce",
    department: "Sales",
    image: headshotMarcus,
  },
  {
    quote: "Month-end close went from 5 days to 1.5. Our board noticed immediately.",
    name: "Priya Patel",
    role: "CFO",
    company: "Nova Financial",
    department: "Finance",
    image: headshotPriya,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-40 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-base text-muted-foreground/60 text-center mb-4 tracking-widest uppercase"
        >
          What operators are saying
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-center mb-20"
        >
          Results that speak for themselves
        </motion.h2>

        {/* Carousel */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden bg-white border border-border/60 shadow-[0_8px_50px_-12px_rgba(0,0,0,0.1),0_0_80px_-20px_hsla(152,56%,40%,0.08)] transition-shadow duration-500">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col md:flex-row items-stretch"
              >
                {/* Headshot */}
                <div className="md:w-80 lg:w-96 shrink-0">
                  <img
                    src={t.image}
                    alt={`${t.name}, ${t.role}`}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-full h-72 md:h-full object-cover"
                  />
                </div>

                {/* Quote content */}
                <div className="flex-1 p-10 md:p-14 lg:p-16 flex flex-col justify-center">
                  <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-8">
                    {t.department}
                  </p>
                  <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-10 tracking-tight">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-lg font-bold text-foreground">{t.name}</p>
                    <p className="text-base text-muted-foreground">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-white shadow-sm flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft className="h-4 w-4 text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent w-6" : "bg-border hover:bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-white shadow-sm flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight className="h-4 w-4 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
