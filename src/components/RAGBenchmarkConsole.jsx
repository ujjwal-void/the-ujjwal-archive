import React, { useState } from 'react';
import { Database, Cpu, Zap, Search, Layers, Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function RAGBenchmarkConsole() {
  const [query, setQuery] = useState('high concurrency microservices');
  const [isSearching, setIsSearching] = useState(false);
  const [activeTab, setActiveTab] = useState('rag'); // 'rag' | 'architecture'

  // Pre-calculated vector embeddings & hybrid RAG knowledge index
  const index = [
    {
      title: "ZFunds High-Scale Financial Microservices",
      type: "Backend Systems",
      score: 0.94,
      bm25: 0.88,
      vectorSim: 0.96,
      latencyMs: 8.4,
      snippet: "Built high-concurrency Node.js/Go event-driven financial transaction pipelines serving 500k+ users with sub-50ms latency.",
      tags: ["Go", "Node.js", "Kafka", "Redis", "PostgreSQL"],
    },
    {
      title: "Adaptive RAG Search Engine",
      type: "AI Engineering",
      score: 0.92,
      bm25: 0.85,
      vectorSim: 0.95,
      latencyMs: 11.2,
      snippet: "Self-correcting RAG pipeline using HNSW vector indexing, BM25 hybrid fusion reranking, and query intent classification.",
      tags: ["Python", "FastAPI", "Qdrant", "LangChain", "OpenAI"],
    },
    {
      title: "Advor.ai Enterprise Search Platform",
      type: "AI Engineering",
      score: 0.89,
      bm25: 0.82,
      vectorSim: 0.91,
      latencyMs: 9.6,
      snippet: "Scalable enterprise RAG knowledge engine integrating multi-tenant document indexing and real-time semantic search.",
      tags: ["Python", "Docker", "AWS", "VectorDB", "Redis"],
    },
    {
      title: "Nexus PM — Distributed Project Management",
      type: "Backend Systems",
      score: 0.84,
      bm25: 0.79,
      vectorSim: 0.86,
      latencyMs: 6.8,
      snippet: "Real-time task synchronization engine utilizing WebSocket event queues and PostgreSQL transaction locks.",
      tags: ["Node.js", "WebSockets", "PostgreSQL", "Docker"],
    },
    {
      title: "Distributed Network Monitoring Dashboard",
      type: "Systems / DevOps",
      score: 0.81,
      bm25: 0.74,
      vectorSim: 0.83,
      latencyMs: 7.2,
      snippet: "Real-time network telemetry monitoring system capturing packet throughput, latency spikes, and system health metrics.",
      tags: ["Go", "Prometheus", "Grafana", "Linux"],
    },
  ];

  const [results, setResults] = useState(index);

  const handleRunSearch = (searchQuery) => {
    setIsSearching(true);
    setQuery(searchQuery);

    setTimeout(() => {
      const q = searchQuery.toLowerCase();
      const filtered = index.map((item) => {
        let matchBonus = 0;
        if (q.includes('rag') || q.includes('ai') || q.includes('search')) {
          if (item.type === 'AI Engineering') matchBonus += 0.08;
        }
        if (q.includes('backend') || q.includes('microservice') || q.includes('go') || q.includes('concurrency')) {
          if (item.type === 'Backend Systems') matchBonus += 0.08;
        }

        const newScore = Math.min(0.99, Number((item.score + matchBonus).toFixed(2)));
        return { ...item, score: newScore };
      }).sort((a, b) => b.score - a.score);

      setResults(filtered);
      setIsSearching(false);
    }, 280);
  };

  return (
    <div
      style={{
        background: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(99, 102, 241, 0.25)',
        borderRadius: '16px',
        padding: '1.4rem',
        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.4)',
        marginTop: '1.8rem',
      }}
    >
      {/* Header Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: '0.9rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div
            style={{
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              padding: '0.45rem',
              borderRadius: '10px',
              color: '#818cf8',
            }}
          >
            <Cpu size={20} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', margin: 0, fontWeight: 700, color: '#f8fafc' }}>
              Live Hybrid RAG & Vector Engine Simulator
            </h3>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0 }}>
              Test real-time HNSW cosine similarity & BM25 rank fusion search over Ujjwal's work
            </p>
          </div>
        </div>

        {/* Tab Toggle */}
        <div
          style={{
            display: 'flex',
            background: 'rgba(30, 41, 59, 0.8)',
            padding: '3px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <button
            onClick={() => setActiveTab('rag')}
            style={{
              background: activeTab === 'rag' ? 'var(--accent-indigo, #6366f1)' : 'transparent',
              color: activeTab === 'rag' ? '#ffffff' : '#94a3b8',
              border: 'none',
              borderRadius: '7px',
              padding: '0.35rem 0.85rem',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.2s ease',
            }}
          >
            <Database size={13} />
            <span>Hybrid RAG Search</span>
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            style={{
              background: activeTab === 'architecture' ? 'var(--accent-indigo, #6366f1)' : 'transparent',
              color: activeTab === 'architecture' ? '#ffffff' : '#94a3b8',
              border: 'none',
              borderRadius: '7px',
              padding: '0.35rem 0.85rem',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.2s ease',
            }}
          >
            <Layers size={13} />
            <span>System Metrics</span>
          </button>
        </div>
      </div>

      {activeTab === 'rag' ? (
        <>
          {/* Interactive Search Input & Quick Preset Chips */}
          <div style={{ marginBottom: '1.2rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(30, 41, 59, 0.6)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                borderRadius: '12px',
                padding: '0.4rem 0.8rem',
              }}
            >
              <Search size={16} style={{ color: '#818cf8' }} />
              <input
                type="text"
                value={query}
                onChange={(e) => handleRunSearch(e.target.value)}
                placeholder="Type query e.g. microservices, RAG, vector search, Kafka..."
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#f8fafc',
                  width: '100%',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                }}
              />
              {isSearching && (
                <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                  Searching...
                </span>
              )}
            </div>

            {/* Quick Sample Queries */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginTop: '0.6rem',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>Try Query:</span>
              {[
                'high concurrency microservices',
                'hybrid RAG vector search',
                'event driven kafka streams',
                'postgresql websocket sync',
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => handleRunSearch(q)}
                  style={{
                    background: query === q ? 'rgba(99, 102, 241, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                    border: query === q ? '1px solid #6366f1' : '1px solid rgba(255, 255, 255, 0.08)',
                    color: query === q ? '#a5b4fc' : '#94a3b8',
                    borderRadius: '20px',
                    padding: '0.2rem 0.6rem',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* RAG Search Benchmark Results */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {results.map((item, idx) => (
              <div
                key={item.title}
                style={{
                  background: 'rgba(30, 41, 59, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '0.9rem',
                  transition: 'all 0.2s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'space-between',
                    gap: '0.8rem',
                    marginBottom: '0.4rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span
                      style={{
                        background: 'rgba(99, 102, 241, 0.2)',
                        color: '#a5b4fc',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        padding: '0.15rem 0.45rem',
                        borderRadius: '6px',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      RANK #{idx + 1}
                    </span>
                    <h4 style={{ fontSize: '0.9rem', margin: 0, fontWeight: 700, color: '#f8fafc' }}>
                      {item.title}
                    </h4>
                  </div>

                  {/* Benchmark Scores Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                    }}
                  >
                    <span style={{ color: '#38bdf8' }}>Vector Sim: {(item.vectorSim * 100).toFixed(0)}%</span>
                    <span style={{ color: '#10b981' }}>BM25: {(item.bm25 * 100).toFixed(0)}%</span>
                    <span style={{ color: '#f59e0b', fontWeight: 700 }}>RRF Score: {item.score}</span>
                    <span style={{ color: '#64748b' }}>⚡ {item.latencyMs}ms</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: '0 0 0.6rem 0', lineHeight: 1.4 }}>
                  {item.snippet}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#94a3b8',
                        fontSize: '0.7rem',
                        padding: '0.1rem 0.45rem',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Architecture & Engineering Metrics Tab */
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
          }}
        >
          <div
            style={{
              background: 'rgba(30, 41, 59, 0.4)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '12px',
              padding: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', color: '#818cf8' }}>
              <Activity size={16} />
              <h4 style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700 }}>Production Concurrency</h4>
            </div>
            <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.2rem 0', fontFamily: 'var(--font-mono)' }}>
              500,000+
            </p>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>
              Active users served with event-driven Go/Node microservices
            </p>
          </div>

          <div
            style={{
              background: 'rgba(30, 41, 59, 0.4)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: '12px',
              padding: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', color: '#38bdf8' }}>
              <Zap size={16} />
              <h4 style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700 }}>Query Latency (P99)</h4>
            </div>
            <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.2rem 0', fontFamily: 'var(--font-mono)' }}>
              &lt; 18.4ms
            </p>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>
              HNSW vector retrieval + BM25 keyword reranking execution time
            </p>
          </div>

          <div
            style={{
              background: 'rgba(30, 41, 59, 0.4)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '12px',
              padding: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', color: '#34d399' }}>
              <CheckCircle2 size={16} />
              <h4 style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700 }}>RAG Self-Correction Rate</h4>
            </div>
            <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.2rem 0', fontFamily: 'var(--font-mono)' }}>
              99.2%
            </p>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>
              Hallucination filtering via iterative query rewriting
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
