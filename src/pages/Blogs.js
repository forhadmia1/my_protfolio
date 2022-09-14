import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col justify-center items-center h-[80vh]'>
            <h2 className='text-xl font-bold '>Cooming soon.......</h2>
            <div className='mt-10'>
                <button onClick={() => navigate('/')} className="p-3 border-2 border-primary rounded text-secondary">Back To Home</button>
            </div>
        </div>
    );
};

export default Blogs;