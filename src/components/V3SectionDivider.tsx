import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface V3SectionDividerProps {
  delay?: number;
}

export function V3SectionDivider({ delay = 0 }: V3SectionDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex items-center justify-center my-16 md:my-20"
    >
      <div className="flex items-center gap-4">
        {/* Left line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500 to-purple-500"
        />

        {/* Center decoration */}
        <div className="relative">
          {/* Outer glow ring */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg"
          />

          {/* Main circle */}
          <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/20 flex items-center justify-center overflow-hidden">
            {/* Rotating gradient background */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"
            />

            {/* Sparkle icon */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-blue-400 relative z-10" />
            </motion.div>

            {/* Orbiting dots */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full"
                animate={{
                  rotate: [0 + i * 120, 360 + i * 120],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.3,
                }}
                style={{
                  transformOrigin: '0px 0px',
                  transform: `translate(-50%, -50%) translateX(20px)`,
                  top: '50%',
                  left: '50%',
                }}
              />
            ))}
          </div>
        </div>

        {/* Right line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
          className="h-px bg-gradient-to-l from-transparent via-purple-500 to-pink-500"
        />
      </div>
    </motion.div>
  );
}
