'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';

export function ImpactSection() {
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
      id="impact-story"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Split background */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-1/2 bg-[#001a33]" />
        <div className="hidden lg:block w-1/2 bg-slate-50" />
      </div>

      {/* Ghost number */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[280px] font-black text-white/[0.025] leading-none select-none pointer-events-none hidden lg:block" aria-hidden="true">
        06
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-center">

          {/* Left: Quote block */}
          <div
            className={`py-10 lg:py-0 lg:pr-16 space-y-8 transition-all duration-1000 ease-out ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-black tracking-[0.2em] text-[#F5A623] uppercase mb-6 block">
                <span className="w-8 h-px bg-[#F5A623]" />
                From Training to Opportunity
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.15] tracking-tight">
                Real Outcomes,{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #F5A623, #D32F2F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Dignified Lives
                </span>
              </h2>
            </div>

            {/* Blockquote */}
            <div className="relative">
              <Quote
                className="absolute -top-2 -left-1 w-10 h-10 text-[#F5A623]/30 fill-[#F5A623]/20"
                aria-hidden="true"
              />
              <blockquote className="pl-6 border-l-2 border-[#F5A623]/40">
                <p className="text-xl sm:text-2xl text-white/90 font-light leading-relaxed italic">
                  &ldquo;Don Bosco didn&apos;t just teach me how to connect solar panels—they gave
                  me the confidence, technical rigor, and values to run an ethical business that
                  brings light to my own community.&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Attribution */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#F5A623]/20 border-2 border-[#F5A623]/40 flex items-center justify-center text-[#F5A623] text-lg font-black">
                E
              </div>
              <div>
                <div className="font-bold text-white text-base">Esther Mwangi</div>
                <div className="text-sm text-white/50 leading-snug">
                  Certified Solar PV Installer & Entrepreneur<br />
                  Don Bosco Boys Town Karen, Kenya
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/stories/esther-solar-technician-kenya"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F5A623] hover:bg-[#e0941f] text-white font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#F5A623]/25"
              >
                <span>Read Esther&apos;s Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/stories"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold text-sm transition-all duration-300"
              >
                <span>View all impact stories</span>
              </Link>
            </div>
          </div>

          {/* Right: Outcome card */}
          <div
            className={`py-10 lg:py-0 lg:pl-8 transition-all duration-1000 ease-out ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '250ms' }}
          >
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 overflow-hidden border border-slate-100">
              {/* Image */}
              <div className="relative aspect-[16/10] bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://dbtechafrica.org/wp-content/uploads/2026/04/Hands-On-Technical-Training.png"
                  alt="Esther Mwangi – Solar PV installer and entrepreneur"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a33]/50 via-transparent to-transparent" />

                {/* Outcome tag */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/60">
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#2D7D46] mb-1">
                      Post-graduation outcome
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      Founded clean energy venture — 120+ households served,{' '}
                      <span className="text-[#2D7D46]">3 alumni employed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 divide-x divide-slate-100 p-0">
                {[
                  { val: '120+', label: 'Households Served' },
                  { val: '3', label: 'Alumni Hired' },
                  { val: '2yrs', label: 'Since Graduation' },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col items-center py-5 px-3">
                    <div className="text-2xl font-black text-[#003366]">{s.val}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1 text-center leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
