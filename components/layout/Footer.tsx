import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { aboutDBTA, provinces } from '@/content';

export function Footer() {
  return (
    <footer className="border-t border-[#e5e7eb] bg-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Image
              src="/images/logo.png"
              alt="Don Bosco Tech Africa"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <p className="text-sm text-[#6b7280] leading-relaxed max-w-xs">
              The continental coordinating body for Salesian TVET institutions across Africa and Madagascar — 119 centres, 35 nations.
            </p>
            <div className="space-y-1.5 text-sm text-[#6b7280]">
              <p>Applewood Adams, Ngong Road, Nairobi, Kenya</p>
              <a href="tel:+254782747500" className="block hover:text-[#003366] transition-colors">+254 782 747 500</a>
              <a href="mailto:dbta@dbtechafrica.org" className="block hover:text-[#003366] transition-colors">dbta@dbtechafrica.org</a>
            </div>
          </div>

          {/* Col 2: Organisation */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-[#111111] mb-4">Organisation</h4>
            <ul className="space-y-2.5 text-sm text-[#6b7280]">
              {[
                ['Who We Are', '/about/who-we-are'],
                ['History & Heritage', '/about/history'],
                ['Board of Directors', '/about/board'],
                ['P-TVET Provinces', '/about/p-tvet-network'],
                ['Governance', '/about/governance'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#003366] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Work */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-[#111111] mb-4">Work & Impact</h4>
            <ul className="space-y-2.5 text-sm text-[#6b7280]">
              {[
                ['Thematic Streams', '/what-we-do'],
                ['Projects', '/projects'],
                ['Impact & Tracer', '/impact'],
                ['Graduate Stories', '/stories'],
                ['Knowledge Hub', '/knowledge'],
                ['News', '/news'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#003366] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Portals */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-[#111111] mb-4">Digital Portals</h4>
            <ul className="space-y-2.5 text-sm text-[#6b7280]">
              {[
                ['Digital Library', 'https://www.digitallibrary.dbtechafrica.org/'],
                ['DBTVET Portal', 'https://tvet.dbtechafrica.org/'],
                ['Inserjeune Tracer', 'https://dbtechafricatracer.org/'],
                ['Staff Portal', 'https://office.dbtechafrica.org/'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#003366] transition-colors flex items-center gap-1"
                  >
                    {label}
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Provinces */}
        <div className="mt-12 pt-8 border-t border-[#f3f4f6]">
          <p className="text-xs text-[#9ca3af] font-semibold uppercase tracking-wider mb-3">
            15 Salesian Provinces
          </p>
          <div className="flex flex-wrap gap-2">
            {provinces.map((p) => (
              <Link
                key={p.code}
                href={`/network?province=${p.code}`}
                className="text-xs px-2.5 py-1 rounded-full border border-[#e5e7eb] text-[#6b7280] hover:border-[#003366] hover:text-[#003366] transition-colors"
              >
                <span className="font-bold">{p.code}</span> — {p.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#f3f4f6] py-5 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9ca3af]">
          <p>© {new Date().getFullYear()} Don Bosco Tech Africa (DBTA). All rights reserved.</p>
          <div className="flex items-center gap-5">
            {[['Privacy', '/privacy'], ['Terms', '/terms'], ['Accessibility', '/accessibility'], ['Contact', '/contact']].map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-[#111111] transition-colors">{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
