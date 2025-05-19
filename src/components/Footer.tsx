import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative z-10 bg-secondary-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <a 
            href="#home"
            className="text-xl font-bold text-white font-heading mb-8"
          >
            <span className="text-white">Tanuja</span>
            <span className="text-primary-500">.</span>
            <span className="text-xs uppercase tracking-widest ml-1 text-primary-300">Dev</span>
          </a>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center mb-10 gap-x-8 gap-y-3">
            <a href="#home" className="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors">About</a>
            <a href="#tech-stack" className="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors">Tech Stack</a>
            <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors">Projects</a>
            <a href="#certifications" className="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors">Certifications</a>
            <a href="#education" className="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors">Education</a>
            <a href="#hobbies" className="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors">Hobbies</a>
            <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors">Contact</a>
          </nav>
          
          {/* Resume Download */}
          <a 
            href="https://drive.google.com/file/d/1JfrJmqWwJr3N4DTCFPEMPyWmJiC1f_uP/view?usp=sharing" 
            className="px-8 py-3 text-base font-medium rounded-md bg-primary-600 hover:bg-primary-700 transition-all transform hover:-translate-y-1 mb-10"
            id="resume"
          >
            Download Resume
          </a>
          
          {/* Copyright */}
          <div className="text-center text-gray-400 mb-6">
            <p className="mb-2">© {new Date().getFullYear()} Tanuja Shree. All rights reserved.</p>
            <p className="flex items-center justify-center text-sm">
              Made with <Heart size={14} className="mx-1 text-red-500" /> using React, Tailwind CSS & TypeScript
            </p>
          </div>
          
          {/* Back to top button */}
          <button
            className="p-3 rounded-full bg-primary-600 hover:bg-primary-700 transition-colors"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;