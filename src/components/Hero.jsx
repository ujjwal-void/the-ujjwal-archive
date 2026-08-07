import React from 'react';
import { Zap, Link as LinkIcon, Film, Cpu, BookOpen } from 'lucide-react';
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
          
          <h1>Hi, I'm <span className="gradient-text">{PROFILE_DATA.name}</span></h1>
          
          <p className="hero-subtitle">
            {PROFILE_DATA.tagline}
          </p>

          <div className="manifesto-callout">
            "I'm fascinated by how complex systems work under the hood—whether that's an adaptive RAG pipeline, the narrative time-loops of Steins;Gate, or tactical rotations in football."
          </div>

          <div className="hero-actions">
            <button onClick={() => onNavigate('projects')} className="btn-primary">
              <Zap size={17} /> View Projects
            </button>
            <button onClick={() => onNavigate('media')} className="btn-glass">
              <Film size={17} /> Media Notes
            </button>
            <button onClick={() => onNavigate('links')} className="btn-glass linktree-highlight">
              <LinkIcon size={17} /> Linktree
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
              ujjwal/workspace
            </span>
          </div>

          <div className="workbench-stream-list">
            <div className="stream-item">
              <span className="meta-tag meta-cyan">Building</span>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>Adaptive Graph RAG Engine</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Self-correcting retrieval & Qdrant vector index</div>
              </div>
            </div>

            <div className="stream-item">
              <span className="meta-tag meta-amber">Notes</span>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent-amber)' }}>Steins;Gate Narrative Logic</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>World Line Beta divergence & timeline convergence</div>
              </div>
            </div>

            <div className="stream-item">
              <span className="meta-tag meta-emerald">Teaching</span>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent-emerald)' }}>Intuition-First Embeddings</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Visual spatial analogies for vector search</div>
              </div>
            </div>

            <div className="stream-item">
              <span className="meta-tag meta-purple">Tactics</span>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>Fluid Inversion in Football</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Central pivot overloads under high pressing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillar Grid */}
      <div className="grid-3" style={{ marginTop: '2rem' }}>
        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('projects')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
            <Cpu size={28} style={{ color: 'var(--accent-cyan)' }} />
            <span className="meta-tag meta-cyan">Projects</span>
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>Software & AI</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Self-correcting RAG search, vector databases, and NLP spoiler masking.</p>
        </div>

        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('media')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
            <Film size={28} style={{ color: 'var(--accent-amber)' }} />
            <span className="meta-tag meta-amber">Media</span>
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>Books, Anime & Films</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Stories that left an impression, with personal reflections & spoiler toggles.</p>
        </div>

        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('teaching')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
            <BookOpen size={28} style={{ color: 'var(--accent-emerald)' }} />
            <span className="meta-tag meta-emerald">Teaching</span>
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>Teaching & Tutorials</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Breaking down complex CS & AI concepts into intuitive mental models.</p>
        </div>
      </div>
    </div>
  );
}
