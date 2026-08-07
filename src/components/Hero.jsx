import React from 'react';
import { Zap, Briefcase, Cpu, FileText, Award } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import TerminalConsole from './TerminalConsole';

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
            "I build high-concurrency microservices, event-driven backend architectures, and self-correcting RAG systems—driven by understanding core mechanisms under the hood."
          </div>

          <div className="hero-actions">
            <button onClick={() => onNavigate('experience')} className="btn-primary">
              <Briefcase size={16} /> Work Experience
            </button>
            <button onClick={() => onNavigate('projects')} className="btn-glass">
              <Cpu size={16} /> View Projects
            </button>
            <button onClick={() => onNavigate('essays')} className="btn-glass">
              <FileText size={16} /> Tech Essays
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
              ujjwal/career_stream
            </span>
          </div>

          <div className="workbench-stream-list">
            <div className="stream-item">
              <span className="meta-tag meta-emerald">ZFunds</span>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>SDE — ZIVA V2 WealthTech AI</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Architected Portfolio Analysis, Goal & Fund Proposal Engines</div>
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

            <div className="stream-item">
              <span className="meta-tag meta-purple">DRDO</span>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>DevOps & LAN Packet Inspection</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Flask LAN bandwidth monitor & Docker/Kubernetes CI/CD</div>
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
