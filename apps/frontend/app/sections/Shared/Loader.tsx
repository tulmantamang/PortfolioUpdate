import React from 'react';

/**
 * Skeleton loader — shows animated shimmer cards while content loads.
 * Pass count to render multiple skeleton rows.
 */
export default function Loader({
  label = 'Loading...',
  count = 3,
  variant = 'card',
}: {
  label?: string;
  count?: number;
  variant?: 'card' | 'inline';
}) {
  if (variant === 'inline') {
    return (
      <div
        role="status"
        aria-label={label}
        className="flex items-center gap-2 text-slate-500 text-sm py-4"
      >
        <div className="w-4 h-4 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
        <span>{label}</span>
      </div>
    );
  }

  return (
    <div
      role="status"
      aria-label={label}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="glass-card p-5 space-y-3 animate-pulse"
          aria-hidden="true"
        >
          <div className="h-4 bg-white/10 rounded-md w-3/4" />
          <div className="h-3 bg-white/[0.06] rounded-md w-full" />
          <div className="h-3 bg-white/[0.06] rounded-md w-5/6" />
          <div className="flex gap-2 pt-1">
            <div className="h-5 bg-white/[0.05] rounded-full w-16" />
            <div className="h-5 bg-white/[0.05] rounded-full w-14" />
            <div className="h-5 bg-white/[0.05] rounded-full w-18" />
          </div>
        </div>
      ))}
    </div>
  );
}
