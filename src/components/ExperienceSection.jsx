import React, { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Award, Mail, Phone, ExternalLink, Code2, Cpu, CheckCircle, CreditCard, ShieldCheck } from 'lucide-react';
import { PROFILE_DATA, WORK_EXPERIENCE, ACHIEVEMENTS, TECHNICAL_SKILLS } from '../data/portfolioData';
import { checkIsRecruiterMode } from '../utils/privacyHelper';

export default function ExperienceSection() {
  const [isRecruiter, setIsRecruiter] = useState(false);

  useEffect(() => {
    setIsRecruiter(checkIsRecruiterMode());
  }, []);

  return (
    <div>
      {/* Header Banner */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
          <span className="meta-tag meta-emerald">CAREER ARCHIVE</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>[Gurugram, India]</span>
        </div>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>💼 Work Experience & Skills</h2>
        <p style={{ color: 'var(--text-muted)' }}>Software Engineer specializing in AI/LLM architectures, high-concurrency backends, and microservices.</p>
      </div>

      {/* Recruiter Verified Header Badge (ONLY rendered for recruiters on #recruiter / ?r=1) */}
      {isRecruiter && (
        <div style={{ background: '#ecfdf5', border: '1.5px solid #a7f3d0', padding: '1rem 1.2rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem', boxShadow: 'var(--shadow-subtle)' }}>
          <ShieldCheck size={24} style={{ color: '#047857', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#047857', fontFamily: 'var(--font-mono)' }}>
              🟢 RECRUITER VERIFIED DOSSIER UNLOCKED
            </div>
            <div style={{ fontSize: '0.84rem', color: '#065f46', marginTop: '0.1rem' }}>
              Full candidate profile unlocked for Hiring Managers: Academic CGPA (7.23), Class XII (83.25%), LinkedIn, LeetCode & Direct Contact Info.
            </div>
          </div>
        </div>
      )}

      {/* Recruiter Quick Contact Box */}
      <div className="card" style={{ marginBottom: '2.5rem', background: '#e0e7ff', borderColor: '#c7d2fe', padding: '1.4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: '#1e1b4b', marginBottom: '0.2rem' }}>Ujjwal Ujjwal — Software Engineer</h3>
            <p style={{ fontSize: '0.88rem', color: '#3730a3' }}>{PROFILE_DATA.education.degree} • VIT Chennai</p>
          </div>

          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://github.com/ujjwal-void" target="_blank" rel="noreferrer" className="btn-glass" style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}>
              <ExternalLink size={14} /> GitHub
            </a>

            {/* Recruiter-Only Unlocked Links */}
            {isRecruiter && (
              <>
                <a href="#card" onClick={() => window.location.hash = 'card'} className="btn-primary" style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}>
                  <CreditCard size={14} /> 🎴 Download 1-Page Pass
                </a>
                <a href={`mailto:${PROFILE_DATA.email}`} className="btn-glass" style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}>
                  <Mail size={14} /> {PROFILE_DATA.email}
                </a>
                <a href={`tel:${PROFILE_DATA.phone}`} className="btn-glass" style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}>
                  <Phone size={14} /> {PROFILE_DATA.phone}
                </a>
                <a href="https://www.linkedin.com/in/ujjwal-ujjwal-dev/" target="_blank" rel="noreferrer" className="btn-glass" style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}>
                  <ExternalLink size={14} /> LinkedIn
                </a>
                <a href="https://leetcode.com/u/ujjwal92/" target="_blank" rel="noreferrer" className="btn-glass" style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}>
                  <Code2 size={14} /> LeetCode
                </a>
              </>
            )}
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

      {/* Achievements & Education (CGPA scores ONLY rendered for recruiters) */}
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
            
            {/* CGPA Display (Only rendered for recruiters) */}
            {isRecruiter && (
              <p style={{ fontSize: '0.88rem', color: '#047857', fontWeight: 800, marginTop: '0.5rem', fontFamily: 'var(--font-mono)', background: '#d1fae5', padding: '0.25rem 0.6rem', borderRadius: '4px', display: 'inline-block' }}>
                CGPA: {PROFILE_DATA.education.gpa}
              </p>
            )}

            {/* Schooling Display */}
            <div style={{ borderTop: '1px solid var(--border-muted)', marginTop: '0.8rem', paddingTop: '0.8rem' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}><strong>Schooling:</strong> Lucknow Public College</p>
              {isRecruiter && (
                <p style={{ fontSize: '0.82rem', color: '#047857', fontWeight: 700, fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                  Class XII Marks: 83.25%
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
