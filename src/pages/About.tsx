import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Heart, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Open Source',
    description: 'We believe in the power of collaborative development and sharing knowledge freely.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Community',
    description: 'Join a vibrant community of developers, designers, and tech enthusiasts.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Innovation',
    description: 'Stay at the forefront of technology through hands-on projects and workshops.',
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Inclusivity',
    description: 'Everyone is welcome, regardless of their experience level or background.',
  },
];

export function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-6">About FOSS Club</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a community-driven organization dedicated to promoting and contributing to Free and Open Source Software.
            Our mission is to educate, collaborate, and innovate through open source projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <div className="bg-purple-600/20 p-3 rounded-full w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            To create a thriving ecosystem where students can learn, collaborate, and contribute to open-source projects
            while developing valuable skills for their future careers in technology.
          </p>
        </motion.div>
      </div>
    </div>
  );
}