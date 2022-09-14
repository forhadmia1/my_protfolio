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
            <div className="rounded w-full bg-accent hover:-translate-y-5 duration-300">
                <div className='h-40 w-full overflow-hidden'>
                    <img className='rounded image-full' src={project?.image[0]} alt={project?.name} />
                </div>
                <div className='px-4 pb-4 mt-6'>
                    <h2 className="text-2xl font-semibold text-neutral">{project?.name}</h2>
                    <p className='text-neutral mt-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque beatae inventore totam, repellendus quos earum quo nostrum sequi nemo.</p>
                    <div className="card-actions justify-start mt-4 w-full">
                        <button onClick={() => navigate(`/project/${project?.id}`)} className="btn w-full hover:text-white rounded-none btn-primary">Show Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;