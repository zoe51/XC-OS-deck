import { AnimatedText, GlowCard } from "@/components/AnimatedElement";
import { CalendarDays, Megaphone, BarChart3 } from "lucide-react";

const operationsData = [
  {
    icon: CalendarDays,
    title: "智能活动策划、传播与复盘",
    color: "#00d4ff",
    items: [
      { label: "灵感库", desc: "每周抓取全网青年创新热点与成功案例" },
      { label: "策划辅助", desc: "输入想法即可生成详细策划草案" },
      { label: "社媒生成", desc: "自动生成多平台招募文案与海报" },
      { label: "活动复盘", desc: "生成复盘报告并归档至数字记忆库" },
    ],
  },
  {
    icon: Megaphone,
    title: "对外推广与内容生成",
    color: "#7c3aed",
    items: [
      { label: "公众号推文", desc: "基于真实故事素材自动撰写" },
      { label: "小红书笔记", desc: "针对平台特性生成内容" },
      { label: "短视频脚本", desc: "自动生成脚本草稿" },
      { label: "运营润色", desc: "运营人员只需润色和发布" },
    ],
  },
  {
    icon: BarChart3,
    title: "数据洞察与生态建议",
    color: "#10b981",
    items: [
      { label: "核心仪表盘", desc: "实时呈现月活、到访频次、热门话题等" },
      { label: "智能诊断", desc: "每周自动生成社区活力周报与建议" },
      { label: "会员牵线", desc: "跨会员资源匹配与合作机会推荐" },
    ],
  },
];

export default function SlideOperations() {
  return (
    <div className="snap-section relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050510] via-[#0a0a1a] to-[#080520]" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#7c3aed]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-6xl px-8">
        <AnimatedText className="mb-12 text-center">
          <p
            className="text-xs uppercase tracking-[0.3em] text-[#7c3aed] mb-4"
            style={{ fontFamily: "'Space Grotesk', monospace" }}
          >
            增长运营
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
            style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
          >
            智能活动策划和数据增长体系
          </h2>
          <p className="text-white/40 text-lg">赋能增长的智能工具集</p>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {operationsData.map((section, i) => (
            <GlowCard
              key={section.title}
              delay={0.12 * i}
              glowColor={i === 0 ? "cyan" : i === 1 ? "violet" : "emerald"}
            >
              <div
                className="w-14 h-14 rounded-2xl mb-5 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${section.color}15, ${section.color}05)`,
                  border: `1px solid ${section.color}25`,
                }}
              >
                <section.icon className="w-7 h-7" style={{ color: section.color }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{section.title}</h3>
              <div className="space-y-3">
                {section.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span
                      className="text-xs font-mono font-medium px-1.5 py-0.5 rounded shrink-0 mt-0.5"
                      style={{
                        color: section.color,
                        background: `${section.color}10`,
                      }}
                    >
                      {item.label}
                    </span>
                    <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
}
