'use client';

import React, { useState } from 'react';
import {
  FiSend, FiMail, FiMapPin, FiLinkedin, FiGithub, FiCheckCircle, FiYoutube,
} from 'react-icons/fi';
import { api } from '../../lib/api';
import { PERSONAL_INFO } from '../../config/personal';


type FormData = { name: string; email: string; message: string };
type Status = 'idle' | 'loading' | 'success' | 'error' | 'invalid-email';


export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'invalid-email' || status === 'error') setStatus('idle');
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus('invalid-email');
      return;
    }


    setStatus('loading');

    try {
      await api.post('/contacts', form);
      setForm({ name: '', email: '', message: '' });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-container">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="section-tag mx-auto w-fit">Contact</div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
          Let&apos;s Work{' '}
          <span className="gradient-text">Together</span>
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto">
          Have an internship opportunity, a project idea, or just want to say
          hello? My inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-7">
        {/* ── Left: Contact info ───────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-4">
          {/* Info card */}
          <div className="glass-card p-5 border border-emerald-500/15 space-y-5">
            <h3 className="text-white font-semibold">Get In Touch</h3>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <FiMail size={15} className="text-emerald-400" />
              </div>
              <div>
                <div className="text-[10px] text-slate-600 uppercase tracking-wider mb-0.5">
                  Email
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-slate-300 text-sm hover:text-emerald-400 transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>

              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                <FiMapPin size={15} className="text-violet-400" />
              </div>
              <div>
                <div className="text-[10px] text-slate-600 uppercase tracking-wider mb-0.5">
                  Location
                </div>
                <span className="text-slate-300 text-sm">
                  {PERSONAL_INFO.location}
                </span>

              </div>
            </div>

            {/* Social links */}
            <div className="border-t border-white/[0.06] pt-4">
              <div className="text-[10px] text-slate-600 uppercase tracking-wider mb-3">
                Socials
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg glass-card border-white/10 text-slate-400 hover:text-white hover:border-white/20 text-sm transition-all"
                >
                  <FiGithub size={14} />
                  GitHub
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg glass-card border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 text-sm transition-all"
                >
                  <FiLinkedin size={14} />
                  LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg glass-card border-white/10 text-slate-400 hover:text-red-500 hover:border-red-500/30 text-sm transition-all"
                >
                  <FiYoutube size={14} />
                  YouTube
                </a>
              </div>

            </div>
          </div>

          {/* Availability card */}
          <div className="glass-card p-4 border border-emerald-500/20 bg-emerald-500/[0.04]">
            <div className="flex items-center gap-2 mb-2">
              <div className="availability-dot" />
              <span className="text-emerald-400 font-semibold text-sm">
                Currently Available
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Open for internship opportunities, part-time remote work, and
              freelance web projects — globally &amp; in Nepal.
            </p>
          </div>
        </div>

        {/* ── Right: Form ──────────────────────────────────────────── */}
        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="glass-card p-6 space-y-4 border border-white/[0.08]"
            noValidate
          >
            <h3 className="text-white font-semibold mb-1">Send a Message</h3>

            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[11px] text-slate-500 uppercase tracking-wider mb-1.5"
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tulman Tamang"
                  required
                  className="form-input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[11px] text-slate-500 uppercase tracking-wider mb-1.5"
                >
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="form-input"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-[11px] text-slate-500 uppercase tracking-wider mb-1.5"
              >
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project, opportunity, or just say hello..."
                required
                rows={5}
                className="form-input resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              id="contact-submit"
              disabled={status === 'loading' || status === 'success'}
              className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </span>
              ) : status === 'success' ? (
                <span className="flex items-center gap-2">
                  <FiCheckCircle size={16} />
                  Message Sent!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <FiSend size={15} />
                  Send Message
                </span>
              )}
            </button>

            {/* Feedback messages */}
            {status === 'success' && (
              <div
                role="status"
                className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm"
              >
                ✅ Thank you! I&apos;ll get back to you within 24 hours.
              </div>
            )}
            {status === 'invalid-email' && (
              <div
                role="alert"
                className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm"
              >
                ⚠️ Please enter a valid email address so I can reply to you.
              </div>
            )}
            {status === 'error' && (

              <div
                role="alert"
                className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
              >
                ❌ Failed to send. Please email me directly:{' '}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="underline hover:text-red-300"
                >
                  {PERSONAL_INFO.email}
                </a>

              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
