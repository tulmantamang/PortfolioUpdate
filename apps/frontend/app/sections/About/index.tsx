import React from 'react';
import { FiMapPin, FiBook, FiCode, FiUsers } from 'react-icons/fi';
import { PERSONAL_INFO } from '../../config/personal';


const STATS = [
  { label: 'Projects Built', value: '4+', icon: FiCode },
  { label: 'Technologies', value: '10+', icon: FiBook },
  { label: 'Experience (mo.)', value: '12+', icon: FiUsers },
  { label: 'Based In', value: PERSONAL_INFO.location, icon: FiMapPin },
];


export default function AboutSection() {
  return (
    <section id="about" className="section-container">
      <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-center">
        {/* ── Photo / visual ─────────────────────────────────────────── */}
        <div className="flex justify-center lg:w-2/5">
          <div className="relative">
            {/* Avatar photo */}
            <div
              className="w-60 h-60 sm:w-72 sm:h-72 rounded-2xl overflow-hidden glass-card border-emerald-500/20 relative"
              style={{
                boxShadow:
                  '0 0 0 1px rgba(16,185,129,0.15), 0 20px 50px rgba(0,0,0,0.4)',
              }}
            >
              <img 
                src="/profile.jpg" 
                alt="Tulman Tamang" 
                className="w-full h-full object-cover bg-slate-800"
              />
            </div>

            {/* Floating code badge */}
            <div className="absolute -bottom-3 -right-4 glass-card px-3 py-2 rounded-xl border border-emerald-500/25 shadow-lg">
              <span className="text-emerald-400 text-sm font-mono">
                {'<developer />'}
              </span>
            </div>
          </div>
        </div>

        {/* ── Content ────────────────────────────────────────────────── */}
        <div className="lg:w-3/5 space-y-6">
          <div>
            <div className="section-tag">About Me</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1 mb-4 leading-tight">
              Turning Ideas Into{' '}
              <span className="gradient-text">Real Products</span>
            </h2>

            <div className="space-y-3 text-slate-400 leading-relaxed">
              <p>
                I&apos;m <span className="text-white font-medium">Tulman Tamang</span>,
                a BCA student at{' '}
                <span className="text-slate-200">Tribhuvan University, Nepal</span>{' '}
                with a genuine passion for building complete, production-quality
                web applications — not just tutorials and demos.
              </p>
              <p>
                My stack of choice is MERN: React on the frontend for fast,
                interactive UIs; Node.js + Express on the backend for clean
                REST APIs; MongoDB for flexible, document-based data. I care
                about code quality, clean architecture, and shipping things
                that actually work.
              </p>
              <p>
                Currently seeking my first{' '}
                <span className="text-emerald-400 font-medium">
                  internship opportunity
                </span>{' '}
                — ready to contribute from day one, learn fast, and grow with a
                team.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-4 text-center group hover:border-emerald-500/30"
              >
                <stat.icon
                  size={18}
                  className="text-emerald-400 mx-auto mb-2 group-hover:scale-110 transition-transform"
                />
                <div className="text-lg font-bold text-white">{stat.value}</div>
                <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download

              id="about-download-resume"
              className="btn-primary"
            >
              Download Resume
            </a>
            <a href="#contact" id="about-contact" className="btn-ghost">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
