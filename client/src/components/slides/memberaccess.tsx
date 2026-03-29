import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedElement";
import { UserCheck } from "lucide-react";

const ACCESS_IMAGE = "https://51-1327029614.cos.ap-shanghai.myqcloud.com/%E9%9D%92%E7%A6%BE/1.png";

const features = [
  "线上预约（小程序/官网）",
  "手机号认证 + 人脸信息录入",
  "刷脸无感通行（24小时门禁）",
  "自动获得电子导览和社区守则",
];

export default function SlideMemberAccess() {
  return (
    <div className="snap-section relative w-full h-full flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050510] via-[#080818] to-[#050510]" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-[#00d4ff]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-40 w-64 h-64 bg-[#7c3aed]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <AnimatedText>
              <p
                className="text-xs uppercase tracking-[0.3em] text-[#00d4ff] mb-4"
                style={{ fontFamily: "'Space Grotesk', monospace" }}
              >
                会员身份管理
              </p>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3"
                style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
              >
                会员预约&
                <br />
                <span style={{ color: "#00d4ff" }}>智能准入</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.15}>
              <p className="text-white/40 text-lg mb-8">
                面向会员与访客的智能准入体系
              </p>
            </AnimatedText>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-center gap-4 glass-card rounded-xl px-5 py-3.5"
                  style={{ borderLeft: "3px solid #00d4ff" }}
                >
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold font-mono"
                    style={{ background: "#00d4ff15", color: "#00d4ff" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-white/60 leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/60 via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src={ACCESS_IMAGE}
                alt="社区官网与会员服务"
                className="w-full h-auto object-cover"
                style={{ maxHeight: "70vh" }}
              />
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-[#00d4ff]/5 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
