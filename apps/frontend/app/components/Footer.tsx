import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiYoutube } from 'react-icons/fi';
import { PERSONAL_INFO } from '../config/personal';


const QUICK_LINKS = ['About', 'Skills', 'Projects', 'GitHub', 'Contact'];

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: PERSONAL_INFO.github,
    icon: FiGithub,
    hoverColor: 'hover:text-white',
  },
  {
    label: 'LinkedIn',
    href: PERSONAL_INFO.linkedin,
    icon: FiLinkedin,
    hoverColor: 'hover:text-blue-400',
  },
  {
    label: 'YouTube',
    href: PERSONAL_INFO.youtube,
    icon: FiYoutube,
    hoverColor: 'hover:text-red-500',
  },
  {
    label: 'Email',
    href: `mailto:${PERSONAL_INFO.email}`,
    icon: FiMail,
    hoverColor: 'hover:text-emerald-400',
  },
];


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-sm font-bold text-white">
                T
              </span>
              <span className="text-white font-bold">{PERSONAL_INFO.name}</span>

            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              BCA Student & Creative Developer from Nepal, building modern
              web applications that solve real-world problems.
            </p>

            <div className="flex items-center gap-3 mt-5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className={`w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-400 ${s.hoverColor} transition-colors`}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-slate-200 font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase()}`}
                    className="text-slate-400 hover:text-emerald-400 text-sm transition-colors flex items-center gap-1 group"
                  >
                    <span>{label}</span>
                    <FiArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-200 font-semibold text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-slate-600 uppercase tracking-wider mb-1">
                  Email
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-slate-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>

              </div>
              <div>
                <div className="text-xs text-slate-600 uppercase tracking-wider mb-1">
                  Location
                </div>
                <span className="text-slate-400 text-sm">
                  {PERSONAL_INFO.location}
                </span>

              </div>
              <div className="availability-badge !text-xs w-fit mt-2">
                <div className="availability-dot !w-1.5 !h-1.5" />
                Open for Internship
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-sm">
            © {year} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <p className="text-slate-600 text-xs">
            Built with Next.js 14 · Express · MongoDB · ❤️ Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
