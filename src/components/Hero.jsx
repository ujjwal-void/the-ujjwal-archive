import React from 'react';
import { Zap, Briefcase, Cpu, FileText, Code2, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import TerminalConsole from './TerminalConsole';

export default function Hero({ onNavigate }) {
  return (
    <div>
      <section className="hero-wrapper" style={{ paddingTop: '1rem' }}>
        {/* Left Column: Intro Bio, Avatar Badge, Status, Manifesto & CTAs */}
        <div className="hero-text">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
            <img
              src="./ujjwal_avatar.png"
              alt={PROFILE_DATA.name}
              style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-sm)', objectFit: 'cover', border: '1.5px solid var(--border-accent)', boxShadow: '0 2px 8px rgba(15,23,42,0.1)' }}
            />
            <div className="badge-status" style={{ marginBottom: 0 }}>
              <span className="pulse-dot"></span>
              {PROFILE_DATA.status}
            </div>
          </div>
          
          <h1>Hi, I'm <span className="gradient-text">{PROFILE_DATA.name}</span></h1>
          
          <p className="hero-subtitle">
            {PROFILE_DATA.tagline}
          </p>

          <div className="manifesto-callout">
            "I build high-concurrency microservices, event-driven backend architectures, and self-correcting RAG systems—driven by understanding core mechanisms under the hood."
          </div>

          <div className="hero-actions">
            <button onClick={() => onNavigate('experience')} className="btn-primary">
              <Briefcase size={16} /> Work Experience
            </button>
            <button onClick={() => onNavigate('projects')} className="btn-glass">
              <Cpu size={16} /> Projects
            </button>
            <a href="https://leetcode.com/u/ujjwal92/" target="_blank" rel="noreferrer" className="btn-glass" title="LeetCode @ujjwal92">
              <Code2 size={16} /> LeetCode
            </a>
            <a href="https://github.com/ujjwal-void" target="_blank" rel="noreferrer" className="btn-glass" title="GitHub @ujjwal-void">
              <ExternalLink size={16} /> GitHub
            </a>
          </div>
        </div>

        {/* Right Column: Interactive CLI Shell Terminal */}
        <div>
          <TerminalConsole onNavigate={onNavigate} />

          {/* Workbench Activity Stream */}
          <div className="workbench-card" style={{ marginTop: '1rem' }}>
            <div className="workbench-header">
              <div className="terminal-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                ujjwal/career_stream
              </span>
            </div>

            <div className="workbench-stream-list">
              <div className="stream-item">
                <span className="meta-tag meta-emerald">ZFunds</span>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>SDE — ZIVA V2 WealthTech AI</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Architected Portfolio Analysis & Recommendation Engines</div>
                </div>
              </div>

              <div className="stream-item">
                <span className="meta-tag meta-cyan">Advor.ai</span>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>Founding Engineer — Hybrid RAG</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>RabbitMQ microservices (under 150ms P99) & FAISS search (+40% accuracy)</div>
                </div>
              </div>

              <div className="stream-item">
                <span className="meta-tag meta-amber">Award</span>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>Osmos Hackathon 1st Runner-Up</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>AdCraft AI platform (out of 131 teams, INR 30k prize)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillar Grid */}
      <div className="grid-3" style={{ marginTop: '1.5rem' }}>
        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('experience')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
            <Briefcase size={26} style={{ color: 'var(--accent-indigo)' }} />
            <span className="meta-tag meta-cyan">Experience</span>
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>Work & Career</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>ZFunds SDE, Advor.ai Founding Engineer, DRDO Intern & Skills Matrix.</p>
        </div>

        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('projects')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
            <Cpu size={26} style={{ color: 'var(--text-main)' }} />
            <span className="meta-tag">Projects</span>
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>Production Projects</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>ZIVA V2, Hybrid RAG, Nexus PM, Write Medium & AdCraft platform.</p>
        </div>

        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('essays')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
            <FileText size={26} style={{ color: 'var(--text-main)' }} />
            <span className="meta-tag">Essays</span>
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>Tech Essays</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Personal articles explaining hybrid RAG, RabbitMQ queues & system design.</p>
        </div>
      </div>
    </div>
  );
}
