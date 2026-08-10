import React, { useState } from 'react';
import { Database, Key, Layers, Cpu, Code2, Table, Zap, Server, ShieldCheck, Copy, Check } from 'lucide-react';

const SCHEMAS = [
  {
    id: 'knowledge_embeddings',
    name: 'knowledge_embeddings',
    category: 'RAG & Vector Engine',
    description: 'Unified vector embedding store supporting sub-15ms HNSW similarity and GIN tsvector hybrid RAG search.',
    columns: [
      { name: 'id', type: 'UUID', isPk: true, desc: 'Primary key (UUID v4)' },
      { name: 'entity_type', type: 'VARCHAR(50)', desc: 'Polymorphic type ("project", "essay", "physics", "screen_spine")' },
      { name: 'entity_id', type: 'UUID', desc: 'Foreign reference to entity table' },
      { name: 'chunk_content', type: 'TEXT', desc: 'Raw document text chunk' },
      { name: 'embedding', type: 'VECTOR(1536)', isSpecial: true, desc: 'OpenAI / BGE 1536-dimensional vector embedding' },
      { name: 'search_vector', type: 'TSVECTOR', isSpecial: true, desc: 'Generated tsvector for GIN BM25 lexical keyword search' },
      { name: 'updated_at', type: 'TIMESTAMPTZ', desc: 'Audit timestamp' },
    ],
    indexes: [
      { name: 'idx_knowledge_embeddings_hnsw', type: 'HNSW (vector_cosine_ops)', desc: 'Sub-15ms vector cosine similarity index (m=16, ef_construction=64)' },
      { name: 'idx_knowledge_embeddings_fts', type: 'GIN (search_vector)', desc: 'Full-text search keyword trigger index' }
    ]
  },
  {
    id: 'projects',
    name: 'projects',
    category: 'Core Portfolio',
    description: 'Production systems, AI platforms, and open-source repositories with microservice tags.',
    columns: [
      { name: 'id', type: 'UUID', isPk: true, desc: 'Primary key' },
      { name: 'slug', type: 'VARCHAR(150)', isUk: true, desc: 'Unique URL slug' },
      { name: 'title', type: 'VARCHAR(200)', desc: 'Project headline title' },
      { name: 'category', type: 'VARCHAR(100)', desc: 'Feature classification' },
      { name: 'company_tag', type: 'VARCHAR(100)', desc: 'Org ("ZFunds", "Advor.ai", "Open Source")' },
      { name: 'tagline', type: 'TEXT', desc: 'Short tagline' },
      { name: 'description', type: 'TEXT', desc: 'Full architectural description' },
      { name: 'github_url', type: 'TEXT', desc: 'Repository link' },
      { name: 'demo_url', type: 'TEXT', desc: 'Live production URL' },
      { name: 'tags', type: 'JSONB', isSpecial: true, desc: 'Tech stack tags array ["Python", "FastAPI", "Redis"]' },
      { name: 'created_at', type: 'TIMESTAMPTZ', desc: 'Creation timestamp' },
    ],
    indexes: [
      { name: 'idx_projects_title_trgm', type: 'GIN (title gin_trgm_ops)', desc: 'Trigram fuzzy search index for quick autocomplete' }
    ]
  },
  {
    id: 'work_experiences',
    name: 'work_experiences',
    category: 'Career & Work',
    description: 'ZFunds, Advor.ai, and DRDO engineering role histories with bullet point relationships.',
    columns: [
      { name: 'id', type: 'UUID', isPk: true, desc: 'Primary key' },
      { name: 'company_name', type: 'VARCHAR(150)', desc: 'Company or institution name' },
      { name: 'role_title', type: 'VARCHAR(150)', desc: 'Engineering title' },
      { name: 'location', type: 'VARCHAR(100)', desc: 'Work location' },
      { name: 'start_date', type: 'DATE', desc: 'Employment start date' },
      { name: 'end_date', type: 'DATE', desc: 'Employment end date (NULL = current)' },
      { name: 'is_current', type: 'BOOLEAN', desc: 'Active position flag' },
      { name: 'summary', type: 'TEXT', desc: 'Role overview' },
    ],
    indexes: []
  },
  {
    id: 'tech_essays',
    name: 'tech_essays',
    category: 'Engineering Articles',
    description: 'Hybrid RAG architecture, vector search, and microservice engineering deep-dives.',
    columns: [
      { name: 'id', type: 'UUID', isPk: true, desc: 'Primary key' },
      { name: 'slug', type: 'VARCHAR(150)', isUk: true, desc: 'Unique article slug' },
      { name: 'title', type: 'VARCHAR(255)', desc: 'Essay title' },
      { name: 'category', type: 'VARCHAR(100)', desc: 'Article domain' },
      { name: 'excerpt', type: 'TEXT', desc: 'Summary snippet' },
      { name: 'full_content', type: 'TEXT', desc: 'Markdown article content' },
      { name: 'code_snippet', type: 'TEXT', desc: 'Executable code example' },
      { name: 'published_at', type: 'TIMESTAMPTZ', desc: 'Publication timestamp' },
    ],
    indexes: []
  },
  {
    id: 'physics_math_notes',
    name: 'physics_math_notes',
    category: 'Physics & Math',
    description: 'Quantum mechanics, GELU/Softmax activation math, and non-linearity derivations.',
    columns: [
      { name: 'id', type: 'UUID', isPk: true, desc: 'Primary key' },
      { name: 'slug', type: 'VARCHAR(150)', isUk: true, desc: 'Unique formula slug' },
      { name: 'title', type: 'VARCHAR(255)', desc: 'Note title' },
      { name: 'category', type: 'VARCHAR(100)', desc: 'Branch ("Neural Math", "Quantum Mechanics")' },
      { name: 'latex_formula', type: 'TEXT', desc: 'LaTeX mathematical expression' },
      { name: 'summary', type: 'TEXT', desc: 'Mathematical breakdown' },
      { name: 'cs_connection', type: 'TEXT', desc: 'Computer Science & AI application' },
    ],
    indexes: []
  },
  {
    id: 'media_logs',
    name: 'media_logs & character_studies',
    category: 'Screen & Spine',
    description: 'Cinema, anime, and literature logs linked to deep-dive character development breakdowns.',
    columns: [
      { name: 'id', type: 'UUID', isPk: true, desc: 'Primary key' },
      { name: 'media_type', type: 'VARCHAR(50)', desc: 'Category ("anime", "movie", "book")' },
      { name: 'title', type: 'VARCHAR(255)', desc: 'Title name' },
      { name: 'creator', type: 'VARCHAR(200)', desc: 'Director / Author' },
      { name: 'rating', type: 'NUMERIC(3, 1)', desc: 'Rating out of 10.0' },
      { name: 'recommendation', type: 'VARCHAR(150)', desc: 'Curated badge' },
      { name: 'character_name', type: 'VARCHAR(150)', isFk: true, desc: 'Target character (character_studies table FK)' },
      { name: 'psychological_arc', type: 'TEXT', desc: 'Character development analysis' },
    ],
    indexes: [
      { name: 'idx_media_logs_title_trgm', type: 'GIN (title gin_trgm_ops)', desc: 'Trigram fuzzy search index' }
    ]
  }
];

