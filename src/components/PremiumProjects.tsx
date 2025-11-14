import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket, Github, ExternalLink, Star, GitFork, Eye, Calendar, Code, Zap, FolderGit2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { SectionContainer } from './SectionContainer';

export function PremiumProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'Smart Background Studio',
      description:
        'A beginner-friendly AI desktop app that removes and replaces image and video backgrounds using deep learning. No green screen. No complex editing. Just Python + AI.',
      url: 'https://github.com/subinsamu28/smart-background-studio',
      tags: ['Python', '3.10+', 'GUI', 'Tkinter', 'AI', 'U²-Net', 'Cross-platform'],
      gradient: 'from-blue-500 to-cyan-500',
      stats: { stars: 24, forks: 8, watchers: 12 },
    },
    {
      title: 'AI Scam Detector – Job Offer Analyzer',
      description:
        'Multi-layered AI pipeline that analyzes job offers and catches scams in real-time using advanced NLP and machine learning techniques.',
      url: 'https://github.com/subinsamu28/AI-Scam-Detector-Job-Offer-Analyzer-',
      tags: ['Python', '3.10', 'AI/ML', 'Security', 'NLP'],
      gradient: 'from-purple-500 to-pink-500',
      stats: { stars: 18, forks: 5, watchers: 9 },
    },
  ];

  return (
    <SectionContainer id="projects">
      <SectionHeading icon={Rocket} title="Featured Projects" />

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="group relative"
          >
            {/* Card */}
            <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/30 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-white/40 transition-all duration-500 overflow-hidden h-full flex flex-col shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              {/* Gradient overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }} />
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 rounded-2xl bg-gradient-to-r ${project.gradient}`}
                  >
                    <FolderGit2 size={24} className="text-white" />
                  </motion.div>
                  
                  <div className="flex gap-2">
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
                    >
                      <Github size={20} className="text-slate-300" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
                    >
                      <ExternalLink size={20} className="text-slate-300" />
                    </motion.a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-slate-100 text-xl mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex gap-4 mb-6">
                  {[
                    { icon: Star, value: project.stats.stars, label: 'Stars' },
                    { icon: GitFork, value: project.stats.forks, label: 'Forks' },
                    { icon: Eye, value: project.stats.watchers, label: 'Watchers' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-1 text-slate-400"
                    >
                      <stat.icon size={14} />
                      <span className="text-xs">{stat.value}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-slate-300 text-xs rounded-full border border-white/10 backdrop-blur-sm`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Animated corner decoration */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute top-4 right-4 w-20 h-20 pointer-events-none"
                  >
                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${project.gradient} opacity-20 blur-2xl`} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}