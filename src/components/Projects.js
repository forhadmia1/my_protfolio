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
                <div className="grid lg:grid-cols-3 md:grid-cols-2 p-4 grid-cols-1 md:px-12 mt-12 justify-items-center gap-10">
                    {
                        projects.map(project => <ProjectCard
                            key={project.id}
                            project={project}
                        />)
                    }
                </div>
            </div>
            <div className='flex justify-center mt-6 cursor-pointer'>
                <a target='_blank' rel="noreferrer" href="https://github.com/forhadmia1?tab=repositories" className='py-2 px-4 border-2 border-primary rounded'>MORE</a>
            </div>
        </section >
    );
};

export default Projects;