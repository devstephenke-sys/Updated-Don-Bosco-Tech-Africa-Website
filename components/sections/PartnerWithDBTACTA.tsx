import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe2, GraduationCap, Handshake } from 'lucide-react';

const pathways = [
  {
    icon: Handshake,
    title: 'Institutional Partner',
    body: 'Co-design programmes with Salesian centres across 35 countries.',
    href: '/opportunities#partners',
    color: '#003366',
  },
  {
    icon: GraduationCap,
    title: 'Donor or Funder',
    body: 'Direct resources into green TVET, instructor training, or graduate tracking.',
    href: '/opportunities#funders',
    color: '#D32F2F',
  },
  {
    icon: Globe2,
    title: 'Policy Collaborator',
    body: 'Shape continental TVET standards alongside ministries and agencies.',
    href: '/opportunities#policy',
    color: '#2D7D46',
  },
];

export function PartnerWithDBTACTA() {
  return (
    <section
      className="py-24 md:py-32 bg-[#003366] relative overflow-hidden"
      id="partner-cta"
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D32F2F] opacity-[0.08] rounded-bl-full pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-[640px] mx-auto mb-14 reveal">
          <span className="text-xs md:text-sm font-bold tracking-widest text-[#D32F2F] uppercase block mb-4">
            GET INVOLVED
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            Partner With Don Bosco Tech Africa
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            Collaborate on green energy transitions, curriculum upgrades, tracer research, or youth skills development across 35 African countries.
          </p>
        </div>

        {/* Pathway cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {pathways.map((p, i) => {
            const Icon = p.icon;
            return (
              <Link
                key={i}
                href={p.href}
                className={`group reveal reveal-delay-${i + 1} block p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: p.color + '30', }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="font-bold text-white text-base mb-1.5 group-hover:text-white/90 transition-colors">
                  {p.title}
                </div>
                <div className="text-sm text-white/60 leading-relaxed">
                  {p.body}
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-white/50 group-hover:text-white/80 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Main CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
          >
            <span>Contact the Secretariat</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/opportunities"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-white/20 text-white hover:bg-white/10 font-semibold text-base transition-all duration-300 hover:-translate-y-0.5"
          >
            View Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
}
