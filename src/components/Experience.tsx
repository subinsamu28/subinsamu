import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'NextGenPro Innovations & Edupark Pvt. Ltd., Kochi',
      year: '2023',
      description:
        'Developed "Criminal Investigation Tracker" with Python-Django for predictive suspect analysis.',
    },
    {
      role: 'Intern',
      company: 'Kerala Police',
      year: '2023',
      description:
        'Worked in Cyber Cell, DCB (District Crime Branch), DCRB (District Crime Records Bureau), FPB (Finger Print Bureau), DFSL (Scientific Unit), Cyber Police Station, and Photographic Bureau for cybercrime investigations, forensic evidence handling, and digital analysis.',
    },
  ];

  return (
    <section id="experience" className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 shadow-2xl shadow-blue-500/10 hover:scale-[1.01] hover:shadow-blue-500/30 transition-all duration-300"
      >
        <h2 className="flex items-center justify-center gap-3 text-blue-300 text-center mb-8">
          <Briefcase size={32} />
          Experience
        </h2>

        <ul className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l-4 border-blue-500 pl-6 py-2 hover:border-purple-500 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <h3 className="text-slate-100">
                  {exp.role} @ {exp.company}
                </h3>
                <span className="text-slate-400 text-sm">({exp.year})</span>
              </div>
              <p className="text-slate-300">{exp.description}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
