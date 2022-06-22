import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-base-100 md:px-12 sticky top-0 z-50'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <Link to='/' className="md:pl-0 text-primary font-bold btn btn-ghost normal-case text-4xl">Forhad.</Link>
                </div>
                <div className='w-full justify-end'>
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-48 right-1">
                            <li className='items-end'><Link className='w-full justify-end' to='/home'><span>Home</span></Link></li>
                            <li className='items-end'><Link className='w-full justify-end' to='/blogs'><span>Blogs</span></Link></li>
                            <li className='items-end'><Link className='w-full justify-end' to='/projects'><span>Projects</span></Link></li>
                            <li className='items-end'><Link className='w-full justify-end' to='/about'><span>About</span></Link></li>
                            <li className='items-end'><Link className='w-full justify-end' to='/contact'><span>Contact</span></Link></li>
                            <li><a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/15ka36LpmP1yD4NX7_7Iw7iydKCtjP3fa/view?usp=sharing' className="btn bg-primary hover:bg-dark hover:text-white border-none px-4 font-semibold" download>Resume</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-semibold">
                        <li>
                            <NavLink to='/home' className={({ isActive }) => isActive ? 'text-primary' : ''}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/blogs' className={({ isActive }) => isActive ? 'text-primary' : ''}>Blogs</NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-primary' : ''}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({ isActive }) => isActive ? 'text-primary' : ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-primary' : ''}>Contact</NavLink>
                        </li>
                        <li><a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/15ka36LpmP1yD4NX7_7Iw7iydKCtjP3fa/view?usp=sharing' className="btn bg-primary hover:bg-dark hover:text-white border-none px-4 font-semibold" download>Resume</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;