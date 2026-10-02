'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Users, GraduationCap, ChevronDown } from 'lucide-react';

/* ─── Rotating headline words ─── */
const WORDS = ['Empower', 'Transform', 'Elevate', 'Inspire', 'Equip'];
const WORD_INTERVAL = 2800;

/* ─────────────────────────────────────────────────────────────
   Africa map: SVG viewBox 0 0 1000 1100
   Country dots positioned by approximate lat/lon mapped to
   the Africa outline SVG coordinate space.
   cx = (lon + 18) / 82 * 1000   (Africa spans ~-18°W to ~52°E lon → 70°)
   cy = (37 - lat) / 74 * 1100   (Africa spans ~-35°S to ~37°N lat → 72°)
   ──────────────────────────────────────────────────────────── */
interface Country {
  name: string;
  centres: number;
  trade?: string;
  cx: number;
  cy: number;
}

const DBTA_COUNTRIES: Country[] = [
  { name: 'Morocco',          centres: 2,  trade: 'Automotive, IT',           cx: 310, cy:  62 },
  { name: 'Algeria',          centres: 1,  trade: 'Construction',              cx: 390, cy: 115 },
  { name: 'Tunisia',          centres: 1,  trade: 'Hospitality',               cx: 450, cy:  80 },
  { name: 'Egypt',            centres: 2,  trade: 'IT, Mechatronics',          cx: 600, cy: 145 },
  { name: 'Mauritania',       centres: 1,  trade: 'Agriculture',               cx: 160, cy: 220 },
  { name: 'Mali',             centres: 2,  trade: 'Solar, Construction',       cx: 295, cy: 270 },
  { name: 'Niger',            centres: 1,  trade: 'Agriculture, Solar',        cx: 420, cy: 265 },
  { name: 'Chad',             centres: 2,  trade: 'Construction, Agriculture', cx: 545, cy: 295 },
  { name: 'Sudan',            centres: 2,  trade: 'Agriculture, Welding',      cx: 640, cy: 265 },
  { name: 'Senegal',          centres: 3,  trade: 'Automotive, IT',            cx: 120, cy: 310 },
  { name: 'Guinea',           centres: 2,  trade: 'Mining, Construction',      cx: 145, cy: 380 },
  { name: 'Sierra Leone',     centres: 1,  trade: 'Agriculture',               cx: 130, cy: 420 },
  { name: 'Liberia',          centres: 1,  trade: 'Agriculture, Construction', cx: 155, cy: 450 },
  { name: 'Côte d\'Ivoire',   centres: 3,  trade: 'Agriculture, Hospitality',  cx: 215, cy: 435 },
  { name: 'Ghana',            centres: 4,  trade: 'IT, Electrical, Solar',     cx: 265, cy: 450 },
  { name: 'Togo',             centres: 2,  trade: 'Agriculture, Welding',      cx: 305, cy: 440 },
  { name: 'Benin',            centres: 2,  trade: 'Agriculture, Construction', cx: 330, cy: 435 },
  { name: 'Nigeria',          centres: 6,  trade: 'Electrical, IT, Solar',     cx: 380, cy: 400 },
  { name: 'Cameroon',         centres: 4,  trade: 'Agriculture, Construction', cx: 460, cy: 420 },
  { name: 'Ethiopia',         centres: 5,  trade: 'Garment, Hospitality, IT',  cx: 680, cy: 355 },
  { name: 'South Sudan',      centres: 2,  trade: 'Agriculture, Construction', cx: 600, cy: 390 },
  { name: 'DR Congo',         centres: 8,  trade: 'Mechanics, Agriculture',    cx: 530, cy: 490 },
  { name: 'Uganda',           centres: 5,  trade: 'ICT, Agriculture, Solar',   cx: 630, cy: 440 },
  { name: 'Kenya',            centres: 7,  trade: 'Solar, IT, Hospitality',    cx: 680, cy: 465 },
  { name: 'Tanzania',         centres: 6,  trade: 'Agriculture, Fishing',      cx: 660, cy: 540 },
  { name: 'Rwanda',           centres: 3,  trade: 'ICT, Hospitality, Solar',   cx: 608, cy: 480 },
  { name: 'Burundi',          centres: 2,  trade: 'Agriculture, Welding',      cx: 595, cy: 510 },
  { name: 'Angola',           centres: 3,  trade: 'Construction, Agriculture', cx: 465, cy: 570 },
  { name: 'Zambia',           centres: 3,  trade: 'Mining, Agriculture',       cx: 565, cy: 590 },
  { name: 'Mozambique',       centres: 3,  trade: 'Agriculture, Construction', cx: 650, cy: 610 },
  { name: 'Zimbabwe',         centres: 2,  trade: 'Agriculture, Mechanics',    cx: 580, cy: 635 },
  { name: 'Malawi',           centres: 2,  trade: 'Agriculture, Tailoring',    cx: 635, cy: 580 },
  { name: 'South Africa',     centres: 3,  trade: 'Electrical, IT, Welding',   cx: 545, cy: 760 },
  { name: 'Madagascar',       centres: 4,  trade: 'Agriculture, Tailoring',    cx: 760, cy: 650 },
  { name: 'Burkina Faso',     centres: 2,  trade: 'Solar, Agriculture',        cx: 270, cy: 335 },
];

