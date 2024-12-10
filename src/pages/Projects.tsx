import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const projects = [
  {
    id: 1,
    title: 'Open Learning Platform',
    description: 'A collaborative platform for sharing educational resources and connecting students with mentors.',
    tech: ['React', 'Node.js', 'MongoDB'],
    stars: 245,
    forks: 68,
    contributors: 12,
    status: 'Active',
  },
  {
    id: 2,
    title: 'Community Chat App',
    description: 'Real-time messaging application built for developer communities and study groups.',
    tech: ['Vue.js', 'Firebase', 'WebRTC'],
    stars: 189,
    forks: 45,
    contributors: 8,
    status: 'Active',
  },
  // Add more projects as needed
];

export function Projects() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-6">Our Projects</h1>
          <p className="text-xl text-gray-300">
            Explore and contribute to our open source projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-gray-400">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    {project.stars}
                  </div>
                  <div className="flex items-center">
                    <GitFork className="h-4 w-4 mr-1" />
                    {project.forks}
                  </div>
                </div>
                <Button
                  onClick={() => window.open('https://github.com', '_blank')}
                  className="flex items-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}