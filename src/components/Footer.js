import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer class="footer footer-center p-10 bg-base-100 text-base-content rounded">
            <div>
                <h2 className='text-2xl font-bold text-primary mb-4'>Contact With Me</h2>
                <div class="grid grid-flow-col gap-5 text-2xl">
                    <a target='_blank' rel="noreferrer" href='https://www.facebook.com/Dr.ForhadHasan' className='bg-primary hover:text-white duration-200 p-4 rounded-full shadow-2xl'><FaFacebookF /></a>
                    <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/md-forhad-mia-94b9781b6/' className='bg-primary hover:text-white duration-200 p-4 rounded-full shadow-2xl'><FaLinkedinIn /></a>
                    <a target='_blank' rel="noreferrer" href='https://github.com/forhadmia1' className='bg-primary hover:text-white duration-200 p-4 rounded-full shadow-2xl'><FiGithub /></a>
                </div>
            </div>
            <div>
                <p className='text-lg text-primary'>Copyright &copy; 2022 | Forhad Mia</p>
            </div>
        </footer>
    );
};

export default Footer;