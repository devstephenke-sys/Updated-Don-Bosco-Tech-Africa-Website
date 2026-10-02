import React from 'react';
import { digitalServices } from '@/content';
import { SectionHeader } from '../layout/SectionHeader';
import { Badge } from '../ui/Badge';
import {
  Building2,
  BookOpen,
  Briefcase,
  Lock,
  Wrench,
  GraduationCap,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-5 h-5 text-blue-700" />,
  BookOpen: <BookOpen className="w-5 h-5 text-blue-700" />,
  Briefcase: <Briefcase className="w-5 h-5 text-blue-700" />,
  Lock: <Lock className="w-5 h-5 text-blue-700" />,
  Wrench: <Wrench className="w-5 h-5 text-blue-700" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-blue-700" />,
};

export function DigitalEcosystemGrid() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Digital TVET Ecosystem"
          title="Digital Services & Portals"
          subtitle="Direct cloud gateways powering TVET management, student e-learning, graduate tracer studies, and staff operations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    {iconMap[service.iconName] || <Building2 className="w-5 h-5 text-blue-700" />}
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Audience: {service.targetAudience}</p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {service.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-2.5 rounded-xl bg-slate-50 hover:bg-blue-700 text-slate-700 hover:text-white text-xs font-bold transition-colors group-hover:bg-blue-700 group-hover:text-white"
                >
                  <span>Launch Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
