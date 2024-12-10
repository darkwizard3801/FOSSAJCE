import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Github } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              FOSS Club
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our community of open-source enthusiasts and help shape the future of software.
            Learn, contribute, and grow together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              <Terminal className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              <Link to="/blog">
              Get Started
              </Link>
            </Button>
            <Button size="lg" variant="secondary" onClick={() => window.open('https://github.com', '_blank')}>
              <Code2 className="mr-2 h-5 w-5" />
              View Projects
              
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 flex justify-center space-x-6 text-gray-400"
        >
          <div className="flex flex-col items-center">
            <Github className="h-8 w-8 mb-2" />
            <span className="text-sm">1000+ Commits</span>
          </div>
          <div className="flex flex-col items-center">
            <Code2 className="h-8 w-8 mb-2" />
            <span className="text-sm">50+ Projects</span>
          </div>
          <div className="flex flex-col items-center">
            <Terminal className="h-8 w-8 mb-2" />
            <span className="text-sm">200+ Members</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}