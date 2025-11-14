import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  return (
    <section id="contact" className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 shadow-2xl shadow-blue-500/10 hover:scale-[1.01] hover:shadow-blue-500/30 transition-all duration-300"
      >
        <h2 className="flex items-center justify-center gap-3 text-blue-300 text-center mb-8">
          <Send size={32} />
          Contact Me
        </h2>

        <form
          action="https://formspree.io/f/xldbdaqv"
          method="POST"
          className="max-w-2xl mx-auto space-y-6"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-slate-800 border border-blue-400/30 rounded-xl text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-slate-800 border border-blue-400/30 rounded-xl text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-3 bg-slate-800 border border-blue-400/30 rounded-xl text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white py-3 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-indigo-500/50"
          >
            Send Message
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
