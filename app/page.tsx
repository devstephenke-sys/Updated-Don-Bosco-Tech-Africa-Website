import React from 'react';
import { ObservatoryGatewayHero } from '@/components/hero/ObservatoryGatewayHero';
import { RankingsSnapshotSection } from '@/components/sections/RankingsSnapshotSection';
import { VocationalGatewaySection } from '@/components/sections/VocationalGatewaySection';
import { ObservatoryNetworkGateway } from '@/components/sections/ObservatoryNetworkGateway';
import { FeaturedResearchGateway } from '@/components/sections/FeaturedResearchGateway';
import { PartnersQuietSection } from '@/components/sections/PartnersQuietSection';
import { PartnerWithDBTACTA } from '@/components/sections/PartnerWithDBTACTA';

export const metadata = {
  title: 'Don Bosco Tech Africa — Pan-African TVET Institutional Observatory & Knowledge Platform',
  description:
    'The continental coordinating body benchmarked across 119 TVET institutions, 35 African countries, and 15 Salesian Provinces. Explore audited graduate employment rates, accredited vocational disciplines, and research tracer studies.',
};

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900 selection:bg-[#003366] selection:text-white">
      {/* ── 1. Observatory Gateway Hero & Universal Search Terminal ── */}
      <ObservatoryGatewayHero />

      {/* ── 2. Continental TVET Benchmark Preview (Top 5 Ranked Institutions Snapshot) ── */}
      <RankingsSnapshotSection />

      {/* ── 3. Vocational Disciplines & Trade Pathways Gateway (QS Subject Rankings Model) ── */}
      <VocationalGatewaySection />

      {/* ── 4. Pan-African TVET Architecture (Institutions, Provinces, Countries & Comparator) ── */}
      <ObservatoryNetworkGateway />

      {/* ── 5. Evidence & Policy Intelligence (Tracer Studies & Toolkits Gateway) ── */}
      <FeaturedResearchGateway />

      {/* ── 6. International Development Partners & Donors ── */}
      <PartnersQuietSection />

      {/* ── 7. Continental Secretariat & Engagement Gateway ── */}
      <PartnerWithDBTACTA />
    </div>
  );
}
