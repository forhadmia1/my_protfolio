import React from 'react';
import myphoto from '../Assets/Image/IMG20190904153853-01.png'
import SectionTitle from './SectionTitle';

const About = () => {
    const handleScroll = () => {
        const hash = '#my_skills'
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
        <section id='about_me' className='mt-20 md:mt-0'>
            <SectionTitle width={150}>ABOUT ME</SectionTitle>
            <div className='grid md:grid-cols-2 my-10 md:my-20'>
                <div className='flex justify-center items-center'>
                    <img className='w-80 h-80 rounded-lg grayscale hover:grayscale-0 duration-1000 hover:scale-110' src={myphoto} alt="" />
                </div>
                <div className='px-6 md:px-12 my-10'>
                    <p className='text-lg text-neutral text-justify'>
                        Hi there,<br />
                        I am Forhad mia. I am a junior web developer. I learned HTML, CSS javascript, react.js, express.js, MongoDB, and many more. I am very much passionate about those works.
                        <br />
                        I finished web development course from complete web development course with Jhankar Mahbub. I am curious to explore new technologies. I believe that I grow in my career in this field because I am a hardworking and self-learning person.
                    </p>
                    <div className='flex md:justify-start justify-center gap-3 md:gap-5 mt-10'>
                        <a href='https://drive.google.com/uc?export=download&id=15ka36LpmP1yD4NX7_7Iw7iydKCtjP3fa' className="p-3 text-secondary rounded bg-primary">Download Resume</a>

                        <button onClick={handleScroll} className="p-3 border-2 border-primary rounded text-secondary">My Skills</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;