import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBlog, FaArrowLeft, FaRss, FaClock } from 'react-icons/fa';

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100 flex items-center justify-center px-4">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <FaBlog className="text-4xl text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <FaClock className="text-sm text-white" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-neutral mb-4">
          Coming Soon
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-neutral/70 mb-8">
          I'm working on some amazing blog content. Stay tuned for insightful
          articles about web development, React, Node.js, and more!
        </p>

        {/* Features Coming */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <FaRss className="text-primary" />
            <span className="text-sm font-medium text-neutral">
              Tech Tutorials
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
            <FaBlog className="text-secondary" />
            <span className="text-sm font-medium text-neutral">
              Development Tips
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <FaClock className="text-primary" />
            <span className="text-sm font-medium text-neutral">
              Project Insights
            </span>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary/30 to-primary text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};

export default Blogs;
