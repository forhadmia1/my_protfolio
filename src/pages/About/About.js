import React from 'react';
import myphoto from '../../Assets/Image/IMG20190904153853-01.png'

const About = () => {
    return (
        <div className='mt-10'>
            <div className='flex justify-center flex-col items-center'>
                <div className='p-3 rounded-full bg-slate-400 w-fit'>
                    <img className='w-60 h-60 rounded-full' src={myphoto} alt="" />
                </div>
                <div className='mt-4'>
                    <h2 className='text-center text-5xl font-bold'>Md Forhad Mia</h2>
                    <h4 className='text-center text-primary font-semibold mt-2 text-2xl'>Junior Web Developer</h4>
                </div>
            </div>
            <div className='px-6 md:px-12 my-16'>
                <h2 className='text-2xl font-bold text-primary'>About Me</h2>
                <p className='text-xl text-gray-500 text-justify'>
                    Hi there,<br />
                    I am Forhad mia. I am a junior web developer. I learned HTML, CSS javascript, react.js, express.js, MongoDB, and many more. I am very much passionate about those works.
                    <br />
                    I finished web development course from complete web development course with Jhankar Mahbub. I am curious to explore new technologies. I believe that I grow in my career in this field because I am a hardworking and self-learning person.
                </p>
            </div>
        </div>
    );
};

export default About;