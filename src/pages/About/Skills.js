import React from 'react';
import Footer from '../../components/Footer';
import { BsBookHalf } from 'react-icons/bs'
import { FaBook } from 'react-icons/fa'

const Skills = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 mb-10 px-6 md:px-12'>
                <div className=' shadow-xl p-6 rounded-lg'>
                    <h2 className='text-4xl font-bold text-primary mb-2 uppercase'>Education</h2>
                    <hr />
                    <div className='mt-10'>
                        <BsBookHalf className='text-4xl mb-2 text-primary' />
                        <h2 className='text-2xl font-bold'>Diploma In Medical Assistant.</h2>
                        <p className='font-bold text-slate-500'>From 2015 to 2018</p>
                    </div>
                    <div className='mt-10'>
                        <FaBook className='text-4xl mb-2 text-primary' />
                        <h2 className='text-2xl font-bold'>Complete Web Development Course With Jhankar Mahbub</h2>
                        <p className='font-bold text-slate-500'>From January 2022 to May 2022</p>
                    </div>
                </div>
                <div className=' shadow-xl p-6 rounded-lg'>
                    <h2 className='text-4xl font-bold text-primary mb-2 uppercase'>Skills</h2>
                    <hr />
                    <div className='mt-4'>
                        <h2 className='text-xl font-bold '>Expertice:</h2>
                        <ul className='flex list-disc gap-4 list-inside flex-wrap'>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                        </ul>
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-xl font-bold '>Comfortable:</h2>
                        <ul className='flex list-disc gap-4 list-inside flex-wrap'>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                        </ul>
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-xl font-bold '>Familiar:</h2>
                        <ul className='flex list-disc gap-4 list-inside flex-wrap'>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                        </ul>
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-xl font-bold '>Tools:</h2>
                        <ul className='flex list-disc gap-4 list-inside flex-wrap'>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Skills;