import { motion } from 'motion/react';
import { ReactNode, useState } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function SectionContainer({ children, id, className = '' }: SectionContainerProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id={id} className={`mb-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Cursor-following spotlight effect */}
        {isHovered && (
          <motion.div
            className="absolute rounded-full pointer-events-none z-10"
            style={{
              width: '600px',
              height: '600px',
              left: mousePosition.x,
              top: mousePosition.y,
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 25%, transparent 70%)',
              filter: 'blur(20px)',
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Static subtle border */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl" />

        {/* Main container - Updated darker background */}
        <div className="relative backdrop-blur-xl bg-slate-800/85 border border-slate-700/80 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700/40 via-transparent to-slate-900/40 pointer-events-none" />
          
          {/* Mesh pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </motion.div>
    </section>
  );
}