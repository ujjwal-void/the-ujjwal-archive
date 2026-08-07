import React, { useState } from 'react';
import { ExternalLink, Code2, Cpu, CheckCircle } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'AI & WealthTech', 'AI & High-Scale Backend', 'Backend Microservices', 'Full-Stack Web App', 'AI Hackathon Winner', 'DevOps & Cybersecurity'];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <div>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <span className="meta-tag meta-cyan">VERIFIED PROJECTS</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>[{PROJECTS_DATA.length} Production & Open Source Items]</span>
            </div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>🧠 Verified Software & AI Projects</h2>
            <p style={{ color: 'var(--text-muted)' }}>Production systems, backend microservices, RAG search engines, and award-winning hackathon applications.</p>
          </div>
        </div>
      </div>

      <div className="grid-2">
        {filteredProjects.map(project => (
          <div key={project.id} className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="meta-tag meta-cyan">{project.category}</span>
              <span className="meta-tag meta-amber">{project.companyTag}</span>
            </div>

            <h3 style={{ fontSize: '1.45rem', marginBottom: '0.4rem' }}>{project.title}</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--accent-indigo)', fontWeight: 600, marginBottom: '0.8rem' }}>{project.tagline}</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: '1.6' }}>{project.description}</p>

            {/* Metrics */}
            {project.metrics && (
              <div style={{ display: 'flex', gap: '0.8rem', background: 'var(--bg-secondary)', padding: '0.6rem 0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)', marginBottom: '1rem', flexWrap: 'wrap' }}>
                {Object.entries(project.metrics).map(([key, val], idx) => (
                  <div key={idx} style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
                    <span style={{ color: 'var(--text-dim)', textTransform: 'uppercase' }}>{key}: </span>
                    <span style={{ fontWeight: 700, color: 'var(--accent-indigo)' }}>{val}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Key Features */}
            <div style={{ marginBottom: '1.2rem' }}>
              <h4 style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>Key Architecture Highlights:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={14} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} /> {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.2rem', marginTop: 'auto' }}>
              {project.tags.map((tag, idx) => (
                <span key={idx} style={{ fontSize: '0.72rem', background: 'var(--bg-secondary)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: 'var(--text-muted)', border: '1px solid var(--border-muted)', fontFamily: 'var(--font-mono)' }}>
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-glass" style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem', flex: 1, justifyContent: 'center' }}>
                  <Code2 size={14} /> Repository
                </a>
              )}
              {project.demoUrl && project.demoUrl !== '#' && (
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}>
                  <ExternalLink size={14} /> Live Link
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
