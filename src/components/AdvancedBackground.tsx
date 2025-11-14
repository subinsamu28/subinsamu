import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
}

export function AdvancedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Add 5-8 new particles at click position in a circular pattern
      const newParticleCount = 5 + Math.floor(Math.random() * 4); // 5-8 particles
      for (let i = 0; i < newParticleCount; i++) {
        const angle = (Math.PI * 2 * i) / newParticleCount;
        const speed = 0.3 + Math.random() * 0.5;
        const offset = 10 + Math.random() * 20; // Small initial offset from click
        
        particlesRef.current.push({
          x: e.clientX + Math.cos(angle) * offset,
          y: e.clientY + Math.sin(angle) * offset,
          baseX: e.clientX + Math.cos(angle) * offset,
          baseY: e.clientY + Math.sin(angle) * offset,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log('Canvas not found');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.log('Context not found');
      return;
    }

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log('Canvas size set to:', canvas.width, canvas.height);
    };

    setCanvasSize();

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = 80;
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          baseX: 0,
          baseY: 0,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
        // Set base positions
        particlesRef.current[i].baseX = particlesRef.current[i].x;
        particlesRef.current[i].baseY = particlesRef.current[i].y;
      }
      console.log('Particles initialized:', particlesRef.current.length);
    };

    initParticles();

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update base position
        particle.baseX += particle.vx;
        particle.baseY += particle.vy;

        // Bounce off edges
        if (particle.baseX < 0 || particle.baseX > canvas.width) particle.vx *= -1;
        if (particle.baseY < 0 || particle.baseY > canvas.height) particle.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - particle.baseX;
        const dy = mouse.y - particle.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 120;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          particle.x = particle.baseX - Math.cos(angle) * force * 40;
          particle.y = particle.baseY - Math.sin(angle) * force * 40;
        } else {
          particle.x += (particle.baseX - particle.x) * 0.1;
          particle.y += (particle.baseY - particle.y) * 0.1;
        }

        // Draw particle
        ctx.fillStyle = 'rgba(96, 165, 250, 0.8)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw connecting lines
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - dist / 120) * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Draw line to mouse
        if (distance < 150) {
          ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - distance / 150) * 0.5})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Canvas for particles - Allow click events */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full"
        style={{ 
          zIndex: 1,
          mixBlendMode: 'screen',
          pointerEvents: 'none',
          cursor: 'default'
        }}
      />

      {/* Background layers - REDUCED INTENSITY */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Animated gradient blobs */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(at 20% 30%, rgba(59, 130, 246, 0.06) 0px, transparent 50%)',
              'radial-gradient(at 30% 20%, rgba(139, 92, 246, 0.06) 0px, transparent 50%)',
              'radial-gradient(at 20% 30%, rgba(59, 130, 246, 0.06) 0px, transparent 50%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 w-full h-full"
        />
        <motion.div
          animate={{
            background: [
              'radial-gradient(at 80% 20%, rgba(168, 85, 247, 0.06) 0px, transparent 50%)',
              'radial-gradient(at 70% 30%, rgba(236, 72, 153, 0.06) 0px, transparent 50%)',
              'radial-gradient(at 80% 20%, rgba(168, 85, 247, 0.06) 0px, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-full h-full"
        />
        <motion.div
          animate={{
            background: [
              'radial-gradient(at 50% 80%, rgba(59, 130, 246, 0.04) 0px, transparent 50%)',
              'radial-gradient(at 50% 70%, rgba(139, 92, 246, 0.04) 0px, transparent 50%)',
              'radial-gradient(at 50% 80%, rgba(59, 130, 246, 0.04) 0px, transparent 50%)',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full"
        />
      </div>

      {/* Grid pattern */}
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-[0.01]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Cursor glow effect - REDUCED */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none -z-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 70%)',
        }}
        animate={{
          x: mousePos.x - 192,
          y: mousePos.y - 192,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 150 }}
      />

      {/* Radial gradient vignette - REDUCED */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-radial from-transparent via-slate-900/10 to-slate-900/40" />
    </>
  );
}