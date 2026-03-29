/*
 * Design: 「山水数字」— Pain Point Slide
 * Three-layer pain point visualization
 * Asymmetric layout with left title, right cards
 */
import AnimatedSection from "@/components/AnimatedSection";
import MountainDivider from "@/components/MountainDivider";
import { AlertTriangle, Layers, Megaphone } from "lucide-react";

const painLayers = [
  {
    icon: <Layers className="w-5 h-5" />,
    label: "基础运营层",
    color: "#d4a853",
    items: [
      "物业管理：设施维护、节水节电、成本管控",
      "空间管理：日常接待、秩序维护、社群氛围建设",
    ],
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    label: "内容运营层",
    color: "#4a9e8e",
    items: [
      "青创主题运营：资源整合与信息服务",
      "活动策划：创意策划与传播执行的持续协同",
    ],
  },
  {
    icon: <Megaphone className="w-5 h-5" />,
    label: "增长运营层",
    color: "#e8a87c",
    items: [
      "传播与推广：在信息嘈杂的环境中持续被看见",
      "运营复盘：持续总结经验，让项目不断进化",
    ],
  },
];

export default function PainPointSlide() {
  return (
    <div
      className="snap-section relative grain-overlay"
      style={{
        background:
          "linear-gradient(135deg, #0a0f1a 0%, #0f1520 50%, #0a1018 100%)",
      }}
    >
      <MountainDivider position="bottom" color="rgba(74, 158, 142, 0.05)" />

      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center px-8 md:px-16 lg:px-24 py-16 gap-8 lg:gap-16">
        {/* Left: Title area */}
        <div className="lg:w-2/5 flex flex-col justify-center">
          <AnimatedSection animation="slide-up" delay={0.1}>
            <p
              className="text-[#d4a853] text-xs tracking-[0.3em] mb-4"
              style={{ fontFamily: "'Space Grotesk', monospace" }}
            >
              行业痛点
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.2}>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
            >
              乡镇空间运营
              <br />
              <span className="gradient-text-amber">难在事无巨细
              <br />
              又捉襟见肘</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.4}>
            <p
              className="text-[#e8e4df]/60 text-base leading-relaxed"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              许多乡村空间项目最终只停留在"展示"，难以形成真实活力。完整的运营体系是
              <strong className="text-[#d4a853]">
                智慧密集 × 能力密集 × 劳动密集
              </strong>
              的复杂系统，一般地方无法承担实现完整功能所需的投入。
            </p>
          </AnimatedSection>
        </div>

        {/* Right: Pain layer cards */}
        <div className="lg:w-3/5 flex flex-col gap-5">
          {painLayers.map((layer, i) => (
            <AnimatedSection
              key={i}
              animation="slide-left"
              delay={0.3 + i * 0.15}
            >
              <div
                className="glass-card rounded-lg p-6 transition-all duration-300 hover:translate-x-[-4px]"
                style={{ borderLeftColor: layer.color, borderLeftWidth: "3px" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center"
                    style={{
                      backgroundColor: `${layer.color}15`,
                      color: layer.color,
                    }}
                  >
                    {layer.icon}
                  </div>
                  <span
                    className="text-sm font-semibold tracking-wide"
                    style={{
                      color: layer.color,
                      fontFamily: "'Noto Sans SC', sans-serif",
                    }}
                  >
                    {layer.label}
                  </span>
                </div>
                <div className="space-y-2 ml-11">
                  {layer.items.map((item, j) => (
                    <p
                      key={j}
                      className="text-[#e8e4df]/55 text-sm leading-relaxed"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
