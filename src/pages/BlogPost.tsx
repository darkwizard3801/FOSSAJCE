import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';

const SAMPLE_BLOGS = {
  '1': {
    title: 'Getting Started with Open Source',
    content: `Open source software is everywhere. From the operating system running on your computer to the tools and frameworks you use for development, open source plays a crucial role in modern technology.

In this guide, we'll explore how you can start contributing to open source projects and make a meaningful impact in the developer community...`,
    date: new Date('2024-02-20'),
    author: 'John Doe',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  },
  '2': {
    title: 'The Power of Linux',
    content: `Linux has become the foundation of modern computing infrastructure. From servers to embedded systems, its influence is undeniable.

Let's dive deep into why Linux continues to dominate the tech landscape and how you can master it...`,
    date: new Date('2024-02-18'),
    author: 'Jane Smith',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  }
};

export function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = SAMPLE_BLOGS[id as keyof typeof SAMPLE_BLOGS];

  if (!post) {
    return (
      <div className="min-h-screen pt-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Blog post not found</h2>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate('/blog')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        <article className="prose prose-invert max-w-none">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
          
          <div className="flex items-center mb-8">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="text-white font-medium">{post.author}</div>
              <div className="text-gray-400 text-sm">
                {formatDate(post.date)} · {post.readTime} read
              </div>
            </div>
          </div>

          <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>
        </article>
      </div>
    </div>
  );
}