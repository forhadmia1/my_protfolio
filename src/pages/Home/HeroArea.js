import React, { useEffect } from 'react';
import heroImg from '../../Assets/Image/IMG20190904153853-01.png'
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';

const HeroArea = () => {
    const navigate = useNavigate()

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <section className='grid grid-cols-1 gap-8 md:grid-cols-2 py-20 px-4 md:px-12 md:mt-10 justify-items-center place-items-center'>
            <div className='flex items-center order-2'>
                <div>
                    <p className='text-xl mb-2 font-semibold'>Hello, I am</p>
                    <h2 className='text-6xl font-bold mb-4 text-primary'>Forhad Mia</h2>
                    <h3 className='mb-4 text-2xl banner-title font-semibold'>I am a</h3>
                    <p className='mb-4 text-xl text-gray-500'>
                        I am very passionate about working with programming and related tasks. I am very curious to explore new technologies. I am hardworking and a reliable person.
                    </p>
                    <div className='flex gap-5'>
                        <a href='https://drive.google.com/uc?export=download&id=15ka36LpmP1yD4NX7_7Iw7iydKCtjP3fa' className="btn bg-primary border-none hover:bg-dark text-black hover:text-white rounded-none px-4 border-2 font-semibold">Download Resume</a>

                        <button onClick={() => navigate('/about')} className="btn bg-dark hover:bg-primary border-none text-white hover:text-black rounded-none px-10 border-2 font-semibold">About Me</button>
                    </div>
                </div>
            </div>
            <div data-aos="flip-right" className='p-3 rounded-full bg-slate-400 w-fit order-1 md:order-3'>
                <img className='w-80 h-80 rounded-full' src={heroImg} alt="" />
            </div>
        </section>

    );
};

export default HeroArea;