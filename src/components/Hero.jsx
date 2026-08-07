import React from 'react';
import { Terminal, Zap, Link as LinkIcon, Film, Cpu, BookOpen, Trophy } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Hero({ onNavigate }) {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="hero-text">
          <div className="badge-status">
            <span className="pulse-dot"></span>
            {PROFILE_DATA.status}
          </div>
          
          <h1>Crafting Systems & Narratives <span className="gradient-text">For the Love of the Game.</span></h1>
          
          <div className="manifesto-callout">
            "Software engineering, narrative storytelling in anime/cinema, and sports tactics are all manifestations of the same thing: pure human craftsmanship. I build, teach, and analyze strictly for the love of the game."
          </div>

          <div className="hero-actions">
            <button onClick={() => onNavigate('projects')} className="btn-primary">
              <Zap size={18} /> Craftsman Projects
            </button>
            <button onClick={() => onNavigate('media')} className="btn-glass">
              <Film size={18} /> Media Vault
            </button>
            <button onClick={() => onNavigate('links')} className="btn-glass linktree-highlight">
              <LinkIcon size={18} /> Bio Linktree
            </button>
          </div>
        </div>

        {/* Workbench Stream Terminal */}
        <div className="workbench-card">
          <div className="workbench-header">
            <div className="terminal-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              UJJWAL_WORKBENCH_STREAM_v2.4
            </span>
          </div>

          <div className="workbench-stream-list">
            <div className="stream-item">
              <span className="meta-tag meta-cyan" style={{ shrink: 0 }}>BUILDING</span>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)' }}>Adaptive Graph RAG Engine</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Self-correcting retrieval & Qdrant vector index</div>
              </div>
            </div>

            <div className="stream-item">
              <span className="meta-tag meta-amber" style={{ shrink: 0 }}>ANALYZING</span>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-amber)' }}>Steins;Gate Timeline Logic</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>World Line Beta divergence & episode 22 climax</div>
              </div>
            </div>

            <div className="stream-item">
              <span className="meta-tag meta-emerald" style={{ shrink: 0 }}>TEACHING</span>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>Intuition-First Vector Embeddings</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Demystifying multi-dimensional math for students</div>
              </div>
            </div>

            <div className="stream-item">
              <span className="meta-tag meta-rose" style={{ shrink: 0 }}>TACTICAL</span>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)' }}>Fluid Inversion in Modern Football</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Overloading central pivots under high press</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillar Grid */}
      <div className="grid-3" style={{ marginTop: '2rem' }}>
        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('projects')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
            <Cpu size={32} style={{ color: 'var(--accent-cyan)' }} />
            <span className="meta-tag meta-cyan">ENGINEERING</span>
          </div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>Craftsman Projects</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Self-correcting RAG search, vector databases, and NLP spoiler shields built with technical rigor.</p>
        </div>

        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('media')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
            <Film size={32} style={{ color: 'var(--accent-amber)' }} />
            <span className="meta-tag meta-amber">NARRATIVE</span>
          </div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>Classified Media Vault</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Anime, cinema, and literature reviews with emotional impact essays & classified spoiler redaction shields.</p>
        </div>

        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('teaching')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
            <BookOpen size={32} style={{ color: 'var(--accent-emerald)' }} />
            <span className="meta-tag meta-emerald">PEDAGOGY</span>
          </div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>Intuitive Teaching Hub</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Breaking down complex CS & AI concepts with visual analogies, videos, and step-by-step logic gates.</p>
        </div>
      </div>
    </div>
  );
}
