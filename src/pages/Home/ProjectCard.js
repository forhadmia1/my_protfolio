import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const navigate = useNavigate()

    return (
        <div className="card w-full bg-base-100 shadow-2xl">
            <div className='p-4'>
                <figure><img className='rounded-lg hover:scale-110 duration-300' src={project?.image[0]} alt={project?.name} /></figure>
            </div>
            <div className='px-4 pb-4'>
                <h2 className="card-title">{project?.name}</h2>
                <div className="card-actions justify-start mt-4 w-full">
                    <button onClick={() => navigate(`/project/${project?.id}`)} className="btn w-full hover:text-white rounded-none btn-primary">Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;