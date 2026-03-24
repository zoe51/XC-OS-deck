import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "slide-up" | "slide-left" | "slide-right" | "fade-in";
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "slide-up",
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView(0.2);

  const animClass = isInView ? `animate-${animation}` : "opacity-0";

  return (
    <div
      ref={ref}
      className={`${animClass} ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
}
