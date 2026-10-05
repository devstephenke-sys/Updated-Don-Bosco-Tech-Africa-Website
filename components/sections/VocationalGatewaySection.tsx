import React from 'react';
import Link from 'next/link';
import { trades } from '@/content/trades';
import { Sun, Cpu, Zap, Terminal, Flame, Sprout, ArrowRight, TrendingUp } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Sun: <Sun className="w-5 h-5 text-amber-600" />,
  Cpu: <Cpu className="w-5 h-5 text-blue-600" />,
  Zap: <Zap className="w-5 h-5 text-yellow-600" />,
  Terminal: <Terminal className="w-5 h-5 text-purple-600" />,
  Flame: <Flame className="w-5 h-5 text-orange-600" />,
  Sprout: <Sprout className="w-5 h-5 text-emerald-600" />,
};

export const VocationalGatewaySection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              Pan-African Disciplines Explorer
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Benchmarked Vocational Sectors & Trades
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Harmonized curricula and employment outcomes across Africa&apos;s primary industrial and green growth sectors.
            </p>
          </div>

          <Link
            href="/trades"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003366] hover:underline"
          >
            <span>Explore All Disciplines</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trades.map((trade) => (
            <div
              key={trade.id}
              className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    {iconMap[trade.icon] || <Zap className="w-5 h-5 text-blue-600" />}
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">
                    {trade.averageEmploymentRate}% Placement
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm leading-snug">
                  {trade.shortTitle}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {trade.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">
                  {trade.totalAccreditedCentres} Centres Accredited
                </span>
                <Link
                  href="/trades"
                  className="font-bold text-[#003366] hover:underline flex items-center gap-0.5"
                >
                  <span>Rankings</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
