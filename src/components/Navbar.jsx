import React, { useState } from 'react';
import { Menu, X, Zap, Briefcase, Cpu, Film, FileText, Atom, Link as LinkIcon } from 'lucide-react';

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
          <img
            src="./ujjwal_avatar.jpeg"
            alt="Ujjwal"
            style={{ width: '28px', height: '28px', borderRadius: '6px', objectFit: 'cover', border: '1px solid var(--border-muted)' }}
          />
          <span>Ujjwal</span>
        </a>

        <ul className="nav-links">
          <li>
            <button className={`nav-btn ${activeRoute === 'home' ? 'active' : ''}`} onClick={() => handleNav('home')}>
              <Zap size={15} /> Archive
            </button>
          </li>
          <li>
            <button className={`nav-btn ${activeRoute === 'experience' ? 'active' : ''}`} onClick={() => handleNav('experience')}>
              <Briefcase size={15} /> Experience
            </button>
          </li>
          <li>
            <button className={`nav-btn ${activeRoute === 'projects' ? 'active' : ''}`} onClick={() => handleNav('projects')}>
              <Cpu size={15} /> Projects
            </button>
          </li>
          <li>
            <button className={`nav-btn ${activeRoute === 'essays' || activeRoute === 'teaching' ? 'active' : ''}`} onClick={() => handleNav('essays')}>
              <FileText size={15} /> Tech Essays
            </button>
          </li>
          <li>
            <button className={`nav-btn ${activeRoute === 'physics' ? 'active' : ''}`} onClick={() => handleNav('physics')}>
              <Atom size={15} /> Physics & Math
            </button>
          </li>
          <li>
            <button className={`nav-btn ${activeRoute === 'culture' || activeRoute === 'media' || activeRoute === 'sports' ? 'active' : ''}`} onClick={() => handleNav('culture')}>
              <Film size={15} /> Screen & Spine
            </button>
          </li>
          <li>
            <button className={`nav-btn linktree-highlight ${activeRoute === 'links' ? 'active' : ''}`} onClick={() => handleNav('links')}>
              <LinkIcon size={15} /> Links
            </button>
          </li>
        </ul>

        {/* Mobile menu icon */}
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="mobile-dropdown">
          <button className={`mobile-nav-btn ${activeRoute === 'home' ? 'active' : ''}`} onClick={() => handleNav('home')}>
            ⚡ Archive Home
          </button>
          <button className={`mobile-nav-btn ${activeRoute === 'experience' ? 'active' : ''}`} onClick={() => handleNav('experience')}>
            💼 Work Experience & Resume
          </button>
          <button className={`mobile-nav-btn ${activeRoute === 'projects' ? 'active' : ''}`} onClick={() => handleNav('projects')}>
            🧠 Projects
          </button>
          <button className={`mobile-nav-btn ${activeRoute === 'card' ? 'active' : ''}`} onClick={() => handleNav('card')}>
            🎴 1-Page Developer Card
          </button>
          <button className={`mobile-nav-btn ${activeRoute === 'essays' || activeRoute === 'teaching' ? 'active' : ''}`} onClick={() => handleNav('essays')}>
            📝 Tech Essays & Explanations
          </button>
          <button className={`mobile-nav-btn ${activeRoute === 'physics' ? 'active' : ''}`} onClick={() => handleNav('physics')}>
            ⚛️ Physics & Mathematics Notes
          </button>
          <button className={`mobile-nav-btn ${activeRoute === 'culture' || activeRoute === 'media' || activeRoute === 'sports' ? 'active' : ''}`} onClick={() => handleNav('culture')}>
            🎬 Screen & Spine (Cinema & Books)
          </button>
          <button className="mobile-nav-btn linktree-highlight" onClick={() => handleNav('links')}>
            🔗 Standalone Linktree
          </button>
        </div>
      )}
    </header>
  );
}
