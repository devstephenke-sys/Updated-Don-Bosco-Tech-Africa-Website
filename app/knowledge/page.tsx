import { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { KnowledgeDirectory } from '@/components/knowledge/KnowledgeDirectory';
import { knowledgeResources } from '@/content/knowledge';
import { BookOpen, ExternalLink, Library } from 'lucide-react';

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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <KnowledgeDirectory initialResources={knowledgeResources} />

          {/* Digital Library Promo - Clean Light Institutional Design */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                <Library className="w-4 h-4 text-blue-600" />
                <span>Full Digital E-Library</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Explore the DBTA Digital Library Platform
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Looking for student learning textbooks, trade videos, course guides, and digital e-learning resources? Access the dedicated DBTA Digital Library with over 2,500 catalogued materials.
              </p>
            </div>
            <a
              href="https://digitallibrary.dbtechafrica.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all shadow-xs shrink-0"
            >
              <span>Open Digital Library</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
