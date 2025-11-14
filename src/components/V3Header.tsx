import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Zap, Briefcase, Award, Rocket, Calendar, MessageSquare, Mail } from 'lucide-react';

export function V3Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 120;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false);
    }
  };

  const navLinks = [
    { href: '#education', label: 'Education', icon: GraduationCap },
    { href: '#skills', label: 'Skills', icon: Zap },
    { href: '#experience', label: 'Experience', icon: Briefcase },
    { href: '#certifications', label: 'Certifications', icon: Award },
    { href: '#projects', label: 'Projects', icon: Rocket },
    { href: '#timeline', label: 'Timeline', icon: Calendar },
    { href: '#testimonials', label: 'Testimonials', icon: MessageSquare },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="fixed top-4 left-4 right-4 z-[9999] mx-auto max-w-7xl pointer-events-none">
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="relative backdrop-blur-2xl bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] pointer-events-auto">
        <div className="relative flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => { 
              e.preventDefault(); 
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
            }} 
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 m-0">
              Subin Samu
            </h2>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative px-4 py-2.5 text-slate-300 hover:text-white hover:bg-blue-500/20 transition-all duration-200 rounded-lg flex items-center gap-2 hover:scale-105"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden xl:inline">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 transition-all rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden border-t border-white/10">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer"
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}