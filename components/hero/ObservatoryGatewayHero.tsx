'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Award, ShieldCheck, ChevronRight, Globe2, Building2, TrendingUp, Sparkles } from 'lucide-react';

export const ObservatoryGatewayHero: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/institutions?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/institutions');
    }
  };

  return (
    <div className="relative bg-[#061830] text-white pt-16 pb-20 overflow-hidden border-b border-slate-800">
      {/* Background Subtle Gradient & Grid */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Institutional Authority Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Pan-African TVET Institutional Observatory & Knowledge Platform
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Continental Intelligence on <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-amber-300">
              Technical & Vocational Excellence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The central coordinating body benchmarked across <strong>119 TVET institutions</strong>, <strong>35 African nations</strong>, and <strong>15 Salesian Provinces</strong>. Discover verified graduate employment data, accredited trades, and centers of excellence.
          </p>

          {/* ── Universal Search Terminal ── */}
          <div className="mt-8 max-w-2xl mx-auto">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <div className="relative w-full flex items-center shadow-2xl rounded-xl overflow-hidden border border-slate-700 bg-white/95 backdrop-blur-md">
                <Search className="absolute left-4 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search 119 TVET centres, countries, trades (e.g. Solar PV, Kenya, Kigali)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-32 py-4 text-slate-900 placeholder:text-slate-500 text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-2 px-5 py-2.5 bg-[#003366] hover:bg-[#002244] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Explore</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* Quick Discovery Tags */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-500">Popular:</span>
              <Link href="/rankings" className="hover:text-amber-400 underline underline-offset-2 transition-colors">
                2024/2025 Rankings
              </Link>
              <span>•</span>
              <Link href="/trades" className="hover:text-blue-300 underline underline-offset-2 transition-colors">
                Solar PV Microgrids
              </Link>
              <span>•</span>
              <Link href="/institutions" className="hover:text-emerald-300 underline underline-offset-2 transition-colors">
                Centres of Excellence
              </Link>
              <span>•</span>
              <Link href="/compare" className="hover:text-purple-300 underline underline-offset-2 transition-colors">
                Benchmark Comparator
              </Link>
            </div>
          </div>
        </div>

        {/* ── Key Continental Indicators (4-Metric Ticker) ── */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-900/70 border border-slate-800 p-5 rounded-xl text-center backdrop-blur-xs">
            <div className="text-3xl sm:text-4xl font-mono font-extrabold text-amber-400">119</div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1">TVET Institutions</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Accredited campuses</div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 p-5 rounded-xl text-center backdrop-blur-xs">
            <div className="text-3xl sm:text-4xl font-mono font-extrabold text-white">35</div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1">African Countries</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Continental presence</div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 p-5 rounded-xl text-center backdrop-blur-xs">
            <div className="text-3xl sm:text-4xl font-mono font-extrabold text-blue-400">15</div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1">Salesian Provinces</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Regional coordination</div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 p-5 rounded-xl text-center backdrop-blur-xs">
            <div className="text-3xl sm:text-4xl font-mono font-extrabold text-emerald-400">45K+</div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1">Youth Enrolled</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Annual training capacity</div>
          </div>
        </div>
      </div>
    </div>
  );
};
