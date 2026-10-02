import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe2 } from 'lucide-react';

const regionalBlocs = [
  { name: 'Eastern Africa', provinces: 'AFE, AET, TZA', countries: 'Kenya, Uganda, Tanzania, Ethiopia, Rwanda, Burundi, South Sudan, Sudan' },
  { name: 'Western Africa', provinces: 'AOS, AON, ANN, ATE', countries: 'Ghana, Nigeria, Sierra Leone, Liberia, Senegal, Mali, Guinea, Côte d’Ivoire, Burkina Faso, Togo, Benin' },
  { name: 'Central Africa', provinces: 'AFC, ACC, AGL', countries: 'DR Congo, Cameroon, Congo, Gabon, Central African Republic, Chad, Equatorial Guinea' },
  { name: 'Southern Africa', provinces: 'AFM, ZMB, MOZ', countries: 'South Africa, Zambia, Zimbabwe, Malawi, Mozambique, Eswatini, Lesotho, Namibia' },
  { name: 'Madagascar & Islands', provinces: 'MDG', countries: 'Madagascar, Mauritius' },
];

export function WhereWeWorkOverview() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Map Representation */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-white shadow-sm border border-slate-200/80">
              <Image
                src="https://dbtechafrica.org/wp-content/uploads/2026/04/Pan-African-Network.png"
                alt="Don Bosco Tech Africa Pan-African Network Footprint"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Editorial Network Summary */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#D32F2F] uppercase block">
              OUR NETWORK
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Spanning 35 Countries Across Africa & Madagascar
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed font-normal">
              Our 119 centres operate under 15 Salesian Provinces across five dynamic regional blocs. Each centre responds directly to local economic demand while benefiting from continental standards, modernized curricula, and instructor training.
            </p>

            {/* Quiet Regional List */}
            <div className="border-t border-slate-200 pt-5 space-y-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                5 Regional Coordination Blocs
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {regionalBlocs.map((bloc, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#003366] shrink-0" />
                    <span className="font-semibold text-slate-900">{bloc.name}</span>
                    <span className="text-xs text-slate-400">({bloc.provinces})</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/network"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#003366] hover:bg-[#002244] text-white font-semibold text-sm transition-colors shadow-xs group"
              >
                <span>Explore the Full Network Directory</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
