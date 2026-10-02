'use client';

import React, { useEffect, useRef, useState } from 'react';

const verifiedStats = [
  { value: 119, suffix: '', label: 'TVET Centres', color: '#003366' },
  { value: 35, suffix: '', label: 'Countries & Madagascar', color: '#D32F2F' },
  { value: 15, suffix: '', label: 'Salesian Provinces', color: '#003366' },
  { value: 45, suffix: 'K+', label: 'Youth Reached Yearly', color: '#D32F2F' },
  { value: 57, suffix: '%', label: 'Employment Rate', color: '#003366' },
];

function useCountUp(target: number, duration = 1600, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatItem({ stat, index, active }: { stat: typeof verifiedStats[0]; index: number; active: boolean }) {
  const count = useCountUp(stat.value, 1400 + index * 100, active);
  return (
    <div
      className={`px-2 text-center reveal reveal-delay-${index + 1}`}
    >
      <div
        className="text-[40px] sm:text-[44px] lg:text-[52px] font-extrabold tracking-tight leading-none tabular-nums"
        style={{ color: stat.color }}
      >
        {active ? count : 0}{stat.suffix}
      </div>
      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-3 leading-tight">
        {stat.label}
      </div>
    </div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 md:py-20 bg-[#003366] relative overflow-hidden"
      aria-label="DBTA Key Statistics"
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <p className="text-center text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-10">
          Our Reach in Numbers
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-6">
          {verifiedStats.map((stat, idx) => (
            <StatItem key={idx} stat={{ ...stat, color: '#ffffff' }} index={idx} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
