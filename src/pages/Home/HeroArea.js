import React from 'react';
import { saveAs } from "file-saver";
import heroImg from '../../Assets/Image/IMG20190904153853-01.png'

const HeroArea = () => {
    const saveFile = () => {
        saveAs(
            "https://drive.google.com/file/d/15ka36LpmP1yD4NX7_7Iw7iydKCtjP3fa/view",
            "resume_of_Md_Forhad_Mia.pdf"
        );
    };
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 mt-10'>
            <div>
                <img className='w-full md:h-[80vh]' src={heroImg} alt="Forhad hasan Pic" />
            </div>
            <div className='flex items-center md:ml-[-80px] md:w-[680px] w-full'>
                <div className='bg-slate-800 py-16 md:px-20 px-4'>
                    <h2 className='text-4xl font-bold mb-4 text-white'>Forhad Mia</h2>
                    <h3 className='mb-4 text-2xl'>I am a web devloper</h3>
                    <p className='mb-4'>
                        I am very passionate about working with programming and related tasks. I am very curious to explore new technologies. I am hardworking and a reliable person.
                    </p>
                    <button class="btn btn-outline btn-secondary px-12 rounded-3xl border-2  " onClick={saveFile}>Download Resume</button>
                </div>
            </div>
        </section>
    );
};

export default HeroArea;