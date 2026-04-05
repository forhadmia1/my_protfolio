import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaArrowLeft,
  FaSearch,
  FaExclamationTriangle,
} from 'react-icons/fa';
import Footer from '../components/common/Footer';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="relative mb-8">
            <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary opacity-20 leading-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                <FaExclamationTriangle className="text-5xl text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4">
            Oops! Page Not Found
          </h2>

          {/* Description */}
          <p className="text-lg text-neutral/70 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <FaHome className="group-hover:scale-110 transition-transform" />
              <span>Go to Home</span>
            </button>

            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12">
            <p className="text-sm text-neutral/60 mb-4">
              Or try these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#about_me"
                onClick={() => navigate('/')}
                className="px-4 py-2 bg-base-200 text-neutral rounded-full text-sm hover:bg-primary hover:text-white transition-all duration-300"
              >
                About Me
              </a>
              <a
                href="#portfolio"
                onClick={() => navigate('/')}
                className="px-4 py-2 bg-base-200 text-neutral rounded-full text-sm hover:bg-primary hover:text-white transition-all duration-300"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                onClick={() => navigate('/')}
                className="px-4 py-2 bg-base-200 text-neutral rounded-full text-sm hover:bg-primary hover:text-white transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
