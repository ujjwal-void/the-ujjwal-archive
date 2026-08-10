import React, { useEffect, useRef } from 'react';

export default function CyberBackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse Spotlight Position
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Grid Nodes
    const gridSize = 48;
    const dots = [];

    for (let x = 0; x < width; x += gridSize) {
      for (let y = 0; y < height; y += gridSize) {
        if (Math.random() > 0.65) {
          dots.push({
            x,
            y,
            baseAlpha: Math.random() * 0.25 + 0.05,
            alpha: 0.1,
            pulseSpeed: Math.random() * 0.02 + 0.005,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    }

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Subtle Tech Grid Lines
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.04)';
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // 2. Draw Interactive Mouse Radial Spotlight
      const gradient = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        380
      );
      gradient.addColorStop(0, 'rgba(99, 102, 241, 0.12)');
      gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.04)');
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 3. Draw Pulsing Grid Nodes
      dots.forEach((dot) => {
        const dist = Math.hypot(dot.x - mouseX, dot.y - mouseY);
        const mouseGlow = Math.max(0, 1 - dist / 220);

        dot.alpha =
          dot.baseAlpha + Math.sin(time * 2 + dot.phase) * 0.08 + mouseGlow * 0.4;

        ctx.fillStyle = mouseGlow > 0.2 ? 'rgba(56, 189, 248, ' + dot.alpha + ')' : 'rgba(99, 102, 241, ' + dot.alpha + ')';
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.5 + mouseGlow * 1.2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85,
      }}
    />
  );
}
