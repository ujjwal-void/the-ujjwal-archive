import React, { useState } from 'react';
import { Eye, Unlock, Bot, Quote, Tag } from 'lucide-react';
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
    alert(`🤖 UJJWAL'S NARRATIVE VERDICT for "${title}":\n\n${opinion}\n\nConclusion: A masterpiece in structural payoff. Essential viewing/reading if you value narrative engineering!`);
  };

  return (
    <div>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <span className="meta-tag meta-amber">NARRATIVE SANCTUARY</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>[DOSSIER_COUNT: {MEDIA_DATA.length}]</span>
            </div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>🍿 Classified Media Vault</h2>
            <p style={{ color: 'var(--text-muted)' }}>Stories that shaped my mindset. Featuring summary, personal impact, and classified spoiler redactions.</p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--bg-card)', padding: '0.3rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
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
                    <span className="meta-tag meta-purple">{item.impactRating}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>CREATOR: {item.creator}</p>
                </div>

                <div className="relatability-meter">
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>Relatability Gauge</span>
                  <div className="meter-bar">
                    <div className="meter-fill" style={{ width: `${item.relatabilityScore}%` }}></div>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)' }}>{item.relatabilityScore}%</span>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>SUMMARY</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.summary}</p>
                </div>

                {/* Emotional Impact Blockquote */}
                <div style={{ background: 'rgba(251, 191, 36, 0.04)', borderLeft: '3px solid var(--accent-amber)', padding: '0.9rem 1.1rem', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                    <Quote size={14} style={{ color: 'var(--accent-amber)' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-amber)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>HOW IT AFFECTED ME</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', fontStyle: 'italic', lineHeight: '1.5' }}>"{item.personalImpact}"</p>
                </div>

                {/* Classified Spoiler Shield Box */}
                {item.spoilerContent.hasSpoilers && (
                  <div className="spoiler-box">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-rose)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                        [CLASSIFIED_SPOILER_REDACTION]
                      </span>
                      {isUnlocked && <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.2rem', fontFamily: 'var(--font-mono)' }}><Unlock size={12} /> UNLOCKED</span>}
                    </div>

                    <div className={`spoiler-content ${isUnlocked ? '' : 'blurred'}`}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}><strong>Climax Analysis:</strong> {item.spoilerContent.twistSummary}</p>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        {item.spoilerContent.keyThemes.map((theme, idx) => (
                          <span key={idx} style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.06)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>#{theme}</span>
                        ))}
                      </div>
                    </div>

                    {!isUnlocked && (
                      <div className="spoiler-overlay-toggle" onClick={() => toggleSpoiler(item.id)}>
                        <Eye size={22} style={{ color: 'var(--accent-rose)' }} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-mono)' }}>UNREDACT CLASSIFIED SPOILER</span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Click to reveal plot twists & climax narrative</span>
                      </div>
                    )}
                  </div>
                )}

                <button className="btn-glass" onClick={() => handleAiVerdict(item.title, item.spoilerContent.aiOpinion)} style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                  <Bot size={16} /> [QUERY_NARRATIVE_VERDICT]
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
