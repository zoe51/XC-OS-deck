import { motion } from "framer-motion";
import { AnimatedText, GlowCard } from "@/components/AnimatedElement";
import { Moon, MonitorPlay, Wifi } from "lucide-react";

const SPACE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663424573849/GnpinNMRdtpckDdWmAJkBB/smart-space-ejaUsBydj3SEz4vDWeXkek.webp";

const smartSpaceFeatures = [
  {
    icon: Wifi,
    title: "IoT 设备联动",
    color: "#10b981",
    desc: "通过涂鸦云平台接入门禁、灯光、空调、摄像头等设备，实现场景化自动控制。",
  },
  {
    icon: Moon,
    title: "非营业时段自治",
    color: "#00d4ff",
    desc: "自动执行打烊流程：检查门窗、关灯关空调、关闭非必要电源，次日自动启动环境准备。",
  },
  {
    icon: MonitorPlay,
    title: "空间智能场景信息屏",
    color: "#7c3aed",
    desc: "根据时间、人群、事件智能编排屏幕内容。上午播放活动日历，午间展示会员项目，活动时切换行业图谱。",
  },
  
];

export default function SlideSmartSpace() {
  return (
    <div className="snap-section relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#030308]" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${SPACE_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-[#030308]/70 to-[#030308]/90" />
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl px-8">
        <AnimatedText className="mb-12 text-center">
          <p
            className="text-xs uppercase tracking-[0.3em] text-[#10b981] mb-4"
            style={{ fontFamily: "'Space Grotesk', monospace" }}
          >
            线下空间运营
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3"
            style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
          >
            空间设备自治 + 信息智能切换
          </h2>
          <p className="text-white/40 text-lg">物理空间与数字智能的深度融合</p>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {smartSpaceFeatures.map((feature, i) => (
            <GlowCard
              key={feature.title}
              delay={0.15 * i}
              glowColor={i === 0 ? "cyan" : i === 1 ? "violet" : "emerald"}
            >
              <div
                className="w-14 h-14 rounded-2xl mb-5 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}05)`,
                  border: `1px solid ${feature.color}25`,
                }}
              >
                <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{feature.desc}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
}
