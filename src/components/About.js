import React from 'react';
import { FaCode, FaLaptopCode, FaRocket, FaDownload } from 'react-icons/fa';
import myphoto from '../Assets/Image/forhad_mia.png';
import SectionTitle from './SectionTitle';

const About = () => {
  const handleScroll = () => {
    const hash = '#my_skills';
    const el = document.querySelector(hash);
    const offsetTop = el.offsetTop;
    if (typeof window !== `undefined`) {
      window.scrollTo({
        top: offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const highlights = [
    {
      icon: <FaCode className="text-2xl" />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
    },
    {
      icon: <FaLaptopCode className="text-2xl" />,
      title: 'Modern Tech',
      description: 'React Native, Node.js, MongoDB & more',
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: 'Fast Learner',
      description: 'Adapting to new technologies quickly',
    },
  ];

  return (
    <section
      id="about_me"
      className="py-20 md:py-32 bg-gradient-to-b from-base-100 to-base-200 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle>ABOUT ME</SectionTitle>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
          {/* Image Section */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative group">
              {/* Animated border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>

              {/* Main image container */}
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 relative">
                  {/* Background shapes */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>

                  {/* Image */}
                  <img
                    className="relative w-full h-full object-cover rounded-3xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    src={myphoto}
                    alt="Forhad Mia - Web Developer"
                    loading="lazy"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <FaCode className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="text-xs text-accent">Experience</p>
                      <p className="text-lg font-bold text-primary">3+ Years</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <FaRocket className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="text-xs text-accent">Projects</p>
                      <p className="text-lg font-bold text-primary">15+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Greeting */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-primary font-medium text-sm">
                  Welcome to my portfolio
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-neutral leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Forhad Mia
                </span>
              </h2>

              <p className="text-xl text-neutral/70 font-medium">
                A passionate React Native & MERN Stack Developer
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4 text-neutral/80 leading-relaxed">
              <p className="text-lg">
                I'm a passionate Mobile app developer with expertise in building
                modern, responsive, and user-friendly mobile applications. My
                journey in mobile development started with React Native, and
                I've since expanded my skill set to include the entire MERN
                stack. I enjoy crafting seamless user experiences and writing
                clean, efficient code. I'm always eager to learn new
                technologies and take on exciting projects that challenge me to
                grow as a developer. Currently, I'm working at{' '}
                <span className="text-primary font-semibold">
                  Sitgram Bangladesh
                </span>
                .
              </p>
              <p>
                I specialize in creating Mobile apps with{' '}
                <span className="font-semibold text-neutral">
                  React Native (CLI & Expo)
                </span>
                , and I have experience with backend development using Node.js
                and Express, as well as database management with MongoDB. I'm
                passionate about building applications that not only look great
                but also perform well and provide a fantastic user experience.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group bg-base-100 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-200 hover:border-primary/30 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral/60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://drive.google.com/uc?export=download&id=1kpp1hjuDqpay1NWYpmAikoSdOwRLiD0C"
                className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary/30 to-primary text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <FaDownload className="group-hover:animate-bounce" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={handleScroll}
                className="group inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <span>View My Skills</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
