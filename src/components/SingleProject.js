import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProjects from '../hooks/useProjects';
import { IoCaretBack } from 'react-icons/io5'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper";


const SingleProject = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [projects, loading] = useProjects()
    const [project, setProject] = useState({})
    const [projectLoading, setProjectLoading] = useState(true)

    useEffect(() => {
        if (projects) {
            const result = projects.find(project => project.id == id)
            setProject(result)
            setProjectLoading(false)
        }
    }, [id, projects])
    if (loading || projectLoading) {
        return <p>Loading......</p>
    }

    return (
        <section className="container mt-2 px-6 mx-auto ">
            <div style={{ zIndex: 99999 }} className='flex justify-start fixed top-5'>
                <div onClick={() => navigate(-1)} className='p-3 bg-primary lg:bg-accent shadow rounded py-2 px-4 flex items-center gap-2 font-bold cursor-pointer'>
                    <IoCaretBack className='text-neutral text-2xl font-bold ' />
                    <span className='text-neutral'>Back</span>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-20 text-gray-800 text-center md:text-left">
                <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                    <div className='flex justify-center items-center w-full gap-5 h-full'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper h-full"
                        >
                            {
                                project?.image.map((image, index) => <SwiperSlide
                                    key={index}><img className='lg:h-full h-80' src={image} alt="" /></SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                </div>
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12 lg:bg-accent bg-base-100 lg:px-10">
                    <div className="lg:px-6 px-2 py-12 md:px-12">
                        <h2 className="lg:text-3xl text-2xl font-bold mb-6 pb-2 text-primary">{project?.name}</h2>
                        <ul className=" mb-6 pb-2 text-justify">
                            {
                                project?.description.map((list, index) => <li
                                    key={index}
                                    className='list-disc list-inside text-xl text-neutral'>{list}</li>)
                            }
                        </ul>
                        <div>
                            <h2 className='text-xl font-bold text-primary'>Technologies:</h2>
                            <p className='text-md text-neutral text-justify'>{project?.technology}</p>
                        </div>
                        <div className="flex flex-wrap mb-6 gap-10 mt-10">
                            <a
                                href={project?.live_link}
                                target='_blank'
                                rel="noreferrer"
                                className="py-2 px-4 rounded border-2 border-primary text-neutral">
                                Live Link
                            </a>
                            <a
                                href={project?.client_code}
                                target='_blank'
                                rel="noreferrer"
                                className="py-2 px-4 rounded border-2 border-primary text-neutral">
                                Client-Side Code
                            </a>
                            {project?.server_code && <a
                                href={project?.server_code}
                                target='_blank'
                                rel="noreferrer"
                                className="py-2 px-4 rounded border-2 border-primary text-neutral">
                                Server-side Code
                            </a>}
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
};

export default SingleProject;