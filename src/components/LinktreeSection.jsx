import React, { useState, useEffect } from 'react';
import { Copy, Check, Sparkles, Cpu, BookOpen, Film, Trophy, Bot, Link as LinkIcon, ExternalLink, Code2, FileText, Briefcase, Lock } from 'lucide-react';
import { PROFILE_DATA, LINKTREE_LINKS } from '../data/portfolioData';
import { checkIsRecruiterMode } from '../utils/privacyHelper';

export default function LinktreeSection({ onNavigate }) {
  const [copied, setCopied] = useState(false);
  const [isRecruiter, setIsRecruiter] = useState(false);

  useEffect(() => {
    setIsRecruiter(checkIsRecruiterMode());
  }, []);

  const handleCopy = () => {
    const url = window.location.origin + window.location.pathname + '#links';
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles size={20} style={{ color: 'var(--accent-indigo)' }} />;
      case 'FileText': return <FileText size={20} style={{ color: 'var(--accent-emerald)' }} />;
      case 'Code2': return <Code2 size={20} style={{ color: 'var(--accent-amber)' }} />;
      case 'Briefcase': return <Briefcase size={20} style={{ color: 'var(--accent-blue)' }} />;
      case 'Cpu': return <Cpu size={20} style={{ color: 'var(--accent-purple)' }} />;
      case 'BookOpen': return <BookOpen size={20} style={{ color: 'var(--accent-emerald)' }} />;
      default: return <LinkIcon size={20} />;
    }
  };

  const handleLinkClick = (link) => {
    if (link.id === 'resume-pdf' && !isRecruiter) {
      alert('🔒 Confidential Resume Pass: Full official resume PDF is protected from public web crawlers. Submit via Recruiter Pass URL.');
      return;
    }

    if (link.url.startsWith('http')) {
      window.open(link.url, '_blank', 'noopener,noreferrer');
    } else {
      const route = link.url.replace('#', '') || 'home';
      onNavigate(route);
    }
  };

  return (
    <div className="linktree-standalone">
      {/* Avatar Image */}
      <img
        src="./ujjwal_avatar.jpeg"
        alt={PROFILE_DATA.name}
        className="linktree-avatar"
      />
      
      <h1 className="linktree-title">{PROFILE_DATA.name}</h1>
      <p className="linktree-bio">{PROFILE_DATA.tagline}</p>

      {/* Public Privacy Shield Indicator */}
      {!isRecruiter && (
        <div style={{ background: '#fef3c7', border: '1px dashed #fde68a', color: '#92400e', fontSize: '0.78rem', padding: '0.4rem 0.9rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Lock size={14} style={{ color: '#b45309' }} />
          <span>Privacy Shield Active: Contact & CGPA Protected</span>
        </div>
      )}

      <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2rem' }}>
        <button className="btn-glass" onClick={handleCopy} style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem', gap: '0.4rem' }}>
          {copied ? <Check size={16} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={16} />}
          {copied ? 'Copied Linktree Link!' : 'Copy Linktree Link'}
        </button>
        <button className="btn-primary" onClick={() => onNavigate('home')} style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem', gap: '0.4rem' }}>
          <Sparkles size={16} /> Open Full Archive
        </button>
      </div>

      <div className="linktree-card-list">
        {LINKTREE_LINKS.map(link => {
          const isProtectedResume = link.id === 'resume-pdf' && !isRecruiter;

          return (
            <div
              key={link.id}
              className={`linktree-link-item ${link.highlight ? 'highlight' : ''}`}
              onClick={() => handleLinkClick(link)}
              style={{ opacity: isProtectedResume ? 0.85 : 1 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {getIcon(link.icon)}
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.02rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    {link.title}
                    {isProtectedResume && <Lock size={13} style={{ color: '#b45309' }} />}
                    {link.url.startsWith('http') && <ExternalLink size={13} style={{ color: 'var(--text-dim)' }} />}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: isProtectedResume ? '#b45309' : 'var(--text-muted)' }}>
                    {isProtectedResume ? '🔒 Confidential Resume Pass (Protected in Public View)' : link.description}
                  </div>
                </div>
              </div>
              {link.badge && (
                <span className="meta-tag" style={{ fontSize: '0.72rem' }}>{isProtectedResume ? 'LOCKED' : link.badge}</span>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
        ⚡ Ujjwal Ujjwal • Software Engineer • Standalone Bio Link
      </div>
    </div>
  );
}
