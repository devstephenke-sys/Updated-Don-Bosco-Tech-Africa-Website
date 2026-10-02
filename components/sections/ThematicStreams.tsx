import React from 'react';
import Link from 'next/link';
import { thematicAreas } from '@/content';
import { SectionHeader } from '../layout/SectionHeader';
import {
  Award,
  Briefcase,
  Sun,
  Wrench,
  GraduationCap,
  Users,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Building2: Award,
  Briefcase: Briefcase,
  Sun: Sun,
  Wrench: Wrench,
  GraduationCap: GraduationCap,
  Users: Users,
  BookOpen: BookOpen,
};

export function ThematicStreams() {
  return (
    <section className="py-20 bg-white" id="thematic-streams">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Work Streams"
          title="Transforming TVET Across Africa"
          subtitle="A holistic approach connecting curriculum quality, green energy transitions, and youth employment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {thematicAreas.map((area) => {
            const IconComponent = iconMap[area.icon] || Award;

            return (
              <div
                key={area.id}
                className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6 text-[#003366]" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {area.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {area.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    {area.impactMetric} {area.impactLabel}
                  </span>

                  <Link
                    href={`/what-we-do/${area.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <span>Read details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
