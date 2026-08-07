import React from 'react';
import { Briefcase, GraduationCap, Award, Mail, ExternalLink, Code2, Cpu, CheckCircle, CreditCard } from 'lucide-react';
import { PROFILE_DATA, WORK_EXPERIENCE, ACHIEVEMENTS, TECHNICAL_SKILLS } from '../data/portfolioData';

export default function ExperienceSection({ onNavigate }) {
  return (
    <div>
      {/* Header Banner */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
          <span className="meta-tag meta-emerald">RECRUITER & CAREER ARCHIVE</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>[Gurugram, India]</span>
        </div>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>💼 Work Experience & Skills</h2>
        <p style={{ color: 'var(--text-muted)' }}>Software Engineer specializing in AI/LLM architectures, high-concurrency backends, and microservices.</p>
      </div>

      {/* Recruiter Quick Contact Box */}
      <div className="card" style={{ marginBottom: '2.5rem', background: '#e0e7ff', borderColor: '#c7d2fe', padding: '1.4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: '#1e1b4b', marginBottom: '0.2rem' }}>Ujjwal Ujjwal — Software Engineer</h3>
            <p style={{ fontSize: '0.88rem', color: '#3730a3' }}>{PROFILE_DATA.education.degree} • VIT Chennai (2021-2025)</p>
          </div>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <a href="#card" onClick={() => window.location.hash = 'card'} className="btn-primary" style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}>
              <CreditCard size={14} /> 🎴 Download 1-Page Profile Pass
            </a>
            <a href="mailto:ujjwal.02023@gmail.com" className="btn-glass" style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}>
              <Mail size={14} /> Email Ujjwal
            </a>
            <a href="https://www.linkedin.com/in/ujjwal-ujjwal-dev/" target="_blank" rel="noreferrer" className="btn-glass" style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}>
              <ExternalLink size={14} /> LinkedIn
            </a>
            <a href="https://leetcode.com/u/ujjwal92/" target="_blank" rel="noreferrer" className="btn-glass" style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}>
              <Code2 size={14} /> LeetCode
            </a>
          </div>
        </div>
      </div>

      {/* Work Experience Timeline */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
          <Briefcase size={22} style={{ color: 'var(--accent-indigo)' }} />
          <h3 style={{ fontSize: '1.5rem' }}>Professional Experience</h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {WORK_EXPERIENCE.map(job => (
            <div key={job.id} className="card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.35rem', color: 'var(--text-main)' }}>{job.role}</h4>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-indigo)' }}>{job.company} • <span style={{ color: 'var(--text-dim)', fontWeight: 400 }}>{job.location}</span></p>
                </div>
                <span className="meta-tag meta-amber">{job.period}</span>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', margin: '0.6rem 0 1rem' }}>
                {job.techStack.map((tech, idx) => (
                  <span key={idx} style={{ fontSize: '0.72rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-muted)', padding: '0.2rem 0.55rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    {tech}
                  </span>
                ))}
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                {job.highlights.map((point, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', lineHeight: '1.55' }}>
                    <CheckCircle size={15} style={{ color: 'var(--accent-emerald)', marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills Overview */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
          <Cpu size={22} style={{ color: 'var(--accent-indigo)' }} />
          <h3 style={{ fontSize: '1.5rem' }}>Technical Skills Matrix</h3>
        </div>

        <div className="grid-2">
          <div className="card">
            <h4 style={{ fontSize: '1rem', color: 'var(--accent-indigo)', marginBottom: '0.8rem', fontFamily: 'var(--font-mono)' }}>LANGUAGES & BACKEND</h4>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {[...TECHNICAL_SKILLS.languages, ...TECHNICAL_SKILLS.backend].map((item, idx) => (
                <span key={idx} className="meta-tag">{item}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h4 style={{ fontSize: '1rem', color: 'var(--accent-emerald)', marginBottom: '0.8rem', fontFamily: 'var(--font-mono)' }}>AI, LLM & MACHINE LEARNING</h4>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {[...TECHNICAL_SKILLS.ai_llm, ...TECHNICAL_SKILLS.ml_dl].map((item, idx) => (
                <span key={idx} className="meta-tag meta-emerald">{item}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h4 style={{ fontSize: '1rem', color: 'var(--accent-amber)', marginBottom: '0.8rem', fontFamily: 'var(--font-mono)' }}>DATABASES & DEVOPS</h4>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {[...TECHNICAL_SKILLS.databases, ...TECHNICAL_SKILLS.devops_cloud, ...TECHNICAL_SKILLS.observability].map((item, idx) => (
                <span key={idx} className="meta-tag meta-amber">{item}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h4 style={{ fontSize: '1rem', color: 'var(--accent-purple)', marginBottom: '0.8rem', fontFamily: 'var(--font-mono)' }}>FRONTEND & ARCHITECTURE</h4>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {TECHNICAL_SKILLS.frontend.map((item, idx) => (
                <span key={idx} className="meta-tag meta-purple">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Achievements & Education */}
      <div className="grid-2">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
            <Award size={22} style={{ color: 'var(--accent-amber)' }} />
            <h3 style={{ fontSize: '1.4rem' }}>Hackathons & Awards</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {ACHIEVEMENTS.map(ach => (
              <div key={ach.id} className="card" style={{ padding: '1.2rem' }}>
                <span className="meta-tag meta-amber" style={{ marginBottom: '0.4rem', display: 'inline-block' }}>{ach.award}</span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{ach.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{ach.description}</p>
                {ach.prize && <p style={{ fontSize: '0.82rem', color: 'var(--accent-indigo)', fontWeight: 700, marginTop: '0.4rem', fontFamily: 'var(--font-mono)' }}>{ach.prize}</p>}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
            <GraduationCap size={22} style={{ color: 'var(--accent-indigo)' }} />
            <h3 style={{ fontSize: '1.4rem' }}>Education</h3>
          </div>

          <div className="card" style={{ padding: '1.4rem' }}>
            <span className="meta-tag meta-cyan" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>{PROFILE_DATA.education.period}</span>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{PROFILE_DATA.education.degree}</h4>
            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-indigo)' }}>{PROFILE_DATA.education.institution}</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem', fontFamily: 'var(--font-mono)' }}>CGPA: {PROFILE_DATA.education.gpa}</p>
            <div style={{ borderTop: '1px solid var(--border-muted)', marginTop: '1rem', paddingTop: '0.8rem' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}><strong>Schooling:</strong> {PROFILE_DATA.education.schooling}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
