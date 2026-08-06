import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { PROJECTS_DATA, MEDIA_DATA, TEACHING_BLOGS, SPORTS_TAKES } from '../data/portfolioData';

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
        matches.push({ type: 'Project 🧠', title: p.title, snippet: p.tagline, route: 'projects' });
      }
    });

    MEDIA_DATA.forEach(m => {
      if (m.title.toLowerCase().includes(q) || m.summary.toLowerCase().includes(q) || m.personalImpact.toLowerCase().includes(q)) {
        matches.push({ type: `Media (${m.type}) 🍿`, title: m.title, snippet: m.summary.substring(0, 85) + '...', route: 'media' });
      }
    });

    TEACHING_BLOGS.forEach(b => {
      if (b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q) || b.category.toLowerCase().includes(q)) {
        matches.push({ type: 'Teaching Blog 📚', title: b.title, snippet: b.excerpt, route: 'teaching' });
      }
    });

    SPORTS_TAKES.forEach(s => {
      if (s.title.toLowerCase().includes(q) || s.opinion.toLowerCase().includes(q) || s.sport.toLowerCase().includes(q)) {
        matches.push({ type: 'Sports Take ⚽', title: s.title, snippet: s.opinion.substring(0, 85) + '...', route: 'sports' });
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
        <Search size={18} className="search-icon" />
        <input
          ref={searchInputRef}
          type="text"
          className="search-input"
          placeholder="Search projects, anime, books, tech blogs, and sports takes..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(query.trim().length > 0)}
        />
        <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.06)', padding: '0.2rem 0.6rem', borderRadius: '4px', color: 'var(--text-dim)' }}>
          Ctrl + K
        </span>
      </div>

      {isOpen && (
        <div className="search-results-dropdown">
          {results.length === 0 ? (
            <div style={{ padding: '1rem', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.88rem' }}>
              No matches found for "{query}" in Ujjwal's Operating System.
            </div>
          ) : (
            results.map((item, idx) => (
              <div key={idx} className="search-item" onClick={() => handleResultClick(item.route)}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>{item.title}</span>
                  <span style={{ fontSize: '0.72rem', background: 'rgba(56, 189, 248, 0.15)', color: 'var(--accent-cyan)', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>{item.type}</span>
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
