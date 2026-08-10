import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Briefcase, Cpu, FileText, Atom, Sparkles, X, ChevronRight, Zap } from 'lucide-react';

export default function SpiderHangingGuide({ activeRoute, onNavigate }) {
  const mountRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [speechText, setSpeechText] = useState("Peter Parker here! 🕷️ Click me to swing around!");

  // Contextual reactive reaction with HILARIOUS SPIDEY FOURTH-WALL DIALOGUES
  useEffect(() => {
    switch (activeRoute) {
      case 'home':
        setSpeechText("Peter Parker here! 🕷️ Welcome to Ujjwal's lair! Watch out for bugs!");
        break;
      case 'experience':
        setSpeechText("ZFunds & Advor backend! 💼 Ujjwal squashes prod outages faster than I catch robbers!");
        break;
      case 'projects':
        setSpeechText("Yo! 🚀 Hybrid RAG & microservices! Stark Tech is jealous of this pipeline!");
        break;
      case 'essays':
      case 'teaching':
        setSpeechText("Brain overload alert! 🧠 Reading Ujjwal's vector embeddings & RAG notes!");
        break;
      case 'physics':
      case 'math':
        setSpeechText("Quantum mechanics & vector spaces?! ⚛️ Doc Ock would be sweating!");
        break;
      case 'culture':
      case 'media':
        setSpeechText("Popcorn time! 🍿 Spidey approved anime, Metamorphosis & thrillers!");
        break;
      default:
        setSpeechText("Ready to explore? Let me web-sling you across sections! 🕸️");
    }
  }, [activeRoute]);

  useEffect(() => {
    if (minimized) return;

    const container = mountRef.current;
    if (!container) return;

    // 1. Three.js Scene Setup for 3D Tilt & Web Effect
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(85, 85);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const redLight = new THREE.DirectionalLight(0xef4444, 2.2);
    redLight.position.set(4, 6, 4);
    scene.add(redLight);

    // 3. Web-Hanging Ring Mesh
    const webRingGroup = new THREE.Group();
    scene.add(webRingGroup);

    const ringGeo = new THREE.TorusGeometry(1.8, 0.08, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    webRingGroup.add(ringMesh);

    // Glowing Neon Silk Thread
    const threadGeo = new THREE.CylinderGeometry(0.04, 0.04, 8);
    const threadMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 0.9,
    });
    const threadMesh = new THREE.Mesh(threadGeo, threadMat);
    threadMesh.position.set(0, 4.5, 0);
    webRingGroup.add(threadMesh);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0012;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0012;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.08;
      targetY += (mouseY - targetY) * 0.08;

      webRingGroup.rotation.z = Math.sin(elapsed * 2.0) * 0.15 + targetX * 1.5;
      webRingGroup.rotation.x = Math.cos(elapsed * 1.8) * 0.1 + targetY * 1.5;
      webRingGroup.position.y = Math.sin(elapsed * 2.5) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      threadGeo.dispose();
      threadMat.dispose();
    };
  }, [minimized]);

  const handleNav = (route, label) => {
    if (onNavigate) onNavigate(route);
    setMenuOpen(false);
  };

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        style={{
          position: 'fixed',
          top: '4.8rem',
          right: '1.2rem',
          zIndex: 999,
          background: 'rgba(239, 68, 68, 0.92)',
          backdropFilter: 'blur(12px)',
          border: '1.5px solid #ef4444',
          color: '#ffffff',
          borderRadius: '30px',
          padding: '0.45rem 0.9rem',
          fontSize: '0.78rem',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(239, 68, 68, 0.4)',
        }}
        title="Show Spidey Guide"
      >
        <span style={{ fontSize: '1rem' }}>🕷️</span>
        <span>Spidey Tour</span>
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: '4.8rem',
        right: '1.5rem',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.5rem',
      }}
    >
      {/* 1. Hanging Spidey Avatar Button with 3D Web Canvas Overlay */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
        }}
      >
        {/* Top Glowing Red Silk Thread */}
        <div
          style={{
            position: 'absolute',
            top: '-42px',
            right: '34px',
            width: '2.5px',
            height: '42px',
            background: 'linear-gradient(to bottom, #ef4444, rgba(239, 68, 68, 0.5))',
            boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)',
            zIndex: 1,
          }}
        />

        <div
          onClick={() => setMenuOpen((prev) => !prev)}
          style={{
            position: 'relative',
            width: '68px',
            height: '68px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, #ef4444 0%, #1e1b4b 65%, #0f172a 100%)',
            border: '2.5px solid #ef4444',
            boxShadow: '0 8px 30px rgba(239, 68, 68, 0.55)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            overflow: 'hidden',
          }}
          className="spidey-avatar-wrapper"
          title="Click Spidey for web navigation!"
        >
          {/* Authentic Spidey Transparent Avatar */}
          <img
            src="./media/spiderman.png"
            alt="Spidey Guide"
            style={{
              width: '54px',
              height: '54px',
              objectFit: 'cover',
              zIndex: 2,
              filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.6))',
            }}
          />

          {/* Three.js 3D Web Ring Overlay */}
          <div
            ref={mountRef}
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 3,
            }}
          />

          {/* Minimize Badge */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMinimized(true);
            }}
            style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: '#ef4444',
              border: '1px solid #ffffff',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              cursor: 'pointer',
              fontSize: '9px',
              zIndex: 4,
            }}
            title="Hide Spidey"
          >
            <X size={9} />
          </button>
        </div>
      </div>

      {/* 2. Compact Non-Obstructive Speech Bubble BELOW Spidey */}
      {!menuOpen && (
        <div
          onClick={() => setMenuOpen(true)}
          style={{
            background: 'rgba(15, 23, 42, 0.94)',
            backdropFilter: 'blur(16px)',
            border: '1.5px solid rgba(239, 68, 68, 0.6)',
            padding: '0.45rem 0.75rem',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: 600,
            fontFamily: 'var(--font-mono)',
            color: '#f8fafc',
            boxShadow: '0 8px 24px rgba(239, 68, 68, 0.3)',
            cursor: 'pointer',
            maxWidth: '190px',
            textAlign: 'right',
            animation: 'spideyFloat 3s ease-in-out infinite',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <Zap size={13} style={{ color: '#ef4444', flexShrink: 0 }} />
          <span>{speechText}</span>
        </div>
      )}

      {/* 3. Interactive Tour Navigation Drawer */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(18px)',
            border: '1.5px solid rgba(239, 68, 68, 0.55)',
            boxShadow: '0 12px 40px rgba(239, 68, 68, 0.35)',
            borderRadius: '16px',
            padding: '0.9rem',
            width: '260px',
            color: '#f8fafc',
            animation: 'spideySlideDown 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justify: 'space-between',
              marginBottom: '0.7rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              paddingBottom: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.2rem' }}>🕷️</span>
              <div>
                <h4 style={{ fontSize: '0.88rem', margin: 0, fontWeight: 700 }}>
                  Spidey Web Explorer
                </h4>
                <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: 0 }}>
                  Swing to any section!
                </p>
              </div>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer',
              }}
            >
              <X size={16} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <button
              onClick={() => handleNav('experience', 'Experience')}
              className="spidey-nav-btn"
            >
              <Briefcase size={14} style={{ color: '#ef4444' }} />
              <span>Swing to Experience</span>
              <ChevronRight size={13} style={{ marginLeft: 'auto', color: '#64748b' }} />
            </button>

            <button
              onClick={() => handleNav('projects', 'Projects')}
              className="spidey-nav-btn"
            >
              <Cpu size={14} style={{ color: '#38bdf8' }} />
              <span>Swing to Projects</span>
              <ChevronRight size={13} style={{ marginLeft: 'auto', color: '#64748b' }} />
            </button>

            <button
              onClick={() => handleNav('essays', 'Tech Essays')}
              className="spidey-nav-btn"
            >
              <FileText size={14} style={{ color: '#10b981' }} />
              <span>Tech Essays & RAG</span>
              <ChevronRight size={13} style={{ marginLeft: 'auto', color: '#64748b' }} />
            </button>

            <button
              onClick={() => handleNav('physics', 'Physics/Math')}
              className="spidey-nav-btn"
            >
              <Atom size={14} style={{ color: '#818cf8' }} />
              <span>Physics & Math Notes</span>
              <ChevronRight size={13} style={{ marginLeft: 'auto', color: '#64748b' }} />
            </button>

            <button
              onClick={() => handleNav('culture', 'Culture Reviews')}
              className="spidey-nav-btn"
            >
              <Sparkles size={14} style={{ color: '#f59e0b' }} />
              <span>Culture Reviews</span>
              <ChevronRight size={13} style={{ marginLeft: 'auto', color: '#64748b' }} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        .spidey-avatar-wrapper:hover {
          transform: scale(1.12) translateY(3px);
          border-color: #ef4444;
          box-shadow: 0 12px 36px rgba(239, 68, 68, 0.75);
        }

        .spidey-nav-btn {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 9px;
          padding: 0.5rem 0.75rem;
          color: #e2e8f0;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
          text-align: left;
        }

        .spidey-nav-btn:hover {
          background: rgba(239, 68, 68, 0.18);
          border-color: rgba(239, 68, 68, 0.5);
          color: #ffffff;
          transform: translateX(4px);
        }

        @keyframes spideySlideDown {
          from { opacity: 0; transform: translateY(-8px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes spideyFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
      `}</style>
    </div>
  );
}
