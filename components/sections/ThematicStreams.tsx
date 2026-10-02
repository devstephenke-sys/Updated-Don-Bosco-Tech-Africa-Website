import React from 'react';
import Link from 'next/link';
import { thematicAreas } from '@/content';
import { ArrowRight } from 'lucide-react';

export function ThematicStreams() {
  return (
    <section className="py-20 bg-white border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 pb-6 border-b border-[#e5e7eb]">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#6b7280] mb-2">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111]">
              Our work streams
            </h2>
          </div>
          <Link
            href="/what-we-do"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#003366] hover:underline shrink-0"
          >
            See all programmes <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Minimal row-based list — no cards, just table rows */}
        <div className="divide-y divide-[#f3f4f6]">
          {thematicAreas.map((area, i) => (
            <Link
              key={area.id}
              href={`/what-we-do/${area.slug}`}
              className="group flex items-start md:items-center justify-between gap-6 py-6 hover:bg-[#f9fafb] -mx-3 px-3 rounded-lg transition-colors"
            >
              <div className="flex items-start md:items-center gap-5 flex-1 min-w-0">
                {/* Index number */}
                <span className="text-sm font-bold text-[#9ca3af] w-6 shrink-0 mt-0.5 md:mt-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-[#111111] group-hover:text-[#003366] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#6b7280] mt-0.5 leading-snug line-clamp-1">
                    {area.shortDesc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8 shrink-0">
                <span className="hidden md:block text-sm font-semibold text-[#111111]">
                  {area.impactMetric}{' '}
                  <span className="text-[#6b7280] font-normal">{area.impactLabel}</span>
                </span>
                <ArrowRight className="w-4 h-4 text-[#9ca3af] group-hover:text-[#003366] transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
