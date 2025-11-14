import { motion } from 'motion/react';
import { Quote, Star, MessageCircle, Award } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { SectionContainer } from './SectionContainer';

export function PremiumTestimonials() {
  const testimonials = [
    {
      text: 'Subin has an excellent grasp on digital security and forensic techniques. He has an eye for detail and a natural talent for security analytics.',
      author: 'Kerala Police Supervisor',
      role: 'Security Division',
      rating: 5,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      text: "It's rare to find someone who can blend technical skills and creativity so effectively. Subin is a strong asset to any project.",
      author: 'Project Mentor, NextGenPro',
      role: 'Technical Lead',
      rating: 5,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <SectionContainer id="testimonials">
      <SectionHeading icon={MessageCircle} title="Testimonials" />

      {/* Testimonials grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative"
          >
            {/* Card glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-3xl" />
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/30 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-white/40 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }} />
              </div>

              {/* Quote icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.2, type: "spring", stiffness: 200 }}
                className="absolute top-6 left-6"
              >
                <Quote
                  size={64}
                  className={`text-blue-400 opacity-10 group-hover:opacity-20 transition-opacity`}
                />
              </motion.div>

              {/* Star rating */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                  >
                    <Star
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Quote text */}
              <div className="relative z-10 mb-6">
                <p className="text-slate-200 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author info */}
              <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/10">
                <div>
                  <div className={`bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                    {testimonial.author}
                  </div>
                  <p className="text-slate-400 text-sm mt-1">
                    {testimonial.role}
                  </p>
                </div>

                {/* Verified badge */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`p-2 rounded-full bg-gradient-to-r ${testimonial.gradient}`}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{
                  background: [
                    'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                  ],
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />

              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-blue-400"
                  animate={{
                    y: ['100%', '-20%'],
                    x: [
                      `${20 + i * 15}%`,
                      `${25 + i * 15}%`,
                      `${20 + i * 15}%`,
                    ],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}