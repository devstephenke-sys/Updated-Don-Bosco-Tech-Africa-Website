import React from 'react';
import Link from 'next/link';
import { trades } from '@/content/trades';
import { 
  Sun, 
  Cpu, 
  Zap, 
  Terminal, 
  Flame, 
  Sprout, 
  ArrowRight, 
  Briefcase, 
  Award, 
  Building2,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

export const metadata = {
  title: 'Pan-African Vocational Disciplines & Trade Rankings | Don Bosco Tech Africa',
  description:
    'Benchmarked vocational disciplines across 119 TVET institutions in Africa. Explore programs in Solar PV, Automotive Mechatronics, Industrial Automation, ICT, and Agribusiness with audited employment placement data.',
};

const iconMap: Record<string, React.ReactNode> = {
  Sun: <Sun className="w-6 h-6 text-amber-500" />,
  Cpu: <Cpu className="w-6 h-6 text-blue-500" />,
  Zap: <Zap className="w-6 h-6 text-yellow-500" />,
  Terminal: <Terminal className="w-6 h-6 text-purple-500" />,
  Flame: <Flame className="w-6 h-6 text-orange-500" />,
  Sprout: <Sprout className="w-6 h-6 text-emerald-500" />,
};

export default function TradesObservatoryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* ── Page Header ── */}
      <div className="bg-[#061830] text-white pt-12 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-slate-400 font-mono mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber-400">Vocational Disciplines</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              Pan-African Trade Rankings by Subject
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Vocational Disciplines & Industry Demand
            </h1>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Explore harmonized TVET curricula, graduate placement rates, and benchmarked centers of excellence across Africa’s fastest-growing technical sectors.
            </p>
          </div>
        </div>
      </div>

      {/* ── Disciplines Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trades.map((trade) => (
            <div
              key={trade.id}
              className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6">
                {/* Category & Demand Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    {iconMap[trade.icon] || <Zap className="w-6 h-6 text-blue-600" />}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                    Demand: {trade.laborDemandOutlook}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-slate-900 leading-snug">
                  {trade.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {trade.description}
                </p>

                {/* Key Sector Metrics */}
                <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-slate-100 text-center">
                  <div className="bg-slate-50 p-2.5 rounded-lg">
                    <div className="text-[11px] text-slate-400 uppercase font-medium">Placement Rate</div>
                    <div className="text-xl font-mono font-bold text-emerald-600 mt-0.5">
                      {trade.averageEmploymentRate}%
                    </div>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-lg">
                    <div className="text-[11px] text-slate-400 uppercase font-medium">Accredited Hubs</div>
                    <div className="text-xl font-mono font-bold text-[#003366] mt-0.5">
                      {trade.totalAccreditedCentres}
                    </div>
                  </div>
                </div>

                {/* Top Performing Centres Snapshot */}
                <div className="mt-5">
                  <div className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>Top Performing Centres:</span>
                  </div>
                  <div className="space-y-1.5">
                    {trade.topPerformingCentres.map((centre, idx) => (
                      <Link
                        key={idx}
                        href={`/institutions/${centre.institutionId}`}
                        className="flex items-center justify-between p-2 rounded bg-slate-50 hover:bg-blue-50/60 text-xs text-slate-800 transition-colors group"
                      >
                        <span className="flex items-center gap-1.5 truncate max-w-[200px]">
                          <span>{centre.flagEmoji}</span>
                          <span className="truncate group-hover:text-[#003366] font-medium">
                            {centre.institutionName}
                          </span>
                        </span>
                        <span className="font-mono font-bold text-emerald-600 shrink-0">
                          {centre.placementRate}%
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 truncate max-w-[180px]">
                  Partner: <strong className="text-slate-700">{trade.leadIndustryPartner.split('&')[0]}</strong>
                </span>
                <Link
                  href="/institutions"
                  className="font-bold text-[#003366] hover:underline flex items-center gap-1 shrink-0"
                >
                  <span>Centres</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
