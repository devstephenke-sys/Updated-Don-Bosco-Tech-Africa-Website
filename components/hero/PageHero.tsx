import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from '../layout/Breadcrumbs';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  badge?: React.ReactNode;
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  badge,
  children,
}: PageHeroProps) {
  const displayBadge = badge || eyebrow;

  return (
    <div className="relative bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 overflow-hidden">
      {/* Decorative Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #003366 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

      <section className="relative py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            {displayBadge && (
              typeof displayBadge === 'string' ? (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[#D32F2F] text-xs font-bold tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                  <span>{displayBadge}</span>
                </div>
              ) : (
                <div>{displayBadge}</div>
              )
            )}

            <h1 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {title}
            </h1>

            {subtitle && (
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                {subtitle}
              </p>
            )}

            {children && <div className="pt-2">{children}</div>}
          </div>
        </div>
      </section>
    </div>
  );
}
