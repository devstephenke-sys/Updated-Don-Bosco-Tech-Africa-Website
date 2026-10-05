import React from 'react';
import { HomeHero } from '@/components/hero/HomeHero';
import { WhoWeAreEditorial } from '@/components/sections/WhoWeAreEditorial';
import { StatsSection } from '@/components/sections/StatsSection';
import { WhereWeWorkOverview } from '@/components/sections/WhereWeWorkOverview';
import { ThematicStreams } from '@/components/sections/ThematicStreams';
import { FeaturedProjectsEditorial } from '@/components/sections/FeaturedProjectsEditorial';
import { ImpactStoryFeatured } from '@/components/sections/ImpactStoryFeatured';
import { KnowledgeAndNewsEditorial } from '@/components/sections/KnowledgeAndNewsEditorial';
import { PartnersQuietSection } from '@/components/sections/PartnersQuietSection';
import { PartnerWithDBTACTA } from '@/components/sections/PartnerWithDBTACTA';

export const metadata = {
  title: 'Don Bosco Tech Africa — Continental TVET Network',
  description:
    'Coordinating 119 Salesian TVET centres across 35 African countries and Madagascar, empowering youth with market-driven skills, moral values, and employment pathways.',
};

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900 selection:bg-[#003366] selection:text-white">
      {/* ── 1. Editorial Hero: Clear Mission, Real Workshop Photography, Institutional Figures ── */}
      <HomeHero />

      {/* ── 2. The Continental Mission: Salesian Tradition & Practical Formation ── */}
      <WhoWeAreEditorial />

      {/* ── 3. Verified Continental Reach: Measurable TVET Outcomes ── */}
      <StatsSection />

      {/* ── 4. Where We Work: Continental TVET Network Directory & Regional Hubs ── */}
      <WhereWeWorkOverview />

      {/* ── 5. What We Do: 5 Core Strategic Pillars ── */}
      <ThematicStreams />

      {/* ── 6. Flagship Initiatives: Green Energy, Smart Agribusiness & RPL ── */}
      <FeaturedProjectsEditorial />

      {/* ── 7. Real Human Outcomes: Spotlight on Solar Entrepreneur Esther Mwangi ── */}
      <ImpactStoryFeatured />

      {/* ── 8. Continental Knowledge & News: Policy Frameworks & Updates ── */}
      <KnowledgeAndNewsEditorial />

      {/* ── 9. Strategic Partners & Development Alliances ── */}
      <PartnersQuietSection />

      {/* ── 10. Institutional Invitation & Call to Action ── */}
      <PartnerWithDBTACTA />
    </div>
  );
}
