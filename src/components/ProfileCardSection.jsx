import React, { useState, useEffect } from 'react';
import { Download, Share2, Mail, Phone, MapPin, Briefcase, GraduationCap, Code2, ExternalLink, Check, Award } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { checkIsRecruiterMode } from '../utils/privacyHelper';

export default function ProfileCardSection() {
  const [copied, setCopied] = useState(false);
  const [isRecruiter, setIsRecruiter] = useState(false);

  useEffect(() => {
    setIsRecruiter(checkIsRecruiterMode());
  }, []);

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
    navigator.clipboard.writeText(window.location.origin + window.location.pathname + (isRecruiter ? '#recruit/card' : '#card'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="no-print" style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
          <span className="meta-tag">DEVELOPER PASS</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>[1-Page Executive ID]</span>
        </div>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.3rem' }}>Developer Executive Badge</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>A concise single-page summary card engineered for quick recruiter assessment and offline reference.</p>
        
        {/* Action Toolbar */}
        <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.2rem', flexWrap: 'wrap' }}>
          {isRecruiter && (
            <>
              <button className="btn-primary" onClick={handlePrintCard} style={{ fontSize: '0.85rem', padding: '0.45rem 1rem', gap: '0.4rem' }}>
                <Download size={15} /> Save / Print 1-Page PDF Card
              </button>
              <button className="btn-secondary" onClick={handleDownloadVCard} style={{ fontSize: '0.85rem', padding: '0.45rem 1rem', gap: '0.4rem' }}>
                <Download size={15} /> Download vCard (.vcf)
              </button>
            </>
          )}
          <button className="btn-secondary" onClick={handleCopyShare} style={{ fontSize: '0.85rem', padding: '0.45rem 1rem', gap: '0.4rem' }}>
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
            border: '1px solid var(--border-muted)',
            borderRadius: '10px',
            padding: '1.4rem',
            boxShadow: 'var(--shadow-subtle)',
            boxSizing: 'border-box'
          }}
        >
          {/* Header Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', borderBottom: '1px solid var(--border-muted)', paddingBottom: '1rem', marginBottom: '1rem' }}>
            <img
              src="./ujjwal_avatar.jpeg"
              alt={PROFILE_DATA.name}
              style={{ width: '90px', height: '90px', borderRadius: '10px', objectFit: 'cover', border: '1px solid var(--border-dark)', flexShrink: 0 }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '1.55rem', color: 'var(--text-main)', fontWeight: 700, margin: 0, letterSpacing: '-0.02em' }}>{PROFILE_DATA.name}</h3>
                <span className="meta-tag" style={{ fontWeight: 700 }}>VERIFIED SDE</span>
              </div>
              <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)', margin: '0.15rem 0' }}>Software Engineer at ZFunds • Gurugram</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>B.Tech CSE (AI & ML) • VIT Vellore (2021-2025)</p>
            </div>
          </div>

          {/* Quick Glimpse Bio */}
          <div style={{ background: 'var(--bg-secondary)', padding: '0.8rem 1rem', borderRadius: '6px', border: '1px solid var(--border-muted)', marginBottom: '1rem' }}>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-main)', lineHeight: '1.5', margin: 0 }}>
              <strong>Executive Summary:</strong> Software Development Engineer at ZFunds driving ZIVA V2 WealthTech AI, Portfolio Analysis (97%+ latency reduction), and FastTrack KYC. Former Founding Engineer at Advor.ai (RabbitMQ &lt;150ms P99 latency & hybrid RAG).
            </p>
          </div>

          {/* Core Tech Stack Pills */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
              PRIMARY STACK & DOMAINS
            </div>
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
              {['Python', 'FastAPI', 'Flask', 'React', 'React Native', 'NodeJS', 'Express', 'RabbitMQ', 'Redis', 'AWS'].map((tech, idx) => (
                <span key={idx} style={{ fontSize: '0.72rem', background: '#ffffff', border: '1px solid var(--border-muted)', color: 'var(--text-muted)', padding: '0.15rem 0.5rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 3-Column Highlights */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', marginBottom: '1rem' }}>
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-muted)', padding: '0.6rem', borderRadius: '6px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>CURRENT ROLE</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)', marginTop: '0.1rem' }}>ZFunds SDE</div>
            </div>
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-muted)', padding: '0.6rem', borderRadius: '6px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>PAST FOUNDING</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)', marginTop: '0.1rem' }}>Advor.ai Engineer</div>
            </div>
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-muted)', padding: '0.6rem', borderRadius: '6px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>HACKATHON</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)', marginTop: '0.1rem' }}>1st Runner-Up</div>
            </div>
          </div>

          {/* Contact Bar */}
          <div style={{ borderTop: '1px solid var(--border-muted)', paddingTop: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.78rem' }}>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', color: 'var(--text-muted)' }}>
              {isRecruiter && (
                <>
                  <a href={`mailto:${PROFILE_DATA.email}`} style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600 }}>{PROFILE_DATA.email}</a>
                  <a href={`tel:${PROFILE_DATA.phone}`} style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600 }}>{PROFILE_DATA.phone}</a>
                </>
              )}
              <span>Gurugram, India</span>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', fontWeight: 500 }}>
              <a href="https://github.com/ujjwal-void" target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>GitHub</a>
              {isRecruiter && (
                <>
                  <a href="https://www.linkedin.com/in/ujjwal-ujjwal-dev/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>LinkedIn</a>
                  <a href="https://leetcode.com/u/ujjwal92/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>LeetCode</a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

