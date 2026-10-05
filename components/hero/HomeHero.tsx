'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe, CheckCircle2, Building2, Users, TrendingUp, Sparkles } from 'lucide-react';

export function HomeHero() {
  return (
    <section className="relative bg-gradient-to-b from-[#F8FAFC] via-white to-white overflow-hidden border-b border-slate-200/70">
      {/* ── Subtle background grid pattern for institutional texture ── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #003366 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* ── Soft brand ambient blur behind photo ── */}
      <div
        className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0,51,102,0.08) 0%, rgba(245,166,35,0.05) 50%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ── LEFT COLUMN: Clear Institutional Narrative ── */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#003366]/5 border border-[#003366]/15 text-[#003366]">
              <span className="w-2 h-2 rounded-full bg-[#D32F2F]" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Continental TVET Network · 35 African Nations
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black text-slate-900 tracking-tight leading-[1.12]">
              Equipping Africa’s Youth with Practical Skills for{' '}
              <span className="text-[#003366] relative inline-block">
                Life and Work.
                <span
                  className="absolute left-0 right-0 -bottom-1 h-1.5 bg-[#F5A623]/70 rounded-full"
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Clear institutional sub-copy */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-[620px]">
              Don Bosco Tech Africa coordinates <span className="font-semibold text-slate-900">119 Salesian TVET institutions</span> across sub-Saharan Africa and Madagascar. We equip young people with market-driven technical qualifications, ethical leadership, and direct pathways to dignified employment.
            </p>

            {/* Institutional Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/network"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#003366] hover:bg-[#002244] text-white font-bold text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Explore Our TVET Centres</span>
                <ArrowRight className="w-4 h-4 text-[#F5A623]" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base transition-all duration-200"
              >
                <span>About Our Mission</span>
              </Link>
            </div>

            {/* Grounded Key Facts Baseline */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#003366] leading-none">
                    119
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1.5">
                    TVET Centres
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#D32F2F] leading-none">
                    35
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1.5">
                    African Countries
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#003366] leading-none">
                    45K+
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1.5">
                    Youth Reached Yearly
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#2D7D46] leading-none">
                    57%
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1.5">
                    Employment Rate
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Authentic Workshop Photography ── */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Subtle background offset card */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#003366]/10 via-[#F5A623]/10 to-transparent -rotate-1 hidden sm:block" />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] bg-slate-100 shadow-xl border border-slate-200/80">
                <Image
                  src="https://dbtechafrica.org/wp-content/uploads/2026/04/Hands-On-Technical-Training.png"
                  alt="African vocational students receiving certified hands-on technical training in modern electrical and solar engineering"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover"
                />

                {/* Subtle gradient vignette at bottom for caption legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Top trust pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#003366] shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2D7D46]" />
                    Accredited Technical Curricula
                  </span>
                </div>

                {/* Bottom caption card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60 text-left">
                  <div className="text-xs font-bold text-[#003366] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
                    <span>Real Impact in Action</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Hands-on solar PV & electrical engineering masterclass — preparing youth for Africa's green industrial transition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
