import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
          Ujjwal's Digital Archive & Notes
        </p>
        <div style={{ display: 'flex', gap: '1.2rem', fontSize: '0.85rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button onClick={() => onNavigate('projects')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontWeight: 600 }}>Projects</button>
          <button onClick={() => onNavigate('experience')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontWeight: 600 }}>Experience</button>
          <button onClick={() => onNavigate('card')} style={{ background: 'none', border: 'none', color: 'var(--accent-indigo)', cursor: 'pointer', fontWeight: 700 }}>Profile Card</button>
          <button onClick={() => onNavigate('essays')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontWeight: 600 }}>Tech Essays</button>
          <button onClick={() => onNavigate('physics')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontWeight: 600 }}>Physics & Math</button>
          <button onClick={() => onNavigate('culture')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontWeight: 600 }}>Screen & Spine</button>
          <button onClick={() => onNavigate('db-schema')} style={{ background: 'none', border: 'none', color: 'var(--accent-indigo)', cursor: 'pointer', fontWeight: 700 }}>🗄️ DB Schema</button>
          <button onClick={() => onNavigate('links')} style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer', fontWeight: 600 }}>Linktree</button>
        </div>
      </div>
    </footer>
  );
}
