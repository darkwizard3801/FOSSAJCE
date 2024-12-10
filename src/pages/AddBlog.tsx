import React, { useState } from 'react';

export function AddBlog() {
  const [authorName, setAuthorName] = useState('');
  const [authorDesignation, setAuthorDesignation] = useState('');
  const [authorLocation, setAuthorLocation] = useState('');
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle blog submission logic here
    console.log({
      authorName,
      authorDesignation,
      authorLocation,
      blogTitle,
      blogContent,
      image,
    });
  };

  return (
    <div className="mt-16 max-w-2xl mx-auto p-4 bg-gray-800 text-white transition-all duration-300">
      <style>
        {`
          body {
            background-color: #121212; /* Dark background for a modern look */
          }

          .field-container {
            margin-bottom: 1.5rem; /* Even spacing between fields */
          }

          .input-field {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #444;
            border-radius: 0.375rem;
            background-color: #222; /* Dark input background */
            color: white; /* White text color */
            transition: border-color 0.3s, box-shadow 0.3s;
          }

          .input-field:focus {
            border-color: #3b82f6; /* Blue border on focus */
            box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); /* Blue shadow on focus */
          }

          h2.animate-fade-in {
            opacity: 0;
            animation: fadeIn 0.5s forwards; /* Fade-in animation for the title */
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}
      </style>
      <h2 className="text-3xl font-bold mb-6 animate-fade-in">Add Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="field-container">
          <label htmlFor="authorName" className="block text-sm font-medium">Author Name</label>
          <input
            id="authorName"
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="field-container">
          <label htmlFor="authorDesignation" className="block text-sm font-medium">Author Designation</label>
          <input
            id="authorDesignation"
            type="text"
            value={authorDesignation}
            onChange={(e) => setAuthorDesignation(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="field-container">
          <label htmlFor="authorLocation" className="block text-sm font-medium">Author Location</label>
          <input
            id="authorLocation"
            type="text"
            value={authorLocation}
            onChange={(e) => setAuthorLocation(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="field-container">
          <label htmlFor="blogTitle" className="block text-sm font-medium">Blog Title</label>
          <input
            id="blogTitle"
            type="text"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="field-container">
          <label htmlFor="blogContent" className="block text-sm font-medium">Blog Content</label>
          <textarea
            id="blogContent"
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
            className="input-field"
            rows={5}
            required
          />
        </div>
        <div className="field-container">
          <label htmlFor="image" className="block text-sm font-medium">Upload Image</label>
          <input
            id="image"
            type="file"
            onChange={handleImageChange}
            className="input-field"
            accept="image/*"
            required
          />
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md transition-transform transform hover:scale-105">Upload Blog</button>
      </form>
    </div>
  );
} 