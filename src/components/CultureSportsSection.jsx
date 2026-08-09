import React, { useState } from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import { MEDIA_DATA } from '../data/portfolioData';

export default function CultureSportsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredMedia = activeFilter === 'all'
    ? MEDIA_DATA
    : MEDIA_DATA.filter(item => item.type === activeFilter);

  const getImageSrc = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    const cleanPath = url.replace(/^\.\//, '').replace(/^\//, '');
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <span className="meta-tag meta-amber">CULTURE REVIEWS</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                [{MEDIA_DATA.length} Total Logs]
              </span>
            </div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>🍿 Culture & Media Reviews</h2>
            <p style={{ color: 'var(--text-muted)' }}>Personal ratings, reviews, and recommendations for anime, movies, and literature.</p>
          </div>

          <div style={{ display: 'flex', gap: '0.4rem', background: 'var(--bg-card)', padding: '0.3rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)', flexWrap: 'wrap' }}>
            <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All Notes</button>
            <button className={`filter-btn ${activeFilter === 'anime' ? 'active' : ''}`} onClick={() => setActiveFilter('anime')}>Anime ⛩️</button>
            <button className={`filter-btn ${activeFilter === 'movie' ? 'active' : ''}`} onClick={() => setActiveFilter('movie')}>Movies 🎬</button>
            <button className={`filter-btn ${activeFilter === 'book' ? 'active' : ''}`} onClick={() => setActiveFilter('book')}>Books 📖</button>
          </div>
        </div>
      </div>

      {/* Main Grid View */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {/* Media Reviews Grid */}
        {filteredMedia.length > 0 && (
          <div>
            <div className="grid-2">
              {filteredMedia.map(item => (
                <div key={item.id} className="media-card">
                  <div className="media-header">
                    <img src={getImageSrc(item.image)} alt={item.title} className="media-cover" />
                    <span className="media-tag">{item.type} • {item.year}</span>
                  </div>

                  <div className="media-body" style={{ gap: '0.9rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                        <h3 style={{ fontSize: '1.4rem' }}>{item.title}</h3>
                        <span className="meta-tag meta-emerald" style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                          <Star size={12} fill="currentColor" /> {item.rating}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>By {item.creator}</p>
                    </div>

                    {/* Recommendation Badge */}
                    <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', padding: '0.5rem 0.8rem', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <ThumbsUp size={15} style={{ color: '#047857', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#047857', fontFamily: 'var(--font-mono)' }}>
                        RECOMMENDATION: {item.recommendation}
                      </span>
                    </div>

                    {/* Personal Review Block */}
                    <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-muted)', borderRadius: 'var(--radius-sm)', padding: '1rem' }}>
                      <h4 style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>MY REVIEW</h4>
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: '1.6', margin: 0 }}>"{item.review}"</p>
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
