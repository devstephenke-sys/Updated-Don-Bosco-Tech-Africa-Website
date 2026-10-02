'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

const regionalBlocs = [
  {
    id: 'eastern',
    name: 'Eastern Africa',
    provinces: 'AFE, AET, TZA',
    centres: 34,
    countries: ['Kenya', 'Uganda', 'Tanzania', 'Ethiopia', 'Rwanda', 'Burundi', 'South Sudan', 'Sudan'],
    highlight: 'Hub for Solar PV & Green TVET masterclasses',
  },
  {
    id: 'western',
    name: 'Western Africa',
    provinces: 'AOS, AON, ANN, ATE',
    centres: 38,
    countries: ['Ghana', 'Nigeria', 'Sierra Leone', 'Liberia', 'Senegal', 'Mali', 'Guinea', 'Côte d’Ivoire', 'Burkina Faso', 'Togo', 'Benin'],
    highlight: 'Pioneering Recognition of Prior Learning (RPL)',
  },
  {
    id: 'central',
    name: 'Central Africa',
    provinces: 'AFC, ACC, AGL',
    centres: 22,
    countries: ['DR Congo', 'Cameroon', 'Congo', 'Gabon', 'Central African Republic', 'Chad', 'Equatorial Guinea'],
    highlight: 'Youth resilience & modernized trade workshops',
  },
  {
    id: 'southern',
    name: 'Southern Africa',
    provinces: 'AFM, ZMB, MOZ',
    centres: 19,
    countries: ['South Africa', 'Zambia', 'Zimbabwe', 'Malawi', 'Mozambique', 'Eswatini', 'Lesotho', 'Namibia'],
    highlight: 'Advanced Job Service Offices & digital tracer tracking',
  },
  {
    id: 'madagascar',
    name: 'Madagascar & Islands',
    provinces: 'MDG',
    centres: 6,
    countries: ['Madagascar', 'Mauritius'],
    highlight: 'Sustainable agriculture & artisan craft programs',
  },
];

export function WhereWeWorkOverview() {
  const [selectedBlocId, setSelectedBlocId] = useState('eastern');
  const activeBloc = regionalBlocs.find((b) => b.id === selectedBlocId) || regionalBlocs[0];

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/70" id="network-overview">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Map Representation & Interactive Inspector */}
          <div className="lg:col-span-6 order-2 lg:order-1 reveal reveal-left space-y-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-white shadow-sm border border-slate-200/80 group">
              <Image
                src="https://dbtechafrica.org/wp-content/uploads/2026/04/Pan-African-Network.png"
                alt="Don Bosco Tech Africa Pan-African Network Footprint"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">35 African Nations</span>
              </div>
            </div>

            {/* Interactive Inspector Box for Selected Region */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#003366]/10 flex items-center justify-center text-[#003366]">
                    <MapPin className="w-4 h-4 text-[#003366]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{activeBloc.name}</h4>
                    <p className="text-xs text-slate-500">Provinces: {activeBloc.provinces}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl font-extrabold text-[#D32F2F]">{activeBloc.centres}</span>
                  <span className="text-xs text-slate-500 block">TVET Centres</span>
                </div>
              </div>

              {/* Countries Pills */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                  Active Countries in {activeBloc.name}:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {activeBloc.countries.map((country, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              {/* Regional Highlight note */}
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-50/60 border border-blue-100 text-xs text-blue-900 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#003366] shrink-0" />
                <span>{activeBloc.highlight}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Network Summary & Interactive Region Selector */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 reveal reveal-right">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#D32F2F] uppercase block">
              OUR NETWORK
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Spanning 35 Countries Across Africa & Madagascar
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Our 119 centres operate under 15 Salesian Provinces across five dynamic regional blocs. Each centre responds directly to local economic demand while benefiting from continental standards, modernized curricula, and instructor training.
            </p>

            {/* Interactive Region Selector Buttons */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Select a Region to Inspect:
              </p>
              <div className="space-y-2">
                {regionalBlocs.map((bloc) => {
                  const isSelected = bloc.id === selectedBlocId;
                  return (
                    <button
                      key={bloc.id}
                      onClick={() => setSelectedBlocId(bloc.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-white border-[#003366] shadow-sm ring-1 ring-[#003366]'
                          : 'bg-white/60 hover:bg-white border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-2.5 h-2.5 rounded-full transition-transform duration-200 ${
                            isSelected ? 'bg-[#D32F2F] scale-125' : 'bg-slate-300'
                          }`}
                        />
                        <span className="font-bold text-sm text-slate-900">{bloc.name}</span>
                        <span className="text-xs text-slate-400 hidden sm:inline">({bloc.provinces})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#003366] bg-slate-100 px-2 py-0.5 rounded-md">
                          {bloc.centres} centres
                        </span>
                        <ChevronRight
                          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                            isSelected ? 'translate-x-0.5 text-[#003366]' : ''
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/network"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#003366] hover:bg-[#002244] text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
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
