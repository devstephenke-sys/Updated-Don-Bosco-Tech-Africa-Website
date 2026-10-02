import React from 'react';
import Image from 'next/image';
import { partners } from '@/content';
import { SectionHeader } from '../layout/SectionHeader';

export function PartnerCarousel() {
  return (
    <section className="py-20 md:py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Strategic Alliances"
          title="Partners & Donors"
          subtitle="Collaborating with international development agencies, philanthropic foundations, and technical partners to advance African TVET."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 border border-neutral-200 divide-x divide-y divide-neutral-200">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="p-8 flex flex-col items-center text-center justify-center min-h-[140px] hover:bg-neutral-50/50 transition-colors group"
            >
              <div className="relative w-32 h-14 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={130}
                  height={55}
                  className="max-h-12 w-auto object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <p className="mt-3 text-xs font-semibold text-neutral-800 line-clamp-1">
                {partner.name}
              </p>
              <span className="text-[10px] text-neutral-400 font-mono mt-0.5">
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
