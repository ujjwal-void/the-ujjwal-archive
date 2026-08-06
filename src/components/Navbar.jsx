import React, { useState } from 'react';
import { Menu, X, Zap, Cpu, Film, BookOpen, Trophy, Link as LinkIcon } from 'lucide-react';

export default function Navbar({ activeRoute, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (route) => {
    onNavigate(route);
    setMobileOpen(false);
  };

  return (
    <header className="header-nav" id="nav-container">
      <nav className="nav-bar">
        <a href="#home" className="brand-logo" onClick={(e) => { e.preventDefault(); handleNav('home'); }}>
          <div className="avatar-badge-wrap">
            <span className="avatar-fallback">⚡</span>
          </div>
          <span>Ujjwal<span style={{ color: 'var(--accent-cyan)' }}>.dev</span></span>
        </a>

        <ul className="nav-links">
          <li>
            <button className={`nav-btn ${activeRoute === 'home' ? 'active' : ''}`} onClick={() => handleNav('home')}>
              <Zap size={16} /> Sanctuary
            </button>
          </li>
          <li>
            <button className={`nav-btn ${activeRoute === 'projects' ? 'active' : ''}`} onClick={() => handleNav('projects')}>
              <Cpu size={16} /> Projects
            </button>
          </li>
          <li>
            <button className={`nav-btn ${activeRoute === 'media' ? 'active' : ''}`} onClick={() => handleNav('media')}>
              <Film size={16} /> Media Vault
            </button>
          </li>
          <li>
            <button className={`nav-btn ${activeRoute === 'teaching' ? 'active' : ''}`} onClick={() => handleNav('teaching')}>
              <BookOpen size={16} /> Teaching Hub
            </button>
          </li>
          <li>
            <button className={`nav-btn ${activeRoute === 'sports' ? 'active' : ''}`} onClick={() => handleNav('sports')}>
              <Trophy size={16} /> Sports Takes
            </button>
          </li>
          <li>
            <button className={`nav-btn linktree-highlight ${activeRoute === 'links' ? 'active' : ''}`} onClick={() => handleNav('links')}>
              <LinkIcon size={16} /> Bio Linktree
            </button>
          </li>
        </ul>

        {/* Mobile menu icon */}
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="mobile-dropdown">
          <button className={`mobile-nav-btn ${activeRoute === 'home' ? 'active' : ''}`} onClick={() => handleNav('home')}>
            ⚡ Sanctuary Home
          </button>
          <button className={`mobile-nav-btn ${activeRoute === 'projects' ? 'active' : ''}`} onClick={() => handleNav('projects')}>
            🧠 Craftsman Projects
          </button>
          <button className={`mobile-nav-btn ${activeRoute === 'media' ? 'active' : ''}`} onClick={() => handleNav('media')}>
            🍿 Media Vault
          </button>
          <button className={`mobile-nav-btn ${activeRoute === 'teaching' ? 'active' : ''}`} onClick={() => handleNav('teaching')}>
            📚 Teaching Hub
          </button>
          <button className={`mobile-nav-btn ${activeRoute === 'sports' ? 'active' : ''}`} onClick={() => handleNav('sports')}>
            ⚽ Sports Takes
          </button>
          <button className="mobile-nav-btn linktree-highlight" onClick={() => handleNav('links')}>
            🔗 Standalone Linktree
          </button>
        </div>
      )}
    </header>
  );
}
