import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#home' },
  // { name: 'About', href: '#about' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-secondary-900/90 backdrop-blur-md py-2 shadow-md' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#home"
              className="text-xl font-bold text-white font-heading"
            >
              <span className="text-white">Tanuja</span>
              <span className="text-primary-500">.</span>
              <span className="text-xs uppercase tracking-widest ml-1 text-primary-300">Dev</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-200 hover:text-primary-400 transition-colors px-1"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1JfrJmqWwJr3N4DTCFPEMPyWmJiC1f_uP/view?usp=sharing"
              className="text-sm font-medium px-4 py-2 rounded-md bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-secondary-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden h-screen bg-secondary-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-4 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-secondary-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1JfrJmqWwJr3N4DTCFPEMPyWmJiC1f_uP/view?usp=sharing"
              className="block px-3 py-4 rounded-md text-base font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;