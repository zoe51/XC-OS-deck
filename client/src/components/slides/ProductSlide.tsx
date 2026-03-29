/*
 * Design: 「山水数字」— Product Architecture Slide
 * Three-layer architecture with generated image
 */
import AnimatedSection from "@/components/AnimatedSection";
import { Brain, Server, MapPin } from "lucide-react";

const layers = [
  {
    icon: <MapPin className="w-5 h-5" />,
    name: "节点层",
    color: "#e8a87c",
    capabilities: ["线下空间节点", "智能硬件终端", "社区运营网络"],
  },
  {
    icon: <Server className="w-5 h-5" />,
    name: "平台层",
    color: "#4a9e8e",
    capabilities: ["SaaS 运营管理系统", "多租户数据架构"],
  },
  {
    icon: <Brain className="w-5 h-5" />,
    name: "AI 智能层",
    color: "#d4a853",
    capabilities: [
      "大模型接入封装",
      "向量检索",
      "AI 工作流编排",
      "访客与资源智能匹配",
      "内容生成与数据分析",
    ],
  },
];

export default function ProductSlide() {
  return (
    <div
      className="snap-section relative grain-overlay"
      style={{
        background: "linear-gradient(180deg, #0a0f1a 0%, #0d1320 100%)",
      }}
    >
      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center px-8 md:px-16 lg:px-24 py-16 gap-8 lg:gap-12">
        {/* Left: Architecture image */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <AnimatedSection animation="fade-in" delay={0.2}>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663468040496/ZvtLcmbVsxknwMtEAQho7F/product-architecture-ikXW2xkTFWcbKFAHH6yNUg.webp"
                alt="产品架构"
                className="rounded-lg max-h-[60vh] object-contain"
                style={{ filter: "brightness(1.1)" }}
              />
              {/* Subtle glow behind image */}
              <div
                className="absolute inset-0 -z-10 blur-3xl opacity-20 rounded-lg"
                style={{
                  background:
                    "radial-gradient(circle, #d4a853 0%, transparent 70%)",
                }}
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Right: Layer details */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <AnimatedSection animation="slide-up" delay={0.1}>
            <p
              className="text-[#d4a853] text-xs tracking-[0.3em] mb-4"
              style={{ fontFamily: "'Space Grotesk', monospace" }}
            >
              系统架构
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.2}>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-3"
              style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
            >
              三层系统架构
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.3}>
            <p
              className="text-[#e8e4df]/50 text-sm mb-8"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              系统由三层构成，形成完整的技术与运营壁垒
            </p>
          </AnimatedSection>

          <div className="space-y-5">
            {layers.map((layer, i) => (
              <AnimatedSection
                key={i}
                animation="slide-left"
                delay={0.4 + i * 0.15}
              >
                <div className="flex gap-4 group">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${layer.color}15`,
                      color: layer.color,
                    }}
                  >
                    {layer.icon}
                  </div>
                  <div>
                    <h3
                      className="text-base font-semibold mb-1.5"
                      style={{
                        color: layer.color,
                        fontFamily: "'Noto Sans SC', sans-serif",
                      }}
                    >
                      {layer.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {layer.capabilities.map((cap, j) => (
                        <span
                          key={j}
                          className="text-xs px-2.5 py-1 rounded-full"
                          style={{
                            backgroundColor: `${layer.color}08`,
                            border: `1px solid ${layer.color}20`,
                            color: `${layer.color}cc`,
                            fontFamily: "'Noto Sans SC', sans-serif",
                          }}
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
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
