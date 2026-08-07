import React, { createContext, useContext, useState, useEffect } from 'react';

const SecurityClearanceContext = createContext();

export function SecurityClearanceProvider({ children }) {
  const [clearanceLevel, setClearanceLevel] = useState('PUBLIC'); // 'PUBLIC' (Tier-1) or 'RECRUITER' (Tier-2)
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Auto-grant recruiter clearance if URL contains security token or recruiter flag
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token') || params.get('recruiter') || params.get('access');
    if (token === 'true' || token === 'recruiter' || token === 'clearance') {
      setClearanceLevel('RECRUITER');
    }
  }, []);

  const grantRecruiterClearance = () => {
    setClearanceLevel('RECRUITER');
    setIsModalOpen(false);
  };

  const revokeClearance = () => {
    setClearanceLevel('PUBLIC');
  };

  return (
    <SecurityClearanceContext.Provider
      value={{
        clearanceLevel,
        isRecruiter: clearanceLevel === 'RECRUITER',
        grantRecruiterClearance,
        revokeClearance,
        isModalOpen,
        openModal: () => setIsModalOpen(true),
        closeModal: () => setIsModalOpen(false)
      }}
    >
      {children}
    </SecurityClearanceContext.Provider>
  );
}

export function useSecurityClearance() {
  return useContext(SecurityClearanceContext);
}
