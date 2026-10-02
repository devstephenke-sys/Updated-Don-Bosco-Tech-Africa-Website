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
  Building2: <Building2 className="w-6 h-6 text-blue-600" />,
  BookOpen: <BookOpen className="w-6 h-6 text-orange-500" />,
  Briefcase: <Briefcase className="w-6 h-6 text-emerald-600" />,
  Lock: <Lock className="w-6 h-6 text-indigo-600" />,
  Wrench: <Wrench className="w-6 h-6 text-purple-600" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-amber-600" />,
};

export function DigitalEcosystemGrid() {
  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Integrated Digital Ecosystem"
          title="DBTA Digital Services & Platforms"
          subtitle="Connecting TVET centres, instructors, students, and employers through specialized continental digital infrastructure."
          className="[&>h2]:text-white [&>p]:text-slate-300"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-950/80 rounded-3xl p-8 border border-slate-800 hover:border-slate-700 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    {iconMap[service.iconName] || <Building2 className="w-6 h-6 text-blue-400" />}
                  </div>
                  <Badge variant="blue" size="sm">
                    {service.badge}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-medium">For: {service.targetAudience}</p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {service.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800">
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/5 hover:bg-orange-500 text-white text-sm font-semibold transition-all group-hover:bg-blue-600"
                >
                  <span>Launch Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
