import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, Briefcase, Cpu, FileText, Atom, Sparkles, Command } from 'lucide-react';
import { PROJECTS_DATA, WORK_EXPERIENCE, MEDIA_DATA, TECH_STORIES, PHYSICS_MATH_NOTES } from '../data/portfolioData';

export default function GlobalSearch({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = useState('');
  const searchInputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => searchInputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOpen && e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const matches = [];

    const matchesQuery = (str) => {
      if (!str || typeof str !== 'string') return false;
      return str.toLowerCase().includes(q);
    };

    // 1. Search Work Experience
    (WORK_EXPERIENCE || []).forEach((w) => {
      const company = w.company || '';
      const role = w.role || '';
      const highlights = w.highlights || [];
      const techStack = w.techStack || [];

      const isMatch =
        matchesQuery(company) ||
        matchesQuery(role) ||
        highlights.some((h) => matchesQuery(h)) ||
        techStack.some((t) => matchesQuery(t));

      if (isMatch) {
        matches.push({
          type: 'Experience',
          title: `${role} @ ${company}`,
          snippet: highlights[0] || `${role} at ${company}`,
          route: 'experience',
          icon: Briefcase,
        });
      }
    });

    // 2. Search Projects
    (PROJECTS_DATA || []).forEach((p) => {
      const title = p.title || '';
      const tagline = p.tagline || '';
      const description = p.description || '';
      const tags = p.tags || [];
      const keyFeatures = p.keyFeatures || [];

      const isMatch =
        matchesQuery(title) ||
        matchesQuery(tagline) ||
        matchesQuery(description) ||
        tags.some((t) => matchesQuery(t)) ||
        keyFeatures.some((f) => matchesQuery(f));

      if (isMatch) {
        matches.push({
          type: 'Project',
          title: title,
          snippet: tagline || description,
          route: 'projects',
          icon: Cpu,
        });
      }
    });

    // 3. Search Tech Stories
    (TECH_STORIES || []).forEach((b) => {
      const title = b.title || '';
      const excerpt = b.excerpt || '';
      const category = b.category || '';

      const isMatch =
        matchesQuery(title) ||
        matchesQuery(excerpt) ||
        matchesQuery(category);

      if (isMatch) {
        matches.push({
          type: 'Tech Story',
          title: title,
          snippet: excerpt,
          route: 'essays',
          icon: FileText,
        });
      }
    });

    // 4. Search Physics & Math
    (PHYSICS_MATH_NOTES || []).forEach((n) => {
      const title = n.title || '';
      const summary = n.summary || '';
      const formula = n.formula || n.latexFormula || '';
      const csConnection = n.csConnection || n.intuitiveExplanation || '';

      const isMatch =
        matchesQuery(title) ||
        matchesQuery(summary) ||
        matchesQuery(formula) ||
        matchesQuery(csConnection);

      if (isMatch) {
        matches.push({
          type: 'Physics / Math',
          title: title,
          snippet: summary,
          route: 'physics',
          icon: Atom,
        });
      }
    });

    // 5. Search Screen & Spine Logs
    (MEDIA_DATA || []).forEach((m) => {
      const title = m.title || '';
      const creator = m.creator || '';
      const review = m.review || '';
      const characterArc = m.characterArc || '';
      const detailedReview = m.detailedReview || '';

      const isMatch =
        matchesQuery(title) ||
        matchesQuery(creator) ||
        matchesQuery(review) ||
        matchesQuery(characterArc) ||
        matchesQuery(detailedReview);

      if (isMatch) {
        matches.push({
          type: 'Screen & Spine',
          title: title,
          snippet: review || (detailedReview ? detailedReview.substring(0, 100) + '...' : ''),
          route: 'culture',
          icon: Sparkles,
        });
      }
    });

    return matches.slice(0, 8);
  }, [query]);

  const handleResultClick = (route) => {
    onNavigate(route);
    setQuery('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="command-palette-overlay" onClick={onClose}>
      <div className="command-palette-modal" ref={containerRef} onClick={(e) => e.stopPropagation()}>
        {/* Header Input Area */}
        <div className="command-palette-header">
          <Search size={18} style={{ color: 'var(--accent-indigo)' }} />
          <input
            ref={searchInputRef}
            type="text"
            className="command-palette-input"
            placeholder="Search projects, skills, experience, RAG, Screen & Spine..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              title="Clear input"
              style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '0.2rem' }}
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close search"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-muted)',
              borderRadius: '6px',
              padding: '0.25rem 0.55rem',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              fontSize: '0.75rem',
              fontWeight: 600
            }}
          >
            <X size={15} />
            <span className="nav-search-kbd">ESC</span>
          </button>
        </div>

        {/* Results / Empty Body */}
        <div className="command-palette-body">
          {query.trim() === '' ? (
            <div className="command-palette-empty">
              <Command size={24} style={{ color: 'var(--accent-indigo)', marginBottom: '0.5rem' }} />
              <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)', margin: '0 0 0.2rem' }}>Quick Search Archive</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', margin: 0 }}>Try searching for <span style={{ color: 'var(--accent-indigo)' }}>"Python"</span>, <span style={{ color: 'var(--accent-indigo)' }}>"RAG"</span>, <span style={{ color: 'var(--accent-indigo)' }}>"ZFunds"</span>, or <span style={{ color: 'var(--accent-indigo)' }}>"FastAPI"</span></p>
            </div>
          ) : results.length === 0 ? (
            <div className="command-palette-empty">
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>No matches found for "{query}".</p>
            </div>
          ) : (
            results.map((item, idx) => {
              const IconComp = item.icon || Search;
              return (
                <div
                  key={idx}
                  className="search-item"
                  onClick={() => handleResultClick(item.route)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    transition: 'background 0.15s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                      <IconComp size={15} style={{ color: 'var(--accent-indigo)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
                        {item.title}
                      </span>
                    </div>
                    <span className="meta-tag">{item.type}</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, paddingLeft: '1.55rem', lineHeight: 1.4 }}>
                    {item.snippet}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="command-palette-footer">
          <span>Search portfolio data, code & notes</span>
          <span><span style={{ fontWeight: 600 }}>ESC</span> to exit</span>
        </div>
      </div>
    </div>
  );
}

