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
  return (
    <div>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-14 md:py-20 border-b border-slate-800">
        {/* Ambient subtle glow */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            {badge ? (
              <div>{badge}</div>
            ) : eyebrow ? (
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider text-orange-400 uppercase">
                {eyebrow}
              </span>
            ) : null}

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
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
