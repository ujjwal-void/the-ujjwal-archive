import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Briefcase, Cpu, FileText, Atom, Sparkles, X, ChevronRight, Zap } from 'lucide-react';

export default function SpiderHangingGuide({ activeRoute, onNavigate }) {
  const mountRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [speechText, setSpeechText] = useState("Hey human! 🕷️ Click me to swing around!");

  // Contextual reactive reaction with HIGH-ENERGY EXCITING TONE
  useEffect(() => {
    switch (activeRoute) {
      case 'home':
        setSpeechText("Hey human! ⚡ Welcome to Ujjwal's Cyber Vault! Let's swing!");
        break;
      case 'experience':
        setSpeechText("Boom! 💼 SDE superpowers at ZFunds & Advor unlocked!");
        break;
      case 'projects':
        setSpeechText("Woah! 🚀 High-scale Microservices & Hybrid RAG Engines inside!");
        break;
      case 'essays':
      case 'teaching':
        setSpeechText("Brain mode ON! 🧠 Vector Embeddings & RAG Architecture!");
        break;
      case 'physics':
      case 'math':
        setSpeechText("Quantum vibes! ⚛️ Vector Spaces & Activation Math!");
        break;
      case 'culture':
      case 'media':
        setSpeechText("Popcorn time! 🍿 Mind-bending thrillers, books & anime!");
        break;
      default:
        setSpeechText("Ready to explore? Let's swing through the archive! 🕸️");
    }
  }, [activeRoute]);

  useEffect(() => {
    if (minimized) return;

    const container = mountRef.current;
    if (!container) return;

    // 1. Three.js WebGL Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(110, 110);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Bright & Vivid Lighting Setup for High Visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const redSpotLight = new THREE.DirectionalLight(0xef4444, 2.0); // Vibrant Red Light
    redSpotLight.position.set(5, 8, 5);
    scene.add(redSpotLight);

    const blueFillLight = new THREE.PointLight(0x38bdf8, 2.2, 15); // Electric Blue Light
    blueFillLight.position.set(-4, -3, 4);
    scene.add(blueFillLight);

    // 3. Spider Root Group
    const spiderGroup = new THREE.Group();
    scene.add(spiderGroup);

    // VIBRANT SPIDER RED BODY MATERIAL
    const redBodyMat = new THREE.MeshStandardMaterial({
      color: 0xef4444, // Bright Spider Red
      roughness: 0.2,
      metalness: 0.3,
      emissive: 0x991b1b,
      emissiveIntensity: 0.5,
    });

    // ELECTRIC CYBER BLUE LEG MATERIAL
    const blueLegMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb, // Vibrant Electric Blue
      roughness: 0.2,
      metalness: 0.4,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.4,
    });

    // GOLDEN SPIDER EMBLEM MATERIAL
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.8,
      roughness: 0.2,
    });

    // Spider Abdomen / Rear Body (Bright Red)
    const abdomenGeo = new THREE.SphereGeometry(1.25, 24, 24);
    abdomenGeo.scale(0.95, 1.1, 1.25);
    const abdomenMesh = new THREE.Mesh(abdomenGeo, redBodyMat);
    abdomenMesh.position.set(0, 0.4, -0.2);
    spiderGroup.add(abdomenMesh);

    // Spider Golden Emblem Badge on Abdomen
    const emblemGeo = new THREE.TorusGeometry(0.35, 0.08, 16, 32);
    const emblemMesh = new THREE.Mesh(emblemGeo, goldMat);
    emblemMesh.position.set(0, 0.5, 1.0);
    spiderGroup.add(emblemMesh);

    // Spider Cephalothorax / Head (Bright Red)
    const headGeo = new THREE.SphereGeometry(0.88, 24, 24);
    const headMesh = new THREE.Mesh(headGeo, redBodyMat);
    headMesh.position.set(0, -0.5, 0.3);
    spiderGroup.add(headMesh);

    // Spider Bright White Glowing Lenses (Eyes)
    const eyeGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const eyeOffsets = [
      [-0.32, -0.45, 1.08],
      [0.32, -0.45, 1.08],
      [-0.14, -0.32, 1.14],
      [0.14, -0.32, 1.14],
    ];

    eyeOffsets.forEach(([x, y, z]) => {
      const eye = new THREE.Mesh(eyeGeo, eyeMat);
      eye.position.set(x, y, z);
      spiderGroup.add(eye);
    });

    // Spider 8 Limbs (Electric Blue Legs with Red Joints)
    const legs = [];

    for (let side = -1; side <= 1; side += 2) {
      for (let i = 0; i < 4; i++) {
        const legGroup = new THREE.Group();
        legGroup.position.set(side * 0.7, -0.3 + i * 0.25, 0.1);

        // Upper Leg Joint (Electric Blue)
        const upperGeo = new THREE.CylinderGeometry(0.07, 0.05, 1.15);
        const upperLeg = new THREE.Mesh(upperGeo, blueLegMat);
        upperLeg.position.set(side * 0.5, 0.3, 0);
        upperLeg.rotation.z = side * (Math.PI / 4 + i * 0.08);
        legGroup.add(upperLeg);

        // Lower Leg Tip (Bright Red)
        const lowerGeo = new THREE.CylinderGeometry(0.05, 0.02, 1.25);
        const lowerLeg = new THREE.Mesh(lowerGeo, redBodyMat);
        lowerLeg.position.set(side * 0.9, -0.3, 0.1);
        lowerLeg.rotation.z = side * -(Math.PI / 6 + i * 0.05);
        legGroup.add(lowerLeg);

        spiderGroup.add(legGroup);
        legs.push({ group: legGroup, side, index: i });
      }
    }

    // Glowing Neon Red Web Thread
    const threadGeo = new THREE.CylinderGeometry(0.03, 0.03, 6);
    const threadMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 0.85,
    });
    const threadMesh = new THREE.Mesh(threadGeo, threadMat);
    threadMesh.position.set(0, 3.8, 0);
    spiderGroup.add(threadMesh);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
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

      // Upside-down hanging pendulum bobbing
      spiderGroup.position.y = Math.sin(elapsed * 2.2) * 0.2;
      spiderGroup.position.x = Math.cos(elapsed * 1.5) * 0.1;

      spiderGroup.rotation.z = Math.sin(elapsed * 1.8) * 0.1 + targetX * 1.4;
      spiderGroup.rotation.x = Math.cos(elapsed * 2.0) * 0.08 + targetY * 1.4;

      // Fast energetic limb twitching
      legs.forEach(({ group, side, index }) => {
        group.rotation.x = Math.sin(elapsed * 5.0 + index) * 0.18;
        group.rotation.z = side * (Math.sin(elapsed * 4.0 + index) * 0.12);
      });

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
      abdomenGeo.dispose();
      headGeo.dispose();
      redBodyMat.dispose();
      blueLegMat.dispose();
      goldMat.dispose();
      eyeGeo.dispose();
      eyeMat.dispose();
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
          top: '5rem',
          right: '1.5rem',
          zIndex: 999,
          background: 'rgba(239, 68, 68, 0.9)',
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
        title="Show 3D Spidey Guide"
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
        top: '5.2rem',
        right: '2.2rem',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.6rem',
      }}
    >
      {/* 1. Hanging Spider Container + Web Thread Visual */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        {/* High-Energy Exciting Speech Bubble */}
        {!menuOpen && (
          <div
            onClick={() => setMenuOpen(true)}
            style={{
              background: 'rgba(15, 23, 42, 0.94)',
              backdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(239, 68, 68, 0.6)',
              padding: '0.55rem 0.95rem',
              borderRadius: '14px',
              fontSize: '0.82rem',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
              color: '#f8fafc',
              boxShadow: '0 8px 28px rgba(239, 68, 68, 0.35)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              animation: 'spiderPendulum 3s ease-in-out infinite',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Zap size={14} style={{ color: '#ef4444' }} />
            <span>{speechText}</span>
          </div>
        )}

        {/* High-Visibility Vibrant Red/Blue 3D Spider Canvas */}
        <div
          onClick={() => setMenuOpen((prev) => !prev)}
          style={{
            position: 'relative',
            width: '74px',
            height: '74px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, #ef4444 0%, #1e1b4b 65%, #0f172a 100%)',
            border: '2.5px solid #ef4444',
            boxShadow: '0 8px 30px rgba(239, 68, 68, 0.55)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
          className="spider-canvas-wrapper"
          title="Click Spidey to swing through sections!"
        >
          {/* Top Neon Red Web Thread */}
          <div
            style={{
              position: 'absolute',
              top: '-45px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2.5px',
              height: '45px',
              background: 'linear-gradient(to bottom, #ef4444, rgba(239, 68, 68, 0.4))',
              boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)',
            }}
          />

          <div ref={mountRef} style={{ width: '110px', height: '110px', pointerEvents: 'none' }} />

          {/* Minimize Badge */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMinimized(true);
            }}
            style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: '#ef4444',
              border: '1px solid #ffffff',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              cursor: 'pointer',
              fontSize: '10px',
            }}
            title="Hide Spidey"
          >
            <X size={10} />
          </button>
        </div>
      </div>

      {/* 2. Interactive Tour Drawer */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(18px)',
            border: '1.5px solid rgba(239, 68, 68, 0.55)',
            boxShadow: '0 12px 40px rgba(239, 68, 68, 0.3)',
            borderRadius: '16px',
            padding: '1rem',
            width: '275px',
            color: '#f8fafc',
            animation: 'spiderSlideDown 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justify: 'space-between',
              marginBottom: '0.8rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              paddingBottom: '0.6rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.25rem' }}>🕷️</span>
              <div>
                <h4 style={{ fontSize: '0.92rem', margin: 0, fontWeight: 700 }}>
                  Spidey Web Explorer
                </h4>
                <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: 0 }}>
                  Swing to any section instantly!
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <button
              onClick={() => handleNav('experience', 'Experience')}
              className="spider-nav-btn"
            >
              <Briefcase size={15} style={{ color: '#ef4444' }} />
              <span>Swing to Experience</span>
              <ChevronRight size={14} style={{ marginLeft: 'auto', color: '#64748b' }} />
            </button>

            <button
              onClick={() => handleNav('projects', 'Projects')}
              className="spider-nav-btn"
            >
              <Cpu size={15} style={{ color: '#38bdf8' }} />
              <span>Swing to Projects</span>
              <ChevronRight size={14} style={{ marginLeft: 'auto', color: '#64748b' }} />
            </button>

            <button
              onClick={() => handleNav('essays', 'Tech Essays')}
              className="spider-nav-btn"
            >
              <FileText size={15} style={{ color: '#10b981' }} />
              <span>Tech Essays & RAG</span>
              <ChevronRight size={14} style={{ marginLeft: 'auto', color: '#64748b' }} />
            </button>

            <button
              onClick={() => handleNav('physics', 'Physics/Math')}
              className="spider-nav-btn"
            >
              <Atom size={15} style={{ color: '#818cf8' }} />
              <span>Physics & Math Notes</span>
              <ChevronRight size={14} style={{ marginLeft: 'auto', color: '#64748b' }} />
            </button>

            <button
              onClick={() => handleNav('culture', 'Culture Reviews')}
              className="spider-nav-btn"
            >
              <Sparkles size={15} style={{ color: '#f59e0b' }} />
              <span>Culture Reviews</span>
              <ChevronRight size={14} style={{ marginLeft: 'auto', color: '#64748b' }} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        .spider-canvas-wrapper:hover {
          transform: scale(1.14) translateY(4px);
          border-color: #ef4444;
          box-shadow: 0 12px 36px rgba(239, 68, 68, 0.7);
        }

        .spider-nav-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 0.55rem 0.8rem;
          color: #e2e8f0;
          font-size: 0.82rem;
          font-family: var(--font-mono);
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
          text-align: left;
        }

        .spider-nav-btn:hover {
          background: rgba(239, 68, 68, 0.18);
          border-color: rgba(239, 68, 68, 0.5);
          color: #ffffff;
          transform: translateX(4px);
        }

        @keyframes spiderSlideDown {
          from { opacity: 0; transform: translateY(-10px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes spiderPendulum {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
      `}</style>
    </div>
  );
}
