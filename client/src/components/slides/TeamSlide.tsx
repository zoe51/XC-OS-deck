/*
 * Design: 「山水数字」— Team Slide
 * Team member cards with role highlights
 */
import AnimatedSection from "@/components/AnimatedSection";
import { User } from "lucide-react";

const team = [
  {
    name: "许崧",
    role: "运营负责人",
    bg: [
      "DN 数字游民中国创始人",
      "安吉、余村、黄山、武夷山、杭州等多地空间运营总负责人",
      "安吉青创学院副院长",
    ],
    color: "#d4a853",
    initials: "CEO",
  },
  {
    name: "五一",
    role: "产品负责人",
    bg: [
      "杭州创社主理人、造化自游社区创始人",
      "前蚂蚁金服产品经理、PwC-AI 设计师",
      "爱丁堡大学硕士",
    ],
    color: "#4a9e8e",
    initials: "CPO",
  },
  {
    name: "屈子",
    role: "技术负责人",
    bg: ["前华为、阿里巴巴技术专家", "10 年+ 大型企业级系统全栈研发经验"],
    color: "#e8a87c",
    initials: "CTO",
  },
  {
    name: "艾因",
    role: "智能体负责人",
    bg: [
      "前招商银行风控专家",
      "百度核心岗人工智能工程师",
      "负责核心 AI 能力建设",
    ],
    color: "#8b9dc3",
    initials: "AI",
  },
];

export default function TeamSlide() {
  return (
    <div
      className="snap-section relative grain-overlay"
      style={{
        background: "linear-gradient(180deg, #0a0f1a 0%, #0d1320 100%)",
      }}
    >
      {/* Decorative */}
      <div
        className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full blur-[100px] opacity-8"
        style={{ background: "radial-gradient(circle, #4a9e8e, transparent)" }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
        <AnimatedSection animation="slide-up" delay={0.1}>
          <p
            className="text-[#4a9e8e] text-xs tracking-[0.3em] mb-4"
            style={{ fontFamily: "'Space Grotesk', monospace" }}
          >
            创始人及团队
          </p>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay={0.2}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12"
            style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
          >
            核心<span className="gradient-text-teal">团队</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <AnimatedSection
              key={i}
              animation="slide-up"
              delay={0.3 + i * 0.12}
            >
              <div className="glass-card rounded-lg p-6 h-full group hover:translate-y-[-4px] transition-all duration-500">
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${member.color}20, ${member.color}08)`,
                    border: `2px solid ${member.color}30`,
                  }}
                >
                  <span
                    className="text-lg font-bold"
                    style={{
                      color: member.color,
                      fontFamily: "'Space Grotesk', monospace",
                    }}
                  >
                    {member.initials}
                  </span>
                </div>

                {/* Name & Role */}
                <h3
                  className="text-xl font-bold mb-1"
                  style={{
                    color: "#e8e4df",
                    fontFamily: "'Noto Serif SC', serif",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-sm font-medium mb-4"
                  style={{
                    color: member.color,
                    fontFamily: "'Noto Sans SC', sans-serif",
                  }}
                >
                  {member.role}
                </p>

                {/* Background */}
                <div className="space-y-2">
                  {member.bg.map((item, j) => (
                    <p
                      key={j}
                      className="text-[#e8e4df]/45 text-xs leading-relaxed flex items-start gap-2"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                        style={{ backgroundColor: `${member.color}50` }}
                      />
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
