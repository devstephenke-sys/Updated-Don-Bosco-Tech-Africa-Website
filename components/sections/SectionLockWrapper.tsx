'use client';

import React from 'react';
import { Lock, CheckCircle2 } from 'lucide-react';
import { useSectionLock, SECTIONS_META } from '@/context/SectionLockContext';
import { LockedSectionGate } from './LockedSectionGate';

interface SectionLockWrapperProps {
  id: string;
  children: React.ReactNode;
}

export function SectionLockWrapper({ id, children }: SectionLockWrapperProps) {
  const { isUnlocked, unlockSection, lockSection } = useSectionLock();
  const unlocked = isUnlocked(id);
  const meta = SECTIONS_META[id];

  if (!unlocked) {
    return <LockedSectionGate id={id} onUnlock={() => unlockSection(id, true)} />;
  }

  return (
    <div className="relative group/section transition-all duration-500">
      {/* ── Discreet Top Section Status & Lock Action Bar ── */}
      <div className="bg-[#001833] text-white py-1.5 px-6 border-b border-[#003366]/40 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[#38bdf8] font-bold">SECTION {meta?.number || ''}</span>
          <span className="text-slate-400 hidden sm:inline">•</span>
          <span className="text-slate-300 font-sans font-medium hidden sm:inline">
            {meta?.label || ''}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-sans font-semibold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30 ml-1">
            <CheckCircle2 className="w-2.5 h-2.5" />
            Unlocked
          </span>
        </div>

        <button
          onClick={() => lockSection(id)}
          title={`Lock ${meta?.label || 'section'}`}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold text-slate-300 hover:text-white bg-[#002244] hover:bg-[#003366] border border-[#004080]/60 transition-colors cursor-pointer"
        >
          <Lock className="w-3 h-3 text-[#F5A623]" />
          <span>Lock section</span>
        </button>
      </div>

      {/* ── Unlocked Rich Section Content ── */}
      <div className="animate-in fade-in slide-in-from-top-2 duration-500">
        {children}
      </div>
    </div>
  );
}
