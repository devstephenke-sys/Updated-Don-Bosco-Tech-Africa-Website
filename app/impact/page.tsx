import { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { quickHighlights } from '@/content/stats';
import { stories } from '@/content/stories';
import { StoryCard } from '@/components/cards/StoryCard';
import { ArrowUpRight, ArrowRight, Briefcase, Users, Sun } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Impact & Continental Scale | Don Bosco Tech Africa',
  description: 'Evidence-based outcomes, tracer studies data, graduate employment rates, and institutional reach across 35 African countries.',
};

export default function ImpactPage() {
  return (
    <div className="bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* 1. Minimal Page Hero */}
      <PageHero
        eyebrow="Evidence & Results"
        title="Our Continental Impact"
        subtitle="Empirical evidence of transformation: how 119 TVET centres, standardized curricula, and dedicated Job Service Offices empower over 45,000 African youth annually."
        breadcrumbs={[{ label: 'Impact' }]}
      />

      {/* 2. Key Numbers Headline (Stats Grid with Thin Borders) */}
      <section className="py-20 md:py-24 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="By The Numbers"
            title="Measuring Scale & TVET Excellence"
            subtitle="Verified data points from our annual monitoring, P-TVET provincial returns, and the Inserjeune tracer platform."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-neutral-200 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
            {quickHighlights.map((stat, i) => (
              <div key={i} className="p-8 sm:p-10 hover:bg-neutral-50/50 transition-colors">
                <div className="text-4xl sm:text-5xl font-bold font-mono tracking-tight text-neutral-900">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mt-3 font-mono">
                  {stat.label}
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Inserjeune Tracer & Graduate Outcomes */}
      <section className="py-20 md:py-24 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  Inserjeune Platform Data
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                  Traceable Youth Employment & Industry Alignment
                </h2>
              </div>

              <p className="text-base text-neutral-600 leading-relaxed">
                Unlike conventional TVET institutions that stop tracking students at graduation, DBTA deploys the <strong className="text-neutral-900 font-semibold">Inserjeune Tracer Study System</strong> across member centres to measure verified employment outcomes within 6 to 12 months post-training.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-5 border border-neutral-200 flex items-start gap-4">
                  <Briefcase className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm">57%+ Placement & Enterprise Creation</h4>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      Graduates transitioning into formal employment contracts or registered micro-enterprises.
                    </p>
                  </div>
                </div>

                <div className="p-5 border border-neutral-200 flex items-start gap-4">
                  <Users className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm">Institutionalized Job Service Offices (JSOs)</h4>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      Dedicated employment officers facilitating private sector MoUs, workplace internships, and graduate career transition.
                    </p>
                  </div>
                </div>

                <div className="p-5 border border-neutral-200 flex items-start gap-4">
                  <Sun className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm">Renewable & Green TVET Skills</h4>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      20+ institutions upgraded with solar PV test benches and internationally certified renewable instructors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Clean Indicators Box */}
            <div className="lg:col-span-6 border border-neutral-200 p-8 sm:p-10 space-y-6">
              <div className="border-b border-neutral-200 pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                  Tracer Metrics
                </span>
                <h3 className="text-xl font-bold text-neutral-900">
                  Core Performance Indicators
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-neutral-700">Direct Employment / Self-Employment Rate</span>
                    <span className="text-neutral-900 font-bold">57.4%</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-1.5 overflow-hidden">
                    <div className="bg-neutral-900 h-full w-[57.4%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-neutral-700">Female Enrollment in Non-Traditional Trades</span>
                    <span className="text-neutral-900 font-bold">32% (Target: 40%)</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-1.5 overflow-hidden">
                    <div className="bg-neutral-900 h-full w-[32%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-neutral-700">Employer Satisfaction Index</span>
                    <span className="text-neutral-900 font-bold">88%</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-1.5 overflow-hidden">
                    <div className="bg-neutral-900 h-full w-[88%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-neutral-700">Curriculum Harmonisation across 15 Provinces</span>
                    <span className="text-neutral-900 font-bold">85%</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-1.5 overflow-hidden">
                    <div className="bg-neutral-900 h-full w-[85%]" />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-200 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">Source: Inserjeune Tracer Platform</span>
                <a
                  href="https://dbtechafricatracer.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-neutral-900 hover:text-[#003366] uppercase tracking-wider"
                >
                  <span>Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Graduate Stories */}
      <section className="py-20 md:py-24 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Voices From The Field"
            title="Human Stories of Transformation"
            subtitle="Meet the young African artisans whose lives and livelihoods were shaped by Salesian technical training."
            action={
              <Link
                href="/stories"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:text-[#003366] transition-colors"
              >
                <span>All Stories</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
