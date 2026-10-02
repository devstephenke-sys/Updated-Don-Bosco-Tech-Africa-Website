'use client';

import React from 'react';

const verifiedStats = [
  { value: '119', label: 'TVET Centres' },
  { value: '35', label: 'Countries & Madagascar' },
  { value: '15', label: 'Salesian Provinces' },
  { value: '45,000+', label: 'Youth Reached Yearly' },
  { value: '57%', label: 'Employment Rate' },
];

export function StatsSection() {
  return (
    <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-200/70">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
          {verifiedStats.map((stat, idx) => (
            <div key={idx} className={`${idx !== 0 ? 'pt-6 sm:pt-0' : ''} px-2`}>
              <div className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-none">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-2.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

