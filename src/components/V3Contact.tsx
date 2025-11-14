import { motion } from 'motion/react';
import { Send, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from './ui/button';
import { SectionHeading } from './SectionHeading';
import { SectionContainer } from './SectionContainer';

export function V3Contact() {
  const [state, handleSubmit] = useForm("xrbrpeqp");

  return (
    <SectionContainer id="contact">
      <SectionHeading icon={Send} title="Get In Touch" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full mb-4"
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300">Get In Touch</span>
          </motion.div>
          
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        {/* Contact Form - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto relative group"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          
          <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/30 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 hover:border-white/40 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 border-2 border-green-500/50 rounded-full mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </motion.div>
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-300 mb-8">
                  Thank you for reaching out. I'll get back to you as soon as possible!
                </p>
                <Button
                  onClick={() => window.location.reload()}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={state.submitting}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="John Doe"
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-slate-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={state.submitting}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="john@example.com"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-slate-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    disabled={state.submitting}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project..."
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                {/* Error Messages */}
                {state.errors && state.errors.length > 0 && !state.errors.some(e => e.field) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again.</span>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full relative overflow-hidden group/btn bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white py-6 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {/* Shimmer effect */}
                  {!state.submitting && (
                    <motion.div
                      className="absolute inset-0 w-full h-full"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      }}
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                  )}
                  
                  <span className="relative flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </span>
                </Button>
              </form>
            )}

            {/* Decorative sparkles */}
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-pink-400" />
            </motion.div>

            {/* Corner accents */}
            <motion.div
              className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-blue-400/30 rounded-tl-2xl"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            />
            <motion.div
              className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-purple-400/30 rounded-br-2xl"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}