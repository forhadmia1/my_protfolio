import React, { useState, useEffect } from 'react';
import {
  FaGlobe,
  FaMobileAlt,
  FaServer,
  FaSearch,
  FaTimes,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';
import useProjects from '../hooks/useProjects';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';
import LoadingSkeleton from './common/LoadingSkeleton';

const Projects = () => {
  const [projects, loading] = useProjects();
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleProjects, setVisibleProjects] = useState(6);

  // Add categories to projects based on technology or manually
  const categorizeProjects = (projects) => {
    return (
      projects?.map((project) => {
        // Default category based on technology
        let category = 'web';
        const tech = project.technology?.toLowerCase() || '';

        if (
          tech.includes('react native') ||
          tech.includes('mobile') ||
          project.name?.toLowerCase().includes('app')
        ) {
          category = 'mobile';
        } else if (
          tech.includes('node') ||
          tech.includes('express') ||
          tech.includes('mongodb') ||
          tech.includes('backend')
        ) {
          // If it has both frontend and backend, categorize as web
          if (tech.includes('react') || tech.includes('html')) {
            category = 'web';
          } else {
            category = 'backend';
          }
        }

        // Convert technology string to array
        const technologies =
          project.technology?.split(',').map((t) => t.trim()) || [];

        return {
          ...project,
          category,
          technologies,
          liveLink: project.live_link,
          githubLink: project.client_code,
        };
      }) || []
    );
  };

  useEffect(() => {
    const categorizedProjects = categorizeProjects(projects);

    let result = categorizedProjects;

    // Filter by category
    if (activeFilter !== 'all') {
      result = result.filter((project) => project.category === activeFilter);
    }

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (project) =>
          project.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.about?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.technologies?.some((tech) =>
            tech.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    setFilteredProjects(result);
  }, [activeFilter, searchTerm, projects]);

  const categorizedProjects = categorizeProjects(projects);

  const filters = [
    {
      id: 'all',
      label: 'All Projects',
      icon: <FaCode />,
      count: projects?.length || 0,
    },
    {
      id: 'web',
      label: 'Web Apps',
      icon: <FaGlobe />,
      count:
        categorizedProjects.filter((p) => p.category === 'web')?.length || 0,
    },
    {
      id: 'mobile',
      label: 'Mobile Apps',
      icon: <FaMobileAlt />,
      count:
        categorizedProjects.filter((p) => p.category === 'mobile')?.length || 0,
    },
    {
      id: 'backend',
      label: 'Backend',
      icon: <FaServer />,
      count:
        categorizedProjects.filter((p) => p.category === 'backend')?.length ||
        0,
    },
  ];

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <section
      id="portfolio"
      className="pt-20 md:pt-32 bg-gradient-to-b from-base-200 to-base-100 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle width={160}>PORTFOLIO</SectionTitle>

        {/* Section Description */}
        <div className="text-center max-w-2xl mx-auto mt-16 mb-12">
          <p className="text-neutral/70 text-lg leading-relaxed">
            Explore my diverse portfolio of web applications, mobile apps, and
            backend solutions. Each project showcases my skills and dedication
            to quality.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative group">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-accent group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-10 py-3 rounded-xl bg-white border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all duration-300 shadow-lg"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral/40 hover:text-primary transition-colors"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setVisibleProjects(6);
              }}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-primary/30 to-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-base-100 text-neutral hover:bg-primary/10 shadow-md hover:shadow-lg'
              }`}
            >
              <span
                className={`text-lg ${activeFilter === filter.id ? 'animate-pulse' : 'group-hover:scale-110'} transition-transform`}
              >
                {filter.icon}
              </span>
              <span>{filter.label}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs ${
                  activeFilter === filter.id
                    ? 'bg-white/20 text-white'
                    : 'bg-primary/10 text-primary'
                }`}
              >
                {filter.count}
              </span>
              {activeFilter === filter.id && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <LoadingSkeleton key={index} type="card" />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects
                .slice(0, visibleProjects)
                .map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
            </div>

            {/* No Projects Found */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <FaSearch className="text-4xl text-primary/40" />
                </div>
                <h3 className="text-2xl font-bold text-neutral mb-3">
                  No Projects Found
                </h3>
                <p className="text-neutral/60 text-lg">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}

            {/* Load More Button */}
            {filteredProjects.length > visibleProjects && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={loadMore}
                  className="group relative px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold overflow-hidden hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <FaCode className="text-xl group-hover:rotate-12 transition-transform" />
                    <span>Load More Projects</span>
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
