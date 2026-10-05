'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Building2,
  Globe2,
  Users2,
  Award,
  Sparkles,
  TrendingUp,
  FileText,
  Newspaper,
  Calendar,
  Layers,
  Scale,
  Wrench,
  BarChart3,
} from 'lucide-react';

export function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 text-xs xl:text-sm font-semibold text-slate-700">
      {/* 1. TVET Rankings (THE / QS Core Feature) */}
      <Link
        href="/rankings"
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-800 hover:text-[#003366] hover:bg-slate-100 transition-colors"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
        <span>Rankings</span>
      </Link>

      {/* 2. Institutions Directory */}
      <Link
        href="/institutions"
        className="px-3 py-2 rounded-lg text-slate-800 hover:text-[#003366] hover:bg-slate-100 transition-colors"
      >
        Institutions
      </Link>

      {/* 3. Trades & Disciplines */}
      <Link
        href="/trades"
        className="px-3 py-2 rounded-lg text-slate-800 hover:text-[#003366] hover:bg-slate-100 transition-colors"
      >
        Trades
      </Link>

      {/* 4. Provinces & Network */}
      <Link
        href="/network"
        className="px-3 py-2 rounded-lg text-slate-800 hover:text-[#003366] hover:bg-slate-100 transition-colors"
      >
        Network
      </Link>

      {/* 5. Compare Tool */}
      <Link
        href="/compare"
        className="flex items-center gap-1 px-3 py-2 rounded-lg text-slate-800 hover:text-[#003366] hover:bg-slate-100 transition-colors"
      >
        <Scale className="w-3.5 h-3.5 text-amber-600" />
        <span>Compare</span>
      </Link>

      {/* 6. Research & Knowledge */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu('research')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          className="flex items-center gap-1 px-3 py-2 rounded-lg text-slate-800 hover:text-[#003366] hover:bg-slate-100 transition-colors cursor-pointer"
          aria-expanded={activeMenu === 'research'}
        >
          <span>Research</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button>

        {activeMenu === 'research' && (
          <div className="absolute top-full left-0 w-[360px] bg-white rounded-xl shadow-xl border border-slate-100 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="space-y-1 text-xs">
              <Link
                href="/knowledge"
                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <FileText className="w-4 h-4 text-[#003366] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800 group-hover:text-[#003366]">Tracer Studies & Policy Briefs</p>
                  <p className="text-slate-500 text-[11px]">Audited employment & labor market reports</p>
                </div>
              </Link>
              <Link
                href="/projects"
                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <Layers className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800 group-hover:text-[#003366]">Continental Projects</p>
                  <p className="text-slate-500 text-[11px]">Green TVET, Modern Agribusiness & RPL</p>
                </div>
              </Link>
              <Link
                href="/stories"
                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <Sparkles className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800 group-hover:text-[#003366]">Graduate Impact Stories</p>
                  <p className="text-slate-500 text-[11px]">Youth success across 35 African nations</p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* 7. About DBTA */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu('about')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          className="flex items-center gap-1 px-3 py-2 rounded-lg text-slate-800 hover:text-[#003366] hover:bg-slate-100 transition-colors cursor-pointer"
          aria-expanded={activeMenu === 'about'}
        >
          <span>About</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button>

        {activeMenu === 'about' && (
          <div className="absolute top-full right-0 w-[360px] bg-white rounded-xl shadow-xl border border-slate-100 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="space-y-1 text-xs">
              <Link
                href="/about"
                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <Building2 className="w-4 h-4 text-[#003366] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800 group-hover:text-[#003366]">Who We Are</p>
                  <p className="text-slate-500 text-[11px]">Continental Salesian coordinating body</p>
                </div>
              </Link>
              <Link
                href="/about/board"
                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <Users2 className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800 group-hover:text-[#003366]">Board & Governance</p>
                  <p className="text-slate-500 text-[11px]">Executive governance & Secretariat</p>
                </div>
              </Link>
              <Link
                href="/news"
                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <Newspaper className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800 group-hover:text-[#003366]">News & Updates</p>
                  <p className="text-slate-500 text-[11px]">Official press releases & assemblies</p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
