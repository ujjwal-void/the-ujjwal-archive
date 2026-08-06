import React, { useState } from 'react';
import { Copy, Check, Sparkles, Cpu, BookOpen, Film, Trophy, Bot, Link as LinkIcon } from 'lucide-react';
import { PROFILE_DATA, LINKTREE_LINKS } from '../data/portfolioData';

export default function LinktreeSection({ onNavigate }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = window.location.origin + window.location.pathname + '#links';
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles size={20} style={{ color: 'var(--accent-cyan)' }} />;
      case 'Cpu': return <Cpu size={20} style={{ color: 'var(--accent-purple)' }} />;
      case 'BookOpen': return <BookOpen size={20} style={{ color: 'var(--accent-emerald)' }} />;
      case 'Film': return <Film size={20} style={{ color: 'var(--accent-amber)' }} />;
      case 'Trophy': return <Trophy size={20} style={{ color: 'var(--accent-rose)' }} />;
      case 'Bot': return <Bot size={20} style={{ color: 'var(--accent-cyan)' }} />;
      default: return <LinkIcon size={20} />;
    }
  };

  return (
    <div className="linktree-standalone">
      <div className="linktree-avatar" style={{ background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-cyan))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', boxShadow: 'var(--shadow-purple)' }}>
        ⚡
      </div>
      
      <h1 className="linktree-title">{PROFILE_DATA.name}</h1>
      <p className="linktree-bio">{PROFILE_DATA.tagline}</p>

      <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2rem' }}>
        <button className="btn-glass" onClick={handleCopy} style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem', gap: '0.4rem' }}>
          {copied ? <Check size={16} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={16} />}
          {copied ? 'Copied to Clipboard!' : 'Copy Linktree URL'}
        </button>
        <button className="btn-primary" onClick={() => onNavigate('home')} style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem', gap: '0.4rem' }}>
          <Sparkles size={16} /> Open Full Sanctuary
        </button>
      </div>

      <div className="linktree-card-list">
        {LINKTREE_LINKS.map(link => (
          <div
            key={link.id}
            className={`linktree-link-item ${link.highlight ? 'highlight' : ''}`}
            onClick={() => {
              const route = link.url.replace('#', '');
              onNavigate(route);
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {getIcon(link.icon)}
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>{link.title}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{link.description}</div>
              </div>
            </div>
            {link.badge && (
              <span style={{ fontSize: '0.75rem', background: 'rgba(56, 189, 248, 0.15)', color: 'var(--accent-cyan)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>{link.badge}</span>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
        ⚡ Built for the love of the game • Standalone Bio Link
      </div>
    </div>
  );
}
