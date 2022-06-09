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
        <section className='grid grid-cols-1 md:grid-cols-2 py-20 px-12 mt-10 justify-items-center place-items-center'>
            <div className='flex items-center'>
                <div>
                    <p className='text-xl mb-2'>Hello, I am</p>
                    <h2 className='text-6xl font-bold mb-4 text-white'>Forhad Mia</h2>
                    <h3 className='mb-4 text-2xl banner-title font-semibold'>I am a</h3>
                    <p className='mb-4'>
                        I am very passionate about working with programming and related tasks. I am very curious to explore new technologies. I am hardworking and a reliable person.
                    </p>
                    <button class="btn btn-outline btn-secondary px-12 rounded-3xl border-2  " onClick={saveFile}>Download Resume</button>
                </div>
            </div>
            <div className='p-3 rounded-full bg-slate-400 w-fit'>
                <img className='w-80 h-80 rounded-full' src={heroImg} alt="" />
            </div>
        </section>

    );
};

export default HeroArea;