import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SectionHeaderProps {
  eyebrow?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  action?: React.ReactNode;
}

export function SectionHeader({
  eyebrow,
  badge,
  title,
  subtitle,
  align = 'center',
  className,
  action,
}: SectionHeaderProps) {
  const displayBadge = badge || eyebrow;
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={twMerge(clsx('flex flex-col mb-12 md:mb-16 max-w-3xl', alignClass, className))}>
      {displayBadge && (
        <span className="text-xs md:text-sm font-bold tracking-wider text-orange-600 uppercase mb-2 block">
          {displayBadge}
        </span>
      )}
      <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
