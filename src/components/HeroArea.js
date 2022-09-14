import React from 'react';
import '../App.css';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { ImLinkedin2 } from 'react-icons/im'
import { BsFacebook } from 'react-icons/bs'
import SectionTitle from './SectionTitle';

const HeroArea = () => {
    const handleScroll = () => {
        const hash = '#about_me'
        const el = document.querySelector(hash)
        const offsetTop = el.offsetTop
        if (typeof window !== `undefined`) {
            window.scrollTo({
                top: offsetTop,
                left: 0,
                behavior: "smooth",
            })
        }
    }

    return (
        <section id='hero_section' className='container md:px-12 md:h-screen md:mt-[-100px] mt-5 flex items-center flex-col md:flex-row-reverse'>
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

                    <button onClick={handleScroll} className="p-3 border-2 border-primary rounded text-secondary">About Me</button>
                </div>
            </div>
            <div>
                <div className='md:hidden'>
                    <SectionTitle width='150'>Follow Me</SectionTitle>
                </div>
                <ul className='flex gap-8 md:flex-col text-3xl md:mr-28 text-secondary'>
                    <li><AiFillGithub /></li>
                    <li><ImLinkedin2 /></li>
                    <li><AiOutlineTwitter /></li>
                    <li><BsFacebook /></li>
                </ul>
            </div>
        </section >

    );
};

export default HeroArea;