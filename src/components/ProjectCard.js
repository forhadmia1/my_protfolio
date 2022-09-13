import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';

const ProjectCard = ({ project }) => {
    const navigate = useNavigate()

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <div data-aos="zoom-in">
            <div className="card w-full bg-base-100 shadow-2xl hover:-translate-y-5 duration-300">
                <div className='p-4'>
                    <figure><img className='rounded-lg' src={project?.image[0]} alt={project?.name} /></figure>
                </div>
                <div className='px-4 pb-4'>
                    <h2 className="card-title">{project?.name}</h2>
                    <div className="card-actions justify-start mt-4 w-full">
                        <button onClick={() => navigate(`/project/${project?.id}`)} className="btn w-full hover:text-white rounded-none btn-primary">Show Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;