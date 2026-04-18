'use client';

import React, { useState, useEffect } from 'react';

// Lines that appear in the animated code window
const CODE_LINES = [
  { text: 'const developer = {', color: 'text-slate-200' },
  { text: '  name:', color: 'text-violet-400', value: ' "Tulman Tamang"', valueColor: 'text-emerald-400' },
  { text: '  role:', color: 'text-violet-400', value: ' "Creative Developer"', valueColor: 'text-emerald-400' },
  { text: '  stack:', color: 'text-violet-400', value: ' ["React", "Node.js", "MongoDB"]', valueColor: 'text-amber-400' },
  { text: '  education:', color: 'text-violet-400', value: ' "BCA @ TU Nepal"', valueColor: 'text-emerald-400' },
  { text: '  location:', color: 'text-violet-400', value: ' "Kathmandu 🇳🇵"', valueColor: 'text-emerald-400' },
  { text: '  status:', color: 'text-violet-400', value: ' "Open for Internship ✓"', valueColor: 'text-green-400' },
  { text: '};', color: 'text-slate-200' },
  { text: '', color: '' },
  { text: 'export default developer;', color: 'text-slate-500' },
];

/**
 * CodeWindow — replaces the spinning green box with a professional
 * animated terminal/code display that shows real developer info.
 * Lightweight: pure React + CSS, no Three.js.
 */
export default function CodeWindow() {
  const [visibleCount, setVisibleCount] = useState(0);

  // Reveal lines one by one with a stagger
  useEffect(() => {
    if (visibleCount >= CODE_LINES.length) return;
    const timer = setTimeout(() => setVisibleCount((n) => n + 1), 160);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <div className="w-full max-w-sm xl:max-w-md animate-float">
      <div
        className="glass-card overflow-hidden border border-white/[0.1]"
        style={{
          boxShadow:
            '0 0 0 1px rgba(16,185,129,0.08), 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(16,185,129,0.06)',
        }}
      >
        {/* ── Window title bar ───────────────────────────────────────── */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.07]">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
          </div>
          <span className="ml-2 text-slate-500 text-xs font-mono">
            developer.ts
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-500 text-[10px] font-mono">active</span>
          </div>
        </div>

        {/* ── Code content ────────────────────────────────────────────── */}
        <div className="p-5 font-mono text-[13px] leading-6 min-h-[288px]">
          <div className="text-slate-600 text-xs mb-3">
            {'// Portfolio — loaded successfully ✓'}
          </div>

          {CODE_LINES.map((line, i) => (
            <div
              key={i}
              className={`flex transition-all duration-200 ${i < visibleCount
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-1'
                }`}
            >
              <span className="text-slate-700 w-5 text-right mr-4 select-none text-xs leading-6 flex-shrink-0">
                {i + 1}
              </span>
              {line.value ? (
                <span>
                  <span className={line.color}>{line.text}</span>
                  <span className={line.valueColor}>{line.value}</span>
                  {/* Comma for object properties */}
                  {i > 0 && i < 7 && (
                    <span className="text-slate-400">,</span>
                  )}
                </span>
              ) : (
                <span className={line.color}>{line.text}</span>
              )}
            </div>
          ))}

          {/* Blinking cursor line */}
          <div className="flex mt-0.5">
            <span className="text-slate-700 w-5 text-right mr-4 select-none text-xs leading-6">
              {CODE_LINES.length + 1}
            </span>
            <span className="w-2 h-[18px] bg-emerald-400 animate-blink-caret mt-0.5" />
          </div>
        </div>

        {/* ── Status bar ──────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-4 py-2 bg-emerald-500/[0.08] border-t border-emerald-500/[0.15] text-[11px] font-mono">
          <span className="text-emerald-400">✓ Available for hire</span>
          <span className="text-slate-600">TypeScript · Nepal</span>
        </div>
      </div>
    </div>
  );
}
