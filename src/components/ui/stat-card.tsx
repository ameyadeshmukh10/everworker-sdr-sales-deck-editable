import { motion } from "framer-motion";
import { Counter } from "@/components/ui/animated-counter";

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

interface StatCardProps {
  stat: Stat;
  index: number;
  counterStarted: boolean;
}

/**
 * Shared stat card used across all worker pages "By the numbers" sections.
 * Suffix (% / × / + / etc.) renders smaller and top-aligned for cleaner typography.
 */
export const StatCard = ({ stat, index, counterStarted }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-2xl bg-[hsl(var(--accent))] text-accent-foreground px-6 py-10 text-center shadow-[0_8px_30px_-8px_hsl(var(--accent)/0.4)]"
    >
      <div className="flex items-start justify-center text-[#52FEBF] leading-none mb-4">
        {stat.prefix && (
          <span className="text-4xl sm:text-5xl font-bold tracking-tight">{stat.prefix}</span>
        )}
        {counterStarted ? (
          <Counter
            end={stat.value}
            duration={2}
            fontSize={56}
            className="text-[#52FEBF] font-bold tracking-tight"
          />
        ) : (
          <span className="text-4xl sm:text-5xl font-bold tracking-tight">0</span>
        )}
        {stat.suffix && (
          <span className="text-2xl sm:text-3xl font-semibold tracking-tight mt-1 ml-0.5">
            {stat.suffix}
          </span>
        )}
      </div>
      <p className="text-xs uppercase tracking-[0.12em] font-semibold opacity-90">
        {stat.label}
      </p>
    </motion.div>
  );
};
