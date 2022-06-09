import React from 'react';

const ProjectCard = ({ project }) => {

    return (
        <div class="card w-96 bg-base-100 shadow-2xl">
            <div className='p-4'>
                <figure><img className='rounded-lg' src={project.image} alt={project.name} /></figure>
            </div>
            <div className='px-4 pb-4'>
                <h2 class="card-title text-white">{project.name}</h2>
                <div class="card-actions justify-start mt-4">
                    <button class="btn btn-primary">Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;