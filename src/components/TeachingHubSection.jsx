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
        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>📚 Teaching, Tech Blogs & Video Hub</h2>
        <p style={{ color: 'var(--text-muted)' }}>How I break down complex concepts, build mental models, and share knowledge for the love of teaching.</p>
      </div>

      {/* Teaching Philosophy Manifesto */}
      <div className="glow-card" style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
          <Lightbulb size={28} style={{ color: 'var(--accent-amber)' }} />
          <div>
            <h3 style={{ fontSize: '1.4rem' }}>My Teaching Philosophy: "Intuition First, Syntax Second"</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Learning shouldn't feel like memorizing documentation. It should feel like solving a puzzle with clarity.</p>
          </div>
        </div>

        <div className="grid-3" style={{ marginTop: '1.5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
            <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.3rem' }}>1. Visual Analogies</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Comparing vector search to physical coordinates in a room before writing Python code.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
            <h4 style={{ color: 'var(--accent-purple)', marginBottom: '0.3rem' }}>2. Demystifying Magic</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Showing what happens under the hood in frameworks so students build true confidence.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
            <h4 style={{ color: 'var(--accent-emerald)', marginBottom: '0.3rem' }}>3. Interactive Walkthroughs</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Step-by-step code walkthroughs that adapt explanations to different skill levels.</p>
          </div>
        </div>
      </div>

      {/* Articles List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {TEACHING_BLOGS.map(article => (
          <div key={article.id} className="card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.8rem', background: 'rgba(56, 189, 248, 0.15)', color: 'var(--accent-cyan)', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>{article.category}</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>{article.date} • {article.readTime}</span>
            </div>

            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.6rem' }}>{article.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1.2rem' }}>{article.excerpt}</p>

            {article.videoUrl && (
              <div style={{ marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--glass-border)', background: '#000', position: 'relative', paddingBottom: '40%', height: 0 }}>
                <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} src={article.videoUrl} title="Teaching Demo Video" allowFullScreen></iframe>
              </div>
            )}

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-purple)' }}>Interactive Code Walkthrough</h4>
                <button className="btn-glass" onClick={() => handleCopyCode(article.id, article.codeSnippet)} style={{ fontSize: '0.78rem', padding: '0.3rem 0.8rem', gap: '0.3rem' }}>
                  {copiedId === article.id ? <Check size={14} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={14} />}
                  {copiedId === article.id ? 'Copied!' : 'Copy Code'}
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
              <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>Key Teaching Steps:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                {article.teachingMethodology.map((step, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>👉</span> {step}
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
