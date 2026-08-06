import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Ujjwal's Digital Sanctuary & Operating System — Built purely <strong>for the love of the game.</strong>
        </p>
        <div style={{ display: 'flex', gap: '1.2rem', fontSize: '0.85rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button onClick={() => onNavigate('projects')} style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer' }}>Projects</button>
          <button onClick={() => onNavigate('media')} style={{ background: 'none', border: 'none', color: 'var(--accent-purple)', cursor: 'pointer' }}>Media Vault</button>
          <button onClick={() => onNavigate('teaching')} style={{ background: 'none', border: 'none', color: 'var(--accent-emerald)', cursor: 'pointer' }}>Teaching</button>
          <button onClick={() => onNavigate('sports')} style={{ background: 'none', border: 'none', color: 'var(--accent-amber)', cursor: 'pointer' }}>Sports Takes</button>
          <button onClick={() => onNavigate('links')} style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}>Linktree</button>
        </div>
      </div>
    </footer>
  );
}
