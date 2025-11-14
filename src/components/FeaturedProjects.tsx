import { motion } from 'motion/react';
import { FolderGit2, Github, ExternalLink } from 'lucide-react';

export function FeaturedProjects() {
  const projects = [
    {
      title: 'Smart Background Studio',
      description:
        'A beginner-friendly AI desktop app that removes and replaces image and video backgrounds using deep learning. No green screen. No complex editing. Just Python + AI.',
      url: 'https://github.com/subinsamu28/smart-background-studio',
      tags: ['Python', '3.10+', 'GUI', 'Tkinter', 'AI', 'U²-Net', 'Cross-platform'],
    },
    {
      title: 'AI Scam Detector – Job Offer Analyzer',
      description:
        'Multi-layered AI pipeline that analyzes job offers and catches scams in real-time.',
      url: 'https://github.com/subinsamu28/AI-Scam-Detector-Job-Offer-Analyzer-',
      tags: ['Python', '3.10', 'AI/ML', 'Security'],
    },
  ];

  return (
    <section id="projects" className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 shadow-2xl shadow-blue-500/10 hover:scale-[1.01] hover:shadow-blue-500/30 transition-all duration-300"
      >
        <h2 className="flex items-center justify-center gap-3 text-blue-300 text-center mb-8">
          <FolderGit2 size={32} />
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 border border-white/10 rounded-xl p-6 hover:border-blue-400/30 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-2 mb-3 group"
              >
                <h3 className="text-slate-100 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  {project.title}
                  <Github size={18} className="text-blue-400" />
                </h3>
                <ExternalLink size={18} className="text-blue-400 flex-shrink-0" />
              </a>

              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-700 text-gray-200 text-xs rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
