/*
 * Design: 「山水数字」— Closing Slide
 * Powerful closing statement with ambient background
 */
import AnimatedSection from "@/components/AnimatedSection";

export default function ClosingSlide() {
  return (
    <div
      className="snap-section relative grain-overlay"
      style={{ background: "#0a0f1a" }}
    >
      {/* Background with gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src="https://51-1327029614.cos.ap-shanghai.myqcloud.com/%E9%9D%92%E7%A6%BE/DNA%E5%8A%A8%E6%95%88.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/30" />
        <div
          className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full blur-[150px] opacity-10"
          style={{
            background: "radial-gradient(circle, #d4a853, transparent)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full blur-[120px] opacity-8"
          style={{
            background: "radial-gradient(circle, #4a9e8e, transparent)",
          }}
        />
      </div>

      {/* Mountain silhouette at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full animate-mountain"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 L0,140 Q180,60 360,100 Q540,140 720,80 Q900,20 1080,70 Q1260,120 1440,90 L1440,200 Z"
            fill="rgba(212,168,83,0.04)"
          />
          <path
            d="M0,200 L0,160 Q240,90 480,130 Q720,170 960,100 Q1200,30 1440,110 L1440,200 Z"
            fill="rgba(74,158,142,0.03)"
          />
        </svg>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 py-16 text-center">
        <AnimatedSection animation="fade-in" delay={0.2}>
          <div className="w-16 h-16 rounded-lg border border-[#d4a853]/30 flex items-center justify-center mb-8 mx-auto">
            <span
              className="text-[#d4a853] text-sm font-bold"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              仓刀
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay={0.4}>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 max-w-4xl"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            <span className="text-[#e8e4df]">"</span>
            <span className="gradient-text-amber">
              中国乡镇AI原生运营操作系统
            </span>
            <span className="text-[#e8e4df]">"</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay={0.6}>
          <p
            className="text-lg md:text-xl text-[#e8e4df]/60 max-w-2xl leading-relaxed mb-12"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            这不只是一个产品定位，也是我们对未来十年
            <br className="hidden md:block" />
            这片土地上将要发生的事情的判断
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" delay={0.9}>
          <div className="flex flex-col items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4a853]/40 to-transparent" />
            <p
              className="text-[#e8e4df]/30 text-xs tracking-[0.3em]"
              style={{ fontFamily: "'Space Grotesk', monospace" }}
            >
              联系方式 — 微信（xusong1969）
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
