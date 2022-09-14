import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const goTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    const handleScroll = e => {
        e.preventDefault()
        const hash = e.target.hash
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
        <nav className='bg-base-100 md:px-12 py-2 sticky top-0 z-50'>
            <div className="navbar bg-base-100 p-0">
                <div className="navbar-start">
                    <Link onClick={goTop} to='/' className="md:pl-0 text-primary font-bold  normal-case text-4xl">
                        <div className='relative ml-2 md:ml-0'>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="44" height="50" viewbox="0 0 43.30127018922193 50" ><path fill="#00cf5d" d="M17.32050807568877 2.4999999999999996Q21.650635094610966 0 25.98076211353316 2.4999999999999996L38.97114317029974 10Q43.30127018922193 12.5 43.30127018922193 17.5L43.30127018922193 32.5Q43.30127018922193 37.5 38.97114317029974 40L25.98076211353316 47.5Q21.650635094610966 50 17.32050807568877 47.5L4.330127018922194 40Q0 37.5 0 32.5L0 17.5Q0 12.5 4.330127018922194 10Z"></path></svg>
                            <span className='absolute top-2 text-accent font-semibold left-3.5'>F</span>
                        </div>
                    </Link>
                </div>
                <div className='w-full justify-end'>
                    <div className="dropdown">
                        <div className='w-10 h-10 bg-primary flex justify-center items-center rounded lg:hidden m-3'>
                            <label tabIndex="0" className=" text-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        </div>
                        <ul tabIndex="0" className="dropdown-content mt-1 py-4 shadow bg-accent text-secondary rounded w-48 right-2 px-6 flex gap-3 flex-col">
                            <li className='items-end'><a onClick={handleScroll} href="#about_me">
                                ABOUT
                            </a></li>
                            <li className='items-end'><a onClick={handleScroll} href="#my_skills">
                                SKILLS
                            </a></li>
                            <li className='items-end'><a onClick={handleScroll} href="#services">
                                SERVICE
                            </a></li>
                            <li className='items-end'><a onClick={handleScroll} href="#portfolio">
                                PORTFOLIO
                            </a></li>
                            <li className='items-end'><a onClick={handleScroll} href="#contact">
                                CONTACT
                            </a></li>
                            <li className='items-end'><Link to='/blogs'>BLOG</Link></li>
                            <li className='mt-2'>
                                <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1kpp1hjuDqpay1NWYpmAikoSdOwRLiD0C/view?usp=sharing' className="btn-outline-primary  border-primary p-1 border-2 px-6 font-semibold text-secondary rounded" download>Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu-horizontal gap-10 p-0 text-neutral">
                        <li>
                            <a onClick={handleScroll} href="#about_me">
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a onClick={handleScroll} href="#my_skills">
                                SKILLS
                            </a>
                        </li>
                        <li>
                            <a onClick={handleScroll} href="#services">
                                SERVICE
                            </a>
                        </li>
                        <li>
                            <a onClick={handleScroll} href="#portfolio">
                                PORTFOLIO
                            </a>
                        </li>
                        <li>
                            <a onClick={handleScroll} href="#contact">
                                CONTACT
                            </a>
                        </li>
                        <li>
                            <Link to='/blogs'>BLOG</Link>
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