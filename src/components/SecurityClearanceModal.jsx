import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, Lock, Unlock, X, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { useSecurityClearance } from '../context/SecurityClearanceContext';

export default function SecurityClearanceModal() {
  const { isModalOpen, closeModal, isRecruiter, grantRecruiterClearance, revokeClearance } = useSecurityClearance();
  const [workEmail, setWorkEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (workEmail.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        grantRecruiterClearance();
        setSubmitted(false);
        setWorkEmail('');
      }, 600);
    } else {
      grantRecruiterClearance();
    }
  };

  return (
    <div className="ai-modal-overlay" onClick={closeModal}>
      <div
        className="card"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '520px',
          width: '100%',
          padding: '2rem',
          background: '#ffffff',
          border: '2px solid var(--border-accent)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 20px 50px rgba(15, 23, 42, 0.2)',
          position: 'relative'
        }}
      >
        <button className="close-btn" onClick={closeModal} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          <X size={20} />
        </button>

        {/* Cyber Security Banner Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
          <div style={{ background: isRecruiter ? '#d1fae5' : '#e0e7ff', padding: '0.6rem', borderRadius: 'var(--radius-sm)', color: isRecruiter ? '#047857' : '#4338ca' }}>
            {isRecruiter ? <ShieldCheck size={26} /> : <Lock size={26} />}
          </div>
          <div>
            <span className="meta-tag meta-purple" style={{ fontSize: '0.7rem' }}>UJJWAL_SEC_OS v2.4</span>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)', margin: '0.1rem 0' }}>
              {isRecruiter ? 'Recruiter Clearance: GRANTED (Tier-2)' : 'Recruiter Access Protection'}
            </h3>
          </div>
        </div>

        {isRecruiter ? (
          <div>
            <div style={{ background: '#ecfdf5', border: '1.5px solid #a7f3d0', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#047857', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                <CheckCircle2 size={18} /> FULL CLEARANCE ACTIVE
              </div>
              <p style={{ fontSize: '0.85rem', color: '#065f46', lineHeight: '1.5' }}>
                Academic CGPA scores, direct phone/email channels, and official resume downloads are now fully unlocked for your session.
              </p>
            </div>

            <button
              onClick={revokeClearance}
              className="btn-glass"
              style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', color: '#be123c', borderColor: '#fecdd3' }}
            >
              Lock Confidential Recruiter Data (Switch to Public View)
            </button>
          </div>
        ) : (
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.2rem', lineHeight: '1.6' }}>
              To protect personal privacy from automated public web scrapers, confidential candidate details (such as <strong>Academic CGPA & Scores</strong>, <strong>Direct Contact Info</strong>, and <strong>Resume Download</strong>) are locked under Recruiter Access Shield.
            </p>

            {/* Quick 1-Click Verification Form */}
            <form onSubmit={handleSubmit} style={{ marginBottom: '1.2rem' }}>
              <div style={{ marginBottom: '0.8rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)' }}>
                  CORPORATE WORK EMAIL (OPTIONAL FOR VERIFICATION)
                </label>
                <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-secondary)', border: '1px solid var(--border-muted)', borderRadius: 'var(--radius-sm)', padding: '0.5rem 0.8rem', gap: '0.6rem' }}>
                  <Building2 size={16} style={{ color: 'var(--text-dim)' }} />
                  <input
                    type="email"
                    placeholder="recruiter@company.com"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    style={{ background: 'transparent', border: 'none', outline: 'none', width: '100%', fontSize: '0.85rem', color: 'var(--text-main)', fontFamily: 'var(--font-mono)' }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '0.65rem' }}
              >
                {submitted ? 'Verifying Recruiter Clearance...' : '🔓 Unlock Verified Recruiter Access'}
              </button>
            </form>

            {/* Direct Instant Pass Option */}
            <div style={{ textAlign: 'center', borderTop: '1px solid var(--border-muted)', paddingTop: '1rem' }}>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginBottom: '0.6rem' }}>
                Or grant instant 1-click recruiter pass:
              </p>
              <button
                onClick={grantRecruiterClearance}
                className="btn-glass"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', color: 'var(--accent-indigo)', borderColor: '#c7d2fe', background: '#f5f3ff' }}
              >
                <ShieldCheck size={16} /> Instant 1-Click Recruiter Pass (Tier-2)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
