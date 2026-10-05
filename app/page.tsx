import React from 'react';
import { KnowledgeHubHero } from '@/components/hero/KnowledgeHubHero';
import { DigitalPortalsBento } from '@/components/sections/DigitalPortalsBento';
import { KnowledgeRepositorySection } from '@/components/sections/KnowledgeRepositorySection';
import { WhereWeWorkOverview } from '@/components/sections/WhereWeWorkOverview';
import { ThematicStreams } from '@/components/sections/ThematicStreams';
import { FeaturedProjectsEditorial } from '@/components/sections/FeaturedProjectsEditorial';
import { KnowledgeAndNewsEditorial } from '@/components/sections/KnowledgeAndNewsEditorial';
import { PartnersQuietSection } from '@/components/sections/PartnersQuietSection';
import { PartnerWithDBTACTA } from '@/components/sections/PartnerWithDBTACTA';

export const metadata = {
  title: 'Don Bosco Tech Africa — Continental TVET Knowledge Platform & Network Intelligence',
  description:
    'The centralized information hub and technical repository coordinating 119 TVET institutions across 35 African countries. Access accredited curricula, policy research, graduate tracer data, and regional training centres.',
};

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900 selection:bg-[#003366] selection:text-white">
      {/* ── 1. Knowledge Hub Hero: Search & Discovery, Taxonomy Filters, Operational Metrics ── */}
      <KnowledgeHubHero />

      {/* ── 2. Continental Digital Services & Live Knowledge Gateways (Bento Deck) ── */}
      <DigitalPortalsBento />

      {/* ── 3. Continental Knowledge Repository: Curricula, Policy Briefs & Toolkits ── */}
      <KnowledgeRepositorySection />

      {/* ── 4. Continental TVET Network Intelligence: 119 Centres Across 35 Countries ── */}
      <WhereWeWorkOverview />

      {/* ── 5. Thematic TVET Transformation Pillars: 5 Strategic Focus Areas ── */}
      <ThematicStreams />

      {/* ── 6. Flagship Continental Projects: Green Energy, Agribusiness & RPL ── */}
      <FeaturedProjectsEditorial />

      {/* ── 7. Continental News, Policy Briefs & Institutional Updates ── */}
      <KnowledgeAndNewsEditorial />

      {/* ── 8. International Development Partners & Donors ── */}
      <PartnersQuietSection />

      {/* ── 9. Institutional Engagement & Partnership Gateway ── */}
      <PartnerWithDBTACTA />
    </div>
  );
}
