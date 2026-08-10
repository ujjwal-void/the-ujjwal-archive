import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Briefcase, Cpu, FileText, Atom, Sparkles } from 'lucide-react';
import { PROJECTS_DATA, WORK_EXPERIENCE, MEDIA_DATA, TECH_ESSAYS, PHYSICS_MATH_NOTES, SPORTS_TAKES } from '../data/portfolioData';

export default function GlobalSearch({ onNavigate }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const searchInputRef = useRef(null);
  const containerRef = useRef(null);

  // Keyboard shortcut listener (Ctrl+K or Cmd+K or ESC)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
        searchInputRef.current?.blur();
      }
    };

    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    setIsOpen(val.trim().length > 0);
  };

  const getResults = () => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    const matches = [];

    // Helper for safe text checking
    const matchesQuery = (text) => (text || '').toLowerCase().includes(q);

    // 1. Search Work Experience
    WORK_EXPERIENCE.forEach((w) => {
      const skillsStr = (w.skills || []).join(' ');
      const descStr = (w.highlights || []).join(' ');
      if (
        matchesQuery(w.role) ||
        matchesQuery(w.company) ||
        matchesQuery(w.summary) ||
        matchesQuery(skillsStr) ||
        matchesQuery(descStr)
      ) {
        matches.push({
          type: 'Experience',
          title: `${w.role} @ ${w.company}`,
          snippet: w.summary || (w.highlights && w.highlights[0]) || '',
          route: 'experience',
          icon: Briefcase,
        });
      }
    });

    // 2. Search Projects
    PROJECTS_DATA.forEach((p) => {
      const tagsStr = (p.tags || []).join(' ');
      const featStr = (p.keyFeatures || []).join(' ');
      if (
        matchesQuery(p.title) ||
        matchesQuery(p.description) ||
        matchesQuery(p.tagline) ||
        matchesQuery(p.category) ||
        matchesQuery(tagsStr) ||
        matchesQuery(featStr)
      ) {
        matches.push({
          type: 'Project',
          title: p.title,
          snippet: p.tagline || p.description || '',
          route: 'projects',
          icon: Cpu,
        });
      }
    });

    // 3. Search Tech Essays
    TECH_ESSAYS.forEach((b) => {
      if (
        matchesQuery(b.title) ||
        matchesQuery(b.excerpt) ||
        matchesQuery(b.category) ||
        matchesQuery(b.codeSnippet)
      ) {
        matches.push({
          type: 'Tech Essay',
          title: b.title,
          snippet: b.excerpt || '',
          route: 'essays',
          icon: FileText,
        });
      }
    });

    // 4. Search Physics & Math Notes
    PHYSICS_MATH_NOTES.forEach((pm) => {
      if (
        matchesQuery(pm.title) ||
        matchesQuery(pm.summary) ||
        matchesQuery(pm.csConnection) ||
        matchesQuery(pm.category) ||
        matchesQuery(pm.formula)
      ) {
        matches.push({
          type: 'Physics & Math',
          title: pm.title,
          snippet: pm.summary ? pm.summary.substring(0, 90) + '...' : '',
          route: 'physics',
          icon: Atom,
        });
      }
    });

    // 5. Search Screen & Spine (Cinema, Anime & Books)
    MEDIA_DATA.forEach((m) => {
      if (
        matchesQuery(m.title) ||
        matchesQuery(m.review) ||
        matchesQuery(m.creator) ||
        matchesQuery(m.recommendation)
      ) {
        matches.push({
          type: `Screen & Spine (${m.type || 'Review'})`,
          title: m.title,
          snippet: m.review ? m.review.substring(0, 90) + '...' : '',
          route: 'culture',
          icon: Sparkles,
        });
      }
    });

    // 6. Search Sports Takes
    SPORTS_TAKES.forEach((s) => {
      if (
        matchesQuery(s.title) ||
        matchesQuery(s.opinion) ||
        matchesQuery(s.sport) ||
        matchesQuery(s.keyTakeaway)
      ) {
        matches.push({
          type: `Sports (${s.sport})`,
          title: s.title,
          snippet: s.opinion ? s.opinion.substring(0, 90) + '...' : '',
          route: 'culture',
          icon: Sparkles,
        });
      }
    });

    return matches;
  };

  const results = getResults();

  const handleResultClick = (route) => {
    onNavigate(route);
    setQuery('');
    setIsOpen(false);
  };

  const clearSearch = () => {
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="search-container container" ref={containerRef}>
      <div className="search-wrapper">
        <Search size={16} className="search-icon" />
        <input
          ref={searchInputRef}
          type="text"
          className="search-input"
          placeholder="Search projects, experience, RAG, physics, math, screen & spine..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(query.trim().length > 0)}
        />

        {query.length > 0 ? (
          <button
            onClick={clearSearch}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '0 0.3rem',
            }}
            title="Clear search"
          >
            <X size={14} />
          </button>
        ) : (
          <span
            style={{
              fontSize: '0.72rem',
              background: 'var(--bg-secondary)',
              padding: '0.2rem 0.5rem',
              borderRadius: '4px',
              color: 'var(--text-dim)',
              fontFamily: 'var(--font-mono)',
              border: '1px solid var(--border-muted)',
            }}
          >
            Ctrl + K
          </span>
        )}
      </div>

      {isOpen && (
        <div className="search-results-dropdown">
          {results.length === 0 ? (
            <div
              style={{
                padding: '1rem',
                textAlign: 'center',
                color: 'var(--text-dim)',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              No matches found for "{query}". Try searching for <strong style={{ color: 'var(--accent-indigo)' }}>"Go"</strong>, <strong style={{ color: 'var(--accent-indigo)' }}>"RAG"</strong>, or <strong style={{ color: 'var(--accent-indigo)' }}>"ZFunds"</strong>.
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
                    borderBottom: '1px solid var(--border-muted)',
                    cursor: 'pointer',
                    transition: 'background 0.15s ease',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'space-between',
                      marginBottom: '0.2rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <IconComp size={14} style={{ color: 'var(--accent-indigo)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>
                        {item.title}
                      </span>
                    </div>
                    <span className="meta-tag">{item.type}</span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      margin: 0,
                      paddingLeft: '1.4rem',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.snippet}
                  </p>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
