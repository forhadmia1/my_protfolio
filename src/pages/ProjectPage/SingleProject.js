import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../../hooks/useProjects';
import { BsFillCheckCircleFill } from 'react-icons/bs';

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
        <div class="container my-24 px-6 mx-auto">
            <section class="mb-32 text-gray-800 text-center md:text-left">
                <div class="block rounded-lg shadow-lg bg-white">
                    <div class="flex flex-wrap items-center">
                        <div class="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                            <img src={project?.image} alt="Trendy Pants and Shoes"
                                class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                        </div>
                        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                            <div class="px-6 py-12 md:px-12">
                                <h2 class="text-3xl font-bold mb-6 pb-2">{project?.name}</h2>
                                <ul class="text-gray-600 mb-6 pb-2">
                                    {
                                        project?.description.map(list => <li className='list-disc list-inside text-xl'>{list}</li>)
                                    }
                                </ul>
                                <div>
                                    <h2 className='text-xl font-bold'>Technologies:</h2>
                                    <p className='text-md font-semibold'>{project?.technology}</p>
                                </div>
                                <div class="flex flex-wrap mb-6 gap-10 mt-10">
                                    <a
                                        href={project?.live_link}
                                        target='_blank'
                                        rel="noreferrer"
                                        class="inline-block px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                                        Live Link
                                    </a>
                                    <a
                                        href={project?.client_code}
                                        target='_blank'
                                        rel="noreferrer"
                                        class="inline-block px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                                        Client-Side Code
                                    </a>
                                    {project?.server_code && <a
                                        href={project?.server_code}
                                        target='_blank'
                                        rel="noreferrer"
                                        class="inline-block px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
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