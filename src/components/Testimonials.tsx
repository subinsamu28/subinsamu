import { motion } from 'motion/react';
import { MessageSquare, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      text: 'Subin has an excellent grasp on digital security and forensic techniques. He has an eye for detail and a natural talent for security analytics.',
      author: 'Kerala Police Supervisor',
    },
    {
      text: "It's rare to find someone who can blend technical skills and creativity so effectively. Subin is a strong asset to any project.",
      author: 'Project Mentor, NextGenPro',
    },
  ];

  return (
    <section id="testimonials" className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="flex items-center justify-center gap-3 text-blue-300 text-center mb-8">
          <MessageSquare size={32} />
          Testimonials
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-indigo-400/30 rounded-2xl p-8 relative hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              <Quote
                size={48}
                className="absolute top-6 left-6 text-indigo-600 opacity-25"
              />
              <p className="text-slate-200 leading-relaxed mb-6 relative z-10 italic">
                "{testimonial.text}"
              </p>
              <div className="text-blue-300">– {testimonial.author}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
