import React, { useState } from 'react';
import { Copy, Check, FileText } from 'lucide-react';
import { TECH_ESSAYS } from '../data/portfolioData';

export default function TechEssaysSection() {
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
          <span className="meta-tag meta-emerald">TECHNICAL WRITING</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>[{TECH_ESSAYS.length} Articles Logged]</span>
        </div>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>📝 Tech Essays & Explanations</h2>
        <p style={{ color: 'var(--text-muted)' }}>Complex technical topics explained in my own words — personal observations, architectural notes, and intuitive breakdowns.</p>
      </div>

      {/* Articles List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {TECH_ESSAYS.map(article => (
          <div key={article.id} className="card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="meta-tag meta-cyan">{article.category}</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{article.date} • {article.readTime}</span>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.6rem' }}>{article.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.2rem', lineHeight: '1.7' }}>{article.excerpt}</p>

            {article.videoUrl && (
              <div style={{ marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-muted)', background: '#000', position: 'relative', paddingBottom: '40%', height: 0 }}>
                <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} src={article.videoUrl} title="Video Walkthrough" allowFullScreen></iframe>
              </div>
            )}

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Code Implementation Concept</h4>
                <button className="btn-glass" onClick={() => handleCopyCode(article.id, article.codeSnippet)} style={{ fontSize: '0.78rem', padding: '0.3rem 0.8rem', gap: '0.3rem', fontFamily: 'var(--font-mono)' }}>
                  {copiedId === article.id ? <Check size={14} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={14} />}
                  {copiedId === article.id ? 'Copied' : 'Copy Code'}
                </button>
              </div>
              <div className="code-block-container">
                <div className="code-header">
                  <span>JAVASCRIPT / NODE.JS</span>
                  <span>CONCEPT_PIPELINE.JS</span>
                </div>
                <pre><code>{article.codeSnippet}</code></pre>
              </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <h4 style={{ fontSize: '0.82rem', color: 'var(--text-main)', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>Key Takeaways & Observations:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                {article.keyTakeaways.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--text-main)' }}>•</span> {item}
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
