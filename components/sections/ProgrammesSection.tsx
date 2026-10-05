'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

const PROGRAMMES = [
  {
    tag: 'Green TVET', tagColor: '#2D7D46', tagBg: 'rgba(45,125,70,0.1)',
    meta: '8 countries · 28 centres',
    title: 'Green TVET & Solar Energy Initiative',
    desc: 'Equipping Salesian TVET institutions across Africa with certified solar PV training equipment, eco-friendly campus practices, and green curricula supported by BMZ and Jugend Eine Welt.',
    href: '/projects/green-tvet-renewable-energy',
    image: 'https://dbtechafrica.org/wp-content/uploads/2026/04/Hands-On-Technical-Training.png',
    accent: '#2D7D46',
  },
  {
    tag: 'Agribusiness', tagColor: '#C07D14', tagBg: 'rgba(192,125,20,0.1)',
    meta: '5 countries · 12 centres',
    title: 'Agriculture for Life Project',
    desc: 'Modernizing agro-pastoral training with climate-smart drip irrigation, automated weather stations, and greenhouse technology across pilot centres.',
    href: '/projects/agriculture-for-life',
    image: 'https://dbtechafrica.org/wp-content/uploads/2026/04/Empowering-Youth.png',
    accent: '#C07D14',
  },
  {
    tag: 'Youth Employment', tagColor: '#003366', tagBg: 'rgba(0,51,102,0.1)',
    meta: 'Continental · 15 Provinces',
    title: 'Job Service Offices & Graduate Tracking',
    desc: 'Establishing dedicated JSOs at every Salesian TVET centre and utilizing digital platforms like Inserjeune to track employment outcomes.',
    href: '/projects/job-service-offices',
    image: 'https://dbtechafrica.org/wp-content/uploads/2026/04/Pan-African-Network.png',
    accent: '#003366',
  },
];

export function ProgrammesSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="featured-programmes"
      className="relative min-h-screen flex items-center bg-slate-50 overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2D7D46] via-[#C07D14] to-[#003366]" />

      {/* Ghost number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[280px] font-black text-slate-900/[0.022] leading-none select-none pointer-events-none hidden lg:block" aria-hidden="true">
        05
      </div>

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 w-full py-20">
        {/* Header */}
        <div
          className={`flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4 transition-all duration-800 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
          }`}
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-black tracking-[0.2em] text-[#D32F2F] uppercase mb-4 block">
              <span className="w-8 h-px bg-[#D32F2F]" />
              Featured Programmes
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Initiatives Transforming<br />
              <span className="text-[#003366]">African TVET</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#003366] hover:text-[#D32F2F] transition-colors whitespace-nowrap"
          >
            <span>View all projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROGRAMMES.map((p, i) => (
            <Link
              key={i}
              href={p.href}
              className={`group block rounded-3xl overflow-hidden border border-slate-200/60 bg-white shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                {/* Tag pill */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider"
                    style={{ backgroundColor: p.tagBg, color: p.tagColor, backdropFilter: 'blur(8px)' }}
                  >
                    {p.tag}
                  </span>
                </div>

                {/* Meta */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-white/70" />
                  <span className="text-[11px] font-bold text-white/80">{p.meta}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3
                  className="text-lg font-bold text-slate-900 leading-snug transition-colors duration-300 group-hover:text-[#003366]"
                >
                  {p.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                  {p.desc}
                </p>
                <div
                  className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-300"
                  style={{ color: hovered === i ? p.accent : '#94a3b8' }}
                >
                  <span>Explore project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
