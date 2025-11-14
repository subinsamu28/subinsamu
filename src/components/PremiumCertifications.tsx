import { motion } from 'motion/react';
import { Award, Shield, BookOpen, ExternalLink, Calendar, Trophy, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { SectionContainer } from './SectionContainer';

export function PremiumCertifications() {
  const certifications = [
    {
      title: 'Cybersecurity Fundamentals',
      provider: 'IBM SkillsBuild',
      url: 'https://www.credly.com/badges/2b067e5d-6338-4a88-8eaf-d779aef7e630/print',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'White Hat Hacker',
      provider: 'Eduonix',
      url: 'https://www.eduonix.com/certificate/6858cab048',
      icon: BookOpen,
      color: 'from-emerald-500 to-green-500',
      bgGradient: 'from-emerald-500/20 to-green-500/20',
    },
    {
      title: 'Cloud Identity',
      provider: 'Google Cloud',
      url: 'https://www.coursera.org/account/accomplishments/verify/WMZBSMJCND7A',
      icon: Shield,
      color: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-500/20 to-orange-500/20',
    },
    {
      title: 'Ethical Hacking',
      provider: 'Great Learning',
      url: 'https://verify.mygreatlearning.com/verify/KXGXDCCW',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      bgGradient: 'from-red-500/20 to-pink-500/20',
    },
    {
      title: 'HTML & CSS',
      provider: 'Udemy',
      url: 'https://www.udemy.com/certificate/UC-912f85d4-69be-4193-8c75-b4110a907130/',
      icon: BookOpen,
      color: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-500/20 to-indigo-500/20',
    },
    {
      title: 'C Programming',
      provider: 'Udemy',
      url: 'https://www.udemy.com/certificate/UC-94ce38b4-3a32-4036-ab66-186ddb92cbbd/',
      icon: BookOpen,
      color: 'from-slate-500 to-gray-500',
      bgGradient: 'from-slate-500/20 to-gray-500/20',
    },
    {
      title: 'Code Yourself! An Introduction to Programming',
      provider: 'Edinburgh & ORT',
      url: 'https://www.coursera.org/account/accomplishments/verify/2ZQH82EULZQ5',
      icon: BookOpen,
      color: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-500/20 to-purple-500/20',
    },
  ];

  return (
    <SectionContainer id="certifications">
      <SectionHeading icon={Award} title="Certifications & Achievements" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/30 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{
                    background: [
                      'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                    ],
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`p-4 rounded-2xl bg-gradient-to-r ${cert.color}`}
                    >
                      <Icon size={32} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-slate-100 text-center mb-2 min-h-[3rem] flex items-center justify-center">
                    {cert.title}
                  </h3>

                  {/* Provider */}
                  <p className="text-slate-400 text-sm text-center mb-4">
                    {cert.provider}
                  </p>

                  {/* Verify Button */}
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r ${cert.color} text-white rounded-xl hover:shadow-2xl transition-all duration-300 group/btn`}
                  >
                    <span>Verify</span>
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Floating particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${cert.color}`}
                    animate={{
                      y: ['100%', '-100%'],
                      x: [
                        `${20 + i * 30}%`,
                        `${30 + i * 30}%`,
                        `${20 + i * 30}%`,
                      ],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}