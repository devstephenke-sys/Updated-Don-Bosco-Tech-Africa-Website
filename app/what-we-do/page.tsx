import { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { thematicAreas } from '@/content/thematicAreas';
import { 
  Building2, 
  Sun, 
  Briefcase, 
  Users, 
  Wrench, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'What We Do | 7 Core Thematic Streams | Don Bosco Tech Africa',
  description: 'Discover the 7 thematic work streams transforming Technical and Vocational Education and Training (TVET) across Africa.',
};

const iconMap: Record<string, any> = {
  Building2,
  Sun,
  Briefcase,
  Users,
  Wrench,
  GraduationCap,
  BookOpen,
};

export default function WhatWeDoPage() {
  return (
    <div>
      <PageHero
        title="What We Do"
        subtitle="A continental, systemic approach to technical education across seven strategic pillars: from green skills and institutional governance to youth employability and gender inclusion."
        badge="Strategic Work Streams"
        breadcrumbs={[
          { label: 'What We Do' },
        ]}
      />

      {/* Strategic Framework intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-brand-accent font-bold text-xs uppercase tracking-widest">
              Thematic Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Seven Pillars of Continental TVET Transformation
            </h2>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Don Bosco Tech Africa does not just build standalone workshops; we build resilient, high-quality TVET ecosystems that connect curriculum to industry demand, equip trainers with modern pedagogy, and ensure no youth is left behind.
            </p>
          </div>

          {/* Pillars List Detailed */}
          <div className="mt-16 space-y-16">
            {thematicAreas.map((area, idx) => {
              const IconComponent = iconMap[area.icon] || BookOpen;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={area.id}
                  id={area.slug}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm transition-all hover:shadow-md ${
                    isEven ? 'bg-slate-50' : 'bg-white'
                  }`}
                >
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center font-bold shadow-sm">
                        <IconComponent className="w-6 h-6 text-brand-gold" />
                      </div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Pillar {idx + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {area.title}
                    </h3>
                    <p className="text-base text-brand-accent font-semibold mt-1">
                      {area.tagline || 'Continental TVET Stream'}
                    </p>
                    <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                      {area.fullDesc || area.description || area.shortDesc}
                    </p>

                    {area.objectives && area.objectives.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                          Key Strategic Objectives
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {area.objectives.map((obj: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        href={`/what-we-do/${area.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-navy hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-sm"
                      >
                        Explore Pillar Details <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all"
                      >
                        Related Projects
                      </Link>
                    </div>
                  </div>

                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    {area.keyMetrics && area.keyMetrics.length > 0 && (
                      <div className="bg-gradient-to-br from-brand-navy to-slate-900 rounded-2xl p-8 text-white shadow-xl">
                        <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                          Pillar Key Metrics & Focus
                        </span>
                        <div className="mt-6 space-y-6">
                          {area.keyMetrics.map((km: { value: string; label: string; description: string }, mi: number) => (
                            <div key={mi} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                              <div className="text-3xl font-extrabold text-white tracking-tight">
                                {km.value}
                              </div>
                              <div className="text-sm font-semibold text-brand-gold mt-0.5">
                                {km.label}
                              </div>
                              <div className="text-xs text-slate-300 mt-1">
                                {km.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action for Partners & Funders */}
      <section className="py-16 bg-slate-50 border-t border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Partner With Us Across Any Thematic Stream
          </h3>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Collaborate with Don Bosco Tech Africa on green energy, curriculum upgrades, apprenticeships, tracer studies, or gender mainstreaming across 35 countries.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?interest=partnership"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-sm"
            >
              Initiate Partnership Discussion
            </Link>
            <Link
              href="/knowledge"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold text-sm transition-all"
            >
              View Research & Reports
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
