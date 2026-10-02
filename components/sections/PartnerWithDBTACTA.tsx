import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export function PartnerWithDBTACTA() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-200/70" id="partner-cta">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[680px] mx-auto text-center space-y-6">
          <span className="text-xs md:text-sm font-bold tracking-widest text-[#D32F2F] uppercase block">
            GET INVOLVED
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Partner With Don Bosco Tech Africa
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Collaborate with our continental secretariat on green energy transitions, TVET curriculum upgrades, tracer research, or youth skills development across 35 countries.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-semibold text-base transition-colors shadow-xs"
            >
              <span>Contact Secretariat</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/opportunities"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold text-base transition-colors shadow-2xs"
            >
              View Opportunities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
