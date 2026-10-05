'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, FileText, ExternalLink } from 'lucide-react';

const NEWS = [
  {
    date: '2026-08-26', type: 'Conference',
    title: 'Conference on Accelerating the Domestication of the Continental TVET Strategy (2025–2034)',
    desc: 'Don Bosco Tech Africa convenes continental policymakers, development partners, and TVET leaders to align technical training institutions with the African Union\'s decade roadmap.',
    href: '/news/conference-on-accelerating-the-domestication-of-the-continental-tvet-strategy-2025-2034',
  },
  {
    date: '2026-03-27', type: 'Assembly',
    title: 'From Commitment to Practice: Deepening Inclusivity, Sustainability and Skills Recognition in African TVET',
    desc: 'The Online Annual Stakeholders Assembly (ASA 2026) outlines pragmatic milestones for expanding green technology courses and gender parity across the Salesian network.',
    href: '/news/from-commitment-to-practice-deepening-inclusivity-sustainability-and-skills-recognition-in-african-tvet',
  },
];

const PUBLICATIONS = [
  {
    type: 'Policy & Advocacy', size: 'PDF · 3.8 MB',
    title: 'Accelerating the Domestication of the Continental TVET Strategy (2025–2034)',
    desc: 'Strategic policy synthesis analyzing practical pathways for TVET institutions and national qualification frameworks.',
    href: '/knowledge/tvet-continental-strategy-domestication-report',
  },
  {
    type: 'Curriculum & Toolkits', size: 'PDF · 5.2 MB',
    title: 'Recognition of Prior Learning (RPL): Practitioner Implementation Guide for African TVET',
    desc: 'Comprehensive operational manual detailing diagnostic assessment, portfolio evidence compilation, and moderation protocols.',
    href: '/knowledge/rpl-framework-implementation-manual',
  },
];

export function InsightsSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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
      id="insights-updates"
      className="relative min-h-screen flex items-center bg-white overflow-hidden"
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003366] via-[#D32F2F] to-[#F5A623]" />

      {/* Ghost number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[280px] font-black text-slate-900/[0.022] leading-none select-none pointer-events-none hidden lg:block" aria-hidden="true">
        07
      </div>

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 w-full py-20">
        {/* Header */}
        <div
          className={`mb-14 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
          }`}
        >
          <span className="inline-flex items-center gap-2 text-xs font-black tracking-[0.2em] text-[#D32F2F] uppercase mb-4 block">
            <span className="w-8 h-px bg-[#D32F2F]" />
            Insights & Updates
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Knowledge &{' '}
            <span className="text-[#003366]">Continental News</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: News */}
          <div
            className={`space-y-6 transition-all duration-700 ease-out ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-black tracking-[0.2em] text-slate-400 uppercase">Latest from DBTA</h3>
              <Link href="/news" className="group inline-flex items-center gap-1 text-xs font-bold text-[#003366] hover:text-[#D32F2F] transition-colors">
                <span>View all news</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {NEWS.map((n, i) => (
              <Link
                key={i}
                href={n.href}
                className="group block p-6 rounded-2xl border border-slate-200/60 bg-slate-50/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-xs text-slate-400 font-medium">{n.date}</span>
                  <span className="px-2 py-0.5 rounded-md bg-[#003366]/8 text-[#003366] text-[10px] font-black uppercase tracking-wider">
                    {n.type}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#003366] transition-colors leading-snug mb-2 line-clamp-2">
                  {n.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{n.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#D32F2F] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Read article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>

          {/* Right: Publications */}
          <div
            className={`space-y-6 transition-all duration-700 ease-out ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '280ms' }}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-black tracking-[0.2em] text-slate-400 uppercase">Publications & Toolkits</h3>
              <Link href="/knowledge" className="group inline-flex items-center gap-1 text-xs font-bold text-[#003366] hover:text-[#D32F2F] transition-colors">
                <span>Visit Knowledge Hub</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {PUBLICATIONS.map((pub, i) => (
              <Link
                key={i}
                href={pub.href}
                className="group block p-6 rounded-2xl border border-slate-200/60 bg-slate-50/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#D32F2F]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D32F2F]">{pub.type}</span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400">{pub.size}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#003366] transition-colors leading-snug mb-2 line-clamp-2">
                  {pub.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{pub.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#003366] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Access document</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
