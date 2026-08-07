import React, { useState } from 'react';
import { Lightbulb, Copy, Check } from 'lucide-react';
import { TEACHING_BLOGS } from '../data/portfolioData';

export default function TeachingHubSection() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyCode = (id, snippet) => {
    navigator.clipboard.writeText(snippet);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
          <span className="meta-tag meta-emerald">TEACHING & WRITING</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>[Intuition First]</span>
        </div>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>📚 Teaching & Tech Articles</h2>
        <p style={{ color: 'var(--text-muted)' }}>How I break down complex concepts into simple mental models and practical intuition.</p>
      </div>

      {/* Teaching Philosophy */}
      <div className="glow-card" style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
          <Lightbulb size={26} style={{ color: 'var(--accent-amber)' }} />
          <div>
            <h3 style={{ fontSize: '1.35rem' }}>Teaching Philosophy: "Intuition First, Syntax Second"</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Learning shouldn't feel like memorizing documentation. It should feel like building mental clarity step-by-step.</p>
          </div>
        </div>

        <div className="grid-3" style={{ marginTop: '1.5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
            <span className="meta-tag meta-cyan" style={{ marginBottom: '0.6rem', display: 'inline-block' }}>01. Visual Analogies</span>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '0.3rem' }}>Spatial Maps</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Comparing vector search to physical coordinates in a room before touching matrix math.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
            <span className="meta-tag meta-purple" style={{ marginBottom: '0.6rem', display: 'inline-block' }}>02. Under the Hood</span>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '0.3rem' }}>Demystifying Frameworks</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Opening up black boxes so students build genuine confidence rather than copying snippets.</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
            <span className="meta-tag meta-emerald" style={{ marginBottom: '0.6rem', display: 'inline-block' }}>03. Fail-Safe Thinking</span>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '0.3rem' }}>Edge Cases First</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Understanding why systems break (retrieval noise, hallucinations) before writing fixes.</p>
          </div>
        </div>
      </div>

      {/* Articles */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {TEACHING_BLOGS.map(article => (
          <div key={article.id} className="card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="meta-tag meta-cyan">{article.category}</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{article.date} • {article.readTime}</span>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.6rem' }}>{article.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.2rem', lineHeight: '1.7' }}>{article.excerpt}</p>

            {article.videoUrl && (
              <div style={{ marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--glass-border)', background: '#000', position: 'relative', paddingBottom: '40%', height: 0 }}>
                <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} src={article.videoUrl} title="Teaching Video Demo" allowFullScreen></iframe>
              </div>
            )}

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <h4 style={{ fontSize: '0.82rem', color: 'var(--accent-purple)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Code Architecture Flow</h4>
                <button className="btn-glass" onClick={() => handleCopyCode(article.id, article.codeSnippet)} style={{ fontSize: '0.78rem', padding: '0.3rem 0.8rem', gap: '0.3rem', fontFamily: 'var(--font-mono)' }}>
                  {copiedId === article.id ? <Check size={14} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={14} />}
                  {copiedId === article.id ? 'Copied' : 'Copy Code'}
                </button>
              </div>
              <div className="code-block-container">
                <div className="code-header">
                  <span>JAVASCRIPT / NODE.JS</span>
                  <span>CONCEPT PIPELINE</span>
                </div>
                <pre><code>{article.codeSnippet}</code></pre>
              </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <h4 style={{ fontSize: '0.82rem', color: 'var(--accent-emerald)', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>Key Teaching Steps:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                {article.teachingMethodology.map((step, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent-emerald)' }}>👉</span> {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
