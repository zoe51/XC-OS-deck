/*
 * Design: 「山水数字」— Solution Slide
 * Core logic highlight + three solution pillars
 * Background: AI network nodes image
 */
import AnimatedSection from '@/components/AnimatedSection';
import { Bot, Database, Share2 } from 'lucide-react';

const solutions = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: '自动化处理标准事务',
    desc: '将可流程化的工作交给 AI 与自动化工具，大幅降低运营人力门槛',
    color: '#d4a853',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: '统一整合信息与资源',
    desc: '将分散的线索、内容、反馈与指标统一沉淀，形成可检索、可连接的运营资产',
    color: '#4a9e8e',
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: '智能生成社媒内容',
    desc: '基于真实故事素材自动撰写，针对平台特性定向分发，持续扩大社区品牌影响力',
    color: '#e8a87c',
  },
];

export default function SolutionSlide() {
  return (
    <div className="snap-section relative grain-overlay" style={{ background: '#0a0f1a' }}>
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663468040496/ZvtLcmbVsxknwMtEAQho7F/ai-network-nodes-YnVGFmbVDfXKPMypEvuJ3A.webp"
          alt="AI Network"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/95 via-[#0a0f1a]/80 to-[#0a0f1a]/60" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
        {/* Section label */}
        <AnimatedSection animation="slide-up" delay={0.1}>
          <p className="text-[#4a9e8e] text-xs tracking-[0.3em] mb-4" style={{ fontFamily: "'Space Grotesk', monospace" }}>
            SOLUTION
          </p>
        </AnimatedSection>

        {/* Title */}
        <AnimatedSection animation="slide-up" delay={0.2}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif", color: '#e8e4df' }}
          >
            AI 时代的
            <span className="gradient-text-teal">智能空间运营</span>
          </h2>
        </AnimatedSection>

        {/* Core logic quote */}
        <AnimatedSection animation="slide-up" delay={0.35}>
          <div className="mb-12 max-w-2xl">
            <div className="border-l-2 border-[#d4a853]/40 pl-6 py-2">
              <p
                className="text-xl md:text-2xl font-light text-[#d4a853]"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                把"重复"还给系统，把"创造"还给人
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Solution cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {solutions.map((s, i) => (
            <AnimatedSection key={i} animation="slide-up" delay={0.5 + i * 0.15}>
              <div className="glass-card rounded-lg p-6 h-full group hover:border-opacity-40 transition-all duration-500 hover:translate-y-[-4px]"
                style={{ borderColor: `${s.color}20` }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${s.color}12`, color: s.color }}
                >
                  {s.icon}
                </div>
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: s.color, fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-[#e8e4df]/55 text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {s.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
