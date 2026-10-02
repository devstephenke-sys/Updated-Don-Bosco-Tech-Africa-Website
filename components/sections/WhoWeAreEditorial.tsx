import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users, MapPin, Award } from 'lucide-react';

const highlights = [
  { icon: Users, label: '45,000+ youth empowered annually', color: '#003366' },
  { icon: MapPin, label: 'Present in 35 African countries', color: '#D32F2F' },
  { icon: Award, label: 'Rooted in the Salesian Preventive System', color: '#2D7D46' },
];

export function WhoWeAreEditorial() {
  return (
    <section className="py-20 md:py-28 bg-white" id="who-we-are">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Image with floating badge */}
          <div className="lg:col-span-6 reveal reveal-left">
            <div className="relative">
              {/* Decorative offset frame */}
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border-2 border-[#003366]/10 bg-[#003366]/3" />

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-md img-zoom-wrap">
                <Image
                  src="https://dbtechafrica.org/wp-content/uploads/2026/04/Empowering-Youth.png"
                  alt="Don Bosco TVET learners receiving hands-on mentorship"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-6 sm:-right-6 bg-white rounded-xl shadow-lg border border-slate-100 px-5 py-4 max-w-[200px]">
                <div className="text-3xl font-extrabold text-[#D32F2F] leading-none">119</div>
                <div className="text-xs text-slate-500 font-semibold mt-1 leading-snug uppercase tracking-wider">
                  TVET Centres<br />Across Africa
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial copy */}
          <div className="lg:col-span-6 space-y-6 reveal reveal-right">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#D32F2F] uppercase block">
              WHO WE ARE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Empowering Africa's Next Generation of Technical Leaders
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed font-normal">
              Don Bosco Tech Africa coordinates the Salesian TVET network across Africa and Madagascar, supporting institutions that equip young people with practical skills, values, and opportunities for employment and entrepreneurship.
            </p>

            {/* Highlight bullets */}
            <ul className="space-y-3">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: h.color + '12' }}
                    >
                      <Icon className="w-4 h-4" style={{ color: h.color }} />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{h.label}</span>
                  </li>
                );
              })}
            </ul>

            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#003366] hover:bg-[#002244] text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
              >
                <span>Learn about DBTA</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
