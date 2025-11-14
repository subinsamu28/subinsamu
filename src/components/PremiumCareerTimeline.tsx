import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Briefcase, GraduationCap, Award, ChevronDown, ChevronUp, Clock, MapPin, Zap, Star } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { SectionContainer } from './SectionContainer';

export function PremiumCareerTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const timeline = [
    {
      year: '2024 - Present',
      title: 'MSc Applied Computer Science',
      organization: 'Deggendorf Institute of Technology (DIT)',
      location: 'Deggendorf, Germany',
      description:
        'Pursuing advanced studies in Computer Science with specialization in cybersecurity, artificial intelligence, and distributed systems.',
      highlights: [
        'Advanced Machine Learning & Deep Learning',
        'Cybersecurity & Network Security',
        'Cloud Computing & Distributed Systems',
        'Software Architecture & Design Patterns',
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: GraduationCap,
    },
    {
      year: '2023 - Present',
      title: 'Ethical Hacking',
      organization: 'Avodha',
      location: 'Remote',
      description:
        'Specialized training and certification program in ethical hacking and penetration testing methodologies.',
      highlights: [
        'Advanced Penetration Testing',
        'Web Application Security',
        'Network Security Assessment',
        'Security Tools & Frameworks',
      ],
      color: 'from-emerald-500 to-green-500',
      icon: Award,
    },
    {
      year: '2023',
      title: 'Software Developer',
      organization: 'NextGenPro',
      location: 'Kochi, India',
      description:
        'Developed "Criminal Investigation Tracker" with Python-Django for predictive suspect analysis.',
      highlights: [
        'Full-stack Development',
        'Django Framework',
        'Predictive Analysis',
        'Law Enforcement Solutions',
      ],
      color: 'from-purple-500 to-pink-500',
      icon: Briefcase,
    },
    {
      year: '2023',
      title: 'Internship',
      organization: 'Kerala Police',
      location: 'Kerala, India',
      description:
        'Worked in Cyber Cell, DCB, DCRB, FPB, DFSL, Cyber Police Station, and Photographic Bureau for cybercrime investigations and forensic analysis.',
      highlights: [
        'Cybercrime Investigation',
        'Digital Forensics',
        'Evidence Handling',
        'Multi-unit Experience',
      ],
      color: 'from-red-500 to-orange-500',
      icon: Clock,
    },
    {
      year: '2020 - 2023',
      title: 'BSc Cyber Forensics',
      organization: 'Viswabharamana College (MGU Kottayam)',
      location: 'Kottayam, India',
      description:
        'Comprehensive undergraduate program focused on digital forensics, cybersecurity, and information security.',
      highlights: [
        'Digital Forensics & Investigation',
        'Network Security',
        'Ethical Hacking',
        'Information Security Management',
      ],
      color: 'from-yellow-500 to-orange-500',
      icon: MapPin,
    },
  ];

  return (
    <SectionContainer id="timeline">
      <SectionHeading icon={Calendar} title="Career Timeline" />

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} p-1 shadow-2xl`}
                >
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-2xl">
                    <item.icon size={24} />
                  </div>
                </motion.div>
              </div>

              {/* Content card */}
              <div className={`w-full md:w-[calc(50%-4rem)] ml-24 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/30 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                    {/* Animated gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      {/* Year badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`px-4 py-1.5 bg-gradient-to-r ${item.color} rounded-full flex items-center gap-2`}>
                          <Calendar size={14} className="text-white" />
                          <span className="text-white text-xs font-semibold">
                            {item.year}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-slate-100 text-xl mb-2">{item.title}</h3>

                      {/* Organization */}
                      <div className="flex items-center gap-2 text-blue-400 mb-2">
                        <Briefcase size={16} />
                        <span>{item.organization}</span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-slate-400 mb-4">
                        <MapPin size={16} />
                        <span className="text-sm">{item.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Expand button */}
                      <button
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm mb-2"
                      >
                        <span>Key Highlights</span>
                        <motion.div
                          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                      </button>

                      {/* Highlights */}
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-2 pt-2">
                              {item.highlights.map((highlight, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-center gap-2 text-slate-300 text-sm"
                                >
                                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`} />
                                  <span>{highlight}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Floating accent */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className={`absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-r ${item.color} opacity-20 blur-2xl pointer-events-none`}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {[
            { icon: Star, label: '4+ Years Experience', color: 'from-yellow-500 to-orange-500' },
            { icon: Briefcase, label: '3 Major Organizations', color: 'from-blue-500 to-cyan-500' },
            { icon: Zap, label: 'Multiple Domains', color: 'from-purple-500 to-pink-500' },
          ].map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`px-6 py-3 bg-gradient-to-r ${badge.color} rounded-2xl shadow-2xl`}
            >
              <div className="flex items-center gap-2 text-white">
                <badge.icon size={20} />
                <span className="font-semibold text-sm">{badge.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
}