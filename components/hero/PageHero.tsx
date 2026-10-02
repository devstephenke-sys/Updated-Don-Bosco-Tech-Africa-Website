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
  const displayEyebrow = (typeof badge === 'string' ? badge : null) || eyebrow;

  return (
    <div className="border-b border-[#e5e7eb] bg-white">
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            {displayEyebrow && (
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#6b7280] mb-3">
                {displayEyebrow}
              </p>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight leading-[1.1]">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-4 text-base sm:text-lg text-[#4b5563] leading-relaxed font-normal">
                {subtitle}
              </p>
            )}

            {children && <div className="pt-4">{children}</div>}
          </div>
        </div>
      </section>
    </div>
  );
}
