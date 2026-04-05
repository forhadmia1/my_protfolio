import React from 'react';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';
import { BsFacebook } from 'react-icons/bs';
import forhadMiaImage from '../Assets/Image/forhad_mia.png';

const HeroArea = () => {
  const handleScroll = () => {
    const hash = '#about_me';
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

  return (
    <section
      id="hero_section"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-base-100 via-base-200 to-base-100"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-20 md:pt-24 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 ">
          {/* Text Content - Left Side */}
          <div
            className="w-full lg:w-1/2 text-center lg:text-left"
            // data-aos="fade-right"
            // data-aos-duration="1000"
          >
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-primary font-medium text-sm">
                Available for opportunities
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Forhad Mia
              </span>
            </h1>

            {/* Role */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-neutral/80 mb-6">
              <span className="text-primary">React Native Developer</span> &
              MERN Stack Developer
            </h2>

            {/* Description */}
            <p className="text-neutral/70 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              I craft beautiful, responsive, and user-friendly mobile apps using
              modern technologies. Let's build something amazing together!
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              <span className="px-3 py-1 bg-base-200 text-primary rounded-full text-sm font-medium border border-primary/20">
                React Native
              </span>
              <span className="px-3 py-1 bg-base-200 text-primary rounded-full text-sm font-medium border border-primary/20">
                React.js
              </span>
              <span className="px-3 py-1 bg-base-200 text-primary rounded-full text-sm font-medium border border-primary/20">
                Node.js
              </span>
              <span className="px-3 py-1 bg-base-200 text-primary rounded-full text-sm font-medium border border-primary/20">
                MongoDB
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/uc?export=download&id=1kpp1hjuDqpay1NWYpmAikoSdOwRLiD0C"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary/30 to-primary text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
                aria-label="Download Resume"
                download
              >
                <span>Download Resume</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>

              <button
                onClick={handleScroll}
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Scroll to About Me section"
              >
                <span>About Me</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
              <span className="text-neutral/60 text-sm">Follow me:</span>
              <div className="flex gap-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/forhadmia1"
                  className="w-10 h-10 rounded-lg bg-base-200 flex items-center justify-center text-neutral hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 border border-base-300 hover:border-primary"
                  aria-label="GitHub"
                >
                  <AiFillGithub className="text-xl" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/md-forhad-mia/"
                  className="w-10 h-10 rounded-lg bg-base-200 flex items-center justify-center text-neutral hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 border border-base-300 hover:border-primary"
                  aria-label="LinkedIn"
                >
                  <ImLinkedin2 className="text-lg" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/dev_forhad"
                  className="w-10 h-10 rounded-lg bg-base-200 flex items-center justify-center text-neutral hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 border border-base-300 hover:border-primary"
                  aria-label="Twitter"
                >
                  <AiOutlineTwitter className="text-xl" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/Dr.ForhadHasan"
                  className="w-10 h-10 rounded-lg bg-base-200 flex items-center justify-center text-neutral hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 border border-base-300 hover:border-primary"
                  aria-label="Facebook"
                >
                  <BsFacebook className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-primary/20 animate-spin-slow"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-72 h-72 md:w-88 md:h-88 rounded-full border border-secondary/20 animate-spin-slow"
                  style={{ animationDelay: '2s' }}
                ></div>
              </div>

              {/* Glowing background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-60"></div>

              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                  <img
                    src={forhadMiaImage}
                    alt="Forhad Mia - MERN Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badges */}
                <div
                  className="absolute -top-4 -right-4 bg-secondary rounded-xl shadow-lg p-3 animate-bounce"
                  style={{ animationDelay: '0.5s' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-accent">
                      Available
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">💻</span>
                    <div>
                      <p className="text-xs text-accent">Experience</p>
                      <p className="text-sm font-bold text-primary">3+ Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-neutral/60 text-sm">Scroll Down</span>
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroArea;
