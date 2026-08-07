import React from 'react';
import { Flame, Activity } from 'lucide-react';
import { SPORTS_TAKES } from '../data/portfolioData';

export default function SportsTakesSection() {
  return (
    <div>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
          <span className="meta-tag meta-amber">SPORTS COMMENTARY</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>[Tactical Notes]</span>
        </div>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>⚽ Sports Tactics & Commentary</h2>
        <p style={{ color: 'var(--text-muted)' }}>Tactical observations on football, F1 telemetry, and basketball strategy—and how they connect to software engineering.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {SPORTS_TAKES.map(take => (
          <div key={take.id} className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span className="meta-tag meta-amber">{take.sport}</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{take.date}</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.03)', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Hype Rating:</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-rose)', display: 'flex', alignItems: 'center', gap: '0.2rem', fontFamily: 'var(--font-mono)' }}>
                  {take.hypeScore}/100 <Flame size={14} />
                </span>
              </div>
            </div>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>{take.title}</h3>
            
            <div style={{ background: 'rgba(7, 10, 16, 0.7)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--accent-amber)', marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '0.78rem', color: 'var(--accent-amber)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>TACTICAL OBSERVATION</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.6' }}>"{take.opinion}"</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(52, 211, 153, 0.05)', padding: '0.9rem 1.1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(52, 211, 153, 0.2)' }}>
              <Activity size={20} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-emerald)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>CONNECTION TO SYSTEMS ENGINEERING:</span>
                <p style={{ fontSize: '0.88rem', color: '#a7f3d0', marginTop: '0.1rem' }}>{take.keyTakeaway}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
