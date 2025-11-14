import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar, Award, ChevronRight, Zap } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { SectionContainer } from './SectionContainer';

export function PremiumExperience() {
  const experiences = [
    {
      role: 'Software Developer Intern',
      company: 'NextGenPro Innovations & Edupark Pvt. Ltd.',
      location: 'Kochi, India',
      period: '2023',
      type: 'Internship',
      description:
        'Developed "Criminal Investigation Tracker" with Python-Django for predictive suspect analysis.',
      achievements: [
        'Built Criminal Investigation Tracker application',
        'Implemented predictive suspect analysis features',
        'Used Python-Django framework for development',
        'Delivered production-ready solution for law enforcement',
      ],
      technologies: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'Git'],
      color: 'from-blue-500 to-cyan-500',
      icon: '💻',
    },
    {
      role: 'Intern',
      company: 'Kerala Police',
      location: 'Kerala, India',
      period: '2023',
      type: 'Internship',
      description:
        'Worked in Cyber Cell, DCB (District Crime Branch), DCRB (District Crime Records Bureau), FPB (Finger Print Bureau), DFSL (Scientific Unit), Cyber Police Station, and Photographic Bureau for cybercrime investigations, forensic evidence handling, and digital analysis.',
      achievements: [
        'Worked across multiple specialized units',
        'Conducted cybercrime investigations',
        'Handled forensic evidence collection and analysis',
        'Performed digital analysis on criminal cases',
      ],
      technologies: ['Digital Forensics', 'Wireshark', 'Autopsy', 'Python', 'Linux'],
      color: 'from-red-500 to-orange-500',
      icon: '🔍',
    },
  ];

  return (
    <SectionContainer id="experience">
      <SectionHeading icon={Briefcase} title="Professional Experience" />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.01, y: -5 }}
            className="group relative"
          >
            {/* Card */}
            <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/30 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-white/40 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              {/* Animated gradient overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(100,116,139,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.05) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
              </div>

              <div className="relative z-10">
                {/* Header section */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center text-3xl shadow-xl`}
                    >
                      {exp.icon}
                    </motion.div>

                    <div>
                      {/* Role */}
                      <h3 className="text-slate-100 text-xl mb-2">{exp.role}</h3>

                      {/* Company */}
                      <div className="flex items-center gap-2 text-blue-400 mb-2">
                        <Briefcase size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Period & Type */}
                  <div className="flex flex-col gap-2">
                    <div className={`px-4 py-2 bg-gradient-to-r ${exp.color} rounded-xl flex items-center gap-2 w-fit`}>
                      <Calendar size={14} className="text-white" />
                      <span className="text-white text-sm font-medium">{exp.period}</span>
                    </div>
                    <div className="px-4 py-1.5 bg-white/10 rounded-lg text-slate-300 text-xs text-center border border-white/20">
                      {exp.type}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

                {/* Achievements */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={18} className="text-yellow-400" />
                    <h4 className="text-slate-200 font-medium">Key Achievements</h4>
                  </div>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <ChevronRight size={16} className={`flex-shrink-0 mt-0.5 text-blue-400`} />
                        <span className="text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap size={18} className="text-purple-400" />
                    <h4 className="text-slate-200 font-medium">Technologies Used</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`px-4 py-2 bg-gradient-to-r ${exp.color} bg-opacity-20 text-slate-200 text-sm rounded-xl border border-white/20 backdrop-blur-sm font-medium`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className={`absolute top-8 right-8 w-32 h-32 rounded-full bg-gradient-to-r ${exp.color} opacity-20 blur-3xl pointer-events-none`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid md:grid-cols-3 gap-6 mt-12"
      >
        {[
          { label: 'Years of Experience', value: '2+', color: 'from-blue-500 to-cyan-500' },
          { label: 'Projects Completed', value: '20+', color: 'from-purple-500 to-pink-500' },
          { label: 'Technologies Mastered', value: '15+', color: 'from-emerald-500 to-green-500' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`bg-gradient-to-r ${stat.color} rounded-2xl p-6 text-center shadow-2xl`}
          >
            <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-white/90 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}