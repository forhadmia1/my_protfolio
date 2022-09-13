import React, { useEffect } from 'react';
import { FaReact, FaLaptopCode } from 'react-icons/fa';
import { BiCodeCurly } from 'react-icons/bi';
import AOS from 'aos';
import SectionTitle from './SectionTitle';

const Services = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <div className='mt-16'>
            <SectionTitle width={125}>Services</SectionTitle>
            <div className='grid grid-cols-1 gap-10 md:gap-5 md:grid-cols-3 md:px-12 px-4 mt-16'>
                <div data-aos="zoom-in-up" className="card bg-base-100 shadow-xl hover:bg-slate-800 hover:bg-opacity-80 hover:text-white duration-500">
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
                <div data-aos="zoom-in-up" className="card bg-base-100 shadow-xl hover:bg-slate-800 hover:bg-opacity-80 hover:text-white duration-500">
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
                <div data-aos="zoom-in-up" className="card bg-base-100 shadow-xl hover:bg-slate-800 hover:bg-opacity-80 hover:text-white duration-500">
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