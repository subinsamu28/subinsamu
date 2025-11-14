import { motion } from 'motion/react';
import { Wrench, Shield, Bug } from 'lucide-react';

export function Skills() {
  const languages = [
    'Python',
    'C',
    'C++',
    'Java',
    'HTML',
    'CSS',
    'SQL',
    'Rust',
    'JavaScript',
  ];

  return (
    <section id="skills" className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 shadow-2xl shadow-blue-500/10 hover:scale-[1.01] hover:shadow-blue-500/30 transition-all duration-300"
      >
        <h2 className="flex items-center justify-center gap-3 text-blue-300 text-center mb-8">
          <Wrench size={32} />
          Technical Skills
        </h2>

        <div className="grid gap-6">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-blue-400/30 transition-all"
          >
            <h3 className="text-blue-300 mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, index) => (
                <motion.span
                  key={lang}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-blue-600 text-blue-50 text-sm rounded-full hover:bg-blue-500 transition-colors cursor-default"
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-blue-400/30 transition-all"
          >
            <h3 className="flex items-center gap-2 text-blue-300 mb-4">
              <Wrench size={20} className="text-blue-400" />
              Frameworks & Tools
            </h3>
            <p className="text-slate-300">
              Django, MS SQL Server, Digital Forensics Tools, BWAPP
            </p>
          </motion.div>

          {/* Forensics & Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-blue-400/30 transition-all"
          >
            <h3 className="flex items-center gap-2 text-blue-300 mb-4">
              <Shield size={20} className="text-blue-400" />
              Forensics & Security
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <Shield size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                Cyber Forensics, Malware Analysis, Network Forensics, Data Recovery
              </li>
              <li className="flex items-start gap-2">
                <Bug size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                Incident Response, Vulnerability Assessment, Penetration Testing
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
