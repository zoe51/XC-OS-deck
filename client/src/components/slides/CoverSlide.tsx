/*
 * Design: 「山水数字」— Cover Slide
 * Full-screen hero with village-tech background image
 * Large serif title, amber accent, minimal text
 */
import AnimatedSection from "@/components/AnimatedSection";
import { ChevronDown } from "lucide-react";

interface CoverSlideProps {
  onNext: () => void;
}

export default function CoverSlide({ onNext }: CoverSlideProps) {
  return (
    <div className="snap-section relative grain-overlay">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663468040496/ZvtLcmbVsxknwMtEAQho7F/hero-village-tech-MPjZyRfFFyGbbPXLnnzFke.webp"
          alt="乡村智能网络"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/70 via-[#0a0f1a]/50 to-[#0a0f1a]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-8 md:px-16 lg:px-24 py-12">
        {/* Top bar */}
        <AnimatedSection animation="fade-in" delay={0.2}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm border border-[#d4a853]/40 flex items-center justify-center">
                <span
                  className="text-[#d4a853] text-sm font-bold"
                  style={{ fontFamily: "'Space Grotesk', monospace" }}
                >
                  OS
                </span>
              </div>
              <span
                className="text-[#e8e4df]/60 text-sm tracking-widest"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                仓刀社 / 乡创 OS
              </span>
            </div>
            <span
              className="text-[#e8e4df]/40 text-xs tracking-wider"
              style={{ fontFamily: "'Space Grotesk', monospace" }}
            >
              SEED ROUND 2025
            </span>
          </div>
        </AnimatedSection>

        {/* Center content */}
        <div className="flex-1 flex flex-col justify-center max-w-4xl">
          <AnimatedSection animation="slide-up" delay={0.4}>
            <p
              className="text-[#d4a853] text-sm md:text-base tracking-[0.3em] mb-6"
              style={{ fontFamily: "'Space Grotesk', monospace" }}
            >
              乡创OS
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.6}>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
            >
              为中国乡创空间打造的
              <br />
              <span className="gradient-text-amber">AI 原生运营操作系统</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.8}>
            <p
              className="text-lg md:text-xl text-[#e8e4df]/70 max-w-2xl leading-relaxed"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              通过 SaaS + AI Agent + 智能硬件节点 + 社区运营网络，
              <br className="hidden md:block" />
              构建乡村创业与资源协作的基础设施
            </p>
          </AnimatedSection>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fade-in" delay={1.2}>
          <button
            onClick={onNext}
            className="flex items-center gap-2 text-[#d4a853]/60 hover:text-[#d4a853] transition-colors group"
          >
            <span
              className="text-xs tracking-widest"
              style={{ fontFamily: "'Space Grotesk', monospace" }}
            >
              SCROLL TO EXPLORE
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </AnimatedSection>
      </div>
    </div>
  );
}
