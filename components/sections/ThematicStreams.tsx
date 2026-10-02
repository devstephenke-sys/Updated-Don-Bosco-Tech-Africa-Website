import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const thematicAreas = [
  {
    number: '01',
    title: 'Quality TVET',
    slug: 'quality-tvet',
    description: 'Modernizing curricula, upgrading workshop equipment, and instituting continental quality standards across 119 centres.',
  },
  {
    number: '02',
    title: 'Skills & Employability',
    slug: 'employment-and-services',
    description: 'Bridging training and industry through Job Service Offices (JSOs), career guidance, and digital graduate tracer systems.',
  },
  {
    number: '03',
    title: 'Green & Digital Transformation',
    slug: 'green-tvet',
    description: 'Equipping youth for clean energy, solar PV installation, climate-smart agriculture, and advanced digital technologies.',
  },
  {
    number: '04',
    title: 'Institutional Capacity',
    slug: 'capacity-building',
    description: 'Continuous pedagogical training for TVET instructors, technical masters, school principals, and provincial leadership.',
  },
  {
    number: '05',
    title: 'Partnerships & Policy',
    slug: 'advocacy-and-networking',
    description: 'Fostering public-private partnerships with development agencies, multinational industry leaders, and national ministries.',
  },
];

export function ThematicStreams() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200/70" id="thematic-streams">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-[680px]">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#D32F2F] uppercase block mb-3">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Strategic Pillars of TVET Excellence
            </h2>
          </div>
          <div>
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#003366] hover:text-[#D32F2F] transition-colors group"
            >
              <span>Explore our work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Editorial Thematic List */}
        <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {thematicAreas.map((area) => (
            <div
              key={area.number}
              className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline group hover:bg-slate-50/50 transition-colors px-2 rounded-lg"
            >
              <div className="md:col-span-1 text-sm font-bold text-slate-400 font-mono">
                {area.number}
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#003366] transition-colors">
                  {area.title}
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-base text-slate-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
              <div className="md:col-span-2 flex justify-start md:justify-end items-center">
                <Link
                  href={`/what-we-do/${area.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 group-hover:text-[#003366] transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

