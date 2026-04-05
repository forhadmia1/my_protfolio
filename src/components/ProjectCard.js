import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaGlobe,
  FaMobileAlt,
  FaServer,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaEye,
} from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const categoryIcons = {
    web: <FaGlobe className="text-cyan-500" />,
    mobile: <FaMobileAlt className="text-purple-500" />,
    backend: <FaServer className="text-green-500" />,
  };

  const categoryColors = {
    web: 'from-cyan-500 to-blue-500',
    mobile: 'from-purple-500 to-pink-500',
    backend: 'from-green-500 to-emerald-500',
  };

  const categoryLabels = {
    web: 'Web App',
    mobile: 'Mobile App',
    backend: 'Backend',
  };

  return (
    <div
      className={`group relative bg-base-200 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
        imageLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span
          className={`px-3 py-1.5 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[project?.category] || 'from-gray-500 to-gray-600'} shadow-lg flex items-center gap-1.5`}
        >
          {categoryIcons[project?.category] || <FaCode />}
          {categoryLabels[project?.category] || 'Project'}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative h-52 overflow-hidden">
        <img
          className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          src={project?.image?.[0]}
          alt={project?.name}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />

        {/* Overlay on Hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Quick Actions */}
          <div className="absolute top-4 right-4 flex gap-2">
            {project?.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-all duration-300 hover:scale-110"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt className="text-sm" />
              </a>
            )}
            {project?.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-all duration-300 hover:scale-110"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub className="text-lg" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-neutral mb-2 group-hover:text-primary transition-colors duration-300">
          {project?.name}
        </h3>

        {/* Description */}
        <p className="text-neutral/70 text-sm mb-4 line-clamp-2">
          {project?.about}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies?.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-base-100 text-neutral/80 hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-primary/10 text-primary">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button
          onClick={() => navigate(`/project/${project?.id}`)}
          className="w-full group/btn relative overflow-hidden py-3 rounded-xl border-2 border-primary text-primary font-medium hover:text-secondary transition-all duration-300"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <FaEye className="group-hover/btn:scale-110 transition-transform" />
            View Details
          </span>
          <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
        </button>
      </div>

      {/* Animated Border */}
      <div
        className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-500 pointer-events-none`}
      ></div>
    </div>
  );
};

export default ProjectCard;
