import React, { useState, useEffect } from 'react';
import { BsBookHalf, BsMortarboardFill } from 'react-icons/bs';
import {
  FaBook,
  FaGraduationCap,
  FaCode,
  FaTools,
  FaStar,
  FaCheckCircle,
  FaBolt,
  FaRocket,
  FaTrophy,
} from 'react-icons/fa';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiGit,
  SiGithub,
  SiFigma,
  SiVisualstudiocode,
  SiKotlin,
} from 'react-icons/si';
import SectionTitle from './SectionTitle';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (activeTab === 'skills') {
      // Staggered animation for skill cards
      const timeouts = [];
      skillCategories.forEach((_, catIndex) => {
        timeouts.push(
          setTimeout(() => {
            setAnimatedSkills((prev) => [...prev, catIndex]);
          }, catIndex * 150),
        );
      });
      return () => timeouts.forEach((t) => clearTimeout(t));
    }
  }, [activeTab]);

  const skillCategories = [
    {
      title: 'Expertise',
      level: 'Advanced',
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500',
      glowColor: 'shadow-green-500/30',
      badge: '🚀',
      skills: [
        { name: 'React Native', icon: <SiReact className="text-cyan-500" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-orange-400" /> },
        { name: 'Expo', icon: <SiReact className="text-cyan-500" /> },
        {
          name: 'Push Notifications',
          icon: <FaBolt className="text-cyan-500" />,
        },
        { name: 'React.js', icon: <SiReact className="text-cyan-500" /> },
        {
          name: 'JavaScript',
          icon: <SiJavascript className="text-yellow-400" />,
        },
        { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
        { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
        {
          name: 'Tailwind CSS',
          icon: <SiTailwindcss className="text-teal-400" />,
        },
        { name: 'React Router', icon: <SiReact className="text-cyan-400" /> },
        { name: 'ES6+', icon: <SiJavascript className="text-yellow-500" /> },
        { name: 'REST API', icon: <FaCode className="text-purple-400" /> },
        {
          name: 'React Bootstrap',
          icon: <SiReact className="text-blue-400" />,
        },
      ],
    },
    {
      title: 'Comfortable',
      level: 'Intermediate',
      color: 'from-blue-500 to-indigo-500',
      borderColor: 'border-blue-500',
      glowColor: 'shadow-blue-500/30',
      badge: '⚡',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
        { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-orange-400" /> },
        { name: 'Redux Toolkit', icon: <FaCode className="text-purple-400" /> },
        { name: 'RTK Query', icon: <FaCode className="text-purple-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-gray-300" /> },
        {
          name: 'TypeScript',
          icon: <SiTypescript className="text-blue-500" />,
        },
        { name: 'DaisyUI', icon: <SiTailwindcss className="text-teal-300" /> },
        {
          name: 'ShadCN UI',
          icon: <SiTailwindcss className="text-teal-300" />,
        },
      ],
    },
    {
      title: 'Familiar',
      level: 'Beginner',
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500',
      glowColor: 'shadow-purple-500/30',
      badge: '🎯',
      skills: [
        { name: 'Sass', icon: <SiCss3 className="text-pink-400" /> },
        { name: 'Aws', icon: <FaTools className="text-yellow-400" /> },
        { name: 'Kotlin', icon: <SiKotlin className="text-yellow-400" /> },
      ],
    },
  ];

  const tools = [
    {
      name: 'VS Code',
      icon: <SiVisualstudiocode className="text-blue-500" />,
      color: 'hover:bg-blue-500/20',
    },
    {
      name: 'Git',
      icon: <SiGit className="text-orange-500" />,
      color: 'hover:bg-orange-500/20',
    },
    {
      name: 'GitHub',
      icon: <SiGithub className="text-gray-300" />,
      color: 'hover:bg-gray-500/20',
    },
    {
      name: 'Netlify',
      icon: <FaTools className="text-teal-400" />,
      color: 'hover:bg-teal-500/20',
    },
    {
      name: 'Heroku',
      icon: <FaTools className="text-purple-400" />,
      color: 'hover:bg-purple-500/20',
    },
    {
      name: 'NPM',
      icon: <FaTools className="text-red-400" />,
      color: 'hover:bg-red-500/20',
    },
    {
      name: 'Figma',
      icon: <SiFigma className="text-pink-400" />,
      color: 'hover:bg-pink-500/20',
    },
    {
      name: 'Chrome DevTools',
      icon: <FaTools className="text-blue-400" />,
      color: 'hover:bg-blue-500/20',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Arts',
      institution: 'National University',
      duration: '2018 - 2023',
      description:
        'Pursuing undergraduate degree with focus on developing analytical and critical thinking skills.',
      icon: <BsMortarboardFill />,
      status: 'Completed',
      achievements: [],
    },
    {
      degree: 'Complete Web Development',
      institution: 'Programming Hero',
      duration: 'Jan 2022 - May 2022',
      description:
        'Comprehensive web development bootcamp covering MERN stack, modern JavaScript, and industry best practices.',
      icon: <FaBook />,
      status: 'Completed',
      achievements: ['MERN Stack', 'Modern JavaScript', 'Best Practices'],
    },
  ];

  return (
    <section
      id="my_skills"
      className="py-16 md:py-24 bg-base-200 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle width={140}>MY SKILLS</SectionTitle>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mt-16 mb-12">
          <button
            onClick={() => setActiveTab('skills')}
            className={`group relative px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-3 overflow-hidden ${
              activeTab === 'skills'
                ? 'bg-primary text-secondary shadow-lg shadow-primary/30'
                : 'bg-base-100 text-neutral hover:bg-primary/10'
            }`}
          >
            <FaCode
              className={`text-lg ${activeTab === 'skills' ? 'animate-pulse' : 'group-hover:rotate-12'} transition-transform`}
            />
            <span>Skills</span>
            {activeTab === 'skills' && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`group relative px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-3 overflow-hidden ${
              activeTab === 'education'
                ? 'bg-primary text-secondary shadow-lg shadow-primary/30'
                : 'bg-base-100 text-neutral hover:bg-primary/10'
            }`}
          >
            <FaGraduationCap
              className={`text-lg ${activeTab === 'education' ? 'animate-bounce' : 'group-hover:scale-110'} transition-transform`}
            />
            <span>Education</span>
            {activeTab === 'education' && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
            )}
          </button>
        </div>

        {/* Skills Section */}
        {activeTab === 'skills' && (
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Skill Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {skillCategories.map((category, catIndex) => (
                <div
                  key={catIndex}
                  className={`relative group bg-base-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                    animatedSkills.includes(catIndex)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${catIndex * 150}ms` }}
                >
                  {/* Animated gradient border */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  >
                    <div className="absolute inset-[2px] bg-base-100 rounded-2xl"></div>
                  </div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{category.badge}</span>
                        <h3 className="text-xl font-bold text-neutral">
                          {category.title}
                        </h3>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${category.color} shadow-lg ${category.glowColor} group-hover:scale-110 transition-transform`}
                      >
                        {category.level}
                      </span>
                    </div>

                    {/* Skills Grid */}
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, index) => (
                        <div
                          key={index}
                          className={`group/skill relative flex items-center gap-2 px-4 py-2 rounded-xl border-2 ${category.borderColor} bg-base-200 hover:bg-gradient-to-r hover:${category.color} transition-all duration-300 cursor-default hover:scale-105 hover:shadow-lg ${category.glowColor}`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <span className="text-lg group-hover/skill:scale-125 group-hover/skill:rotate-12 transition-all duration-300">
                            {skill.icon}
                          </span>
                          <span className="font-medium text-sm group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tools Section */}
            <div className="bg-base-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <FaTools className="text-2xl text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral">
                    Tools & Technologies
                  </h3>
                  <p className="text-sm text-neutral/60">
                    Development tools I use daily
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className={`group flex flex-col items-center justify-center p-4 rounded-xl bg-base-200 ${tool.color} transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="text-3xl mb-2 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">
                      {tool.icon}
                    </div>
                    <span className="text-xs font-medium text-neutral text-center group-hover:text-primary transition-colors">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                {
                  icon: <FaRocket />,
                  value: '10+',
                  label: 'Projects Completed',
                  color: 'from-cyan-500 to-blue-500',
                },
                {
                  icon: <FaTrophy />,
                  value: '18+',
                  label: 'Technologies',
                  color: 'from-green-500 to-emerald-500',
                },
                {
                  icon: <FaBolt />,
                  value: '2+',
                  label: 'Years Learning',
                  color: 'from-purple-500 to-pink-500',
                },
                {
                  icon: <FaStar />,
                  value: '100%',
                  label: 'Dedication',
                  color: 'from-yellow-500 to-orange-500',
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`group bg-base-100 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-neutral">
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeTab === 'education' && (
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="max-w-3xl mx-auto">
              {/* Timeline */}
              <div className="relative">
                {/* Animated Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary/20 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>

                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`relative pl-20 pb-12 last:pb-0 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline dot with pulse */}
                    <div className="absolute left-6 top-0">
                      <div className="w-5 h-5 rounded-full bg-primary border-4 border-base-100 shadow-lg z-10 relative"></div>
                      <div className="absolute inset-0 w-5 h-5 rounded-full bg-primary animate-ping opacity-30"></div>
                    </div>

                    {/* Card */}
                    <div className="group bg-base-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative z-10">
                        <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-secondary text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                              {edu.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-neutral">
                                {edu.degree}
                              </h3>
                              <p className="text-sm text-primary font-medium">
                                {edu.institution}
                              </p>
                            </div>
                          </div>
                          <span
                            className={`px-4 py-1.5 rounded-full text-xs font-medium ${
                              edu.status === 'Completed'
                                ? 'bg-green-100 text-green-600 border border-green-200'
                                : 'bg-blue-100 text-blue-600 border border-blue-200'
                            }`}
                          >
                            {edu.status}
                          </span>
                        </div>

                        <p className="text-neutral/70 text-sm mb-4">
                          {edu.description}
                        </p>

                        {/* Achievements */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {edu.achievements.map((achievement, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-base-200 text-neutral flex items-center gap-1"
                            >
                              <FaCheckCircle className="text-primary text-xs" />
                              {achievement}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-sm text-neutral/60">
                          <BsBookHalf className="text-primary" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div
                className={`mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20 relative overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '400ms' }}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_primary_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <FaStar className="text-primary text-xl animate-pulse" />
                    <h4 className="text-lg font-bold text-neutral">
                      Continuous Learning
                    </h4>
                  </div>
                  <p className="text-neutral/70 text-sm leading-relaxed mb-4">
                    I believe in continuous improvement and staying updated with
                    the latest technologies. Currently exploring advanced React
                    patterns, cloud technologies, and best practices in software
                    development.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Problem Solving',
                      'Self-learning',
                      'Team Collaboration',
                      'Agile Methodology',
                    ].map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-base-100 rounded-full text-xs font-medium text-neutral flex items-center gap-1.5 hover:bg-primary hover:text-secondary transition-all duration-300 cursor-default hover:scale-105"
                      >
                        <FaCheckCircle className="text-primary text-xs" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
