import React from 'react';

type BadgeVariant = 'emerald' | 'violet' | 'amber' | 'blue' | 'default';

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  emerald: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400',
  violet: 'bg-violet-500/10 border-violet-500/25 text-violet-400',
  amber: 'bg-amber-500/10 border-amber-500/25 text-amber-400',
  blue: 'bg-blue-500/10 border-blue-500/25 text-blue-400',
  default: 'bg-white/[0.05] border-white/10 text-slate-400',
};

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
