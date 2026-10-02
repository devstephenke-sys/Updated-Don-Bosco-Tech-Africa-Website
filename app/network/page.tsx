import { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { NetworkExplorer } from '@/components/network/NetworkExplorer';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { Building2, Globe2, MapPin, Users, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Continental TVET Network | 119 Centres, 35 Countries | Don Bosco Tech Africa',
  description:
    'Explore the pan-African TVET network of Don Bosco Tech Africa covering 119 technical centres across 35 countries and Madagascar.',
};

export default function NetworkPage() {
  return (
    <div className="space-y-0">
      <PageHero
        title="Continental TVET Network"
        subtitle="Spanning 119 Technical and Vocational Training Centres across 35 African countries and Madagascar, organized under 15 Salesian Provinces (P-TVET)."
        badge="Pan-African Footprint"
        breadcrumbs={[{ label: 'Network' }]}
      />

      {/* Overview Stats Strip */}
      <section className="bg-[#003366] py-12 border-b border-white/10 text-white relative overflow-hidden">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="border-r border-white/10 last:border-0 reveal">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white">119</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-2 uppercase font-bold tracking-wider">
                TVET Centres
              </div>
            </div>
            <div className="border-r border-white/10 last:border-0 reveal reveal-delay-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white">35</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-2 uppercase font-bold tracking-wider">
                Countries & Madagascar
              </div>
            </div>
            <div className="border-r border-white/10 last:border-0 reveal reveal-delay-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white">15</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-2 uppercase font-bold tracking-wider">
                Salesian Provinces
              </div>
            </div>
            <div className="reveal reveal-delay-3">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white">45,000+</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-2 uppercase font-bold tracking-wider">
                Youth Trained Annually
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Explorer */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3 reveal">
            <span className="text-xs font-bold text-[#D32F2F] uppercase tracking-widest block">
              Search & Filter
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Interactive Network Explorer
            </h2>
            <p className="text-base text-slate-600">
              Search by country, province code, or filter by African geographic region to find centres and details.
            </p>
          </div>

          <div className="reveal">
            <NetworkExplorer />
          </div>
        </div>
      </section>

      {/* Regional Coordination Explanation */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6 reveal reveal-left">
              <span className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider block">
                Geographical Coverage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Five Dynamic Regional Blocs
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                To maximize regional synergy, language harmonization, and economic integration, Don Bosco Tech Africa groups its 15 provinces and 35 national territories into five regional blocs:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 card-lift">
                  <div className="flex items-start gap-3">
                    <Globe2 className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Eastern Africa (AFE, AET, TZA)</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Kenya, Uganda, Tanzania, Ethiopia, Eritrea, South Sudan, Sudan.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 card-lift">
                  <div className="flex items-start gap-3">
                    <Globe2 className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Central Africa (AFC, ACC, AGL)</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        DR Congo, Rwanda, Burundi, Cameroon, Congo, Gabon, Central African Republic, Chad, Equatorial Guinea.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 card-lift">
                  <div className="flex items-start gap-3">
                    <Globe2 className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Western Africa (AOS, AON, ANN, ATE)</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Ghana, Nigeria, Sierra Leone, Liberia, Senegal, Mali, Guinea, Côte d’Ivoire, Burkina Faso, Togo, Benin.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 card-lift">
                  <div className="flex items-start gap-3">
                    <Globe2 className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Southern Africa (ZMB, MOZ, AFM, ANG)</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Zambia, Zimbabwe, Malawi, Namibia, Mozambique, Angola, South Africa, Eswatini, Lesotho.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 card-lift">
                  <div className="flex items-start gap-3">
                    <Globe2 className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Madagascar & Indian Ocean (MDG, AFM)</h4>
                      <p className="text-xs text-slate-600 mt-1">Madagascar, Mauritius.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-50 text-slate-900 p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-slate-200 shadow-sm reveal reveal-right space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#003366] block">
                Quality Assurance
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Harmonized TVET Standards Across All Centres
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Regardless of whether a TVET centre is located in a capital city or a remote rural mission, every Don Bosco centre adheres to rigorous quality benchmarks:
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">
                    Accredited by national TVET regulatory authorities
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">
                    Equipped with standard industrial tools and safety gear
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">
                    Dedicated Job Service Officer (JSO) for placement & tracing
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">
                    Green TVET curriculum & renewable energy workshop integration
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">
                    Gender-sensitive facilities and female enrollment scholarships
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
