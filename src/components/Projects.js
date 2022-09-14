import React from 'react';
import useProjects from '../hooks/useProjects';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

const Projects = () => {
    const [projects] = useProjects()
    return (
        <section id='portfolio' className='md:py-16 pb-0 pt-16'>
            <SectionTitle width={160}>PORTFOLIO</SectionTitle>
            <div>
                <div className="grid md:grid-cols-3 p-4 grid-cols-1 md:px-12 mt-12 justify-items-center gap-10">
                    {
                        projects.map(project => <ProjectCard
                            key={project.id}
                            project={project}
                        />)
                    }
                </div>
            </div>
        </section >
    );
};

export default Projects;