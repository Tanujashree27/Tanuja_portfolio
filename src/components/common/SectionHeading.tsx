import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center' 
}) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
        <span className="text-white">{title}</span>
        <span className="text-primary-500">.</span>
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      <div className={`h-1 w-20 bg-primary-500 mt-4 rounded ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;