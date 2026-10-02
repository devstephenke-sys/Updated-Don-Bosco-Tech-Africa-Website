'use client';

import React from 'react';
import { networkStats } from '@/content';

export function StatsSection() {
  return (
    <section className="py-16 bg-white border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 divide-x divide-[#e5e7eb]">
          {networkStats.map((stat) => (
            <div
              key={stat.id}
              className="px-6 py-4 first:pl-0 last:pr-0 text-center first:text-left"
            >
              <div className="text-3xl font-black text-[#003366] tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs text-[#6b7280] mt-1.5 font-medium leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
