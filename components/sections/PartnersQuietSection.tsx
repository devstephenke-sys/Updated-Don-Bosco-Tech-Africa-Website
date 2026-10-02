import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { partners } from '@/content';

export function PartnersQuietSection() {
  const featuredPartners = partners.slice(0, 8);

  return (
    <section className="py-20 md:py-24 bg-white border-t border-slate-200/70" id="partners">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-[620px] reveal">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#D32F2F] uppercase block mb-2">
              COLLABORATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Working Together
            </h2>
            <p className="text-base text-slate-500 mt-2">
              Strategic partnerships with international development agencies, philanthropic foundations, and industry innovators.
            </p>
          </div>
          <div>
            <Link
              href="/partners"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#003366] hover:text-[#D32F2F] transition-colors group"
            >
              <span>Our Partners</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Quiet Logo Strip / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center reveal">
          {featuredPartners.map((partner) => (
            <div
              key={partner.id}
              className="h-16 flex items-center justify-center p-3 rounded-xl border border-slate-100 hover:border-slate-200 bg-white transition-all duration-300 group hover:-translate-y-1 hover:shadow-md cursor-pointer"
              title={partner.name}
            >
              <div className="relative w-full h-9 filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-400">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="120px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
