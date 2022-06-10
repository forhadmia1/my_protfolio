import React from 'react';
import { saveAs } from "file-saver";
import heroImg from '../../Assets/Image/IMG20190904153853-01.png'
import '../../App.css';

const HeroArea = () => {
    const saveFile = () => {
        saveAs(
            "https://drive.google.com/file/d/15ka36LpmP1yD4NX7_7Iw7iydKCtjP3fa/view",
            "resume_of_Md_Forhad_Mia.pdf"
        );
    };
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
                        <button class="btn bg-primary border-none hover:bg-dark text-black hover:text-white rounded-none px-4 border-2 font-semibold" onClick={saveFile}>Download Resume</button>
                        <button class="btn bg-dark hover:bg-primary border-none text-white hover:text-black rounded-none px-10 border-2 font-semibold">About Me</button>
                    </div>
                </div>
            </div>
            <div className='p-3 rounded-full bg-slate-400 w-fit order-1 md:order-3'>
                <img className='w-80 h-80 rounded-full' src={heroImg} alt="" />
            </div>
        </section>

    );
};

export default HeroArea;