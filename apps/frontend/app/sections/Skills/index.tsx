import React from 'react';
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript,
  SiHtml5, SiCss3, SiTailwindcss, SiGit, SiGithub,
} from 'react-icons/si';
import { FiMonitor, FiServer, FiDatabase, FiTool } from 'react-icons/fi';

type Skill = { name: string; Icon: React.ElementType; color: string };

type SkillCategory = {
  id: string;
  label: string;
  HeaderIcon: React.ElementType;
  headerColor: string;
  borderColor: string;
  skills: Skill[];
};

const CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    HeaderIcon: FiMonitor,
    headerColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
    skills: [
      { name: 'React.js', Icon: SiReact, color: '#61dafb' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
      { name: 'HTML5', Icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', Icon: SiCss3, color: '#264de4' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38bdf8' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    HeaderIcon: FiServer,
    headerColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    skills: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#8cc84b' },
      { name: 'Express.js', Icon: SiExpress, color: '#cccccc' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    HeaderIcon: FiDatabase,
    headerColor: 'text-violet-400',
    borderColor: 'border-violet-500/20',
    skills: [
      { name: 'MongoDB', Icon: SiMongodb, color: '#4db33d' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    HeaderIcon: FiTool,
    headerColor: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    skills: [
      { name: 'Git', Icon: SiGit, color: '#f05032' },
      { name: 'GitHub', Icon: SiGithub, color: '#e0e0e0' },
    ],
  },
];

const LEARNING = [
  'TypeScript', 'Next.js 14', 'Docker', 'GraphQL', 'AWS Basics', 'Python', 'QA Automation',
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-container">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="section-tag mx-auto w-fit">Skills</div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
          My Technical{' '}
          <span className="gradient-text">Arsenal</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Technologies I use daily to design, build, and deploy full-stack web
          applications — from database to UI.
        </p>
      </div>

      {/* Skill category cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className={`glass-card p-5 border ${cat.borderColor}`}
          >
            {/* Category header */}
            <div className="flex items-center gap-2 mb-5">
              <cat.HeaderIcon size={15} className={cat.headerColor} />
              <h3
                className={`text-xs font-bold uppercase tracking-widest ${cat.headerColor}`}
              >
                {cat.label}
              </h3>
            </div>

            {/* Skills list */}
            <div className="space-y-3">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${skill.color}18` }}
                  >
                    <skill.Icon size={16} style={{ color: skill.color }} />
                  </div>
                  <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors duration-150">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Currently learning */}
      <div className="glass-card p-5 border border-violet-500/15">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-violet-400 text-xs font-bold uppercase tracking-widest">
            🚀 Currently Exploring
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {LEARNING.map((tech) => (
            <span key={tech} className="skill-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
