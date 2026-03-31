/*
 * Design: 「山水数字」— Business Model Slide
 * Revenue layers with stacking visual
 */
import AnimatedSection from "@/components/AnimatedSection";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { Rocket, Bot, Monitor, Briefcase } from "lucide-react";

function AnimatedPercent({
  value,
  isActive,
}: {
  value: number;
  isActive: boolean;
}) {
  const count = useCountUp(value, 2000, isActive);
  return <span>{count}</span>;
}

const revenueStreams = [
  {
    icon: <Rocket className="w-5 h-5" />,
    name: "一次性系统部署服务",
    content: "乡镇空间智能运营系统",
    price: "约 20 万元/空间",
    color: "#d4a853",
    width: "100%",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    name: "智能体接口服务",
    content: "AI 工作流：客服问答、内容生成、资源匹配等",
    price: "约 5 万元起/年/空间",
    color: "#4a9e8e",
    width: "75%",
  },
  {
    icon: <Monitor className="w-5 h-5" />,
    name: "硬件系统",
    content: "智能大屏、门禁终端、空间设备等实现空间无人值守",
    price: "自研空间智能硬件协议",
    color: "#e8a87c",
    width: "50%",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    name: "产业咨询和连接服务",
    content: "运营咨询、创业孵化、品牌合作、产业资源对接",
    price: "与地方政策联动提供咨询和FA服务",
    color: "#8b9dc3",
    width: "35%",
  },
];

export default function BusinessModelSlide() {
  const { ref, isInView } = useInView(0.3);

  return (
    <div
      ref={ref}
      className="snap-section relative grain-overlay"
      style={{
        background: "linear-gradient(180deg, #0a0f1a 0%, #0d1320 100%)",
      }}
    >
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:w-2/5">
            <AnimatedSection animation="slide-up" delay={0.1}>
              <p
                className="text-[#d4a853] text-xs tracking-[0.3em] mb-4"
                style={{ fontFamily: "'Space Grotesk', monospace" }}
              >
                商业模型
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={0.2}>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight mb-6"
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  color: "#e8e4df",
                }}
              >
                四层收入
                <span className="gradient-text-amber">叠加</span>
                模型
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={0.35}>
              <p
                className="text-[#e8e4df]/55 text-sm leading-relaxed mb-8"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                收入由四层叠加构成，随节点成熟度逐步释放
              </p>
            </AnimatedSection>

            {/* Key metrics */}
            <AnimatedSection animation="slide-up" delay={0.5}>
              <div className="glass-card rounded-lg p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div
                      className="text-3xl font-bold text-[#d4a853] mb-1"
                      style={{ fontFamily: "'Space Grotesk', monospace" }}
                    >
                      20-30
                    </div>
                    <div
                      className="text-[#e8e4df]/40 text-xs"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    >
                      单节点年营收（万元）
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-3xl font-bold text-[#4a9e8e] mb-1"
                      style={{ fontFamily: "'Space Grotesk', monospace" }}
                    >
                      <AnimatedPercent value={60} isActive={isInView} />
                      %+
                    </div>
                    <div
                      className="text-[#e8e4df]/40 text-xs"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    >
                      规模化后利润率
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Revenue stream cards */}
          <div className="lg:w-3/5 space-y-4">
            {revenueStreams.map((stream, i) => (
              <AnimatedSection
                key={i}
                animation="slide-left"
                delay={0.3 + i * 0.12}
              >
                <div
                  className="glass-card rounded-lg p-5 flex items-center gap-5 group hover:translate-x-[-4px] transition-all duration-300"
                  style={{
                    borderLeftWidth: "3px",
                    borderLeftColor: stream.color,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${stream.color}12`,
                      color: stream.color,
                    }}
                  >
                    {stream.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        className="text-sm font-semibold"
                        style={{
                          color: stream.color,
                          fontFamily: "'Noto Sans SC', sans-serif",
                        }}
                      >
                        {stream.name}
                      </h3>
                      <div className="text-right shrink-0">
                        <span
                          className="text-lg font-bold"
                          style={{
                            color: "#d4a853",
                            fontFamily: "'Space Grotesk', monospace",
                          }}
                        >
                          {stream.price.split('/')[0]}
                        </span>
                        <span
                          className="text-xs text-[#e8e4df]/40 ml-1"
                          style={{ fontFamily: "'Space Grotesk', monospace" }}
                        >
                          /{stream.price.split('/')[1]}
                        </span>
                      </div>
                    </div>
                    <p
                      className="text-[#e8e4df]/50 text-xs mt-2"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    >
                      {stream.content}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
