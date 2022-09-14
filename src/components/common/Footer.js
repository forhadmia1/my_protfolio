import React from 'react';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { RiArrowUpSLine } from 'react-icons/ri';

const Footer = () => {
    const goTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }
    return (
        <footer className="footer footer-center p-10 bg-accent text-base-content gap-3 grid md:grid-cols-3">
            <div className='md:order-2'>
                <div>
                    <ul className='flex gap-8 text-3xl text-secondary'>
                        <li><AiFillGithub /></li>
                        <li><ImLinkedin2 /></li>
                        <li><AiOutlineTwitter /></li>
                        <li><BsFacebook /></li>
                    </ul>
                </div>
                <div>
                    <p className='text-lg text-primary'>Copyright &copy; 2022 | Forhad Mia</p>
                </div>
            </div>
            <div className='flex justify-start w-full order-1'>
                <div className='flex gap-4'>
                    <p className='bg-base-100 py-1 px-4 rounded text-secondary text-xl border-b-4 border-primary'>ধন্যবাদ</p>
                    <p className='bg-base-100 py-1 px-4 rounded text-secondary text-xl border-b-4 border-primary'>Thanks</p>
                </div>
            </div>
            <div className='flex justify-end w-full order-3 mt-[-63px] md:mt-0'>
                <div onClick={goTop} className='bg-primary p-1 text-4xl text-secondary rounded cursor-pointer'>
                    <RiArrowUpSLine />
                </div>
            </div>
        </footer>
    );
};

export default Footer;