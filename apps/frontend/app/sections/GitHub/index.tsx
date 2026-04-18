'use client';

import React, { useEffect, useState } from 'react';
import { FiGithub, FiStar, FiGitBranch, FiCode, FiExternalLink } from 'react-icons/fi';
import Loader from '../Shared/Loader';

import { PERSONAL_INFO } from '../../config/personal';

// !! UPDATE THIS in config/personal.ts !!
const GITHUB_USERNAME = PERSONAL_INFO.githubUsername;

const LANG_COLORS: Record<string, string> = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3572a5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
};
const DEFAULT_COLOR = '#10b981';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export default function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
    )
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API returned ' + res.status);
        return res.json();
      })
      .then((data: Repo[]) => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section id="github" className="section-container">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="section-tag mx-auto w-fit">Open Source</div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
          Code I&apos;ve{' '}
          <span className="gradient-text">Open Sourced</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          My latest repositories on GitHub — feel free to explore, star, and
          fork anything useful.
        </p>
      </div>

      {/* GitHub profile banner */}
      <a
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noreferrer"
        className="glass-card flex items-center gap-4 p-4 mb-6 border border-white/[0.08] hover:border-emerald-500/30 transition-all group"
      >
        <FiGithub size={28} className="text-slate-300 group-hover:text-white transition-colors flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="text-white font-semibold text-sm">github.com/{GITHUB_USERNAME}</div>
          <div className="text-slate-500 text-xs mt-0.5">
            View my full profile, contribution graph and starred repos
          </div>
        </div>
        <FiExternalLink size={16} className="text-slate-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
      </a>

      {/* Loading skeleton */}
      {loading && <Loader count={6} variant="card" />}

      {/* Error state */}
      {error && !loading && (
        <div className="glass-card p-8 text-center border border-red-500/10">
          <FiGithub size={36} className="mx-auto mb-4 text-slate-600" />
          <p className="text-slate-400 text-sm">
            Couldn&apos;t load repos from GitHub API.{' '}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:underline"
            >
              Visit my GitHub directly →
            </a>
          </p>
        </div>
      )}

      {/* Repo cards */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-5 group flex flex-col gap-3 hover:border-emerald-500/30 hover:-translate-y-0.5"
            >
              {/* Repo name */}
              <div className="flex items-start gap-2">
                <FiCode
                  size={14}
                  className="text-emerald-400 flex-shrink-0 mt-0.5"
                />
                <h3 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors truncate leading-tight">
                  {repo.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 flex-1 min-h-[2rem]">
                {repo.description || 'No description provided.'}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-4 text-[11px] text-slate-500">
                {repo.language && (
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{
                        background:
                          LANG_COLORS[repo.language] ?? DEFAULT_COLOR,
                      }}
                    />
                    <span>{repo.language}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <FiStar size={11} />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiGitBranch size={11} />
                  <span>{repo.forks_count}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* CTA button */}
      <div className="text-center mt-8">
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          id="github-profile-cta"
          className="btn-primary inline-flex"
        >
          <FiGithub size={16} />
          View Full GitHub Profile
        </a>
      </div>
    </section>
  );
}
