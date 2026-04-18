'use client';

import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';

type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  liveDemo: string;
  category: string;
  featured: boolean;
  gradient: string;
  accentColor: string;
};

// ── Static project data (update GitHub links to your real repos) ──────────────
const PROJECTS: Project[] = [
  {
    id: 'inv',
    title: 'Inventory Management System',
    description:
      'Full-stack MERN inventory system with product tracking, supplier management, sales/purchase orders, stock adjustments, and an analytics dashboard. Built as my BCA final-year college project.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/tulmantamang/inventory-management',
    liveDemo: '',
    category: 'Full Stack',
    featured: true,
    gradient: 'from-emerald-500/25 via-teal-500/10 to-transparent',
    accentColor: '#10b981',
  },
  {
    id: 'ecom',
    title: 'MERN E-Commerce Website',
    description:
      'Complete e-commerce platform with product catalog, cart management, user authentication, JWT-secured checkout, and an admin panel for product/order management.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe'],
    github: 'https://github.com/tulmantamang/mern-ecommerce',
    liveDemo: '',
    category: 'Full Stack',
    featured: true,
    gradient: 'from-violet-500/25 via-purple-500/10 to-transparent',
    accentColor: '#8b5cf6',
  },
  {
    id: 'portfolio',
    title: 'Developer Portfolio Website',
    description:
      'This very site — a clean Next.js 14 portfolio with an Express backend, MongoDB, blog management, GitHub integration, and Nodemailer contact system.',
    techStack: ['Next.js', 'TypeScript', 'Express', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/tulmantamang/portfolio',
    liveDemo: '#',
    category: 'Full Stack',
    featured: false,
    gradient: 'from-blue-500/25 via-cyan-500/10 to-transparent',
    accentColor: '#3b82f6',
  },
  {
    id: 'student',
    title: 'Student Dashboard App',
    description:
      'Academic tracking web app for students to manage assignments, grades, attendance, and course progress. Includes charts, schedule management, and push notifications.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Tailwind'],
    github: 'https://github.com/tulmantamang/student-dashboard',
    liveDemo: '',
    category: 'Full Stack',
    featured: false,
    gradient: 'from-amber-500/25 via-orange-500/10 to-transparent',
    accentColor: '#f59e0b',
  },
];

const CATEGORIES = ['All', 'Full Stack', 'Frontend'];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-container">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="section-tag mx-auto w-fit">Projects</div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
          Things I&apos;ve{' '}
          <span className="gradient-text">Built</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-7">
          Real projects, real code. Each one represents a problem I solved and
          a skill I gained — not just tutorial clones.
        </p>

        {/* Filter tabs */}
        <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/[0.07]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeFilter === cat
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                : 'text-slate-400 hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="glass-card overflow-hidden group flex flex-col"
          >
            {/* Card visual header */}
            <div
              className={`relative h-36 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}
            >
              {/* Subtle grid overlay */}
              <div className="absolute inset-0 bg-grid opacity-40" />

              {/* Category chip */}
              <div className="absolute bottom-3 left-4">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                  style={{
                    color: project.accentColor,
                    background: `${project.accentColor}18`,
                    border: `1px solid ${project.accentColor}40`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: project.accentColor }}
                  />
                  {project.category}
                </span>
              </div>

              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-amber-500/20 border border-amber-500/35 px-2 py-0.5 rounded-full text-amber-400 text-[11px] font-medium">
                  <FiStar size={10} />
                  Featured
                </div>
              )}
            </div>

            {/* Card body */}
            <div className="p-5 flex flex-col flex-1 space-y-3">
              <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors duration-200 leading-snug">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed flex-1 line-clamp-3">
                {project.description}
              </p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/[0.05] text-slate-400 border border-white/[0.07]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 pt-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-medium text-slate-300 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-all"
                >
                  <FiGithub size={14} />
                  GitHub
                </a>
                {project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target={project.liveDemo !== '#' ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-medium text-emerald-400 bg-emerald-500/[0.08] border border-emerald-500/[0.2] hover:bg-emerald-500/[0.15] transition-all"
                  >
                    <FiExternalLink size={14} />
                    Live Demo
                  </a>
                ) : (
                  <span className="flex-1 flex items-center justify-center py-2 rounded-lg text-sm text-slate-600 bg-white/[0.02] border border-white/[0.05] cursor-not-allowed">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="text-center mt-10">
        <a
          href="https://github.com/tulman-tamang"
          target="_blank"
          rel="noreferrer"
          id="projects-github-cta"
          className="btn-ghost inline-flex"
        >
          <FiGithub size={16} />
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}
