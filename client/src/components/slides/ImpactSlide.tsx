/*
 * Design: 「山水数字」— Social Impact Slide
 * Impact metrics with warm visual
 */
import AnimatedSection from "@/components/AnimatedSection";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { Users, Database, TrendingUp } from "lucide-react";

function Counter({ value, isActive }: { value: number; isActive: boolean }) {
  const count = useCountUp(value, 2000, isActive);
  return <span>{count}</span>;
}

const impacts = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "就业带动",
    desc: "每个空间可带动返乡青年就业/创业，并促进当地独立品牌建设",
    color: "#d4a853",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "数据基础设施建设",
    desc: "为乡村构建完善的数据收集、流动、管理与供需匹配机制",
    color: "#4a9e8e",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "周边商户增收",
    
    desc: "以 DN 黄山、DN 武夷山为例，社区空间落成后周边餐饮商户营收增加30%以上",
    color: "#e8a87c",
  },
];

export default function ImpactSlide() {
  const { ref, isInView } = useInView(0.3);

  return (
    <div
      ref={ref}
      className="snap-section relative grain-overlay"
      style={{ background: "#0a0f1a" }}
    >
      {/* Background video */}
      <div className="absolute inset-0">
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/95 via-[#0a0f1a]/85 to-[#0a0f1a]/70" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
        <AnimatedSection animation="slide-up" delay={0.1}>
          <p
            className="text-[#e8a87c] text-xs tracking-[0.3em] mb-4"
            style={{ fontFamily: "'Space Grotesk', monospace" }}
          >
            心中有爱，眼里有光
          </p>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay={0.2}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12"
            style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
          >
            社会
            <span
              style={{
                background: "linear-gradient(135deg, #e8a87c, #d4a853)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              效益
            </span>
          </h2>
        </AnimatedSection>
        <AnimatedSection animation="slide-up" delay={0.35}>
                    <p
                      className="text-[#e8e4df]/65 text-base leading-relaxed mb-6"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    >
                      乡创OS让公共空间从物理空间进化为一个
                      <strong className="text-[#d4a853]">
                        可感知、可干预、持续生长的创新生态体。
                      </strong>
                      <br />
                      这不止是一套效率工具，更是乡镇公共社区的创新样本，为政策制定、人才成长与创业生态研究提供真实可信的一手依据。
                    </p>
                  </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {impacts.map((impact, i) => (
            <AnimatedSection
              key={i}
              animation="slide-up"
              delay={0.35 + i * 0.15}
            >
              <div className="glass-card rounded-lg p-6 h-full group hover:translate-y-[-4px] transition-all duration-500">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${impact.color}12`,
                    color: impact.color,
                  }}
                >
                  {impact.icon}
                </div>
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{
                    color: impact.color,
                    fontFamily: "'Noto Sans SC', sans-serif",
                  }}
                >
                  {impact.title}
                </h3>

                <p
                  className="text-[#e8e4df]/55 text-sm leading-relaxed"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {impact.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
