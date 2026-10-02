import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { aboutDBTA } from '@/content';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'About Don Bosco Tech Africa (DBTA)',
  description:
    'Learn about Don Bosco Tech Africa (DBTA), the continental coordinating body for 119 Salesian TVET institutions across 35 African countries and Madagascar.',
};

export default function AboutPage() {
  return (
    <div className="bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="Institutional Profile"
        title="About Don Bosco Tech Africa"
        subtitle="Uniting 119 TVET institutions across 35 African countries to deliver market-driven, dignifying technical education for marginalized youth."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* 2. Main Narrative & Identity */}
      <section className="py-20 md:py-24 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  Continental Mandate
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                  A Continental Network Empowering African Youth
                </h2>
              </div>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                Don Bosco Tech Africa (DBTA) is the coordinating body for all Don Bosco Technical and Vocational
                Education and Training (TVET) institutions across the Africa-Madagascar region.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Operating under the Salesian philosophy of holistic education and youth accompaniment, DBTA unites
                15 Salesian Provinces to standardize vocational curricula, modernize workshop technologies, implement
                Quality Management Systems (QMS), and bridge the critical transition between vocational training and
                gainful employment through Job Service Offices (JSOs).
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-2 border border-neutral-200 divide-x divide-neutral-200 pt-0">
                <div className="p-6">
                  <span className="text-4xl font-bold font-mono text-neutral-900 block">119</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 mt-1 block">TVET Centres</span>
                </div>
                <div className="p-6">
                  <span className="text-4xl font-bold font-mono text-neutral-900 block">35</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 mt-1 block">African Countries</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[4/3] w-full border border-neutral-200 bg-neutral-100 overflow-hidden">
                <Image
                  src="https://dbtechafrica.org/wp-content/uploads/2026/04/Quality-Education-Innovation.png"
                  alt="Don Bosco TVET Workshop in Africa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>
              <p className="text-xs text-neutral-500 font-mono">
                Practical workshop instruction at a Salesian vocational training institute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-20 md:py-24 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-200 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            <div className="p-8 sm:p-12 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                Long-Term Vision
              </span>
              <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">Our Vision</h3>
              <p className="text-base text-neutral-600 leading-relaxed italic border-l-2 border-neutral-300 pl-4">
                "{aboutDBTA.vision}"
              </p>
            </div>

            <div className="p-8 sm:p-12 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                Continental Mission
              </span>
              <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">Our Mission</h3>
              <p className="text-base text-neutral-600 leading-relaxed italic border-l-2 border-neutral-300 pl-4">
                "{aboutDBTA.mission}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 md:py-24 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Principles"
            title="Institutional Core Values"
            subtitle="The foundational ethics guiding curriculum design, student accompaniment, and institutional governance across Africa."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-neutral-200 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
            {aboutDBTA.coreValues.map((val, idx) => (
              <div key={idx} className="p-8 hover:bg-neutral-50/50 transition-colors space-y-2">
                <span className="text-xs font-mono text-neutral-400 block">0{idx + 1}</span>
                <h3 className="text-base font-bold text-neutral-900 tracking-tight">{val.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Governance & Structure Links */}
      <section className="py-20 md:py-24 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-2 mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              Governance & Structure
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Explore Our Organizational Framework
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-neutral-200 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
            <Link
              href="/about/history"
              className="p-8 hover:bg-neutral-50/50 transition-colors space-y-2 group block"
            >
              <span className="text-xs font-mono text-neutral-400 block">01</span>
              <p className="text-base font-bold text-neutral-900 group-hover:text-[#003366] flex items-center justify-between">
                <span>Our History</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900" />
              </p>
              <p className="text-xs text-neutral-500 leading-relaxed">Origins & continental development milestones</p>
            </Link>

            <Link
              href="/about/board"
              className="p-8 hover:bg-neutral-50/50 transition-colors space-y-2 group block"
            >
              <span className="text-xs font-mono text-neutral-400 block">02</span>
              <p className="text-base font-bold text-neutral-900 group-hover:text-[#003366] flex items-center justify-between">
                <span>DBTA Board</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900" />
              </p>
              <p className="text-xs text-neutral-500 leading-relaxed">Board of Directors and governance team</p>
            </Link>

            <Link
              href="/about/p-tvet-network"
              className="p-8 hover:bg-neutral-50/50 transition-colors space-y-2 group block"
            >
              <span className="text-xs font-mono text-neutral-400 block">03</span>
              <p className="text-base font-bold text-neutral-900 group-hover:text-[#003366] flex items-center justify-between">
                <span>P-TVET Offices</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900" />
              </p>
              <p className="text-xs text-neutral-500 leading-relaxed">15 Provincial TVET offices coordinating 119 centres</p>
            </Link>

            <Link
              href="/about/governance"
              className="p-8 hover:bg-neutral-50/50 transition-colors space-y-2 group block"
            >
              <span className="text-xs font-mono text-neutral-400 block">04</span>
              <p className="text-base font-bold text-neutral-900 group-hover:text-[#003366] flex items-center justify-between">
                <span>Secretariat</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900" />
              </p>
              <p className="text-xs text-neutral-500 leading-relaxed">Executive team & operations in Nairobi</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