/* ─── Animated counter ─── */
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const frame = useRef<number>(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.round((1 - (1 - p) ** 2) * target));
      if (p < 1) frame.current = requestAnimationFrame(step);
    };
    frame.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame.current);
  }, [target, duration, start]);
  return count;
}

/* ─── Floating ambient particles ─── */
const PARTICLE_SEED = Array.from({ length: 18 }, (_, i) => ({
  left: ((i * 37 + 11) % 97).toFixed(1),
  top:  ((i * 53 + 7)  % 93).toFixed(1),
  w:    3 + ((i * 7) % 5),
  delay: ((i * 13) % 8).toFixed(1),
  dur:   (6 + ((i * 11) % 9)).toFixed(1),
  op:    (0.12 + ((i * 3) % 20) * 0.01).toFixed(2),
}));

/* ─── Africa SVG Map ─── */
interface MapProps {
  mounted: boolean;
}
function AfricaMap({ mounted }: MapProps) {
  const [hovered, setHovered] = useState<Country | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);

  const handleMouseMove = (e: React.MouseEvent, country: Country) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    setTooltipPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHovered(country);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Glow behind map */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,80,200,0.12) 0%, transparent 70%)',
      }} />

      <svg
        ref={svgRef}
        viewBox="60 30 840 980"
        className={`w-full h-full max-h-[88vh] transition-all duration-1000 drop-shadow-xl ${
          mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{ transitionDelay: '600ms' }}
        aria-label="Africa map showing DBTA presence"
      >
        {/* Africa land shape — simplified outline */}
        <path
          d="
            M 440 55  L 490 48  L 560 60  L 610 45  L 660 52  L 700 70
            L 730 95  L 750 130 L 755 165 L 750 195 L 760 225 L 780 255
            L 790 290 L 800 340 L 810 390 L 815 430 L 800 470 L 780 500
            L 760 530 L 745 560 L 730 585 L 720 615 L 700 645 L 680 670
            L 660 690 L 645 710 L 620 730 L 600 750 L 580 765 L 560 785
            L 545 800 L 535 820 L 530 840 L 535 860 L 545 880 L 555 900
            L 545 925 L 520 940 L 490 945 L 455 935 L 430 910 L 415 885
            L 400 860 L 390 830 L 380 800 L 365 770 L 345 745 L 315 720
            L 295 700 L 280 675 L 265 650 L 250 615 L 235 580 L 215 545
            L 200 510 L 190 475 L 175 445 L 165 415 L 155 390 L 145 360
            L 140 325 L 138 295 L 140 265 L 148 240 L 155 215 L 150 190
            L 140 165 L 135 140 L 130 115 L 140 92  L 155 75  L 175 65
            L 210 58  L 255 52  L 300 48  L 350 50  L 390 52  L 420 53
            Z
          "
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Country dots */}
        {DBTA_COUNTRIES.map((country) => (
          <g key={country.name}>
            {/* Pulse ring */}
            <circle
              cx={country.cx}
              cy={country.cy}
              r={country.centres > 4 ? 14 : 10}
              fill="none"
              stroke={country.centres > 4 ? '#F5A623' : '#D32F2F'}
              strokeWidth="1"
              opacity="0.3"
              className="map-pulse-ring"
            />
            {/* Main dot */}
            <circle
              cx={country.cx}
              cy={country.cy}
              r={country.centres > 4 ? 7 : country.centres > 2 ? 5.5 : 4}
              fill={
                hovered?.name === country.name
                  ? '#ffffff'
                  : country.centres > 4
                  ? '#F5A623'
                  : '#D32F2F'
              }
              stroke={hovered?.name === country.name ? '#F5A623' : 'rgba(255,255,255,0.5)'}
              strokeWidth={hovered?.name === country.name ? 2 : 1}
              className="cursor-pointer transition-all duration-200"
              style={{
                filter: hovered?.name === country.name
                  ? 'drop-shadow(0 0 8px rgba(245,166,35,0.9))'
                  : country.centres > 4
                  ? 'drop-shadow(0 0 4px rgba(245,166,35,0.5))'
                  : 'drop-shadow(0 0 3px rgba(211,47,47,0.4))',
                transform: hovered?.name === country.name ? `scale(1.6)` : 'scale(1)',
                transformOrigin: `${country.cx}px ${country.cy}px`,
              }}
              onMouseMove={(e) => handleMouseMove(e, country)}
              onMouseLeave={() => setHovered(null)}
            />
          </g>
        ))}

        {/* Tooltip rendered in SVG space */}
        {hovered && (
          <foreignObject
            x={Math.min(tooltipPos.x + 12, 760)}
            y={Math.max(tooltipPos.y - 70, 10)}
            width="210"
            height="90"
            className="pointer-events-none overflow-visible"
          >
            <div
              className="bg-[#001a33] border border-white/20 rounded-xl px-3 py-2.5 shadow-2xl backdrop-blur-sm"
              style={{ fontFamily: 'inherit' }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#F5A623] shrink-0" />
                <span className="text-white font-bold text-sm leading-tight">{hovered.name}</span>
              </div>
              <div className="text-[#F5A623] text-xs font-semibold mb-0.5">
                {hovered.centres} TVET {hovered.centres === 1 ? 'Centre' : 'Centres'}
              </div>
              {hovered.trade && (
                <div className="text-white/50 text-[10px] leading-snug">{hovered.trade}</div>
              )}
            </div>
          </foreignObject>
        )}
      </svg>

      {/* Legend */}
      <div className={`absolute bottom-3 right-3 flex flex-col gap-1.5 transition-all duration-700 ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`} style={{ transitionDelay: '1000ms' }}>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#F5A623] shadow-md shrink-0" />
          <span className="text-[10px] text-white/50">5+ centres</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D32F2F] shadow-md shrink-0" />
          <span className="text-[10px] text-white/50">1–4 centres</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   HOME HERO
   ═══════════════════════════════════════════ */
export function HomeHero() {
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsAnimating(false);
      }, 380);
    }, WORD_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const centres = useCounter(119, 2200, mounted);
  const nations  = useCounter(35,  1800, mounted);
  const youth    = useCounter(45,  2400, mounted);

  const scrollToContent = useCallback(() => {
    document.getElementById('who-we-are')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section
      id="landing-hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Don Bosco Tech Africa — Landing"
    >
      {/* ── Backgrounds ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001020] via-[#001a33] to-[#002f55]" />
      <div className="absolute inset-0 pointer-events-none opacity-50" style={{
        background: 'radial-gradient(ellipse 70% 55% at 65% 45%, rgba(211,47,47,0.10) 0%, transparent 65%), radial-gradient(ellipse 50% 60% at 15% 70%, rgba(245,166,35,0.07) 0%, transparent 55%)',
      }} />
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {PARTICLE_SEED.map((p, i) => (
          <span key={i} className="landing-particle" style={{
            left: `${p.left}%`, top: `${p.top}%`,
            width: `${p.w}px`, height: `${p.w}px`,
            animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s`,
            opacity: Number(p.op),
          }} />
        ))}
      </div>

      {/* ── Main two-column layout ── */}
      <div className="relative z-10 flex-1 flex items-center max-w-[1300px] mx-auto px-5 sm:px-8 lg:px-12 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 xl:gap-12 items-center w-full">

          {/* ── LEFT: Manifesto Text ── */}
          <div className="space-y-6 sm:space-y-7 text-center lg:text-left">

            {/* Eyebrow badge */}
            <div className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '150ms' }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/6 backdrop-blur-md text-white/70 text-xs sm:text-sm font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Don Bosco Tech Africa · Est. 1980
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-[2.6rem] sm:text-[3.4rem] md:text-[4rem] lg:text-[3.8rem] xl:text-[4.4rem] font-extrabold text-white leading-[1.08] tracking-tight transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              We{' '}
              <span
                className={`inline-block transition-all duration-[380ms] ${
                  isAnimating ? 'opacity-0 translate-y-4 blur-sm' : 'opacity-100 translate-y-0 blur-0'
                }`}
                style={{
                  background: 'linear-gradient(135deg, #F5A623 20%, #D32F2F 85%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  minWidth: '4ch',
                  display: 'inline-block',
                }}
              >
                {WORDS[wordIndex]}
              </span>
              <br />
              <span className="text-white/90">Africa&apos;s Youth</span>
            </h1>

            {/* Sub-copy */}
            <p className={`text-base sm:text-lg text-white/55 leading-relaxed max-w-[520px] mx-auto lg:mx-0 font-light transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`} style={{ transitionDelay: '450ms' }}>
              Quality technical and vocational education across{' '}
              <span className="text-white/90 font-semibold">35 African nations</span> — building
              skills, creating futures, transforming communities.
            </p>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`} style={{ transitionDelay: '600ms' }}>
              <Link
                href="/network"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#003366] font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                <span>Explore Our Network</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/what-we-do"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/6 hover:bg-white/12 backdrop-blur-sm text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>What We Do</span>
                <ChevronDown className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-y-0.5 transition-all" />
              </Link>
            </div>

            {/* Quick stat row under CTAs */}
            <div className={`hidden sm:flex items-center gap-6 pt-2 transition-all duration-700 ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-black text-white tabular-nums">{centres}+</div>
                <div className="text-[10px] text-white/35 uppercase tracking-wider font-medium">Centres</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center lg:text-left">
                <div className="text-2xl font-black text-white tabular-nums">{nations}</div>
                <div className="text-[10px] text-white/35 uppercase tracking-wider font-medium">Nations</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center lg:text-left">
                <div className="text-2xl font-black text-white tabular-nums">{youth}k+</div>
                <div className="text-[10px] text-white/35 uppercase tracking-wider font-medium">Youth / year</div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Interactive Africa Map ── */}
          <div className={`relative h-[420px] sm:h-[520px] lg:h-[600px] xl:h-[680px] transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`} style={{ transitionDelay: '500ms' }}>

            {/* Map label */}
            <div className={`absolute top-0 left-0 z-10 flex items-center gap-2 transition-all duration-700 ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`} style={{ transitionDelay: '900ms' }}>
              <MapPin className="w-3.5 h-3.5 text-[#D32F2F]" />
              <span className="text-[10px] sm:text-xs text-white/40 font-medium uppercase tracking-widest">
                DBTA Presence · Hover to explore
              </span>
            </div>

            <AfricaMap mounted={mounted} />
          </div>
        </div>
      </div>

      {/* ── Scroll prompt ── */}
      <div className={`relative z-10 flex justify-center pb-6 transition-all duration-700 ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`} style={{ transitionDelay: '1100ms' }}>
        <button
          onClick={scrollToContent}
          aria-label="Scroll to discover who we are"
          className="group flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-[10px] text-white/25 font-medium uppercase tracking-widest">
            Discover More
          </span>
          <span className="w-5 h-9 rounded-full border border-white/15 flex items-start justify-center pt-1.5">
            <span className="w-1 h-1 rounded-full bg-white/40 animate-bounce" />
          </span>
        </button>
      </div>
    </section>
  );
}
