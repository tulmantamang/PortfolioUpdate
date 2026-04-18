'use client';

import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiCode, FiYoutube } from 'react-icons/fi';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { PERSONAL_INFO } from '../../config/personal';


// Lazy-load the code window (removes risk of SSR issues with animations)
const CodeWindow = dynamic(() => import('./HeroScene'), { ssr: false });

const TYPING_TITLES = [
  'Creative Developer',
  'Full-Stack Engineer',
  'React Developer',
  'Web App Builder',
  'Open Source Enthusiast',
];


export default function HeroSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Typewriter effect
  useEffect(() => {
    const fullText = TYPING_TITLES[currentIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < fullText.length) {
      timeout = setTimeout(
        () => setDisplayText(fullText.slice(0, displayText.length + 1)),
        75
      );
    } else if (!isDeleting && displayText.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(
        () => setDisplayText(displayText.slice(0, -1)),
        45
      );
    } else {
      setIsDeleting(false);
      setCurrentIdx((i) => (i + 1) % TYPING_TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIdx]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 -left-10 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(16,185,129,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="section-container py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* ── Left: Content ──────────────────────────────────────────────── */}
        <div className="space-y-6 animate-fade-up">
          {/* Availability badge */}
          <div className="availability-badge w-fit">
            <div className="availability-dot" />
            <span>Open for Internship &amp; Freelance</span>
          </div>

          {/* Name */}
          <div>
            <p className="text-slate-500 font-mono text-sm mb-2 tracking-wider">
              Hello, World! 👋 I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Tulman{' '}
              <span className="gradient-text">Tamang</span>
            </h1>
          </div>

          {/* Dynamic typewriter role */}
          <div className="flex items-center text-lg sm:text-xl font-medium text-slate-300 h-8">
            <span className="text-emerald-400 font-mono mr-2 select-none">{'>'}</span>
            <span>{displayText}</span>
            <span className="ml-0.5 w-[2px] h-5 bg-emerald-400 animate-blink-caret" />
          </div>

          {/* Bio */}
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-[480px]">
            BCA student at{' '}
            <span className="text-slate-200">Tribhuvan University, Nepal</span>{' '}
            — building real-world web apps with the{' '}
            <span className="text-slate-200">MERN stack</span>. Clean code,
            fast delivery, genuine impact.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <a href="#projects" id="hero-view-projects" className="btn-primary">
              <FiCode size={16} />
              View Projects
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download
              id="hero-download-cv"
              className="relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-emerald-500/10 px-6 font-medium text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all gap-2"
              onClick={() => {
                // Mock Analytics Tracking
                console.log('Analytics Event: Resume Downloaded');
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'download_resume', {
                    event_category: 'engagement',
                    event_label: 'hero_section',
                  });
                }
              }}
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload size={16} />
                <span className="relative z-10">Download CV</span>
              </motion.div>
            </a>

            <a href="#contact" id="hero-contact" className="btn-ghost">
              Contact Me
              <FiArrowRight size={15} />
            </a>
          </div>

          {/* Social + location */}
          <div className="flex items-center gap-4 pt-1">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-500 hover:text-white transition-colors duration-200"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 hover:text-blue-400 transition-colors duration-200"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href={PERSONAL_INFO.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="text-slate-500 hover:text-red-500 transition-colors duration-200"
            >
              <FiYoutube size={20} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="text-slate-500 hover:text-emerald-400 transition-colors duration-200"
            >
              <FiMail size={20} />
            </a>
            <div className="w-px h-4 bg-white/10" />
            <span className="text-slate-600 text-sm">{PERSONAL_INFO.location}</span>

          </div>
        </div>

        {/* ── Right: Code window ─────────────────────────────────────────── */}
        <div className="hidden lg:flex justify-center items-center">
          <CodeWindow />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
        onClick={() => scrollToSection('#about')}
      >
        <span className="text-slate-500 text-[10px] font-mono tracking-[0.2em] uppercase group-hover:text-emerald-400 transition-colors">
          Scroll Down
        </span>
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1 group-hover:border-emerald-500/50 transition-colors">
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
          />
        </div>
      </motion.div>

    </section>
  );
}
