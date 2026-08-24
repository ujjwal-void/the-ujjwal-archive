import React, { useState } from 'react';
import { Sparkles, Cpu, Briefcase, FileText, ArrowRight, Zap, Award, Film, BookOpen } from 'lucide-react';
import { PROJECTS_DATA, TECH_STORIES, MEDIA_DATA } from '../data/portfolioData';

export default function FeaturedShowcaseSection({ onNavigate }) {
  const [filter, setFilter] = useState('all');

  // Curated Featured Items
  const featuredItems = [
    {
      id: 'ziva-v2',
      category: 'system',
      type: 'Featured System',
      title: 'ZIVA V2 — Wealth Management AI Platform',
      tagline: 'Portfolio analysis engine cut latency from 40s to ~900ms (97.5% reduction).',
      badge: 'ZFunds SDE',
      icon: Cpu,
      accentColor: 'var(--accent-indigo)',
      route: 'projects',
    },
    {
      id: 'advor-rag',
      category: 'system',
      type: 'Featured AI Pipeline',
      title: 'Advor.ai Event-Driven Hybrid RAG Engine',
      tagline: 'RabbitMQ microservices (<150ms P99 latency) & FAISS vector search.',
      badge: 'Advor.ai Founding Engineer',
      icon: Zap,
      accentColor: 'var(--accent-emerald)',
      route: 'projects',
    },
    {
      id: 'obito-uchiha',
      category: 'culture',
      type: 'Featured Character Breakdown',
      title: 'Obito Uchiha: The Broken Idealist',
      tagline: 'Deep 500-word fan analysis on Obito & Naruto as mirror reflections.',
      badge: 'Anime Study',
      icon: Film,
      accentColor: '#7c3aed',
      route: 'culture',
    },
    {
      id: 'dorian-gray',
      category: 'culture',
      type: 'Featured Literature Review',
      title: 'The Picture of Dorian Gray',
      tagline: 'Oscar Wilde’s gothic masterpiece on external elegance vs internal corruption.',
      badge: 'Classic Literature',
      icon: BookOpen,
      accentColor: '#059669',
      route: 'culture',
    },
    {
      id: 'hybrid-rag-story',
      category: 'story',
      type: 'Featured Tech Story',
      title: 'Understanding Hybrid RAG Architecture',
      tagline: 'Combining deterministic DB keyword triggers with vector embeddings.',
      badge: 'System Design',
      icon: FileText,
      accentColor: '#d97706',
      route: 'essays',
    },
  ];

  const visibleItems = filter === 'all' 
    ? featuredItems 
    : featuredItems.filter(item => item.category === filter);

  return (
    <section style={{ marginTop: '2.5rem' }}>
      {/* Section Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '0.8rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
            <Sparkles size={20} style={{ color: 'var(--accent-indigo)' }} />
            <h2 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--text-main)' }}>Featured Showcase</h2>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Handpicked highlights across engineering systems, tech stories, and Screen & Spine logs.</p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '0.4rem', background: 'var(--bg-secondary)', padding: '0.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)' }}>
          <button
            onClick={() => setFilter('all')}
            style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              padding: '0.35rem 0.75rem',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              background: filter === 'all' ? '#ffffff' : 'transparent',
              color: filter === 'all' ? 'var(--accent-indigo)' : 'var(--text-muted)',
              boxShadow: filter === 'all' ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.15s ease'
            }}
          >
            All ({featuredItems.length})
          </button>
          <button
            onClick={() => setFilter('system')}
            style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              padding: '0.35rem 0.75rem',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              background: filter === 'system' ? '#ffffff' : 'transparent',
              color: filter === 'system' ? 'var(--accent-indigo)' : 'var(--text-muted)',
              boxShadow: filter === 'system' ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.15s ease'
            }}
          >
            Systems (2)
          </button>
          <button
            onClick={() => setFilter('story')}
            style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              padding: '0.35rem 0.75rem',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              background: filter === 'story' ? '#ffffff' : 'transparent',
              color: filter === 'story' ? 'var(--accent-indigo)' : 'var(--text-muted)',
              boxShadow: filter === 'story' ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.15s ease'
            }}
          >
            Stories (1)
          </button>
          <button
            onClick={() => setFilter('culture')}
            style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              padding: '0.35rem 0.75rem',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              background: filter === 'culture' ? '#ffffff' : 'transparent',
              color: filter === 'culture' ? 'var(--accent-indigo)' : 'var(--text-muted)',
              boxShadow: filter === 'culture' ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.15s ease'
            }}
          >
            Screen & Spine (2)
          </button>
        </div>
      </div>

      {/* Grid of Featured Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
        {visibleItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => onNavigate(item.route)}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border-muted)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-subtle)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = item.accentColor;
                e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(15, 23, 42, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-muted)';
                e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconComponent size={16} style={{ color: item.accentColor }} />
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {item.type}
                    </span>
                  </div>
                  <span className="meta-tag">{item.badge}</span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.45rem', lineHeight: '1.35' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                  {item.tagline}
                </p>
              </div>

              <div style={{ marginTop: '1.2rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-muted)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: item.accentColor, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Explore Highlight <ArrowRight size={13} />
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  Click to view
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
