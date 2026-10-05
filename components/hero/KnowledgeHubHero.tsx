'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Search,
  BookOpen,
  Building2,
  Globe2,
  FileText,
  Briefcase,
  Layers,
  ArrowRight,
  Sparkles,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

const QUICK_TAGS = [
  { label: 'Green TVET & Solar PV', href: '/knowledge?topic=Renewable+Energy+%26+Green+TVET' },
  { label: 'Recognition of Prior Learning (RPL)', href: '/knowledge?topic=Recognition+of+Prior+Learning' },
  { label: 'AU TVET Strategy 2025–2034', href: '/knowledge?topic=Continental+TVET+Policy' },
  { label: 'Inserjeune Tracer Study', href: '/knowledge?topic=Youth+Employment+%26+Labor+Market' },
  { label: '119 Centres Directory', href: '/network' },
];

export function KnowledgeHubHero() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push('/knowledge');
    }
  };

  return (
    <section className="relative bg-[#001f3f] text-white overflow-hidden border-b border-[#003366]">
      {/* ── Background Technical Grid Texture ── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── Ambient Radial Brand Glow ── */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[350px] rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #38bdf8 0%, #003366 60%, transparent 80%)',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 md:pt-16 md:pb-20">
        {/* Top Eyebrow Pill */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#002b4d] border border-[#004080] text-blue-200 text-xs font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>CONTINENTAL TVET KNOWLEDGE PLATFORM · 35 NATIONS</span>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-slate-400">
            EST. 119 SALESIAN INSTITUTES
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl space-y-4 text-left">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            Continental TVET Knowledge Platform &{' '}
            <span className="text-[#38bdf8] bg-clip-text">
              Network Intelligence.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
            The central institutional repository coordinating <span className="text-white font-semibold">119 TVET centres</span> across sub-Saharan Africa. Access accredited vocational curricula, policy briefs, labour market tracer studies, and standardized didactic toolkits.
          </p>
        </div>

        {/* ── High-Utility Search & Discovery Bar ── */}
        <div className="mt-8 max-w-3xl">
          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row items-stretch bg-white rounded-2xl p-2 shadow-2xl shadow-[#001020]/80 border border-slate-200/40 gap-2"
          >
            <div className="relative flex-1 flex items-center pl-3">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search 2,500+ curricula, policy briefs, trade manuals, or TVET centres..."
                className="w-full px-3 py-3 text-slate-900 placeholder:text-slate-400 font-medium text-sm sm:text-base outline-none bg-transparent"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#003366] hover:bg-[#002244] text-white font-bold text-sm tracking-wide transition-all shadow-md shrink-0 cursor-pointer"
            >
              <span>Explore Hub</span>
              <ArrowRight className="w-4 h-4 text-[#F5A623]" />
            </button>
          </form>

          {/* Quick Filter Taxonomy Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-4 text-xs">
            <span className="text-slate-400 font-semibold uppercase tracking-wider text-[11px] mr-1">
              Trending Topics:
            </span>
            {QUICK_TAGS.map((tag, idx) => (
              <Link
                key={idx}
                href={tag.href}
                className="px-2.5 py-1 rounded-lg bg-[#002b4d]/80 hover:bg-[#003366] text-blue-200 hover:text-white border border-[#004080]/60 transition-colors font-medium text-xs flex items-center gap-1"
              >
                <span>{tag.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Continental Key Indicators Bar (High-Density Metric Strip) ── */}
        <div className="mt-12 pt-8 border-t border-[#003366]/80">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono leading-none">
                119
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1.5">
                TVET Centres
              </div>
              <div className="text-[11px] text-slate-400">Sub-Saharan Africa</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#F5A623] font-mono leading-none">
                35
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1.5">
                Countries & Island Hubs
              </div>
              <div className="text-[11px] text-slate-400">15 Salesian Provinces</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#38bdf8] font-mono leading-none">
                2,500+
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1.5">
                Curricula & Manuals
              </div>
              <div className="text-[11px] text-slate-400">In EN, FR & PT</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono leading-none">
                45,000+
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1.5">
                Annual Trainees
              </div>
              <div className="text-[11px] text-slate-400">Quality Technical Trades</div>
            </div>

            <div className="hidden lg:block">
              <div className="text-2xl sm:text-3xl font-black text-rose-400 font-mono leading-none">
                57%
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1.5">
                Employment Placement
              </div>
              <div className="text-[11px] text-slate-400">Inserjeune Tracer Study</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
