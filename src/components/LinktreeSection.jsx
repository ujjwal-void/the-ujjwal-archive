import React, { useState, useEffect } from 'react';
import { Copy, Check, Sparkles, Cpu, BookOpen, Film, Trophy, Bot, Link as LinkIcon, ExternalLink, Code2, FileText, Briefcase, Atom } from 'lucide-react';
import { PROFILE_DATA, LINKTREE_LINKS } from '../data/portfolioData';
import { checkIsRecruiterMode } from '../utils/privacyHelper';

const GithubIcon = ({ size = 20, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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
      case 'FileText': return <FileText size={20} style={{ color: 'var(--text-main)' }} />;
      case 'Atom': return <Atom size={20} style={{ color: 'var(--accent-indigo)' }} />;
      case 'Code2': return <Code2 size={20} style={{ color: 'var(--text-main)' }} />;
      case 'Github': return <GithubIcon size={20} style={{ color: 'var(--text-main)' }} />;
      case 'Linkedin': return <LinkedinIcon size={20} style={{ color: 'var(--text-main)' }} />;
      case 'Briefcase': return <Briefcase size={20} style={{ color: 'var(--text-main)' }} />;
      case 'Cpu': return <Cpu size={20} style={{ color: 'var(--text-main)' }} />;
      case 'BookOpen': return <BookOpen size={20} style={{ color: 'var(--text-main)' }} />;
      default: return <LinkIcon size={20} style={{ color: 'var(--text-main)' }} />;
    }
  };

  const handleLinkClick = (link) => {
    if (link.id === 'leetcode-profile' && !isRecruiter) {
      return;
    }

    if (link.id === 'resume-pdf') {
      if (isRecruiter) {
        const a = document.createElement('a');
        a.href = './Ujjwal_Ujjwal_Resume.pdf';
        a.download = 'Ujjwal_Ujjwal_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
      onNavigate('experience');
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

      <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2rem' }}>
        <button className="btn-secondary" onClick={handleCopy} style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem', gap: '0.4rem' }}>
          {copied ? <Check size={16} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={16} />}
          {copied ? 'Copied Linktree Link!' : 'Copy Linktree Link'}
        </button>
        <button className="btn-primary" onClick={() => onNavigate('home')} style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem', gap: '0.4rem' }}>
          <Sparkles size={16} /> Open Full Archive
        </button>
      </div>

      <div className="linktree-card-list">
        {LINKTREE_LINKS.map(link => (
          <div
            key={link.id}
            className={`linktree-link-item ${link.highlight ? 'highlight' : ''}`}
            onClick={() => handleLinkClick(link)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {getIcon(link.icon)}
              <div>
                <div style={{ fontWeight: 600, fontSize: '1.02rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  {link.title}
                  {link.url.startsWith('http') && <ExternalLink size={13} style={{ color: 'var(--text-dim)' }} />}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{link.description}</div>
              </div>
            </div>
            {link.badge && (
              <span className="meta-tag" style={{ fontSize: '0.72rem' }}>{link.badge}</span>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
        Ujjwal Ujjwal • Software Engineer • Standalone Bio Link
      </div>
    </div>
  );
}

