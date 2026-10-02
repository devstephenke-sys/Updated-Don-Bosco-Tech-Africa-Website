import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { boardMembers } from '@/content/governance';
import { ShieldCheck, Mail, ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Board of Directors | Don Bosco Tech Africa',
  description: 'Meet the Board of Directors providing strategic governance and leadership to Don Bosco Tech Africa.',
};

export default function BoardPage() {
  return (
    <div>
      <PageHero
        title="Board of Directors"
        subtitle="The governing body steering continental strategy, fiduciary oversight, and institutional alignment across Don Bosco TVET networks in Africa."
        badge="Strategic Leadership"
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Board of Directors' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Executive & Non-Executive Directors"
            subtitle="Composed of Salesian Provincial Superiors and experienced educational leaders representing Africa-Madagascar region."
            badge="Institutional Governance"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {boardMembers.map((member) => (
              <div
                key={member.id}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden hover:shadow-xl hover:border-brand-navy/30 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-72 w-full bg-slate-200 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-1 rounded bg-brand-accent/90 text-white text-xs font-semibold uppercase tracking-wider mb-1">
                      {member.role}
                    </span>
                    <h3 className="text-xl font-bold leading-snug">
                      {member.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                      <ShieldCheck className="w-4 h-4 text-brand-accent" />
                      <span>{member.title}</span>
                      {member.province && (
                        <>
                          <span>•</span>
                          <span className="font-semibold text-brand-navy">{member.province}</span>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                    <span>DBTA Board</span>
                    <span className="text-brand-navy font-semibold">Africa-Madagascar</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Accountability Notice */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-slate-900">
                Coordinating Secretariat & P-TVET Structure
              </h3>
              <p className="text-slate-600 mt-2">
                Learn how the Board interacts with the Coordinating Office in Nairobi and the 15 Provincial TVET Offices (P-TVET) across Africa and Madagascar.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href="/about/governance"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-navy hover:bg-slate-800 text-white font-semibold transition-all shadow-sm"
              >
                Secretariat Structure <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about/p-tvet-network"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-all"
              >
                15 P-TVET Offices
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
