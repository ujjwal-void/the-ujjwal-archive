import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, EyeOff, Sparkles } from 'lucide-react';

export default function ThreeBackgroundCanvas() {
  const mountRef = useRef(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (!enabled) return;

    const container = mountRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Central Floating 3D Geometry (Wireframe Torus Knot)
    const torusGeometry = new THREE.TorusKnotGeometry(6, 1.8, 120, 16);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1, // Indigo / Violet
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torusKnot);

    // 2. Secondary Outer Geometry (Icosahedron Halo)
    const haloGeometry = new THREE.IcosahedronGeometry(12, 1);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const haloMesh = new THREE.Mesh(haloGeometry, haloMaterial);
    scene.add(haloMesh);

    // 3. Particle Starfield / Constellation Field
    const particleCount = 220;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0x6366f1), // Indigo
      new THREE.Color(0x06b6d4), // Cyan
      new THREE.Color(0x10b981), // Emerald
      new THREE.Color(0xf59e0b), // Amber
    ];

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * 80;
      positions[idx + 1] = (Math.random() - 0.5) * 80;
      positions[idx + 2] = (Math.random() - 0.5) * 60;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[idx] = color.r;
      colors[idx + 1] = color.g;
      colors[idx + 2] = color.b;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colors, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.9,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // Mouse Interaction Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.0012;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.0012;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!renderer || !camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Mouse Rotation Interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate 3D Geometries
      torusKnot.rotation.x = elapsedTime * 0.15 + targetY * 2;
      torusKnot.rotation.y = elapsedTime * 0.2 + targetX * 2;

      haloMesh.rotation.x = -elapsedTime * 0.1 + targetY;
      haloMesh.rotation.y = -elapsedTime * 0.15 + targetX;

      particleSystem.rotation.y = elapsedTime * 0.03 + targetX * 0.5;
      particleSystem.rotation.x = targetY * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      haloGeometry.dispose();
      haloMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, [enabled]);

  return (
    <>
      {enabled && (
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
            opacity: 0.85,
          }}
        />
      )}

      {/* Subtle Floating 3D Toggle Widget */}
      <button
        onClick={() => setEnabled((prev) => !prev)}
        style={{
          position: 'fixed',
          bottom: '1.2rem',
          left: '1.2rem',
          zIndex: 99,
          background: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          color: enabled ? '#a5b4fc' : '#94a3b8',
          padding: '0.4rem 0.8rem',
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          cursor: 'pointer',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
          transition: 'all 0.2s ease',
        }}
        title="Toggle 3D Three.js Interactive Background"
      >
        <Sparkles size={13} style={{ color: enabled ? '#6366f1' : '#64748b' }} />
        {enabled ? '3D Active' : '3D Off'}
      </button>
    </>
  );
}
