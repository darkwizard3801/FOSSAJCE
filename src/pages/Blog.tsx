import React from 'react';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { BlogCard } from '@/components/blog/BlogCard';

const SAMPLE_BLOGS = [
  {
    id: '1',
    title: 'Getting Started with Open Source',
    excerpt: 'Learn how to make your first contribution to open source projects...',
    date: new Date('2024-02-20'),
    author: 'John Doe',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800'
  },
  {
    id: '2',
    title: 'The Power of Linux',
    excerpt: 'Discover why Linux is the backbone of modern computing...',
    date: new Date('2024-02-18'),
    author: 'Jane Smith',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800'
  },
  {
    id: '3',
    title: 'Contributing to Firefox',
    excerpt: 'A comprehensive guide to contributing to Mozilla Firefox...',
    date: new Date('2024-02-15'),
    author: 'Mike Johnson',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800'
  }
];

export function Blog() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Blog Posts</h1>
          <Button
            onClick={() => navigate('/login')}
            className="group"
          >
            <Plus className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform" />
            Add Blog
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_BLOGS.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
}