/*
 * Design: 「山水数字」— Why Now Slide
 * Four reasons with counter animations
 */
import AnimatedSection from "@/components/AnimatedSection";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { Globe, Cpu, Shield, Crosshair } from "lucide-react";

function StatNumber({
  value,
  suffix,
  isActive,
}: {
  value: number;
  suffix: string;
  isActive: boolean;
}) {
  const count = useCountUp(value, 2000, isActive);
  return (
    <span style={{ fontFamily: "'Space Grotesk', monospace" }}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function WhyNowSlide() {
  const { ref, isInView } = useInView(0.3);

  const reasons = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "乡镇公共空间需求明确",
      stat: 50,
      statSuffix: "万+",
      statLabel: "行政村与县镇公共空间",
      desc: "中国拥有2万县镇，超 50 万个行政村，其中 5,000–20,000 个高潜力村镇构成核心可服务市场，乡镇数字化转型需求已到爆发期",
      color: "#d4a853",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI 能力成熟且成本可控",
      stat: 90,
      statSuffix: "%+",
      statLabel: "API 成本降幅",
      desc: "大模型 API 成本降幅超 90%，已降至乡镇场景可承受水平，智能体技术进入规模化落地窗口",
      color: "#4a9e8e",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "乡村文旅政策红利持续",
      stat: 0,
      statSuffix: "",
      statLabel: "十四五规划支持",
      desc: "乡村振兴战略深化，数字乡村纲要与文旅产业政策叠加，明确支持返乡创业与数字基础设施建设",
      color: "#e8a87c",
    },
    {
      icon: <Crosshair className="w-6 h-6" />,
      title: "行业早期无头部竞争者",
      stat: 0,
      statSuffix: "",
      statLabel: "系统性平台玩家",
      desc: "乡村数字化基础设施尚无系统性平台玩家，处于绝对蓝海阶段，先发优势显著",
      color: "#8b9dc3",
    },
  ];

  return (
    <div
      ref={ref}
      className="snap-section relative grain-overlay"
      style={{
        background:
          "linear-gradient(135deg, #0a0f1a 0%, #0c1220 50%, #0a0f1a 100%)",
      }}
    >
      {/* Decorative gradient orb */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10"
        style={{ background: "radial-gradient(circle, #d4a853, transparent)" }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
        <AnimatedSection animation="slide-up" delay={0.1}>
          <p
            className="text-[#d4a853] text-xs tracking-[0.3em] mb-4"
            style={{ fontFamily: "'Space Grotesk', monospace" }}
          >
            时机窗口
          </p>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay={0.2}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12"
            style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
          >
            为什么<span className="gradient-text-amber">现在</span>是窗口期
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <AnimatedSection
              key={i}
              animation="slide-up"
              delay={0.35 + i * 0.12}
            >
              <div className="glass-card rounded-lg p-6 h-full group hover:translate-y-[-4px] transition-all duration-500">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${r.color}12`, color: r.color }}
                >
                  {r.icon}
                </div>
                <div className="mb-3">
                  <div
                    className="text-3xl font-bold mb-0.5"
                    style={{
                      color: r.color,
                      fontFamily: "'Space Grotesk', monospace",
                    }}
                  >
                    {r.title === "乡镇公共空间需求明确" ? (
                      "需求已验证"
                    ) : r.title === "AI 能力成熟且成本可控" ? (
                      "AI成本可控"
                    ) : r.stat > 0 ? (
                      <StatNumber
                        value={r.stat}
                        suffix={r.statSuffix}
                        isActive={isInView}
                      />
                    ) : (
                      <span>
                        {r.statLabel === "十四五规划支持"
                          ? "顺应国情"
                          : r.statLabel === "系统性平台玩家"
                            ? "蓝海"
                            : "0"}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-[#e8e4df]/40 text-xs"
                    style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                  >
                    {r.statLabel}
                  </p>
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{
                    color: "#e8e4df",
                    fontFamily: "'Noto Sans SC', sans-serif",
                  }}
                >
                  {r.title}
                </h3>
                <p
                  className="text-[#e8e4df]/50 text-sm leading-relaxed"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {r.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
