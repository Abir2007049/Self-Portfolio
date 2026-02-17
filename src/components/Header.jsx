import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            My Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-gray-900 transition">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900 transition">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-600 hover:text-gray-900">About</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 text-gray-600 hover:text-gray-900">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 text-gray-600 hover:text-gray-900">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-600 hover:text-gray-900">Contact</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
