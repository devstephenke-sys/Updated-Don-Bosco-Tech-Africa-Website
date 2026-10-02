'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function HomeHero() {
  return (
    <section className="relative bg-white pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#D32F2F] uppercase mb-4 block">
              DON BOSCO TECH AFRICA
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Transforming Youth Potential Through <span className="text-[#003366]">Quality TVET</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-[620px] font-normal mb-8">
              Coordinating 119 Salesian Technical and Vocational Training centres across 35 African countries and Madagascar to equip young people with market-driven skills, values, and dignified livelihoods.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/network"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-semibold text-base transition-colors shadow-xs"
              >
                <span>Explore Our Network</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/what-we-do"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-base transition-colors"
              >
                Discover Our Work
              </Link>
            </div>
          </div>

          {/* Right Column: One Strong Authentic Photograph */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[5/4] shadow-sm bg-slate-100 border border-slate-100">
              <Image
                src="https://dbtechafrica.org/wp-content/uploads/2026/04/Hands-On-Technical-Training.png"
                alt="Don Bosco TVET learners engaged in technical hands-on training"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

