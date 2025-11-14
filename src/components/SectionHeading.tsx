import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface SectionHeadingProps {
  icon: LucideIcon;
  title: string;
  centered?: boolean;
}

export function SectionHeading({ icon: Icon, title, centered = false }: SectionHeadingProps) {
  if (!centered) {
    // Left-aligned layout for sections in containers
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-10"
      >
        {/* Icon Container */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            delay: 0.1 
          }}
          whileHover={{ 
            scale: 1.05, 
            rotate: 5,
            transition: { duration: 0.3 }
          }}
          className="relative flex-shrink-0"
        >
          {/* Rotating gradient glow */}
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-60 blur-lg"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Icon background */}
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl flex items-center justify-center border border-white/10">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" strokeWidth={2.5} />
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="m-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-purple-200 tracking-tight"
        >
          {title}
        </motion.h2>
      </motion.div>
    );
  }

  // Original centered layout (for hero or special sections)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className="flex flex-col items-center justify-center mb-16 relative"
    >
      {/* Top decorative line with glow */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-32 h-1 mb-6 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </motion.div>

      {/* Main heading container */}
      <div className="relative group">
        {/* Pulsing glow background */}
        <motion.div
          className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Icon and Title container */}
        <div className="relative flex items-center gap-6">
          {/* Left decorative element */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "auto", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:flex items-center gap-2"
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent" />
          </motion.div>

          {/* Premium Icon Container */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              delay: 0.1 
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              transition: { duration: 0.3 }
            }}
            className="relative"
          >
            {/* Rotating gradient border */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 blur-lg"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Icon background with shimmer */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent rounded-2xl"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut"
                }}
              />
              
              {/* Icon */}
              <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl border border-white/10">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Icon className="w-10 h-10 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" strokeWidth={2.5} />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Title with gradient and animations */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative m-0 tracking-tight"
          >
            {/* Main text with gradient */}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-50 via-blue-200 to-slate-50 drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]">
              {title}
            </span>
            
            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 mt-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent origin-center rounded-full"
            />
          </motion.h2>

          {/* Right decorative element */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "auto", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:flex items-center gap-2"
          >
            <div className="w-16 h-[2px] bg-gradient-to-l from-purple-500/50 to-transparent" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-l from-purple-500 to-pink-500" />
          </motion.div>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
            style={{
              left: `${20 + i * 15}%`,
              top: '50%',
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Bottom decorative line with glow */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-32 h-1 mt-6 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
      </motion.div>
    </motion.div>
  );
}
