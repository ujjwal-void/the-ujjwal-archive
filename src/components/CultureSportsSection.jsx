import React, { useState, useEffect } from 'react';
import { Star, ThumbsUp, X, BookOpen, ExternalLink, MessageSquare } from 'lucide-react';
import { MEDIA_DATA } from '../data/portfolioData';

export default function CultureSportsSection() {
  const [activeFilter, setActiveFilter] = useState('featured');
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedMedia(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedMedia) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMedia]);

  const filteredMedia = activeFilter === 'featured'
    ? MEDIA_DATA.filter(item => item.id === 'obito-uchiha' || item.id === 'dorian-gray')
    : activeFilter === 'all'
    ? MEDIA_DATA
    : MEDIA_DATA.filter(item => item.type === activeFilter);

  const getImageSrc = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    const cleanPath = url.replace(/^\.\//, '').replace(/^\//, '');
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  const counts = {
    featured: MEDIA_DATA.filter(i => i.id === 'obito-uchiha' || i.id === 'dorian-gray').length,
    anime: MEDIA_DATA.filter(i => i.type === 'anime').length,
    movie: MEDIA_DATA.filter(i => i.type === 'movie').length,
    book: MEDIA_DATA.filter(i => i.type === 'book').length,
    all: MEDIA_DATA.length,
  };

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <span className="meta-tag">SCREEN & SPINE LOGS</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                [{MEDIA_DATA.length} Total Logs]
              </span>
            </div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>Screen & Spine</h2>
            <p style={{ color: 'var(--text-muted)' }}>Personal character studies, literary breakdowns, and cinema logs across anime, movies, and literature.</p>
          </div>

          <div style={{ display: 'flex', gap: '0.35rem', background: 'var(--bg-secondary)', padding: '0.35rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-muted)', flexWrap: 'wrap' }}>
            <button className={`filter-btn ${activeFilter === 'featured' ? 'active' : ''}`} onClick={() => setActiveFilter('featured')}>
              Featured <span style={{ fontSize: '0.75rem', opacity: 0.8, fontFamily: 'var(--font-mono)' }}>({counts.featured})</span>
            </button>
            <button className={`filter-btn ${activeFilter === 'anime' ? 'active' : ''}`} onClick={() => setActiveFilter('anime')}>
              Anime <span style={{ fontSize: '0.75rem', opacity: 0.8, fontFamily: 'var(--font-mono)' }}>({counts.anime})</span>
            </button>
            <button className={`filter-btn ${activeFilter === 'movie' ? 'active' : ''}`} onClick={() => setActiveFilter('movie')}>
              Movies <span style={{ fontSize: '0.75rem', opacity: 0.8, fontFamily: 'var(--font-mono)' }}>({counts.movie})</span>
            </button>
            <button className={`filter-btn ${activeFilter === 'book' ? 'active' : ''}`} onClick={() => setActiveFilter('book')}>
              Books <span style={{ fontSize: '0.75rem', opacity: 0.8, fontFamily: 'var(--font-mono)' }}>({counts.book})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid View */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {filteredMedia.length > 0 && (
          <div>
            <div className="grid-2">
              {filteredMedia.map(item => (
                <div
                  key={item.id}
                  className="media-card"
                  onClick={() => setSelectedMedia(item)}
                  style={{ cursor: 'pointer', transition: 'transform 0.15s ease, border-color 0.15s ease' }}
                >
                  <div className="media-header">
                    <img src={getImageSrc(item.image)} alt={item.title} className="media-cover" />
                    <span className="media-tag">{item.type}</span>
                  </div>

                  <div className="media-body" style={{ gap: '0.9rem' }}>
                    <div>
                      <div style={{ marginBottom: '0.2rem' }}>
                        <h3 style={{ fontSize: '1.4rem' }}>{item.title}</h3>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>By {item.creator}</p>
                    </div>

                    {/* Short Summary Box */}
                    <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-muted)', borderRadius: 'var(--radius-sm)', padding: '1rem' }}>
                      <h4 style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>OVERVIEW</h4>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: '1.5', margin: 0 }}>"{item.review}"</p>
                    </div>

                    {/* Click CTA Button */}
                    <button
                      className="btn-secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedMedia(item);
                      }}
                      style={{ fontSize: '0.82rem', width: '100%', justifyContent: 'center', gap: '0.4rem' }}
                    >
                      <BookOpen size={14} /> Read Detailed Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* DETAILED REVIEW MODAL POP-UP */}
      {selectedMedia && (
        <div
          onClick={() => setSelectedMedia(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            zIndex: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              border: '1px solid #c7d2fe',
              borderRadius: '16px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 24px 60px rgba(15, 23, 42, 0.25)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '1.2rem 1.5rem',
                borderBottom: '1px solid var(--border-muted)',
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                position: 'sticky',
                top: 0,
                zIndex: 10,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span className="meta-tag" style={{ background: 'var(--accent-indigo)', color: '#ffffff', border: 'none' }}>
                  {selectedMedia.type.toUpperCase()}
                </span>
              </div>
              <button
                onClick={() => setSelectedMedia(null)}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border-muted)',
                  borderRadius: '6px',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                  marginLeft: 'auto',
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {/* Media Title & Cover Banner */}
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <img
                  src={getImageSrc(selectedMedia.image)}
                  alt={selectedMedia.title}
                  style={{
                    width: '100px',
                    height: '140px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    border: '1px solid var(--border-muted)',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <h2 style={{ fontSize: '1.8rem', marginBottom: '0.2rem', lineHeight: 1.2 }}>{selectedMedia.title}</h2>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0 }}>By {selectedMedia.creator}</p>
                </div>
              </div>

              {/* Character Arc Block */}
              {selectedMedia.characterArc && (
                <div style={{ background: '#f8fafc', borderLeft: '4px solid var(--accent-indigo)', padding: '1rem 1.2rem', borderRadius: '0 8px 8px 0' }}>
                  <h4 style={{ fontSize: '0.78rem', color: 'var(--accent-indigo)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)' }}>
                    CHARACTER ARC
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: '1.5', margin: 0, fontWeight: 500 }}>
                    {selectedMedia.characterArc}
                  </p>
                </div>
              )}

              {/* Emotional Impact Block */}
              {selectedMedia.emotionalImpact && (
                <div style={{ background: '#fef3c7', borderLeft: '4px solid #d97706', padding: '1rem 1.2rem', borderRadius: '0 8px 8px 0' }}>
                  <h4 style={{ fontSize: '0.78rem', color: '#b45309', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)' }}>
                    EMOTIONAL IMPACT
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: '#78350f', lineHeight: '1.5', margin: 0, fontWeight: 500 }}>
                    {selectedMedia.emotionalImpact}
                  </p>
                </div>
              )}

              {/* Full Detailed Essay / Critic Review */}
              <div>
                <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                  DETAILED REVIEW
                </h4>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
                  {selectedMedia.detailedReview}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


