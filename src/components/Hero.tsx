import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Instagram, Github } from 'lucide-react';

export function Hero() {
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
    { href: 'mailto:subinsamu28@gmail.com', icon: Mail, label: 'Email' },
    { href: 'tel:+4916094936808', icon: Phone, label: 'Call' },
    { href: 'https://www.linkedin.com/in/subin-samu', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.instagram.com/subin_samu', icon: Instagram, label: 'Instagram' },
    { href: 'https://github.com/subinsamu28', icon: Github, label: 'Github' },
  ];

  return (
    <section className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-purple-400 bg-clip-text text-transparent min-h-[4rem] flex items-center justify-center">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto mb-12"
      >
        <p className="text-slate-300 bg-white/5 border border-blue-400/30 rounded-2xl p-6 shadow-xl shadow-blue-500/10 hover:scale-[1.02] transition-transform duration-300">
          Driven Cyber Forensics graduate and current MSc Applied Computer Science student at DIT, with hands-on experience in ethical hacking, digital investigations, and advanced threat analysis. Passionate about building innovative and secure digital ecosystems.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl text-white shadow-lg shadow-indigo-600/30 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            <link.icon size={20} />
            {link.label}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
