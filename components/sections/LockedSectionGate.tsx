'use client';

import React from 'react';
import { Lock, Unlock, ArrowRight, Sparkles } from 'lucide-react';
import { SECTIONS_META } from '@/context/SectionLockContext';

interface LockedSectionGateProps {
  id: string;
  onUnlock: () => void;
}

export function LockedSectionGate({ id, onUnlock }: LockedSectionGateProps) {
  const meta = SECTIONS_META[id] || {
    id,
    number: '00',
    label: 'Section',
    subtitle: 'Institutional Overview',
    summary: 'Click to unlock this section and explore full contents.',
    tags: [],
  };

  return (
    <div
      id={id}
      className="relative w-full py-16 md:py-24 bg-gradient-to-br from-[#001428] via-[#002244] to-[#003366] text-white overflow-hidden transition-all duration-500 border-b border-[#003366]/40"
    >
      {/* ── Top Don Bosco Tri-Color Ribbon ── */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003366] via-[#D32F2F] to-[#F5A623]" />

      {/* ── Ambient Radial Lighting ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* ── Background Subtle Architectural Grid ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── Giant Ghost Section Number ── */}
      <span
        aria-hidden="true"
        className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 text-[120px] md:text-[220px] font-black text-white/[0.03] select-none pointer-events-none tracking-tighter"
      >
        {meta.number}
      </span>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-white/[0.04] backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl shadow-[#001428]/60 hover:border-[#38bdf8]/30 transition-all duration-300">
          {/* Left: Lock Emblem & Information */}
          <div className="flex-1 space-y-4">
            {/* Header pill: Locked status */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#001a33]/80 border border-[#F5A623]/40 text-[#F5A623] text-xs font-bold uppercase tracking-wider shadow-inner">
              <Lock className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>Section {meta.number} • Locked</span>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                <span>{meta.label}</span>
                <span className="text-sm font-semibold text-slate-400 font-mono hidden sm:inline">
                  [{meta.number}]
                </span>
              </h3>
              <p className="text-sm md:text-base text-blue-100/80 font-medium mt-1">
                {meta.subtitle}
              </p>
            </div>

            {/* Brief summary */}
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {meta.summary}
            </p>

            {/* Preview tags */}
            {meta.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {meta.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#002244]/80 text-blue-200 border border-[#004080]/60"
                  >
                    <Sparkles className="w-2.5 h-2.5 text-[#38bdf8]" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Right: Unlock Button CTA */}
          <div className="flex flex-col sm:flex-row md:flex-col items-center gap-3 w-full md:w-auto">
            <button
              onClick={onUnlock}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#003366] via-[#0055A5] to-[#0284c7] hover:from-[#004080] hover:to-[#0369a1] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#003366]/60 hover:shadow-[#0284c7]/40 ring-1 ring-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <Unlock className="w-4 h-4 text-[#F5A623]" />
              <span>Unlock Section</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-[11px] text-slate-400 font-medium text-center">
              Or click quick link on the right
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
