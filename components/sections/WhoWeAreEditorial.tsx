import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function WhoWeAreEditorial() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Human Photograph */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-100">
              <Image
                src="https://dbtechafrica.org/wp-content/uploads/2026/04/Empowering-Youth.png"
                alt="Don Bosco TVET learners receiving hands-on mentorship"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Clean Editorial Explanation */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#D32F2F] uppercase block">
              WHO WE ARE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Empowering Africa’s Next Generation of Technical Leaders
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed font-normal">
              Don Bosco Tech Africa coordinates the Salesian TVET network across Africa and Madagascar, supporting institutions that equip young people with practical skills, values, and opportunities for employment and entrepreneurship.
            </p>

            <p className="text-base text-slate-500 leading-relaxed max-w-[560px]">
              Rooted in the Salesian Preventive System, our work connects continental standards, green technology upgrades, and instructor training with 119 grassroots vocational centres serving underprivileged communities.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-base font-bold text-[#003366] hover:text-[#D32F2F] transition-colors group"
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
