'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Handshake } from 'lucide-react';

const PARTNER_NAMES = [
  'German Federal Ministry (BMZ)', 'Jugend Eine Welt', 'African Union Commission',
  'GIZ', 'Misereor', 'Don Bosco Mondo', 'USAID', 'EU Commission',
  'World Bank', 'UNHCR', 'ILO', 'UNICEF',
  'Salesians of Don Bosco', 'TVET Africa Network', 'ACTED',
];

export function PartnersSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="partners-section"
      className="relative min-h-screen flex flex-col justify-center bg-[#001a33] overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(0,51,102,0.6) 0%, transparent 70%)',
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Ghost number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[280px] font-black text-white/[0.025] leading-none select-none pointer-events-none hidden lg:block" aria-hidden="true">
        08
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 w-full py-20">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-6 mx-auto">
            <Handshake className="w-8 h-8 text-[#F5A623]" />
          </div>
          <span className="inline-flex items-center gap-3 text-xs font-black tracking-[0.25em] text-white/40 uppercase mb-4 block">
            <span className="w-8 h-px bg-white/20 inline-block" />
            Collaboration
            <span className="w-8 h-px bg-white/20 inline-block" />
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] tracking-tight">
            Working{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F5A623, #D32F2F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Together
            </span>
          </h2>
          <p className="mt-5 text-lg text-white/50 max-w-[560px] mx-auto leading-relaxed">
            Strategic partnerships with international development agencies, philanthropic
            foundations, and industry innovators driving lasting impact.
          </p>
        </div>

        {/* Partner names grid — elegant text treatment */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/10 mb-14 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '250ms' }}
        >
          {PARTNER_NAMES.map((name, i) => (
            <div
              key={i}
              className="bg-white/[0.03] hover:bg-white/[0.07] transition-colors duration-300 px-4 py-5 flex items-center justify-center text-center cursor-default group"
            >
              <span className="text-xs sm:text-sm font-bold text-white/40 group-hover:text-white/80 transition-colors duration-300 leading-snug">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '450ms' }}
        >
          <Link
            href="/partners"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#003366] font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-white/10 hover:shadow-xl"
          >
            <span>Our Partners</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold text-sm transition-all duration-300"
          >
            <span>Become a Partner</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
