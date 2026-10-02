'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function HomeHero() {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-white border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#6b7280] mb-6">
          Continental TVET Coordinating Body · Africa &amp; Madagascar
        </p>

        {/* Main headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] leading-[1.1] tracking-tight">
              Transforming youth<br />
              potential through<br />
              <span className="text-[#003366]">quality TVET in Africa</span>
            </h1>

            <p className="mt-6 text-lg text-[#4b5563] leading-relaxed max-w-xl font-normal">
              Don Bosco Tech Africa coordinates <strong className="text-[#111111] font-semibold">119 technical centres</strong> across <strong className="text-[#111111] font-semibold">35 African countries</strong>, equipping over 45,000 young people annually with market-driven technical, green, and digital skills.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/network"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#003366] text-white text-sm font-semibold rounded-lg hover:bg-[#002244] transition-colors"
              >
                Explore Our Network
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/impact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#111111] border border-[#e5e7eb] rounded-lg hover:border-[#003366] hover:text-[#003366] transition-colors"
              >
                Our Impact
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            {/* Stats grid — no cards, just numbers */}
            <div className="grid grid-cols-2 gap-8">
              <div className="border-t-2 border-[#003366] pt-4">
                <div className="text-4xl font-black text-[#003366]">119</div>
                <div className="text-sm text-[#6b7280] mt-1 font-medium">TVET Centres</div>
              </div>
              <div className="border-t-2 border-[#ea580c] pt-4">
                <div className="text-4xl font-black text-[#111111]">35</div>
                <div className="text-sm text-[#6b7280] mt-1 font-medium">African Nations</div>
              </div>
              <div className="border-t-2 border-[#111111] pt-4">
                <div className="text-4xl font-black text-[#111111]">45K+</div>
                <div className="text-sm text-[#6b7280] mt-1 font-medium">Youth Trained Annually</div>
              </div>
              <div className="border-t-2 border-[#6b7280] pt-4">
                <div className="text-4xl font-black text-[#111111]">57%</div>
                <div className="text-sm text-[#6b7280] mt-1 font-medium">Employment Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero image — full width, no border-radius */}
        <div className="mt-16 relative overflow-hidden rounded-xl">
          <Image
            src="https://dbtechafrica.org/wp-content/uploads/2026/04/Hands-On-Technical-Training.png"
            alt="Don Bosco TVET technical training in Africa"
            width={1280}
            height={520}
            priority
            className="w-full h-[300px] md:h-[480px] object-cover"
            sizes="(max-width: 768px) 100vw, 1280px"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-8 py-6 md:px-12 md:py-8">
            <p className="text-white text-sm font-medium opacity-90">
              Hands-on training at a Don Bosco TVET Centre
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
