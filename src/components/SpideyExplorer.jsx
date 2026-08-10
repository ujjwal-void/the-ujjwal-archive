import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Briefcase, Cpu, FileText, Sparkles, X, ChevronRight } from 'lucide-react';

export default function SpideyExplorer({ onNavigate }) {
  const mountRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [webShooterActive, setWebShooterActive] = useState(true);

  // 3D Web Strand & Constellation Field Setup using Three.js
  useEffect(() => {
    if (!webShooterActive) return;

    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Geometric Spider-Web Network (Minimalist Line Segments)
    const webNodeCount = 45;
    const positions = new Float32Array(webNodeCount * 3);

    for (let i = 0; i < webNodeCount; i++) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * 70;
      positions[idx + 1] = (Math.random() - 0.5) * 70;
      positions[idx + 2] = (Math.random() - 0.5) * 40;
    }

    const webGeometry = new THREE.BufferGeometry();
    webGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const webMaterial = new THREE.PointsMaterial({
      color: 0xef4444, // Spider-Red Glow
      size: 1.2,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    const webPoints = new THREE.Points(webGeometry, webMaterial);
    scene.add(webPoints);

    // 2. Interactive Dynamic Web Lines connecting nearby nodes
    const maxConnections = 60;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8, // Web-Cyan
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });

    const webLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(webLines);

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

    const handleResize = () => {
      if (!renderer || !camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      webPoints.rotation.y = elapsedTime * 0.04 + targetX * 1.5;
      webPoints.rotation.x = elapsedTime * 0.02 + targetY * 1.5;

      // Dynamically update web line connection geometry
      const posArr = webGeometry.attributes.position.array;
      let lineIdx = 0;

      for (let i = 0; i < webNodeCount && lineIdx < maxConnections * 6; i++) {
        for (let j = i + 1; j < webNodeCount && lineIdx < maxConnections * 6; j++) {
          const dx = posArr[i * 3] - posArr[j * 3];
          const dy = posArr[i * 3 + 1] - posArr[j * 3 + 1];
          const dz = posArr[i * 3 + 2] - posArr[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 18) {
            linePositions[lineIdx++] = posArr[i * 3];
            linePositions[lineIdx++] = posArr[i * 3 + 1];
            linePositions[lineIdx++] = posArr[i * 3 + 2];

            linePositions[lineIdx++] = posArr[j * 3];
            linePositions[lineIdx++] = posArr[j * 3 + 1];
            linePositions[lineIdx++] = posArr[j * 3 + 2];
          }
        }
      }

      lineGeometry.attributes.position.needsUpdate = true;
      webLines.rotation.y = webPoints.rotation.y;
      webLines.rotation.x = webPoints.rotation.x;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      webGeometry.dispose();
      webMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
    };
  }, [webShooterActive]);

  const quickNav = (route) => {
    if (onNavigate) onNavigate(route);
    setExpanded(false);
  };

  return (
    <>
      {/* 3D Web Canvas Background */}
      {webShooterActive && (
        <div
          ref={mountRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden',
          }}
        />
      )}

      {/* Floating Minimalist Spidey Companion Explorer Widget */}
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
        {/* Expanded Navigation Drawer */}
        {expanded && (
          <div
            className="spidey-menu"
            style={{
              background: 'rgba(15, 23, 42, 0.88)',
              backdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(239, 68, 68, 0.4)',
              boxShadow: '0 12px 32px rgba(239, 68, 68, 0.25)',
              borderRadius: '16px',
              padding: '1rem',
              width: '260px',
              color: '#f8fafc',
              animation: 'fadeInUp 0.25s ease-out',
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
                <span style={{ fontSize: '1.2rem' }}>🕷️</span>
                <div>
                  <h4 style={{ fontSize: '0.92rem', margin: 0, fontWeight: 700 }}>
                    Spidey Guide
                  </h4>
                  <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: 0 }}>
                    Quick Swing Navigation
                  </p>
                </div>
              </div>
              <button
                onClick={() => setExpanded(false)}
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
                onClick={() => quickNav('experience')}
                className="spidey-nav-btn"
              >
                <Briefcase size={15} style={{ color: '#ef4444' }} />
                <span>Swing to Experience</span>
                <ChevronRight size={14} style={{ marginLeft: 'auto', color: '#64748b' }} />
              </button>

              <button
                onClick={() => quickNav('projects')}
                className="spidey-nav-btn"
              >
                <Cpu size={15} style={{ color: '#38bdf8' }} />
                <span>Swing to Projects</span>
                <ChevronRight size={14} style={{ marginLeft: 'auto', color: '#64748b' }} />
              </button>

              <button
                onClick={() => quickNav('essays')}
                className="spidey-nav-btn"
              >
                <FileText size={15} style={{ color: '#10b981' }} />
                <span>Tech Essays & RAG</span>
                <ChevronRight size={14} style={{ marginLeft: 'auto', color: '#64748b' }} />
              </button>

              <button
                onClick={() => quickNav('culture')}
                className="spidey-nav-btn"
              >
                <Sparkles size={15} style={{ color: '#f59e0b' }} />
                <span>Culture Reviews</span>
                <ChevronRight size={14} style={{ marginLeft: 'auto', color: '#64748b' }} />
              </button>
            </div>
          </div>
        )}

        {/* Floating Spidey Avatar Button */}
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="spidey-avatar-btn"
          title="Spidey Guide — Explore Archive"
        >
          <img
            src="./media/spiderman.png"
            alt="Spidey Guide"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <span className="spidey-pulse-ring"></span>
        </button>
      </div>

      <style>{`
        .spidey-avatar-btn {
          position: relative;
          background: rgba(15, 23, 42, 0.9);
          border: 2px solid rgba(239, 68, 68, 0.6);
          border-radius: 50%;
          padding: 3px;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(239, 68, 68, 0.35);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spidey-avatar-btn:hover {
          transform: scale(1.12) rotate(5deg);
          box-shadow: 0 8px 28px rgba(239, 68, 68, 0.55);
          border-color: #ef4444;
        }

        .spidey-pulse-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid rgba(239, 68, 68, 0.4);
          animation: spideyPulse 2s infinite;
          pointer-events: none;
        }

        @keyframes spideyPulse {
          0% { transform: scale(1); opacity: 0.8; }
          70% { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }

        .spidey-nav-btn {
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

        .spidey-nav-btn:hover {
          background: rgba(239, 68, 68, 0.15);
          border-color: rgba(239, 68, 68, 0.4);
          color: #ffffff;
          transform: translateX(4px);
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
}
