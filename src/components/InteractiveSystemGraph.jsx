import React, { useState, useEffect } from 'react';
import { Zap, Cpu, Database, Activity, RefreshCw, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

export default function InteractiveSystemGraph({ onNavigate }) {
  const [activeNode, setActiveNode] = useState('gateway');
  const [isPulsing, setIsPulsing] = useState(true);

  // System Nodes Data
  const nodes = [
    {
      id: 'client',
      title: 'ZIVA V2 Web / Mobile',
      type: 'Frontend & Mobile',
      badge: 'React & React Native',
      metrics: 'FastTrack KYC & e-Mandate',
      color: '#4338ca',
      desc: 'Paperless onboarding, portfolio dashboards, & e-Mandate auto-pay integrations.',
      route: 'projects'
    },
    {
      id: 'gateway',
      title: 'FastAPI Microservice Gateway',
      type: 'Core Backend',
      badge: '40s → 900ms',
      metrics: '-97.5% Latency Reduction',
      color: '#0284c7',
      desc: 'Portfolio analysis engine refactored from static reads to DB-backed pipelines.',
      route: 'projects'
    },
    {
      id: 'rabbitmq',
      title: 'RabbitMQ Event Queue',
      type: 'Distributed Queue',
      badge: '<150ms P99',
      metrics: 'High-Concurrency Stream',
      color: '#059669',
      desc: 'Scaled profile ranking & rating services at Advor.ai using Redis multi-layer caching.',
      route: 'projects'
    },
    {
      id: 'rag',
      title: 'FAISS Hybrid RAG Engine',
      type: 'Agentic AI Pipeline',
      badge: 'Zero Hallucination',
      color: '#7c3aed',
      metrics: '100% DB Keyword Layer',
      desc: 'Combines deterministic keyword trigger layers with vector semantic search.',
      route: 'essays'
    }
  ];

  const currentNode = nodes.find(n => n.id === activeNode) || nodes[1];

  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid var(--border-muted)',
      borderTop: '3px solid var(--accent-indigo)',
      borderRadius: 'var(--radius-md)',
      padding: '1.25rem',
      boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(67, 56, 202, 0.08)',
      position: 'relative'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '0.65rem', borderBottom: '1px solid var(--border-muted)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Activity size={18} style={{ color: 'var(--accent-indigo)' }} />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>
            Live System Topology Sandbox
          </span>
        </div>
        <button
          onClick={() => setIsPulsing(!isPulsing)}
          style={{
            background: isPulsing ? '#dcfce7' : 'var(--bg-secondary)',
            color: isPulsing ? '#15803d' : 'var(--text-muted)',
            border: `1px solid ${isPulsing ? '#bbf7d0' : 'var(--border-muted)'}`,
            padding: '0.2rem 0.6rem',
            borderRadius: '12px',
            fontSize: '0.7rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <span className="pulse-dot" style={{ width: '6px', height: '6px', background: isPulsing ? '#15803d' : 'var(--text-dim)' }}></span>
          {isPulsing ? 'PACKET STREAM LIVE' : 'STREAM PAUSED'}
        </button>
      </div>

      {/* Interactive System Flow Map (SVG Wires & Clickable Nodes) */}
      <div style={{
        background: 'var(--bg-secondary)',
        borderRadius: '8px',
        padding: '1.2rem 0.8rem',
        border: '1px solid var(--border-muted)',
        marginBottom: '1rem',
        position: 'relative'
      }}>
        {/* Animated Connecting Wires SVG */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          <line x1="20%" y1="50%" x2="40%" y2="50%" stroke="var(--accent-indigo)" strokeWidth="2" strokeDasharray={isPulsing ? "4,4" : "none"} style={{ animation: isPulsing ? 'dash 1.2s linear infinite' : 'none' }} />
          <line x1="40%" y1="50%" x2="60%" y2="50%" stroke="#0284c7" strokeWidth="2" strokeDasharray={isPulsing ? "4,4" : "none"} style={{ animation: isPulsing ? 'dash 1.2s linear infinite' : 'none' }} />
          <line x1="60%" y1="50%" x2="80%" y2="50%" stroke="#059669" strokeWidth="2" strokeDasharray={isPulsing ? "4,4" : "none"} style={{ animation: isPulsing ? 'dash 1.2s linear infinite' : 'none' }} />
        </svg>

        <style>{`
          @keyframes dash {
            to {
              stroke-dashoffset: -16;
            }
          }
        `}</style>

        {/* Nodes Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', position: 'relative', zIndex: 2 }}>
          {nodes.map((node) => {
            const isSelected = activeNode === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                style={{
                  background: isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.85)',
                  border: isSelected ? `2px solid ${node.color}` : '1px solid var(--border-muted)',
                  borderRadius: '8px',
                  padding: '0.75rem 0.5rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                  boxShadow: isSelected ? `0 4px 14px -2px ${node.color}33` : 'none',
                  transform: isSelected ? 'scale(1.04)' : 'scale(1)',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: isSelected ? node.color : '#f1f5f9',
                  color: isSelected ? '#ffffff' : node.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}>
                  {node.id === 'client' && <Layers size={14} />}
                  {node.id === 'gateway' && <Zap size={14} />}
                  {node.id === 'rabbitmq' && <Activity size={14} />}
                  {node.id === 'rag' && <Cpu size={14} />}
                </div>

                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.2 }}>
                  {node.title.split(' ')[0]}
                </span>
                <span style={{ fontSize: '0.64rem', color: isSelected ? node.color : 'var(--text-dim)', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                  {node.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Node Real-Time Telemetry Card */}
      <div style={{
        background: 'var(--bg-secondary)',
        borderRadius: '6px',
        padding: '0.85rem 1rem',
        border: `1px solid ${currentNode.color}40`,
        borderLeft: `4px solid ${currentNode.color}`
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
          <div>
            <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{currentNode.type}</span>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>{currentNode.title}</h4>
          </div>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, background: '#ffffff', color: currentNode.color, border: `1px solid ${currentNode.color}40`, padding: '0.15rem 0.5rem', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>
            {currentNode.metrics}
          </span>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 0.75rem', lineHeight: 1.45 }}>
          {currentNode.desc}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', borderTop: '1px solid var(--border-muted)' }}>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
            Click nodes above to inspect live pipeline metrics
          </span>
          <button
            onClick={() => onNavigate(currentNode.route)}
            style={{
              background: 'transparent',
              border: 'none',
              color: currentNode.color,
              fontSize: '0.76rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: 0
            }}
          >
            Inspect Node Details <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
