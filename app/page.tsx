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

export default function HomePage() {
  return (
    <div className="space-y-0 bg-white">
      {/* 1. Hero: Transforming Youth Potential Through Quality TVET */}
      <HomeHero />

      {/* 2. Who We Are: Human Institutional Introduction */}
      <WhoWeAreEditorial />

      {/* 3. Network Snapshot: Quiet, Authoritative Information Band */}
      <StatsSection />

      {/* 4. Where We Work: High-Level Pan-African Network Overview */}
      <WhereWeWorkOverview />

      {/* 5. What We Do: 5 Strategic Thematic Pillars */}
      <ThematicStreams />

      {/* 6. Featured Project: Large Editorial Feature + 2 Supporting Initiatives */}
      <FeaturedProjectsEditorial />

      {/* 7. Impact Story: One Strong Human Story (From Training to Opportunity) */}
      <ImpactStoryFeatured />

      {/* 8. Knowledge & News: Two-Column Editorial Insights */}
      <KnowledgeAndNewsEditorial />

      {/* 9. Partners: Quiet Logo Wall */}
      <PartnersQuietSection />

      {/* 10. Partner With DBTA: Strong, Dignified Institutional CTA */}
      <PartnerWithDBTACTA />
    </div>
  );
}
