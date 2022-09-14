import React from 'react';
import error from '../Assets/Image/error.jpg'

const NotFound = () => {
    return (
        <div className='h-[90vh]'>
            <img className='h-full w-full' src={error} alt="" />
        </div>
    );
};

export default NotFound;