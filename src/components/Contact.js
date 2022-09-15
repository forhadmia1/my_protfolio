import React, { useEffect } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import businesspic from '../Assets/Image/Business.jpg'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import AOS from 'aos';
import SectionTitle from './SectionTitle';
import swal from 'sweetalert';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s57s2uw', 'template_qmx47hk', form.current, 'NoDhDZ5D8YebXhkbu')
            .then((result) => {
                swal("Good job!", "Successfully send email!", "success", {
                    buttons: false,
                    timer: 2000,
                });
                form.current.reset()
            }, (error) => {
                swal("Try Again", "Someting went wrong!", "error", {
                    buttons: false,
                    timer: 2000,
                });
                form.current.reset()
            });
    };
    return (
        <section id='contact' className='my-10 overflow-hidden pb-10'>
            <SectionTitle width={200}>CONTACT ME</SectionTitle>
            <div className='md:grid md:grid-cols-2 mt-10 gap-10 p-4 lg:flex lg:flex-row flex-col md:px-12'>
                <div data-aos="fade-right" className='h-full flex justify-center'>
                    <div className="card rounded h-full lg:w-96 md:w-96 w-full bg-accent shadow-2xl">
                        <div className='p-4'>
                            <figure><img className='rounded-lg w-full' src={businesspic} alt='business' /></figure>
                        </div>
                        <div className='px-4 pb-8 mt-4'>
                            <h2 className="card-title font-bold text-4xl text-secondary">Forhad Mia</h2>
                            <h4 className='text-lg text-primary font-semibold'>Web Developer ( MERN Stack )</h4>
                            <p className='mt-4 text-neutral'>
                                I am a junior web developer. Are you looking for a hardworking person? I am here to help you. Thanks
                            </p>
                            <div className='flex items-center mt-4'>
                                <MdOutlineAlternateEmail className='mr-2 text-purple-500' />
                                <p className='text-primary font-bold'>forhadmia416@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className='lg:flex-grow bg-accent rounded shadow-2xl p-4 lg:mt-0 md:mt-0 mt-5'>
                    <form ref={form} onSubmit={sendEmail} className=' w-full flex flex-col'>
                        <label className="label">
                            <span className="label-text text-secondary text-lg font-semibold">Name:</span>
                        </label>
                        <input type="text" name="user_name" placeholder="Enter your name" className="input input-bordered w-full " required />
                        <label className="label mt-2">
                            <span className="label-text text-secondary text-lg font-semibold">Email:</span>
                        </label>
                        <input type="email" name="user_email" placeholder="Enter your email" className="input input-bordered w-full" required />
                        <label className="label mt-2">
                            <span className="label-text text-lg font-semibold text-secondary">Message:</span>
                        </label>
                        <textarea name="message" className="textarea textarea-bordered h-24 w-full " placeholder="Message" required></textarea>
                        <div>
                            <input className='bg-primary rounded py-3 text-secondary px-4 mt-4 cursor-pointer' type="submit" value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;