import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div class="grid grid-flow-col gap-4 text-white">
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Projects</a>
                <a class="link link-hover">Skill</a>
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