import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Terminal, Shield, Database, Wrench, Zap, Coffee, Cog, FileCode, Server, GitBranch, Lock, Bug, Search, AlertTriangle, ShieldAlert, Laptop } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { SectionContainer } from './SectionContainer';

export function AdvancedSkills() {
  const [activeCategory, setActiveCategory] = useState('languages');

  const skillCategories = {
    languages: {
      icon: Code2,
      title: 'Languages',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 90, icon: Code2 },
        { name: 'JavaScript', level: 85, icon: Zap },
        { name: 'C++', level: 80, icon: Cog },
        { name: 'Java', level: 75, icon: Coffee },
        { name: 'Rust', level: 70, icon: Wrench },
        { name: 'SQL', level: 85, icon: Database },
      ],
    },
    frameworks: {
      icon: Terminal,
      title: 'Frameworks & Tools',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Django', level: 85, icon: FileCode },
        { name: 'Node.js', level: 80, icon: Server },
        { name: 'React', level: 75, icon: Code2 },
        { name: 'MS SQL Server', level: 80, icon: Database },
        { name: 'Git', level: 90, icon: GitBranch },
      ],
    },
    security: {
      icon: Shield,
      title: 'Security & Forensics',
      color: 'from-red-500 to-orange-500',
      skills: [
        { name: 'Penetration Testing', level: 85, icon: Lock },
        { name: 'Malware Analysis', level: 80, icon: Bug },
        { name: 'Network Forensics', level: 85, icon: Search },
        { name: 'Incident Response', level: 80, icon: AlertTriangle },
        { name: 'Vulnerability Assessment', level: 85, icon: ShieldAlert },
        { name: 'Digital Forensics', level: 90, icon: Laptop },
      ],
    },
  };

  const currentCategory = skillCategories[activeCategory as keyof typeof skillCategories];
  const CategoryIcon = currentCategory.icon;

  return (
    <SectionContainer id="skills">
      <SectionHeading icon={Wrench} title="Technical Excellence" />

      {/* Category selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(skillCategories).map(([key, category]) => {
          const Icon = category.icon;
          return (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-3 rounded-2xl transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-2xl'
                  : 'bg-white/5 text-slate-300 border border-white/10 hover:border-white/30'
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon size={20} />
                <span className="font-medium">{category.title}</span>
              </div>
              {activeCategory === key && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r rounded-2xl -z-10"
                  style={{
                    background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Skills Display */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, rotateX: 10 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl"
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
            }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className={`p-3 rounded-2xl bg-gradient-to-r ${currentCategory.color}`}>
                <CategoryIcon size={28} className="text-white" />
              </div>
              <h3 className="text-white text-2xl">{currentCategory.title}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {currentCategory.skills.map((skill, index) => {
                const SkillIcon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <SkillIcon size={20} className="text-blue-400" />
                        <span className="text-slate-200 font-medium">{skill.name}</span>
                      </div>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="text-blue-400 font-semibold"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          delay: index * 0.1 + 0.2,
                          duration: 1,
                          ease: 'easeOut',
                        }}
                        className={`h-full bg-gradient-to-r ${currentCategory.color} relative`}
                      >
                        <motion.div
                          animate={{
                            x: [0, 10, 0],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  initial={{
                    x: Math.random() * 100 + '%',
                    y: '100%',
                    opacity: 0,
                  }}
                  animate={{
                    y: '-10%',
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: 'linear',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid md:grid-cols-3 gap-6 mt-8"
      >
        {[
          { icon: Zap, label: 'Years Experience', value: '4+', color: 'from-yellow-500 to-orange-500' },
          { icon: Database, label: 'Projects Completed', value: '25+', color: 'from-green-500 to-emerald-500' },
          { icon: Shield, label: 'Security Audits', value: '15+', color: 'from-red-500 to-pink-500' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all"
          >
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-3`}>
              <stat.icon size={24} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-slate-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}