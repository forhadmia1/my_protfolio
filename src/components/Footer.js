import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div class="grid grid-flow-col gap-4 text-white">
                <Link to='/' class="link link-hover">Home</Link>
                <Link to='/blogs' class="link link-hover">Blog</Link>
                <Link to='/about' class="link link-hover">About</Link>
                <Link to='/projects' class="link link-hover">Project</Link>
                <Link to='/contact' class="link link-hover">Contact</Link>
            </div>
            <div>
                <div class="grid grid-flow-col gap-5 text-4xl">
                    <a><AiFillFacebook /></a>
                    <a><AiFillLinkedin /></a>
                    <a><FaGithubSquare /></a>
                </div>
            </div>
            <div>
                <p className='text-lg'>Copyright &copy; 2022 | Forhad Mia</p>
            </div>
        </footer>
    );
};

export default Footer;