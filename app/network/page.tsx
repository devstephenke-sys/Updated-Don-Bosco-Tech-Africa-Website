import { Metadata } from 'next';
import { PageHero } from '@/components/hero/PageHero';
import { NetworkExplorer } from '@/components/network/NetworkExplorer';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { Building2, Globe2, MapPin, Users, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Continental TVET Network | 119 Centres, 35 Countries | Don Bosco Tech Africa',
  description: 'Explore the pan-African TVET network of Don Bosco Tech Africa covering 119 technical centres across 35 countries and Madagascar.',
};

export default function NetworkPage() {
  return (
    <div>
      <PageHero
        title="Continental TVET Network"
        subtitle="Spanning 119 Technical and Vocational Training Centres across 35 African countries and Madagascar, organized under 15 Salesian Provinces (P-TVET)."
        badge="Pan-African Footprint"
        breadcrumbs={[
          { label: 'Network' },
        ]}
      />

      {/* Overview Stats Strip */}
      <section className="bg-brand-navy py-10 border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r border-white/10 last:border-0">
              <div className="text-3xl sm:text-4xl font-black text-brand-gold">119</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 uppercase font-semibold">TVET Centres</div>
            </div>
            <div className="border-r border-white/10 last:border-0">
              <div className="text-3xl sm:text-4xl font-black text-brand-gold">35</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 uppercase font-semibold">Countries & Madagascar</div>
            </div>
            <div className="border-r border-white/10 last:border-0">
              <div className="text-3xl sm:text-4xl font-black text-brand-gold">15</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 uppercase font-semibold">Salesian Provinces (P-TVET)</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-brand-gold">45,000+</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 uppercase font-semibold">Youth Trained Annually</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Explorer */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Interactive Network Explorer"
            subtitle="Search by country, province code, or filter by African geographic region."
            badge="Search & Filter"
            align="center"
          />

          <div className="mt-10">
            <NetworkExplorer />
          </div>
        </div>
      </section>

      {/* Regional Coordination Explanation */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-brand-accent font-bold text-xs uppercase tracking-wider">
                Geographical Coverage
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Five Dynamic Regional Blocks
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                To maximize regional synergy, language harmonization, and economic integration, Don Bosco Tech Africa groups its 15 provinces and 35 national territories into five regional blocs:
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                  <Globe2 className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Eastern Africa (AFE, AET, TZA)</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Kenya, Uganda, Tanzania, Ethiopia, Eritrea, South Sudan, Sudan.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                  <Globe2 className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Central Africa (AFC, ACC, AGL)</h4>
                    <p className="text-xs text-slate-600 mt-0.5">DR Congo, Rwanda, Burundi, Cameroon, Congo, Gabon, Central African Republic, Chad, Equatorial Guinea.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                  <Globe2 className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Western Africa (AOS, AON, ANN, ATE)</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Ghana, Nigeria, Sierra Leone, Liberia, Senegal, Mali, Guinea, Côte d’Ivoire, Burkina Faso, Togo, Benin.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                  <Globe2 className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Southern Africa (ZMB, MOZ, AFM, ANG)</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Zambia, Zimbabwe, Malawi, Namibia, Mozambique, Angola, South Africa, Eswatini, Lesotho.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                  <Globe2 className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Madagascar & Indian Ocean (MDG, AFM)</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Madagascar, Mauritius.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-900 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  Quality Assurance
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  Harmonized TVET Standards Across All Centres
                </h3>
                <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                  Regardless of whether a TVET centre is located in a capital city or a remote rural mission, every Don Bosco centre adheres to rigorous quality benchmarks:
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200">Accredited by national TVET regulatory authorities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200">Equipped with standard industrial tools and safety gear</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200">Dedicated Job Service Officer (JSO) for placement & tracing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200">Green TVET curriculum & renewable energy workshop integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200">Gender-sensitive facilities and female enrollment scholarships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
