/*
 * Design: 「山水数字」— Growth & Valuation Slide
 * Expansion roadmap table with glowing stages
 */
import AnimatedSection from '@/components/AnimatedSection';
import MountainDivider from '@/components/MountainDivider';

const stages = [
  {
    round: '种子轮',
    nodes: '1–10',
    revenue: '30–300 万',
    valuation: '3,000–5,000 万',
    milestone: '建立可参观、可复盘的乡村样板节点',
    active: true,
  },
  {
    round: '天使轮',
    nodes: '10–100',
    revenue: '300–3,000 万',
    valuation: '8,000 万–1.5 亿',
    milestone: '验证节点复制性，形成标准化交付体系',
    active: false,
  },
  {
    round: 'A 轮',
    nodes: '100–1,000',
    revenue: '3,000 万–3 亿',
    valuation: '3–6 亿',
    milestone: 'SaaS 化改造完成，启动全国渠道建设',
    active: false,
  },
  {
    round: 'B 轮',
    nodes: '1,000–10,000',
    revenue: '3 亿–30 亿',
    valuation: '30 亿+',
    milestone: '激活生态网络效应，形成平台级护城河',
    active: false,
  },
];

export default function GrowthSlide() {
  return (
    <div className="snap-section relative grain-overlay" style={{ background: 'linear-gradient(135deg, #0a0f1a 0%, #0c1220 100%)' }}>
      <MountainDivider position="bottom" color="rgba(212, 168, 83, 0.04)" />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
        <AnimatedSection animation="slide-up" delay={0.1}>
          <p className="text-[#d4a853] text-xs tracking-[0.3em] mb-4" style={{ fontFamily: "'Space Grotesk', monospace" }}>
            GROWTH PATH
          </p>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay={0.2}>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-3"
            style={{ fontFamily: "'Noto Serif SC', serif", color: '#e8e4df' }}
          >
            扩张路径与<span className="gradient-text-amber">估值逻辑</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay={0.3}>
          <p className="text-[#e8e4df]/50 text-sm mb-8" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            核心估值公式：<strong className="text-[#d4a853]">节点网络规模 × 单节点价值</strong>
          </p>
        </AnimatedSection>

        {/* Stages table */}
        <AnimatedSection animation="slide-up" delay={0.4}>
          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 min-w-[600px]">
              {stages.map((s, i) => (
                <div
                  key={i}
                  className={`rounded-lg p-5 transition-all duration-500 hover:translate-y-[-4px] ${
                    s.active
                      ? 'border-2 border-[#d4a853]/40'
                      : 'border border-[#e8e4df]/8'
                  }`}
                  style={{
                    background: s.active
                      ? 'linear-gradient(180deg, rgba(212,168,83,0.08) 0%, rgba(10,15,26,0.9) 100%)'
                      : 'rgba(16,20,32,0.6)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {s.active && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full mb-3 inline-block"
                      style={{ backgroundColor: '#d4a85320', color: '#d4a853', border: '1px solid #d4a85330' }}
                    >
                      当前轮次
                    </span>
                  )}
                  <h3
                    className="text-lg font-bold mb-4"
                    style={{ color: s.active ? '#d4a853' : '#e8e4df', fontFamily: "'Space Grotesk', monospace" }}
                  >
                    {s.round}
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <p className="text-[#e8e4df]/35 text-xs mb-0.5" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>节点规模</p>
                      <p className="text-sm font-medium" style={{ color: '#e8e4df', fontFamily: "'Space Grotesk', monospace" }}>{s.nodes}</p>
                    </div>
                    <div>
                      <p className="text-[#e8e4df]/35 text-xs mb-0.5" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>年营收</p>
                      <p className="text-sm font-medium" style={{ color: '#e8e4df', fontFamily: "'Space Grotesk', monospace" }}>{s.revenue}</p>
                    </div>
                    <div>
                      <p className="text-[#e8e4df]/35 text-xs mb-0.5" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>估值区间</p>
                      <p className="text-sm font-semibold" style={{ color: s.active ? '#d4a853' : '#4a9e8e', fontFamily: "'Space Grotesk', monospace" }}>{s.valuation}</p>
                    </div>
                    <div className="pt-2 border-t" style={{ borderColor: 'rgba(232,228,223,0.06)' }}>
                      <p className="text-[#e8e4df]/45 text-xs leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{s.milestone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" delay={0.7}>
          <p className="text-[#e8e4df]/40 text-sm mt-8 max-w-3xl leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            乡村是中国最大的线下网络之一。节点网络一旦形成规模，可持续叠加电商、产业服务、AI 服务、数据资产等高毛利业务。
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
