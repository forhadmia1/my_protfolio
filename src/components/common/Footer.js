import React, { useState, useEffect } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaHeart,
  FaArrowUp,
  FaCode,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/forhadmia1',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/md-forhad-mia/',
      label: 'LinkedIn',
    },
    {
      icon: <FaTwitter />,
      url: 'https://twitter.com/dev_forhad',
      label: 'Twitter',
    },
    {
      icon: <FaFacebook />,
      url: 'https://www.facebook.com/Dr.ForhadHasan',
      label: 'Facebook',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about_me' },
    { name: 'Skills', href: '#my_skills' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-8">
        {/* Top Section - Brand & CTA */}
        <div className="py-12 border-b border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="text-center lg:text-left">
              <h3 className="text-4xl font-bold mb-2">
                Forhad<span className="text-primary">.</span>Mia
              </h3>
              <p className="text-primary/80 font-medium tracking-wide text-sm uppercase">
                MERN Stack Developer
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="group px-8 py-3 bg-gradient-to-r from-primary/30 to-primary text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  Let's Connect
                  <FaArrowUp className="transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </a>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 border border-white/20 hover:border-primary"
                    title={social.label}
                    aria-label={social.label}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-primary"></span>
              About Me
            </h4>
            <p className="text-white/70 leading-relaxed mb-6 max-w-lg">
              I'm a passionate MERN Stack Developer dedicated to creating
              elegant, high-performance web applications. With expertise in
              modern technologies and best practices, I transform ideas into
              seamless digital experiences.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                React.js
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                Node.js
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                MongoDB
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                Express.js
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                TypeScript
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-primary"></span>
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group text-white/70 hover:text-primary transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-all duration-300 group-hover:scale-150"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-primary"></span>
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:forhadmia416@gmail.com"
                  className="group flex items-start gap-3 text-white/70 hover:text-primary transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300 flex-shrink-0">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-1">Email</p>
                    <p className="text-sm">forhadmia416@gmail.com</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-sm" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-1">Phone</p>
                  <p className="text-sm">+880 1717808752</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-1">Location</p>
                  <p className="text-sm">Rangpur, Bangladesh</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-white/60">
              <p className="flex items-center gap-2">
                © {new Date().getFullYear()} Forhad Mia
              </p>
              <span className="hidden sm:inline text-white/30">•</span>
              <p className="flex items-center gap-2">
                Built with <FaHeart className="text-red-500 animate-pulse" />{' '}
                using React & Tailwind
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <p className="flex items-center gap-2">
                <FaCode className="text-primary" />
                <span>Clean Code Advocate</span>
              </p>
              <span className="text-white/30">•</span>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={goToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-primary/30 to-primary text-white rounded-full shadow-2xl shadow-primary/50 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-primary/70 z-50 ${
          showScrollTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </footer>
  );
};

export default Footer;
