import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '../globals.css';
import Providers from './providers';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { PERSONAL_INFO } from './config/personal';


// ── Fonts ─────────────────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
  display: 'swap',
});

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: `${PERSONAL_INFO.name} | Creative Developer`,
    template: `%s | ${PERSONAL_INFO.name}`,
  },

  description:
    'BCA Student & Full-Stack Developer from Nepal. Building modern web applications with React, Node.js, Express, and MongoDB. Open for internships, jobs, and freelance projects.',
  keywords: [
    'Tulman Tamang',
    'MERN Stack Developer',
    'Full Stack Developer Nepal',
    'React Developer Nepal',
    'BCA Tribhuvan University',
    'Node.js Developer',
    'MongoDB',
    'Web Developer Kathmandu',
    'Internship Nepal',
  ],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.github }],
  creator: PERSONAL_INFO.name,

  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    title: `${PERSONAL_INFO.name} | MERN Stack Developer`,
    description:
      `BCA Student & Full-Stack Developer from ${PERSONAL_INFO.location}, building real web solutions with the MERN stack.`,

  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.name} | MERN Stack Developer`,
    description: `BCA Student & Full-Stack Developer from ${PERSONAL_INFO.location}.`,
  },

  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#10b981',
  width: 'device-width',
  initialScale: 1,
};

// ── Root Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
