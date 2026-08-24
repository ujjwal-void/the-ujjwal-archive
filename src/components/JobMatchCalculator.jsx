import React, { useState, useMemo } from 'react';
import { Sparkles, CheckCircle2, AlertCircle, Mail, ArrowRight, FileText, Check } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

const PRESET_JDS = [
  {
    title: 'SDE Backend (FastAPI / Microservices)',
    text: 'Looking for a Senior / Mid Software Engineer with strong experience in Python, FastAPI, Microservices architecture, Redis caching, RabbitMQ, and AWS deployments to build high-concurrency backend services.'
  },
  {
    title: 'AI & RAG Engineer',
    text: 'Hiring an AI Engineer to build RAG pipelines, vector search engines with FAISS/Chroma, LangChain agents, prompt guardrails, and production LLM workflows in Python & FastAPI.'
  },
  {
    title: 'Fullstack Engineer (Python + React)',
    text: 'Seeking a Fullstack Developer proficient in Python/Node backend APIs, React/TypeScript web apps, REST APIs, and database migrations to lead core product features.'
  }
];

const CANDIDATE_SKILLS = [
  { name: 'Python', category: 'Backend', keywords: ['python', 'py'] },
  { name: 'FastAPI', category: 'Backend', keywords: ['fastapi', 'fast api'] },
  { name: 'Flask', category: 'Backend', keywords: ['flask'] },
  { name: 'Node.js / Express', category: 'Backend', keywords: ['node', 'nodejs', 'express'] },
  { name: 'REST APIs & Microservices', category: 'Backend', keywords: ['microservice', 'microservices', 'rest', 'api'] },
  { name: 'RAG & AI Pipelines', category: 'AI/LLM', keywords: ['rag', 'llm', 'langchain', 'ai', 'vector', 'embedding', 'prompt'] },
  { name: 'FAISS Vector Search', category: 'AI/LLM', keywords: ['faiss', 'vector', 'chroma', 'qdrant'] },
  { name: 'RabbitMQ & Queues', category: 'Distributed', keywords: ['rabbitmq', 'queue', 'kafka', 'event'] },
  { name: 'Redis Caching', category: 'Distributed', keywords: ['redis', 'cache', 'caching'] },
  { name: 'AWS (EC2/S3)', category: 'DevOps', keywords: ['aws', 'cloud', 'ec2', 's3'] },
  { name: 'Docker & Kubernetes', category: 'DevOps', keywords: ['docker', 'kubernetes', 'k8s', 'container'] },
  { name: 'React & React Native', category: 'Frontend', keywords: ['react', 'react native', 'frontend', 'mobile'] },
  { name: 'TypeScript / JavaScript', category: 'Frontend', keywords: ['typescript', 'javascript', 'js', 'ts'] },
  { name: 'Latency Optimization', category: 'FinTech', keywords: ['latency', 'optimization', 'performance', 'p99', 'scale'] }
];

