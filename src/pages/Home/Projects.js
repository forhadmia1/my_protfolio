import React, { useEffect, useState } from 'react';
import useProjects from '../../hooks/useProjects';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects] = useProjects()
    return (
        <section className='py-16'>
            <div>
                <h2 className="text-4xl font-bold text-primary text-center" >Protfolio</h2>
                <h3 className='text-xl font-semibold text-center'>Least Projects</h3>
            </div>
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