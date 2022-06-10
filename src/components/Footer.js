import React from 'react';
import { FaGithubSquare, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="footer footer-center p-10 bg-base-100 text-base-content rounded">
            {/* <div class="grid grid-flow-col gap-4 ">
                <Link to='/' class="link link-hover">Home</Link>
                <Link to='/blogs' class="link link-hover">Blog</Link>
                <Link to='/about' class="link link-hover">About</Link>
                <Link to='/projects' class="link link-hover">Project</Link>
                <Link to='/contact' class="link link-hover">Contact</Link>
            </div> */}
            <div>
                <h2 className='text-2xl font-bold text-primary mb-4'>Contact With Me</h2>
                <div class="grid grid-flow-col gap-5 text-2xl">
                    <a className='bg-primary hover:text-white duration-200 p-4 rounded-full shadow-2xl'><FaFacebookF /></a>
                    <a className='bg-primary hover:text-white duration-200 p-4 rounded-full shadow-2xl'><FaLinkedinIn /></a>
                    <a className='bg-primary hover:text-white duration-200 p-4 rounded-full shadow-2xl'><FiGithub /></a>
                </div>
            </div>
            <div>
                <p className='text-lg text-primary'>Copyright &copy; 2022 | Forhad Mia</p>
            </div>
        </footer>
    );
};

export default Footer;