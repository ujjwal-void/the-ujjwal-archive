import React, { useState } from 'react';
import { Atom, Copy, Check, Cpu, CheckCircle } from 'lucide-react';
import { PHYSICS_MATH_NOTES } from '../data/portfolioData';

export default function PhysicsMathSection() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyFormula = (id, formula) => {
    navigator.clipboard.writeText(formula);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
          <span className="meta-tag meta-cyan">PHYSICS & MATHEMATICS</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>[{PHYSICS_MATH_NOTES.length} Mathematical Derivations]</span>
        </div>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>⚛️ Physics & Mathematics Notes</h2>
        <p style={{ color: 'var(--text-muted)' }}>Derivations, geometric vector spaces, and physics principles—and how they connect directly to computer science & AI architectures.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {PHYSICS_MATH_NOTES.map(item => (
          <div key={item.id} className="card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="meta-tag meta-purple">{item.category}</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{item.date}</span>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.6rem' }}>{item.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.2rem', lineHeight: '1.7' }}>{item.summary}</p>

            {/* Formula Block */}
            <div style={{ marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <h4 style={{ fontSize: '0.82rem', color: 'var(--accent-indigo)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>MATHEMATICAL FORMULA / EQUATION</h4>
                <button className="btn-glass" onClick={() => handleCopyFormula(item.id, item.formula)} style={{ fontSize: '0.78rem', padding: '0.3rem 0.8rem', gap: '0.3rem', fontFamily: 'var(--font-mono)' }}>
                  {copiedId === item.id ? <Check size={14} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={14} />}
                  {copiedId === item.id ? 'Copied' : 'Copy Formula'}
                </button>
              </div>
              <div className="code-block-container" style={{ background: '#f8fafc', borderColor: 'var(--border-muted)' }}>
                <pre style={{ color: 'var(--text-main)', fontWeight: 600 }}><code>{item.formula}</code></pre>
              </div>
            </div>

            {/* CS Connection Card */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', background: '#e0e7ff', padding: '1rem 1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid #c7d2fe', marginBottom: '1rem' }}>
              <Cpu size={22} style={{ color: '#4338ca', flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#3730a3', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>COMPUTER SCIENCE & AI CONNECTION:</span>
                <p style={{ fontSize: '0.9rem', color: '#1e1b4b', marginTop: '0.2rem', lineHeight: '1.5', fontWeight: 500 }}>{item.csConnection}</p>
              </div>
            </div>

            {/* YouTube Embedded Video Player for Vectors */}
            {item.videoUrl && (
              <div style={{ marginBottom: '1.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-indigo)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                    🎥 RECOMMENDED VISUAL LECTURE (3BLUE1BROWN VECTORS)
                  </span>
                </div>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-muted)', boxShadow: 'var(--shadow-subtle)' }}>
                  <iframe
                    src={item.videoUrl}
                    title="Vectors | Essence of linear algebra"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* Key Takeaway */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <CheckCircle size={16} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
              <span><strong>Key Takeaway:</strong> {item.keyTakeaway}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
