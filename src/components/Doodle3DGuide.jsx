import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Briefcase, Cpu, FileText, Atom, Sparkles, Bot, X, Compass, ChevronRight } from 'lucide-react';

export default function Doodle3DGuide({ onNavigate }) {
  const mountRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [tooltipText, setTooltipText] = useState("Hi! I'm Doodle 🤖 Click me to explore!");

  useEffect(() => {
    if (minimized) return;

    const container = mountRef.current;
    if (!container) return;

    // 1. Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(100, 100);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup for Soft 3D Doodle Aesthetics
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x6366f1, 1.2);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x06b6d4, 1.5, 15);
    pointLight.position.set(-4, -2, 4);
    scene.add(pointLight);

    // 3. Doodle Character Root Group
    const doodleGroup = new THREE.Group();
    scene.add(doodleGroup);

    // Body/Head (Soft Curved Rounded Geometry)
    const headGeo = new THREE.SphereGeometry(1.6, 32, 32);
    headGeo.scale(1, 1.15, 0.9);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0x1e1b4b,
      roughness: 0.2,
      metalness: 0.1,
      emissive: 0x312e81,
      emissiveIntensity: 0.35,
    });
    const headMesh = new THREE.Mesh(headGeo, headMat);
    doodleGroup.add(headMesh);

    // Outer Neon Ring / Visor Halo
    const ringGeo = new THREE.TorusGeometry(1.95, 0.08, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    doodleGroup.add(ringMesh);

    // Eyes (Expressive Glowing Spheres)
    const eyeGeo = new THREE.SphereGeometry(0.28, 16, 16);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.55, 0.25, 1.35);
    doodleGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.55, 0.25, 1.35);
    doodleGroup.add(rightEye);

    // Antenna & Glowing Orb
    const antennaStemGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.7);
    const antennaStemMat = new THREE.MeshStandardMaterial({ color: 0x818cf8 });
    const antennaStem = new THREE.Mesh(antennaStemGeo, antennaStemMat);
    antennaStem.position.set(0, 1.9, 0);
    doodleGroup.add(antennaStem);

    const orbGeo = new THREE.SphereGeometry(0.22, 16, 16);
    const orbMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const orbMesh = new THREE.Mesh(orbGeo, orbMat);
    orbMesh.position.set(0, 2.3, 0);
    doodleGroup.add(orbMesh);

    // Mouse Tracking Interpolation
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Render & Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse tracking look-at
      targetX += (mouseX - targetX) * 0.08;
      targetY += (mouseY - targetY) * 0.08;

      // Gentle floating bobbing movement
      doodleGroup.position.y = Math.sin(elapsed * 2.2) * 0.15;
      doodleGroup.rotation.y = elapsed * 0.4 + targetX * 2;
      doodleGroup.rotation.x = Math.sin(elapsed * 1.5) * 0.08 + targetY * 1.5;

      ringMesh.rotation.z = elapsed * 0.8;

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
      headGeo.dispose();
      headMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      eyeGeo.dispose();
      eyeMat.dispose();
      antennaStemGeo.dispose();
      antennaStemMat.dispose();
      orbGeo.dispose();
      orbMat.dispose();
    };
  }, [minimized]);

  const handleNav = (route, label) => {
    if (onNavigate) onNavigate(route);
    setTooltipText(`Navigated to ${label}! ✨`);
    setMenuOpen(false);
  };

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 999,
          background: 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          color: '#a5b4fc',
          borderRadius: '30px',
          padding: '0.5rem 0.9rem',
          fontSize: '0.78rem',
          fontFamily: 'var(--font-mono)',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
        }}
        title="Open 3D Doodle Guide"
      >
        <Compass size={14} style={{ color: '#6366f1' }} />
        <span>3D Guide</span>
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.8rem',
        right: '1.8rem',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.8rem',
      }}
    >
      {/* 1. Interactive Explorer Navigation Drawer */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.92)',
            backdropFilter: 'blur(18px)',
            border: '1.5px solid rgba(99, 102, 241, 0.4)',
            boxShadow: '0 12px 36px rgba(15, 23, 42, 0.6)',
            borderRadius: '16px',
            padding: '1rem',
            width: '265px',
            color: '#f8fafc',
            animation: 'doodleSlideUp 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
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
              <Compass size={16} style={{ color: '#6366f1' }} />
              <div>
                <h4 style={{ fontSize: '0.9rem', margin: 0, fontWeight: 700 }}>
                  Doodle Explorer
                </h4>
                <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: 0 }}>
                  Explore Ujjwal's Archive
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
              className="doodle-nav-btn"
            >
              <Briefcase size={15} style={{ color: '#6366f1' }} />
              <span>Work Experience</span>
              <ChevronRight size={14} style={{ marginLeft: 'auto', color: '#64748b' }} />
            </button>

            <button
              onClick={() => handleNav('projects', 'Projects')}
              className="doodle-nav-btn"
            >
              <Cpu size={15} style={{ color: '#06b6d4' }} />
              <span>Verified Projects</span>
              <ChevronRight size={14} style={{ marginLeft: 'auto', color: '#64748b' }} />
            </button>

            <button
              onClick={() => handleNav('essays', 'Tech Essays')}
              className="doodle-nav-btn"
            >
              <FileText size={15} style={{ color: '#10b981' }} />
              <span>Tech Essays & RAG</span>
              <ChevronRight size={14} style={{ marginLeft: 'auto', color: '#64748b' }} />
            </button>

            <button
              onClick={() => handleNav('physics', 'Physics/Math')}
              className="doodle-nav-btn"
            >
              <Atom size={15} style={{ color: '#818cf8' }} />
              <span>Physics & Math Notes</span>
              <ChevronRight size={14} style={{ marginLeft: 'auto', color: '#64748b' }} />
            </button>

            <button
              onClick={() => handleNav('culture', 'Culture Reviews')}
              className="doodle-nav-btn"
            >
              <Sparkles size={15} style={{ color: '#f59e0b' }} />
              <span>Culture Reviews</span>
              <ChevronRight size={14} style={{ marginLeft: 'auto', color: '#64748b' }} />
            </button>
          </div>
        </div>
      )}

      {/* 2. Floating 3D Doodle Character + Speech Bubble Container */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        {/* Speech Bubble */}
        {!menuOpen && (
          <div
            onClick={() => setMenuOpen(true)}
            style={{
              background: 'rgba(15, 23, 42, 0.88)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              padding: '0.45rem 0.8rem',
              borderRadius: '12px',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              color: '#e2e8f0',
              boxShadow: '0 6px 18px rgba(0, 0, 0, 0.25)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              animation: 'doodleFloat 3s ease-in-out infinite',
            }}
          >
            {tooltipText}
          </div>
        )}

        {/* 3D Doodle WebGL Canvas Container */}
        <div
          onClick={() => setMenuOpen((prev) => !prev)}
          style={{
            position: 'relative',
            width: '68px',
            height: '68px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, #312e81, #0f172a)',
            border: '2px solid rgba(99, 102, 241, 0.5)',
            boxShadow: '0 8px 24px rgba(99, 102, 241, 0.35)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
          className="doodle-canvas-wrapper"
          title="Click 3D Doodle to navigate!"
        >
          <div ref={mountRef} style={{ width: '100px', height: '100px', pointerEvents: 'none' }} />

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
              background: '#334155',
              border: '1px solid #64748b',
              color: '#94a3b8',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              cursor: 'pointer',
              fontSize: '10px',
            }}
            title="Minimize Doodle Guide"
          >
            <X size={10} />
          </button>
        </div>
      </div>

      <style>{`
        .doodle-canvas-wrapper:hover {
          transform: scale(1.1) rotate(5deg);
          border-color: #6366f1;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.5);
        }

        .doodle-nav-btn {
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

        .doodle-nav-btn:hover {
          background: rgba(99, 102, 241, 0.15);
          border-color: rgba(99, 102, 241, 0.4);
          color: #ffffff;
          transform: translateX(4px);
        }

        @keyframes doodleSlideUp {
          from { opacity: 0; transform: translateY(10px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes doodleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}
