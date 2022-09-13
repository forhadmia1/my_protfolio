import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai'
import SectionTitle from '../../components/SectionTitle';

const HeroArea = () => {
    const navigate = useNavigate()

    return (
        <section className='container md:px-12 md:h-screen md:mt-[-100px] mt-5 flex items-center flex-col md:flex-row-reverse'>
            <div className='md:text-left text-center w-full'>
                <p className='text-2xl mb-2 text-primary'>Hello, I am</p>
                <h2 className='text-5xl ml-[-2px] md:text-7xl font-bold mb-4 text-secondary'>Forhad Mia</h2>
                <h3 className='mb-4 text-xl md:text-2xl font-semibold'><span className='text-primary text-2xl'>Full Stack Developer</span></h3>
                <ul className='md:flex md:gap-3 text-secondary text-lg mt-[-15px]'>
                    <li>Web Developer</li>
                    <li><span className='text-primary mr-2 md:inline-block hidden'>|</span> Frontend Developer</li>
                    <li><span className='text-primary mr-2 md:inline-block hidden'>|</span>MERN Stack Developer</li>
                </ul>
                <div className='flex md:justify-start justify-center gap-3 md:gap-5 mt-10'>
                    <a href='https://drive.google.com/uc?export=download&id=15ka36LpmP1yD4NX7_7Iw7iydKCtjP3fa' className="p-3 text-secondary rounded bg-primary">Download Resume</a>

                    <button onClick={() => navigate('/about')} className="p-3 border-2 border-primary rounded text-secondary">About Me</button>
                </div>
            </div>
            <div>
                <SectionTitle>About Me</SectionTitle>
                <ul className='flex gap-8 md:flex-col text-4xl md:mr-28'>
                    <li><AiFillGithub /></li>
                    <li><AiFillGithub /></li>
                    <li><AiFillGithub /></li>
                    <li><AiFillGithub /></li>
                </ul>
            </div>
        </section >

    );
};

export default HeroArea;