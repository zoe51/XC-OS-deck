import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedText({ children, className = "", delay = 0 }: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface GlowCardProps {
  children: ReactNode;
  delay?: number;
  glowColor?: "cyan" | "violet" | "emerald";
}

export function GlowCard({ children, delay = 0, glowColor = "cyan" }: GlowCardProps) {
  const colorMap = {
    cyan: "#00d4ff",
    violet: "#7c3aed",
    emerald: "#10b981",
  };
  
  const color = colorMap[glowColor];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card rounded-xl p-6 relative overflow-hidden"
      style={{
        border: `1px solid ${color}25`,
        background: `linear-gradient(135deg, ${color}08, ${color}02)`,
      }}
    >
      {/* Glow effect */}
      <div
        className="absolute -inset-4 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-30 blur-xl -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, ${color}20, transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
}