import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/common/Footer';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='h-screen'>
            <div className='h-[67%] flex justify-center items-center flex-col'>
                <p className='text-3xl text-neutral'>Page not found!!</p>
                <button onClick={() => navigate('/')} className="p-3 border-2 border-primary rounded text-secondary mt-5">Back To Home</button>
            </div>
            <Footer />
        </div>
    );
};

export default NotFound;