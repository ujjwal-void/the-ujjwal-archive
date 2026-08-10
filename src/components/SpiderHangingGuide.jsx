import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Briefcase, Cpu, FileText, Atom, Sparkles, X, Compass, ChevronRight } from 'lucide-react';

export default function SpiderHangingGuide({ activeRoute, onNavigate }) {
  const mountRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [speechText, setSpeechText] = useState("Hi! I'm Spidey 🕷️ Click me to explore!");

  // Contextual reactive reaction whenever activeRoute changes
  useEffect(() => {
    switch (activeRoute) {
      case 'home':
        setSpeechText("Welcome to Ujjwal's Archive! 🕸️");
        break;
      case 'experience':
        setSpeechText("Inspecting SDE Roles at ZFunds & Advor! 💼");
        break;
      case 'projects':
        setSpeechText("Checking RAG Engines & Microservices! 🚀");
        break;
      case 'essays':
      case 'teaching':
        setSpeechText("Reading Hybrid RAG & Vector Embeddings! ✍️");
        break;
      case 'physics':
      case 'math':
        setSpeechText("Analyzing Vectors & Activation Functions! ⚛️");
        break;
      case 'culture':
      case 'media':
        setSpeechText("Reviewing Literature & Cinema Notes! 🍿");
        break;
      default:
        setSpeechText("Exploring Ujjwal's Portfolio! 🕷️");
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

    // 2. Lighting Setup Matching Dark Palette
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x6366f1, 1.4); // Indigo Accent
    dirLight.position.set(4, 6, 4);
    scene.add(dirLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 1.8, 12); // Cyan Accent
    cyanLight.position.set(-3, -2, 3);
    scene.add(cyanLight);

    // 3. Spider Root Group
    const spiderGroup = new THREE.Group();
    scene.add(spiderGroup);

    // Spider Abdomen / Rear Body
    const abdomenGeo = new THREE.SphereGeometry(1.2, 24, 24);
    abdomenGeo.scale(0.95, 1.1, 1.2);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // Matches Dark Slate bg-card
      roughness: 0.3,
      metalness: 0.4,
      emissive: 0x1e1b4b,
      emissiveIntensity: 0.4,
    });
    const abdomenMesh = new THREE.Mesh(abdomenGeo, bodyMat);
    abdomenMesh.position.set(0, 0.4, -0.2);
    spiderGroup.add(abdomenMesh);

    // Spider Cephalothorax / Head Body
    const headGeo = new THREE.SphereGeometry(0.85, 24, 24);
    const headMesh = new THREE.Mesh(headGeo, bodyMat);
    headMesh.position.set(0, -0.5, 0.3);
    spiderGroup.add(headMesh);

    // Spider Glowing Visor Eyes (Cyan Glow)
    const eyeGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    const eyeOffsets = [
      [-0.32, -0.45, 1.05],
      [0.32, -0.45, 1.05],
      [-0.14, -0.32, 1.12],
      [0.14, -0.32, 1.12],
    ];

    eyeOffsets.forEach(([x, y, z]) => {
      const eye = new THREE.Mesh(eyeGeo, eyeMat);
      eye.position.set(x, y, z);
      spiderGroup.add(eye);
    });

    // Spider 8 Limbs (4 Left, 4 Right)
    const legMat = new THREE.MeshStandardMaterial({
      color: 0x4338ca,
      roughness: 0.4,
      metalness: 0.3,
    });

    const legs = [];

    for (let side = -1; side <= 1; side += 2) {
      for (let i = 0; i < 4; i++) {
        const legGroup = new THREE.Group();
        legGroup.position.set(side * 0.7, -0.3 + i * 0.25, 0.1);

        // Upper Leg Joint
        const upperGeo = new THREE.CylinderGeometry(0.06, 0.05, 1.1);
        const upperLeg = new THREE.Mesh(upperGeo, legMat);
        upperLeg.position.set(side * 0.5, 0.3, 0);
        upperLeg.rotation.z = side * (Math.PI / 4 + i * 0.08);
        legGroup.add(upperLeg);

        // Lower Leg Joint
        const lowerGeo = new THREE.CylinderGeometry(0.04, 0.02, 1.2);
        const lowerLeg = new THREE.Mesh(lowerGeo, legMat);
        lowerLeg.position.set(side * 0.9, -0.3, 0.1);
        lowerLeg.rotation.z = side * -(Math.PI / 6 + i * 0.05);
        legGroup.add(lowerLeg);

        spiderGroup.add(legGroup);
        legs.push({ group: legGroup, side, index: i });
      }
    }

    // 4. Glowing Web Thread suspended from top boundary
    const threadGeo = new THREE.CylinderGeometry(0.025, 0.025, 6);
    const threadMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.45,
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

      // Upside-down hanging pendulum oscillation
      spiderGroup.position.y = Math.sin(elapsed * 2.0) * 0.18;
      spiderGroup.position.x = Math.cos(elapsed * 1.4) * 0.08;

      spiderGroup.rotation.z = Math.sin(elapsed * 1.5) * 0.08 + targetX * 1.2;
      spiderGroup.rotation.x = Math.cos(elapsed * 1.8) * 0.06 + targetY * 1.2;

      // Animate 8 Spider Legs in walking/twitching motion
      legs.forEach(({ group, side, index }) => {
        group.rotation.x = Math.sin(elapsed * 4.0 + index) * 0.15;
        group.rotation.z = side * (Math.sin(elapsed * 3.0 + index) * 0.1);
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
      bodyMat.dispose();
      eyeGeo.dispose();
      eyeMat.dispose();
      legMat.dispose();
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
          background: 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          color: '#a5b4fc',
          borderRadius: '30px',
          padding: '0.45rem 0.85rem',
          fontSize: '0.78rem',
          fontFamily: 'var(--font-mono)',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
        }}
        title="Show 3D Spider Guide"
      >
        <span style={{ fontSize: '1rem' }}>🕷️</span>
        <span>Spidey Guide</span>
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: '5.2rem', // HANGING FROM TOP RIGHT HEADER BOUNDARY
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
        {/* Reactive Contextual Speech Bubble */}
        {!menuOpen && (
          <div
            onClick={() => setMenuOpen(true)}
            style={{
              background: 'var(--bg-card, rgba(15, 23, 42, 0.92))',
              backdropFilter: 'blur(14px)',
              border: '1px solid var(--border-muted, rgba(99, 102, 241, 0.35))',
              padding: '0.5rem 0.9rem',
              borderRadius: '12px',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-main, #f8fafc)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              animation: 'spiderPendulum 3s ease-in-out infinite',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span>{speechText}</span>
          </div>
        )}

        {/* 3D Hanging Spider WebGL Canvas Container */}
        <div
          onClick={() => setMenuOpen((prev) => !prev)}
          style={{
            position: 'relative',
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, #1e1b4b, #0f172a)',
            border: '2px solid rgba(99, 102, 241, 0.5)',
            boxShadow: '0 8px 26px rgba(99, 102, 241, 0.4)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
          className="spider-canvas-wrapper"
          title="Click Hanging Spider to navigate!"
        >
          {/* Top Silk Web Thread */}
          <div
            style={{
              position: 'absolute',
              top: '-45px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '45px',
              background: 'linear-gradient(to bottom, rgba(129, 140, 248, 0.8), rgba(99, 102, 241, 0.3))',
              boxShadow: '0 0 8px rgba(99, 102, 241, 0.6)',
            }}
          />

          <div ref={mountRef} style={{ width: '110px', height: '110px', pointerEvents: 'none' }} />

          {/* Minimize Button Badge */}
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
              background: '#1e293b',
              border: '1px solid #64748b',
              color: '#94a3b8',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              cursor: 'pointer',
              fontSize: '10px',
            }}
            title="Hide Spider Guide"
          >
            <X size={10} />
          </button>
        </div>
      </div>

      {/* 2. Interactive Tour Navigation Drawer */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.94)',
            backdropFilter: 'blur(18px)',
            border: '1.5px solid rgba(99, 102, 241, 0.45)',
            boxShadow: '0 12px 38px rgba(15, 23, 42, 0.7)',
            borderRadius: '16px',
            padding: '1rem',
            width: '270px',
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
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '0.6rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.2rem' }}>🕷️</span>
              <div>
                <h4 style={{ fontSize: '0.9rem', margin: 0, fontWeight: 700 }}>
                  Spider Tour Guide
                </h4>
                <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: 0 }}>
                  Jump to any section
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
              <Briefcase size={15} style={{ color: '#6366f1' }} />
              <span>Work Experience</span>
              <ChevronRight size={14} style={{ marginLeft: 'auto', color: '#64748b' }} />
            </button>

            <button
              onClick={() => handleNav('projects', 'Projects')}
              className="spider-nav-btn"
            >
              <Cpu size={15} style={{ color: '#06b6d4' }} />
              <span>Verified Projects</span>
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
          transform: scale(1.12) translateY(3px);
          border-color: #6366f1;
          box-shadow: 0 12px 32px rgba(99, 102, 241, 0.55);
        }

        .spider-nav-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.03);
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
          background: rgba(99, 102, 241, 0.18);
          border-color: rgba(99, 102, 241, 0.4);
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
