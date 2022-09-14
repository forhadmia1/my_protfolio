import React, { useEffect } from 'react';
import { FaReact } from 'react-icons/fa';
import AOS from 'aos';
import SectionTitle from './SectionTitle';

const Services = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <section id='services' className='mt-16'>
            <SectionTitle width={140}>SERVICES</SectionTitle>
            <div className='grid grid-cols-1 gap-10 md:gap-5 lg:grid-cols-4 md:grid-cols-2 md:px-12 px-4 mt-16'>
                <div data-aos="zoom-in-up" className="card h-60 bg-accent px-6 rounded flex justify-center">
                    <div>
                        <FaReact className='text-6xl text-primary' />
                        <h2 className="text-3xl font-semibold text-neutral mt-4">React Developer</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className="card h-60 bg-accent px-6 rounded flex justify-center">
                    <div>
                        <FaReact className='text-6xl text-primary' />
                        <h2 className="text-3xl font-semibold text-neutral mt-4">React Developer</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className="card h-60 bg-accent px-6 rounded flex justify-center">
                    <div>
                        <FaReact className='text-6xl text-primary' />
                        <h2 className="text-3xl font-semibold text-neutral mt-4">React Developer</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className="card h-60 bg-accent px-6 rounded flex justify-center">
                    <div>
                        <FaReact className='text-6xl text-primary' />
                        <h2 className="text-3xl font-semibold text-neutral mt-4">React Developer</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;