import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedElement";
import { MessageSquare } from "lucide-react";

const AI_IMAGE = "https://51-1327029614.cos.ap-shanghai.myqcloud.com/%E9%9D%92%E7%A6%BE/3.png";

const features = [
  "访客查看知识图谱选择兴趣方向",
  "系统输出可用资源与参考案例",
  "回答本地资源、政策、创业知识问题",
  "对话内容自动收录至知识库",
];

export default function SlideMemberAI() {
  return (
    <div className="snap-section relative w-full h-full flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-[#050510] via-[#080818] to-[#050510]" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#10b981]/5 rounded-full blur-[120px]" />
      <div className="absolute top-20 right-40 w-64 h-64 bg-[#00d4ff]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/60 via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src={AI_IMAGE}
                alt="创业知识图谱与AI问答"
                className="w-full h-auto object-cover"
                style={{ maxHeight: "70vh" }}
              />
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-[#10b981]/5 rounded-3xl blur-2xl -z-10" />
          </motion.div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <AnimatedText>
              <p
                className="text-xs uppercase tracking-[0.3em] text-[#10b981] mb-4"
                style={{ fontFamily: "'Space Grotesk', monospace" }}
              >
                线下内容运营
              </p>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3"
                style={{ fontFamily: "'Noto Serif SC', serif", color: "#e8e4df" }}
              >
                AI创业图谱
                <br />
                与<span style={{ color: "#10b981" }}>自助问答</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.15}>
              <p className="text-white/40 text-lg mb-8">
                智能引导访客探索创业方向，实时解答疑问
              </p>
            </AnimatedText>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-center gap-4 glass-card rounded-xl px-5 py-3.5"
                  style={{ borderLeft: "3px solid #10b981" }}
                >
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold font-mono"
                    style={{ background: "#10b98115", color: "#10b981" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-white/60 leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>

            {/* AI Chat hint */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex items-center gap-3 text-white/30 text-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#10b981]" />
              <span>对话内容自动沉淀为社区知识资产</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
