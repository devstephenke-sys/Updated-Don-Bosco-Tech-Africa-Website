import React from 'react';
import Image from 'next/image';
import { partners } from '@/content';
import { SectionHeader } from '../layout/SectionHeader';

export function PartnerCarousel() {
  return (
    <section className="py-20 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Strategic Alliances"
          title="Our Strategic Partners & Donors"
          subtitle="Collaborating with leading international development agencies, philanthropic foundations, and technical associations to transform African TVET."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-between h-44 group"
            >
              <div className="relative w-36 h-16 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={60}
                  className="max-h-14 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="mt-2">
                <p className="text-xs font-bold text-slate-800">{partner.name}</p>
                <span className="text-[10px] text-slate-400 font-medium block">{partner.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
