import React, { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Award, Mail, Phone, ExternalLink, Code2, Cpu, CreditCard, Download, FileText } from 'lucide-react';
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.8rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <span className="meta-tag">CAREER ARCHIVE</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>[Gurugram, India]</span>
            </div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>Work Experience & Skills</h2>
            <p style={{ color: 'var(--text-muted)' }}>Software Engineer specializing in AI/LLM architectures, high-concurrency backends, and microservices.</p>
          </div>

          {/* Download Official Resume PDF Button */}
          {isRecruiter && (
            <a
              href="./Ujjwal_Ujjwal_Resume.pdf"
              download="Ujjwal_Ujjwal_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.85rem', padding: '0.55rem 1.1rem', gap: '0.5rem', boxShadow: 'var(--shadow-subtle)' }}
            >
              <Download size={16} /> Download Official Resume (PDF)
            </a>
          )}
        </div>
      </div>

      {/* Quick Contact & Credentials Box */}
      <div className="card" style={{ marginBottom: '2.5rem', background: 'var(--bg-secondary)', borderColor: 'var(--border-muted)', padding: '1.4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>Ujjwal Ujjwal: Software Engineer</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{PROFILE_DATA.education.degree} • VIT Vellore</p>
          </div>

          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://github.com/ujjwal-void" target="_blank" rel="noreferrer" className="btn-secondary" style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}>
              <ExternalLink size={14} /> GitHub
            </a>

            {/* Render confidential data ONLY if recruiter */}
            {isRecruiter && (
              <>
                <a
                  href="./Ujjwal_Ujjwal_Resume.pdf"
                  download="Ujjwal_Ujjwal_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}
                >
                  <Download size={14} /> Download Resume (PDF)
                </a>
                <a href={isRecruiter ? "#recruit/card" : "#card"} onClick={(e) => { e.preventDefault(); window.location.hash = isRecruiter ? 'recruit/card' : 'card'; }} className="btn-secondary" style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}>
                  <CreditCard size={14} /> 1-Page Pass
                </a>
                <a href={`mailto:${PROFILE_DATA.email}`} className="btn-secondary" style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}>
                  <Mail size={14} /> {PROFILE_DATA.email}
                </a>
                <a href={`tel:${PROFILE_DATA.phone}`} className="btn-secondary" style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}>
                  <Phone size={14} /> {PROFILE_DATA.phone}
                </a>
                <a href="https://www.linkedin.com/in/ujjwal-ujjwal-dev/" target="_blank" rel="noreferrer" className="btn-secondary" style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}>
                  <ExternalLink size={14} /> LinkedIn
                </a>
                <a href="https://leetcode.com/u/ujjwal92/" target="_blank" rel="noreferrer" className="btn-secondary" style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}>
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
          <Briefcase size={22} style={{ color: 'var(--text-main)' }} />
          <h3 style={{ fontSize: '1.5rem' }}>Professional Experience</h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {WORK_EXPERIENCE.map(job => (
            <div key={job.id} className="card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.35rem', color: 'var(--text-main)' }}>{job.role}</h4>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>{job.company} • <span style={{ color: 'var(--text-dim)', fontWeight: 400 }}>{job.location}</span></p>
                </div>
                <span className="meta-tag">{job.period}</span>
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
                    <span style={{ color: 'var(--text-dim)', flexShrink: 0 }}>•</span>
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
          <Cpu size={22} style={{ color: 'var(--text-main)' }} />
          <h3 style={{ fontSize: '1.5rem' }}>Technical Skills Matrix</h3>
        </div>

        <div className="grid-2">
          <div className="card">
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.8rem', fontFamily: 'var(--font-mono)' }}>LANGUAGES & FRONTEND</h4>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {[...TECHNICAL_SKILLS.languages, ...TECHNICAL_SKILLS.frontend].map((item, idx) => (
                <span key={idx} className="meta-tag">{item}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.8rem', fontFamily: 'var(--font-mono)' }}>BACKEND & MICROSERVICES</h4>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {TECHNICAL_SKILLS.backend.map((item, idx) => (
                <span key={idx} className="meta-tag">{item}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.8rem', fontFamily: 'var(--font-mono)' }}>AI, LLM & MACHINE LEARNING</h4>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {[...TECHNICAL_SKILLS.ai_llm, ...TECHNICAL_SKILLS.ml_dl].map((item, idx) => (
                <span key={idx} className="meta-tag">{item}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.8rem', fontFamily: 'var(--font-mono)' }}>DATABASES, DEVOPS & MESSAGING</h4>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {[...TECHNICAL_SKILLS.databases, ...TECHNICAL_SKILLS.devops_cloud, ...TECHNICAL_SKILLS.messaging_observability].map((item, idx) => (
                <span key={idx} className="meta-tag">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Achievements & Education */}
      <div className="grid-2">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
            <Award size={22} style={{ color: 'var(--text-main)' }} />
            <h3 style={{ fontSize: '1.4rem' }}>Hackathons & Awards</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {ACHIEVEMENTS.map(ach => (
              <div key={ach.id} className="card" style={{ padding: '1.2rem' }}>
                <span className="meta-tag" style={{ marginBottom: '0.4rem', display: 'inline-block' }}>{ach.award}</span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{ach.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{ach.description}</p>
                {ach.prize && <p style={{ fontSize: '0.82rem', color: 'var(--text-main)', fontWeight: 600, marginTop: '0.4rem', fontFamily: 'var(--font-mono)' }}>{ach.prize}</p>}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
            <GraduationCap size={22} style={{ color: 'var(--text-main)' }} />
            <h3 style={{ fontSize: '1.4rem' }}>Education</h3>
          </div>

          <div className="card" style={{ padding: '1.4rem' }}>
            <span className="meta-tag" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>{PROFILE_DATA.education.period}</span>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{PROFILE_DATA.education.degree}</h4>
            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>{PROFILE_DATA.education.institution}</p>
            
            {/* Render CGPA ONLY if recruiter */}
            {isRecruiter && (
              <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', fontWeight: 700, marginTop: '0.5rem', fontFamily: 'var(--font-mono)', background: 'var(--bg-secondary)', border: '1px solid var(--border-muted)', padding: '0.25rem 0.6rem', borderRadius: '4px', display: 'inline-block' }}>
                CGPA: {PROFILE_DATA.education.gpa}
              </p>
            )}

            {/* Schooling */}
            <div style={{ borderTop: '1px solid var(--border-muted)', marginTop: '0.8rem', paddingTop: '0.8rem' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}><strong>Schooling:</strong> Lucknow Public College</p>
              {isRecruiter && (
                <p style={{ fontSize: '0.82rem', color: 'var(--text-main)', fontWeight: 600, fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
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

