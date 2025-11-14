import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export function Education() {
  const education = [
    {
      title: 'MSc Applied Computer Sciences',
      institution: 'Deggendorf Institute of Technology',
      period: 'Oct 2024 – Present',
      current: true,
      icon: GraduationCap,
    },
    {
      title: 'Ethical Hacking',
      institution: 'Avodha',
      period: 'Jul 2023 – Present',
      current: true,
    },
    {
      title: 'BSc Cyber Forensics',
      institution: 'Viswabharamana College',
      period: 'Sep 2020 – Jun 2023',
    },
    {
      title: 'Higher Secondary',
      institution: 'GHSS Kadumeenchira',
      period: '2018 – 2020',
    },
    {
      title: 'Secondary School',
      institution: 'GHS Perunad',
      period: '2017 – 2018',
    },
  ];

  return (
    <section id="education" className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="flex items-center justify-center gap-3 text-blue-300 text-center mb-8">
          <GraduationCap size={32} />
          Education
        </h2>

        <div className="relative border-l-2 border-blue-500 pl-8 ml-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <div
                className={`absolute -left-[35px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white ${
                  edu.current ? 'bg-green-500 shadow-lg shadow-green-500/50' : 'bg-blue-500'
                }`}
              />

              <div className="bg-white/5 border border-blue-400/20 rounded-xl p-6 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <h3 className="flex items-center gap-2 text-slate-100 mb-2">
                  {edu.icon && <edu.icon size={20} className="text-blue-400" />}
                  {edu.title}
                  {edu.current && (
                    <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full animate-pulse">
                      Current
                    </span>
                  )}
                </h3>
                <p className="text-indigo-300 mb-1">{edu.institution}</p>
                <span className="text-slate-400 text-sm">{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}