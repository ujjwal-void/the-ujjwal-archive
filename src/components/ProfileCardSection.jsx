import React, { useState } from 'react';
import { Download, Share2, Mail, Phone, MapPin, Briefcase, GraduationCap, Code2, ExternalLink, Check, Award } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function ProfileCardSection() {
  const [copied, setCopied] = useState(false);

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${PROFILE_DATA.name}
TITLE:${PROFILE_DATA.title}
ORG:ZFunds (Software Engineer)
EMAIL;TYPE=INTERNET:${PROFILE_DATA.email}
TEL;TYPE=CELL:${PROFILE_DATA.phone}
ADR;TYPE=WORK:;;Gurugram;Haryana;;India
URL:${window.location.origin + window.location.pathname}
URL;TYPE=GitHub:${PROFILE_DATA.socials.find(s => s.name === 'GitHub')?.url}
URL;TYPE=LinkedIn:${PROFILE_DATA.socials.find(s => s.name === 'LinkedIn')?.url}
URL;TYPE=LeetCode:${PROFILE_DATA.leetcode}
NOTE:Software Engineer specializing in AI/LLM Systems, Hybrid RAG, and High-Concurrency Backends.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Ujjwal_Ujjwal_SDE_Profile.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrintCard = () => {
    window.print();
  };

  const handleCopyShare = () => {
    navigator.clipboard.writeText(window.location.origin + window.location.pathname + '#card');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="no-print" style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
          <span className="meta-tag meta-emerald">DEVELOPER PASS</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>[1-Page Executive ID]</span>
        </div>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.3rem' }}>🎴 Developer Executive Badge</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>A concise single-page summary card engineered for quick recruiter assessment and offline reference.</p>
        
        {/* Action Toolbar */}
        <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.2rem', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={handlePrintCard} style={{ fontSize: '0.85rem', padding: '0.45rem 1rem', gap: '0.4rem' }}>
            <Download size={15} /> Save / Print 1-Page PDF Card
          </button>
          <button className="btn-glass" onClick={handleDownloadVCard} style={{ fontSize: '0.85rem', padding: '0.45rem 1rem', gap: '0.4rem' }}>
            <Download size={15} /> Download vCard (.vcf)
          </button>
          <button className="btn-glass" onClick={handleCopyShare} style={{ fontSize: '0.85rem', padding: '0.45rem 1rem', gap: '0.4rem' }}>
            {copied ? <Check size={15} style={{ color: 'var(--accent-emerald)' }} /> : <Share2 size={15} />}
            {copied ? 'Card Link Copied!' : 'Share Card'}
          </button>
        </div>
      </div>

      {/* Ultra-Compact 1-Page Printable Profile Card */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          id="developer-profile-card"
          style={{
            maxWidth: '580px',
            width: '100%',
            background: '#ffffff',
            border: '2px solid #cbd5e1',
            borderRadius: '12px',
            padding: '1.4rem',
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            boxSizing: 'border-box'
          }}
        >
          {/* Header Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', borderBottom: '1.5px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '1rem' }}>
            <img
              src="./ujjwal_avatar.jpeg"
              alt={PROFILE_DATA.name}
              style={{ width: '90px', height: '90px', borderRadius: '12px', objectFit: 'cover', border: '2px solid #4338ca', flexShrink: 0, boxShadow: '0 4px 14px rgba(67, 56, 202, 0.2)' }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '1.55rem', color: '#0f172a', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>{PROFILE_DATA.name}</h3>
                <span style={{ fontSize: '0.68rem', background: '#d1fae5', color: '#047857', border: '1px solid #a7f3d0', padding: '0.15rem 0.5rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>VERIFIED SDE</span>
              </div>
              <p style={{ fontSize: '0.88rem', fontWeight: 700, color: '#4338ca', margin: '0.15rem 0' }}>Software Engineer at ZFunds • Gurugram</p>
              <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>B.Tech CSE (AI & ML) • VIT Chennai (2021-2025)</p>
            </div>
          </div>

          {/* Quick Glimpse Bio */}
          <div style={{ background: '#f8fafc', padding: '0.8rem 1rem', borderRadius: '6px', borderLeft: '3px solid #4338ca', marginBottom: '1rem' }}>
            <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: '1.5', margin: 0 }}>
              <strong>Executive Summary:</strong> Core engineer driving ZIVA V2 AI WealthTech platform at ZFunds. Scaled RabbitMQ event microservices to &lt;150ms P99 latency & built FAISS hybrid RAG at Advor.ai. 1st Runner-Up at Osmos Hackathon (131 teams).
            </p>
          </div>

          {/* Core Tech Stack Pills */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
              PRIMARY STACK & DOMAINS
            </div>
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
              {['Python', 'TypeScript', 'FastAPI', 'Node.js', 'RabbitMQ', 'Redis', 'FAISS (RAG)', 'AWS', 'Docker/K8s', 'React.js'].map((tech, idx) => (
                <span key={idx} style={{ fontSize: '0.72rem', background: '#f1f5f9', border: '1px solid #e2e8f0', color: '#334155', padding: '0.15rem 0.5rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 3-Column Highlights */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', marginBottom: '1rem' }}>
            <div style={{ background: '#f1f5f9', padding: '0.6rem', borderRadius: '6px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>CURRENT ROLE</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginTop: '0.1rem' }}>ZFunds SDE</div>
            </div>
            <div style={{ background: '#f1f5f9', padding: '0.6rem', borderRadius: '6px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>PAST FOUNDING</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginTop: '0.1rem' }}>Advor.ai Engineer</div>
            </div>
            <div style={{ background: '#fef3c7', padding: '0.6rem', borderRadius: '6px', textAlign: 'center', border: '1px solid #fde68a' }}>
              <div style={{ fontSize: '0.7rem', color: '#b45309', fontFamily: 'var(--font-mono)' }}>HACKATHON</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#78350f', marginTop: '0.1rem' }}>1st Runner-Up</div>
            </div>
          </div>

          {/* Contact Bar */}
          <div style={{ borderTop: '1.5px solid #e2e8f0', paddingTop: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.78rem' }}>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', color: '#334155' }}>
              <a href={`mailto:${PROFILE_DATA.email}`} style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600 }}>✉️ {PROFILE_DATA.email}</a>
              <a href={`tel:${PROFILE_DATA.phone}`} style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 600 }}>📞 {PROFILE_DATA.phone}</a>
              <span>📍 Gurugram, India</span>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', fontWeight: 600 }}>
              <a href="https://github.com/ujjwal-void" target="_blank" rel="noreferrer" style={{ color: '#4338ca', textDecoration: 'none' }}>GitHub</a>
              <a href="https://www.linkedin.com/in/ujjwal-ujjwal-dev/" target="_blank" rel="noreferrer" style={{ color: '#4338ca', textDecoration: 'none' }}>LinkedIn</a>
              <a href="https://leetcode.com/u/ujjwal92/" target="_blank" rel="noreferrer" style={{ color: '#4338ca', textDecoration: 'none' }}>LeetCode</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
