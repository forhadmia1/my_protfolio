import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../../hooks/useProjects';

const SingleProject = () => {
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
        <div className="container my-20 px-6 mx-auto">
            <section className="mb-32 text-gray-800 text-center md:text-left">
                <div className="block rounded-lg shadow-lg bg-white">
                    <div className="flex flex-wrap items-center">
                        <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                            <div className='flex justify-center items-center w-full gap-5'>
                                <div className="carousel w-full h-full">
                                    <div id="slide1" className="carousel-item relative w-full">
                                        <img src={project?.image[0]} className="w-full md:h-[570px]" alt='' />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide4" className="btn btn-circle">❮</a>
                                            <a href="#slide2" className="btn btn-circle">❯</a>
                                        </div>
                                    </div>
                                    <div id="slide2" className="carousel-item relative w-full">
                                        <img src={project?.image[1]} className="w-full md:h-[570px]" alt='' />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide1" className="btn btn-circle">❮</a>
                                            <a href="#slide3" className="btn btn-circle">❯</a>
                                        </div>
                                    </div>
                                    <div id="slide3" className="carousel-item relative w-full">
                                        <img src={project?.image[2]} className="w-full md:h-[570px]" alt='' />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href="#slide2" className="btn btn-circle">❮</a>
                                            <a href="#slide4" className="btn btn-circle">❯</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                            <div className="px-6 py-12 md:px-12">
                                <h2 className="text-3xl font-bold mb-6 pb-2">{project?.name}</h2>
                                <ul className="text-gray-600 mb-6 pb-2 text-left">
                                    {
                                        project?.description.map((list, index) => <li
                                            key={index}
                                            className='list-disc list-inside text-xl'>{list}</li>)
                                    }
                                </ul>
                                <div>
                                    <h2 className='text-xl font-bold'>Technologies:</h2>
                                    <p className='text-md font-semibold'>{project?.technology}</p>
                                </div>
                                <div className="flex flex-wrap mb-6 gap-10 mt-10">
                                    <a
                                        href={project?.live_link}
                                        target='_blank'
                                        rel="noreferrer"
                                        className="inline-block px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                                        Live Link
                                    </a>
                                    <a
                                        href={project?.client_code}
                                        target='_blank'
                                        rel="noreferrer"
                                        className="inline-block px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                                        Client-Side Code
                                    </a>
                                    {project?.server_code && <a
                                        href={project?.server_code}
                                        target='_blank'
                                        rel="noreferrer"
                                        className="inline-block px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                                        Server-side Code
                                    </a>}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SingleProject;