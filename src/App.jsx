import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GlobalSearch from './components/GlobalSearch';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ProfileCardSection from './components/ProfileCardSection';
import TechEssaysSection from './components/TechEssaysSection';
import PhysicsMathSection from './components/PhysicsMathSection';
import CultureSportsSection from './components/CultureSportsSection';
import LinktreeSection from './components/LinktreeSection';
import AIDigitalTwinModal from './components/AIDigitalTwinModal';
import CyberBackgroundCanvas from './components/CyberBackgroundCanvas';
import Footer from './components/Footer';
import { Bot } from 'lucide-react';

export default function App() {
  const [activeRoute, setActiveRoute] = useState('home');
  const [aiModalOpen, setAiModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      // Strip any recruit prefix from hash if present (e.g. recruit/experience -> experience)
      const cleanRoute = hash.replace(/^recruit\/?/, '') || 'home';
      setActiveRoute(cleanRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route) => {
    // Preserve recruit flag in hash if currently in recruit mode
    const isRecruit = window.location.hash.includes('recruit') || window.location.pathname.includes('recruit') || window.location.search.includes('recruit');
    const newHash = isRecruit ? `recruit/${route}` : route;
    window.location.hash = newHash;
    setActiveRoute(route);
  };

  const renderSection = () => {
    switch (activeRoute) {
      case 'home':
        return <Hero onNavigate={navigateTo} />;
      case 'experience':
        return <ExperienceSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'card':
      case 'id':
      case 'profile':
        return <ProfileCardSection />;
      case 'essays':
      case 'teaching':
        return <TechEssaysSection />;
      case 'physics':
      case 'math':
        return <PhysicsMathSection />;
      case 'culture':
      case 'media':
      case 'sports':
        return <CultureSportsSection />;
      case 'links':
        return <LinktreeSection onNavigate={navigateTo} />;
      default:
        return <Hero onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="app-container">
      {/* Vercel/Linear Style Cyber Grid & Interactive Spotlight Canvas */}
      <CyberBackgroundCanvas />

      {/* Top Navbar (hidden on standalone linktree) */}
      {activeRoute !== 'links' && (
        <Navbar activeRoute={activeRoute} onNavigate={navigateTo} />
      )}

      {/* OS Search Bar (hidden on standalone linktree) */}
      {activeRoute !== 'links' && (
        <GlobalSearch onNavigate={navigateTo} />
      )}

      {/* Main Dynamic View Content */}
      <main className="container">
        {renderSection()}
      </main>

      {/* Floating AI Digital Companion Trigger */}
      <button className="ai-twin-trigger" onClick={() => setAiModalOpen(true)} title="Ask Ujjwal's AI Assistant">
        <Bot size={18} />
        <span>Ask My AI</span>
      </button>

      {/* AI Digital Companion Drawer Modal */}
      <AIDigitalTwinModal isOpen={aiModalOpen} onClose={() => setAiModalOpen(false)} />

      {/* Footer */}
      {activeRoute !== 'links' && (
        <Footer onNavigate={navigateTo} />
      )}
    </div>
  );
}
