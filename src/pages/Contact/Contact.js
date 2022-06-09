import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import businesspic from '../../Assets/Image/Business.jpg'
import { MdOutlineAlternateEmail } from 'react-icons/md'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current.message)

        emailjs.sendForm('service_0nolycp', 'template_qmx47hk', form.current, 'NoDhDZ5D8YebXhkbu')
            .then((result) => {
                toast.success('Message send successfully!')
            }, (error) => {
                toast.error('Failed! Try again.')
            });
    };
    return (
        <div className='my-10'>
            <div className='mb-10'>
                <h2 className='text-4xl text-center font-bold'>CONTACT</h2>
                <h3 className='text-xl text-center font-semibold'>Contat With Me</h3>
            </div>
            <div className='flex gap-10 px-4 md:flex-row flex-col'>
                <div className='h-full'>
                    <div class="card h-full w-96 bg-base-100 shadow-2xl">
                        <div className='p-4'>
                            <figure><img className='rounded-lg' src={businesspic} alt='business' /></figure>
                        </div>
                        <div className='px-4 pb-8 mt-4'>
                            <h2 class="card-title text-white text-4xl">Forhad Mia</h2>
                            <h4 className='text-lg'>Web Developer ( MERN Stack )</h4>
                            <p className='mt-4'>
                                I am a junior web developer. Are you looking for a hardworking person? I am here to help you. Thanks
                            </p>
                            <div className='flex items-center mt-4'>
                                <MdOutlineAlternateEmail className='mr-2 text-purple-500' />
                                <p className='text-white font-bold'>forhadmia416@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-grow border rounded-lg shadow-2xl border-gray-600 p-5'>
                    <form ref={form} onSubmit={sendEmail} className='text-white w-full flex flex-col'>
                        <label class="label">
                            <span class="label-text text-lg font-semibold text-white">Name:</span>
                        </label>
                        <input type="text" name="user_name" placeholder="Enter your name" class="input input-bordered w-full " required />
                        <label class="label mt-2">
                            <span class="label-text text-lg font-semibold text-white">Email:</span>
                        </label>
                        <input type="email" name="user_email" placeholder="Enter your email" class="input input-bordered w-full" required />
                        <label class="label mt-2">
                            <span class="label-text text-lg font-semibold text-white">Message:</span>
                        </label>
                        <textarea name="message" class="textarea textarea-bordered h-24 w-full " placeholder="Message" required></textarea>
                        <div>
                            <input className='btn btn-primary mt-4' type="submit" value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;