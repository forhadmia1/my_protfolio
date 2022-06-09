import React from 'react';
import heroImg from '../Assets/Image/IMG20190904153853-01.png'

const HeroArea = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <img className='w-full md:h-[90vh]' src={heroImg} alt="Forhad hasan Pic" />
            </div>
            <div className='flex items-center md:ml-[-100px] md:w-[680px] w-full'>
                <div className='bg-slate-800 py-16 md:px-20 px-4'>
                    <h2 className='text-4xl font-bold mb-4 text-white'>Forhad Mia</h2>
                    <h3 className='mb-4 text-2xl'>I am a web devloper</h3>
                    <p className='mb-4'>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>
                    <button class="btn btn-outline btn-secondary px-12 rounded-3xl border-2  ">Download Resume</button>
                </div>
            </div>
        </section>
    );
};

export default HeroArea;