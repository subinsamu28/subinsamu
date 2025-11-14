import { motion } from 'motion/react';
import { Heart, Mail, Phone, Linkedin, Instagram, Github, ArrowUp, Sparkles } from 'lucide-react';

export function V3Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { href: 'mailto:subinsamu28@gmail.com', icon: Mail, label: 'Email', color: 'hover:text-red-400' },
    { href: 'tel:+4916094936808', icon: Phone, label: 'Call', color: 'hover:text-green-400' },
    { href: 'https://www.linkedin.com/in/subin-samu', icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
    { href: 'https://www.instagram.com/subin_samu', icon: Instagram, label: 'Instagram', color: 'hover:text-pink-400' },
    { href: 'https://github.com/subinsamu28', icon: Github, label: 'Github', color: 'hover:text-slate-300' },
  ];

  const quickLinks = [
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#projects', label: 'Projects' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Decorative top border with animated gradient */}
      <div className="relative h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-12">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent blur-3xl" />

        <div className="relative grid md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-blue-400" />
              </motion.div>
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 m-0">
                Subin Samu
              </h3>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Cyber Forensics graduate & MSc Computer Science student passionate about ethical hacking, 
              digital investigations, and building secure digital ecosystems.
            </p>
            <div className="flex items-center gap-2 text-slate-500">
              <span>© {currentYear}</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>Built with Creativity</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white mb-4">Connect With Me</h3>
            <div className="space-y-3 mb-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-3 text-slate-400 ${link.color} transition-colors duration-300 group`}
                >
                  <div className="p-2 bg-white/5 group-hover:bg-white/10 rounded-lg transition-colors">
                    <link.icon className="w-4 h-4" />
                  </div>
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
            >
              <ArrowUp className="w-5 h-5" />
              <span>Back to Top</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
            <p className="flex items-center gap-2">
              Designed & Developed with
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              by Subin Samu
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:subinsamu28@gmail.com"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Get in touch
              </a>
            </div>
          </div>
        </motion.div>

        {/* Decorative floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              animate={{
                y: ['100%', '-20%'],
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
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
      </div>
    </footer>
  );
}
