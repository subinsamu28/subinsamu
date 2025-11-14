import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Code, Database, Shield, Cloud, Cpu, Zap, Network, Sword, Flame, Map, HardDrive, Search, Lock, FileText, GitBranch, Container, Send, FileCode, Wrench, Palette, Server, Circle, Settings, BarChart, Eye, Brain } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { SectionContainer } from './SectionContainer';

export function PremiumTechStack() {
  const [activeTab, setActiveTab] = useState('security');

  const techStacks = {
    security: {
      title: 'Security & Forensics',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      tools: [
        { name: 'Wireshark', icon: Network, category: 'Network Analysis' },
        { name: 'Metasploit', icon: Sword, category: 'Penetration Testing' },
        { name: 'Burp Suite', icon: Flame, category: 'Web Security' },
        { name: 'Nmap', icon: Map, category: 'Network Scanner' },
        { name: 'Volatility', icon: HardDrive, category: 'Memory Forensics' },
        { name: 'Autopsy', icon: Search, category: 'Digital Forensics' },
        { name: 'John the Ripper', icon: Lock, category: 'Password Cracking' },
        { name: 'OWASP ZAP', icon: Zap, category: 'Web Security' },
      ],
    },
    development: {
      title: 'Development Tools',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      tools: [
        { name: 'VS Code', icon: FileText, category: 'Editor' },
        { name: 'Git', icon: GitBranch, category: 'Version Control' },
        { name: 'Docker', icon: Container, category: 'Containerization' },
        { name: 'Postman', icon: Send, category: 'API Testing' },
        { name: 'PyCharm', icon: FileCode, category: 'IDE' },
        { name: 'Jupyter', icon: FileText, category: 'Data Science' },
        { name: 'Chrome DevTools', icon: Wrench, category: 'Debugging' },
        { name: 'Figma', icon: Palette, category: 'Design' },
      ],
    },
    databases: {
      title: 'Databases & Cloud',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      tools: [
        { name: 'PostgreSQL', icon: Database, category: 'Relational DB' },
        { name: 'MongoDB', icon: Server, category: 'NoSQL' },
        { name: 'Redis', icon: Zap, category: 'Cache' },
        { name: 'MySQL', icon: Database, category: 'Relational DB' },
        { name: 'AWS', icon: Cloud, category: 'Cloud Platform' },
        { name: 'Firebase', icon: Flame, category: 'Backend as a Service' },
        { name: 'Google Cloud', icon: Cloud, category: 'Cloud Platform' },
        { name: 'Azure', icon: Cloud, category: 'Cloud Platform' },
      ],
    },
    ai: {
      title: 'AI & Machine Learning',
      icon: Cpu,
      color: 'from-emerald-500 to-green-500',
      tools: [
        { name: 'TensorFlow', icon: Brain, category: 'Deep Learning' },
        { name: 'PyTorch', icon: Flame, category: 'Deep Learning' },
        { name: 'scikit-learn', icon: BarChart, category: 'ML Library' },
        { name: 'Pandas', icon: BarChart, category: 'Data Analysis' },
        { name: 'NumPy', icon: Circle, category: 'Numerical Computing' },
        { name: 'OpenCV', icon: Eye, category: 'Computer Vision' },
        { name: 'Keras', icon: Settings, category: 'Neural Networks' },
        { name: 'Hugging Face', icon: Brain, category: 'NLP' },
      ],
    },
  };

  const currentStack = techStacks[activeTab as keyof typeof techStacks];
  const StackIcon = currentStack.icon;

  return (
    <SectionContainer id="tech-stack">
      <SectionHeading icon={Layers} title="Technology Arsenal" />

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(techStacks).map(([key, stack]) => {
          const Icon = stack.icon;
          return (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-3 rounded-2xl transition-all duration-300 ${
                activeTab === key
                  ? 'text-white shadow-2xl'
                  : 'bg-white/5 text-slate-300 border border-white/10 hover:border-white/30'
              }`}
            >
              {activeTab === key && (
                <motion.div
                  layoutId="activeStackTab"
                  className={`absolute inset-0 bg-gradient-to-r ${stack.color} rounded-2xl`}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className="relative flex items-center gap-2">
                <Icon size={20} />
                <span className="font-medium">{stack.title}</span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Tools display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -20, rotateX: 10 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/30 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className={`p-3 rounded-2xl bg-gradient-to-r ${currentStack.color}`}>
                <StackIcon size={28} className="text-white" />
              </div>
              <h3 className="text-white text-2xl">{currentStack.title}</h3>
            </div>

            {/* Tools grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {currentStack.tools.map((tool, index) => {
                const ToolIcon = tool.icon;
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative"
                  >
                    {/* Glow effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${currentStack.color} rounded-xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300`} />

                    {/* Tool card */}
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:border-white/30 transition-all duration-300">
                      {/* Icon */}
                      <div className="mb-3 flex justify-center">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <ToolIcon size={32} className="text-blue-400" />
                        </motion.div>
                      </div>

                      {/* Name */}
                      <div className="text-slate-100 text-center font-medium mb-1 text-sm">
                        {tool.name}
                      </div>

                      {/* Category */}
                      <div className="text-slate-400 text-center text-xs">
                        {tool.category}
                      </div>

                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl"
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${currentStack.color}`}
                  initial={{
                    x: `${Math.random() * 100}%`,
                    y: '100%',
                    opacity: 0,
                  }}
                  animate={{
                    y: '-10%',
                    opacity: [0, 0.5, 0],
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
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Quick stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
      >
        {[
          { icon: Code, label: 'Development Tools', value: '8+', color: 'from-blue-500 to-cyan-500' },
          { icon: Shield, label: 'Security Tools', value: '8+', color: 'from-red-500 to-orange-500' },
          { icon: Database, label: 'DB & Cloud', value: '8+', color: 'from-purple-500 to-pink-500' },
          { icon: Cpu, label: 'AI/ML Tools', value: '8+', color: 'from-emerald-500 to-green-500' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/20 hover:border-white/40 transition-all text-center"
          >
            <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-r ${stat.color} mb-2`}>
              <stat.icon size={20} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-slate-400 text-xs">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}