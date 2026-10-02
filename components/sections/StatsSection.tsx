'use client';

import React from 'react';
import { networkStats } from '@/content';
import { Award, Globe2, Users2, BookOpen, TrendingUp, HeartHandshake } from 'lucide-react';

const statIcons: Record<string, React.ReactNode> = {
  'tvet-centres': <Award className="w-6 h-6 text-blue-600" />,
  'countries': <Globe2 className="w-6 h-6 text-orange-500" />,
  'enrolled-students': <Users2 className="w-6 h-6 text-emerald-600" />,
  'courses-offered': <BookOpen className="w-6 h-6 text-indigo-600" />,
  'placement-rate': <TrendingUp className="w-6 h-6 text-amber-600" />,
  'staff-ratio': <HeartHandshake className="w-6 h-6 text-purple-600" />,
};

export function StatsSection() {
  return (
    <section className="relative -mt-10 md:-mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {networkStats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center ${
                idx > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-3 shadow-sm">
                {statIcons[stat.id] || <Award className="w-6 h-6 text-blue-600" />}
              </div>
              <p className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm font-bold text-slate-700 mt-1">
                {stat.label}
              </p>
              <p className="text-[11px] text-slate-400 mt-1 hidden xl:block line-clamp-2">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
