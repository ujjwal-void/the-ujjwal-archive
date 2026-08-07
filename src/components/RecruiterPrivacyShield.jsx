import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, Unlock, Mail, Phone } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function RecruiterPrivacyShield({ type, children }) {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    // Automatically unlock if URL has ?recruiter=true or ?access=recruiter
    const params = new URLSearchParams(window.location.search);
    if (params.get('recruiter') === 'true' || params.get('access') === 'recruiter') {
      setUnlocked(true);
    }
  }, []);

  const handleUnlock = () => {
    setUnlocked(true);
  };

  if (unlocked) {
    if (type === 'email') {
      return (
        <a href={`mailto:${PROFILE_DATA.email}`} style={{ color: 'var(--accent-indigo)', textDecoration: 'none', fontWeight: 600 }}>
          ✉️ {PROFILE_DATA.email}
        </a>
      );
    }
    if (type === 'phone') {
      return (
        <a href={`tel:${PROFILE_DATA.phone}`} style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600 }}>
          📞 {PROFILE_DATA.phone}
        </a>
      );
    }
    return children;
  }

  return (
    <button
      onClick={handleUnlock}
      style={{
        background: '#fef3c7',
        border: '1px dashed #fde68a',
        color: '#92400e',
        fontSize: '0.78rem',
        fontWeight: 600,
        padding: '0.25rem 0.65rem',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        fontFamily: 'var(--font-mono)'
      }}
      title="Click to reveal recruiter contact info"
    >
      <Lock size={12} style={{ color: '#b45309' }} />
      {type === 'email' ? 'ujjwal.02***@gmail.com [Unlock]' : '+91 73806***** [Unlock]'}
    </button>
  );
}
