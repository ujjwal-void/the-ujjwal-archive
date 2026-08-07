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
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
          <span className="meta-tag meta-emerald">RECRUITER & DEVELOPER CARD</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>[Verified Digital ID]</span>
        </div>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>🎴 Digital Profile & Recruiter Card</h2>
        <p style={{ color: 'var(--text-muted)' }}>Official contact card and developer pass for recruiters, engineering hiring managers, and collaborators.</p>
      </div>

      {/* Action Toolbar */}
      <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <button className="btn-primary" onClick={handleDownloadVCard} style={{ fontSize: '0.9rem', gap: '0.5rem' }}>
          <Download size={16} /> Download vCard (.vcf)
        </button>
        <button className="btn-glass" onClick={handlePrintCard} style={{ fontSize: '0.9rem', gap: '0.5rem' }}>
          <Download size={16} /> Print / Save PDF Card
        </button>
        <button className="btn-glass" onClick={handleCopyShare} style={{ fontSize: '0.9rem', gap: '0.5rem' }}>
          {copied ? <Check size={16} style={{ color: 'var(--accent-emerald)' }} /> : <Share2 size={16} />}
          {copied ? 'Card Link Copied!' : 'Share Digital Card'}
        </button>
      </div>

      {/* Printable / Downloadable Developer ID Card */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          id="developer-profile-card"
          className="card"
          style={{
            maxWidth: '680px',
            width: '100%',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '2px solid var(--border-muted)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            boxShadow: '0 12px 36px rgba(15, 23, 42, 0.08)',
            position: 'relative'
          }}
        >
          {/* Card Top Banner */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid var(--border-muted)', paddingBottom: '1.2rem', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src="./ujjwal_avatar.jpeg"
                alt={PROFILE_DATA.name}
                style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-md)', objectFit: 'cover', border: '2px solid var(--accent-indigo)', boxShadow: '0 4px 12px rgba(67, 56, 202, 0.15)' }}
              />
              <div>
                <span className="meta-tag meta-emerald" style={{ marginBottom: '0.3rem', display: 'inline-block' }}>VERIFIED SOFTWARE ENGINEER</span>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', margin: '0.1rem 0' }}>{PROFILE_DATA.name}</h3>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-indigo)' }}>{PROFILE_DATA.title}</p>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>ID: UJJWAL-2026-SDE</span>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-emerald)', marginTop: '0.2rem', fontFamily: 'var(--font-mono)' }}>● ACTIVE FOR HIRE / ROLES</div>
            </div>
          </div>

          {/* Current Status & Education */}
          <div className="grid-2" style={{ marginBottom: '1.5rem', gap: '1rem' }}>
            <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-indigo)', fontWeight: 700, fontSize: '0.82rem', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)' }}>
                <Briefcase size={15} /> CURRENT ROLE
              </div>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>SDE at ZFunds (Gurugram)</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>ZIVA V2 AI WealthTech • Portfolio Engine</p>
            </div>

            <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-purple)', fontWeight: 700, fontSize: '0.82rem', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)' }}>
                <GraduationCap size={15} /> EDUCATION
              </div>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>B.Tech CSE (AI & ML) • VIT Chennai</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>CGPA: 7.23 / 10.0 (2021-2025)</p>
            </div>
          </div>

          {/* Core Technical Matrix */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem', fontFamily: 'var(--font-mono)' }}>PRIMARY TECH STACK</h4>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="meta-tag meta-cyan">Python</span>
              <span className="meta-tag meta-cyan">TypeScript</span>
              <span className="meta-tag meta-cyan">FastAPI</span>
              <span className="meta-tag meta-cyan">Node.js</span>
              <span className="meta-tag meta-cyan">RabbitMQ</span>
              <span className="meta-tag meta-cyan">Redis</span>
              <span className="meta-tag meta-cyan">FAISS / RAG</span>
              <span className="meta-tag meta-cyan">AWS</span>
              <span className="meta-tag meta-cyan">Docker / K8s</span>
              <span className="meta-tag meta-cyan">React.js</span>
            </div>
          </div>

          {/* Notable Achievements */}
          <div style={{ background: '#fef3c7', padding: '1rem 1.2rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--accent-amber)', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#b45309', fontWeight: 700, fontSize: '0.82rem', fontFamily: 'var(--font-mono)', marginBottom: '0.2rem' }}>
              <Award size={15} /> KEY HONORS & HIGHLIGHTS
            </div>
            <p style={{ fontSize: '0.88rem', color: '#78350f' }}>
              • <strong>Osmos Hackathon 1st Runner-Up</strong> (Out of 131 teams, INR 30k prize)<br />
              • Slashing P99 response latency from 700ms to <strong>&lt;150ms</strong> at Advor.ai using RabbitMQ & Redis.
            </p>
          </div>

          {/* Card Footer Contacts */}
          <div style={{ borderTop: '2px solid var(--border-muted)', paddingTop: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', fontSize: '0.88rem' }}>
              <a href={`mailto:${PROFILE_DATA.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-indigo)', textDecoration: 'none', fontWeight: 600 }}>
                <Mail size={15} /> {PROFILE_DATA.email}
              </a>
              <a href={`tel:${PROFILE_DATA.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)', textDecoration: 'none' }}>
                <Phone size={15} /> {PROFILE_DATA.phone}
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}>
                <MapPin size={15} /> {PROFILE_DATA.location}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.85rem', marginTop: '0.4rem' }}>
              <a href="https://github.com/ujjwal-void" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Code2 size={14} /> GitHub (@ujjwal-void) <ExternalLink size={12} />
              </a>
              <a href="https://www.linkedin.com/in/ujjwal-ujjwal-dev/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <ExternalLink size={14} /> LinkedIn Profile
              </a>
              <a href="https://leetcode.com/u/ujjwal92/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Code2 size={14} /> LeetCode (@ujjwal92)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
