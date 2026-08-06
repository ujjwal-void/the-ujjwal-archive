import React from 'react';
import { Zap, Link as LinkIcon, Film, Cpu, ShieldCheck, BookOpen } from 'lucide-react';
import { PROFILE_DATA, PROJECTS_DATA, MEDIA_DATA } from '../data/portfolioData';

export default function Hero({ onNavigate }) {
  const topAnime = MEDIA_DATA.find(m => m.id === 'steins-gate') || MEDIA_DATA[0];
  const topProject = PROJECTS_DATA[0];

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

          <div className="hero-actions">
            <button onClick={() => onNavigate('projects')} className="btn-primary">
              <Zap size={18} /> Explore Craftsman Projects
            </button>
            <button onClick={() => onNavigate('links')} className="btn-glass linktree-highlight">
              <LinkIcon size={18} /> Standalone Linktree
            </button>
            <button onClick={() => onNavigate('media')} className="btn-glass">
              <Film size={18} /> Media Vault
            </button>
          </div>
        </div>

        <div className="hero-card-preview">
          <div className="glow-card" style={{ textAlign: 'center' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', boxShadow: 'var(--shadow-glow)', fontSize: '2.8rem' }}>
              ⚡
            </div>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>{PROFILE_DATA.name}'s Sanctuary</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>{PROFILE_DATA.title}</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginTop: '1rem', textAlign: 'left' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>LATEST PROJECT</span>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '0.2rem' }}>{topProject.title}</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>TOP ANIME</span>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-amber)', marginTop: '0.2rem' }}>{topAnime.title}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Cards */}
      <div className="grid-3" style={{ marginTop: '2rem' }}>
        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('projects')}>
          <Cpu size={36} style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }} />
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>Craftsman AI Projects</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Self-correcting RAG search, vector databases, and NLP spoiler shields built with technical depth.</p>
        </div>

        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('media')}>
          <ShieldCheck size={36} style={{ color: 'var(--accent-purple)', marginBottom: '0.5rem' }} />
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>Media Vault & Spoiler Shield</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Anime, movies, and book recommendations with personal impact essays & toggleable spoiler blurring.</p>
        </div>

        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('teaching')}>
          <BookOpen size={36} style={{ color: 'var(--accent-emerald)', marginBottom: '0.5rem' }} />
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>Intuitive Teaching Blogs</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Breaking down complex CS & AI concepts with visual analogies, videos, and interactive explainers.</p>
        </div>
      </div>
    </div>
  );
}
