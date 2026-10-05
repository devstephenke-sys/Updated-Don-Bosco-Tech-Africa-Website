'use client';

import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, MapPin, Building2, Users, TrendingUp } from 'lucide-react';

const STATS = [
  {
    value: 119, suffix: '', label: 'TVET Centres', sub: 'Across Sub-Saharan Africa',
    icon: Building2, color: '#F5A623',
  },
  {
    value: 35, suffix: '', label: 'Countries', sub: '& Madagascar',
    icon: MapPin, color: '#60A5FA',
  },
  {
    value: 15, suffix: '', label: 'Salesian Provinces', sub: 'Continental governance',
    icon: GraduationCap, color: '#34D399',
  },
  {
    value: 45, suffix: 'K+', label: 'Youth Annually', sub: 'Empowered with skills',
    icon: Users, color: '#F87171',
  },
  {
    value: 57, suffix: '%', label: 'Employment Rate', sub: 'Graduate placement',
    icon: TrendingUp, color: '#A78BFA',
  },
];

function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  const frame = useRef(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const prog = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - prog, 3); // ease-out cubic
      setCount(Math.round(ease * target));
      if (prog < 1) frame.current = requestAnimationFrame(step);
    };
    frame.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame.current);
  }, [target, duration, active]);

  return count;
}

function StatCard({
  stat,
  index,
  active,
  visible,
}: {
  stat: (typeof STATS)[0];
  index: number;
  active: boolean;
  visible: boolean;
}) {
  const count = useCountUp(stat.value, 1600 + index * 150, active);
  const Icon = stat.icon;

  return (
    <div
      className={`group relative flex flex-col items-center text-center transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${stat.color}18`, border: `1px solid ${stat.color}30` }}
      >
        <Icon className="w-6 h-6" style={{ color: stat.color }} />
      </div>

      {/* Number */}
      <div
        className="text-[52px] sm:text-[64px] lg:text-[72px] font-black leading-none tracking-tighter tabular-nums"
        style={{ color: stat.color }}
      >
        {active ? count : 0}
        {stat.suffix}
      </div>

      {/* Label */}
      <div className="mt-3 text-base sm:text-lg font-bold text-white leading-tight">
        {stat.label}
      </div>
      <div className="mt-1 text-xs sm:text-sm text-white/40 font-medium">
        {stat.sub}
      </div>

      {/* Divider line (not on last) */}
      {index < STATS.length - 1 && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-white/10 hidden lg:block" />
      )}
    </div>
  );
}

export function StatsFullSection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          setTimeout(() => setActive(true), 400);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="our-numbers"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#001a33]" />

      {/* Radial glow centres */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,51,102,0.8) 0%, transparent 70%)',
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Ghost text */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 text-[280px] font-black text-white/[0.02] leading-none select-none pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        02
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 w-full py-20">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
          }`}
        >
          <span className="inline-flex items-center gap-3 text-xs font-black tracking-[0.25em] text-white/40 uppercase mb-4">
            <span className="w-8 h-px bg-white/20" />
            Our Reach in Numbers
            <span className="w-8 h-px bg-white/20" />
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-tight tracking-tight">
            A Continental{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F5A623, #D32F2F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Force
            </span>{' '}
            for TVET
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} active={active} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
