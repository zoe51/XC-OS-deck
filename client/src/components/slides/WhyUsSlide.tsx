/*
 * Design: 「山水数字」— Why Us Slide
 * Community space image + competitive moat text
 */
import AnimatedSection from "@/components/AnimatedSection";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { Building2, Users, Network } from "lucide-react";

function Counter({ value, isActive }: { value: number; isActive: boolean }) {
  const count = useCountUp(value, 1800, isActive);
  return <span>{count}</span>;
}

export default function WhyUsSlide() {
  const { ref, isInView } = useInView(0.3);

  return (
    <div
      ref={ref}
      className="snap-section relative grain-overlay"
      style={{ background: "#0a0f1a" }}
    >
      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center px-8 md:px-16 lg:px-24 py-16 gap-8 lg:gap-16">
        {/* Left: Image */}
        <div className="lg:w-1/2 h-full flex items-center">
          <AnimatedSection animation="fade-in" delay={0.2} className="w-full">
            <div
              className="relative rounded-xl overflow-hidden"
              style={{ maxHeight: "65vh" }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663468040496/ZvtLcmbVsxknwMtEAQho7F/village-community-space-6RNAM8rbraoEEo4vqFRAw7.webp"
                alt="乡村社区空间"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/60 to-transparent" />

              {/* Stats overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex gap-6">
                {[
                  {
                    icon: <Building2 className="w-4 h-4" />,
                    value: 4,
                    label: "已落成空间",
                    suffix: "个",
                  },
                  {
                    icon: <Users className="w-4 h-4" />,
                    value: 2,
                    label: "建设中",
                    suffix: "个",
                  },
                  {
                    icon: <Network className="w-4 h-4" />,
                    value: 6,
                    label: "覆盖城市",
                    suffix: "座",
                  },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="text-[#d4a853]">{s.icon}</div>
                    <div>
                      <div
                        className="text-xl font-bold text-[#d4a853]"
                        style={{ fontFamily: "'Space Grotesk', monospace" }}
                      >
                        <Counter value={s.value} isActive={isInView} />
                        {s.suffix}
                      </div>
                      <div
                        className="text-[#e8e4df]/50 text-xs"
                        style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                      >
                        {s.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Right: Text */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <AnimatedSection animation="slide-up" delay={0.1}>
            <p
              className="text-[#4a9e8e] text-xs tracking-[0.3em] mb-4"
              style={{ fontFamily: "'Space Grotesk', monospace" }}
            >
              一个不可被复制的团队
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.2}>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
            >
              为什么只有
              <span className="gradient-text-teal">我们</span>
              可以做到
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.35}>
            <p
              className="text-[#e8e4df]/65 text-base leading-relaxed mb-6"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              我们是极少数同时具备
              <strong className="text-[#d4a853]">
                乡村实地运营、社区组织、产品化和智能体落地能力
              </strong>
              的团队。过去几年，已落成 4 个大型线下社区，另有 2 个正在建设中。
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.5}>
            <p
              className="text-[#e8e4df]/65 text-base leading-relaxed mb-8"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              作为中国数字游民群体中最有号召力的社区运营团队之一，我们拥有可持续调动的弹性人才网络，能够跨地域为乡村节点持续输送运营能力。
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.65}>
            <div className="border-l-2 border-[#d4a853]/30 pl-6">
              <p
                className="text-[#d4a853] text-lg italic"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                别人做的是软件，我们做的是
                <br />
                "AI 系统 + 线下节点 + 流动人才网络"
                <br />
                的联合基础设施
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
