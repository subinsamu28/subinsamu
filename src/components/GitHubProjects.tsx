import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
}

export function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          'https://api.github.com/users/subinsamu28/repos?sort=updated'
        );
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setRepos(data.slice(0, 6));
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section id="github-projects" className="mb-16">
        <div className="text-center text-slate-400">Loading GitHub projects...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github-projects" className="mb-16">
        <div className="text-center text-red-400">Failed to load repositories.</div>
      </section>
    );
  }

  return (
    <section id="github-projects" className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 shadow-2xl shadow-blue-500/10 hover:scale-[1.01] hover:shadow-blue-500/30 transition-all duration-300"
      >
        <h2 className="flex items-center justify-center gap-3 text-blue-300 text-center mb-8">
          <Github size={32} />
          GitHub Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 border border-white/10 rounded-xl p-6 hover:border-blue-400/30 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-2 mb-3 group"
              >
                <h3 className="text-slate-100 group-hover:text-blue-400 transition-colors">
                  {repo.name}
                </h3>
                <ExternalLink size={18} className="text-blue-400 flex-shrink-0" />
              </a>
              <p className="text-slate-300 text-sm mb-4">
                {repo.description || 'No description provided.'}
              </p>
              {repo.language && (
                <span className="inline-block px-3 py-1 bg-blue-600 text-blue-50 text-xs rounded-full">
                  {repo.language}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