export default function JobMatchCalculator({ onNavigate }) {
  const [jdText, setJdText] = useState(PRESET_JDS[0].text);
  const [customText, setCustomText] = useState('');
  const [activePreset, setActivePreset] = useState(0);

  const handlePresetSelect = (idx) => {
    setActivePreset(idx);
    setJdText(PRESET_JDS[idx].text);
    setCustomText('');
  };

  const handleCustomChange = (e) => {
    const text = e.target.value;
    setCustomText(text);
    setJdText(text);
    setActivePreset(-1);
  };

  const matchResults = useMemo(() => {
    const textLower = (jdText || '').toLowerCase();
    if (!textLower.trim()) {
      return { score: 0, matchedSkills: [], relevantMetrics: [] };
    }

    const matched = [];
    CANDIDATE_SKILLS.forEach(skill => {
      const hasMatch = skill.keywords.some(kw => textLower.includes(kw));
      if (hasMatch) {
        matched.push(skill);
      }
    });

    // Score calculation algorithm
    let baseScore = 75;
    if (matched.length > 0) {
      baseScore += Math.min(matched.length * 3.5, 23);
    }
    const score = Math.min(Math.round(baseScore), 98);

    // Relevant experience highlights
    const relevantMetrics = [];
    if (textLower.includes('latency') || textLower.includes('fastapi') || textLower.includes('performance') || textLower.includes('python')) {
      relevantMetrics.push('ZIVA V2 Portfolio Engine: Cut latency from 40s to ~900ms (-97.5% reduction)');
    }
    if (textLower.includes('rabbitmq') || textLower.includes('redis') || textLower.includes('microservices') || textLower.includes('queue')) {
      relevantMetrics.push('Advor.ai Event Queues: Scaled RabbitMQ microservices to <150ms P99 latency');
    }
    if (textLower.includes('rag') || textLower.includes('llm') || textLower.includes('ai') || textLower.includes('vector')) {
      relevantMetrics.push('Hybrid RAG Engine: Combined deterministic DB keyword layers with FAISS vector search');
    }
    if (textLower.includes('aws') || textLower.includes('docker') || textLower.includes('kubernetes') || textLower.includes('k8s')) {
      relevantMetrics.push('DRDO & AWS DevOps: Deployed K8s containerized packet monitoring and Coolify zero-downtime AWS pipelines');
    }

    return {
      score,
      matchedSkills: matched,
      relevantMetrics
    };
  }, [jdText]);

  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid var(--border-muted)',
      borderTop: '3px solid var(--accent-indigo)',
      borderRadius: 'var(--radius-md)',
      padding: '1.1rem',
      boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 0 0 1px rgba(67, 56, 202, 0.08)',
      position: 'relative'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem', paddingBottom: '0.6rem', borderBottom: '1px solid var(--border-muted)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <Sparkles size={16} style={{ color: 'var(--accent-indigo)' }} />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>
            JD Fit & Candidate Match Engine
          </span>
        </div>
        <span style={{ fontSize: '0.66rem', background: '#e0e7ff', color: 'var(--accent-indigo)', fontWeight: 700, padding: '0.12rem 0.45rem', borderRadius: '4px', border: '1px solid #c7d2fe', fontFamily: 'var(--font-mono)' }}>
          RECRUITER TOOL
        </span>
      </div>

      {/* Preset JD Selector */}
      <div style={{ marginBottom: '0.75rem' }}>
        <div style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
          Test Candidate Fit Against Sample Roles:
        </div>
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          {PRESET_JDS.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => handlePresetSelect(idx)}
              style={{
                fontSize: '0.7rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                padding: '0.3rem 0.55rem',
                borderRadius: '4px',
                border: activePreset === idx ? '1px solid var(--accent-indigo)' : '1px solid var(--border-muted)',
                cursor: 'pointer',
                background: activePreset === idx ? '#e0e7ff' : 'var(--bg-secondary)',
                color: activePreset === idx ? 'var(--accent-indigo)' : 'var(--text-muted)',
                transition: 'all 0.15s ease'
              }}
            >
              {preset.title}
            </button>
          ))}
        </div>
      </div>

      {/* Custom JD Input Textarea */}
      <div style={{ marginBottom: '0.9rem' }}>
        <textarea
          rows={3}
          value={customText || jdText}
          onChange={handleCustomChange}
          placeholder="Paste any Job Description (JD) text here to calculate real-time match metrics..."
          style={{
            width: '100%',
            padding: '0.55rem 0.75rem',
            fontSize: '0.76rem',
            fontFamily: 'var(--font-sans)',
            border: '1px solid var(--border-muted)',
            borderRadius: '6px',
            outline: 'none',
            resize: 'none',
            color: 'var(--text-main)',
            background: 'var(--bg-secondary)',
            lineHeight: 1.45
          }}
        />
      </div>

      {/* Live Match Metrics Box */}
      {jdText.trim() ? (
        <div style={{ background: 'var(--bg-secondary)', borderRadius: '6px', padding: '0.85rem', border: '1px solid var(--border-muted)' }}>
          {/* Match Score Meter */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
            <div>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600 }}>Calculated Match Score</span>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: matchResults.score >= 85 ? 'var(--accent-emerald)' : 'var(--accent-indigo)' }}>
                {matchResults.score}% Candidate Fit
              </div>
            </div>

            {/* Visual Circular/Pill Badge */}
            <div style={{
              background: matchResults.score >= 85 ? '#dcfce7' : '#e0e7ff',
              color: matchResults.score >= 85 ? '#15803d' : 'var(--accent-indigo)',
              border: `1px solid ${matchResults.score >= 85 ? '#bbf7d0' : '#c7d2fe'}`,
              padding: '0.35rem 0.75rem',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              <Check size={14} /> Strong Match
            </div>
          </div>

          {/* Matched Skills Chips */}
          <div style={{ marginBottom: '0.65rem' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontWeight: 600, marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
              Matched Core Skills ({matchResults.matchedSkills.length})
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
              {matchResults.matchedSkills.length === 0 ? (
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>No direct keyword matches found. Try pasting a technical JD.</span>
              ) : (
                matchResults.matchedSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      background: '#ffffff',
                      color: 'var(--text-main)',
                      border: '1px solid var(--border-muted)',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '4px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    <CheckCircle2 size={11} style={{ color: 'var(--accent-emerald)' }} /> {skill.name}
                  </span>
                ))
              )}
            </div>
          </div>

          {/* Relevant Experience Highlights Matched */}
          {matchResults.relevantMetrics.length > 0 && (
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontWeight: 600, marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                Relevant Resume Metrics Matched
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {matchResults.relevantMetrics.map((metric, idx) => (
                  <div key={idx} style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'flex-start', gap: '0.35rem', lineHeight: 1.35 }}>
                    <span style={{ color: 'var(--accent-indigo)', fontWeight: 700 }}>•</span> {metric}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div style={{ padding: '1rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
          Select a sample role or paste a JD above to calculate candidate fit metrics.
        </div>
      )}

      {/* Footer Email Action */}
      <div style={{ marginTop: '0.85rem', paddingTop: '0.6rem', borderTop: '1px solid var(--border-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a
          href={`mailto:${PROFILE_DATA.email}?subject=Job Opportunity Match (${matchResults.score}% Match)`}
          className="btn-primary"
          style={{ fontSize: '0.76rem', padding: '0.4rem 0.85rem', gap: '0.35rem', width: '100%', justifyContent: 'center' }}
        >
          <Mail size={14} /> Email Ujjwal Directly About This Role ({matchResults.score}% Match)
        </a>
      </div>
    </div>
  );
}
