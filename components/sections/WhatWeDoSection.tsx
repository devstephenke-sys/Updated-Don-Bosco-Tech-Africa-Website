'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Briefcase, Leaf, Building2, Globe, Plus, Minus } from 'lucide-react';

const PILLARS = [
  {
    number: '01', title: 'Quality TVET', slug: 'quality-tvet',
    icon: Zap, color: '#D32F2F', accent: 'rgba(211,47,47,0.07)',
    stat: '119 Centres Upgraded',
    desc: 'Modernizing curricula, upgrading workshop equipment, and instituting continental quality standards across 119 centres.',
  },
  {
    number: '02', title: 'Skills & Employability', slug: 'employment-and-services',
    icon: Briefcase, color: '#003366', accent: 'rgba(0,51,102,0.07)',
    stat: '57% Employment Rate',
    desc: 'Bridging training and industry through Job Service Offices, career guidance, and digital graduate tracer systems.',
  },
  {
    number: '03', title: 'Green & Digital Transformation', slug: 'green-tvet',
    icon: Leaf, color: '#2D7D46', accent: 'rgba(45,125,70,0.07)',
    stat: 'Solar · AI · AgriTech',
    desc: 'Equipping youth for clean energy, solar PV installation, climate-smart agriculture, and advanced digital technologies.',
  },
  {
    number: '04', title: 'Institutional Capacity', slug: 'capacity-building',
    icon: Building2, color: '#7B5EA7', accent: 'rgba(123,94,167,0.07)',
    stat: '2,400+ Instructors Trained',
    desc: 'Continuous pedagogical training for TVET instructors, technical masters, school principals, and provincial leadership.',
  },
  {
    number: '05', title: 'Partnerships & Policy', slug: 'advocacy-and-networking',
    icon: Globe, color: '#C07D14', accent: 'rgba(192,125,20,0.07)',
    stat: '35 Country Partnerships',
    desc: 'Fostering public-private partnerships with development agencies, multinational industry leaders, and national ministries.',
  },
];

export function WhatWeDoSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="thematic-streams"
      className="relative min-h-screen flex items-center bg-white overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D32F2F] via-[#7B5EA7] to-[#C07D14]" />

      {/* Ghost number */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[280px] font-black text-slate-900/[0.025] leading-none select-none pointer-events-none hidden lg:block" aria-hidden="true">
        04
      </div>

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left: Header */}
          <div
            className={`lg:col-span-4 lg:sticky lg:top-32 self-start transition-all duration-800 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-flex items-center gap-2 text-xs font-black tracking-[0.2em] text-[#D32F2F] uppercase mb-5 block">
              <span className="w-8 h-px bg-[#D32F2F]" />
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Five Pillars of TVET{' '}
              <span className="text-[#003366]">Excellence</span>
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Our five strategic thematic streams drive quality, sustainability, and relevance across our continental network.
            </p>
            <Link
              href="/what-we-do"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#003366] hover:text-[#D32F2F] transition-colors"
            >
              <span>Explore all work areas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: Accordion pillars */}
          <div className="lg:col-span-8 space-y-3">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              const isOpen = openIndex === i;

              return (
                <div
                  key={p.number}
                  className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                    visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{
                    transitionDelay: `${200 + i * 80}ms`,
                    borderColor: isOpen ? `${p.color}35` : '#e2e8f0',
                    backgroundColor: isOpen ? p.accent : 'white',
                  }}
                >
                  {/* Row header */}
                  <button
                    className="w-full text-left flex items-center gap-4 sm:gap-6 p-5 sm:p-6 cursor-pointer group"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {/* Large number */}
                    <span
                      className="text-3xl sm:text-4xl font-black tabular-nums transition-colors duration-300"
                      style={{ color: isOpen ? p.color : '#e2e8f0' }}
                    >
                      {p.number}
                    </span>

                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{ backgroundColor: isOpen ? `${p.color}15` : 'rgba(0,0,0,0.04)' }}
                    >
                      <Icon className="w-5 h-5 transition-colors duration-300" style={{ color: isOpen ? p.color : '#94a3b8' }} />
                    </div>

                    {/* Title */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-lg sm:text-xl font-bold transition-colors duration-300"
                        style={{ color: isOpen ? p.color : '#0f172a' }}
                      >
                        {p.title}
                      </h3>
                      <span
                        className="hidden sm:inline-flex mt-1 text-[11px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: `${p.color}12`,
                          color: p.color,
                          opacity: isOpen ? 1 : 0.6,
                        }}
                      >
                        {p.stat}
                      </span>
                    </div>

                    {/* Toggle */}
                    <div
                      className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        borderColor: isOpen ? p.color : '#e2e8f0',
                        backgroundColor: isOpen ? p.color : 'transparent',
                      }}
                    >
                      {isOpen
                        ? <Minus className="w-3.5 h-3.5 text-white" />
                        : <Plus className="w-3.5 h-3.5 text-slate-400" />
                      }
                    </div>
                  </button>

                  {/* Expanded body */}
                  <div
                    className="overflow-hidden transition-all duration-400 ease-out"
                    style={{ maxHeight: isOpen ? '160px' : '0px' }}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 flex gap-6 sm:gap-8">
                      <span className="w-10 flex-shrink-0 hidden sm:block" />
                      <span className="w-11 flex-shrink-0 hidden sm:block" />
                      <div className="space-y-3">
                        <p className="text-base text-slate-600 leading-relaxed">{p.desc}</p>
                        <Link
                          href={`/what-we-do/${p.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
                          style={{ color: p.color }}
                        >
                          <span>Explore this pillar</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
