'use client';

import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Briefcase,
  Building2,
  Wrench,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Layers,
  Database,
  GraduationCap,
} from 'lucide-react';
import { digitalServices } from '@/content/digitalServices';

export function DigitalPortalsBento() {
  const iconMap: Record<string, React.ElementType> = {
    BookOpen,
    Briefcase,
    Building2,
    Wrench,
    GraduationCap,
  };

  const primaryServices = digitalServices.slice(0, 4);

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#003366]/10 text-[#003366] text-xs font-bold uppercase tracking-wider">
              <Database className="w-3.5 h-3.5" />
              <span>Continental TVET Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Operational Gateways & Digital Systems
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              Direct access to live institutional management, curricula repositories, and graduate employment tracer tools across the 35-country network.
            </p>
          </div>

          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#003366] hover:text-[#002244] bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm hover:shadow transition-all shrink-0"
          >
            <span>View All Digital Tools</span>
            <ArrowRight className="w-4 h-4 text-[#F5A623]" />
          </Link>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {primaryServices.map((service, index) => {
            const Icon = iconMap[service.iconName] || BookOpen;
            const isFeatured = index === 0 || index === 1;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#003366]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Badge & Icon Row */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#003366]/10 text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {service.status}
                    </span>
                  </div>

                  {/* Title & Tag */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D32F2F] block mb-1">
                      {service.badge}
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#003366] transition-colors leading-snug">
                      {service.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    {service.keyFeatures.slice(0, 2).map((feat, i) => (
                      <div key={i} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#003366] shrink-0 mt-1" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-5 mt-4 border-t border-slate-100">
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-[#003366] hover:text-[#002244] group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Launch Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
