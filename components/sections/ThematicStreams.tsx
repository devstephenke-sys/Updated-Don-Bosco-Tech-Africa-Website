import React from 'react';
import Link from 'next/link';
import { thematicAreas } from '@/content';
import { SectionHeader } from '../layout/SectionHeader';
import {
  Award,
  Briefcase,
  SunMedium,
  Cpu,
  Wrench,
  GraduationCap,
  Megaphone,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-6 h-6 text-blue-600" />,
  Briefcase: <Briefcase className="w-6 h-6 text-orange-500" />,
  SunMedium: <SunMedium className="w-6 h-6 text-emerald-600" />,
  Cpu: <Cpu className="w-6 h-6 text-indigo-600" />,
  Wrench: <Wrench className="w-6 h-6 text-purple-600" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-amber-600" />,
  Megaphone: <Megaphone className="w-6 h-6 text-pink-600" />,
};

export function ThematicStreams() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Core Thematic Areas"
          title="What We Do Across Africa"
          subtitle="Empowering technical institutions and youth with modern curricula, clean energy trades, digital skills, and certified employment transition pathways."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {thematicAreas.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {iconMap[area.icon] || <Award className="w-6 h-6 text-blue-600" />}
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {area.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {area.shortDesc}
                </p>

                {/* Key Pillars Pills */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {area.keyPillars.slice(0, 2).map((pillar, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span className="truncate">{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">{area.impactMetric}</span>
                  <span className="text-[11px] text-slate-400 block">{area.impactLabel}</span>
                </div>

                <Link
                  href={`/what-we-do#${area.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-800 group-hover:translate-x-1 transition-all"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
