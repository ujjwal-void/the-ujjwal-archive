import React, { useState } from 'react';
import { Cpu, Award, ArrowRight, BarChart3, Terminal } from 'lucide-react';

export default function SystemCommandCenter({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('impact');

  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid var(--border-muted)',
      borderTop: '3px solid #0f172a',
      borderRadius: 'var(--radius-md)',
      padding: '0.95rem 1.1rem',
      boxShadow: '0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 24px -4px rgba(15, 23, 42, 0.04)',
      position: 'relative'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.7rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-muted)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <Terminal size={14} style={{ color: '#7c3aed' }} />
          <span style={{ fontSize: '0.76rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--text-main)', letterSpacing: '-0.01em' }}>
            sys_radar // ujjwal-core
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ fontSize: '0.64rem', background: '#f5f3ff', color: '#6d28d9', fontWeight: 700, padding: '0.1rem 0.45rem', borderRadius: '4px', border: '1px solid #ddd6fe', fontFamily: 'var(--font-mono)' }}>
            FEATURED RADAR
          </span>
        </div>
      </div>

      {/* Highlighted Mode Pills */}
      <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '0.85rem', background: 'var(--bg-secondary)', padding: '0.2rem', borderRadius: '6px' }}>
        <button
          onClick={() => setActiveTab('impact')}
          style={{
            flex: 1,
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            padding: '0.35rem 0.45rem',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            background: activeTab === 'impact' ? '#7c3aed' : 'transparent',
            color: activeTab === 'impact' ? '#ffffff' : 'var(--text-muted)',
            boxShadow: activeTab === 'impact' ? '0 2px 6px rgba(124, 58, 237, 0.25)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.3rem',
            transition: 'all 0.15s ease'
          }}
        >
          <BarChart3 size={11} /> Metrics
        </button>
        <button
          onClick={() => setActiveTab('rag')}
          style={{
            flex: 1,
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            padding: '0.35rem 0.45rem',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            background: activeTab === 'rag' ? '#7c3aed' : 'transparent',
            color: activeTab === 'rag' ? '#ffffff' : 'var(--text-muted)',
            boxShadow: activeTab === 'rag' ? '0 2px 6px rgba(124, 58, 237, 0.25)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.3rem',
            transition: 'all 0.15s ease'
          }}
        >
          <Cpu size={11} /> AI & RAG
        </button>
        <button
          onClick={() => setActiveTab('awards')}
          style={{
            flex: 1,
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            padding: '0.35rem 0.45rem',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            background: activeTab === 'awards' ? '#7c3aed' : 'transparent',
            color: activeTab === 'awards' ? '#ffffff' : 'var(--text-muted)',
            boxShadow: activeTab === 'awards' ? '0 2px 6px rgba(124, 58, 237, 0.25)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.3rem',
            transition: 'all 0.15s ease'
          }}
        >
          <Award size={11} /> Awards
        </button>
      </div>

      {/* Tab 1: Performance Metrics */}
      {activeTab === 'impact' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          {/* ZIVA Latency Card */}
          <div style={{ background: 'var(--bg-secondary)', padding: '0.7rem 0.8rem', borderRadius: '6px', border: '1px solid var(--border-muted)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-main)' }}>ZIVA V2 Latency Engine</span>
              <span style={{ fontSize: '0.66rem', fontFamily: 'var(--font-mono)', background: '#dcfce7', color: '#15803d', fontWeight: 700, padding: '0.08rem 0.4rem', borderRadius: '4px', border: '1px solid #bbf7d0' }}>
                ⚡ -97.5% LATENCY
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '0.15rem' }}>
                  <span>Before (Static Reads)</span>
                  <span>40.0s</span>
                </div>
                <div style={{ height: '5px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', background: '#ef4444' }}></div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#7c3aed', fontWeight: 700, marginBottom: '0.15rem' }}>
                  <span>After (Refactored DB Pipeline)</span>
                  <span>0.9s (~900ms)</span>
                </div>
                <div style={{ height: '5px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '12%', height: '100%', background: '#7c3aed', boxShadow: '0 0 6px rgba(124, 58, 237, 0.4)' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Microservice Queue Ticker */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <div style={{ background: 'var(--bg-secondary)', padding: '0.55rem 0.65rem', borderRadius: '6px', border: '1px solid var(--border-muted)' }}>
              <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>Advor.ai Queue</div>
              <div style={{ fontSize: '0.88rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#10b981' }}>&lt;150ms P99</div>
            </div>
            <div style={{ background: 'var(--bg-secondary)', padding: '0.55rem 0.65rem', borderRadius: '6px', border: '1px solid var(--border-muted)' }}>
              <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>DRDO Internship</div>
              <div style={{ fontSize: '0.88rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#7c3aed' }}>K8s + Flask</div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: AI & RAG Pipeline */}
      {activeTab === 'rag' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
          <div style={{ background: 'var(--bg-secondary)', padding: '0.45rem 0.65rem', borderRadius: '5px', border: '1px solid var(--border-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 600 }}>1. Keyword DB Layer</span>
            <span style={{ color: '#10b981', fontWeight: 700, fontSize: '0.68rem' }}>100% DB Accuracy</span>
          </div>
          <div style={{ background: 'var(--bg-secondary)', padding: '0.45rem 0.65rem', borderRadius: '5px', border: '1px solid var(--border-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 600 }}>2. FAISS Vector Search</span>
            <span style={{ color: '#7c3aed', fontWeight: 600, fontSize: '0.68rem' }}>Semantic Match</span>
          </div>
          <div style={{ background: 'var(--bg-secondary)', padding: '0.45rem 0.65rem', borderRadius: '5px', border: '1px solid var(--border-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 600 }}>3. Guardrail Validation</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.68rem' }}>Zero Prompt Injection</span>
          </div>
        </div>
      )}

      {/* Tab 3: Hackathons & Honors */}
      {activeTab === 'awards' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ background: 'var(--bg-secondary)', padding: '0.6rem 0.7rem', borderRadius: '6px', border: '1px solid var(--border-muted)' }}>
            <div style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.15rem' }}>
              🏆 Osmos Hackathon 1st Runner-Up
            </div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0 }}>
              OnlineSales.ai Hackathon (131 teams, INR 30k prize)
            </p>
          </div>

          <div style={{ background: 'var(--bg-secondary)', padding: '0.6rem 0.7rem', borderRadius: '6px', border: '1px solid var(--border-muted)' }}>
            <div style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.15rem' }}>
              🛡️ CryptoGuard Finalist
            </div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0 }}>
              VIT Vellore Web3 Identity Hackathon
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{ marginTop: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.66rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
          v2.4.0 System Radar
        </span>
        <button
          onClick={() => onNavigate('projects')}
          style={{ background: 'transparent', border: 'none', color: '#7c3aed', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', padding: 0 }}
        >
          View All Systems <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}
