'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Briefcase, Leaf, Building2, Globe } from 'lucide-react';

const thematicAreas = [
  {
    number: '01',
    title: 'Quality TVET',
    slug: 'quality-tvet',
    icon: Zap,
    color: '#D32F2F',
    bgColor: 'bg-red-50',
    description:
      'Modernizing curricula, upgrading workshop equipment, and instituting continental quality standards across 119 centres.',
    highlight: '119 Centres Upgraded',
  },
  {
    number: '02',
    title: 'Skills & Employability',
    slug: 'employment-and-services',
    icon: Briefcase,
    color: '#003366',
    bgColor: 'bg-blue-50',
    description:
      'Bridging training and industry through Job Service Offices (JSOs), career guidance, and digital graduate tracer systems.',
    highlight: '57% Employment Rate',
  },
  {
    number: '03',
    title: 'Green & Digital Transformation',
    slug: 'green-tvet',
    icon: Leaf,
    color: '#2D7D46',
    bgColor: 'bg-green-50',
    description:
      'Equipping youth for clean energy, solar PV installation, climate-smart agriculture, and advanced digital technologies.',
    highlight: 'Solar · AI · AgriTech',
  },
  {
    number: '04',
    title: 'Institutional Capacity',
    slug: 'capacity-building',
    icon: Building2,
    color: '#7B5EA7',
    bgColor: 'bg-purple-50',
    description:
      'Continuous pedagogical training for TVET instructors, technical masters, school principals, and provincial leadership.',
    highlight: '2,400+ Instructors Trained',
  },
  {
    number: '05',
    title: 'Partnerships & Policy',
    slug: 'advocacy-and-networking',
    icon: Globe,
    color: '#C07D14',
    bgColor: 'bg-amber-50',
    description:
      'Fostering public-private partnerships with development agencies, multinational industry leaders, and national ministries.',
    highlight: '35 Country Partnerships',
  },
];

export function ThematicStreams() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/70"
      id="thematic-streams"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-[640px] reveal">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#D32F2F] uppercase block mb-3">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Five Pillars of TVET Excellence
            </h2>
          </div>
          <div className="reveal reveal-delay-2">
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#003366] hover:text-[#D32F2F] transition-colors group"
            >
              <span>Explore all work areas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Interactive pillar rows */}
        <div className="space-y-2">
          {thematicAreas.map((area, i) => {
            const Icon = area.icon;
            const isActive = activeIndex === i;

            return (
              <div
                key={area.number}
                className={`thematic-row group rounded-xl border transition-all duration-300 cursor-pointer reveal reveal-delay-${Math.min(i + 1, 5)}`}
                style={{
                  borderColor: isActive ? area.color + '40' : '#e2e8f0',
                  backgroundColor: isActive ? area.color + '08' : 'white',
                }}
                onClick={() => setActiveIndex(isActive ? null : i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveIndex(isActive ? null : i)}
                aria-expanded={isActive}
              >
                {/* Main row */}
                <div className="flex items-center gap-4 md:gap-6 p-5 md:p-6">
                  {/* Number */}
                  <div className="text-sm font-mono font-bold text-slate-300 w-8 flex-shrink-0 tabular-nums">
                    {area.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${area.bgColor}`}
                  >
                    <Icon className="w-5 h-5" style={{ color: area.color }} />
                  </div>

                  {/* Title + highlight badge */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3
                        className="text-base md:text-lg font-bold text-slate-900 transition-colors duration-200"
                        style={{ color: isActive ? area.color : undefined }}
                      >
                        {area.title}
                      </h3>
                      {area.highlight && (
                        <span
                          className="hidden sm:inline-flex text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full transition-opacity duration-200"
                          style={{
                            backgroundColor: area.color + '15',
                            color: area.color,
                            opacity: isActive ? 1 : 0.7,
                          }}
                        >
                          {area.highlight}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Expand / Link */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <Link
                      href={`/what-we-do/${area.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="hidden md:inline-flex items-center gap-1 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: area.color }}
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>

                    <div
                      className="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0"
                      style={{
                        borderColor: isActive ? area.color : '#cbd5e1',
                        backgroundColor: isActive ? area.color : 'transparent',
                      }}
                    >
                      <span
                        className="text-xs font-bold leading-none transition-colors"
                        style={{ color: isActive ? '#fff' : '#94a3b8' }}
                      >
                        {isActive ? '−' : '+'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expanded description */}
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: isActive ? '160px' : '0px' }}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 flex items-start gap-4">
                    <div className="w-8 flex-shrink-0" /> {/* spacer for number column */}
                    <div className="w-10 flex-shrink-0" /> {/* spacer for icon column */}
                    <div className="space-y-3">
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                        {area.description}
                      </p>
                      <Link
                        href={`/what-we-do/${area.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
                        style={{ color: area.color }}
                      >
                        <span>Explore this pillar</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
