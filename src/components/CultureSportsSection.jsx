import React, { useState } from 'react';
import { Bot, Quote, Flame, Activity, Sparkles } from 'lucide-react';
import { MEDIA_DATA, SPORTS_TAKES } from '../data/portfolioData';

export default function CultureSportsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleAiVerdict = (title, opinion) => {
    alert(`🤖 Narrative Analysis for "${title}":\n\n${opinion}\n\nConclusion: Key structural payoff in narrative execution.`);
  };

  const isShowMedia = activeFilter === 'all' || ['anime', 'movie', 'book'].includes(activeFilter);
  const isShowSports = activeFilter === 'all' || activeFilter === 'sports';

  const filteredMedia = activeFilter === 'all'
    ? MEDIA_DATA
    : MEDIA_DATA.filter(item => item.type === activeFilter);

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <span className="meta-tag meta-amber">CULTURE & SPORTS NOTES</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                [{MEDIA_DATA.length + SPORTS_TAKES.length} Total Logs]
              </span>
            </div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>🍿 Anime, Movies, Books & Sports</h2>
            <p style={{ color: 'var(--text-muted)' }}>Personal reflections on stories, media analysis, and sports tactics.</p>
          </div>

          <div style={{ display: 'flex', gap: '0.4rem', background: 'var(--bg-card)', padding: '0.3rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)', flexWrap: 'wrap' }}>
            <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All Notes</button>
            <button className={`filter-btn ${activeFilter === 'anime' ? 'active' : ''}`} onClick={() => setActiveFilter('anime')}>Anime ⛩️</button>
            <button className={`filter-btn ${activeFilter === 'movie' ? 'active' : ''}`} onClick={() => setActiveFilter('movie')}>Movies 🎬</button>
            <button className={`filter-btn ${activeFilter === 'book' ? 'active' : ''}`} onClick={() => setActiveFilter('book')}>Books 📖</button>
            <button className={`filter-btn ${activeFilter === 'sports' ? 'active' : ''}`} onClick={() => setActiveFilter('sports')}>Sports ⚽</button>
          </div>
        </div>
      </div>

      {/* Main Grid View */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {/* Media Section Grid */}
        {isShowMedia && filteredMedia.length > 0 && (
          <div>
            {activeFilter === 'all' && (
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-main)', borderBottom: '1px solid var(--border-muted)', paddingBottom: '0.4rem' }}>
                🎬 Cinema, Anime & Literature
              </h3>
            )}
            <div className="grid-2">
              {filteredMedia.map(item => (
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
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>By {item.creator}</p>
                    </div>

                    <div className="relatability-meter">
                      <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>Relatability</span>
                      <div className="meter-bar">
                        <div className="meter-fill" style={{ width: `${item.relatabilityScore}%` }}></div>
                      </div>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-indigo)', fontFamily: 'var(--font-mono)' }}>{item.relatabilityScore}%</span>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>SUMMARY</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.summary}</p>
                    </div>

                    {/* Personal Impact */}
                    <div style={{ background: '#fef3c7', borderLeft: '3px solid var(--accent-amber)', padding: '0.9rem 1.1rem', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                        <Quote size={14} style={{ color: '#b45309' }} />
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#b45309', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>HOW IT AFFECTED ME</span>
                      </div>
                      <p style={{ fontSize: '0.88rem', color: '#78350f', fontStyle: 'italic', lineHeight: '1.5' }}>"{item.personalImpact}"</p>
                    </div>

                    {/* Clean Deep Narrative & Climax Breakdown Box (No Spoilers Shield / Blur) */}
                    {item.spoilerContent && (
                      <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-muted)', borderRadius: 'var(--radius-sm)', padding: '1rem' }}>
                        <div style={{ marginBottom: '0.5rem' }}>
                          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-indigo)', fontFamily: 'var(--font-mono)' }}>
                            [NARRATIVE & CLIMAX ANALYSIS]
                          </span>
                        </div>

                        <div>
                          <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', marginBottom: '0.5rem', lineHeight: '1.5' }}>
                            <strong>Climax Analysis:</strong> {item.spoilerContent.twistSummary}
                          </p>
                          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                            {item.spoilerContent.keyThemes.map((theme, idx) => (
                              <span key={idx} style={{ fontSize: '0.72rem', background: 'var(--bg-card)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: 'var(--text-muted)', border: '1px solid var(--border-muted)', fontFamily: 'var(--font-mono)' }}>#{theme}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    <button className="btn-glass" onClick={() => handleAiVerdict(item.title, item.spoilerContent.aiOpinion)} style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
                      <Bot size={16} /> Why this resonated with me
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sports Section Grid */}
        {isShowSports && SPORTS_TAKES.length > 0 && (
          <div>
            {activeFilter === 'all' && (
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-main)', borderBottom: '1px solid var(--border-muted)', paddingBottom: '0.4rem' }}>
                ⚽ Sports Tactics & Strategy
              </h3>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {SPORTS_TAKES.map(take => (
                <div key={take.id} className="card">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span className="meta-tag meta-amber">{take.sport}</span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{take.date}</span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'var(--bg-secondary)', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)' }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Hype Rating:</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-rose)', display: 'flex', alignItems: 'center', gap: '0.2rem', fontFamily: 'var(--font-mono)' }}>
                        {take.hypeScore}/100 <Flame size={14} />
                      </span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>{take.title}</h3>
                  
                  <div style={{ background: 'var(--bg-secondary)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--accent-indigo)', marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>TACTICAL OBSERVATION</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.6' }}>"{take.opinion}"</p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: '#d1fae5', padding: '0.9rem 1.1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #a7f3d0' }}>
                    <Activity size={20} style={{ color: '#059669', flexShrink: 0 }} />
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#047857', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>CONNECTION TO SYSTEMS ENGINEERING:</span>
                      <p style={{ fontSize: '0.88rem', color: '#065f46', marginTop: '0.1rem' }}>{take.keyTakeaway}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
