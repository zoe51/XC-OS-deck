import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedElement";
import { Sparkles } from "lucide-react";

const REPORT_IMAGE = "https://51-1327029614.cos.ap-shanghai.myqcloud.com/%E9%9D%92%E7%A6%BE/report.jpg";

const features: string[] = [];

// Floating tag data with positions around the center content
const floatingTags = [
  { label: "36氪", color: "#00d4ff", x: -320, y: -220, size: "lg", delay: 0 },
  { label: "澎湃新闻", color: "#7c3aed", x: 280, y: -180, size: "md", delay: 0.3 },
  { label: "小红书", color: "#ef4444", x: -280, y: 60, size: "lg", delay: 0.6 },
  { label: "今日头条", color: "#f59e0b", x: 320, y: 80, size: "md", delay: 0.9 },
  { label: "微博", color: "#e11d48", x: -180, y: 240, size: "sm", delay: 1.2 },
  { label: "虎嗅", color: "#10b981", x: 200, y: 220, size: "lg", delay: 1.5 },
  { label: "掘金", color: "#6366f1", x: 60, y: -260, size: "sm", delay: 1.8 },
  // Extra ambient tags
  { label: "#AI创业", color: "#00d4ff", x: -400, y: -80, size: "sm", delay: 0.4 },
  { label: "#乡村振兴", color: "#10b981", x: 400, y: -60, size: "sm", delay: 0.7 },
  { label: "#政策速递", color: "#f59e0b", x: 140, y: 280, size: "sm", delay: 1.3 },
  { label: "#赛道分析", color: "#ef4444", x: -360, y: 180, size: "sm", delay: 1.6 },
  { label: "#网红项目", color: "#e11d48", x: 380, y: 180, size: "sm", delay: 0.2 },
  { label: "#产业资源", color: "#6366f1", x: -200, y: -160, size: "sm", delay: 0.5 },
];

const sizeMap = {
  sm: "text-xs px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-sm px-5 py-2.5 font-medium",
};

export default function SlideMemberInspiration() {
  return (
    <div className="snap-section relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050510] via-[#0a0818] to-[#050510]" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#00d4ff]/5 rounded-full blur-[120px]" />

      {/* Floating Tags Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {floatingTags.map((tag, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: tag.delay,
              ease: [0.16, 1, 0.3, 1],
            }}
            animate={{
              y: [0, -12, 0, 8, 0],
              x: [0, 6, 0, -6, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            // @ts-expect-error framer-motion transition override
            transition_animate={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute rounded-full backdrop-blur-sm border ${sizeMap[tag.size as keyof typeof sizeMap]}`}
            style={{
              left: `calc(50% + ${tag.x}px)`,
              top: `calc(50% + ${tag.y}px)`,
              color: tag.color,
              borderColor: `${tag.color}30`,
              background: `${tag.color}08`,
              boxShadow: `0 0 20px ${tag.color}10`,
            }}
          >
            <motion.span
              animate={{
                y: [0, -8 - (i % 5) * 2, 0, 6 + (i % 3) * 2, 0],
                x: [0, 4 + (i % 4), 0, -4 - (i % 3), 0],
              }}
              transition={{
                duration: 5 + (i % 4) * 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: tag.delay * 0.5,
              }}
              className="block"
            >
              {tag.label}
            </motion.span>
          </motion.div>
        ))}
      </div>

      {/* Center Content */}
      <div className="relative z-10 w-full max-w-2xl px-8 text-center">
        <AnimatedText>
          <p
            className="text-xs uppercase tracking-[0.3em] text-[#7c3aed] mb-4"
            style={{ fontFamily: "'Space Grotesk', monospace" }}
          >
            线上内容运营
          </p>
        </AnimatedText>

        

        <AnimatedText delay={0.15}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
          >
            创业灵感
            <span style={{ color: "#7c3aed" }}>推送器</span>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-white/40 text-lg mb-10 max-w-lg mx-auto">
            聚合全网创业热点，结合本地资源政策，每周为会员推送定制灵感报告和网红项目拆解
          </p>
        </AnimatedText>

        <div className="space-y-3 max-w-md mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-card rounded-lg px-5 py-3 text-left flex items-center gap-3"
              style={{ borderLeft: "2px solid #7c3aed" }}
            >
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#7c3aed" }} />
              <p className="text-sm text-white/55 leading-relaxed">{feature}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-4 md:p-5">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/20">
              <img
                src={REPORT_IMAGE}
                alt="创业灵感报告示意图"
                className="w-full h-auto block"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
