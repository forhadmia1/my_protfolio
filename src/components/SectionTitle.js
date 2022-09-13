import React from 'react';

const SectionTitle = ({ children }) => {
    return (
        <div className='mt-10 mb-6'>
            <p className='text-2xl font-semibold text-center text-secondary'>{children}</p>
        </div>
    );
};

export default SectionTitle;