import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: Date;
  author: string;
  readTime: string;
  image: string;
}

export function BlogCard({
  id,
  title,
  excerpt,
  date,
  author,
  readTime,
  image
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-gray-900 rounded-lg overflow-hidden"
    >
      <div className="aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <time className="text-sm text-gray-400">{formatDate(date)}</time>
        <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm text-gray-300">{excerpt}</p>
        <div className="mt-4 flex items-center text-sm text-gray-400">
          <span>{author}</span>
          <span className="mx-2">·</span>
          <span>{readTime} read</span>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-purple-600/90 flex items-center justify-center opacity-0 transition-opacity"
      >
        <Link
          to={`/blog/${id}`}
          className="text-white font-medium flex items-center gap-2 hover:gap-3 transition-all"
        >
          Read More <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </motion.div>
  );
}