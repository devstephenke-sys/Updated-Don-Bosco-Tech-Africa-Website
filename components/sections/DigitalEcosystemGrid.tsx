import React from 'react';
import { digitalServices } from '@/content';
import { SectionHeader } from '../layout/SectionHeader';
import {
  Building2,
  BookOpen,
  Briefcase,
  Lock,
  Wrench,
  GraduationCap,
  ArrowUpRight,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-5 h-5 text-neutral-800" />,
  BookOpen: <BookOpen className="w-5 h-5 text-neutral-800" />,
  Briefcase: <Briefcase className="w-5 h-5 text-neutral-800" />,
  Lock: <Lock className="w-5 h-5 text-neutral-800" />,
  Wrench: <Wrench className="w-5 h-5 text-neutral-800" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-neutral-800" />,
};

export function DigitalEcosystemGrid() {
  return (
    <section className="py-20 md:py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Digital TVET Infrastructure"
          title="Digital Services & Portals"
          subtitle="Direct cloud portals supporting centre management, student e-learning, tracer studies, and staff coordination across Africa."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-neutral-200 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          {digitalServices.map((service) => (
            <div
              key={service.id}
              className="p-8 flex flex-col justify-between hover:bg-neutral-50/50 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 border border-neutral-200 flex items-center justify-center bg-white">
                    {iconMap[service.iconName] || <Building2 className="w-4 h-4 text-neutral-800" />}
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 border border-neutral-200 text-neutral-600">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#003366] transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs text-neutral-400 font-mono mt-1">
                  {service.targetAudience}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100">
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 group-hover:text-[#003366] uppercase tracking-wider"
                >
                  <span>Launch Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
