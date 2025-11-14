import { motion } from 'motion/react';
import { Award, ShieldCheck, UserCheck, Lock, Code, Laptop } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      title: 'Cybersecurity Fundamentals',
      provider: 'IBM SkillsBuild',
      url: 'https://www.credly.com/badges/2b067e5d-6338-4a88-8eaf-d779aef7e630/print',
      icon: ShieldCheck,
    },
    {
      title: 'White Hat Hacker',
      provider: 'Eduonix',
      url: 'https://www.eduonix.com/certificate/6858cab048',
      icon: UserCheck,
    },
    {
      title: 'Cloud Identity',
      provider: 'Google Cloud',
      url: 'https://www.coursera.org/account/accomplishments/verify/WMZBSMJCND7A',
      icon: ShieldCheck,
    },
    {
      title: 'Ethical Hacking',
      provider: 'Great Learning',
      url: 'https://verify.mygreatlearning.com/verify/KXGXDCCW',
      icon: Lock,
    },
    {
      title: 'HTML & CSS',
      provider: 'Udemy',
      url: 'https://www.udemy.com/certificate/UC-912f85d4-69be-4193-8c75-b4110a907130/',
      icon: Code,
    },
    {
      title: 'C Programming',
      provider: 'Udemy',
      url: 'https://www.udemy.com/certificate/UC-94ce38b4-3a32-4036-ab66-186ddb92cbbd/',
      icon: Code,
    },
    {
      title: 'Code Yourself! An Introduction to Programming',
      provider: 'Edinburgh & ORT',
      url: 'https://www.coursera.org/account/accomplishments/verify/2ZQH82EULZQ5',
      icon: Laptop,
    },
  ];

  return (
    <section id="certifications" className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 shadow-2xl shadow-blue-500/10 hover:scale-[1.01] hover:shadow-blue-500/30 transition-all duration-300"
      >
        <h2 className="flex items-center justify-center gap-3 text-blue-300 text-center mb-8">
          <Award size={32} />
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-400/20 rounded-xl p-6 text-center hover:border-blue-400/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <cert.icon size={40} className="text-blue-400" />
              </div>
              <h3 className="text-slate-100 mb-2">{cert.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{cert.provider}</p>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:from-indigo-600 hover:to-purple-600 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-blue-500/30"
              >
                Verify
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
