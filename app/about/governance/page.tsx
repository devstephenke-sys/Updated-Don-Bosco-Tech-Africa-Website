import { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/hero/PageHero';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { secretariatDepartments, executiveDirector } from '@/content/governance';
import { ShieldCheck, Building, Network, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Governance & Secretariat | Don Bosco Tech Africa',
  description: 'Organizational structure, coordinating office in Nairobi, and governance framework of Don Bosco Tech Africa.',
};

export default function GovernancePage() {
  return (
    <div>
      <PageHero
        title="Governance & Executive Secretariat"
        subtitle="The operational structure, executive leadership, and accountability frameworks coordinating continental TVET programmes from Nairobi across 35 African countries."
        badge="Institutional Structure"
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Governance' },
        ]}
      />

      {/* Organizational Hierarchy Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Three-Tier Governance Structure"
            subtitle="How strategic vision, regional coordination, and on-the-ground technical training align seamlessly."
            badge="Accountability & Delivery"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Level 1: Board */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <span className="px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider">
                  Tier 1: Strategic
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-4">
                  Board of Directors
                </h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  The governing body composed of Salesian Provincial Superiors and regional education authorities. Provides policy direction, fiduciary oversight, and continental strategy approval.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>Constitutional oversight & legal compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>Annual continental budget & audit signoff</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>Strategic plan & thematic prioritisation</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link
                  href="/about/board"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy hover:text-brand-accent transition-colors"
                >
                  Meet the Board <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Level 2: Executive Secretariat */}
            <div className="bg-white border-2 border-brand-accent/50 rounded-2xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-accent text-white px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-bl-xl">
                Executive Arm
              </div>
              <div>
                <span className="px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-wider">
                  Tier 2: Operational
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-4">
                  Coordinating Secretariat
                </h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  Headquartered at Applewood Adams in Nairobi, Kenya. Led by the Executive Director, managing continental initiatives, M&E, donor reporting, and knowledge dissemination.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>Cross-border project execution (Solar, RPL, JSO)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>International development partner liaisons</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>Digital ecosystem and TVET MIS management</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <span className="text-xs font-semibold text-brand-accent">Nairobi Coordinating Office</span>
              </div>
            </div>

            {/* Level 3: Provincial Network */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <span className="px-3 py-1 rounded-full bg-brand-gold/20 text-amber-900 text-xs font-bold uppercase tracking-wider">
                  Tier 3: Implementation
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-4">
                  15 P-TVET Offices & 119 Centres
                </h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  Provincial TVET Coordinators and TVET Centre Principals delivering training, industry linkages, career guidance, and student job placements in 35 countries.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>Direct student training & workshop execution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>Local employer MoUs & apprenticeship placement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>Inserjeune graduate tracing and job services</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link
                  href="/about/p-tvet-network"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy hover:text-brand-accent transition-colors"
                >
                  View 15 P-TVET Offices <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secretariat Departments */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Coordinating Office Departments"
            subtitle="The specialized directorates powering continental TVET excellence, research, and institutional sustainability."
            badge="Secretariat Units"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {secretariatDepartments.map((dept) => (
              <div
                key={dept.name}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-brand-navy/5 text-brand-navy flex items-center justify-center font-bold text-sm mb-4">
                    <Building className="w-5 h-5 text-brand-accent" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{dept.name}</h4>
                  <p className="text-xs font-semibold text-brand-accent mt-1">Lead: {dept.lead}</p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {dept.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400">
                  DBTA Coordinating Secretariat
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
