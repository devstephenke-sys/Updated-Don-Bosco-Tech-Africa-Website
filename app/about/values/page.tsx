import { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { institutionalValues } from '@/content/about';
import { Heart, ShieldCheck, Star, Users, Lightbulb, CheckCircle2, Award, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Core Values | Don Bosco Tech Africa',
  description: 'The core values and ethical principles guiding Don Bosco Tech Africa TVET centres across 35 countries in Africa.',
};

const iconMap: Record<string, any> = {
  Heart,
  ShieldCheck,
  Star,
  Users,
  Lightbulb,
};

export default function ValuesPage() {
  return (
    <div>
      <PageHero
        title="Our Core Values"
        subtitle="The moral foundation and ethical standards that guide Don Bosco Tech Africa in equipping youth with technical excellence, dignity, and purpose."
        badge="Institutional Principles"
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Core Values' },
        ]}
      />

      {/* Main Values Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Principles That Define Our Action"
            subtitle="Every policy, curriculum, workshop, and partnership in our continental network is anchored in these five pillars."
            badge="Living Our Mission"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {institutionalValues.map((val, idx) => {
              const IconComponent = iconMap[val.icon] || Award;
              return (
                <div
                  key={val.title}
                  className={`relative bg-slate-50 border border-slate-200/80 rounded-2xl p-8 hover:border-brand-accent/40 hover:shadow-xl transition-all duration-300 group ${
                    idx === institutionalValues.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl bg-brand-navy/5 text-brand-navy group-hover:bg-brand-accent group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-navy transition-colors">
                    {val.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {val.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-200/60 flex items-center text-sm font-semibold text-brand-navy">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent mr-2" />
                    Applied across all 119 TVET Centres
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Don Bosco Preventive System in Technical Education */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-navy to-slate-900 rounded-3xl p-8 md:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-accent/20 text-brand-gold uppercase tracking-wider mb-4">
                Educational Pedagogy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                The Preventive System in TVET
              </h2>
              <p className="mt-4 text-slate-300 text-lg leading-relaxed">
                St. John Bosco’s pedagogical method is founded on three pillars: **Reason, Religion, and Loving-Kindness**. In our technical training centres, this translates into an environment of mutual respect, high ethical standards, hands-on mentorship, and an unwavering commitment to youth dignity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                  <h4 className="font-bold text-brand-gold text-lg">Reason</h4>
                  <p className="text-xs text-slate-300 mt-2">
                    Transparent expectations, critical technical thinking, and dialogue-driven problem solving.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                  <h4 className="font-bold text-brand-gold text-lg">Religion & Ethics</h4>
                  <p className="text-xs text-slate-300 mt-2">
                    Moral integrity, civic responsibility, and respect for diversity and human dignity.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                  <h4 className="font-bold text-brand-gold text-lg">Loving-Kindness</h4>
                  <p className="text-xs text-slate-300 mt-2">
                    Empathetic mentorship, presence among youth, and fostering family spirit within workshops.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/about/who-we-are"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold transition-all shadow-md"
                >
                  Learn Who We Are <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about/governance"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-all"
                >
                  Governance Structure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
