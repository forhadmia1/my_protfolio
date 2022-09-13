import React from 'react';
import useProjects from '../hooks/useProjects';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

const Projects = () => {
    const [projects] = useProjects()
    return (
        <section className='py-16'>
            <SectionTitle width={120}>Portfolio</SectionTitle>
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