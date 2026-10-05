'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users, MapPin, Award } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    label: '45,000+ youth empowered annually',
    color: '#003366',
    bg: 'rgba(0,51,102,0.08)',
  },
  {
    icon: MapPin,
    label: 'Present in 35 African countries',
    color: '#D32F2F',
    bg: 'rgba(211,47,47,0.08)',
  },
  {
    icon: Award,
    label: 'Rooted in the Salesian Preventive System',
    color: '#2D7D46',
    bg: 'rgba(45,125,70,0.08)',
  },
];

export function WhoWeAreSection() {
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
      id="who-we-are"
      className="relative min-h-screen flex items-center bg-white overflow-hidden"
    >
      {/* Decorative top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003366] via-[#D32F2F] to-[#F5A623]" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #003366 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Large ghost number */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[320px] font-black text-slate-900/[0.025] leading-none select-none pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        01
      </div>

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: Image */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="relative">
              {/* Offset decorative frame */}
              <div className="absolute -bottom-5 -left-5 w-full h-full rounded-3xl border-2 border-[#003366]/10" />
              <div className="absolute -top-5 -right-5 w-2/3 h-2/3 rounded-3xl bg-[#D32F2F]/5" />

              <div className="relative rounded-3xl overflow-hidden aspect-[5/4] shadow-2xl shadow-slate-900/15">
                <Image
                  src="https://dbtechafrica.org/wp-content/uploads/2026/04/Empowering-Youth.png"
                  alt="Don Bosco TVET learners receiving mentorship"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a33]/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl shadow-xl border border-slate-100/80 px-5 py-4">
                <div className="text-4xl font-black text-[#D32F2F] leading-none tracking-tight">119</div>
                <div className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest leading-snug">
                  TVET Centres<br />Across Africa
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div
              className={`transition-all duration-700 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-black tracking-[0.2em] text-[#D32F2F] uppercase">
                <span className="w-8 h-px bg-[#D32F2F]" />
                Who We Are
              </span>
            </div>

            {/* Headline */}
            <h2
              className={`text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-slate-900 leading-[1.1] tracking-tight transition-all duration-700 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Empowering Africa&apos;s{' '}
              <span className="relative">
                <span className="relative z-10 text-[#003366]">Next Generation</span>
                <span
                  className="absolute bottom-1 left-0 right-0 h-3 bg-[#F5A623]/20 -skew-x-3 -z-0"
                  aria-hidden="true"
                />
              </span>{' '}
              of Technical Leaders
            </h2>

            {/* Body */}
            <p
              className={`text-lg text-slate-600 leading-relaxed font-normal max-w-[520px] transition-all duration-700 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Don Bosco Tech Africa coordinates the Salesian TVET network across Africa
              and Madagascar, supporting institutions that equip young people with practical
              skills, values, and opportunities for employment and entrepreneurship.
            </p>

            {/* Highlight list */}
            <ul className="space-y-3">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <li
                    key={i}
                    className={`flex items-center gap-4 transition-all duration-700 ease-out ${
                      visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                    }`}
                    style={{ transitionDelay: `${500 + i * 100}ms` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: h.bg }}
                    >
                      <Icon className="w-5 h-5" style={{ color: h.color }} />
                    </div>
                    <span className="text-base text-slate-700 font-medium">{h.label}</span>
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <div
              className={`pt-2 transition-all duration-700 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '850ms' }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#003366] hover:bg-[#002244] text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-[#003366]/25 hover:shadow-xl hover:shadow-[#003366]/30 hover:-translate-y-0.5"
              >
                <span>Learn about DBTA</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
