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
    <div className="bg-slate-50/70 border-b border-slate-200/80">
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            {displayBadge && (
              typeof displayBadge === 'string' ? (
                <span className="inline-block text-xs font-bold tracking-wider text-blue-800 uppercase">
                  {displayBadge}
                </span>
              ) : (
                <div>{displayBadge}</div>
              )
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {subtitle}
              </p>
            )}

            {children && <div className="pt-3">{children}</div>}
          </div>
        </div>
      </section>
    </div>
  );
}
