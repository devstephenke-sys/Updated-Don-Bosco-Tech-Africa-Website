'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Sparkles, ChevronRight } from 'lucide-react';

const REGIONS = [
  {
    id: 'eastern', name: 'Eastern Africa', provinces: 'AFE, AET, TZA', centres: 34,
    color: '#003366', accent: '#60A5FA',
    countries: ['Kenya', 'Uganda', 'Tanzania', 'Ethiopia', 'Rwanda', 'Burundi', 'South Sudan', 'Sudan'],
    highlight: 'Hub for Solar PV & Green TVET masterclasses',
  },
  {
    id: 'western', name: 'Western Africa', provinces: 'AOS, AON, ANN, ATE', centres: 38,
    color: '#2D7D46', accent: '#34D399',
    countries: ['Ghana', 'Nigeria', 'Sierra Leone', 'Liberia', 'Senegal', 'Mali', 'Guinea', "Côte d'Ivoire", 'Burkina Faso', 'Togo', 'Benin'],
    highlight: 'Pioneering Recognition of Prior Learning (RPL)',
  },
  {
    id: 'central', name: 'Central Africa', provinces: 'AFC, ACC, AGL', centres: 22,
    color: '#7B5EA7', accent: '#A78BFA',
    countries: ['DR Congo', 'Cameroon', 'Congo', 'Gabon', 'Central African Republic', 'Chad', 'Equatorial Guinea'],
    highlight: 'Youth resilience & modernized trade workshops',
  },
  {
    id: 'southern', name: 'Southern Africa', provinces: 'AFM, ZMB, MOZ', centres: 19,
    color: '#C07D14', accent: '#F5A623',
    countries: ['South Africa', 'Zambia', 'Zimbabwe', 'Malawi', 'Mozambique', 'Eswatini', 'Lesotho', 'Namibia'],
    highlight: 'Advanced Job Service Offices & digital tracer tracking',
  },
  {
    id: 'madagascar', name: 'Madagascar & Islands', provinces: 'MDG', centres: 6,
    color: '#D32F2F', accent: '#F87171',
    countries: ['Madagascar', 'Mauritius'],
    highlight: 'Sustainable agriculture & artisan craft programs',
  },
];

export function NetworkSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState('eastern');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const activeBloc = REGIONS.find((r) => r.id === selected) || REGIONS[0];

  return (
    <section
      ref={ref}
      id="network-overview"
      className="relative min-h-screen flex items-center bg-slate-50 overflow-hidden"
    >
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2D7D46] via-[#003366] to-[#7B5EA7]" />

      {/* Ghost number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[280px] font-black text-slate-900/[0.025] leading-none select-none pointer-events-none hidden lg:block" aria-hidden="true">
        03
      </div>

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Map + Inspector */}
          <div
            className={`lg:col-span-5 space-y-5 transition-all duration-1000 ease-out ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* Map image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border border-slate-200/80">
              <Image
                src="https://dbtechafrica.org/wp-content/uploads/2026/04/Pan-African-Network.png"
                alt="Don Bosco Tech Africa Pan-African Network"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/60 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-black text-slate-800 tracking-wider uppercase">35 African Nations</span>
              </div>
            </div>

            {/* Region Inspector */}
            <div
              className="rounded-3xl border p-6 space-y-4 transition-all duration-500 bg-white shadow-lg"
              style={{ borderColor: `${activeBloc.color}25` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${activeBloc.color}12` }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: activeBloc.color }} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{activeBloc.name}</h4>
                    <p className="text-xs text-slate-400 font-medium">Provinces: {activeBloc.provinces}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black" style={{ color: activeBloc.color }}>
                    {activeBloc.centres}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Centres</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {activeBloc.countries.map((c, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-semibold"
                    style={{ backgroundColor: `${activeBloc.color}08`, color: activeBloc.color }}
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div
                className="flex items-center gap-2 p-3 rounded-xl text-xs font-medium"
                style={{ backgroundColor: `${activeBloc.color}08` }}
              >
                <Sparkles className="w-3.5 h-3.5 shrink-0" style={{ color: activeBloc.color }} />
                <span style={{ color: activeBloc.color }}>{activeBloc.highlight}</span>
              </div>
            </div>
          </div>

          {/* Right: Text + Region Selector */}
          <div
            className={`lg:col-span-7 space-y-8 transition-all duration-1000 ease-out ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-black tracking-[0.2em] text-[#D32F2F] uppercase mb-5 block">
                <span className="w-8 h-px bg-[#D32F2F]" />
                Our Network
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Spanning{' '}
                <span className="text-[#003366]">35 Countries</span>{' '}
                Across Africa & Madagascar
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-[520px]">
                Our 119 centres operate under 15 Salesian Provinces across five dynamic regional
                blocs. Each centre responds directly to local economic demand while benefiting
                from continental standards, modernized curricula, and instructor training.
              </p>
            </div>

            {/* Region selector */}
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
                Select a Region to Inspect
              </p>
              <div className="space-y-2">
                {REGIONS.map((r) => {
                  const isSelected = r.id === selected;
                  return (
                    <button
                      key={r.id}
                      onClick={() => setSelected(r.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-white shadow-md ring-2'
                          : 'bg-white/60 hover:bg-white border-slate-200/60 hover:border-slate-300 hover:shadow-sm'
                      }`}
                      style={
                        isSelected
                          ? { borderColor: r.color, boxShadow: `0 0 0 2px ${r.color}33` }
                          : undefined
                      }
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${isSelected ? 'scale-125' : ''}`}
                          style={{ backgroundColor: isSelected ? r.color : '#cbd5e1' }}
                        />
                        <span className="font-bold text-sm text-slate-900">{r.name}</span>
                        <span className="text-xs text-slate-400 hidden sm:block">({r.provinces})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs font-black px-2.5 py-1 rounded-lg"
                          style={
                            isSelected
                              ? { backgroundColor: `${r.color}12`, color: r.color }
                              : { backgroundColor: '#f1f5f9', color: '#64748b' }
                          }
                        >
                          {r.centres} centres
                        </span>
                        <ChevronRight
                          className="w-4 h-4 transition-transform duration-200"
                          style={{ color: isSelected ? r.color : '#94a3b8', transform: isSelected ? 'translateX(2px)' : undefined }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <Link
              href="/network"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#003366] hover:bg-[#002244] text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-[#003366]/20 hover:-translate-y-0.5"
            >
              <span>Explore the Full Network Directory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
