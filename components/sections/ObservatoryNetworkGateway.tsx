import React from 'react';
import Link from 'next/link';
import { Building2, Globe2, Compass, Scale, ArrowRight } from 'lucide-react';

export const ObservatoryNetworkGateway: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4 text-[#003366]" />
            Continental TVET Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore the Pan-African TVET Network
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Navigate through institutional directories, regional provincial hubs, and comparative benchmark utilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Institutions Directory */}
          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#003366]/40 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#003366] flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#003366] transition-colors">
                119 TVET Centres Directory
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Full registry of vocational training colleges, campus workshops, verified contact dossiers, and TVET authority accreditations.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60">
              <Link
                href="/institutions"
                className="font-bold text-xs text-[#003366] group-hover:underline flex items-center gap-1"
              >
                <span>Browse Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: 15 Provinces & 35 Countries */}
          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#003366]/40 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#003366] transition-colors">
                15 Provinces & 35 Nations
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Explore the regional governance hubs across Eastern, Western, Central, Southern Africa, and Madagascar.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60">
              <Link
                href="/network"
                className="font-bold text-xs text-[#003366] group-hover:underline flex items-center gap-1"
              >
                <span>Explore Geographic Hubs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Institutional Comparator */}
          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#003366]/40 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center mb-4">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#003366] transition-colors">
                Side-by-Side Comparator
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Directly compare 2 to 4 TVET institutions across placement rates, workshop equipment, green credentials, and trades.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60">
              <Link
                href="/compare"
                className="font-bold text-xs text-[#003366] group-hover:underline flex items-center gap-1"
              >
                <span>Open Comparator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
