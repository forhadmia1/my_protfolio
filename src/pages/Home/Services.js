import React from 'react';
import { FaReact, FaLaptopCode } from 'react-icons/fa';
import { BiCodeCurly } from 'react-icons/bi';

const Services = () => {
    return (
        <div className='mt-16'>
            <h2 className='text-center font-bold text-4xl text-primary'>Services</h2>
            <h4 className='text-xl font-semibold text-center'>What I will do for you?</h4>
            <div className='grid grid-cols-1 gap-10 md:gap-5 md:grid-cols-3 md:px-12 px-4 mt-16'>
                <div className="card bg-base-100 shadow-xl hover:bg-fuchsia-400 hover:bg-opacity-30 duration-300">
                    <div className='px-8 pb-0 pt-4'>
                        <div className='bg-sky-400 bg-opacity-70 p-8 rounded-full w-fit'>
                            <FaReact className='text-4xl text-white' />
                        </div>
                    </div>
                    <div className="card-body py-6">
                        <h2 className="card-title text-sky-500">React Developer</h2>
                        <p>I work with certain design tools to create high-fidelity designs and prototypes. I design accessible and usable products which aid business growth.</p>
                    </div>
                    <div className='w-full h-4 bg-sky-500'>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl hover:bg-fuchsia-400 hover:bg-opacity-30 duration-300">
                    <div className='px-8 pb-0 pt-4'>
                        <div className='bg-pink-400 bg-opacity-70 p-8 rounded-full w-fit'>
                            <BiCodeCurly className='text-4xl text-white' />
                        </div>
                    </div>
                    <div className="card-body py-6 ">
                        <h2 className="card-title text-pink-500">Web Devloper</h2>
                        <p>I work with certain design tools to create high-fidelity designs and prototypes. I design accessible and usable products which aid business growth.</p>
                    </div>
                    <div className='w-full h-4 bg-pink-500'>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl hover:bg-fuchsia-400 hover:bg-opacity-30 duration-300">
                    <div className='px-8 pb-0 pt-4'>
                        <div className='bg-violet-400 bg-opacity-70 p-8 rounded-full w-fit'>
                            <FaLaptopCode className='text-4xl text-white' />
                        </div>
                    </div>
                    <div className="card-body py-6 ">
                        <h2 className="card-title text-violet-500">Front-end Developer</h2>
                        <p>I work with certain design tools to create high-fidelity designs and prototypes. I design accessible and usable products which aid business growth.</p>
                    </div>
                    <div className='w-full h-4 bg-violet-500'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;