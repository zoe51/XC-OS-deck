/*
 * Design: 「山水数字」— Main Pitch Deck Page
 * Full-screen snap scroll with ambient particles
 * 12 slides covering the complete pitch deck
 */
import { useCallback } from 'react';
import { useActiveSlide } from '@/hooks/useInView';
import Particles from '@/components/Particles';
import SlideIndicator from '@/components/SlideIndicator';
import CoverSlide from '@/components/slides/CoverSlide';
import PainPointSlide from '@/components/slides/PainPointSlide';
import SolutionSlide from '@/components/slides/SolutionSlide';
import ProductSlide from '@/components/slides/ProductSlide';
import WhyNowSlide from '@/components/slides/WhyNowSlide';
import WhyUsSlide from '@/components/slides/WhyUsSlide';
import ProgressSlide from '@/components/slides/ProgressSlide';
import BusinessModelSlide from '@/components/slides/BusinessModelSlide';
import GrowthSlide from '@/components/slides/GrowthSlide';
import TeamSlide from '@/components/slides/TeamSlide';
import FundingSlide from '@/components/slides/FundingSlide';
import ImpactSlide from '@/components/slides/ImpactSlide';
import ClosingSlide from '@/components/slides/ClosingSlide';

const slideLabels = [
  '封面',
  '痛点',
  '方案',
  '架构',
  '窗口',
  '优势',
  '进展',
  '模式',
  '增长',
  '团队',
  '融资',
  '效益',
  '愿景',
];

export default function Home() {
  const { containerRef, activeSlide, scrollToSlide } = useActiveSlide();

  const handleNextFromCover = useCallback(() => {
    scrollToSlide(1);
  }, [scrollToSlide]);

  return (
    <div className="relative">
      {/* Ambient particles overlay */}
      <Particles />

      {/* Slide indicator */}
      <SlideIndicator
        total={slideLabels.length}
        active={activeSlide}
        onNavigate={scrollToSlide}
        labels={slideLabels}
      />

      {/* Slide counter */}
      <div className="fixed bottom-6 left-8 z-50 flex items-center gap-3">
        <span className="text-[#d4a853] text-sm font-bold" style={{ fontFamily: "'Space Grotesk', monospace" }}>
          {String(activeSlide + 1).padStart(2, '0')}
        </span>
        <div className="w-8 h-px bg-[#e8e4df]/20" />
        <span className="text-[#e8e4df]/30 text-sm" style={{ fontFamily: "'Space Grotesk', monospace" }}>
          {String(slideLabels.length).padStart(2, '0')}
        </span>
      </div>

      {/* Main scroll container */}
      <div ref={containerRef} className="snap-container">
        <CoverSlide onNext={handleNextFromCover} />
        <PainPointSlide />
        <SolutionSlide />
        <ProductSlide />
        <WhyNowSlide />
        <WhyUsSlide />
        <ProgressSlide />
        <BusinessModelSlide />
        <GrowthSlide />
        <TeamSlide />
        <FundingSlide />
        <ImpactSlide />
        <ClosingSlide />
      </div>
    </div>
  );
}
