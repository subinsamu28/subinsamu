import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Linkedin, Instagram, Github, Sparkles, ArrowRight } from 'lucide-react';

export function PremiumHero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'SUBIN SAMU | Ethical Hacker',
    'SUBIN SAMU | Cyber Forensics Specialist',
    'SUBIN SAMU | Software Developer',
    'SUBIN SAMU | Tech Enthusiast',
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
          if (displayText === currentText) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentText.substring(0, displayText.length - 1));
          if (displayText === '') {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 25 : 50
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  const socialLinks = [
    { href: 'mailto:subinsamu28@gmail.com', icon: Mail, label: 'Email', gradient: 'from-red-500 to-orange-500' },
    { href: 'tel:+4916094936808', icon: Phone, label: 'Call', gradient: 'from-green-500 to-emerald-500' },
    { href: 'https://www.linkedin.com/in/subin-samu', icon: Linkedin, label: 'LinkedIn', gradient: 'from-blue-500 to-cyan-500' },
    { href: 'https://www.instagram.com/subin_samu', icon: Instagram, label: 'Instagram', gradient: 'from-purple-500 to-pink-500' },
    { href: 'https://github.com/subinsamu28', icon: Github, label: 'Github', gradient: 'from-slate-600 to-slate-800' },
  ];

  return (
    <section className="text-center mb-20 relative">
      {/* Floating particles in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            animate={{
              y: ['100%', '-20%'],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
            }}
          />
        ))}
      </div>

      {/* Animated sparkles */}
      <motion.div
        className="absolute top-0 left-1/4 md:left-1/3"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Sparkles className="text-yellow-400 w-6 h-6 opacity-70" />
      </motion.div>
      <motion.div
        className="absolute top-4 right-1/4 md:right-1/3"
        animate={{
          y: [0, -15, 0],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      >
        <Sparkles className="text-blue-400 w-5 h-5 opacity-70" />
      </motion.div>

      {/* Animated title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 relative z-10"
      >
        <h1 
          className="text-5xl md:text-7xl mb-6 min-h-[4rem] md:min-h-[6rem] flex items-center justify-center"
          style={{
            color: 'white',
            textShadow: '0 0 60px rgba(59, 130, 246, 0.8), 0 0 30px rgba(147, 51, 234, 0.6), 2px 2px 8px rgba(0,0,0,0.8)',
            fontWeight: '800',
          }}
        >
          {displayText}
          <motion.span 
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            style={{ 
              color: 'rgba(96, 165, 250, 1)',
              textShadow: '0 0 20px rgba(96, 165, 250, 1)'
            }}
          >
            |
          </motion.span>
        </h1>
      </motion.div>

      {/* Description card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-12 group"
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-3xl" />
          
          {/* Card */}
          <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/30 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-white/40 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            {/* Corner accents */}
            <motion.div
              className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-400 rounded-tl-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-400 rounded-br-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            
            <p className="text-slate-300 leading-relaxed relative z-10">
              Driven Cyber Forensics graduate and current MSc Applied Computer Science student at DIT, with hands-on experience in ethical hacking, digital investigations, and advanced threat analysis. Passionate about building innovative and secure digital ecosystems.
            </p>

            {/* Animated line */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            {/* Button glow */}
            <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 rounded-2xl`} />
            
            {/* Button */}
            <div className={`relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${link.gradient} rounded-2xl text-white shadow-lg overflow-hidden`}>
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                }}
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              
              <link.icon size={20} className="relative z-10" />
              <span className="relative z-10">{link.label}</span>
              
              {/* Arrow on hover */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="relative z-10"
              >
                <ArrowRight size={16} />
              </motion.div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-16 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-sm">Explore More</span>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-slate-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}