import { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { provinces } from '@/content/provinces';
import { Network, Building2, MapPin, Globe, ExternalLink, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'P-TVET Network | Don Bosco Tech Africa',
  description: 'Explore the 15 Provincial TVET Offices (P-TVET) coordinating Don Bosco technical centres across Africa and Madagascar.',
};

export default function PTvetNetworkPage() {
  return (
    <div>
      <PageHero
        title="15 P-TVET Provincial Network"
        subtitle="The operational backbone of Don Bosco technical vocational education: 15 Salesian Provincial TVET offices coordinating 119 centres across 35 countries and Madagascar."
        badge="Continental Structure"
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'P-TVET Network' },
        ]}
      />

      {/* Explanatory Intro */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-brand-accent font-semibold text-sm uppercase tracking-wider">
                Provincial Governance
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                What is a P-TVET Office?
              </h2>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                A **Provincial Technical and Vocational Education and Training (P-TVET) Office** is the strategic coordinating body established by the Salesians of Don Bosco in each province. It serves as the bridge between the **DBTA Coordinating Office** in Nairobi and local TVET centres on the ground.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <h4 className="font-bold text-slate-900 text-sm">Curriculum Harmonisation</h4>
                  <p className="text-xs text-slate-600 mt-1">Ensures quality standards and competency-based training align with national labor markets.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <h4 className="font-bold text-slate-900 text-sm">Job Services (JSO) Coordination</h4>
                  <p className="text-xs text-slate-600 mt-1">Oversees tracer studies, internships, and industry partnerships across province centres.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <h4 className="font-bold text-slate-900 text-sm">Staff Capacity Building</h4>
                  <p className="text-xs text-slate-600 mt-1">Facilitates continuous technical and pedagogical upskilling for TVET instructors.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <h4 className="font-bold text-slate-900 text-sm">Green & Solar Integration</h4>
                  <p className="text-xs text-slate-600 mt-1">Drives institutional environmental policy and solar PV training infrastructure.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-brand-navy to-slate-900 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Network Snapshot</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-slate-300">Salesian Provinces</span>
                  <span className="font-bold text-brand-gold text-lg">15 Provinces</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-slate-300">Countries Covered</span>
                  <span className="font-bold text-brand-gold text-lg">35 Countries & Madagascar</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-slate-300">TVET Centres Managed</span>
                  <span className="font-bold text-brand-gold text-lg">119 Centres</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-slate-300">Coordination Headquarters</span>
                  <span className="font-bold text-white">Nairobi, Kenya</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  href="/network"
                  className="inline-flex items-center gap-2 text-brand-gold hover:text-white text-sm font-semibold transition-colors"
                >
                  Explore Interactive Map & Directory <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15 Provinces Directory Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The 15 Salesian Provinces of Africa-Madagascar"
            subtitle="Browse each province code, headquarter location, countries governed, and number of TVET centres."
            badge="Provincial Directory"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {provinces.map((prov) => (
              <div
                key={prov.code}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:shadow-lg hover:border-brand-navy/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-md bg-brand-navy text-white text-xs font-bold uppercase tracking-wider">
                      {prov.code}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                      <Building2 className="w-3.5 h-3.5" />
                      {prov.centreCount} Centres
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mt-2">
                    {prov.name}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                    <span>HQ: {prov.headquarters}</span>
                  </div>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-2">
                    {prov.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      Covered Countries ({prov.countries.length})
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prov.countries.map((c) => (
                        <span
                          key={c}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-medium"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Region: {prov.region}</span>
                  <Link
                    href={`/network?province=${prov.code}`}
                    className="inline-flex items-center gap-1 text-brand-navy font-semibold hover:text-brand-accent transition-colors"
                  >
                    View Centres <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
