import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="text-center text-slate-400 mt-16 pb-8">
      <p className="flex items-center justify-center gap-2 mb-2">
        © 2025 Subin Samu — Built with Creativity <Heart size={16} className="text-red-500" />
      </p>
      <a
        href="mailto:subinsamu28@gmail.com"
        className="text-blue-400 hover:text-blue-300 transition-colors underline"
      >
        Get in touch
      </a>
    </footer>
  );
}
