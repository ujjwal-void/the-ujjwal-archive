import React from 'react';
import { ExternalLink, Code2, Zap } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function ProjectsSection() {
  const skills = ['Python / FastAPI', 'Adaptive RAG', 'LangChain & LangGraph', 'Vector DBs (Qdrant, Pinecone)', 'React & JavaScript ES6+', 'CSS Modules & Tailwind', 'Node.js & WebSockets', 'MongoDB & PostgreSQL', 'Transformers.js', 'System Architecture'];

  return (
    <div>
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>⚡ Craftsman Projects & Tech Stack</h2>
        <p style={{ color: 'var(--text-muted)' }}>Systems built with technical rigor, curiosity, and passion — pure engineering for the love of the game.</p>
      </div>

      {/* Skills Radar Cloud */}
      <div className="glow-card" style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>Core Technical Arsenal</h3>
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          {skills.map((skill, idx) => (
            <span key={idx} style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', color: 'var(--text-main)', padding: '0.4rem 0.9rem', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 500 }}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid-2">
        {PROJECTS_DATA.map(project => (
          <div key={project.id} className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
              <span style={{ fontSize: '0.78rem', background: 'rgba(192, 132, 252, 0.15)', color: 'var(--accent-purple)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>{project.category}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>🟢 Active</span>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>{project.title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', marginBottom: '0.8rem', fontWeight: 500 }}>{project.tagline}</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.2rem', flex: 1 }}>{project.description}</p>

            <div style={{ marginBottom: '1.2rem' }}>
              <h4 style={{ fontSize: '0.82rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Key Architecture Features</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                {project.keyFeatures.map((f, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Zap size={14} style={{ color: 'var(--accent-amber)' }} /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
              {project.tags.map((tag, idx) => (
                <span key={idx} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.8rem', marginTop: 'auto' }}>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-glass" style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem', padding: '0.5rem' }}>
                <Code2 size={16} /> Repository
              </a>
              <a href={project.demoUrl} className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem', padding: '0.5rem' }}>
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