export default function DatabaseSchemaViewer() {
  const [selectedTable, setSelectedTable] = useState(SCHEMAS[0]);
  const [copiedSql, setCopiedSql] = useState(false);

  const fullDdlSql = `-- PostgreSQL 16+ Extension Setup
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "vector";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Unified Hybrid RAG Vector Embedding & FTS Table
CREATE TABLE knowledge_embeddings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    entity_type VARCHAR(50) NOT NULL,
    entity_id UUID NOT NULL,
    chunk_content TEXT NOT NULL,
    embedding VECTOR(1536) NOT NULL,
    search_vector TSVECTOR GENERATED ALWAYS AS (to_tsvector('english', chunk_content)) STORED,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- HNSW Vector Index for Sub-15ms Cosine Similarity
CREATE INDEX idx_knowledge_embeddings_hnsw 
ON knowledge_embeddings 
USING hnsw (embedding vector_cosine_ops)
WITH (m = 16, ef_construction = 64);

-- GIN Index for FTS BM25 Keyword Search
CREATE INDEX idx_knowledge_embeddings_fts 
ON knowledge_embeddings 
USING gin (search_vector);`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullDdlSql);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
          <span className="meta-tag meta-cyan">SYSTEM ARCHITECTURE</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
            [PostgreSQL 16 + pgvector + GIN FTS]
          </span>
        </div>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>🗄️ PostgreSQL Database Architecture</h2>
        <p style={{ color: 'var(--text-muted)' }}>
          Production schema backing Ujjwal's AI Hybrid RAG Search Engine, high-concurrency projects, and Screen & Spine logs.
        </p>
      </div>

      {/* Schema Navigation Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {SCHEMAS.map(item => (
          <button
            key={item.id}
            onClick={() => setSelectedTable(item)}
            style={{
              padding: '0.5rem 0.9rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid',
              borderColor: selectedTable.id === item.id ? 'var(--accent-indigo)' : 'var(--border-muted)',
              background: selectedTable.id === item.id ? '#e0e7ff' : 'var(--bg-card)',
              color: selectedTable.id === item.id ? 'var(--accent-indigo)' : 'var(--text-main)',
              fontWeight: selectedTable.id === item.id ? 700 : 500,
              fontSize: '0.82rem',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.15s ease',
            }}
          >
            <Table size={14} />
            {item.name}
          </button>
        ))}
      </div>

      {/* Main Selected Table Detail View */}
      <div className="card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-muted)', paddingBottom: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
              <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-mono)' }}>table: {selectedTable.name}</h3>
              <span className="meta-tag meta-amber">{selectedTable.category}</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{selectedTable.description}</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.78rem', background: 'var(--bg-secondary)', padding: '0.3rem 0.6rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', border: '1px solid var(--border-muted)' }}>
              {selectedTable.columns.length} Columns
            </span>
            {selectedTable.indexes.length > 0 && (
              <span style={{ fontSize: '0.78rem', background: '#e0f2fe', color: '#0369a1', padding: '0.3rem 0.6rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontWeight: 600, border: '1px solid #bae6fd' }}>
                {selectedTable.indexes.length} Index
              </span>
            )}
          </div>
        </div>

        {/* Columns Table */}
        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-muted)', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                <th style={{ padding: '0.6rem 0.8rem' }}>COLUMN</th>
                <th style={{ padding: '0.6rem 0.8rem' }}>DATA TYPE</th>
                <th style={{ padding: '0.6rem 0.8rem' }}>CONSTRAINTS</th>
                <th style={{ padding: '0.6rem 0.8rem' }}>DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              {selectedTable.columns.map((col, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--border-muted)', background: idx % 2 === 0 ? 'transparent' : 'var(--bg-secondary)' }}>
                  <td style={{ padding: '0.65rem 0.8rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-main)' }}>
                    {col.name}
                  </td>
                  <td style={{ padding: '0.65rem 0.8rem', fontFamily: 'var(--font-mono)', color: col.isSpecial ? 'var(--accent-indigo)' : '#0284c7', fontWeight: 600 }}>
                    {col.type}
                  </td>
                  <td style={{ padding: '0.65rem 0.8rem' }}>
                    {col.isPk && (
                      <span className="meta-tag meta-amber" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', padding: '0.15rem 0.4rem', fontSize: '0.68rem' }}>
                        <Key size={10} /> PRIMARY KEY
                      </span>
                    )}
                    {col.isUk && (
                      <span className="meta-tag meta-cyan" style={{ padding: '0.15rem 0.4rem', fontSize: '0.68rem' }}>
                        UNIQUE
                      </span>
                    )}
                    {col.isFk && (
                      <span className="meta-tag meta-emerald" style={{ padding: '0.15rem 0.4rem', fontSize: '0.68rem' }}>
                        FOREIGN KEY
                      </span>
                    )}
                    {!col.isPk && !col.isUk && !col.isFk && <span style={{ color: 'var(--text-dim)', fontSize: '0.78rem' }}>—</span>}
                  </td>
                  <td style={{ padding: '0.65rem 0.8rem', color: 'var(--text-muted)' }}>
                    {col.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Indexes Section */}
        {selectedTable.indexes.length > 0 && (
          <div style={{ background: '#f8fafc', border: '1px solid var(--border-muted)', borderRadius: 'var(--radius-sm)', padding: '1rem' }}>
            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.6rem', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Zap size={14} style={{ color: 'var(--accent-amber)' }} /> PRODUCTION INDEXES
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {selectedTable.indexes.map((idxItem, i) => (
                <div key={i} style={{ background: '#ffffff', border: '1px solid var(--border-muted)', padding: '0.6rem 0.8rem', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.82rem', color: 'var(--text-main)' }}>{idxItem.name}</span>
                    <span style={{ marginLeft: '0.6rem', fontSize: '0.78rem', color: 'var(--accent-indigo)', fontFamily: 'var(--font-mono)' }}>[{idxItem.type}]</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{idxItem.desc}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* SQL DDL Code Preview Box */}
      <div style={{ background: '#090d16', border: '2px solid #1e293b', borderRadius: 'var(--radius-md)', padding: '1.2rem', color: '#f8fafc', fontFamily: 'var(--font-mono)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #1e293b', paddingBottom: '0.8rem', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Code2 size={16} style={{ color: '#38bdf8' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#e2e8f0' }}>docs/postgresql_database_schema.sql</span>
          </div>

          <button
            onClick={copyToClipboard}
            style={{
              background: '#1e293b',
              border: '1px solid #334155',
              color: '#38bdf8',
              padding: '0.3rem 0.7rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {copiedSql ? <Check size={12} /> : <Copy size={12} />}
            {copiedSql ? 'Copied SQL!' : 'Copy DDL Script'}
          </button>
        </div>

        <pre style={{ margin: 0, fontSize: '0.78rem', lineHeight: '1.5', color: '#cbd5e1', overflowX: 'auto' }}>
          {fullDdlSql}
        </pre>
      </div>
    </div>
  );
}
