/*
 * Design: 「山水数字」— Funding Slide
 * Key funding metrics + three things to prove
 */
import AnimatedSection from '@/components/AnimatedSection';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import { Target, Zap, Network } from 'lucide-react';

function AnimNum({ value, isActive }: { value: number; isActive: boolean }) {
  const count = useCountUp(value, 2000, isActive);
  return <span>{count.toLocaleString()}</span>;
}

const proofs = [
  {
    icon: <Target className="w-5 h-5" />,
    num: '01',
    title: '单节点经济模型成立',
    desc: '收入、成本、利润数据可验证，样板节点即将提供完整真实数据',
    color: '#d4a853',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    num: '02',
    title: '节点可快速复制',
    desc: '底层架构统一，新节点接入只需更新数据库与界面定制，一周内可完成系统初始化',
    color: '#4a9e8e',
  },
  {
    icon: <Network className="w-5 h-5" />,
    num: '03',
    title: '网络效应正在形成',
    desc: '创业资源网络、AI 数据网络、产业合作网络——三条护城河随节点数量同步生长',
    color: '#e8a87c',
  },
];

export default function FundingSlide() {
  const { ref, isInView } = useInView(0.3);

  return (
    <div ref={ref} className="snap-section relative grain-overlay" style={{ background: 'linear-gradient(135deg, #0a0f1a 0%, #0f1520 100%)' }}>
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left: Funding details */}
          <div className="lg:w-2/5">
            <AnimatedSection animation="slide-up" delay={0.1}>
              <p className="text-[#d4a853] text-xs tracking-[0.3em] mb-4" style={{ fontFamily: "'Space Grotesk', monospace" }}>
                FUNDRAISING
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={0.2}>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight mb-8"
                style={{ fontFamily: "'Noto Serif SC', serif", color: '#e8e4df' }}
              >
                本轮<span className="gradient-text-amber">融资</span>目标
              </h2>
            </AnimatedSection>

            <div className="space-y-5">
              {[
                { label: '融资轮次', value: '种子轮', highlight: true },
                { label: '投前估值', value: '4,000 万元', highlight: false },
                { label: '目标融资额', value: '280 万元', highlight: true },
                { label: '出让股份', value: '7%', highlight: false },
              ].map((item, i) => (
                <AnimatedSection key={i} animation="slide-up" delay={0.3 + i * 0.1}>
                  <div className="flex items-center justify-between py-3 border-b" style={{ borderColor: 'rgba(232,228,223,0.06)' }}>
                    <span className="text-[#e8e4df]/45 text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                      {item.label}
                    </span>
                    <span
                      className={`text-lg font-bold ${item.highlight ? 'text-[#d4a853]' : 'text-[#e8e4df]'}`}
                      style={{ fontFamily: "'Space Grotesk', monospace" }}
                    >
                      {item.value}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="slide-up" delay={0.7}>
              <div className="mt-6">
                <p className="text-[#e8e4df]/35 text-xs mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>资金用途</p>
                <p className="text-[#e8e4df]/55 text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  产品研发与 AI 系统完善 / 节点复制标准化体系搭建 / 核心运营团队组建和市场渠道建设
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Three things to prove */}
          <div className="lg:w-3/5">
            <AnimatedSection animation="slide-up" delay={0.3}>
              <h3
                className="text-xl font-bold mb-6"
                style={{ fontFamily: "'Noto Serif SC', serif", color: '#e8e4df' }}
              >
                我们需要证明的三件事
              </h3>
            </AnimatedSection>

            <div className="space-y-5">
              {proofs.map((p, i) => (
                <AnimatedSection key={i} animation="slide-left" delay={0.4 + i * 0.15}>
                  <div className="glass-card rounded-lg p-5 flex gap-5 group hover:translate-x-[-4px] transition-all duration-300">
                    <div className="shrink-0">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${p.color}12`, color: p.color }}
                      >
                        {p.icon}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold" style={{ color: p.color, fontFamily: "'Space Grotesk', monospace" }}>
                          {p.num}
                        </span>
                        <h4 className="text-base font-semibold" style={{ color: '#e8e4df', fontFamily: "'Noto Sans SC', sans-serif" }}>
                          {p.title}
                        </h4>
                      </div>
                      <p className="text-[#e8e4df]/50 text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
