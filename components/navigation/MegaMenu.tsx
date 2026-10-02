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
} from 'lucide-react';

export function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
      {/* 1. About */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu('about')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-[#003366] px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-expanded={activeMenu === 'about'}
        >
          <span>About</span>
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#003366] transition-transform duration-200" />
        </button>

        {activeMenu === 'about' && (
          <div className="absolute top-full left-0 w-[420px] bg-white rounded-2xl shadow-xl border border-slate-100 p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              <Link
                href="/about"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <Building2 className="w-5 h-5 text-[#003366] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-[#003366]">Who We Are</p>
                  <p className="text-xs text-slate-500">Continental Salesian TVET coordinating body</p>
                </div>
              </Link>
              <Link
                href="/about/board"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <Users2 className="w-5 h-5 text-slate-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-[#003366]">Board & Governance</p>
                  <p className="text-xs text-slate-500">Board of Directors & executive oversight</p>
                </div>
              </Link>
              <Link
                href="/about/p-tvet-network"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <Globe2 className="w-5 h-5 text-slate-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-[#003366]">P-TVET Offices</p>
                  <p className="text-xs text-slate-500">15 Provincial Coordinators across Africa</p>
                </div>
              </Link>
              <Link
                href="/about/history"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <Award className="w-5 h-5 text-slate-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-[#003366]">Our History & Heritage</p>
                  <p className="text-xs text-slate-500">Salesian legacy & TVET modernization</p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* 2. What We Do */}
      <Link
        href="/what-we-do"
        className="text-sm font-semibold text-slate-700 hover:text-[#003366] px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
      >
        What We Do
      </Link>

      {/* 3. Our Network */}
      <Link
        href="/network"
        className="text-sm font-semibold text-slate-700 hover:text-[#003366] px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
      >
        Our Network
      </Link>

      {/* 4. Our Work */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu('work')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-[#003366] px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-expanded={activeMenu === 'work'}
        >
          <span>Our Work</span>
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#003366] transition-transform duration-200" />
        </button>

        {activeMenu === 'work' && (
          <div className="absolute top-full left-0 w-[380px] bg-white rounded-2xl shadow-xl border border-slate-100 p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              <Link
                href="/projects"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <Layers className="w-5 h-5 text-[#003366] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-[#003366]">Flagship Projects</p>
                  <p className="text-xs text-slate-500">Green TVET, Agriculture, and JSO programs</p>
                </div>
              </Link>
              <Link
                href="/stories"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <Sparkles className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-[#003366]">Impact Stories</p>
                  <p className="text-xs text-slate-500">Real outcomes from trainees and artisans</p>
                </div>
              </Link>
              <Link
                href="/impact"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <TrendingUp className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-[#003366]">Impact Indicators</p>
                  <p className="text-xs text-slate-500">Continental benchmarks & tracer metrics</p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* 5. Knowledge */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu('knowledge')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-[#003366] px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-expanded={activeMenu === 'knowledge'}
        >
          <span>Knowledge</span>
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#003366] transition-transform duration-200" />
        </button>

        {activeMenu === 'knowledge' && (
          <div className="absolute top-full left-0 w-[380px] bg-white rounded-2xl shadow-xl border border-slate-100 p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              <Link
                href="/knowledge"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <FileText className="w-5 h-5 text-[#003366] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-[#003366]">Publications & Research</p>
                  <p className="text-xs text-slate-500">Policy briefs, manuals, and toolkits</p>
                </div>
              </Link>
              <Link
                href="/digital-services"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <Globe2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-[#003366]">Digital Services</p>
                  <p className="text-xs text-slate-500">DBTVET, Digital Library, and Inserjeune</p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* 6. News & Media */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu('news')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-[#003366] px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-expanded={activeMenu === 'news'}
        >
          <span>News & Media</span>
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#003366] transition-transform duration-200" />
        </button>

        {activeMenu === 'news' && (
          <div className="absolute top-full right-0 w-[360px] bg-white rounded-2xl shadow-xl border border-slate-100 p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              <Link
                href="/news"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <Newspaper className="w-5 h-5 text-[#003366] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-[#003366]">Latest News</p>
                  <p className="text-xs text-slate-500">Official continental updates & milestones</p>
                </div>
              </Link>
              <Link
                href="/events"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <Calendar className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-[#003366]">Events & Assemblies</p>
                  <p className="text-xs text-slate-500">Upcoming gatherings & conferences</p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
