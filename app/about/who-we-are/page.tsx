import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/hero/PageHero';
import { aboutDBTA } from '@/content';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Award, Building2, Globe2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Who We Are',
  description: 'Detailed overview of Don Bosco Tech Africa identity, coordinating role, and continental TVET mission.',
};

export default function WhoWeArePage() {
  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      <PageHero
        eyebrow="Identity & Mandate"
        title="Who We Are"
        subtitle="The continental coordinating secretariat for Salesian Technical & Vocational Education across 35 African nations and Madagascar."
        breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Who We Are' }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              A Continental Anchor for Vocational Excellence
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Don Bosco Tech Africa is the coordinating body for the Don Bosco Technical Schools in the Africa-Madagascar region. We coordinate about 119 TVET centers spread over 35 countries in Africa and Madagascar.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We aim to empower our TVET centers so that they can deliver demand-driven and quality training to the marginalized young people who frequent our centers. Our continental model pairs technical craftsmanship with human values, ensuring that graduates enter the workforce not only as competent artisans but as responsible, ethical citizens.
            </p>

            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2 text-xs text-slate-700">
              <p className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>Institutional Headquarters</span>
              </p>
              <p>
                Applewood Adams, Ngong Road, Nairobi, Kenya. Phone: {aboutDBTA.headquarters.phone} · Email: {aboutDBTA.headquarters.email}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 aspect-4/3 bg-slate-100">
              <Image
                src="https://dbtechafrica.org/wp-content/uploads/2026/04/Empowering-Youth.png"
                alt="Don Bosco TVET youth empowerment in Africa"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </div>
        </div>

        {/* 3 Pillars of Continental Coordination */}
        <div className="pt-8 border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
            How DBTA Adds Value to TVET Centres
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">1</div>
              <h4 className="text-base font-bold text-slate-900">Curricular & Workshop Quality</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standardizing trade training curricula, conducting pedagogical workshops for instructors, and upgrading tools to modern industrial benchmarks.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">2</div>
              <h4 className="text-base font-bold text-slate-900">Job Placement Pathways</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operating Job Service Offices (JSOs) and the Inserjeune digital tracer to achieve over 57% direct job transition for graduating cohorts.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">3</div>
              <h4 className="text-base font-bold text-slate-900">Strategic Partnerships & Advocacy</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mobilizing donor consortiums, collaborating with African governments on RPL frameworks, and advancing the AU Continental TVET Strategy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
