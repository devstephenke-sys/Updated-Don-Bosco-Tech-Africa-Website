'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Building2,
  Leaf,
  Briefcase,
  Handshake,
  Award,
  Sparkles,
} from 'lucide-react';

const QUICK_GATEWAYS = [
  {
    icon: Building2,
    title: '119 TVET Centres',
    subtitle: '35 African Nations',
    href: '/network',
    color: '#003366',
  },
  {
    icon: Leaf,
    title: 'Green & Solar TVET',
    subtitle: 'Clean energy trades',
    href: '/what-we-do/green-tvet',
    color: '#2D7D46',
  },
  {
    icon: Briefcase,
    title: 'Youth Employment',
    subtitle: 'Job placement & RPL',
    href: '/what-we-do/employability-jso',
    color: '#D32F2F',
  },
  {
    icon: Handshake,
    title: 'Strategic Partners',
    subtitle: 'Donors & institutions',
    href: '/contact',
    color: '#7B5EA7',
  },
];

export function HomeHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToNextSection = () => {
    const el = document.getElementById('who-we-are');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-[calc(100vh-125px)] flex flex-col justify-between bg-white overflow-hidden border-b border-slate-200/80"
      aria-label="Don Bosco Tech Africa Landing"
    >
      {/* Subtle ambient lighting gradients */}
      <div
        className="absolute top-0 right-0 w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] rounded-full pointer-events-none opacity-40 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 51, 102, 0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none opacity-30 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(211, 47, 47, 0.06) 0%, transparent 70%)',
        }}
      />

      {/* Decorative Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #003366 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Main Landing Stage ── */}
      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-2 sm:pt-5 sm:pb-3 lg:pt-6 lg:pb-3 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* ── Left Column: Editorial Manifesto ── */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {/* Eyebrow badge */}
            <div
              className={`transition-all duration-500 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: '80ms' }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/90 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wider uppercase">
                  Continental TVET Network · 35 African Nations
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className={`text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold text-slate-900 leading-[1.12] tracking-tight transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '180ms' }}
            >
              Transforming Africa&apos;s Youth Through{' '}
              <span className="relative inline-block text-[#003366]">
                Quality TVET
                <span
                  className="absolute -bottom-1 left-0 h-[3px] bg-[#D32F2F] rounded-full"
                  style={{
                    width: mounted ? '100%' : '0%',
                    transition: 'width 0.75s cubic-bezier(0.22, 1, 0.36, 1)',
                    transitionDelay: '0.7s',
                  }}
                />
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-base sm:text-lg text-slate-600 leading-relaxed max-w-[580px] font-normal transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: '280ms' }}
            >
              Coordinating <strong className="text-slate-900 font-semibold">119 Salesian TVET centres</strong> across{' '}
              <strong className="text-slate-900 font-semibold">35 African countries and Madagascar</strong> — empowering over 45,000 marginalized young people every year with market-driven, green, and industrial skills for dignified employment.
            </p>

            {/* Primary Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: '380ms' }}
            >
              <Link
                href="/network"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#003366] hover:bg-[#002244] text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Explore Network Directory</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/what-we-do"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Our 5 Thematic Pillars</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Trust proof strip */}
            <div
              className={`flex items-center gap-5 pt-1 text-xs text-slate-500 font-medium transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: '460ms' }}
            >
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#D32F2F]" />
                <span>Salesian Preventive System</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Continental AU TVET Partner</span>
              </div>
            </div>
          </div>

          {/* ── Right Column: Dynamic Visual Showcase ── */}
          <div
            className={`lg:col-span-5 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}
            style={{ transitionDelay: '220ms' }}
          >
            <div className="relative">
              {/* Offset decorative frame */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl bg-[#003366]/5 border border-[#003366]/10 -z-10" />

              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg bg-slate-100 img-zoom-wrap group border border-slate-200/80">
                <Image
                  src="https://dbtechafrica.org/wp-content/uploads/2026/04/Hands-On-Technical-Training.png"
                  alt="Don Bosco TVET learners engaged in hands-on technical training"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-103 transition-transform duration-700"
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a33]/65 via-[#001a33]/15 to-transparent pointer-events-none" />

                {/* Top Badge: Accredited Network */}
                <div className="absolute top-3.5 left-3.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-xs border border-white/80">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-slate-800">119 Accredited Centres</span>
                  </div>
                </div>

                {/* Bottom floating badge: Real impact */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5">
                  <div className="p-3 sm:p-3.5 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-white/80 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Graduate Employability
                      </div>
                      <div className="text-lg sm:text-xl font-black text-[#003366]">
                        57% Direct Employment Rate
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-[#D32F2F] flex items-center justify-center shrink-0">
                      <Briefcase className="w-4 h-4 text-[#D32F2F]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Dock: Quick Pathway Gateways & Scroll Prompt ── */}
      <div className="relative border-t border-slate-200/80 bg-slate-50/90 backdrop-blur-xs">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
            {QUICK_GATEWAYS.map((gateway, idx) => {
              const Icon = gateway.icon;
              return (
                <Link
                  key={idx}
                  href={gateway.href}
                  className="group flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/70 hover:border-[#003366]/40 shadow-xs hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
                    style={{ backgroundColor: `${gateway.color}12` }}
                  >
                    <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" style={{ color: gateway.color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#003366] transition-colors truncate">
                      {gateway.title}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 truncate hidden sm:block">
                      {gateway.subtitle}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Centered Scroll Indicator */}
          <div className="flex justify-center mt-2 pt-1">
            <button
              onClick={scrollToNextSection}
              aria-label="Scroll to discover who we are"
              className="group inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 hover:text-[#003366] transition-colors cursor-pointer"
            >
              <span>Scroll to explore</span>
              <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-[#003366] group-hover:translate-y-0.5 transition-all duration-200 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
