import React from 'react';

const SectionTitle = ({ children, width }) => {
    return (
        <div className='flex justify-center'>
            <div className='mt-10 mb-6 '>
                <p className='text-2xl font-semibold text-center text-secondary relative z-20'>{children}</p>

                <svg className='absolute mt-[-20px]' width={width + 20} height="35" xmlns="http://www.w3.org/2000/svg">
                    <path id="pathItem"
                        d={`M5 20 Q 70 0 ${width} 20`}
                        stroke="#00cf5d"
                        fill="transparent"
                        stroke-width="7"
                        stroke-linecap="round" />
                </svg>
            </div>
        </div>
    );
};

export default SectionTitle;