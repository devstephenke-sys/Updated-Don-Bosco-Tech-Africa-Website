'use client';

import React from 'react';
import { networkStats } from '@/content';

export function StatsSection() {
  return (
    <section className="py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {networkStats.map((stat) => (
            <div
              key={stat.id}
              className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-center items-center"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-[#003366] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-700 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
