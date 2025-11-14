import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award, MapPin, Calendar, Star, Trophy, Shield } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { SectionContainer } from './SectionContainer';

export function PremiumEducation() {
  const education = [
    {
      degree: 'MSc Applied Computer Science',
      institution: 'Deggendorf Institute of Technology',
      location: 'Deggendorf, Germany',
      period: '2024 - Present',
      status: 'In Progress',
      description:
        'Advanced studies in Computer Science with specialization in cybersecurity, artificial intelligence, and distributed systems. Engaging in cutting-edge research and international collaboration.',
      highlights: [
        'Advanced Machine Learning & Deep Learning',
        'Cybersecurity & Network Security',
        'Cloud Computing & Distributed Systems',
        'Software Architecture & Design Patterns',
      ],
      achievements: [
        'International scholarship recipient',
        'Research assistant in AI security',
        'Active member of tech clubs',
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: GraduationCap,
      gpa: 'Ongoing',
    },
    {
      degree: 'BSc Cyber Forensics',
      institution: 'Viswabharamana College (Affiliated to Mahatma Gandhi University Kottayam)',
      location: 'Kottayam, India',
      period: '2020 - 2023',
      status: 'Completed',
      description:
        'Comprehensive undergraduate program focused on digital forensics, cybersecurity, and information security. Strong foundation in security principles and practices.',
      highlights: [
        'Digital Forensics & Cyber Crime Investigation',
        'Network Security & Cryptography',
        'Ethical Hacking & Penetration Testing',
        'Information Security Management',
      ],
      achievements: [
        'Main Project: Criminal Investigation Tracker using Suspect Prediction',
        'Mini Project: Web Scrapper',
        'Seminar: Smart Grid',
      ],
      color: 'from-purple-500 to-pink-500',
      icon: Shield,
      gpa: 'Graduated',
    },
  ];

  return (
    <SectionContainer id="education">
      <SectionHeading icon={GraduationCap} title="Academic Journey" />

      <div className="grid md:grid-cols-2 gap-8">
        {education.map((edu, index) => {
          const IconComponent = edu.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/30 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-white/40 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                {/* Animated gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.color} opacity-10 rounded-bl-full`} />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                      className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${edu.color} flex items-center justify-center text-3xl shadow-2xl`}
                    >
                      <IconComponent size={32} className="text-white" />
                    </motion.div>

                    {/* Status badge */}
                    <div className={`px-4 py-1.5 ${
                      edu.status === 'In Progress'
                        ? 'bg-green-500/20 text-green-400 border-green-500/30'
                        : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    } rounded-full text-xs font-semibold border flex items-center gap-1.5`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        edu.status === 'In Progress' ? 'bg-green-400' : 'bg-blue-400'
                      } animate-pulse`} />
                      {edu.status}
                    </div>
                  </div>

                  {/* Degree */}
                  <h3 className="text-slate-100 text-xl mb-3">{edu.degree}</h3>

                  {/* Institution */}
                  <div className="flex items-start gap-2 text-blue-400 mb-2">
                    <BookOpen size={16} className="flex-shrink-0 mt-1" />
                    <span className="font-medium">{edu.institution}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>

                  {/* GPA badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${edu.color} rounded-xl mb-4`}>
                    <Star size={14} className="text-white" />
                    <span className="text-white text-sm font-semibold">{edu.gpa}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-slate-200 font-medium mb-3 flex items-center gap-2">
                      <BookOpen size={16} className="text-purple-400" />
                      Key Courses
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2 text-slate-300 text-sm"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${edu.color}`} />
                          <span>{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-slate-200 font-medium mb-3 flex items-center gap-2">
                      <Trophy size={16} className="text-yellow-400" />
                      Achievements
                    </h4>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className={`px-3 py-2 bg-gradient-to-r ${edu.color} bg-opacity-10 text-slate-200 text-sm rounded-lg border border-white/10 backdrop-blur-sm flex items-center gap-2`}
                        >
                          <Award size={14} className="text-yellow-400 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${edu.color}`}
                    animate={{
                      y: ['100%', '-100%'],
                      x: [
                        `${20 + i * 25}%`,
                        `${30 + i * 25}%`,
                        `${20 + i * 25}%`,
                      ],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 4 + i,
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

      {/* Education summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20"
      >
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: GraduationCap, label: 'Degrees', value: '2' },
            { icon: Award, label: 'Honors & Awards', value: '5+' },
            { icon: BookOpen, label: 'Specializations', value: '3' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 mb-3">
                <stat.icon size={24} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}