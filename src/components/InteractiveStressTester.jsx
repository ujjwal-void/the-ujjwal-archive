import React, { useState, useMemo } from 'react';
import { Zap, Activity, AlertTriangle, ShieldCheck, ArrowRight, Gauge, Layers, Server } from 'lucide-react';

export default function InteractiveStressTester({ onNavigate }) {
  const [reqsPerSec, setReqsPerSec] = useState(2500);
  const [stackType, setStackType] = useState('ujjwal'); // 'legacy' | 'ujjwal'

  // Calculate live telemetry metrics based on slider and stack type
  const telemetry = useMemo(() => {
    if (stackType === 'legacy') {
      const latency = Math.min(40000, 4200 + Math.round(reqsPerSec * 3.8));
      const isCrashing = reqsPerSec > 3500;
      const droppedPct = isCrashing ? Math.min(48, Math.round((reqsPerSec - 3500) / 130)) : 0;
      return {
        latencyFormatted: `${(latency / 1000).toFixed(1)}s (${latency}ms)`,
        latencyMs: latency,
        status: isCrashing ? 'CRITICAL OVERLOAD (504 TIMEOUT)' : 'DEGRADED PERFORMANCE',
        statusColor: '#ef4444',
        statusBg: '#fef2f2',
        statusBorder: '#fecaca',
        droppedPct,
        cpuUsage: Math.min(99.9, (45 + (reqsPerSec / 75)).toFixed(1)),
        queueHealth: 'Queue Bottlenecked (Single-Threaded Read)',
        barColor: '#ef4444'
      };
    } else {
      // Ujjwal's Optimized Stack (RabbitMQ + Redis Cluster + FastAPI)
      const latency = Math.min(900, 110 + Math.round(reqsPerSec * 0.04));
      return {
        latencyFormatted: `${latency}ms (0.9s Max)`,
        latencyMs: latency,
        status: 'SYSTEM NOMINAL (0 DROPPED PACKETS)',
        statusColor: '#15803d',
        statusBg: '#dcfce7',
        statusBorder: '#bbf7d0',
        droppedPct: 0,
        cpuUsage: (12 + (reqsPerSec / 450)).toFixed(1),
        queueHealth: 'Multi-Worker Event Pool (<150ms P99)',
        barColor: 'var(--accent-indigo)'
      };
    }
  }, [reqsPerSec, stackType]);

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
          <Gauge size={18} style={{ color: 'var(--accent-indigo)' }} />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>
            System Load & Traffic Stress Tester
          </span>
        </div>
        <span style={{ fontSize: '0.66rem', background: '#e0e7ff', color: 'var(--accent-indigo)', fontWeight: 700, padding: '0.12rem 0.45rem', borderRadius: '4px', border: '1px solid #c7d2fe', fontFamily: 'var(--font-mono)' }}>
          INTERACTIVE DEMO
        </span>
      </div>

      {/* Strategy Toggle Buttons */}
      <div style={{ marginBottom: '1.1rem' }}>
        <div style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
          Select Architecture Strategy to Test:
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
          <button
            onClick={() => setStackType('legacy')}
            style={{
              padding: '0.5rem 0.65rem',
              borderRadius: '6px',
              border: stackType === 'legacy' ? '1.5px solid #ef4444' : '1px solid var(--border-muted)',
              background: stackType === 'legacy' ? '#fef2f2' : 'var(--bg-secondary)',
              color: stackType === 'legacy' ? '#b91c1c' : 'var(--text-muted)',
              cursor: 'pointer',
              fontSize: '0.76rem',
              fontWeight: 600,
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.15s ease'
            }}
          >
            <AlertTriangle size={14} style={{ color: stackType === 'legacy' ? '#ef4444' : 'var(--text-dim)', flexShrink: 0 }} />
            <div>
              <div>Unoptimized Stack</div>
              <div style={{ fontSize: '0.66rem', fontWeight: 400, opacity: 0.8 }}>Static JSON reads (40s+)</div>
            </div>
          </button>

          <button
            onClick={() => setStackType('ujjwal')}
            style={{
              padding: '0.5rem 0.65rem',
              borderRadius: '6px',
              border: stackType === 'ujjwal' ? '1.5px solid var(--accent-indigo)' : '1px solid var(--border-muted)',
              background: stackType === 'ujjwal' ? '#e0e7ff' : 'var(--bg-secondary)',
              color: stackType === 'ujjwal' ? 'var(--accent-indigo)' : 'var(--text-muted)',
              cursor: 'pointer',
              fontSize: '0.76rem',
              fontWeight: 700,
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.15s ease'
            }}
          >
            <Zap size={14} style={{ color: stackType === 'ujjwal' ? 'var(--accent-indigo)' : 'var(--text-dim)', flexShrink: 0 }} />
            <div>
              <div>Ujjwal's Stack</div>
              <div style={{ fontSize: '0.66rem', fontWeight: 500, opacity: 0.85 }}>RabbitMQ + Redis + FastAPI</div>
            </div>
          </button>
        </div>
      </div>

      {/* Interactive Load Slider */}
      <div style={{ background: 'var(--bg-secondary)', padding: '0.85rem 1rem', borderRadius: '6px', border: '1px solid var(--border-muted)', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-main)' }}>
            Simulated Traffic Volume:
          </span>
          <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-indigo)' }}>
            {reqsPerSec.toLocaleString()} req/sec
          </span>
        </div>

        <input
          type="range"
          min="100"
          max="10000"
          step="100"
          value={reqsPerSec}
          onChange={(e) => setReqsPerSec(Number(e.target.value))}
          style={{
            width: '100%',
            cursor: 'pointer',
            accentColor: 'var(--accent-indigo)'
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.66rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
          <span>100 req/s (Light)</span>
          <span>5,000 req/s (Peak Surge)</span>
          <span>10,000 req/s (Stress Test)</span>
        </div>
      </div>

      {/* Real-Time Telemetry Dashboard */}
      <div style={{
        background: telemetry.statusBg,
        border: `1px solid ${telemetry.statusBorder}`,
        borderRadius: '6px',
        padding: '0.85rem 1rem',
        marginBottom: '0.85rem'
      }}>
        {/* Status Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.55rem' }}>
          <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: telemetry.statusColor, fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span className="pulse-dot" style={{ width: '6px', height: '6px', background: telemetry.statusColor }}></span>
            {telemetry.status}
          </span>
          <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
            CPU: {telemetry.cpuUsage}%
          </span>
        </div>

        {/* Live Latency Bar Meter */}
        <div style={{ marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
            <span>P99 Response Latency</span>
            <span style={{ color: telemetry.statusColor }}>{telemetry.latencyFormatted}</span>
          </div>
          <div style={{ height: '6px', background: 'rgba(0,0,0,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{
              width: `${Math.min(100, Math.max(3, (telemetry.latencyMs / 40000) * 100))}%`,
              height: '100%',
              background: telemetry.barColor,
              transition: 'all 0.2s ease'
            }} />
          </div>
        </div>

        {/* Queue & Dropped Packets */}
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
          <span>Queue Health: {telemetry.queueHealth}</span>
          {telemetry.droppedPct > 0 && (
            <span style={{ color: '#ef4444', fontWeight: 700 }}>Dropped: {telemetry.droppedPct}%</span>
          )}
        </div>
      </div>

      {/* Footer Navigation CTA */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', borderTop: '1px solid var(--border-muted)' }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
          Drag slider to simulate real-time traffic load
        </span>
        <button
          onClick={() => onNavigate('projects')}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--accent-indigo)',
            fontSize: '0.76rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            padding: 0
          }}
        >
          View ZIVA & Advor Architecture <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}
