import React from 'react';
import { Flame, Lightbulb } from 'lucide-react';
import { SPORTS_TAKES } from '../data/portfolioData';

export default function SportsTakesSection() {
  return (
    <div>
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>⚽ Sports Events News & Tactical Takes</h2>
        <p style={{ color: 'var(--text-muted)' }}>Unfiltered tactical breakdowns, hype reactions, and how sports strategy mirrors software engineering.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {SPORTS_TAKES.map(take => (
          <div key={take.id} className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '0.8rem', background: 'rgba(251, 191, 36, 0.15)', color: 'var(--accent-amber)', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>{take.sport}</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>{take.date}</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.04)', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-full)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Hype Score:</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-rose)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  {take.hypeScore}/100 <Flame size={14} />
                </span>
              </div>
            </div>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>{take.title}</h3>
            
            <div style={{ background: 'rgba(14, 23, 38, 0.6)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--accent-amber)', marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-amber)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>My Opinion & Tactical Analysis:</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.6' }}>"{take.opinion}"</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(52, 211, 153, 0.08)', padding: '0.8rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(52, 211, 153, 0.2)' }}>
              <Lightbulb size={20} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-emerald)', textTransform: 'uppercase' }}>Engineering Parallel:</span>
                <p style={{ fontSize: '0.88rem', color: '#a7f3d0', marginTop: '0.1rem' }}>{take.keyTakeaway}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
