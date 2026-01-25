'use client';

import { LandingNavbarNew } from '@/components/landing/LandingNavbarNew';
import { LandingHeroNew } from '@/components/landing/LandingHeroNew';
import { LandingYoloDashboard } from '@/components/landing/LandingYoloDashboard';
import { LandingBentoFeatures } from '@/components/landing/LandingBentoFeatures';
import { LandingTimeline } from '@/components/landing/LandingTimeline';
import { LandingCTA } from '@/components/landing/LandingCTA';
import { LandingFooter } from '@/components/landing/LandingFooter';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <LandingNavbarNew />
      <LandingHeroNew />
      <LandingYoloDashboard />
      <LandingBentoFeatures />
      <LandingTimeline />
      <LandingCTA />
      <LandingFooter />
    </div>
  );
}
