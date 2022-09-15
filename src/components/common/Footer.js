import React from 'react';
import { useState } from 'react';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { RiArrowUpSLine } from 'react-icons/ri';

const Footer = () => {
    const [hide, setHide] = useState(true)

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            setHide(false)
        } else {
            setHide(true)
        }
    }
    const goTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }
    return (
        <footer className="footer footer-center p-10 bg-accent text-base-content gap-3">
            <div className='md:order-2'>
                <div>
                    <ul className='flex gap-8 text-3xl text-secondary'>
                        <li><a target='_blank' rel="noreferrer" href="https://github.com/forhadmia1"><AiFillGithub /></a></li>
                        <li><a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/md-forhad-mia/"><ImLinkedin2 /></a></li>
                        <li><a target='_blank' rel="noreferrer" href="https://twitter.com/dev_forhad"><AiOutlineTwitter /></a></li>
                        <li><a target='_blank' rel="noreferrer" href="https://www.facebook.com/Dr.ForhadHasan"><BsFacebook /></a></li>
                    </ul>
                </div>
                <div>
                    <p className='text-lg text-primary'>Copyright &copy; 2022 | Forhad Mia</p>
                </div>
            </div>
            <div className='mb-5'>
                <div className='flex justify-start w-full order-1'>
                    <div className='flex gap-4'>
                        <p className='bg-base-100 py-1 px-4 rounded text-secondary text-xl border-b-4 border-primary'>ধন্যবাদ</p>
                        <p className='bg-base-100 py-1 px-4 rounded text-secondary text-xl border-b-4 border-primary'>Thanks</p>
                    </div>
                </div>
                <div className='flex justify-end w-full order-3 md:mt-0 fixed bottom-4 right-4 '>
                    <div onClick={goTop} className={`bg-primary p-1 text-4xl duration-300 text-secondary rounded cursor-pointer ${hide ? 'opacity-0' : 'opacity-100'}`}>
                        <RiArrowUpSLine />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;