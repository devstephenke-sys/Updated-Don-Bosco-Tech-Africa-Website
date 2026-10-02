import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'orange' | 'green' | 'slate' | 'outline' | 'red';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({
  children,
  variant = 'blue',
  size = 'md',
  className,
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full transition-colors';

  const variantStyles = {
    blue: 'bg-blue-50 text-blue-700 border border-blue-200/60',
    orange: 'bg-orange-50 text-orange-700 border border-orange-200/60',
    green: 'bg-emerald-50 text-emerald-700 border border-emerald-200/60',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200',
    outline: 'border border-slate-300 text-slate-700 bg-white',
    red: 'bg-red-50 text-red-700 border border-red-200/60',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
  };

  return (
    <span className={twMerge(clsx(baseStyles, variantStyles[variant], sizeStyles[size], className))}>
      {children}
    </span>
  );
}
