'use client';

import React, { useState, useEffect } from 'react';
import {
  Home,
  Users,
  BarChart3,
  Globe,
  Layers,
  FolderOpen,
  Heart,
  Newspaper,
  Handshake,
  Lock,
  Unlock,
  Sparkles,
  ChevronRight,
  Shield,
  Layers as LayersIcon,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useSectionLock, SECTIONS_META } from '@/context/SectionLockContext';

const NAV_ITEMS = [
  { id: 'landing-hero', number: '00', label: 'Home', icon: Home, isHero: true },
  { id: 'who-we-are', number: '01', label: 'Who We Are', icon: Users },
  { id: 'our-numbers', number: '02', label: 'Our Numbers', icon: BarChart3 },
  { id: 'network-overview', number: '03', label: 'Our Network', icon: Globe },
  { id: 'thematic-streams', number: '04', label: 'What We Do', icon: Layers },
  { id: 'featured-programmes', number: '05', label: 'Programmes', icon: FolderOpen },
  { id: 'impact-story', number: '06', label: 'Impact Story', icon: Heart },
  { id: 'insights-updates', number: '07', label: 'Insights & News', icon: Newspaper },
  { id: 'partners-section', number: '08', label: 'Our Partners', icon: Handshake },
];

export function FloatingQuickNav() {
  const {
    isUnlocked,
    unlockSection,
    lockSection,
    toggleSection,
    unlockAll,
    lockAll,
    navigateToSection,
    activeId,
    setActiveId,
    unlockedCount,
    totalSections,
  } = useSectionLock();

  const [minimized, setMinimized] = useState(false);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.35, rootMargin: '-15% 0px -15% 0px' }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveId]);

  const allUnlocked = unlockedCount === totalSections;

  return (
    <aside
      aria-label="Don Bosco Quick Navigation & Section Locks"
      className="fixed right-3 md:right-5 top-1/2 -translate-y-1/2 z-50 transition-all duration-300"
    >
      {/* ── Minimized Trigger (When collapsed) ── */}
      {minimized ? (
        <button
          onClick={() => setMinimized(false)}
          className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-[#001833]/95 text-white border border-[#004080] shadow-2xl shadow-[#001428]/80 hover:bg-[#002244] hover:scale-105 transition-all cursor-pointer group"
          title="Expand Quick Links Dock"
          aria-label="Expand Quick Links Dock"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#003366] to-[#0055A5] flex items-center justify-center text-white shadow-md">
            <Shield className="w-4 h-4 text-[#F5A623]" />
          </div>
          <span className="text-[10px] font-mono font-bold text-[#38bdf8]">
            {unlockedCount}/{totalSections}
          </span>
          <Maximize2 className="w-3 h-3 text-slate-400 group-hover:text-white" />
        </button>
      ) : (
        /* ── Full Don Bosco Blue Dock ── */
        <div className="flex flex-col items-center bg-[#001833]/95 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl shadow-[#001428]/90 border border-[#003366] p-2 md:p-2.5 space-y-2 ring-1 ring-[#0055A5]/30">
          {/* Top Brand Ribbon Accent */}
          <div className="w-full h-1 rounded-full bg-gradient-to-r from-[#003366] via-[#D32F2F] to-[#F5A623] -mt-1 mb-1" />

          {/* Dock Header: DBTA Branding & Master Unlock Switch */}
          <div className="w-full flex items-center justify-between gap-2 px-1 pb-1.5 border-b border-[#003366]/60">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-200">
                DBTA NAV
              </span>
            </div>

            {/* Unlocked counter pill */}
            <span
              className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-[#002244] text-[#F5A623] border border-[#004080]"
              title={`${unlockedCount} of ${totalSections} sections unlocked`}
            >
              {unlockedCount}/{totalSections}
            </span>

            {/* Minimize button */}
            <button
              onClick={() => setMinimized(true)}
              className="text-slate-400 hover:text-white p-0.5 rounded hover:bg-[#002244] transition-colors"
              title="Minimize dock"
              aria-label="Minimize dock"
            >
              <Minimize2 className="w-3 h-3" />
            </button>
          </div>

          {/* Master Unlock / Lock All Quick Action */}
          <button
            onClick={allUnlocked ? lockAll : unlockAll}
            className={`w-full py-1 px-2 rounded-lg text-[10px] font-bold tracking-tight transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer ${
              allUnlocked
                ? 'bg-[#002244] text-[#F5A623] hover:bg-[#003366] border border-[#F5A623]/30'
                : 'bg-gradient-to-r from-[#003366] to-[#0055A5] text-white hover:from-[#004080] hover:to-[#0284c7] border border-[#38bdf8]/30 shadow-sm'
            }`}
            title={allUnlocked ? 'Lock all sections' : 'Unlock all sections'}
          >
            {allUnlocked ? (
              <>
                <Lock className="w-2.5 h-2.5 text-[#F5A623]" />
                <span>Lock All</span>
              </>
            ) : (
              <>
                <Unlock className="w-2.5 h-2.5 text-[#38bdf8]" />
                <span>Unlock All</span>
              </>
            )}
          </button>

          {/* Section Items List */}
          <div className="flex flex-col items-center gap-1.5">
            {NAV_ITEMS.map(({ id, number, label, icon: Icon, isHero }) => {
              const unlocked = isHero || isUnlocked(id);
              const isActive = activeId === id;

              return (
                <div key={id} className="relative group/navitem flex items-center">
                  {/* Floating Detailed Tooltip (Left Side) */}
                  <div className="absolute right-full mr-3.5 opacity-0 pointer-events-none group-hover/navitem:opacity-100 group-hover/navitem:pointer-events-auto transition-all duration-200 translate-x-1 group-hover/navitem:translate-x-0 z-50">
                    <div className="bg-[#001428] text-white p-3 rounded-2xl border border-[#004080] shadow-2xl shadow-black/80 w-56 text-left space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#38bdf8]">
                          SECTION {number}
                        </span>
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-1 ${
                            unlocked
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                              : 'bg-amber-950/80 text-amber-300 border border-amber-500/30'
                          }`}
                        >
                          {unlocked ? (
                            <>
                              <Unlock className="w-2 h-2" />
                              Unlocked
                            </>
                          ) : (
                            <>
                              <Lock className="w-2 h-2" />
                              Locked
                            </>
                          )}
                        </span>
                      </div>
                      <p className="font-bold text-xs text-white leading-tight">{label}</p>
                      {!isHero && (
                        <p className="text-[10px] text-slate-300">
                          {unlocked
                            ? 'Click to navigate or toggle lock'
                            : 'Click to unlock and reveal section'}
                        </p>
                      )}
                      <div className="pt-1 flex items-center gap-1 text-[9px] text-[#F5A623] font-semibold">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>{unlocked ? 'Quick jump' : 'Instant unlock'}</span>
                      </div>
                    </div>
                    {/* Tooltip Arrow */}
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-4 border-transparent border-l-[#001428]" />
                  </div>

                  {/* Main Nav Button */}
                  <button
                    onClick={() => navigateToSection(id)}
                    aria-label={`Navigate to ${label}`}
                    className={`relative w-8 h-8 md:w-9 md:h-9 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-br from-[#003366] via-[#0055A5] to-[#0284c7] text-white shadow-lg shadow-[#003366]/80 ring-2 ring-[#38bdf8] scale-110'
                        : unlocked
                        ? 'bg-[#002244] text-blue-100 hover:bg-[#003366] hover:text-white border border-[#004080]/60'
                        : 'bg-[#001833] text-slate-400 hover:text-white hover:bg-[#002244] border border-[#003366]/40 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />

                    {/* Corner Lock / Unlock Status Glyph */}
                    {!isHero && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSection(id, true);
                        }}
                        title={unlocked ? 'Lock section' : 'Unlock section'}
                        className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] transition-transform duration-200 hover:scale-125 ${
                          unlocked
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'bg-amber-600 text-white shadow-sm'
                        }`}
                      >
                        {unlocked ? (
                          <Unlock className="w-2 h-2" />
                        ) : (
                          <Lock className="w-2 h-2" />
                        )}
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Bottom Don Bosco Tri-Color Ribbon */}
          <div className="w-full h-0.5 rounded-full bg-gradient-to-r from-[#F5A623] via-[#D32F2F] to-[#003366] mt-1" />
        </div>
      )}
    </aside>
  );
}
