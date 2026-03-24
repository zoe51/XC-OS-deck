/*
 * Design: 「山水数字」— Progress Slide
 * Timeline-style progress milestones
 */
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Handshake, BarChart3, CheckCircle2 } from "lucide-react";

const milestones = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "4 个大型乡村社区空间已落成",
    desc: "安吉、余村、黄山、武夷山线下空间运营中，杭州正在建设中",
    status: "done",
    color: "#d4a853",
  },

  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "市场需求已获一线验证",
    desc: "多个样板节点已提供完整真实数据，验证市场需求真实存在",
    status: "done",
    color: "#d4a853",
  },
  {
    icon: <Handshake className="w-5 h-5" />,
    title: "首个智能空间项目对接完成",
    desc: "与浙江平阳上林垟村青创空间完成对接，推进第一个无人值守智能空间落地",
    status: "active",
    color: "#4a9e8e",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "单节点经济模型可验证",
    desc: "收入、成本、利润数据可量化，样板节点正在提供完整真实数据",
    status: "active",
    color: "#4a9e8e",
  },
];

export default function ProgressSlide() {
  return (
    <div
      className="snap-section relative grain-overlay"
      style={{
        background: "linear-gradient(135deg, #0a0f1a 0%, #0f1520 100%)",
      }}
    >
      {/* Decorative gradient */}
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[100px] opacity-8"
        style={{ background: "radial-gradient(circle, #4a9e8e, transparent)" }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
        <AnimatedSection animation="slide-up" delay={0.1}>
          <p
            className="text-[#4a9e8e] text-xs tracking-[0.3em] mb-4"
            style={{ fontFamily: "'Space Grotesk', monospace" }}
          >
            阶段进展
          </p>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay={0.2}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12"
            style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
          >
            当前<span className="gradient-text-teal">进展</span>
          </h2>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a853]/30 via-[#4a9e8e]/30 to-transparent" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <AnimatedSection
                key={i}
                animation="slide-left"
                delay={0.3 + i * 0.15}
              >
                <div className="flex gap-6 group">
                  {/* Node */}
                  <div className="relative z-10 shrink-0">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${m.color}15`,
                        border: `2px solid ${m.color}40`,
                        color: m.color,
                      }}
                    >
                      {m.icon}
                    </div>
                    {m.status === "active" && (
                      <div
                        className="absolute inset-0 rounded-full animate-glow"
                        style={{ boxShadow: `0 0 20px ${m.color}30` }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="glass-card rounded-lg p-5 flex-1 hover:translate-x-2 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        className="text-base font-semibold"
                        style={{
                          color: "#e8e4df",
                          fontFamily: "'Noto Sans SC', sans-serif",
                        }}
                      >
                        {m.title}
                      </h3>
                      {m.status === "done" && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: "#d4a85315",
                            color: "#d4a853",
                            border: "1px solid #d4a85325",
                          }}
                        >
                          已完成
                        </span>
                      )}
                      {m.status === "active" && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: "#4a9e8e15",
                            color: "#4a9e8e",
                            border: "1px solid #4a9e8e25",
                          }}
                        >
                          {m.title.includes("经济模型") ? "验证中" : "进行中"}
                        </span>
                      )}
                    </div>
                    <p
                      className="text-[#e8e4df]/50 text-sm leading-relaxed"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    >
                      {m.desc}
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
