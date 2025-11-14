import { motion } from 'motion/react';
import { Clock } from 'lucide-react';

export function CareerTimeline() {
  const timeline = [
    { period: '2024–Present', event: 'MSc Applied Computer Science @ DIT' },
    { period: '2023–Present', event: 'Ethical Hacking @ Avodha' },
    { period: '2023', event: 'Software Developer @ NextGenPro' },
    { period: '2023', event: 'Internship @ Kerala Police' },
    { period: '2020–2023', event: 'BSc Cyber Forensics' },
  ];

  return (
    <section id="timeline" className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 shadow-2xl shadow-blue-500/10 hover:scale-[1.01] hover:shadow-blue-500/30 transition-all duration-300"
      >
        <h2 className="flex items-center justify-center gap-3 text-blue-300 text-center mb-8">
          <Clock size={32} />
          Career Timeline
        </h2>

        <div className="space-y-4">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 items-start"
            >
              <span className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg whitespace-nowrap">
                {item.period}
              </span>
              <p className="text-slate-300 pt-2">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
