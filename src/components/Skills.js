import React from 'react';
import { BsBookHalf } from 'react-icons/bs'
import { FaBook } from 'react-icons/fa'
import SectionTitle from './SectionTitle';

const Skills = () => {
    return (
        <section id='my_skills'>
            <SectionTitle width={140}>MY SKILLS</SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-12'>
                <div className=' shadow-xl p-6 rounded-lg text-neutral'>
                    <h2 className='text-4xl font-bold text-primary mb-2 uppercase'>Education</h2>
                    <hr />
                    <div className='mt-10'>
                        <BsBookHalf className='text-4xl mb-2 text-primary' />
                        <h2 className='text-2xl font-bold'>Bachelor of Arts</h2>
                        <p className='font-bold text-slate-500'>From 2018 to present</p>
                    </div>
                    <div className='mt-10'>
                        <FaBook className='text-4xl mb-2 text-primary' />
                        <h2 className='text-2xl font-bold'>Complete Web Development Course With Jhankar Mahbub</h2>
                        <p className='font-bold text-slate-500'>From January 2022 to May 2022</p>
                    </div>
                </div>
                <div className=' shadow-xl p-6 rounded-lg text-neutral'>
                    <h2 className='text-4xl font-bold text-primary mb-2 uppercase'>Skills</h2>
                    <hr />
                    <div className='mt-4'>
                        <h2 className='text-xl font-bold '>Expertice:</h2>
                        <ul className='flex list-disc gap-4 list-inside flex-wrap font-semibold'>
                            <li>React.js</li>
                            <li>React Router</li>
                            <li>Es6</li>
                            <li>JavaScript</li>
                            <li>React Bootstrap</li>
                            <li>Rest API</li>
                            <li>Html 5</li>
                            <li>CSS 3</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-xl font-bold '>Comfortable:</h2>
                        <ul className='flex list-disc gap-4 list-inside flex-wrap font-semibold'>
                            <li>Express.js</li>
                            <li>Node.js</li>
                            <li>Mongo Db</li>
                            <li>Firebase</li>
                            <li>Daisy UI</li>
                            <li>Redux</li>
                        </ul>
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-xl font-bold '>Familiar:</h2>
                        <ul className='flex list-disc gap-4 list-inside flex-wrap font-semibold'>
                            <li>Next.js</li>
                            <li>TypeScript</li>
                            <li>Sass</li>
                        </ul>
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-xl font-bold '>Tools:</h2>
                        <ul className='flex list-disc gap-4 list-inside flex-wrap font-semibold'>
                            <li> Vs Code</li>
                            <li>Netlify</li>
                            <li>Npm</li>
                            <li>Heroku</li>
                            <li>Chrome Dev Tool</li>
                            <li>Git</li>
                            <li>Github</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;