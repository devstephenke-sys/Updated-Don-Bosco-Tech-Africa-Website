import React from 'react';

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
  align = 'left',
  className,
  action,
}: SectionHeaderProps) {
  const displayEyebrow = badge || eyebrow;

  return (
    <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 pb-6 border-b border-[#e5e7eb] ${className ?? ''}`}>
      <div className={align === 'center' ? 'text-center w-full' : ''}>
        {displayEyebrow && (
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#6b7280] mb-2">
            {displayEyebrow}
          </p>
        )}
        <h2 className="text-2xl md:text-3xl font-black text-[#111111] tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm text-[#6b7280] leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
