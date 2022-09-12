import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-base-100 md:px-12 py-4 sticky top-0 z-50'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <Link to='/' className="md:pl-0 text-primary font-bold btn btn-ghost normal-case text-4xl">
                        <div className='relative'>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="44" height="50" viewbox="0 0 43.30127018922193 50" ><path fill="#00cf5d" d="M17.32050807568877 2.4999999999999996Q21.650635094610966 0 25.98076211353316 2.4999999999999996L38.97114317029974 10Q43.30127018922193 12.5 43.30127018922193 17.5L43.30127018922193 32.5Q43.30127018922193 37.5 38.97114317029974 40L25.98076211353316 47.5Q21.650635094610966 50 17.32050807568877 47.5L4.330127018922194 40Q0 37.5 0 32.5L0 17.5Q0 12.5 4.330127018922194 10Z"></path></svg>
                            <span className='absolute top-2 text-accent font-semibold left-3.5'>F</span>
                        </div>
                    </Link>
                </div>
                <div className='w-full justify-end'>
                    <div className="dropdown">
                        <div className='w-10 h-10 bg-primary flex justify-center items-center rounded lg:hidden'>
                            <label tabIndex="0" className=" text-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        </div>
                        <ul tabIndex="0" className="dropdown-content mt-1 py-4 shadow bg-accent text-secondary rounded-box w-48 right-0 px-6 flex gap-3 flex-col">
                            <li className='items-end'><Link className='w-full justify-end' to='/home'><span>Home</span></Link></li>
                            <li className='items-end'><Link className='w-full justify-end' to='/blogs'><span>Blogs</span></Link></li>
                            <li className='items-end'><Link className='w-full justify-end' to='/projects'><span>Projects</span></Link></li>
                            <li className='items-end'><Link className='w-full justify-end' to='/about'><span>About</span></Link></li>
                            <li className='items-end'><Link className='w-full justify-end' to='/contact'><span>Contact</span></Link></li>
                            <li className='mt-2'>
                                <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1kpp1hjuDqpay1NWYpmAikoSdOwRLiD0C/view?usp=sharing' className="btn-outline-primary  border-primary p-1 border-2 px-6 font-semibold text-secondary rounded" download>Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu-horizontal gap-10 p-0 font-semibold">
                        <li>
                            <NavLink to='/home' className={({ isActive }) => isActive ? 'text-primary' : 'text-secondary'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/blogs' className={({ isActive }) => isActive ? 'text-primary' : 'text-secondary'}>Blogs</NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-primary' : 'text-secondary'}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({ isActive }) => isActive ? 'text-primary' : 'text-secondary'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-primary' : 'text-secondary'}>Contact</NavLink>
                        </li>
                        <li>
                            <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1kpp1hjuDqpay1NWYpmAikoSdOwRLiD0C/view?usp=sharing' className="btn-outline-primary  border-primary p-1 border-2 px-6 font-semibold text-secondary rounded" download>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;