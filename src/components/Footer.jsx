import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
          Ujjwal's Digital Archive & Notes
        </p>
        <div style={{ display: 'flex', gap: '1.2rem', fontSize: '0.85rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button onClick={() => onNavigate('projects')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>Projects</button>
          <button onClick={() => onNavigate('essays')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>Tech Essays</button>
          <button onClick={() => onNavigate('media')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>Media Notes</button>
          <button onClick={() => onNavigate('sports')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>Sports Notes</button>
          <button onClick={() => onNavigate('links')} style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}>Linktree</button>
        </div>
      </div>
    </footer>
  );
}
