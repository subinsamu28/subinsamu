import { motion } from 'motion/react';
import { Code2, Shield, Database, Zap, Lock, Terminal, Cpu, Cloud } from 'lucide-react';

export function FloatingElements() {
  const icons = [
    { Icon: Code2, delay: 0, x: '10%', duration: 20 },
    { Icon: Shield, delay: 2, x: '80%', duration: 25 },
    { Icon: Database, delay: 4, x: '20%', duration: 22 },
    { Icon: Zap, delay: 1, x: '70%', duration: 18 },
    { Icon: Lock, delay: 3, x: '50%', duration: 24 },
    { Icon: Terminal, delay: 5, x: '30%', duration: 21 },
    { Icon: Cpu, delay: 1.5, x: '60%', duration: 23 },
    { Icon: Cloud, delay: 3.5, x: '40%', duration: 19 },
  ];

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {icons.map(({ Icon, delay, x, duration }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x }}
          initial={{ y: '110%', opacity: 0, rotate: 0 }}
          animate={{
            y: ['-10%', '-110%'],
            opacity: [0, 0.15, 0.15, 0],
            rotate: [0, 360],
            x: [0, Math.sin(index) * 50, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: 'linear',
          }}
        >
          <Icon size={32} className="text-blue-400" />
        </motion.div>
      ))}

      {/* Floating geometric shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        >
          <div className="w-16 h-16 border-2 border-blue-500/20 rounded-lg backdrop-blur-sm" />
        </motion.div>
      ))}

      {/* Floating circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute"
          style={{
            left: `${10 + i * 12}%`,
            top: `${50 + (i % 3) * 15}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.8,
          }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm" />
        </motion.div>
      ))}

      {/* Diagonal lines */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute"
          style={{
            left: `${i * 25}%`,
            top: 0,
            width: '2px',
            height: '100%',
            background: 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.1), transparent)',
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
