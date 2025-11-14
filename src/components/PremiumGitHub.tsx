import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Star, GitFork, Eye, Code2, TrendingUp, ExternalLink, RefreshCw } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { SectionContainer } from './SectionContainer';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}

export function PremiumGitHub() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');

  useEffect(() => {
    fetchRepositories();
  }, []);

  const fetchRepositories = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://api.github.com/users/subinsamu28/repos?sort=updated&per_page=6'
      );
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
    setLoading(false);
  };

  const languages = ['All', ...new Set(repos.map((repo) => repo.language).filter(Boolean))];
  const filteredRepos = selectedLanguage === 'All'
    ? repos
    : repos.filter((repo) => repo.language === selectedLanguage);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      Python: 'from-blue-500 to-cyan-500',
      JavaScript: 'from-yellow-500 to-orange-500',
      TypeScript: 'from-blue-600 to-blue-400',
      Java: 'from-red-500 to-orange-600',
      'C++': 'from-purple-500 to-pink-500',
      Rust: 'from-orange-600 to-red-600',
    };
    return colors[language] || 'from-slate-500 to-slate-400';
  };

  return (
    <SectionContainer id="github">
      <SectionHeading icon={Github} title="GitHub Projects" />

      {/* Language filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {languages.map((lang) => (
          <motion.button
            key={lang}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedLanguage(lang)}
            className={`px-4 py-2 rounded-xl transition-all duration-300 ${
              selectedLanguage === lang
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                : 'bg-white/5 text-slate-300 border border-white/10 hover:border-white/30'
            }`}
          >
            {lang}
          </motion.button>
        ))}
      </div>

      {/* Loading state */}
      {loading && (
        <div className="flex items-center justify-center py-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
          />
        </div>
      )}

      {/* Repository grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedLanguage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredRepos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/30 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all duration-500 overflow-hidden h-full flex flex-col shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-r ${getLanguageColor(repo.language)}`}>
                    <Code2 size={20} className="text-white" />
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <ExternalLink size={16} className="text-slate-300" />
                  </motion.a>
                </div>

                {/* Repo name */}
                <h3 className="text-slate-100 mb-3 line-clamp-1">{repo.name}</h3>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
                  {repo.description || 'No description available'}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4">
                  {[
                    { icon: Star, value: repo.stargazers_count, color: 'text-yellow-400' },
                    { icon: GitFork, value: repo.forks_count, color: 'text-blue-400' },
                    { icon: Eye, value: repo.watchers_count, color: 'text-green-400' },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-1"
                    >
                      <stat.icon size={14} className={stat.color} />
                      <span className="text-slate-400 text-xs">{stat.value}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Language & Topics */}
                <div className="flex flex-wrap gap-2">
                  {repo.language && (
                    <span className={`px-3 py-1 bg-gradient-to-r ${getLanguageColor(repo.language)} text-white text-xs rounded-full`}>
                      {repo.language}
                    </span>
                  )}
                  {repo.topics?.slice(0, 2).map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 text-slate-300 text-xs rounded-full border border-white/10"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Hover effect decoration */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* GitHub stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <a
          href="https://github.com/subinsamu28"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:shadow-2xl transition-all duration-300 group"
        >
          <Github size={24} />
          <span className="font-semibold">View Full GitHub Profile</span>
          <TrendingUp size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </SectionContainer>
  );
}