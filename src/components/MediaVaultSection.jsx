import React, { useState } from 'react';
import { ShieldAlert, Eye, Unlock, Bot } from 'lucide-react';
import { MEDIA_DATA } from '../data/portfolioData';

export default function MediaVaultSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [unlockedSpoilers, setUnlockedSpoilers] = useState({});

  const filteredMedia = activeFilter === 'all'
    ? MEDIA_DATA
    : MEDIA_DATA.filter(item => item.type === activeFilter);

  const toggleSpoiler = (id) => {
    setUnlockedSpoilers(prev => ({ ...prev, [id]: true }));
  };

  const handleAiVerdict = (title, opinion) => {
    alert(`🤖 Recommendation Verdict for "${title}":\n\n${opinion}\n\nUjjwal's Rating: Must-watch/must-read if you value narrative payoffs and character depth!`);
  };

  return (
    <div>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>🍿 Media Vault & Narrative Curation</h2>
            <p style={{ color: 'var(--text-muted)' }}>Stories that shaped my mindset. Featuring summary, personal impact, and spoiler-shielded plot analysis.</p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--bg-card)', padding: '0.3rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--glass-border)' }}>
            <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All Media</button>
            <button className={`filter-btn ${activeFilter === 'anime' ? 'active' : ''}`} onClick={() => setActiveFilter('anime')}>Anime ⛩️</button>
            <button className={`filter-btn ${activeFilter === 'movie' ? 'active' : ''}`} onClick={() => setActiveFilter('movie')}>Movies 🎬</button>
            <button className={`filter-btn ${activeFilter === 'book' ? 'active' : ''}`} onClick={() => setActiveFilter('book')}>Books 📖</button>
          </div>
        </div>
      </div>

      <div className="grid-2">
        {filteredMedia.map(item => {
          const isUnlocked = unlockedSpoilers[item.id] || !item.spoilerContent.hasSpoilers;

          return (
            <div key={item.id} className="media-card">
              <div className="media-header">
                <img src={item.image} alt={item.title} className="media-cover" />
                <span className="media-tag">{item.type} • {item.year}</span>
              </div>

              <div className="media-body">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                    <h3 style={{ fontSize: '1.4rem' }}>{item.title}</h3>
                    <span style={{ fontSize: '0.8rem', background: 'rgba(192, 132, 252, 0.15)', color: 'var(--accent-purple)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>{item.impactRating}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>By {item.creator}</p>
                </div>

                <div className="relatability-meter">
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>Relatability to Me</span>
                  <div className="meter-bar">
                    <div className="meter-fill" style={{ width: `${item.relatabilityScore}%` }}></div>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>{item.relatabilityScore}%</span>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)', marginBottom: '0.4rem' }}>Summary</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.summary}</p>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-purple)', marginBottom: '0.4rem' }}>How It Affected Me</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontStyle: 'italic', lineHeight: '1.5' }}>"{item.personalImpact}"</p>
                </div>

                {/* Spoiler Shield Component */}
                {item.spoilerContent.hasSpoilers && (
                  <div className="spoiler-box">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-rose)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <ShieldAlert size={15} /> Spoiler Shield Active
                      </span>
                      {isUnlocked && <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}><Unlock size={12} /> Unlocked</span>}
                    </div>

                    <div className={`spoiler-content ${isUnlocked ? '' : 'blurred'}`}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}><strong>Twist Analysis:</strong> {item.spoilerContent.twistSummary}</p>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        {item.spoilerContent.keyThemes.map((theme, idx) => (
                          <span key={idx} style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.06)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: 'var(--text-muted)' }}>{theme}</span>
                        ))}
                      </div>
                    </div>

                    {!isUnlocked && (
                      <div className="spoiler-overlay-toggle" onClick={() => toggleSpoiler(item.id)}>
                        <Eye size={24} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>Click to Reveal Spoiler Analysis</span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Shields plot twists until clicked</span>
                      </div>
                    )}
                  </div>
                )}

                <button className="btn-glass" onClick={() => handleAiVerdict(item.title, item.spoilerContent.aiOpinion)} style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
                  <Bot size={16} /> Why Should You Watch/Read This?
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
