import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const navigate = useNavigate()
    console.log(project)

    return (
        <div class="card w-full bg-base-100 shadow-2xl">
            <div className='p-4'>
                <figure><img className='rounded-lg' src={project?.image[0]} alt={project?.name} /></figure>
            </div>
            <div className='px-4 pb-4'>
                <h2 class="card-title">{project?.name}</h2>
                <div class="card-actions justify-start mt-4 w-full">
                    <button onClick={() => navigate(`/project/${project?.id}`)} class="btn w-full hover:text-white rounded-none btn-primary">Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;