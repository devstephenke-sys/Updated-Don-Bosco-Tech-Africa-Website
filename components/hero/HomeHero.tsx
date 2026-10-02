'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';

const STATS = [
  { value: '119', label: 'TVET Centres' },
  { value: '35', label: 'Countries' },
  { value: '45K+', label: 'Youth Annually' },
];

export function HomeHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative bg-white overflow-hidden" aria-label="DBTA Homepage Hero">
      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#003366 1px, transparent 1px), linear-gradient(90deg, #003366 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Decorative red accent — top right corner */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D32F2F] opacity-[0.04] rounded-bl-full pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left Column: Copy ── */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-7">

            {/* Eyebrow pill */}
            <div className={`transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '80ms' }}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D32F2F]/8 border border-[#D32F2F]/20 text-[#D32F2F] text-xs font-bold tracking-[0.12em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] animate-pulse" />
                Don Bosco Tech Africa
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-[42px] sm:text-5xl lg:text-[58px] font-extrabold text-slate-900 leading-[1.08] tracking-tight transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '180ms' }}
            >
              Transforming Africa's Youth Through{' '}
              <span className="relative inline-block text-[#003366]">
                Quality TVET
                <span
                  className="absolute -bottom-1 left-0 h-[3px] bg-[#D32F2F] rounded-full"
                  style={{
                    width: mounted ? '100%' : '0%',
                    transition: 'width 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                    transitionDelay: '0.7s',
                  }}
                />
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg md:text-xl text-slate-600 leading-relaxed max-w-[580px] font-normal transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '300ms' }}
            >
              Coordinating{' '}
              <strong className="text-slate-800 font-semibold">119 Salesian TVET centres</strong>{' '}
              across{' '}
              <strong className="text-slate-800 font-semibold">35 African countries</strong>{' '}
              — equipping young people with market-driven skills, values, and dignified livelihoods.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '420ms' }}
            >
              <Link
                href="/network"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-semibold text-base transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Explore Our Network</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/what-we-do"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Discover Our Work</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Inline stats strip */}
            <div
              className={`flex items-center gap-8 pt-2 border-t border-slate-100 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '540ms' }}
            >
              {STATS.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-2xl font-extrabold text-[#003366] tracking-tight">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Image ── */}
          <div
            className={`lg:col-span-6 xl:col-span-5 transition-all duration-700 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transitionDelay: '250ms' }}
          >
            <div className="relative">
              {/* Offset decorative block behind the image */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl bg-[#003366]/6 border border-[#003366]/10" />

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[5/4] shadow-lg bg-slate-100 img-zoom-wrap">
                <Image
                  src="https://dbtechafrica.org/wp-content/uploads/2026/04/Hands-On-Technical-Training.png"
                  alt="Don Bosco TVET learners engaged in hands-on technical training"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
                {/* Subtle bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#001a33]/40 to-transparent" />

                {/* Caption badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm border border-white/60">
                    <div className="w-2 h-2 rounded-full bg-[#D32F2F] flex-shrink-0" />
                    <span className="text-xs font-semibold text-slate-700">Salesian TVET Network — Hands-On Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
