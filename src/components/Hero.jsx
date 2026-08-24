import React, { useState, useEffect } from 'react';
import { Zap, Briefcase, Cpu, FileText, Code2, ExternalLink, Download } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { checkIsRecruiterMode } from '../utils/privacyHelper';


const GithubIcon = ({ size = 16, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero({ onNavigate }) {
  const [isRecruiter, setIsRecruiter] = useState(false);

  useEffect(() => {
    setIsRecruiter(checkIsRecruiterMode());
  }, []);

  return (
    <div>
      <section className="hero-wrapper" style={{ paddingTop: '1rem' }}>
        {/* Left Column: Intro Bio, Avatar Badge, Status, Manifesto & CTAs */}
        <div className="hero-text">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.4rem' }}>
            <img
              src="./ujjwal_avatar.jpeg"
              alt={PROFILE_DATA.name}
              style={{
                width: '96px',
                height: '96px',
                borderRadius: '12px',
                objectFit: 'cover',
                border: '1px solid var(--border-dark)',
                boxShadow: 'var(--shadow-subtle)',
                flexShrink: 0
              }}
            />
            <div>
              <div className="badge-status" style={{ marginBottom: '0.4rem' }}>
                <span className="pulse-dot"></span>
                {PROFILE_DATA.status}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Gurugram, India • VIT Vellore Alum</p>
            </div>
          </div>
          
          <h1>Hi, I'm <span className="gradient-text">{PROFILE_DATA.name}</span></h1>
          
          <p className="hero-subtitle">
            {PROFILE_DATA.tagline}
          </p>

          <div className="manifesto-callout">
            "Engineering ZIVA V2 WealthTech AI, Portfolio Analysis engines (40s to ~900ms, 97%+ latency reduction), FastAPI/Flask microservices, React & React Native apps, and event-driven RabbitMQ backends."
          </div>

          <div className="hero-actions">
            <button onClick={() => onNavigate('experience')} className="btn-primary">
              <Briefcase size={16} /> Work Experience
            </button>
            <button onClick={() => onNavigate('projects')} className="btn-secondary">
              <Cpu size={16} /> Projects
            </button>
            <a href="https://github.com/ujjwal-void" target="_blank" rel="noreferrer" className="btn-secondary" title="GitHub @ujjwal-void">
              <GithubIcon size={16} /> GitHub
            </a>

            {/* Recruiter-Only Buttons & Social Links */}
            {isRecruiter && (
              <>
                <a
                  href="./Ujjwal_Ujjwal_Resume.pdf"
                  download="Ujjwal_Ujjwal_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ gap: '0.4rem' }}
                >
                  <Download size={16} /> Download Resume (PDF)
                </a>
                <a href="https://leetcode.com/u/ujjwal92/" target="_blank" rel="noreferrer" className="btn-secondary" title="LeetCode @ujjwal92">
                  <Code2 size={16} /> LeetCode
                </a>
                <a href="https://www.linkedin.com/in/ujjwal-ujjwal-dev/" target="_blank" rel="noreferrer" className="btn-secondary" title="LinkedIn Profile">
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
              </>
            )}
          </div>
        </div>

        {/* Right Column: Career Activity Stream */}
        <div>
          {/* Workbench Activity Stream */}
          <div className="workbench-card">
            <div className="workbench-header">
              <div className="terminal-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                ujjwal/career_summary
              </span>
            </div>

            <div className="workbench-stream-list">
              <div className="stream-item">
                <span className="meta-tag">ZFunds</span>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>SDE: ZIVA V2 Wealth Management AI</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Portfolio Analysis engines & FastAPI microservices</div>
                </div>
              </div>

              <div className="stream-item">
                <span className="meta-tag">Advor.ai</span>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>Founding Engineer: Backend & Hybrid RAG</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>RabbitMQ queues (&lt;150ms P99) & FAISS vector search</div>
                </div>
              </div>

              <div className="stream-item">
                <span className="meta-tag">Award</span>
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
            <Briefcase size={22} style={{ color: 'var(--text-main)' }} />
            <span className="meta-tag">Experience</span>
          </div>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>Work & Career</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>ZFunds SDE, Advor.ai Founding Engineer, DRDO Intern & Skills Matrix.</p>
        </div>

        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('projects')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
            <Cpu size={22} style={{ color: 'var(--text-main)' }} />
            <span className="meta-tag">Projects</span>
          </div>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>Production Projects</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>ZIVA V2, Hybrid RAG, Nexus PM, Write Medium & AdCraft platform.</p>
        </div>

        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('essays')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
            <FileText size={22} style={{ color: 'var(--text-main)' }} />
            <span className="meta-tag">Stories</span>
          </div>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>Tech Stories</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Personal articles explaining hybrid RAG, RabbitMQ queues & system design.</p>
        </div>
      </div>
    </div>
  );
}

