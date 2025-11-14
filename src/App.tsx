import { useEffect } from 'react';
import { V3Header } from './components/V3Header';
import { PremiumHero } from './components/PremiumHero';
import { PremiumEducation } from './components/PremiumEducation';
import { AdvancedSkills } from './components/AdvancedSkills';
import { PremiumExperience } from './components/PremiumExperience';
import { PremiumTechStack } from './components/PremiumTechStack';
import { PremiumGitHub } from './components/PremiumGitHub';
import { PremiumCertifications } from './components/PremiumCertifications';
import { PremiumProjects } from './components/PremiumProjects';
import { PremiumCareerTimeline } from './components/PremiumCareerTimeline';
import { PremiumTestimonials } from './components/PremiumTestimonials';
import { V3Contact } from './components/V3Contact';
import { V3Footer } from './components/V3Footer';
import { AdvancedBackground } from './components/AdvancedBackground';
import { FloatingElements } from './components/FloatingElements';
import { ScrollProgress } from './components/ScrollProgress';
import { V3BackToTop } from './components/V3BackToTop';
import { V3SectionDivider } from './components/V3SectionDivider';
import { motion } from 'motion/react';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <div className="relative min-h-screen bg-slate-900 text-slate-100 overflow-x-hidden">
        <AdvancedBackground />
        <FloatingElements />
        <ScrollProgress />
        <V3BackToTop />
        
        <V3Header />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative px-4 md:px-8 pt-28 pb-8 max-w-7xl mx-auto"
        >
          <PremiumHero />
          <V3SectionDivider />
          <PremiumEducation />
          <V3SectionDivider />
          <AdvancedSkills />
          <V3SectionDivider />
          <PremiumExperience />
          <V3SectionDivider />
          <PremiumTechStack />
          <V3SectionDivider />
          <PremiumGitHub />
          <V3SectionDivider />
          <PremiumCertifications />
          <V3SectionDivider />
          <PremiumProjects />
          <V3SectionDivider />
          <PremiumCareerTimeline />
          <V3SectionDivider />
          <PremiumTestimonials />
          <V3SectionDivider />
          <V3Contact />
          <V3Footer />
        </motion.div>
      </div>
    </>
  );
}