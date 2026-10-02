import { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { KnowledgeHubExplorer } from '@/components/knowledge/KnowledgeHubExplorer';
import { BookOpen, Download, Search, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Knowledge Hub & Publications | Don Bosco Tech Africa',
  description: 'Access research publications, policy briefs, green TVET manuals, tracer reports, and toolkits published by Don Bosco Tech Africa.',
};

export default function KnowledgePage() {
  return (
    <div>
      <PageHero
        title="Knowledge Hub & Publications"
        subtitle="Open-access repository of TVET research, green technology manuals, curriculum frameworks, tracer study evaluations, and policy documents."
        badge="Continental TVET Repository"
        breadcrumbs={[
          { label: 'Knowledge Hub' },
        ]}
      />

      {/* Explorer Component */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <KnowledgeHubExplorer />
        </div>
      </section>

      {/* Digital Library Promo */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-brand-navy rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">
                Full Digital E-Library
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2">
                Explore the DBTA Digital Library Platform
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Looking for student learning textbooks, trade videos, course guides, and digital e-learning resources? Access the dedicated DBTA Digital Library.
              </p>
            </div>
            <a
              href="https://digitallibrary.dbtechafrica.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent/90 text-white font-bold text-sm transition-all shadow-lg shrink-0"
            >
              Open Digital Library ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
