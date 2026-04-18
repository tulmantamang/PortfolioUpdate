import React from 'react';
export default function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="card" aria-label={title ?? 'card'} style={{ padding: '1rem' }}>
      {title && <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>}
      {children}
    </div>
  );
}
