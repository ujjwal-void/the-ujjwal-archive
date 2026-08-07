import React from 'react';
import { Zap, Link as LinkIcon, Film, Cpu, FileText } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import TerminalConsole from './TerminalConsole';
import ActivityHeatmap from './ActivityHeatmap';

export default function Hero({ onNavigate }) {
  return (
    <div>
      {/* Interactive CLI Console */}
      <TerminalConsole onNavigate={onNavigate} />

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
            "I'm fascinated by how complex systems work under the hood—whether that's an adaptive RAG pipeline, narrative time-loops in anime, or tactical rotations in football."
          </div>

          <div className="hero-actions">
            <button onClick={() => onNavigate('projects')} className="btn-primary">
              <Zap size={16} /> View Projects
            </button>
            <button onClick={() => onNavigate('essays')} className="btn-glass">
              <FileText size={16} /> Tech Essays
            </button>
            <button onClick={() => onNavigate('culture')} className="btn-glass">
              <Film size={16} /> Culture & Sports
            </button>
          </div>
        </div>

        {/* Workbench Stream Terminal */}
        <div className="workbench-card">
          <div className="workbench-header">
            <div className="terminal-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)' }}>
              ujjwal/workspace
            </span>
          </div>

          <div className="workbench-stream-list">
            <div className="stream-item">
              <span className="meta-tag">Building</span>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>Adaptive Graph RAG Engine</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Self-correcting retrieval & Qdrant vector index</div>
              </div>
            </div>

            <div className="stream-item">
              <span className="meta-tag">Writing</span>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>RAG Spatial Geometry Notes</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Explaining high-dimensional vector embeddings in my own words</div>
              </div>
            </div>

            <div className="stream-item">
              <span className="meta-tag">Notes</span>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>Steins;Gate Narrative Logic</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>World Line Beta divergence & timeline convergence</div>
              </div>
            </div>

            <div className="stream-item">
              <span className="meta-tag">Tactics</span>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>Fluid Inversion in Football</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Central pivot overloads under high pressing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Matrix / Study Log Heatmap */}
      <ActivityHeatmap />

      {/* Feature Pillar Grid */}
      <div className="grid-3">
        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('projects')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
            <Cpu size={26} style={{ color: 'var(--text-main)' }} />
            <span className="meta-tag">Projects</span>
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>Software & AI</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Self-correcting RAG search, vector databases, and NLP spoiler masking.</p>
        </div>

        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('essays')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
            <FileText size={26} style={{ color: 'var(--text-main)' }} />
            <span className="meta-tag">Essays</span>
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>Tech Essays</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Explaining technical topics in my own words — notes, architectures & personal perspectives.</p>
        </div>

        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('culture')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
            <Film size={26} style={{ color: 'var(--text-main)' }} />
            <span className="meta-tag">Culture & Sports</span>
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>Culture & Sports</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Media reviews (anime, movies, books with spoiler toggles) & sports tactical commentary.</p>
        </div>
      </div>
    </div>
  );
}
