'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  HiHome, HiUser, HiMail, HiOutlineMenuAlt3, HiX, HiArrowUp, HiCode, HiPlus, HiExternalLink,
} from 'react-icons/hi';
import { HiWrenchScrewdriver, HiBriefcase } from 'react-icons/hi2';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../config/personal';


// ── Section map ───────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: 'hero',     label: 'Home',     Icon: HiHome,              href: '#hero' },
  { id: 'about',    label: 'About',    Icon: HiUser,              href: '#about' },
  { id: 'skills',   label: 'Skills',   Icon: HiWrenchScrewdriver, href: '#skills' },
  { id: 'projects', label: 'Projects', Icon: HiBriefcase,         href: '#projects' },
  { id: 'github',   label: 'GitHub',   Icon: HiCode,              href: '#github' },
  { id: 'contact',  label: 'Contact',  Icon: HiMail,              href: '#contact' },
];

// ── Smooth scroll helper ──────────────────────────────────────────────────────
function scrollToSection(href: string) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Nav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [quickMenuOpen, setQuickMenuOpen] = useState(false);

  const [showBackToTop, setShowBackToTop] = useState(false);
  const quickMenuRef = useRef<HTMLDivElement>(null);
  const visibilityMap = useRef<Record<string, number>>({});

  // ── Handle outside click to close quick menu ────────────────────────────

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (quickMenuRef.current && !quickMenuRef.current.contains(e.target as Node)) {
        setQuickMenuOpen(false);
      }
    };
    if (quickMenuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [quickMenuOpen]);

  // ── IntersectionObserver: track active section ────────────────────────────

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            visibilityMap.current[id] = entry.intersectionRatio;
          });

          const best = Object.entries(visibilityMap.current).reduce(
            (acc, [k, v]) => (v > acc[1] ? [k, v] : acc),
            ['hero', 0]
          );

          if (best[1] > 0.1) {
            setActiveSection(best[0]);
          }
        },
        { 
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0], 
          rootMargin: '-40% 0px -40% 0px' 
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Scroll: handle Back to Top visibility ───────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          DESKTOP: Vertical Dot Navigation (Right)
      ════════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-6">
        {NAV_ITEMS.map(({ id, label, href }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(href)}
              className="group relative flex items-center justify-end"
              aria-label={`Scroll to ${label}`}
            >
              {/* Tooltip */}
              <span className={`
                absolute right-8 px-2 py-1 rounded bg-white/10 backdrop-blur-md 
                border border-white/10 text-[10px] uppercase tracking-widest text-white
                transition-all duration-300 opacity-0 -translate-x-2 pointer-events-none
                group-hover:opacity-100 group-hover:translate-x-0
                ${isActive ? 'text-emerald-400 border-emerald-500/20' : ''}
              `}>
                {label}
              </span>
              {/* Dot */}
              <div className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${isActive 
                  ? 'bg-emerald-500 w-3 h-3 shadow-[0_0_12px_rgba(16,185,129,0.8)]' 
                  : 'bg-white/20 group-hover:bg-white/40'
                }
              `} />
            </button>
          );
        })}
      </div>



      {/* ════════════════════════════════════════════════════════════════════
          DESKTOP: Quick Menu Popover (Bottom Right)
      ════════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block fixed bottom-24 right-8 z-40" ref={quickMenuRef}>
        <AnimatePresence>
          {quickMenuOpen && (
            /* @ts-ignore */
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-full right-0 mb-4 w-48 bg-[#161b30] border border-white/10 
                         rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
            >
              <div className="p-2 flex flex-col gap-1">
                {[
                  { label: 'GitHub', href: PERSONAL_INFO.github, color: 'hover:text-white' },
                  { label: 'LinkedIn', href: PERSONAL_INFO.linkedin, color: 'hover:text-blue-400' },
                  { label: 'YouTube', href: PERSONAL_INFO.youtube, color: 'hover:text-red-500' },
                  { label: 'Email Me', href: `mailto:${PERSONAL_INFO.email}`, color: 'hover:text-emerald-400' },
                  { label: 'Download CV', href: PERSONAL_INFO.resumeUrl, color: 'hover:text-emerald-400', isDownload: true },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    download={item.isDownload}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-medium 
                               text-slate-400 transition-all ${item.color} hover:bg-white/5`}
                  >
                    {item.label}
                    <HiExternalLink size={12} className="opacity-50" />
                  </a>
                ))}

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* @ts-ignore */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setQuickMenuOpen(!quickMenuOpen)}
          className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300
                     ${quickMenuOpen ? 'bg-white text-[#0a0f1e] rotate-45' : 'bg-white/5 text-white backdrop-blur-xl border border-white/10'}`}
          aria-label="Toggle Quick Menu"
        >
          <HiPlus size={24} />
        </motion.button>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          DESKTOP: Back to Top Button (Bottom Right)
      ════════════════════════════════════════════════════════════════════ */}

      <AnimatePresence>
        {showBackToTop && (
          /* @ts-ignore */
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hidden lg:flex fixed bottom-8 right-8 z-40 w-12 h-12 items-center justify-center
                       bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-500/20
                       hover:bg-emerald-400 transition-all duration-300 hover:-translate-y-1"
            aria-label="Back to Top"
          >
            <HiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════════════════════════════════════
          MOBILE: Bottom Floating Tab Bar (Keeping existing refined version)
      ════════════════════════════════════════════════════════════════════ */}
      <nav
        role="navigation"
        aria-label="Mobile navigation"
        className="
          lg:hidden
          fixed bottom-4 left-1/2 -translate-x-1/2 z-50
          flex items-center gap-1
          px-3 py-2.5
          bg-[#0d1226]/90 backdrop-blur-2xl
          border border-white/[0.10]
          rounded-2xl
          shadow-[0_8px_32px_rgba(0,0,0,0.6)]
          transition-all duration-300
        "
        style={{ minWidth: 'min(340px, calc(100vw - 2rem))' }}
      >
        {NAV_ITEMS.map(({ id, label, Icon, href }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(href)}
              aria-label={`Go to ${label}`}
              aria-current={isActive ? 'page' : undefined}
              className={`
                relative flex flex-col items-center justify-center gap-1
                flex-1 py-1.5 px-1 rounded-xl
                transition-all duration-250 ease-out
                ${isActive ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'}
              `}
            >
              <span className={`
                relative flex items-center justify-center w-10 h-7 rounded-xl
                transition-all duration-250
                ${isActive ? 'bg-emerald-500/15' : ''}
              `}>
                <Icon size={isActive ? 20 : 18} />
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </span>
              <span className={`text-[10px] font-medium leading-none tracking-wide transition-all duration-200 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
