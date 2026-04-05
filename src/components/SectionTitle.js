import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <div className="flex justify-center">
      <p className="text-3xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary relative z-20">
        {children}
      </p>
    </div>
  );
};

export default SectionTitle;
