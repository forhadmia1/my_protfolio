import React, { useEffect } from 'react';
import { FaReact, FaCode, FaLaptopCode } from 'react-icons/fa';
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
        <section id='services' className='mb-10'>
            <SectionTitle width={140}>SERVICES</SectionTitle>
            <div className='grid grid-cols-1 gap-10 md:gap-5 lg:grid-cols-4 md:grid-cols-2 md:px-12 px-4'>
                <div data-aos="zoom-in-up" className="card h-60 bg-accent px-4 rounded flex justify-center">
                    <div>
                        <div className='flex justify-center'>
                            <FaReact className='text-6xl text-primary' />
                        </div>
                        <h2 className="text-2xl text-center font-semibold text-neutral mt-4">React Developer</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className="card h-60 bg-accent px-4 rounded flex justify-center">
                    <div>
                        <div className='flex justify-center'>
                            <FaCode className='text-6xl text-primary' />
                        </div>
                        <h2 className="text-2xl text-center font-semibold text-neutral mt-4">Web Developer</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className="card h-60 bg-accent px-4 rounded flex justify-center">
                    <div>
                        <div className='flex justify-center'>
                            <BiCodeCurly className='text-6xl text-primary' />
                        </div>
                        <h2 className="text-2xl font-semibold text-neutral mt-4 text-center">Javascript Developer</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className="card h-60 bg-accent px-4 rounded flex justify-center">
                    <div>
                        <div className='flex justify-center'>
                            <FaLaptopCode className='text-6xl text-primary' />
                        </div>
                        <h2 className="text-2xl font-semibold text-neutral mt-4 text-center">Frontend Developer</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;