import React from 'react';
import { Briefcase, GraduationCap, Award, Mail, Phone, ExternalLink, Code2, Cpu, CheckCircle, Download, CreditCard, Sparkles, MapPin } from 'lucide-react';
import { PROFILE_DATA, WORK_EXPERIENCE, ACHIEVEMENTS, TECHNICAL_SKILLS } from '../data/portfolioData';

export default function RecruiterPortalView() {
  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${PROFILE_DATA.name}
TITLE:${PROFILE_DATA.title}
ORG:ZFunds (Software Engineer)
EMAIL;TYPE=INTERNET:${PROFILE_DATA.email}
TEL;TYPE=CELL:${PROFILE_DATA.phone}
ADR;TYPE=WORK:;;Gurugram;Haryana;;India
URL:${window.location.origin + window.location.pathname}
URL;TYPE=GitHub:${PROFILE_DATA.socials.find(s => s.name === 'GitHub')?.url}
URL;TYPE=LinkedIn:${PROFILE_DATA.socials.find(s => s.name === 'LinkedIn')?.url}
URL;TYPE=LeetCode:${PROFILE_DATA.leetcode}
NOTE:Software Engineer specializing in AI/LLM Systems, Hybrid RAG, and High-Concurrency Backends.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Ujjwal_Ujjwal_SDE_Profile.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrintCard = () => {
    window.print();
  };

  return (
    <div>
      {/* Recruiter Dedicated Header Banner */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
          <span className="meta-tag meta-emerald">OFFICIAL RECRUITER & HIRING PORTAL</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>[Verified Recruiter Pass]</span>
        </div>
        <h2 style={{ fontSize: '2.4rem', marginBottom: '0.4rem' }}>👔 Ujjwal Ujjwal — Executive Recruiter Dossier</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>Software Engineer at ZFunds & Founding Engineer at Advor.ai. Verified background, full contact credentials, and work history for hiring managers.</p>
      </div>

      {/* Recruiter Quick Contact & Pass Card */}
      <div className="card" style={{ marginBottom: '2.5rem', background: 'linear-gradient(135deg, #e0e7ff 0%, #ebf8ff 100%)', borderColor: '#c7d2fe', padding: '1.8rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <img
              src="./ujjwal_avatar.jpeg"
              alt={PROFILE_DATA.name}
              style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover', border: '2px solid #4338ca', boxShadow: '0 4px 14px rgba(67, 56, 202, 0.2)', flexShrink: 0 }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#1e1b4b', margin: 0 }}>{PROFILE_DATA.name}</h3>
                <span style={{ fontSize: '0.7rem', background: '#d1fae5', color: '#047857', border: '1px solid #a7f3d0', padding: '0.15rem 0.5rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>ACTIVE FOR HIRE</span>
              </div>
              <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#4338ca', margin: '0.1rem 0' }}>Software Engineer at ZFunds • Gurugram, India</p>
              <p style={{ fontSize: '0.84rem', color: '#3730a3', margin: 0 }}>B.Tech CSE (AI & ML) • VIT Chennai (2021-2025) • CGPA: 7.23 / 10.0</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <button onClick={handlePrintCard} className="btn-primary" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', gap: '0.4rem' }}>
              <Download size={15} /> Save / Print 1-Page PDF Pass
            </button>
            <button onClick={handleDownloadVCard} className="btn-glass" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', gap: '0.4rem' }}>
              <Download size={15} /> Download vCard (.vcf)
            </button>
            <a href={`mailto:${PROFILE_DATA.email}`} className="btn-glass" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', gap: '0.4rem' }}>
              <Mail size={15} /> {PROFILE_DATA.email}
            </a>
            <a href={`tel:${PROFILE_DATA.phone}`} className="btn-glass" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', gap: '0.4rem' }}>
              <Phone size={15} /> {PROFILE_DATA.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Single-Page Printable Profile Card Container */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
          <CreditCard size={22} style={{ color: 'var(--accent-indigo)' }} />
          <h3 style={{ fontSize: '1.5rem' }}>1-Page Executive Developer Card</h3>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            id="developer-profile-card"
            style={{
              maxWidth: '640px',
              width: '100%',
              background: '#ffffff',
              border: '2px solid #cbd5e1',
              borderRadius: '12px',
              padding: '1.6rem',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
              boxSizing: 'border-box'
            }}
          >
            {/* Header Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', borderBottom: '1.5px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <img
                src="./ujjwal_avatar.jpeg"
                alt={PROFILE_DATA.name}
                style={{ width: '76px', height: '76px', borderRadius: '10px', objectFit: 'cover', border: '2px solid #4338ca', flexShrink: 0, boxShadow: '0 4px 12px rgba(67, 56, 202, 0.15)' }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h3 style={{ fontSize: '1.55rem', color: '#0f172a', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>{PROFILE_DATA.name}</h3>
                  <span style={{ fontSize: '0.68rem', background: '#d1fae5', color: '#047857', border: '1px solid #a7f3d0', padding: '0.15rem 0.5rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>VERIFIED SDE</span>
                </div>
                <p style={{ fontSize: '0.88rem', fontWeight: 700, color: '#4338ca', margin: '0.15rem 0' }}>Software Engineer at ZFunds • Gurugram</p>
                <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>B.Tech CSE (AI & ML) • VIT Chennai (2021-2025)</p>
              </div>
            </div>

            {/* Quick Glimpse Bio */}
            <div style={{ background: '#f8fafc', padding: '0.8rem 1rem', borderRadius: '6px', borderLeft: '3px solid #4338ca', marginBottom: '1rem' }}>
              <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: '1.5', margin: 0 }}>
                <strong>Executive Summary:</strong> Core engineer driving ZIVA V2 AI WealthTech platform at ZFunds. Scaled RabbitMQ event microservices to &lt;150ms P99 latency & built FAISS hybrid RAG at Advor.ai. 1st Runner-Up at Osmos Hackathon (131 teams).
              </p>
            </div>

            {/* Core Tech Stack Pills */}
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                PRIMARY STACK & DOMAINS
              </div>
              <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                {['Python', 'TypeScript', 'FastAPI', 'Node.js', 'RabbitMQ', 'Redis', 'FAISS (RAG)', 'AWS', 'Docker/K8s', 'React.js'].map((tech, idx) => (
                  <span key={idx} style={{ fontSize: '0.72rem', background: '#f1f5f9', border: '1px solid #e2e8f0', color: '#334155', padding: '0.15rem 0.5rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 3-Column Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ background: '#f1f5f9', padding: '0.6rem', borderRadius: '6px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>CURRENT ROLE</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginTop: '0.1rem' }}>ZFunds SDE</div>
              </div>
              <div style={{ background: '#f1f5f9', padding: '0.6rem', borderRadius: '6px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>PAST FOUNDING</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginTop: '0.1rem' }}>Advor.ai Engineer</div>
              </div>
              <div style={{ background: '#fef3c7', padding: '0.6rem', borderRadius: '6px', textAlign: 'center', border: '1px solid #fde68a' }}>
                <div style={{ fontSize: '0.7rem', color: '#b45309', fontFamily: 'var(--font-mono)' }}>HACKATHON</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#78350f', marginTop: '0.1rem' }}>1st Runner-Up</div>
              </div>
            </div>

            {/* Contact Bar */}
            <div style={{ borderTop: '1.5px solid #e2e8f0', paddingTop: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.78rem' }}>
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', color: '#334155' }}>
                <a href={`mailto:${PROFILE_DATA.email}`} style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600 }}>✉️ {PROFILE_DATA.email}</a>
                <a href={`tel:${PROFILE_DATA.phone}`} style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 600 }}>📞 {PROFILE_DATA.phone}</a>
                <span>📍 Gurugram, India</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', fontWeight: 600 }}>
                <a href="https://github.com/ujjwal-void" target="_blank" rel="noreferrer" style={{ color: '#4338ca', textDecoration: 'none' }}>GitHub</a>
                <a href="https://www.linkedin.com/in/ujjwal-ujjwal-dev/" target="_blank" rel="noreferrer" style={{ color: '#4338ca', textDecoration: 'none' }}>LinkedIn</a>
                <a href="https://leetcode.com/u/ujjwal92/" target="_blank" rel="noreferrer" style={{ color: '#4338ca', textDecoration: 'none' }}>LeetCode</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Detailed Experience Timeline for Recruiters */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
          <Briefcase size={22} style={{ color: 'var(--accent-indigo)' }} />
          <h3 style={{ fontSize: '1.5rem' }}>Verified Work Experience</h3>
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

      {/* Detailed Academic Marks & Credentials */}
      <div className="grid-2" style={{ marginBottom: '3rem' }}>
        <div className="card" style={{ padding: '1.4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
            <GraduationCap size={22} style={{ color: 'var(--accent-indigo)' }} />
            <h4 style={{ fontSize: '1.2rem' }}>Academic Degree & CGPA</h4>
          </div>
          <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>{PROFILE_DATA.education.degree}</p>
          <p style={{ fontSize: '0.9rem', color: 'var(--accent-indigo)', fontWeight: 600 }}>{PROFILE_DATA.education.institution} ({PROFILE_DATA.education.period})</p>
          <p style={{ fontSize: '0.9rem', color: '#047857', fontWeight: 800, marginTop: '0.5rem', fontFamily: 'var(--font-mono)', background: '#d1fae5', padding: '0.3rem 0.6rem', borderRadius: '4px', display: 'inline-block' }}>
            CGPA: {PROFILE_DATA.education.gpa}
          </p>
        </div>

        <div className="card" style={{ padding: '1.4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
            <Award size={22} style={{ color: 'var(--accent-amber)' }} />
            <h4 style={{ fontSize: '1.2rem' }}>Intermediate / Class XII Marks</h4>
          </div>
          <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>{PROFILE_DATA.education.schooling}</p>
          <p style={{ fontSize: '0.9rem', color: '#b45309', fontWeight: 800, marginTop: '0.5rem', fontFamily: 'var(--font-mono)', background: '#fef3c7', padding: '0.3rem 0.6rem', borderRadius: '4px', display: 'inline-block' }}>
            Marks Percentage: 83.25%
          </p>
        </div>
      </div>
    </div>
  );
}
