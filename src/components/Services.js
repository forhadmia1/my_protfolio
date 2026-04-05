import React, { useState } from 'react';
import {
  FaReact,
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaArrowRight,
  FaCheck,
} from 'react-icons/fa';
import { BiCodeCurly } from 'react-icons/bi';
import { SiReact, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';
import SectionTitle from './SectionTitle';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: <FaMobileAlt className="text-5xl" />,
      title: 'React Native Developer',
      description:
        'Developing cross-platform mobile applications for iOS and Android using React Native with native-like performance and user experience.',
      features: [
        'Cross-Platform Development',
        'Native Module Integration',
        'Push Notifications',
        'App Store Deployment',
      ],
      technologies: ['React Native', 'Expo', 'Native Modules', 'Firebase'],
      color: 'from-purple-500 to-pink-500',
      shadowColor: 'shadow-purple-500/20',
    },
    {
      id: 2,
      icon: <FaReact className="text-5xl" />,
      title: 'React Developer',
      description:
        'Building modern, responsive, and interactive web applications using React.js with state management, hooks, and component-based architecture.',
      features: [
        'Custom React Components',
        'State Management (Redux/Context)',
        'React Hooks & Lifecycle',
        'Performance Optimization',
      ],
      technologies: ['React.js', 'React Router', 'Redux', 'React Query'],
      color: 'from-cyan-500 to-blue-500',
      shadowColor: 'shadow-cyan-500/20',
    },

    {
      id: 3,
      icon: <BiCodeCurly className="text-5xl" />,
      title: 'JavaScript Developer',
      description:
        'Creating dynamic and interactive web experiences using modern JavaScript (ES6+) with clean, maintainable, and efficient code.',
      features: [
        'Modern ES6+ JavaScript',
        'Asynchronous Programming',
        'API Integration',
        'DOM Manipulation',
      ],
      technologies: ['ES6+', 'TypeScript', 'Node.js', 'REST APIs'],
      color: 'from-yellow-500 to-orange-500',
      shadowColor: 'shadow-yellow-500/20',
    },
    {
      id: 4,
      icon: <FaLaptopCode className="text-5xl" />,
      title: 'Frontend Developer',
      description:
        'Crafting beautiful, responsive, and user-friendly interfaces with modern CSS frameworks and best practices for optimal user experience.',
      features: [
        'Responsive Web Design',
        'Modern CSS Frameworks',
        'Cross-Browser Compatibility',
        'UI/UX Best Practices',
      ],
      technologies: ['HTML5', 'CSS3', 'Tailwind', 'Bootstrap'],
      color: 'from-green-500 to-emerald-500',
      shadowColor: 'shadow-green-500/20',
    },
    {
      id: 5,
      icon: <FaCode className="text-5xl" />,
      title: 'Full Stack Developer',
      description:
        'Building complete web solutions from frontend to backend, database design to deployment, delivering end-to-end applications.',
      features: [
        'MERN Stack Development',
        'Database Design',
        'API Development',
        'Cloud Deployment',
      ],
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      color: 'from-indigo-500 to-purple-500',
      shadowColor: 'shadow-indigo-500/20',
    },
  ];

  return (
    <section
      id="services"
      className="pt-20 md:pt-32 bg-gradient-to-b from-base-100 to-base-200 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle width={140}>SERVICES</SectionTitle>

        {/* Section Description */}
        <div className="text-center max-w-2xl mx-auto mb-16 mt-16">
          <p className="text-neutral/70 text-lg leading-relaxed">
            I offer comprehensive web development services tailored to your
            needs. From concept to deployment, I deliver high-quality solutions
            that drive results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative bg-base-100 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                hoveredCard === service.id
                  ? 'shadow-2xl ' + service.shadowColor
                  : 'shadow-lg hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral/70 text-sm mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-neutral/80 group-hover:text-white/90 transition-colors duration-300"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                        <FaCheck className="text-xs text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-base-100 text-primary group-hover:bg-white/20 group-hover:text-white transition-all duration-300 border border-primary/20 group-hover:border-white/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Learn More Arrow */}
                {/* <div className="flex items-center gap-2 text-primary font-medium group-hover:text-white transition-colors duration-300">
                  <span className="text-sm">Learn More</span>
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-10 md:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-neutral mb-4">
                Have a Project in Mind?
              </h3>
              <p className="text-neutral/70 mb-8 max-w-xl mx-auto text-lg">
                Let's discuss your project requirements and bring your ideas to
                life with modern web technologies.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-primary/30 to-primary text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <FaCode className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                <span>Start a Project</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
