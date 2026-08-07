import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { PROJECTS_DATA, MEDIA_DATA, TECH_ESSAYS, PHYSICS_MATH_NOTES, SPORTS_TAKES } from '../data/portfolioData';

export default function GlobalSearch({ onNavigate }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    setIsOpen(val.trim().length > 0);
  };

  const getResults = () => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const matches = [];

    PROJECTS_DATA.forEach(p => {
      if (p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q))) {
        matches.push({ type: 'Project', title: p.title, snippet: p.tagline, route: 'projects' });
      }
    });

    TECH_ESSAYS.forEach(b => {
      if (b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q) || b.category.toLowerCase().includes(q)) {
        matches.push({ type: 'Tech Essay', title: b.title, snippet: b.excerpt, route: 'essays' });
      }
    });

    PHYSICS_MATH_NOTES.forEach(pm => {
      if (pm.title.toLowerCase().includes(q) || pm.summary.toLowerCase().includes(q) || pm.csConnection.toLowerCase().includes(q)) {
        matches.push({ type: 'Physics & Math', title: pm.title, snippet: pm.summary.substring(0, 85) + '...', route: 'physics' });
      }
    });

    MEDIA_DATA.forEach(m => {
      if (m.title.toLowerCase().includes(q) || m.summary.toLowerCase().includes(q) || m.personalImpact.toLowerCase().includes(q)) {
        matches.push({ type: `Culture (${m.type})`, title: m.title, snippet: m.summary.substring(0, 85) + '...', route: 'culture' });
      }
    });

    SPORTS_TAKES.forEach(s => {
      if (s.title.toLowerCase().includes(q) || s.opinion.toLowerCase().includes(q) || s.sport.toLowerCase().includes(q)) {
        matches.push({ type: 'Sports Note', title: s.title, snippet: s.opinion.substring(0, 85) + '...', route: 'culture' });
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

  return (
    <div className="search-container container">
      <div className="search-wrapper">
        <Search size={16} className="search-icon" />
        <input
          ref={searchInputRef}
          type="text"
          className="search-input"
          placeholder="Search projects, physics, math, tech essays, culture, and sports..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(query.trim().length > 0)}
        />
        <span style={{ fontSize: '0.72rem', background: 'var(--bg-secondary)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
          Ctrl + K
        </span>
      </div>

      {isOpen && (
        <div className="search-results-dropdown">
          {results.length === 0 ? (
            <div style={{ padding: '0.8rem', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
              No matches found for "{query}".
            </div>
          ) : (
            results.map((item, idx) => (
              <div key={idx} className="search-item" onClick={() => handleResultClick(item.route)}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>{item.title}</span>
                  <span className="meta-tag">{item.type}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{item.snippet}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
