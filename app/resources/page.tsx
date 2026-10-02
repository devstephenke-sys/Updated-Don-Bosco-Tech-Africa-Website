import { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { DigitalEcosystemGrid } from '@/components/sections/DigitalEcosystemGrid';
import { digitalServices } from '@/content/digitalServices';
import { Server, ShieldCheck, Lock, ExternalLink, Globe, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Services & Portals | Don Bosco Tech Africa',
  description: 'Access Don Bosco Tech Africa cloud platforms, MIS management, TVET e-library, graduate tracer system, and staff portal.',
};

export default function ResourcesPage() {
  return (
    <div>
      <PageHero
        title="DBTA Digital Platforms & Services"
        subtitle="The interconnected technological backbone powering TVET management, student e-learning, graduate employment tracing, and staff operations across 35 African countries."
        badge="Digital TVET Ecosystem"
        breadcrumbs={[
          { label: 'Resources & Services' },
        ]}
      />

      {/* Main Digital Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Operational Cloud Portals"
            subtitle="Direct gateways for students, instructors, administrators, and partner organizations."
            badge="Continental Platforms"
            align="center"
          />

          <div className="mt-12">
            <DigitalEcosystemGrid />
          </div>
        </div>
      </section>

      {/* Digital Security & TVET Transformation */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <ShieldCheck className="w-8 h-8 text-brand-accent mb-4" />
              <h4 className="font-bold text-slate-900 text-lg">Centralised Data Governance</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Standardised TVET indicators, student enrollment verification, and cross-border provincial reporting aligned with African Union TVET guidelines.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <Lock className="w-8 h-8 text-brand-navy mb-4" />
              <h4 className="font-bold text-slate-900 text-lg">Enterprise Security & Privacy</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Role-based access control, encrypted tracer survey pipelines, and strict compliance with national student data privacy laws across all 35 jurisdictions.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <Cpu className="w-8 h-8 text-amber-600 mb-4" />
              <h4 className="font-bold text-slate-900 text-lg">Offline-First Capabilities</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Equipping remote and rural TVET centres with cached local digital repositories to ensure uninterrupted student access without costly bandwidth requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
