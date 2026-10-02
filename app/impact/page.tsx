import { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { institutionalStats, quickHighlights } from '@/content/stats';
import { stories } from '@/content/stories';
import { StoryCard } from '@/components/cards/StoryCard';
import { 
  TrendingUp, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Sun, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  BarChart3
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Impact & Continental Scale | Don Bosco Tech Africa',
  description: 'Evidence-based outcomes, tracer studies data, graduate employment rates, and institutional reach across 35 African countries.',
};

export default function ImpactPage() {
  return (
    <div>
      <PageHero
        title="Our Continental Impact"
        subtitle="Empirical evidence of transformation: how 119 TVET centres, modernised curricula, and dedicated Job Service Offices empower over 45,000 African youth annually."
        badge="Evidence & Results"
        breadcrumbs={[
          { label: 'Impact' },
        ]}
      />

      {/* Key Numbers Headline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Measuring Scale & TVET Excellence"
            subtitle="Verified data points from our annual monitoring, P-TVET provincial returns, and Inserjeune tracer platform."
            badge="By the Numbers"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {quickHighlights.map((stat, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-8 hover:border-brand-accent/40 hover:shadow-lg transition-all"
              >
                <div className="text-4xl sm:text-5xl font-black text-brand-navy tracking-tight">
                  {stat.value}
                </div>
                <div className="text-lg font-bold text-brand-accent mt-2">
                  {stat.label}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inserjeune Tracer & Graduate Outcomes */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">
                Inserjeune Platform Data
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
                Traceable Youth Employment & Industry Alignment
              </h2>
              <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                Unlike conventional TVET institutions that stop tracking students at graduation, DBTA deploys the **Inserjeune Tracer Study System** across centres to measure real employment outcomes within 6 to 12 months post-training.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Briefcase className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-base">57%+ Placement & Self-Employment</h4>
                    <p className="text-xs text-slate-300 mt-1">Graduates successfully transitioning into formal contracts or registered micro-enterprises.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Users className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-base">Dedicated Job Service Officers (JSOs)</h4>
                    <p className="text-xs text-slate-300 mt-1">Institutionalised employment desks facilitating employer MoUs, industry visits, and mock interviews.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Sun className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-base">Green & Solar Energy Skills</h4>
                    <p className="text-xs text-slate-300 mt-1">Over 20+ centres equipped with certified solar PV test benches and certified renewable trainers.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Tracer System Core Indicators</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span>Direct Employment Rate</span>
                    <span className="text-brand-gold">57.4%</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-brand-gold h-full rounded-full w-[57%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span>Female Enrollment in Non-Traditional Trades</span>
                    <span className="text-brand-gold">32% (Target: 40%)</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-brand-accent h-full rounded-full w-[32%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span>Employer Satisfaction Index</span>
                    <span className="text-brand-gold">88%</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full rounded-full w-[88%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span>Curriculum Harmonisation across 15 Provinces</span>
                    <span className="text-brand-gold">85%</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-blue-400 h-full rounded-full w-[85%]" />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-300">Powered by Inserjeune Tracer</span>
                <a
                  href="https://dbtechafricatracer.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-gold hover:text-white flex items-center gap-1 transition-colors"
                >
                  Access Tracer Portal <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Graduate Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Human Stories of Transformation"
            subtitle="Meet the young African men and women whose lives and livelihoods were shaped by Don Bosco TVET."
            badge="Voices from the Field"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-md"
            >
              Browse All Graduate Stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
